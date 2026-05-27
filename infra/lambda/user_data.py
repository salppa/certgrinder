import json
import os
import boto3
from decimal import Decimal

dynamodb = boto3.resource('dynamodb')
table    = dynamodb.Table(os.environ['TABLE_NAME'])


def decimal_to_native(obj):
    if isinstance(obj, Decimal):
        return int(obj) if obj % 1 == 0 else float(obj)
    raise TypeError


DEFAULTS = {
    'progress': {'completed': []},
    'sympathy': {'value': 50},
}


def handler(event, context):
    method = event['requestContext']['http']['method']
    pp     = event.get('pathParameters', {})
    user_id   = pp.get('userId',   'anonymous')
    module_id = pp.get('moduleId', 'unknown')
    path      = event['rawPath']
    data_type = path.rstrip('/').split('/')[-1]   # 'progress' | 'sympathy'

    pk = f'USER#{user_id}'
    sk = f'MODULE#{module_id}#{data_type}'

    if method == 'GET':
        result = table.get_item(Key={'pk': pk, 'sk': sk})
        data   = result.get('Item', {}).get('data', DEFAULTS.get(data_type, {}))
        return ok(data)

    if method == 'PUT':
        body = json.loads(event.get('body') or '{}')
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
    return {
        'statusCode': status,
        'headers':    {'Content-Type': 'application/json'},
        'body':       json.dumps({'error': msg}),
    }
