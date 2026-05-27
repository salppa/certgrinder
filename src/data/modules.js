export const MODULES = [
  {
    id: 'togaf',
    name: 'TOGAF',
    domain: 'Enterprise Architecture',
    mentor: 'teacher',
    hasScenarios: true,
    episodes: 5,
    badge: 'SIMULAATIO',
    color: '#6366f1',
    questionCount: 120,
  },
  {
    id: 'cloud',
    name: 'Cloud Architecture',
    domain: 'Cloud',
    mentor: 'cloud-architect',
    hasScenarios: true,
    episodes: 5,
    badge: 'SIMULAATIO',
    color: '#3b82f6',
    questionCount: 85,
  },
  {
    id: 'itsm',
    name: 'ITSM / ITIL',
    domain: 'IT Service Management',
    mentor: 'itsm-consultant',
    hasScenarios: true,
    episodes: 5,
    badge: 'SIMULAATIO',
    color: '#10b981',
    questionCount: 95,
  },
]

export const MODULE_MENTOR = Object.fromEntries(
  MODULES.map(m => [m.id, m.mentor])
)
