import json
import logging
import os
from decimal import Decimal

import boto3

logger   = logging.getLogger()
logger.setLevel(logging.INFO)

dynamodb = boto3.resource('dynamodb')
table    = dynamodb.Table(os.environ['TABLE_NAME'])

ALLOWED_TYPES = {'progress', 'sympathy'}

DEFAULTS = {
    'progress': {'completed': []},
    'sympathy': {'value': 50},
}

MAX_BODY_BYTES = 4096


def decimal_to_native(obj):
    if isinstance(obj, Decimal):
        return int(obj) if obj % 1 == 0 else float(obj)
    raise TypeError


def handler(event, context):
    method = event['requestContext']['http']['method']
    path   = event['rawPath'].rstrip('/')

    data_type = path.split('/')[-1]
    if data_type not in ALLOWED_TYPES:
        return err(400, f'Unknown data type: {data_type}')

    # userId comes from JWT sub claim injected by API Gateway JWT authorizer
    user_id = (
        event.get('requestContext', {})
             .get('authorizer', {})
             .get('jwt', {})
             .get('claims', {})
             .get('sub')
    )
    if not user_id:
        return err(401, 'Unauthorized')

    pp        = event.get('pathParameters', {})
    module_id = pp.get('moduleId', 'unknown')

    pk = f'USER#{user_id}'
    sk = f'MODULE#{module_id}#{data_type}'

    logger.info({'method': method, 'module': module_id, 'type': data_type, 'user': user_id[:8]})

    if method == 'GET':
        result = table.get_item(Key={'pk': pk, 'sk': sk})
        data   = result.get('Item', {}).get('data', DEFAULTS[data_type])
        return ok(data)

    if method == 'PUT':
        raw = event.get('body') or '{}'
        if len(raw.encode()) > MAX_BODY_BYTES:
            return err(413, 'Payload too large')
        try:
            body = json.loads(raw)
        except json.JSONDecodeError:
            return err(400, 'Invalid JSON')
        if not isinstance(body, dict):
            return err(400, 'Body must be a JSON object')
        table.put_item(Item={'pk': pk, 'sk': sk, 'data': body})
        return ok({'ok': True})

    return err(405, 'Method not allowed')


def ok(body):
    return {
        'statusCode': 200,
        'headers':    {'Content-Type': 'application/json'},
        'body':       json.dumps(body, default=decimal_to_native),
    }


def err(status, msg):
    logger.warning({'error': msg, 'status': status})
    return {
        'statusCode': status,
        'headers':    {'Content-Type': 'application/json'},
        'body':       json.dumps({'error': msg}),
    }
