// COBIT 2019 Foundation — 80 questions (rewritten)
// Options: ~10-13 words each, no length bias, no A)/B) prefixes
// correct: 0,1,2,3 repeating — 20× each across 80 questions

export const COBIT2019_QUESTIONS = [
  // ── GOVERNANCE FRAMEWORK (20 questions) ──────────────────────────────────────

  {
    id: 'cobit-gf-01',
    domain: 'Governance Framework',
    q: 'An organisation wants to ensure its IT investments align with business objectives and that IT risks are properly managed. Which COBIT 2019 concept describes the overall system that achieves this?',
    options: [
      'Governance System the complete set of components enabling governance of enterprise IT',
      'Management System the operational processes that execute daily IT service delivery',
      'Control Framework the detailed controls ensuring IT processes meet their objectives',
      'Audit Framework the assurance activities evaluating IT governance effectiveness',
    ],
    correct: 0,
    explanation:
      'The Governance System in COBIT 2019 is the complete set of components — principles, structures, processes, practices, and culture — that enable effective governance and management of enterprise IT.',
  },

  {
    id: 'cobit-gf-02',
    domain: 'Governance Framework',
    q: 'A board of directors wants to ensure that IT creates value, manages risk, and optimises resources on behalf of stakeholders. Which COBIT 2019 function are they performing?',
    options: [
      'Management operating IT processes to execute strategy and deliver services',
      'Governance evaluating setting direction and monitoring IT on behalf of stakeholders',
      'Audit assessing the effectiveness of IT controls and governance mechanisms',
      'Compliance ensuring IT activities conform to relevant laws and regulations',
    ],
    correct: 1,
    explanation:
      'Governance in COBIT 2019 is the board-level responsibility to evaluate stakeholder needs, set direction through policies, and monitor performance — distinct from management which executes direction.',
  },

  {
    id: 'cobit-gf-03',
    domain: 'Governance Framework',
    q: "A CEO ensures that the IT department executes the board's IT strategy, manages IT operations, and delivers IT projects on time and within budget. Which COBIT 2019 function does the CEO's IT delegation represent?",
    options: [
      'Governance evaluating setting direction and monitoring IT for stakeholders',
      'Management planning building running and monitoring IT activities as directed',
      'Audit providing independent assurance over IT governance effectiveness',
      'Risk Management identifying evaluating and responding to IT-related risks',
    ],
    correct: 1,
    explanation:
      'Management in COBIT 2019 plans, builds, runs, and monitors IT activities to execute the direction set by governance — it is the operational responsibility distinct from governance oversight.',
  },

  {
    id: 'cobit-gf-04',
    domain: 'Governance Framework',
    q: "COBIT 2019 describes governance as 'Evaluate, Direct, and Monitor'. Which of these three activities sets the strategic direction through policies and decisions?",
    options: [
      'Evaluate assessing current performance against stakeholder needs and expectations',
      'Monitor tracking performance metrics and reporting to the governing body',
      'Direct setting the strategic direction through policies and decision-making',
      'Assure providing independent confirmation that governance objectives are met',
    ],
    correct: 3,
    explanation:
      "'Direct' is the EDM activity where the governing body sets strategic direction — issuing policies, principles, and decisions that management must implement to achieve governance objectives.",
  },

  {
    id: 'cobit-gf-05',
    domain: 'Governance Framework',
    q: 'COBIT 2019 identifies six governance system components. Which component describes the people, skills, and competencies needed to support effective IT governance?',
    options: [
      'People Skills and Competencies the human resource component of governance systems',
      'Processes the structured activities that implement governance and management objectives',
      'Policies and Procedures the rules and guidelines governing IT behaviour and activities',
      'Organisational Structures the bodies and roles responsible for governance decisions',
    ],
    correct: 0,
    explanation:
      'People, Skills, and Competencies is a COBIT 2019 governance system component — it covers the human capital needed including knowledge, experience, and skills to govern and manage IT effectively.',
  },

  {
    id: 'cobit-gf-06',
    domain: 'Governance Framework',
    q: 'A governance body publishes an IT Acceptable Use Policy that all staff must follow. Which COBIT 2019 governance system component does this policy represent?',
    options: [
      'Organisational Structures bodies and roles making governance decisions formally',
      'Policies and Procedures the rules and guidelines directing IT behaviour and conduct',
      'Processes the structured activities that implement governance objectives in practice',
      'Culture Ethics and Behaviour the values and norms that shape day-to-day conduct',
    ],
    correct: 1,
    explanation:
      'Policies and Procedures are a COBIT 2019 governance system component — they are the formal rules, standards, and guidelines that direct how people and processes should behave within the organisation.',
  },

  {
    id: 'cobit-gf-07',
    domain: 'Governance Framework',
    q: 'COBIT 2019 states that governance of enterprise IT exists to create value for stakeholders. Which three interrelated goals define what value creation means in this context?',
    options: [
      'Benefits realisation risk optimisation and resource optimisation for stakeholders',
      'Strategic alignment operational efficiency and regulatory compliance for the firm',
      'IT performance business satisfaction and financial return for the shareholders',
      'Digital maturity innovation culture and technology adoption across the enterprise',
    ],
    correct: 0,
    explanation:
      'COBIT 2019 defines stakeholder value through three interrelated goals: Benefits Realisation (achieving agreed value), Risk Optimisation (managing threats and opportunities), and Resource Optimisation (responsible use of IT assets).',
  },

  {
    id: 'cobit-gf-08',
    domain: 'Governance Framework',
    q: 'Which COBIT 2019 governance system component covers the informal norms, beliefs, and day-to-day behaviours that shape how people in the organisation make IT-related decisions?',
    options: [
      'Policies and Procedures the formal rules directing behaviour in IT governance',
      'Organisational Structures the formal bodies and roles in the governance system',
      'Culture Ethics and Behaviour the values and norms influencing day-to-day actions',
      'Information the data and knowledge used to make governance and management decisions',
    ],
    correct: 2,
    explanation:
      'Culture, Ethics, and Behaviour is a COBIT 2019 governance system component — it covers the informal norms, values, and ethical standards that shape decision-making beyond formal policies.',
  },

  {
    id: 'cobit-gf-09',
    domain: 'Governance Framework',
    q: 'An IT audit committee regularly reviews IT performance reports and compliance dashboards to assess whether IT governance is achieving its objectives. Which EDM activity is this?',
    options: [
      'Evaluate assessing whether IT governance meets stakeholder needs and expectations',
      'Direct issuing policies and decisions to set IT strategic direction and priorities',
      'Monitor tracking KPIs and reporting IT performance results to the governing body',
      'Assure commissioning independent audits to validate governance objective achievement',
    ],
    correct: 0,
    explanation:
      "Evaluate in COBIT 2019's EDM model means the governing body assesses current performance and stakeholder needs — reviewing dashboards and reports to evaluate whether governance is effective is an Evaluate activity.",
  },

  {
    id: 'cobit-gf-10',
    domain: 'Governance Framework',
    q: 'COBIT 2019 recognises that different organisations face different governance challenges. Which concept allows enterprises to customise their governance system to fit their unique context?',
    options: [
      'Focus Areas allowing prioritisation of governance based on specific enterprise context',
      'Design Factors the variables that influence how governance should be configured',
      'Governance Objectives the universal goals all organisations must achieve equally',
      'Component Variants the pre-built governance templates for standard industries',
    ],
    correct: 1,
    explanation:
      'Design Factors are variables specific to each enterprise — strategy, risk profile, size, industry, and IT maturity — that influence how the COBIT governance system should be tailored and prioritised.',
  },

  {
    id: 'cobit-gf-11',
    domain: 'Governance Framework',
    q: 'Which COBIT 2019 principle states that the governance system should be built to meet the needs of all stakeholders when determining the balance of value, risk, and resources?',
    options: [
      'Meet Stakeholder Needs balancing value risk and resources for all stakeholders',
      'Cover the Enterprise End-to-End applying governance across all enterprise functions',
      'Apply a Single Integrated Framework using one coherent governance system overall',
      'Enable a Holistic Approach using all governance components working together',
    ],
    correct: 0,
    explanation:
      "'Meet Stakeholder Needs' is the first COBIT 2019 principle — the governance system must balance the needs of all stakeholders (investors, customers, regulators, employees) when creating value.",
  },

  {
    id: 'cobit-gf-12',
    domain: 'Governance Framework',
    q: 'COBIT 2019 states that governance does not apply only to IT but must cover all technology and information processing across the enterprise. Which principle does this reflect?',
    options: [
      'Meet Stakeholder Needs ensuring governance addresses all stakeholder concerns',
      'Cover the Enterprise End-to-End applying governance across all relevant functions',
      'Apply a Single Integrated Framework aligning COBIT with other governance standards',
      'Enable a Holistic Approach ensuring all six governance components work together',
    ],
    correct: 1,
    explanation:
      "'Cover the Enterprise End-to-End' means governance applies not just to the IT department but to all processing of information and technology throughout the entire enterprise.",
  },

  {
    id: 'cobit-gf-13',
    domain: 'Governance Framework',
    q: 'An enterprise adopts COBIT 2019 while also using ITIL for service management and ISO 27001 for security. Which COBIT 2019 principle supports using multiple frameworks together?',
    options: [
      'Meet Stakeholder Needs balancing the requirements of different framework users',
      'Cover the Enterprise End-to-End extending COBIT to cover all other frameworks',
      'Apply a Single Integrated Framework aligning COBIT with complementary standards',
      'Enable a Holistic Approach using all governance system components simultaneously',
    ],
    correct: 2,
    explanation:
      "'Apply a Single Integrated Framework' means COBIT aligns with relevant standards and frameworks (ITIL, ISO 27001, NIST) so an enterprise can use COBIT as an overarching governance umbrella.",
  },

  {
    id: 'cobit-gf-14',
    domain: 'Governance Framework',
    q: 'COBIT 2019 distinguishes between governance objectives and management objectives. How many governance objectives are defined in COBIT 2019?',
    options: [
      'Five governance objectives in the Evaluate Direct Monitor domain of COBIT',
      'Seven governance objectives across the governance and management domain',
      'Twelve governance objectives aligned to the twelve COBIT management domains',
      'Forty governance and management objectives in total across all COBIT domains',
    ],
    correct: 0,
    explanation:
      'COBIT 2019 defines five governance objectives in the EDM (Evaluate, Direct, Monitor) domain: EDM01 through EDM05, covering framework setting, benefits delivery, risk optimisation, resource optimisation, and stakeholder engagement.',
  },

  {
    id: 'cobit-gf-15',
    domain: 'Governance Framework',
    q: 'Which COBIT 2019 governance objective ensures that the board understands and endorses the IT governance framework and its role in delivering enterprise value?',
    options: [
      'EDM01 Ensuring Governance Framework Setting and Maintenance for the enterprise',
      'EDM02 Ensuring Benefits Delivery from IT investments and programmes',
      'EDM03 Ensuring Risk Optimisation across the enterprise IT risk portfolio',
      'EDM04 Ensuring Resource Optimisation for all enterprise IT investments',
    ],
    correct: 0,
    explanation:
      "EDM01 'Ensuring Governance Framework Setting and Maintenance' ensures that the governance approach is defined, endorsed by the governing body, and maintained to remain effective.",
  },

  {
    id: 'cobit-gf-16',
    domain: 'Governance Framework',
    q: 'COBIT 2019 uses a capability maturity model to assess how well governance and management objectives are being achieved. What does a capability level of 0 indicate?',
    options: [
      'Level 0 indicates the process is incomplete with key practices missing entirely',
      'Level 0 indicates the process is performed but is not yet managed or measured',
      'Level 0 indicates the process is established but not consistently applied always',
      'Level 0 indicates the process is optimised and continuously improving over time',
    ],
    correct: 0,
    explanation:
      'In COBIT 2019, capability level 0 (Incomplete) means the process does not achieve its purpose — key practices are largely absent or do not achieve their intended process outcomes.',
  },

  {
    id: 'cobit-gf-17',
    domain: 'Governance Framework',
    q: 'Which COBIT 2019 governance objective ensures that the board appropriately evaluates and manages the IT-related risks facing the enterprise?',
    options: [
      'EDM01 ensuring the governance framework is defined endorsed and maintained',
      'EDM02 ensuring IT benefits are delivered from portfolio and programme investments',
      'EDM03 ensuring IT risk is optimised across the enterprise risk portfolio',
      'EDM04 ensuring IT resources are used optimally and waste is minimised',
    ],
    correct: 2,
    explanation:
      "EDM03 'Ensuring Risk Optimisation' ensures the enterprise identifies, analyses, and responds to IT-related risks at a level acceptable to the governing body and aligned with risk appetite.",
  },

  {
    id: 'cobit-gf-18',
    domain: 'Governance Framework',
    q: 'A board member notes that COBIT 2019 distinguishes governance from management. Which statement correctly describes this distinction?',
    options: [
      'Governance evaluates directs and monitors; management plans builds runs and monitors',
      'Governance manages IT operations; management sets strategic IT direction for the board',
      'Both governance and management share equal responsibility for IT risk decisions',
      'Governance applies to IT only; management applies to all enterprise functions',
    ],
    correct: 0,
    explanation:
      'In COBIT 2019, Governance (EDM) evaluates stakeholder needs, sets direction, and monitors; Management (PBRM — Plan, Build, Run, Monitor) executes the direction set by governance.',
  },

  {
    id: 'cobit-gf-19',
    domain: 'Governance Framework',
    q: 'COBIT 2019 defines six categories of governance system components. Which component covers the digital and physical infrastructure that enables governance and management processes?',
    options: [
      'Processes the structured activities implementing governance and management objectives',
      'Services Infrastructure and Applications enabling all governance and management work',
      'Policies and Procedures the formal rules guiding governance and management behaviour',
      'People Skills and Competencies the human resources needed for effective governance',
    ],
    correct: 1,
    explanation:
      'Services, Infrastructure, and Applications is a COBIT 2019 governance system component — it covers the technology (tools, platforms, applications) that enables governance and management processes to operate.',
  },

  {
    id: 'cobit-gf-20',
    domain: 'Governance Framework',
    q: 'Which COBIT 2019 principle requires that governance be approached as an integrated system where all six components work together rather than in isolation?',
    options: [
      'Cover the Enterprise End-to-End applying governance across all functions',
      'Apply a Single Integrated Framework aligning with complementary standards',
      'Meet Stakeholder Needs balancing value risk and resources for all parties',
      'Enable a Holistic Approach using all governance components working together',
    ],
    correct: 3,
    explanation:
      "'Enable a Holistic Approach' means all six governance system components (processes, information, people, culture, infrastructure, policies) must work together — optimising only one while ignoring others creates gaps.",
  },

  // ── GOVERNANCE & MANAGEMENT OBJECTIVES (20 questions) ────────────────────────

  {
    id: 'cobit-gmo-01',
    domain: 'Governance & Management Objectives',
    q: 'An IT steering committee defines IT investment priorities aligned to the three-year business strategy. Which COBIT 2019 management domain does this planning activity belong to?',
    options: [
      'APO Align Plan and Organise domain managing strategy and planning activities',
      'BAI Build Acquire and Implement domain managing project and change delivery',
      'DSS Deliver Service and Support domain managing operational IT service delivery',
      'MEA Monitor Evaluate and Assess domain managing assurance and compliance',
    ],
    correct: 0,
    explanation:
      'APO (Align, Plan, and Organise) is the COBIT 2019 management domain covering IT strategy, architecture, innovation, investment, and enterprise architecture — all planning and alignment activities.',
  },

  {
    id: 'cobit-gmo-02',
    domain: 'Governance & Management Objectives',
    q: 'An IT project team selects a new ERP system, customises it, and implements it within the business. Which COBIT 2019 management domain covers this acquisition and implementation?',
    options: [
      'APO Align Plan Organise covering strategy planning and portfolio management',
      'BAI Build Acquire and Implement covering programmes projects and change delivery',
      'DSS Deliver Service and Support covering operational IT service management work',
      'MEA Monitor Evaluate Assess covering performance monitoring and compliance audit',
    ],
    correct: 1,
    explanation:
      'BAI (Build, Acquire, and Implement) covers all activities related to selecting, acquiring, building, and implementing IT solutions — including ERP selection, customisation, and deployment.',
  },

  {
    id: 'cobit-gmo-03',
    domain: 'Governance & Management Objectives',
    q: 'An IT operations team manages day-to-day service requests, resolves incidents, and maintains IT infrastructure availability. Which COBIT 2019 management domain covers these activities?',
    options: [
      'APO covering IT strategy planning architecture and enterprise alignment work',
      'BAI covering programme and project delivery and IT solution acquisition work',
      'DSS Deliver Service and Support covering IT service operations and support',
      'MEA covering performance monitoring evaluation and compliance assurance work',
    ],
    correct: 2,
    explanation:
      'DSS (Deliver, Service, and Support) covers IT operations, service desk, incident management, problem management, and all day-to-day IT service delivery and support activities.',
  },

  {
    id: 'cobit-gmo-04',
    domain: 'Governance & Management Objectives',
    q: 'An internal audit team assesses IT controls, measures process performance against benchmarks, and reports findings to the board. Which COBIT 2019 domain covers this audit activity?',
    options: [
      'APO covering planning and strategy activities for the IT management function',
      'BAI covering solution delivery and implementation quality assurance activities',
      'DSS covering operational IT service delivery and support management work',
      'MEA Monitor Evaluate and Assess covering audit compliance and performance',
    ],
    correct: 3,
    explanation:
      'MEA (Monitor, Evaluate, and Assess) covers performance monitoring, internal control evaluation, compliance with external requirements, and reporting to governance — the assurance domain.',
  },

  {
    id: 'cobit-gmo-05',
    domain: 'Governance & Management Objectives',
    q: 'Which COBIT 2019 management objective ensures that IT-related risks are identified, analysed, and responded to in a way that balances risk with business reward?',
    options: [
      'APO12 Managed Risk systematically identifying analysing and responding to IT risks',
      'APO11 Managed Quality ensuring IT services and products meet quality standards',
      'APO13 Managed Security protecting information assets from threats and vulnerabilities',
      'APO14 Managed Data treating data as a strategic asset across the enterprise',
    ],
    correct: 0,
    explanation:
      'APO12 Managed Risk is the COBIT 2019 management objective for IT risk management — it covers risk identification, analysis, risk response, and integration with enterprise risk management.',
  },

  {
    id: 'cobit-gmo-06',
    domain: 'Governance & Management Objectives',
    q: 'An organisation defines an enterprise architecture framework to guide all IT investment and design decisions. Which COBIT 2019 management objective covers enterprise architecture?',
    options: [
      'APO01 Managed IT Management Framework setting up IT management structures',
      'APO02 Managed Strategy defining IT strategy aligned to business objectives',
      'APO03 Managed Enterprise Architecture defining architecture and design standards',
      'APO04 Managed Innovation identifying and adopting new technologies strategically',
    ],
    correct: 2,
    explanation:
      'APO03 Managed Enterprise Architecture ensures IT investments are guided by an architecture framework — defining principles, standards, and a roadmap that aligns IT design decisions with business strategy.',
  },

  {
    id: 'cobit-gmo-07',
    domain: 'Governance & Management Objectives',
    q: 'A company ensures all IT suppliers are selected through a fair procurement process, contracts are in place, and supplier performance is monitored. Which COBIT 2019 objective manages this?',
    options: [
      'APO08 Managed Relationships managing business relationships for IT alignment',
      'APO09 Managed Service Agreements defining and monitoring IT service level agreements',
      'APO10 Managed Suppliers managing third-party suppliers and procurement effectively',
      'APO11 Managed Quality ensuring supplier quality meets defined standards consistently',
    ],
    correct: 2,
    explanation:
      'APO10 Managed Suppliers covers IT supplier management — from vendor selection and contracting through performance monitoring and relationship management to contract renewal or exit.',
  },

  {
    id: 'cobit-gmo-08',
    domain: 'Governance & Management Objectives',
    q: 'An IT programme manager delivers a new digital banking platform through a structured project management approach with defined milestones, benefits tracking, and change control. Which objective applies?',
    options: [
      'APO05 Managed Portfolio managing the enterprise IT investment portfolio alignment',
      'BAI01 Managed Programmes and Projects delivering programmes through structured approach',
      'BAI02 Managed Requirements Definition capturing and managing business requirements',
      'BAI03 Managed Solutions Identification and Build designing and building IT solutions',
    ],
    correct: 1,
    explanation:
      'BAI01 Managed Programmes and Projects covers structured programme and project management — including planning, execution, change control, and benefits realisation for IT delivery initiatives.',
  },

  {
    id: 'cobit-gmo-09',
    domain: 'Governance & Management Objectives',
    q: 'An IT team maintains a definitive media library and tracks all licensed software to ensure compliance with vendor agreements. Which COBIT 2019 objective covers this?',
    options: [
      'BAI03 Managed Solutions Identification and Build designing IT solution components',
      'BAI04 Managed Availability and Capacity ensuring systems are available as needed',
      'BAI09 Managed Assets tracking all IT assets throughout their full lifecycle',
      'BAI10 Managed Configuration tracking configuration items and their relationships',
    ],
    correct: 2,
    explanation:
      'BAI09 Managed Assets covers the lifecycle management of all IT assets — hardware, software, licences, and facilities — including tracking, maintenance, and software licence compliance.',
  },

  {
    id: 'cobit-gmo-10',
    domain: 'Governance & Management Objectives',
    q: 'An IT operations team ensures that business-critical systems can be recovered within defined recovery time objectives after a disaster. Which COBIT 2019 objective manages this?',
    options: [
      'DSS01 Managed Operations performing day-to-day IT operational activities',
      'DSS02 Managed Service Requests and Incidents handling user requests and disruptions',
      'DSS03 Managed Problems investigating root causes of recurring service failures',
      'DSS04 Managed Continuity ensuring critical systems can be recovered after disruption',
    ],
    correct: 3,
    explanation:
      'DSS04 Managed Continuity ensures that critical IT services can be recovered within defined RTOs and RPOs after a disruption — covering business continuity planning, testing, and disaster recovery.',
  },

  {
    id: 'cobit-gmo-11',
    domain: 'Governance & Management Objectives',
    q: 'A security team manages information security policies, controls access to sensitive systems, and responds to security incidents. Which COBIT 2019 domain and objective applies?',
    options: [
      'APO13 Managed Security defining and operating information security management',
      'DSS05 Managed Security Services protecting IT assets and ensuring security services',
      'BAI06 Managed IT Changes controlling changes to IT systems and configurations',
      'MEA03 Managed Compliance ensuring IT activities conform to external requirements',
    ],
    correct: 0,
    explanation:
      'APO13 Managed Security defines the information security management system (ISMS), policies, and controls — it is the overarching security management objective working alongside DSS05 for operations.',
  },

  {
    id: 'cobit-gmo-12',
    domain: 'Governance & Management Objectives',
    q: 'An IT governance team monitors KPIs, benchmarks IT processes, and produces quarterly IT performance reports for the executive committee. Which COBIT 2019 objective covers this?',
    options: [
      'APO09 Managed Service Agreements tracking service level agreement performance',
      'MEA01 Managed Performance and Conformance Monitoring collecting and reporting metrics',
      'MEA02 Managed System of Internal Control evaluating the effectiveness of controls',
      'MEA03 Managed Compliance with External Requirements ensuring regulatory conformance',
    ],
    correct: 1,
    explanation:
      'MEA01 Managed Performance and Conformance Monitoring collects metrics, monitors performance against targets, and reports to management and governance — supporting informed decision-making.',
  },

  {
    id: 'cobit-gmo-13',
    domain: 'Governance & Management Objectives',
    q: 'An internal control team evaluates whether IT controls are effective, identifies gaps, and recommends improvements. Which COBIT 2019 objective governs this?',
    options: [
      'MEA01 Managed Performance Monitoring reporting IT performance against targets',
      'MEA02 Managed System of Internal Control evaluating control effectiveness and gaps',
      'MEA03 Managed Compliance ensuring IT activities conform to external regulations',
      'MEA04 Managed Assurance providing independent assurance over governance activities',
    ],
    correct: 1,
    explanation:
      'MEA02 Managed System of Internal Control evaluates whether the control environment is adequate and effective — identifying control gaps and recommending improvements to reduce IT risks.',
  },

  {
    id: 'cobit-gmo-14',
    domain: 'Governance & Management Objectives',
    q: 'A compliance team ensures that all IT activities conform to applicable laws, regulations, and contractual requirements. Which COBIT 2019 objective directly addresses this?',
    options: [
      'MEA01 Managed Performance Monitoring tracking IT metrics and performance KPIs',
      'MEA02 Managed System of Internal Control evaluating IT control effectiveness',
      'MEA03 Managed Compliance with External Requirements ensuring regulatory conformance',
      'MEA04 Managed Assurance providing independent governance assurance to stakeholders',
    ],
    correct: 2,
    explanation:
      'MEA03 Managed Compliance with External Requirements ensures that IT activities comply with applicable laws, regulations, industry standards, and contractual obligations — including compliance monitoring and reporting.',
  },

  {
    id: 'cobit-gmo-15',
    domain: 'Governance & Management Objectives',
    q: 'An organisation treats data as a strategic asset, defining data ownership, quality standards, and data lifecycle management policies. Which COBIT 2019 objective covers this?',
    options: [
      'APO12 Managed Risk identifying IT data-related risks and implementing controls',
      'APO13 Managed Security protecting sensitive data from unauthorised access threats',
      'BAI10 Managed Configuration tracking data assets and configuration relationships',
      'APO14 Managed Data treating data as a strategic asset with defined governance',
    ],
    correct: 3,
    explanation:
      'APO14 Managed Data (added in COBIT 2019 update) ensures that data is treated as a strategic asset — covering data governance, quality, ownership, classification, and lifecycle management.',
  },

  {
    id: 'cobit-gmo-16',
    domain: 'Governance & Management Objectives',
    q: 'An IT team manages all changes to IT systems through a formal change control process including impact assessment, approval, and post-implementation review. Which objective applies?',
    options: [
      'BAI05 Managed Organisational Change Enablement managing change adoption',
      'BAI06 Managed IT Changes formally controlling all changes to IT environments',
      'BAI07 Managed IT Change Acceptance and Transitioning testing and releasing changes',
      'BAI08 Managed Knowledge capturing and applying relevant knowledge for IT changes',
    ],
    correct: 1,
    explanation:
      'BAI06 Managed IT Changes covers the formal change control process — including change registration, classification, impact assessment, approval, implementation, and post-implementation review.',
  },

  {
    id: 'cobit-gmo-17',
    domain: 'Governance & Management Objectives',
    q: 'An IT team ensures users and stakeholders receive adequate training and adopt new IT systems effectively through structured change enablement activities. Which COBIT objective applies?',
    options: [
      'BAI04 Managed Availability and Capacity ensuring systems are ready for users',
      'BAI05 Managed Organisational Change Enablement driving adoption of new IT systems',
      'BAI06 Managed IT Changes controlling changes to IT infrastructure and applications',
      'BAI07 Managed IT Change Acceptance testing and transitioning IT releases to production',
    ],
    correct: 1,
    explanation:
      'BAI05 Managed Organisational Change Enablement covers the people-side of IT change — stakeholder engagement, communication, training, and adoption management to maximise benefit realisation.',
  },

  {
    id: 'cobit-gmo-18',
    domain: 'Governance & Management Objectives',
    q: 'An IT team manages capacity planning, ensures infrastructure can meet peak demand, and maintains agreed availability levels for all business-critical services. Which objective covers this?',
    options: [
      'DSS01 Managed Operations handling routine IT operational activities and tasks',
      'DSS04 Managed Continuity ensuring services can be recovered after a disaster',
      'BAI04 Managed Availability and Capacity ensuring systems meet demand and uptime',
      'BAI09 Managed Assets tracking IT asset lifecycle and capacity specifications',
    ],
    correct: 2,
    explanation:
      'BAI04 Managed Availability and Capacity ensures that IT services can meet current and future demand — covering capacity planning, performance monitoring, and availability management.',
  },

  {
    id: 'cobit-gmo-19',
    domain: 'Governance & Management Objectives',
    q: 'A service desk team handles all user-reported service disruptions and fulfilment requests through a defined triage and escalation process. Which COBIT 2019 objective covers this?',
    options: [
      'DSS01 Managed Operations performing scheduled and event-driven IT operations',
      'DSS02 Managed Service Requests and Incidents handling all user contacts formally',
      'DSS03 Managed Problems identifying root causes of recurring incidents in depth',
      'DSS04 Managed Continuity maintaining critical services during and after disruptions',
    ],
    correct: 1,
    explanation:
      'DSS02 Managed Service Requests and Incidents covers the service desk processes — classifying, prioritising, resolving, and closing all user-reported incidents and service requests.',
  },

  {
    id: 'cobit-gmo-20',
    domain: 'Governance & Management Objectives',
    q: 'Which COBIT 2019 governance objective ensures that the enterprise engages effectively with all stakeholders and that their interests are considered in IT governance decisions?',
    options: [
      'EDM01 ensuring the governance framework is defined and endorsed formally',
      'EDM02 ensuring IT investments deliver the agreed benefits to the enterprise',
      'EDM03 ensuring IT risks are optimised at an acceptable level enterprise-wide',
      'EDM05 ensuring stakeholder engagement transparency and reporting adequately',
    ],
    correct: 3,
    explanation:
      'EDM05 Ensuring Stakeholder Engagement covers how the governing body communicates with stakeholders, ensures transparency, and incorporates stakeholder needs into governance decisions.',
  },

  // ── DESIGN FACTORS (20 questions) ────────────────────────────────────────────

  {
    id: 'cobit-df-01',
    domain: 'Design Factors',
    q: 'COBIT 2019 introduces Design Factors to allow each enterprise to tailor its governance system. What is the primary purpose of Design Factors?',
    options: [
      'Design Factors describe the variables that influence governance system design choices',
      'Design Factors provide pre-built governance templates for common industry types',
      'Design Factors define the mandatory controls each enterprise must implement always',
      'Design Factors establish the capability maturity levels enterprises must achieve',
    ],
    correct: 0,
    explanation:
      'Design Factors are the enterprise-specific variables — strategy, risk, size, industry, regulation — that influence how the COBIT governance system should be tailored and prioritised for a specific context.',
  },

  {
    id: 'cobit-df-02',
    domain: 'Design Factors',
    q: 'A bank operating in a highly regulated environment must prioritise compliance and risk management objectives in its IT governance system. Which Design Factor drives this prioritisation?',
    options: [
      'Enterprise Strategy the overall business approach driving IT investment priorities',
      'Enterprise Risk Profile the specific risk levels and tolerance of the organisation',
      "Compliance Requirements the regulatory obligations relevant to the enterprise's sector",
      'IT Implementation Methods how the enterprise delivers and operates IT solutions',
    ],
    correct: 2,
    explanation:
      'Compliance Requirements is a COBIT 2019 Design Factor — enterprises operating in heavily regulated sectors must prioritise governance and management objectives related to compliance.',
  },

  {
    id: 'cobit-df-03',
    domain: 'Design Factors',
    q: 'A startup with 50 employees has different governance needs than a global enterprise with 50,000 employees. Which Design Factor reflects this difference?',
    options: [
      'Enterprise Strategy the business goals and strategic direction being pursued',
      'Risk Profile the level and types of IT-related risk the enterprise faces',
      'Compliance Requirements the regulatory obligations applicable to the enterprise',
      'Enterprise Size the scale and complexity of the organisation being governed',
    ],
    correct: 3,
    explanation:
      'Enterprise Size is a COBIT 2019 Design Factor — smaller enterprises need proportionate, lightweight governance while large complex enterprises require more formal, comprehensive governance structures.',
  },

  {
    id: 'cobit-df-04',
    domain: 'Design Factors',
    q: 'An enterprise plans to outsource 80% of its IT services to cloud providers. Which COBIT 2019 Design Factor most directly influences how governance should be structured for this approach?',
    options: [
      'Enterprise Strategy defining business priorities that IT must support and align',
      'IT Risk Profile assessing the risks introduced by moving to cloud providers',
      'Compliance Requirements ensuring cloud providers meet regulatory standards',
      'Sourcing Model how the enterprise uses internal versus external IT service providers',
    ],
    correct: 3,
    explanation:
      'The Sourcing Model Design Factor describes how an enterprise organises IT delivery — heavily outsourced enterprises need governance focused on vendor management, contracts, and third-party assurance.',
  },

  {
    id: 'cobit-df-05',
    domain: 'Design Factors',
    q: 'A manufacturer is in a sector where cyber attacks could cause physical harm to production lines and workers. Which Design Factor captures this elevated risk context?',
    options: [
      'Enterprise Strategy the business approach to growth and competitive positioning',
      'Threat Landscape the specific threats and vulnerabilities relevant to the enterprise',
      'Compliance Requirements the regulations the manufacturer must adhere to always',
      'Enterprise Size the number of employees and complexity of the organisation',
    ],
    correct: 1,
    explanation:
      'The Threat Landscape is a COBIT 2019 Design Factor describing the specific threats — including cyber, physical, and operational — that the enterprise faces in its sector and operating environment.',
  },

  {
    id: 'cobit-df-06',
    domain: 'Design Factors',
    q: 'A company has a very low risk tolerance and invests heavily in controls to protect its reputation. Which Design Factor describes this characteristic?',
    options: [
      "Enterprise Size the scale and complexity of the company's global operations",
      'IT Risk Profile the types and levels of risk the company is exposed to',
      'Risk Appetite and Tolerance how much risk the enterprise is willing to accept',
      "Threat Landscape the external threats facing the enterprise's industry sector",
    ],
    correct: 2,
    explanation:
      'Risk Appetite and Tolerance (captured within Enterprise Risk Profile Design Factors) describes how much risk the enterprise is willing to accept — low tolerance drives higher investment in controls.',
  },

  {
    id: 'cobit-df-07',
    domain: 'Design Factors',
    q: 'An enterprise pursues aggressive digital innovation as its primary competitive strategy. Which COBIT 2019 Design Factor captures this strategic orientation?',
    options: [
      'Enterprise Strategy the business approach and strategic goals driving IT priorities',
      'IT Risk Profile the risks the enterprise accepts in pursuit of its strategy',
      'Technology Adoption Strategy how quickly the enterprise adopts new technologies',
      'Enterprise Size the scale of the organisation pursuing the digital strategy',
    ],
    correct: 0,
    explanation:
      "Enterprise Strategy is a COBIT 2019 Design Factor describing the organisation's strategic orientation — growth, innovation, cost leadership, or compliance focus — which shapes IT governance priorities.",
  },

  {
    id: 'cobit-df-08',
    domain: 'Design Factors',
    q: "An enterprise applies COBIT's Design Factor analysis to determine which governance and management objectives are most critical for its specific context. What does this analysis produce?",
    options: [
      'A tailored governance system prioritising the most relevant objectives for context',
      'A standard governance template applicable to all enterprises regardless of context',
      'A mandatory set of controls all enterprises in the industry must implement',
      'A certification that the enterprise has achieved the required governance maturity',
    ],
    correct: 0,
    explanation:
      'Design Factor analysis produces a tailored governance system — it maps enterprise characteristics to the COBIT objectives and components that are most critical, enabling proportionate and focused governance.',
  },

  {
    id: 'cobit-df-09',
    domain: 'Design Factors',
    q: 'COBIT 2019 identifies IT implementation methods as a Design Factor. Which implementation approach describes agile teams delivering IT in short iterative sprints?',
    options: [
      'Waterfall delivery with defined sequential phases from requirements to deployment',
      'Agile delivery using short iterative sprints and continuous stakeholder feedback',
      'DevOps combining development and operations for continuous integration and delivery',
      'Cloud-native delivery using microservices and platform-as-a-service exclusively',
    ],
    correct: 1,
    explanation:
      'Agile is an IT Implementation Method Design Factor — enterprises using agile approaches need governance and management processes that can accommodate iterative delivery, rapid change, and continuous feedback.',
  },

  {
    id: 'cobit-df-10',
    domain: 'Design Factors',
    q: 'An enterprise analyses how quickly it adopts new emerging technologies compared to competitors. Which COBIT 2019 Design Factor captures this characteristic?',
    options: [
      'Enterprise Strategy defining the overall business direction and priorities pursued',
      'IT Risk Profile the specific technology risks associated with new technology use',
      'Technology Adoption Strategy how early the enterprise adopts new technologies',
      'Sourcing Model how the enterprise balances internal and external IT delivery',
    ],
    correct: 2,
    explanation:
      'Technology Adoption Strategy is a COBIT 2019 Design Factor describing whether the enterprise is an early adopter, follower, or late adopter of new technologies — shaping innovation governance needs.',
  },

  {
    id: 'cobit-df-11',
    domain: 'Design Factors',
    q: 'A healthcare company must comply with HIPAA, GDPR, and local data protection laws. How does COBIT 2019 recommend using these compliance obligations in governance design?',
    options: [
      'As Compliance Requirements Design Factors that prioritise relevant governance objectives',
      'As Threat Landscape factors that define the external risks facing the organisation',
      'As Enterprise Size factors that determine the formality of governance required',
      'As Sourcing Model factors that determine which processes must be kept in-house',
    ],
    correct: 0,
    explanation:
      'Compliance Requirements is a COBIT 2019 Design Factor — applicable regulations are mapped to the COBIT governance objectives that address them, prioritising those objectives in the governance design.',
  },

  {
    id: 'cobit-df-12',
    domain: 'Design Factors',
    q: 'COBIT 2019 recognises that enterprises play different IT roles. Which Design Factor distinguishes an enterprise that uses IT purely to support operations from one that sells IT as a product?',
    options: [
      'Enterprise Strategy defining overall business direction and competitive goals',
      'Enterprise Size measuring the scale and organisational complexity involved',
      'Sourcing Model defining how IT is delivered through internal or external providers',
      'Role of IT in the Enterprise whether IT supports enables or drives business value',
    ],
    correct: 3,
    explanation:
      'Role of IT in the Enterprise is the COBIT 2019 Design Factor defining whether IT is a cost centre (support), business enabler, or revenue driver (product) — each role implies different governance priorities.',
  },

  {
    id: 'cobit-df-13',
    domain: 'Design Factors',
    q: 'An enterprise operates in an emerging market with limited digital infrastructure and an immature IT industry. Which Design Factor would most directly shape its governance approach?',
    options: [
      'Enterprise Size the scale and number of employees in the enterprise globally',
      'Threat Landscape the specific external threats facing the emerging market sector',
      'Compliance Requirements the regulations applicable in the emerging market jurisdiction',
      'Enterprise Risk Profile the overall IT-related risk level and maturity of the enterprise',
    ],
    correct: 3,
    explanation:
      'Enterprise Risk Profile captures the overall maturity and risk landscape — operating in an emerging market with limited infrastructure implies a different risk profile that shapes governance priorities and depth.',
  },

  {
    id: 'cobit-df-14',
    domain: 'Design Factors',
    q: 'COBIT 2019 says that Focus Areas help direct governance attention. What are COBIT 2019 Focus Areas?',
    options: [
      'Focus Areas grouping governance topics of strategic importance to prioritise focus',
      'Focus Areas mandatory compliance requirements all enterprises must address first',
      'Focus Areas pre-built governance frameworks for specific vertical industries only',
      'Focus Areas the six governance system components requiring balanced attention',
    ],
    correct: 0,
    explanation:
      'Focus Areas are COBIT 2019 groupings of governance objectives around strategic topics — such as cybersecurity, digital transformation, or cloud services — that enterprises can use to focus their governance effort.',
  },

  {
    id: 'cobit-gmo-15b',
    domain: 'Design Factors',
    q: 'An enterprise with aggressive growth targets decides to accept higher IT risk to accelerate delivery speed. How does COBIT 2019 accommodate this through Design Factors?',
    options: [
      'The enterprise tailors its governance using Risk Appetite as a Design Factor',
      'The enterprise must increase all controls since COBIT mandates minimum risk levels',
      'The enterprise selects only BAI objectives since delivery is the growth strategy',
      'The enterprise removes MEA objectives since assurance slows down growth delivery',
    ],
    correct: 0,
    explanation:
      'COBIT 2019 is designed to be tailored — an enterprise with aggressive growth strategy and higher risk tolerance uses its Risk Appetite Design Factor to prioritise innovation objectives over control objectives.',
  },

  {
    id: 'cobit-df-16',
    domain: 'Design Factors',
    q: 'Which COBIT 2019 Design Factor describes the specific IT-related issues — such as legacy systems, poor data quality, or talent shortages — that the enterprise currently faces?',
    options: [
      "IT-Related Issues the specific current challenges affecting the enterprise's IT",
      "Threat Landscape the external security threats facing the enterprise's sector",
      'Enterprise Risk Profile the overall risk levels the enterprise is exposed to',
      'Technology Adoption Strategy the pace at which the enterprise adopts new IT',
    ],
    correct: 0,
    explanation:
      'IT-Related Issues is a COBIT 2019 Design Factor capturing current pain points — legacy debt, skills gaps, data quality problems — that must be addressed and prioritised in the governance design.',
  },

  {
    id: 'cobit-df-17',
    domain: 'Design Factors',
    q: 'A company expanding globally into new regions must understand the local regulatory environments before designing its IT governance system. Which Design Factor drives this analysis?',
    options: [
      'Enterprise Size the increasing scale as the company expands globally worldwide',
      'Threat Landscape the new threats that come with operating in different regions',
      'Compliance Requirements the applicable regulations in each region of operations',
      'Enterprise Strategy the growth strategy driving the global expansion initiative',
    ],
    correct: 2,
    explanation:
      'Compliance Requirements as a Design Factor covers all applicable laws and regulations — expanding globally means analysing local data protection, privacy, financial, and sector regulations in each market.',
  },

  {
    id: 'cobit-df-18',
    domain: 'Design Factors',
    q: 'COBIT 2019 maps Design Factors to governance and management objectives to determine their importance. What does this mapping help an enterprise decide?',
    options: [
      'Which governance objectives to prioritise and invest in based on its specific context',
      'Which governance objectives are mandatory and cannot be deprioritised by any firm',
      'Which capability levels must be achieved for each objective in the coming year',
      'Which external standards must be adopted alongside COBIT for governance completeness',
    ],
    correct: 0,
    explanation:
      'Design Factor mapping helps enterprises determine which of the 40 COBIT objectives are most critical for their context — enabling a focused, proportionate governance investment rather than treating all 40 equally.',
  },

  {
    id: 'cobit-df-19',
    domain: 'Design Factors',
    q: 'An enterprise uses COBIT 2019 Design Factors to determine that cybersecurity and data privacy are its highest-priority governance concerns. What should it do with this insight?',
    options: [
      'Invest more deeply in the governance objectives related to security and privacy',
      'Ignore other governance objectives since only priority areas need to be addressed',
      'Report the finding to the board and wait for board approval before proceeding',
      'Implement all 40 COBIT objectives equally since the standard requires full coverage',
    ],
    correct: 0,
    explanation:
      'Once Design Factor analysis reveals priority areas, the enterprise should invest most deeply in the governance and management objectives that address those areas — while maintaining proportionate coverage elsewhere.',
  },

  {
    id: 'cobit-df-20',
    domain: 'Design Factors',
    q: 'Which COBIT 2019 concept enables an enterprise to start with a focused subset of objectives rather than implementing all 40 objectives simultaneously?',
    options: [
      'Design Factor analysis enabling prioritised tailoring of the governance system',
      'Capability Maturity Model setting minimum levels enterprises must achieve first',
      'Focus Areas providing pre-packaged governance themes for specific strategic topics',
      'Component Variants offering different governance implementations by enterprise size',
    ],
    correct: 0,
    explanation:
      'Design Factor analysis enables proportionate governance — enterprises identify which objectives are most relevant to their context and start there, expanding coverage as maturity and capacity allow.',
  },

  // ── IMPLEMENTATION & PERFORMANCE (20 questions) ───────────────────────────────

  {
    id: 'cobit-ip-01',
    domain: 'Implementation & Performance',
    q: 'An organisation wants to assess how well its IT governance processes currently perform before starting any improvement initiatives. Which COBIT 2019 concept provides this assessment scale?',
    options: [
      'Capability Level assessment from 0 to 5 measuring IT process performance maturity',
      'Design Factor analysis identifying which governance objectives should be prioritised',
      'Focus Area prioritisation identifying the most critical governance improvement topics',
      'Component Mapping linking governance objectives to the six governance components',
    ],
    correct: 0,
    explanation:
      'COBIT 2019 uses Capability Levels (0-5) to assess how well a governance or management objective is achieved — from Incomplete (0) to Optimising (5), providing a baseline for improvement planning.',
  },

  {
    id: 'cobit-ip-02',
    domain: 'Implementation & Performance',
    q: 'A process that achieves its purpose but relies on individuals rather than defined, documented, and managed practices. Which COBIT 2019 capability level describes this?',
    options: [
      'Level 0 Incomplete — the process does not achieve its purpose fully yet',
      'Level 1 Performed — the process achieves its purpose but is not formally managed',
      'Level 2 Managed — the process is planned managed measured and adjusted regularly',
      'Level 3 Established — the process uses defined organisational standards and templates',
    ],
    correct: 1,
    explanation:
      'Level 1 (Performed) means the process achieves its purpose — but it relies on individuals and is not planned, monitored, or adjusted. Progress to Level 2 requires formal management.',
  },

  {
    id: 'cobit-ip-03',
    domain: 'Implementation & Performance',
    q: 'A governance process is planned, monitored, and adjusted based on performance metrics. Resources are allocated and objectives are set. Which capability level is this?',
    options: [
      'Level 1 Performed — the process achieves its purpose without formal management',
      'Level 2 Managed — the process is planned monitored and adjusted systematically',
      'Level 3 Established — the process uses a defined standard organisational approach',
      'Level 4 Predictable — the process operates within defined quantitative performance',
    ],
    correct: 1,
    explanation:
      'Level 2 (Managed) means the process is not only performed but also planned, monitored against objectives, and adjusted — resources are allocated and work products are established.',
  },

  {
    id: 'cobit-ip-04',
    domain: 'Implementation & Performance',
    q: 'An enterprise implements COBIT 2019 using a programme that runs repeatedly, each cycle improving governance maturity. Which COBIT implementation concept does this describe?',
    options: [
      'Design Factor Analysis a one-time assessment of enterprise governance context',
      'Capability Assessment a snapshot evaluation of current process performance levels',
      'Governance System Design a blueprint for the target state governance architecture',
      'COBIT Implementation Lifecycle a recurring programme of continual improvement cycles',
    ],
    correct: 3,
    explanation:
      'The COBIT Implementation Lifecycle is a repeating programme — each cycle covers getting started, assessing current state, setting targets, creating improvement plans, executing, and sustaining momentum.',
  },

  {
    id: 'cobit-ip-05',
    domain: 'Implementation & Performance',
    q: 'A COBIT 2019 programme identifies the current capability levels, defines target capability levels, and creates an improvement roadmap. Which implementation phase does this represent?',
    options: [
      'Getting Started identifying governance pain points and stakeholder buy-in needed',
      'Where Are We Now assessing current capability levels across key objectives',
      'Where Do We Want to Be defining target capability levels and improvement priorities',
      'How Do We Get There creating the improvement roadmap and action plans needed',
    ],
    correct: 2,
    explanation:
      "'Where Do We Want to Be' is the COBIT implementation phase where target capability levels are defined and prioritised — setting the improvement ambition based on Design Factor analysis and business goals.",
  },

  {
    id: 'cobit-ip-06',
    domain: 'Implementation & Performance',
    q: 'A COBIT 2019 assessor rates a management objective at capability level 3. What does this level indicate about the process?',
    options: [
      'The process is performed but relies on individuals without documented standards',
      'The process is managed and monitored with defined objectives and resource allocation',
      'The process uses a defined standard organisational process and proven work products',
      'The process operates quantitatively within statistical performance boundaries defined',
    ],
    correct: 2,
    explanation:
      'Level 3 (Established) means the process is implemented using a defined, documented, organisational standard — tailored from the standard and using proven work products consistently across the organisation.',
  },

  {
    id: 'cobit-ip-07',
    domain: 'Implementation & Performance',
    q: "An organisation's risk management process operates within quantitatively defined performance limits, with statistical controls ensuring predictable outcomes. Which capability level is this?",
    options: [
      'Level 2 Managed — the process is planned monitored and adjusted as needed',
      'Level 3 Established — the process follows a defined standard organisational approach',
      'Level 4 Predictable — the process operates within defined quantitative performance limits',
      'Level 5 Optimising — the process is continuously improved based on business objectives',
    ],
    correct: 2,
    explanation:
      'Level 4 (Predictable) means the process is executed within defined quantitative performance limits — statistical process control is in place, making outcomes consistently predictable.',
  },

  {
    id: 'cobit-ip-08',
    domain: 'Implementation & Performance',
    q: 'An enterprise continuously analyses process performance data, experiments with improvements, and systematically implements optimisations to meet evolving business goals. Which capability level is this?',
    options: [
      'Level 2 Managed — the process is formally planned and monitored with metrics',
      'Level 3 Established — the process uses defined standard practices consistently always',
      'Level 4 Predictable — the process operates within statistical performance boundaries',
      'Level 5 Optimising — the process is continuously improved to meet business objectives',
    ],
    correct: 3,
    explanation:
      'Level 5 (Optimising) means the enterprise continuously analyses performance data and systematically implements improvements — the process evolves to meet changing business goals and opportunities.',
  },

  {
    id: 'cobit-ip-09',
    domain: 'Implementation & Performance',
    q: 'Which COBIT 2019 implementation phase involves communicating the improvement vision and securing stakeholder commitment before detailed assessment begins?',
    options: [
      'Getting Started identifying pain points and securing executive commitment first',
      'Where Are We Now conducting the current state capability assessment across domains',
      'Where Do We Want to Be setting target maturity levels for priority objectives',
      'How Do We Get There creating the improvement roadmap and work packages',
    ],
    correct: 0,
    explanation:
      "'Getting Started' (Phase 1) focuses on articulating the business case, identifying key pain points, securing executive and stakeholder buy-in, and setting up the implementation programme governance.",
  },

  {
    id: 'cobit-ip-10',
    domain: 'Implementation & Performance',
    q: 'An enterprise uses COBIT 2019 metrics to compare its governance performance against industry peers. Which COBIT concept enables this external benchmarking?',
    options: [
      'Capability Levels providing a standardised scale for benchmarking across enterprises',
      'Design Factors providing a framework for comparing enterprise governance contexts',
      'Focus Areas providing industry-specific benchmarking targets for common priorities',
      'Governance Objectives providing specific metrics for each of the 40 COBIT processes',
    ],
    correct: 0,
    explanation:
      'The Capability Level scale (0-5) is standardised across COBIT — enterprises can benchmark their process capability against peers, industry averages, or defined target levels using this common scale.',
  },

  {
    id: 'cobit-ip-11',
    domain: 'Implementation & Performance',
    q: 'COBIT 2019 defines Key Goal Indicators (KGIs) and Key Performance Indicators (KPIs) for governance objectives. What is the primary purpose of KGIs?',
    options: [
      'KGIs measure whether the governance objective has achieved its intended outcome',
      'KGIs track the activities and inputs needed to execute the governance process',
      'KGIs measure the efficiency of executing individual governance process activities',
      'KGIs benchmark performance against external peers in the same industry sector',
    ],
    correct: 0,
    explanation:
      'Key Goal Indicators (KGIs) measure whether a governance or management objective has achieved its desired outcome — they are lag indicators showing results, distinct from KPIs which monitor process execution.',
  },

  {
    id: 'cobit-ip-12',
    domain: 'Implementation & Performance',
    q: 'A COBIT assessment reveals that the change management process is at capability level 1 but needs to be at level 3 to meet regulatory requirements. What should the improvement plan address?',
    options: [
      'Move from Level 1 to Level 2 first by formalising process management then to 3',
      'Jump directly to Level 3 by implementing all Level 2 and 3 requirements at once',
      'Achieve Level 5 first to ensure the process exceeds the regulatory requirement',
      'Focus only on Level 3 requirements since regulatory compliance is the only goal',
    ],
    correct: 0,
    explanation:
      'COBIT 2019 recommends incremental capability improvement — moving from Level 1 to Level 2 (managed) first, then to Level 3 (established) — each level builds on the previous and cannot be skipped.',
  },

  {
    id: 'cobit-ip-13',
    domain: 'Implementation & Performance',
    q: 'An enterprise produces a COBIT 2019 governance dashboard showing red, amber, and green status for all 40 objectives. What is this dashboard used for?',
    options: [
      'Reporting governance performance to management and the governing body regularly',
      'Selecting which COBIT objectives to implement based on enterprise context priorities',
      'Assessing current capability levels across governance and management objectives',
      'Benchmarking performance against external peer organisations in the same sector',
    ],
    correct: 0,
    explanation:
      'A COBIT governance dashboard provides at-a-glance status reporting to management and the governing body — supporting informed decision-making and enabling timely intervention where governance is failing.',
  },

  {
    id: 'cobit-ip-14',
    domain: 'Implementation & Performance',
    q: 'Which COBIT 2019 implementation phase focuses on executing the improvement initiatives, embedding changes into operations, and measuring whether targeted capability levels are being achieved?',
    options: [
      'Getting Started securing buy-in and setting up the improvement programme structure',
      'Where Are We Now conducting the baseline capability assessment across all objectives',
      'How Do We Get There creating improvement roadmaps and assigning accountabilities',
      'Did We Get There and How Do We Keep the Momentum Going monitoring progress',
    ],
    correct: 3,
    explanation:
      "'Did We Get There' and 'How Do We Keep the Momentum Going' phases focus on executing improvements, measuring progress against targets, embedding changes, and sustaining the improvement cycle.",
  },

  {
    id: 'cobit-ip-15',
    domain: 'Implementation & Performance',
    q: 'An enterprise assigns a specific role to be accountable for achieving each COBIT governance and management objective. Which COBIT 2019 concept does this represent?',
    options: [
      'Accountability Assignment ensuring clear ownership for each governance objective',
      'Design Factor Analysis determining which objectives the enterprise should prioritise',
      'Capability Assessment evaluating current performance for each governance objective',
      'Focus Area Prioritisation grouping related objectives under strategic themes',
    ],
    correct: 0,
    explanation:
      'Assigning clear accountability for each governance and management objective is essential in COBIT 2019 — without clear ownership, objectives are not consistently achieved or improved over time.',
  },

  {
    id: 'cobit-ip-16',
    domain: 'Implementation & Performance',
    q: 'A COBIT 2019 practitioner recommends that an enterprise set a target capability level of 2 for most processes rather than immediately targeting level 5. Why is this pragmatic?',
    options: [
      'Level 2 is the maximum level achievable without significant investment in governance',
      'Level 5 is reserved for government organisations with the highest regulatory needs',
      'Not all processes require maximum capability; targets should reflect business need',
      'COBIT requires all processes to be at Level 2 before any can advance further',
    ],
    correct: 2,
    explanation:
      "COBIT 2019 is pragmatic — not every process needs to be at Level 5. Target capability levels should be set based on the importance of the objective to the enterprise's goals, risk profile, and context.",
  },

  {
    id: 'cobit-ip-17',
    domain: 'Implementation & Performance',
    q: 'What is the recommended maximum number of improvement initiatives an enterprise should run in parallel during a single COBIT implementation cycle?',
    options: [
      'All 40 governance objectives should be improved simultaneously in the first cycle',
      'A focused subset of high-priority objectives should be improved in each cycle',
      'The number depends solely on available budget with no specific recommendation',
      'Exactly seven improvement initiatives aligned to the seven COBIT focus areas',
    ],
    correct: 1,
    explanation:
      'COBIT 2019 recommends focusing each improvement cycle on a manageable subset of high-priority objectives — attempting all 40 simultaneously overwhelms the organisation and reduces improvement quality.',
  },

  {
    id: 'cobit-ip-18',
    domain: 'Implementation & Performance',
    q: 'How does COBIT 2019 recommend measuring the return on investment of governance improvement initiatives?',
    options: [
      'By measuring how capability levels increase and tracking improvement in KGI outcomes',
      'By counting the number of COBIT processes implemented compared to the total 40',
      'By measuring the reduction in IT audit findings compared to the previous year',
      'By comparing the governance budget against the total IT operational budget spent',
    ],
    correct: 0,
    explanation:
      'Return on governance investment is measured through improved KGI outcomes — fewer incidents, reduced risk events, improved compliance, and better business alignment — correlated with capability level improvements.',
  },

  {
    id: 'cobit-ip-19',
    domain: 'Implementation & Performance',
    q: 'A COBIT 2019 governance programme fails to achieve its improvement targets because staff revert to old behaviours after training. Which implementation success factor was neglected?',
    options: [
      'Culture and Behaviour Change ensuring governance changes are embedded in daily work',
      'Capability Assessment ensuring accurate baseline measurement before improvement starts',
      'Stakeholder Communication sharing the improvement programme vision with all teams',
      'Technology Enablement deploying the right tools to support the governance processes',
    ],
    correct: 0,
    explanation:
      'Culture and Behaviour Change is a critical COBIT implementation success factor — governance improvements fail when staff revert to old habits because the cultural change was not embedded alongside the process changes.',
  },

  {
    id: 'cobit-ip-20',
    domain: 'Implementation & Performance',
    q: "Which COBIT 2019 concept ties the governance system together by ensuring that improvements in governance objectives contribute to the enterprise's overall IT-related goals?",
    options: [
      'Cascading Goals linking enterprise goals to IT goals and governance objectives',
      'Design Factor Analysis connecting enterprise context to governance system design',
      'Capability Levels providing the scale for measuring governance objective achievement',
      'Focus Areas grouping governance objectives into strategically coherent priority areas',
    ],
    correct: 0,
    explanation:
      'Goal Cascading in COBIT 2019 translates stakeholder needs into enterprise goals, then into IT-related goals, then into governance/management objectives — ensuring all governance effort traces back to business value.',
  },
];
