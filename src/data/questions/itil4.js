// ITIL 4 Foundation — 80 questions (rewritten)
// Options: ~10-13 words each, no length bias, no A)/B) prefixes
// correct: 0,1,2,3 repeating — 20× each across 80 questions

export const ITIL4_QUESTIONS = [
  // ── KEY CONCEPTS (16 questions) ───────────────────────────────────────────────

  {
    id: 'itil4-kc-01',
    domain: 'Key Concepts',
    q: 'A cloud provider delivers storage capacity that a customer uses to run its business applications without owning the underlying servers. Which ITIL 4 term describes what the provider delivers?',
    options: [
      'Service a means of enabling value co-creation by facilitating outcomes',
      'Output the specific files or transactions the service produces each day',
      'Cost the money the provider spends to deliver the service to customers',
      'Risk the uncertain event that could prevent service delivery as agreed',
    ],
    correct: 0,
    explanation:
      'A service is a means of enabling value co-creation — it provides capabilities that help consumers achieve outcomes without bearing the full cost and risk of producing them.',
  },

  {
    id: 'itil4-kc-02',
    domain: 'Key Concepts',
    q: 'After adopting a new IT service, a business achieves a 30% reduction in order processing time. Which ITIL 4 concept does this improvement represent?',
    options: [
      'Output the number of orders processed per day using the new service',
      'Outcome the business result achieved by the consumer through using it',
      'Cost the financial expenditure required to deploy and run the service',
      'Utility the functional features the service provides to process orders',
    ],
    correct: 1,
    explanation:
      'An outcome is the result that matters to the stakeholder — the 30% efficiency gain is the business outcome enabled by the service, distinct from its outputs or technical features.',
  },

  {
    id: 'itil4-kc-03',
    domain: 'Key Concepts',
    q: 'A service provides all required functions but regularly experiences outages that disrupt the business. Which dimension of service value is lacking?',
    options: [
      'Utility confirming the service has the functions the customer needs done',
      'Warranty assurance the service performs reliably and availably as agreed',
      'Outcome the business result the customer expects from using the service',
      'Output the tangible deliverable produced by the service management team',
    ],
    correct: 1,
    explanation:
      'Warranty is the assurance that a service meets agreed requirements for availability, capacity, continuity, and security — repeated outages indicate a warranty failure, not a utility gap.',
  },

  {
    id: 'itil4-kc-04',
    domain: 'Key Concepts',
    q: 'An IT team manages servers and updates on behalf of the business so it can focus on its core activities. Which value concept does this most directly illustrate?',
    options: [
      'Utility the functional fit confirming service does what the business requires',
      'Warranty assurance the service will be available when the business needs it',
      'Outcome the measurable business result from consuming the managed service',
      'Value co-creation provider and consumer jointly producing the desired outcome',
    ],
    correct: 3,
    explanation:
      'Value co-creation in ITIL 4 means value emerges from the interaction between provider and consumer — neither creates value alone; both contribute through their respective roles.',
  },

  {
    id: 'itil4-kc-05',
    domain: 'Key Concepts',
    q: 'A service desk team records the number of incidents resolved each day. Which ITIL 4 concept do these daily resolution counts represent?',
    options: [
      'Outputs the direct measurable results produced by service management activities',
      'Outcomes the business results stakeholders achieve through using the service',
      'Costs the financial expenditure incurred in resolving each daily incident',
      'Risks the uncertain events that could prevent incident resolution succeeding',
    ],
    correct: 0,
    explanation:
      'Outputs are the direct products of service management activities — incident resolution counts are outputs of the service desk, distinct from the outcomes they enable for users.',
  },

  {
    id: 'itil4-kc-06',
    domain: 'Key Concepts',
    q: "A company pays a monthly subscription for a collaboration platform. Which ITIL 4 term describes this monthly payment from the consumer's perspective?",
    options: [
      'Output the collaboration activity volume the platform produces each month',
      'Cost the financial resource the consumer spends to receive the service value',
      'Risk the uncertain disruption events that could affect the platform service',
      'Utility the functional collaboration capabilities the platform makes available',
    ],
    correct: 1,
    explanation:
      "Cost from the consumer's perspective includes all financial resources spent to receive a service — subscription fees, integration, training, and any additional expenditure to consume the service.",
  },

  {
    id: 'itil4-kc-07',
    domain: 'Key Concepts',
    q: "A provider's SLA guarantees 99.9% availability and 4-hour incident resolution. Which ITIL 4 value concept does this SLA primarily address?",
    options: [
      'Utility confirming the service has the functions required for business purposes',
      'Warranty assurance the service meets agreed performance and availability levels',
      'Outcome documenting the business results customers will achieve using it',
      'Output specifying the deliverables each service management process produces',
    ],
    correct: 1,
    explanation:
      'Warranty is fitness for use — it covers availability, capacity, security, and continuity. An SLA expressing uptime and resolution targets is the formal expression of warranty commitments.',
  },

  {
    id: 'itil4-kc-08',
    domain: 'Key Concepts',
    q: 'An IT team provides payroll services to HR, and HR provides workforce data back to IT. Both sides benefit from the relationship. Which ITIL 4 concept describes this?',
    options: [
      'Service Offering the specific products and services offered to consumers',
      'Service Relationship the cooperation between provider and consumer to co-create',
      'Service Provision delivering services according to agreed terms and conditions',
      'Service Consumption using services to achieve desired business outcomes',
    ],
    correct: 1,
    explanation:
      'A service relationship is the cooperation between a service provider and consumer — including service provision, service consumption, and relationship management on both sides.',
  },

  {
    id: 'itil4-kc-09',
    domain: 'Key Concepts',
    q: 'A user creates value by actively learning how to use a new system effectively rather than just waiting for IT to fix every issue. Which ITIL 4 concept is the user demonstrating?',
    options: [
      'Service Consumption contributing to value creation through active use of services',
      'Service Relationship the cooperation between the IT team and the business user',
      'Service Provision the IT team delivering agreed services to the business user',
      'Service Offering the specific options the IT team makes available to the user',
    ],
    correct: 0,
    explanation:
      'Service Consumption includes all consumer activities that contribute to value creation — actively engaging with and learning a service is a core consumption activity alongside provision.',
  },

  {
    id: 'itil4-kc-10',
    domain: 'Key Concepts',
    q: 'Which ITIL 4 concept describes the combination of goods, access to resources, and service actions that a provider makes available to consumers?',
    options: [
      'Service Catalogue the published list of live services currently available today',
      'Service Offering the specific goods access and service actions made available',
      'Service Pipeline the set of services under development not yet deployed live',
      'Service Portfolio the full set of all services managed by the organisation',
    ],
    correct: 1,
    explanation:
      'A Service Offering is what the provider makes available — a specific combination of goods (ownership), access (to resources), and service actions (performed by the provider) at defined levels.',
  },

  {
    id: 'itil4-kc-11',
    domain: 'Key Concepts',
    q: "ITIL 4 defines utility as 'fitness for purpose'. Which example best demonstrates a service with utility?",
    options: [
      'A reporting tool producing accurate financial reports meeting business requirements',
      'A reporting tool available 24/7 but occasionally producing incorrect output data',
      'A reporting tool with excellent uptime missing the required export functionality',
      'A reporting tool meeting SLA targets but not supporting the required data formats',
    ],
    correct: 0,
    explanation:
      'Utility is fitness for purpose — doing what it needs to do. A reporting tool that produces accurate required reports fulfils its purpose, demonstrating utility regardless of availability levels.',
  },

  {
    id: 'itil4-kc-12',
    domain: 'Key Concepts',
    q: 'A new employee calls the service desk and has their account access restored immediately. Which service relationship role does the employee hold?',
    options: [
      'Service Provider delivering IT access restoration services on behalf of the firm',
      'Service Consumer using the service desk to achieve their access restoration outcome',
      'Service Manager overseeing service delivery quality to all organisational users',
      'Service Owner accountable for the performance of the access management service',
    ],
    correct: 1,
    explanation:
      'The employee is the service consumer — they interact with the service desk to achieve an outcome (restored access) that enables them to perform their role.',
  },

  {
    id: 'itil4-kc-13',
    domain: 'Key Concepts',
    q: 'Which ITIL 4 principle recognises that what creates value for one stakeholder may not create value for another?',
    options: [
      "Value is subjective and defined by context and the consumer's perception",
      'Value equals utility plus warranty as formally agreed in the service SLA',
      "Value is objective and calculated by the provider's cost to deliver the service",
      'Value is determined solely by the market price consumers are willing to pay',
    ],
    correct: 0,
    explanation:
      'In ITIL 4, value is always co-created and context-dependent — each consumer perceives value differently based on their situation, goals, and relationship with the service.',
  },

  {
    id: 'itil4-kc-14',
    domain: 'Key Concepts',
    q: 'An organisation wants to improve a service but first measures how the service currently performs before deciding what to change. Which ITIL 4 guiding principle supports this?',
    options: [
      'Focus on Value — understand what matters to stakeholders before all changes',
      'Start Where You Are — assess the current state before deciding what to improve',
      'Progress Iteratively — make small changes and gather feedback continuously',
      'Think and Work Holistically — consider all elements of the full system',
    ],
    correct: 1,
    explanation:
      "'Start Where You Are' means measuring and understanding the current state before making decisions — avoiding the waste of discarding existing capabilities that still work well.",
  },

  {
    id: 'itil4-kc-15',
    domain: 'Key Concepts',
    q: "Which ITIL 4 term describes the uncertain harm that an event could cause to service value, continuity, or the organisation's ability to achieve its objectives?",
    options: [
      'Cost the financial expenditure associated with delivering or consuming the service',
      'Output the tangible result produced by executing a service management activity',
      'Outcome the business result a consumer achieves by using the service value',
      'Risk the uncertain event that could cause harm or reduce value if it occurs',
    ],
    correct: 3,
    explanation:
      'Risk in ITIL 4 is an uncertain event that could cause harm — a key part of service value is providers taking on risk management so consumers can achieve outcomes without owning those risks.',
  },

  {
    id: 'itil4-kc-16',
    domain: 'Key Concepts',
    q: "An organisation's IT department provides services to internal business units. Which ITIL 4 service relationship role does the IT department hold?",
    options: [
      'Service Provider delivering IT services to internal business unit consumers',
      'Service Consumer using the services to achieve its own departmental goals',
      'Service Broker intermediating between multiple providers and multiple consumers',
      'Service Owner accountable for one specific service throughout its lifecycle',
    ],
    correct: 0,
    explanation:
      'The IT department is a service provider — even internally, it delivers a service offering to consumers (business units) through a defined service relationship.',
  },

  // ── FOUR DIMENSIONS (16 questions) ───────────────────────────────────────────

  {
    id: 'itil4-4d-01',
    domain: 'Four Dimensions',
    q: 'An organisation redesigns its incident management process but fails to retrain service desk staff on the new way of working. Which Four Dimensions failure does this illustrate?',
    options: [
      'Organisations and People — skills culture and training were not addressed',
      'Information and Technology — the ITSM tool was not updated to reflect the process',
      'Partners and Suppliers — the outsourced support team was not informed of changes',
      'Value Streams and Processes — the new workflow design itself was not completed',
    ],
    correct: 0,
    explanation:
      'Organisations and People covers skills, competencies, culture, and roles — failing to retrain staff means the people dimension was ignored alongside the process redesign.',
  },

  {
    id: 'itil4-4d-02',
    domain: 'Four Dimensions',
    q: 'A service team implements an AI-powered chatbot to handle first-line support queries automatically. Which Four Dimensions category does this technology represent?',
    options: [
      'Organisations and People covering the staff who will manage the chatbot system',
      'Information and Technology covering the AI tools and data systems deployed',
      'Partners and Suppliers covering the vendor who provides the chatbot platform',
      'Value Streams and Processes covering the support workflow the chatbot automates',
    ],
    correct: 1,
    explanation:
      'Information and Technology covers all IT systems, tools, AI, and the information they process — an AI chatbot is an Information and Technology dimension investment.',
  },

  {
    id: 'itil4-4d-03',
    domain: 'Four Dimensions',
    q: 'An organisation outsources its network monitoring to a managed service provider under a formal contract with defined SLAs. Which of the Four Dimensions covers this relationship?',
    options: [
      'Organisations and People the internal teams managing the outsourced service',
      'Information and Technology the monitoring tools and data flows involved',
      'Partners and Suppliers the third-party organisation providing the managed service',
      'Value Streams and Processes the monitoring workflow executed by the provider',
    ],
    correct: 2,
    explanation:
      'Partners and Suppliers covers all external organisations — vendors, outsourcers, and partners — that contribute to service design, delivery, or support through formal agreements.',
  },

  {
    id: 'itil4-4d-04',
    domain: 'Four Dimensions',
    q: 'A service designer maps all activities from a customer placing an order through to fulfilment and invoicing. Which Four Dimensions category is being designed?',
    options: [
      'Organisations and People defining who performs each step in the order process',
      'Information and Technology defining what tools and data support each step',
      'Partners and Suppliers defining external parties that participate in fulfilment',
      'Value Streams and Processes the end-to-end activities that deliver service value',
    ],
    correct: 3,
    explanation:
      'Value Streams and Processes covers the sequences of activities that transform inputs into outputs delivering value — mapping an end-to-end order process is a value stream design activity.',
  },

  {
    id: 'itil4-4d-05',
    domain: 'Four Dimensions',
    q: 'A new data privacy regulation requires customer records to be encrypted and access to be logged. Which Four Dimensions element must be updated first?',
    options: [
      'Information and Technology ensuring encryption and access logging are implemented',
      'Organisations and People ensuring all staff understand new privacy obligations',
      'Partners and Suppliers ensuring third parties also comply with privacy requirements',
      'Value Streams and Processes embedding privacy checks into all relevant workflows',
    ],
    correct: 0,
    explanation:
      'Information and Technology covers data security, encryption, access controls, and information governance — regulatory data handling requirements are addressed within this dimension.',
  },

  {
    id: 'itil4-4d-06',
    domain: 'Four Dimensions',
    q: 'A service desk team resists adopting a new process because they fear automation will replace their jobs. Which Four Dimensions area is the root challenge?',
    options: [
      'Information and Technology updating tools to reduce resistance through design',
      'Organisations and People addressing culture mindset and change management',
      'Partners and Suppliers engaging HR consultants to manage the culture change',
      'Value Streams and Processes redesigning workflows to reduce automation fear',
    ],
    correct: 1,
    explanation:
      'Organisations and People covers culture, management, and the human aspects of change — resistance driven by job security fears is a people dimension challenge requiring cultural management.',
  },

  {
    id: 'itil4-4d-07',
    domain: 'Four Dimensions',
    q: "A procurement team evaluates a cloud platform vendor's SLA, security certifications, and exit clauses before signing a contract. Which Four Dimensions is being assessed?",
    options: [
      "Information and Technology evaluating the cloud platform's technical capabilities",
      "Organisations and People assessing the vendor's team competence and structure",
      'Partners and Suppliers evaluating the third-party vendor terms and assurance',
      'Value Streams and Processes assessing the workflows the vendor will execute',
    ],
    correct: 2,
    explanation:
      "Partners and Suppliers covers all external relationships — evaluating a vendor's SLA, security certifications, and contract terms is an assessment of the Partners and Suppliers dimension.",
  },

  {
    id: 'itil4-4d-08',
    domain: 'Four Dimensions',
    q: 'An ITIL 4 practitioner reminds the team to also consider political regulations and environmental trends when designing a new global service. Which ITIL 4 concept are they referencing?',
    options: [
      'Four Dimensions ensuring internal service factors are balanced in the design',
      'PESTLE factors the external environment affecting all four service dimensions',
      'Guiding Principles the universal recommendations for all design decisions',
      'Value Streams the workflows showing how the global service delivers value',
    ],
    correct: 1,
    explanation:
      'ITIL 4 acknowledges PESTLE factors (Political, Economic, Social, Technological, Legal, Environmental) as external influences affecting all four dimensions — they must be considered in service design.',
  },

  {
    id: 'itil4-4d-09',
    domain: 'Four Dimensions',
    q: 'An organisation defines what customer data is captured, how long it is retained, and who can access it for a new analytics service. Which Four Dimensions area is being governed?',
    options: [
      'Information and Technology defining data governance and classification policies',
      'Organisations and People defining which analytics team members own data decisions',
      'Partners and Suppliers defining how data vendors handle customer data supplied',
      'Value Streams and Processes defining the data collection and retention workflow',
    ],
    correct: 0,
    explanation:
      'Information and Technology covers all aspects of data governance — what is captured, classified, retained, and who can access it — for any service being designed or operated.',
  },

  {
    id: 'itil4-4d-10',
    domain: 'Four Dimensions',
    q: 'A team introduces self-service password reset, reducing calls to the service desk. Which Four Dimensions improvement primarily enabled this outcome?',
    options: [
      'Information and Technology deploying the self-service portal and reset automation',
      'Organisations and People training users to reset their own passwords independently',
      'Partners and Suppliers engaging the identity vendor to provide the reset feature',
      'Value Streams and Processes redesigning the password reset request workflow',
    ],
    correct: 0,
    explanation:
      'Deploying the self-service portal and password reset automation is an Information and Technology improvement — the technology directly enables the outcome of reduced service desk contact.',
  },

  {
    id: 'itil4-4d-11',
    domain: 'Four Dimensions',
    q: 'A service manager ensures all team members clearly understand their roles and responsibilities within the change enablement process. Which dimension is being managed?',
    options: [
      'Information and Technology configuring the change management tool correctly',
      'Organisations and People defining roles responsibilities and required competencies',
      "Partners and Suppliers defining the external auditor's role in change approval",
      'Value Streams and Processes mapping the end-to-end change enablement workflow',
    ],
    correct: 1,
    explanation:
      'Organisations and People covers roles, responsibilities, reporting structures, and competencies — ensuring team members understand their roles is a core activity within this dimension.',
  },

  {
    id: 'itil4-4d-12',
    domain: 'Four Dimensions',
    q: 'An ITSM programme fails despite excellent processes because the supporting tools are inadequate and data quality is poor. Which dimension was neglected?',
    options: [
      'Organisations and People since staff were not trained on the inadequate tools',
      'Information and Technology since tools and data quality were not properly addressed',
      'Partners and Suppliers since tool vendors were not adequately performance-managed',
      'Value Streams and Processes since processes need better tool integration design',
    ],
    correct: 1,
    explanation:
      'The Information and Technology dimension was neglected — even excellent processes fail when the supporting tools are inadequate and data quality is poor, preventing effective execution.',
  },

  {
    id: 'itil4-4d-13',
    domain: 'Four Dimensions',
    q: 'A service designer integrates the ITSM platform with a third-party monitoring tool via API to automate incident creation. Which Four Dimensions area is primarily involved?',
    options: [
      'Information and Technology integrating tools and data flows across platforms',
      'Organisations and People training staff to work with the new integrated toolset',
      'Partners and Suppliers managing the ongoing relationship with the monitoring vendor',
      'Value Streams and Processes updating the incident detection and creation workflow',
    ],
    correct: 0,
    explanation:
      'Information and Technology covers IT system integrations, APIs, and data flows — connecting the ITSM platform to a monitoring tool is primarily an Information and Technology dimension activity.',
  },

  {
    id: 'itil4-4d-14',
    domain: 'Four Dimensions',
    q: 'An ITIL 4 practitioner notes that the Four Dimensions must all be considered together, not just individually, for every service. Which guiding principle reinforces this?',
    options: [
      'Focus on Value ensuring all four dimensions contribute to stakeholder value',
      'Think and Work Holistically ensuring all dimensions are considered together',
      'Keep it Simple and Practical reducing the dimensions considered when appropriate',
      'Optimise and Automate using technology to balance all four dimensions efficiently',
    ],
    correct: 1,
    explanation:
      'Think and Work Holistically means no dimension operates in isolation — all four dimensions interact and must be considered together for services to work effectively.',
  },

  {
    id: 'itil4-4d-15',
    domain: 'Four Dimensions',
    q: "Which of the Four Dimensions primarily considers how the organisation's governance model, management style, and reporting lines influence its service management approach?",
    options: [
      'Information and Technology covering governance tools and compliance systems',
      'Organisations and People covering governance structures culture and leadership',
      'Partners and Suppliers covering external governance advisors and audit firms',
      'Value Streams and Processes covering governance-driven workflow requirements',
    ],
    correct: 1,
    explanation:
      'Organisations and People covers governance structures, management styles, decision-making authorities, and organisational culture — all of which directly shape how ITSM is practised.',
  },

  {
    id: 'itil4-4d-16',
    domain: 'Four Dimensions',
    q: 'A service manager maps the complete journey from a customer logging a request through fulfilment to closure, identifying activities, triggers, inputs, and outputs. Which dimension is this work?',
    options: [
      'Organisations and People mapping who is responsible for each fulfilment activity',
      'Information and Technology mapping what tools and data support each journey step',
      'Partners and Suppliers mapping external parties involved in the fulfilment journey',
      'Value Streams and Processes mapping the end-to-end activities delivering service value',
    ],
    correct: 3,
    explanation:
      'Value Streams and Processes covers end-to-end sequenced activities — mapping a complete service journey from request to closure is a value stream design and documentation activity.',
  },

  // ── SERVICE VALUE SYSTEM (16 questions) ──────────────────────────────────────

  {
    id: 'itil4-svs-01',
    domain: 'Service Value System',
    q: "An organisation's ITSM approach converts business demand into value through an integrated set of components including governance, practices, and the service value chain. Which ITIL 4 concept is this?",
    options: [
      'Service Value System the complete model converting all demand into service value',
      'Service Value Chain the specific interconnected activities creating and delivering value',
      'Service Management the comprehensive set of practices managing services end-to-end',
      'Governance the system directing controlling and evaluating all organisational activities',
    ],
    correct: 0,
    explanation:
      "The Service Value System (SVS) describes how all an organisation's components and activities work together to create value — it is the overarching ITIL 4 operating model.",
  },

  {
    id: 'itil4-svs-02',
    domain: 'Service Value System',
    q: "An organisation's leadership evaluates performance against strategic objectives and issues directives to correct deviations. Which SVS component does this represent?",
    options: [
      'Service Value Chain the activities directly creating and delivering services',
      'Governance directing evaluating and monitoring all organisational activities',
      'Continual Improvement the recurring activity of enhancing services and practices',
      'Guiding Principles the universal recommendations guiding all decisions made',
    ],
    correct: 1,
    explanation:
      'Governance in the SVS covers how the organisation is directed and controlled — leadership evaluates performance, directs activities, and monitors outcomes to ensure strategic alignment.',
  },

  {
    id: 'itil4-svs-03',
    domain: 'Service Value System',
    q: 'A Service Value Chain activity involves maintaining ongoing relationships with stakeholders and ensuring demand is understood and clearly communicated. Which activity is this?',
    options: [
      'Plan setting strategic direction and priorities across all service activities',
      'Improve identifying and implementing enhancements based on performance data',
      'Engage interacting with stakeholders to understand needs and manage relationships',
      'Design and Transition creating and changing services to deliver agreed requirements',
    ],
    correct: 2,
    explanation:
      'Engage is the Service Value Chain activity for all stakeholder interactions — understanding demand, managing relationships, and ensuring clear communication throughout the service lifecycle.',
  },

  {
    id: 'itil4-svs-04',
    domain: 'Service Value System',
    q: "Which SVS component represents the organisation's universal, ongoing effort to ensure that all practices, services, and processes continuously improve?",
    options: [
      'Governance directing the organisation to pursue continuous improvement goals',
      'Service Value Chain executing the specific activities that deliver continuous value',
      'Guiding Principles providing the framework for making improvement decisions',
      'Continual Improvement the ongoing effort to improve practices services and processes',
    ],
    correct: 3,
    explanation:
      'Continual Improvement is the SVS component representing the universal recurring effort — it applies to all SVS components, ensuring the organisation evolves to meet changing business needs.',
  },

  {
    id: 'itil4-svs-05',
    domain: 'Service Value System',
    q: 'A service desk team focuses on understanding user needs, managing requests, and ensuring users receive clear communication throughout their service journey. Which Value Chain activity does this represent?',
    options: [
      'Plan setting direction and governance across all active service activities',
      'Engage interacting with stakeholders to understand needs and manage communications',
      'Design and Transition converting requirements into new or changed service designs',
      'Obtain and Build sourcing or creating the service components needed for delivery',
    ],
    correct: 1,
    explanation:
      'Engage covers all stakeholder interactions — the service desk engaging with users to understand needs, handle requests, and communicate status is a core Engage activity.',
  },

  {
    id: 'itil4-svs-06',
    domain: 'Service Value System',
    q: 'A development team creates a new application module that the operations team will use to deliver a live service. Which Service Value Chain activity produced this component?',
    options: [
      'Plan prioritising and resourcing the development of the application module',
      'Engage gathering requirements from the operations team for the module needed',
      'Obtain and Build creating or acquiring service components ready for use',
      'Design and Transition designing the architecture and preparing it for launch',
    ],
    correct: 2,
    explanation:
      'Obtain and Build covers creating or acquiring service components — building the application module is an Obtain and Build activity, making the component available for delivery.',
  },

  {
    id: 'itil4-svs-07',
    domain: 'Service Value System',
    q: "An IT manager identifies that the organisation's knowledge base articles are outdated and initiates a programme to review and refresh them. Which SVS component drives this?",
    options: [
      'Governance directing the team to maintain accurate knowledge base content',
      'Service Value Chain the specific activity of updating the knowledge articles',
      'Guiding Principles recommending to keep knowledge simple and practical always',
      'Continual Improvement identifying and implementing the knowledge base refresh',
    ],
    correct: 3,
    explanation:
      'Continual Improvement drives the identification and implementation of improvements across all SVS components — recognising outdated knowledge and initiating a refresh is a continual improvement activity.',
  },

  {
    id: 'itil4-svs-08',
    domain: 'Service Value System',
    q: 'Which of the following is an input TO the ITIL 4 Service Value System rather than a component within it?',
    options: [
      'Demand and opportunity from customers users and the external environment',
      'Governance providing direction and oversight for all service management activities',
      'Continual Improvement the ongoing effort to enhance all practices and services',
      'Service Value Chain the interconnected activities creating and delivering value',
    ],
    correct: 0,
    explanation:
      'Demand and Opportunity are inputs to the SVS — they trigger the system into action. Governance, Continual Improvement, and the Service Value Chain are components operating within the SVS.',
  },

  {
    id: 'itil4-svs-09',
    domain: 'Service Value System',
    q: 'Which Service Value Chain activity ensures that services are delivered to agreed specifications and that users receive support during normal operations?',
    options: [
      'Plan ensuring services align with strategic direction and business priorities',
      'Engage maintaining ongoing stakeholder relationships and clear communications',
      'Obtain and Build acquiring components and capabilities for service delivery',
      'Deliver and Support providing services to consumers as agreed operationally',
    ],
    correct: 3,
    explanation:
      'Deliver and Support is the Service Value Chain activity covering actual service delivery — ensuring agreed service levels are met, incidents are handled, and user needs are addressed in operations.',
  },

  {
    id: 'itil4-svs-10',
    domain: 'Service Value System',
    q: 'A new feature is designed, tested, and deployed to production without disrupting existing services. Which Service Value Chain activity covers this end-to-end deployment process?',
    options: [
      'Plan ensuring the feature aligns with the product strategic roadmap priorities',
      'Engage gathering user acceptance criteria and communicating the release schedule',
      'Obtain and Build creating the feature code components and preparing for testing',
      'Design and Transition converting requirements into a working deployed live service',
    ],
    correct: 3,
    explanation:
      'Design and Transition covers designing, building, testing, and deploying changes — taking a requirement from concept through to a live operational capability without disrupting existing services.',
  },

  {
    id: 'itil4-svs-11',
    domain: 'Service Value System',
    q: 'What is the primary purpose of the ITIL 4 Guiding Principles as a component of the SVS?',
    options: [
      'Guiding Principles provide universal recommendations for all decisions made',
      'Guiding Principles define mandatory procedures all organisations must follow',
      'Guiding Principles describe the seven Service Value Chain activities in detail',
      'Guiding Principles specify the metrics used to measure service performance',
    ],
    correct: 0,
    explanation:
      'The ITIL 4 Guiding Principles are universal recommendations — not mandatory rules — that should guide decisions in any circumstance across all SVS components and all levels of the organisation.',
  },

  {
    id: 'itil4-svs-12',
    domain: 'Service Value System',
    q: 'An ITIL 4 practice is defined as a set of organisational resources designed to perform a specific type of work. Which component of the SVS do practices represent?',
    options: [
      'Practices the organisational resources performing work and accomplishing objectives',
      'Governance the structures directing and overseeing all service management work',
      'Continual Improvement the recurring effort to enhance practices over time',
      'Service Value Chain the activities combining practices to create and deliver value',
    ],
    correct: 0,
    explanation:
      'Practices are SVS components — each is a set of organisational resources (people, information, tools, processes) designed to perform specific service management work and accomplish an objective.',
  },

  {
    id: 'itil4-svs-13',
    domain: 'Service Value System',
    q: "A new regulation requires changes to three existing services. Which SVS component should direct the organisation's formal response to this external requirement?",
    options: [
      "Governance directing the organisation's response to the regulatory requirement",
      'Continual Improvement translating the regulation into specific improvement actions',
      'Service Value Chain executing the activities needed to implement the compliance',
      'Guiding Principles providing the ethical framework for responding to regulation',
    ],
    correct: 0,
    explanation:
      "Governance is responsible for directing the organisation's response to external forces — including regulations — ensuring the organisation evaluates the impact and issues appropriate direction.",
  },

  {
    id: 'itil4-svs-14',
    domain: 'Service Value System',
    q: 'How many ITIL 4 practices are defined, and into which three categories are they organised?',
    options: [
      '34 practices split into General Management IT Management and Service Management',
      '26 practices split into Strategic Tactical and Operational management categories',
      '41 practices split into People Process Technology and Partner quadrant areas',
      '18 core practices and 16 optional supplementary practices for advanced use',
    ],
    correct: 0,
    explanation:
      'ITIL 4 defines 34 practices: 14 General Management Practices, 17 Service Management Practices, and 3 Technical Management Practices — covering the full scope of service management work.',
  },

  {
    id: 'itil4-svs-15',
    domain: 'Service Value System',
    q: "Which SVS component ensures that the organisation's service management activities remain aligned with evolving strategic objectives over time?",
    options: [
      'Continual Improvement ensuring alignment with evolving strategic objectives always',
      'Governance providing direction control and oversight of all organisational activities',
      'Service Value Chain executing the specific activities that create and deliver value',
      'Guiding Principles providing consistent decision guidance across all situations',
    ],
    correct: 0,
    explanation:
      'Continual Improvement ensures the SVS evolves — it identifies when practices, services, or processes are no longer aligned with business objectives and drives the necessary changes.',
  },

  {
    id: 'itil4-svs-16',
    domain: 'Service Value System',
    q: "The Service Value Chain activity 'Plan' sets direction and ensures strategic alignment. Which SVS component does the Plan activity receive its strategic input from?",
    options: [
      'Governance providing strategic direction and oversight that the Plan activity implements',
      'Continual Improvement providing improvement priorities that feed into the Plan activity',
      'Practices providing the process frameworks that support the Plan activity work',
      'Guiding Principles providing the universal recommendations used during planning',
    ],
    correct: 0,
    explanation:
      'Governance provides the strategic direction, policies, and direction that the Plan activity translates into operational priorities — governance shapes what the service value chain plans for.',
  },

  // ── GUIDING PRINCIPLES (16 questions) ────────────────────────────────────────

  {
    id: 'itil4-gp-01',
    domain: 'Guiding Principles',
    q: 'Before redesigning the incident management process, a service manager asks users what about the current process causes the most frustration. Which guiding principle drives this?',
    options: [
      'Focus on Value — understand stakeholder perspectives before making any changes',
      'Start Where You Are — assess the current process performance before redesigning',
      'Collaborate and Promote Visibility — involve all stakeholders in the redesign',
      'Think and Work Holistically — consider how incident relates to other processes',
    ],
    correct: 0,
    explanation:
      'Focus on Value means understanding what matters to stakeholders — understanding user frustrations before redesigning ensures the improvement actually addresses what creates value for them.',
  },

  {
    id: 'itil4-gp-02',
    domain: 'Guiding Principles',
    q: 'A team replacing a legacy CRM evaluates which existing integrations and data can be preserved rather than rebuilt. Which guiding principle guides this decision?',
    options: [
      'Focus on Value ensuring the new CRM delivers more value than the legacy one',
      'Start Where You Are assessing and reusing existing capabilities where appropriate',
      'Progress Iteratively delivering the new CRM in increments to manage change risk',
      'Optimise and Automate ensuring all manual CRM workflows are fully automated',
    ],
    correct: 1,
    explanation:
      'Start Where You Are means assessing what already exists before creating new capabilities — preserving working integrations and data avoids unnecessary rework and reduces migration risk.',
  },

  {
    id: 'itil4-gp-03',
    domain: 'Guiding Principles',
    q: 'A team delivers a new customer portal in three monthly releases, using feedback from each release to shape the next. Which guiding principle is this?',
    options: [
      'Focus on Value ensuring each monthly release delivers clear customer value',
      'Start Where You Are building on the existing portal infrastructure and data',
      'Progress Iteratively with Feedback delivering increments and learning each time',
      'Collaborate involving customers in reviewing and planning each portal release',
    ],
    correct: 2,
    explanation:
      'Progress Iteratively with Feedback means delivering in smaller increments and using feedback from each to improve the next — reducing risk while enabling continuous learning and adaptation.',
  },

  {
    id: 'itil4-gp-04',
    domain: 'Guiding Principles',
    q: 'An incident management improvement project includes operations, development, and business stakeholders from the start. Which guiding principle drives this inclusive approach?',
    options: [
      'Focus on Value ensuring all groups agree the improvement creates value',
      'Start Where You Are assessing how each group currently handles incidents',
      'Progress Iteratively running workshops with each group in separate iterations',
      'Collaborate and Promote Visibility including all relevant parties in the work',
    ],
    correct: 3,
    explanation:
      'Collaborate and Promote Visibility means involving all relevant stakeholders — their knowledge, perspectives, and buy-in are essential for creating improvements that work across the organisation.',
  },

  {
    id: 'itil4-gp-05',
    domain: 'Guiding Principles',
    q: 'When improving the change process, a team recognises that changes to it will affect release, incident, and configuration management practices. Which principle must be applied?',
    options: [
      'Focus on Value ensuring change improvements create clear business value',
      'Start Where You Are assessing the current change process before redesigning',
      'Progress Iteratively delivering change improvements in small controlled steps',
      'Think and Work Holistically considering how change affects all related practices',
    ],
    correct: 3,
    explanation:
      'Think and Work Holistically means understanding that no practice is isolated — a change to the change enablement process ripples through release, incident, and configuration management.',
  },

  {
    id: 'itil4-gp-06',
    domain: 'Guiding Principles',
    q: 'A new ITSM process requires 15 approval steps for every minor low-risk change. Which guiding principle is most clearly being violated?',
    options: [
      'Focus on Value since excessive approvals reduce value delivered to the business',
      'Collaborate since not all approvers were involved in designing the process',
      'Keep it Simple and Practical since unnecessary complexity is being introduced',
      'Optimise and Automate since the approvals should be automated not manual',
    ],
    correct: 2,
    explanation:
      'Keep it Simple and Practical means avoiding unnecessary complexity — 15 approval steps for minor changes is bureaucratic overhead without proportionate value, directly violating this principle.',
  },

  {
    id: 'itil4-gp-07',
    domain: 'Guiding Principles',
    q: 'A service manager replaces manual status update emails with automated notifications triggered by tool integration. Which guiding principle is being applied?',
    options: [
      'Focus on Value ensuring automated updates deliver more value to stakeholders',
      'Start Where You Are reusing existing ITSM and monitoring tools for integration',
      'Keep it Simple and Practical simplifying the update process for all recipients',
      'Optimise and Automate removing manual waste and automating repetitive tasks',
    ],
    correct: 3,
    explanation:
      'Optimise and Automate means removing waste and using technology to perform repetitive tasks — automating status notifications eliminates manual effort and reduces the risk of missed updates.',
  },

  {
    id: 'itil4-gp-08',
    domain: 'Guiding Principles',
    q: 'Which guiding principle recommends measuring and understanding what currently exists before deciding on improvements or replacements?',
    options: [
      'Focus on Value — understand what stakeholders value before making changes',
      'Start Where You Are — measure and assess the current state before improving',
      'Progress Iteratively — make changes in controlled increments rather than big bangs',
      'Think and Work Holistically — consider all dimensions of the current system',
    ],
    correct: 1,
    explanation:
      "Start Where You Are prevents unnecessary rework by insisting on evidence-based assessment of the current state — understand what works, what doesn't, and what can be reused.",
  },

  {
    id: 'itil4-gp-09',
    domain: 'Guiding Principles',
    q: 'A service request improvement project redesigns only the IT fulfilment steps while ignoring the upstream business approval workflow that causes most delays. Which principle is violated?',
    options: [
      'Focus on Value since the approval delays are what reduce value for requesters',
      'Start Where You Are since the approval workflow already exists and should be assessed',
      'Collaborate since business approvers were not consulted during the redesign',
      'Think and Work Holistically since the end-to-end process was not fully considered',
    ],
    correct: 3,
    explanation:
      'Think and Work Holistically means considering the complete end-to-end experience — ignoring the upstream business approval workflow means the improvement will deliver sub-optimal results.',
  },

  {
    id: 'itil4-gp-10',
    domain: 'Guiding Principles',
    q: 'A service team shares a real-time dashboard showing incident volumes, SLA performance, and resolution trends with all stakeholders. Which principle does this embody?',
    options: [
      'Focus on Value ensuring the metrics reflect what stakeholders actually value',
      'Start Where You Are using existing data rather than creating entirely new sources',
      'Keep it Simple and Practical presenting the data in a clear understandable format',
      'Collaborate and Promote Visibility making performance transparent to all parties',
    ],
    correct: 3,
    explanation:
      'Collaborate and Promote Visibility means ensuring relevant parties have the information they need — a shared real-time dashboard increases transparency, accountability, and informed decision-making.',
  },

  {
    id: 'itil4-gp-11',
    domain: 'Guiding Principles',
    q: 'ITIL 4 recommends that before automating any process, organisations should first optimise it manually. Which guiding principle provides this specific guidance?',
    options: [
      'Keep it Simple and Practical — simplify before adding automation complexity',
      'Progress Iteratively — optimise the process then automate in a next iteration',
      'Optimise and Automate — first optimise then automate to avoid locking in waste',
      "Think and Work Holistically — consider automation's impact on the full system",
    ],
    correct: 2,
    explanation:
      'Optimise and Automate recommends optimising (eliminating waste and simplifying) before automating — automating an inefficient process just produces inefficient results at higher speed.',
  },

  {
    id: 'itil4-gp-12',
    domain: 'Guiding Principles',
    q: "A service desk redesign was completed without involving front-line agents. The resulting process fails because it doesn't reflect operational realities. Which principle was violated?",
    options: [
      'Focus on Value since agents are key to delivering service desk value daily',
      "Start Where You Are since agents' existing knowledge should have been assessed",
      'Collaborate and Promote Visibility since key knowledge holders were excluded',
      'Think and Work Holistically since operational realities were not fully considered',
    ],
    correct: 2,
    explanation:
      'Collaborate and Promote Visibility means involving all relevant stakeholders — excluding front-line agents meant their critical operational knowledge was absent from the design process.',
  },

  {
    id: 'itil4-gp-13',
    domain: 'Guiding Principles',
    q: 'A team decides not to introduce a new reporting layer because the existing reports already fully meet stakeholder needs. Which principle guided this decision?',
    options: [
      'Focus on Value confirming existing reports deliver sufficient stakeholder value',
      'Start Where You Are preserving existing capabilities that already serve the purpose',
      'Keep it Simple and Practical avoiding complexity when existing solutions suffice',
      'Optimise and Automate ensuring existing reports are optimised before any changes',
    ],
    correct: 2,
    explanation:
      'Keep it Simple and Practical means not adding complexity without clear value — if existing reports fully meet the need, introducing additional reporting layers creates unnecessary overhead.',
  },

  {
    id: 'itil4-gp-14',
    domain: 'Guiding Principles',
    q: 'A team delivers a working self-service portal prototype in two weeks, then gathers customer feedback to prioritise the next two weeks of features. Which principle is demonstrated?',
    options: [
      'Focus on Value validating that the prototype delivers real customer value now',
      'Start Where You Are building the prototype on existing portal infrastructure',
      'Progress Iteratively with Feedback delivering incrementally and adapting from learning',
      'Collaborate involving customers in the prioritisation of the next feature set',
    ],
    correct: 2,
    explanation:
      'Progress Iteratively with Feedback means delivering in small increments and using feedback from each to guide the next — this accelerates value realisation and reduces the risk of large-batch failure.',
  },

  {
    id: 'itil4-gp-15',
    domain: 'Guiding Principles',
    q: 'The ITIL 4 guiding principles should be applied together rather than one at a time. Which principle reinforces this meta-guidance about applying all principles holistically?',
    options: [
      'Focus on Value — every principle must be evaluated for its value contribution',
      'Think and Work Holistically — consider all principles together in each situation',
      'Keep it Simple and Practical — applying all principles keeps decision-making simple',
      'Optimise and Automate — applying all principles optimises overall decision speed',
    ],
    correct: 1,
    explanation:
      'Think and Work Holistically applies to the principles themselves — no single principle gives the full picture, so all seven should be considered together when making any significant decision.',
  },

  {
    id: 'itil4-gp-16',
    domain: 'Guiding Principles',
    q: 'Which ITIL 4 guiding principle states that every activity, metric, and decision in service management should ultimately trace back to value for stakeholders?',
    options: [
      'Focus on Value — every action should ultimately be traceable to stakeholder value',
      'Start Where You Are — evaluate current activities for their value contribution',
      'Think and Work Holistically — trace value creation across the entire service system',
      'Collaborate and Promote Visibility — share value information transparently always',
    ],
    correct: 0,
    explanation:
      'Focus on Value is the foundational principle — every service management activity, metric, and decision should, directly or indirectly, contribute to creating value for stakeholders.',
  },

  // ── ITIL PRACTICES (16 questions) ────────────────────────────────────────────

  {
    id: 'itil4-pr-01',
    domain: 'ITIL Practices',
    q: 'A major application failure affects thousands of users. The priority is to restore service as quickly as possible. Which ITIL 4 practice owns this response?',
    options: [
      'Incident Management restoring normal service operation as quickly as possible',
      'Problem Management identifying root cause to prevent future similar occurrences',
      'Change Enablement assessing emergency changes needed to restore the service',
      'Service Level Management tracking SLA breach caused by the application failure',
    ],
    correct: 0,
    explanation:
      'Incident Management is the practice of restoring normal service operation as fast as possible — the immediate goal during an outage is restoration, not investigation of root cause.',
  },

  {
    id: 'itil4-pr-02',
    domain: 'ITIL Practices',
    q: 'After resolving several related database errors, a team investigates the common root cause and implements a permanent configuration fix to prevent recurrence. Which practice governs this?',
    options: [
      'Incident Management restoring the service quickly after each database error',
      'Problem Management identifying root cause and driving a permanent resolution',
      'Change Enablement assessing the risk of the configuration fix before approval',
      'Service Level Management reviewing SLA impact of the recurring database errors',
    ],
    correct: 1,
    explanation:
      'Problem Management identifies root causes of recurring incidents and works toward permanent solutions — it handles the investigation phase after Incident Management has restored the service.',
  },

  {
    id: 'itil4-pr-03',
    domain: 'ITIL Practices',
    q: 'A Change Advisory Board reviews a high-risk infrastructure change proposal, assesses its potential impact, and authorises it for a specific maintenance window. Which practice is this?',
    options: [
      'Incident Management assessing the risk the change could cause service disruption',
      'Problem Management evaluating whether the change resolves a known error pattern',
      'Change Enablement assessing authorising and scheduling changes to minimise risk',
      'Release Management packaging and deploying the infrastructure change to production',
    ],
    correct: 2,
    explanation:
      'Change Enablement maximises successful changes by assessing risk, authorising appropriate changes, and scheduling them — the CAB review and authorisation are core Change Enablement activities.',
  },

  {
    id: 'itil4-pr-04',
    domain: 'ITIL Practices',
    q: 'A user submits a request for a standard software licence. The team logs, approves, fulfils, and closes the request through a predefined workflow. Which practice handles this?',
    options: [
      'Incident Management handling service disruptions that prevent normal user work',
      'Problem Management investigating why software licence requests frequently fail',
      'Change Enablement authorising changes to the software licensing configuration',
      'Service Request Management handling standard requests through a fulfilment workflow',
    ],
    correct: 3,
    explanation:
      'Service Request Management handles predefined, low-risk requests — software licence requests are fulfilled through a standardised workflow without requiring full change assessment.',
  },

  {
    id: 'itil4-pr-05',
    domain: 'ITIL Practices',
    q: 'A monitoring system detects a server CPU spike and automatically creates an incident ticket in the ITSM tool. Which ITIL 4 practice generated the ticket trigger?',
    options: [
      'Monitoring and Event Management detecting events and triggering incident creation',
      'Incident Management responding to the high CPU event after the ticket is created',
      'Problem Management identifying whether the CPU spike indicates a known problem',
      'Capacity Management detecting that demand has exceeded available compute capacity',
    ],
    correct: 0,
    explanation:
      'Monitoring and Event Management detects events in the IT infrastructure and determines the appropriate response — automatically triggering incident creation when a threshold is breached.',
  },

  {
    id: 'itil4-pr-06',
    domain: 'ITIL Practices',
    q: 'A service manager negotiates with business stakeholders to define measurable targets for availability, response time, and resolution time. Which ITIL 4 practice covers this?',
    options: [
      'Service Level Management establishing and monitoring agreed service level targets',
      'Service Desk measuring user satisfaction with each service interaction recorded',
      'Continual Improvement using service targets as the improvement baseline measure',
      'Capacity and Performance Management ensuring infrastructure supports agreed levels',
    ],
    correct: 0,
    explanation:
      'Service Level Management establishes service level agreements by negotiating measurable targets with business stakeholders and then monitoring and reporting on achievement against those targets.',
  },

  {
    id: 'itil4-pr-07',
    domain: 'ITIL Practices',
    q: 'An IT team documents known errors and workarounds in a shared knowledge base so agents can resolve recurring incidents faster and consistently. Which two practices work together here?',
    options: [
      'Problem Management and Knowledge Management accelerating incident resolution speed',
      'Incident Management and Change Enablement working to prevent known error recurrence',
      'Service Desk and Release Management deploying workarounds as service updates',
      'Monitoring and Event Management and Incident Management detecting and responding',
    ],
    correct: 0,
    explanation:
      'Problem Management identifies known errors and workarounds; Knowledge Management captures and makes them accessible — together they reduce resolution time and improve consistency.',
  },

  {
    id: 'itil4-pr-08',
    domain: 'ITIL Practices',
    q: 'An organisation tracks all IT hardware, software, and configuration items, including their relationships and dependency chains, in a centralised database. Which practice manages this?',
    options: [
      'IT Asset Management tracking ownership financial value and lifecycle of assets',
      'Service Configuration Management managing configuration items and their relationships',
      'Change Enablement ensuring all configuration changes are assessed before approval',
      'Service Level Management ensuring asset performance meets agreed service targets',
    ],
    correct: 1,
    explanation:
      'Service Configuration Management maintains the Configuration Management Database (CMDB) — tracking all configuration items, their attributes, and the relationships between them across the IT estate.',
  },

  {
    id: 'itil4-pr-09',
    domain: 'ITIL Practices',
    q: 'An organisation ensures all IT assets are tracked from procurement through deployment to retirement, including their financial value and contractual status. Which practice covers this?',
    options: [
      'IT Asset Management tracking assets throughout their full lifecycle end-to-end',
      'Service Configuration Management tracking configuration items and relationships',
      'Change Enablement ensuring all asset changes are assessed and formally approved',
      'Service Level Management ensuring asset availability meets the agreed SLA targets',
    ],
    correct: 0,
    explanation:
      'IT Asset Management covers the full lifecycle of IT assets — from acquisition and deployment through maintenance to retirement and disposal — including ownership, contracts, and financial value.',
  },

  {
    id: 'itil4-pr-10',
    domain: 'ITIL Practices',
    q: 'An IT team packages, tests, and deploys a major software update to production, coordinating all components including documentation and user communications. Which practice is this?',
    options: [
      'Change Enablement assessing the risk of and authorising the software update',
      'Release Management packaging testing and deploying complete releases to production',
      'Deployment Management physically moving software components between environments',
      'Service Configuration Management recording post-deployment configuration changes',
    ],
    correct: 1,
    explanation:
      'Release Management packages, tests, and deploys releases — it coordinates all components of a change end-to-end, ensuring release quality and completeness before production deployment.',
  },

  {
    id: 'itil4-pr-11',
    domain: 'ITIL Practices',
    q: 'Which ITIL 4 practice ensures that accurate, relevant knowledge — including service information, known errors, and procedures — is available to the right people at the right time?',
    options: [
      'Knowledge Management making relevant knowledge available when and where needed',
      'Service Configuration Management maintaining the CMDB with accurate information',
      'IT Asset Management tracking all assets with their current operational details',
      'Service Desk providing users with information during service interactions daily',
    ],
    correct: 0,
    explanation:
      'Knowledge Management captures, organises, and makes available all types of organisational knowledge — service knowledge, known errors, workarounds, and procedures — enabling informed decision-making.',
  },

  {
    id: 'itil4-pr-12',
    domain: 'ITIL Practices',
    q: 'A service desk uses a classification script to quickly triage, prioritise, and route every incoming contact to the correct resolver group. Which ITIL 4 practice does this support?',
    options: [
      'Service Desk providing the single point of contact for all user interactions',
      'Incident Management providing the classification and priority framework for incidents',
      'Problem Management providing initial triage to identify potential known problems',
      'Service Request Management providing the script for handling predefined requests',
    ],
    correct: 0,
    explanation:
      'The Service Desk practice provides the single point of contact — it handles initial classification and routing for all incoming contacts, including incidents, requests, and general queries.',
  },

  {
    id: 'itil4-pr-13',
    domain: 'ITIL Practices',
    q: 'A configuration error caused five incidents in one month. A problem record is raised and root-cause investigation begins. Which practice owns this problem record?',
    options: [
      'Incident Management owning all events involving service disruption and recovery',
      'Problem Management owning the investigation and lifecycle of the problem record',
      'Change Enablement owning the assessment of changes needed to fix the configuration',
      'Configuration Management owning the configuration item that caused the incidents',
    ],
    correct: 1,
    explanation:
      'Problem Management owns problem records — it investigates root causes of recurring incidents and manages the lifecycle from problem identification through to known error or permanent resolution.',
  },

  {
    id: 'itil4-pr-14',
    domain: 'ITIL Practices',
    q: 'Which ITIL 4 practice is responsible for physically moving software, hardware, or documentation from one managed environment (e.g., test) to another (e.g., production)?',
    options: [
      'Release Management packaging and validating complete releases before deployment',
      'Deployment Management physically moving components between managed environments',
      'Change Enablement authorising what will be moved and scheduling the deployment window',
      'Service Configuration Management recording what was deployed and to which environment',
    ],
    correct: 1,
    explanation:
      'Deployment Management handles the physical act of moving components between environments — the actual transfer of a package from test to production is a deployment management activity.',
  },

  {
    id: 'itil4-pr-15',
    domain: 'ITIL Practices',
    q: 'An IT team ensures that the computing infrastructure can handle both current workload demand and predicted future growth at agreed performance levels. Which practice does this?',
    options: [
      'Capacity and Performance Management ensuring infrastructure meets demand at agreed levels',
      'Service Level Management negotiating and monitoring agreed service performance targets',
      'IT Asset Management tracking assets to ensure they meet performance specifications',
      'Availability Management ensuring services are available when users need them daily',
    ],
    correct: 0,
    explanation:
      'Capacity and Performance Management ensures services and infrastructure meet current and forecasted demand at agreed levels — including capacity planning, performance monitoring, and scaling decisions.',
  },

  {
    id: 'itil4-pr-16',
    domain: 'ITIL Practices',
    q: 'An IT team launches a self-service portal where users can log incidents, track requests, and search knowledge articles without contacting the service desk. Which practice owns this channel?',
    options: [
      'Service Desk enabling self-service as one of its omnichannel contact options',
      'Service Request Management managing requests submitted through the self-service portal',
      'Knowledge Management providing the knowledge articles that the self-service portal hosts',
      'Incident Management providing the framework for incidents logged in the portal',
    ],
    correct: 0,
    explanation:
      'The Service Desk practice encompasses all contact channels — phone, email, chat, and self-service portals are all channels through which the Service Desk provides support to users.',
  },
];
