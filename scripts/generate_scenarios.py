#!/usr/bin/env python3
"""
CertGrinder — Scenario batch generator
Generates scenarios.js per module using Claude API.

Usage:
  export ANTHROPIC_API_KEY=sk-...
  python generate_scenarios.py --module togaf
  python generate_scenarios.py --module cloud --episodes 5 --per-episode 4
"""

import argparse
import json
import os
import sys
from pathlib import Path

try:
    import anthropic
    import httpx
except ImportError:
    print("pip install anthropic httpx")
    sys.exit(1)

MODULE_CONTEXTS = {
    "togaf": {
        "name": "TOGAF Enterprise Architecture",
        "domains": ["Architecture Vision", "Business Architecture",
                    "Information Systems", "Technology Architecture", "Governance"],
        "mentor": "teacher",
    },
    "togaf-basics": {
        "name": "TOGAF Basics",
        "domains": ["Architecture Fundamentals", "ADM Overview",
                    "Content Framework", "Reference Models", "Governance Basics"],
        "mentor": "teacher",
    },
    "archimate": {
        "name": "ArchiMate Enterprise Modelling",
        "domains": ["Motivation Layer", "Business Layer",
                    "Application Layer", "Technology Layer", "Implementation & Migration"],
        "mentor": "ea-strategist",
    },
    "cobit2019": {
        "name": "COBIT 2019 IT Governance",
        "domains": ["Governance Framework", "Management Objectives",
                    "Risk Management", "Audit & Assurance", "Performance Management"],
        "mentor": "ea-strategist",
    },
    "cloud": {
        "name": "Cloud Architecture",
        "domains": ["Cloud Strategy", "Migration", "Security",
                    "Cost Optimization", "Resilience"],
        "mentor": "cloud-architect",
    },
    "az900": {
        "name": "Microsoft Azure AZ-900",
        "domains": ["Cloud Concepts", "Azure Core Services",
                    "Security & Compliance", "Pricing & SLA", "Azure Governance"],
        "mentor": "cloud-architect",
    },
    "aws-clf-c02": {
        "name": "AWS Cloud Practitioner",
        "domains": ["Cloud Value Proposition", "AWS Core Services",
                    "Security & Compliance", "Billing & Pricing", "AWS Architecture"],
        "mentor": "cloud-architect",
    },
    "gcp-fundamentals": {
        "name": "Google Cloud Fundamentals",
        "domains": ["GCP Core Services", "Compute & Storage",
                    "Networking", "Big Data & ML", "Security & IAM"],
        "mentor": "cloud-architect",
    },
    "itsm": {
        "name": "ITSM / ITIL",
        "domains": ["Service Strategy", "Service Design", "Service Transition",
                    "Service Operation", "Continual Improvement"],
        "mentor": "itsm-consultant",
    },
    "it4it": {
        "name": "IT4IT Reference Architecture",
        "domains": ["Plan-to-Portfolio", "Requirement-to-Deploy",
                    "Request-to-Fulfill", "Detect-to-Correct", "Service Model Integration"],
        "mentor": "itsm-consultant",
    },
    "it4it-advanced": {
        "name": "IT4IT Advanced",
        "domains": ["Reference Architecture Deep Dive", "Data Model",
                    "Integration Patterns", "Service Analytics", "Automation"],
        "mentor": "itsm-consultant",
    },
    "ai-compliance": {
        "name": "AI Compliance & Ethics",
        "domains": ["AI Governance", "Data Privacy",
                    "Algorithmic Bias", "Regulatory Compliance", "Ethical AI"],
        "mentor": "ai-compliance",
    },
    "ai900": {
        "name": "Azure AI-900 Fundamentals",
        "domains": ["AI Fundamentals", "Machine Learning",
                    "Computer Vision", "NLP", "Conversational AI"],
        "mentor": "ai-compliance",
    },
    "sabsa": {
        "name": "SABSA Security Architecture",
        "domains": ["Security Architecture Framework", "Risk Assessment",
                    "Security Services Design", "Security Governance", "Security Operations"],
        "mentor": "ai-compliance",
    },
}

SCENARIO_PROMPT = """
Generate {count} crisis management scenarios for a certification training simulator.
Module: {module_name} | Episode {ep_id}: {domain}

Rules:
- Each scenario is a realistic organizational decision
- Two choices: left (conservative) and right (modern/bold)
- Neither choice should be clearly better — genuine trade-offs
- Deltas: integers -30 to +30 for r1=Cost, r2=Performance, r3=Compliance, r4=Team
- Language: Finnish

Return ONLY a JSON array:
[{{"id":"s{{n}}e{ep_id}","text":"...",
  "left":{{"label":"...","deltas":{{"r1":0,"r2":0,"r3":0,"r4":0}},"consequence":"..."}},
  "right":{{"label":"...","deltas":{{"r1":0,"r2":0,"r3":0,"r4":0}},"consequence":"..."}}}}]
"""

MONOLOGUE_PROMPT = """
Write a 2-sentence opening monologue for a {mentor} introducing Episode {ep_id}
about "{domain}" in a {module_name} simulator. Tone: professional, slightly dramatic.
Language: Finnish. Return only the monologue text.
"""


def call_claude(client, prompt, max_tokens=2048):
    r = client.messages.create(
        model="claude-opus-4-7",
        max_tokens=max_tokens,
        messages=[{"role": "user", "content": prompt}],
    )
    text = r.content[0].text.strip()
    # strip markdown code fences if present
    if text.startswith("```"):
        text = text.split("\n", 1)[-1]
        text = text.rsplit("```", 1)[0].strip()
    return text


def build_module(client, module_id, num_episodes=5, per_episode=4):
    ctx = MODULE_CONTEXTS[module_id]
    episodes = []
    for i, domain in enumerate(ctx["domains"][:num_episodes]):
        ep_id = i + 1
        print(f"  Episode {ep_id}: {domain}...", end=" ", flush=True)
        monologue = call_claude(client,
            MONOLOGUE_PROMPT.format(mentor=ctx["mentor"], ep_id=ep_id,
                                    domain=domain, module_name=ctx["name"]),
            max_tokens=200)
        raw = call_claude(client,
            SCENARIO_PROMPT.format(count=per_episode, module_name=ctx["name"],
                                   ep_id=ep_id, domain=domain))
        episodes.append({"id": ep_id, "title": domain,
                         "monologue": monologue,
                         "scenarios": json.loads(raw)})
        print("OK")
    return {"moduleId": module_id, "mentor": ctx["mentor"], "episodes": episodes}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--module",       required=True, choices=list(MODULE_CONTEXTS))
    parser.add_argument("--episodes",     type=int, default=5)
    parser.add_argument("--per-episode",  type=int, default=4)
    parser.add_argument("--out",          default=None)
    args = parser.parse_args()

    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        print("Set ANTHROPIC_API_KEY")
        sys.exit(1)

    client = anthropic.Anthropic(
        api_key=api_key,
        http_client=httpx.Client(verify=False),
    )
    out    = args.out or f"src/data/scenarios/{args.module}.js"

    print(f"Generating {args.module} ({args.episodes} eps x {args.per_episode} scenarios)...")
    data = build_module(client, args.module, args.episodes, args.per_episode)

    js = f"// Auto-generated by generate_scenarios.py\nexport default {json.dumps(data, ensure_ascii=False, indent=2)}\n"
    Path(out).parent.mkdir(parents=True, exist_ok=True)
    Path(out).write_text(js, encoding="utf-8")
    print(f"Written: {out}")


if __name__ == "__main__":
    main()
