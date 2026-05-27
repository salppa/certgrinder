// TOGAF Standard 10th Edition — 80 questions (rewritten)
// Options: ~10-13 words each, no length bias, no A)/B) prefixes
// correct: 0,1,2,3 repeating — 20× each across 80 questions

export const TOGAF_QUESTIONS = [
  // ── ARCHITECTURE DEVELOPMENT METHOD (20 questions) ───────────────────────────

  {
    id: 'togaf-adm-01',
    domain: 'Architecture Development Method',
    q: 'An enterprise architect begins a new engagement by establishing the architecture team, tools, and principles before any domain architecture work starts. Which ADM phase covers this activity?',
    options: [
      'Preliminary Phase establishing the architecture capability and framework',
      'Phase A Architecture Vision defining scope stakeholders and high-level vision',
      'Phase B Business Architecture modelling the business processes and functions',
      'Phase C Information Systems Architecture covering data and application domains',
    ],
    correct: 0,
    explanation:
      'The Preliminary Phase prepares the organisation for architecture work — establishing the Architecture Capability, selecting frameworks, defining principles, and tailoring TOGAF to the enterprise.',
  },

  {
    id: 'togaf-adm-02',
    domain: 'Architecture Development Method',
    q: 'A sponsor requests a new digital transformation initiative. The architect creates a high-level picture of the capability change and gains stakeholder buy-in. Which ADM phase is this?',
    options: [
      'Preliminary Phase establishing architecture principles and governance structures',
      'Phase A Architecture Vision creating the high-level aspirational target view',
      'Phase E Opportunities and Solutions identifying candidate implementation projects',
      'Phase F Migration Planning sequencing projects into a structured transition roadmap',
    ],
    correct: 1,
    explanation:
      'Phase A Architecture Vision defines the scope, constraints, stakeholder concerns, and high-level vision of the architecture to be developed — securing executive sponsorship before detailed work begins.',
  },

  {
    id: 'togaf-adm-03',
    domain: 'Architecture Development Method',
    q: 'An architect documents the current and target business processes, organisational units, and functions to support an IT transformation. Which ADM phase produces this?',
    options: [
      'Phase A Architecture Vision defining the strategic intent and stakeholder concerns',
      'Phase B Business Architecture describing current and target business capabilities',
      'Phase C Data Architecture defining the major data entities and their relationships',
      'Phase D Technology Architecture mapping infrastructure to support the solution',
    ],
    correct: 2,
    explanation:
      'Phase B Business Architecture develops the baseline and target business architectures — modelling processes, capabilities, organisational units, and information flows that IT must support.',
  },

  {
    id: 'togaf-adm-04',
    domain: 'Architecture Development Method',
    q: 'During an architecture engagement the team maps all logical and physical applications and their integrations to support the target business architecture. Which ADM phase is this?',
    options: [
      'Phase B Business Architecture defining business functions and process flows',
      'Phase C Application Architecture defining applications and their interactions',
      'Phase D Technology Architecture describing infrastructure and platform requirements',
      'Phase E Opportunities and Solutions identifying implementation work packages',
    ],
    correct: 3,
    explanation:
      'Phase C covers both Data Architecture and Application Architecture — the Application Architecture component defines the major application systems, their interactions, and relationships to business functions.',
  },

  {
    id: 'togaf-adm-05',
    domain: 'Architecture Development Method',
    q: 'After completing the target architecture, the team evaluates implementation alternatives and groups related changes into work packages. Which ADM phase performs this?',
    options: [
      'Phase E Opportunities and Solutions identifying implementation projects and packages',
      'Phase D Technology Architecture mapping infrastructure to application requirements',
      'Phase F Migration Planning sequencing work packages into a transition roadmap',
      'Phase G Implementation Governance overseeing solution delivery against architecture',
    ],
    correct: 0,
    explanation:
      'Phase E Opportunities and Solutions conducts a gap analysis between baseline and target, identifies implementation projects, groups them into work packages, and defines the initial Architecture Roadmap.',
  },

  {
    id: 'togaf-adm-06',
    domain: 'Architecture Development Method',
    q: 'An architect prioritises the identified work packages into transition architectures and builds a phased migration plan. Which ADM phase produces this deliverable?',
    options: [
      'Phase E Opportunities and Solutions identifying candidate projects and initiatives',
      'Phase F Migration Planning creating a detailed coordinated implementation roadmap',
      'Phase G Implementation Governance monitoring conformance during solution delivery',
      'Phase H Architecture Change Management responding to change requests post-implementation',
    ],
    correct: 1,
    explanation:
      'Phase F Migration Planning prioritises projects into transition architectures and creates the detailed migration plan — coordinating with portfolio, programme, and project management processes.',
  },

  {
    id: 'togaf-adm-07',
    domain: 'Architecture Development Method',
    q: 'A solution delivery team is building a capability and the architect reviews their designs to confirm they conform to the approved target architecture. Which ADM phase covers this?',
    options: [
      'Phase E Opportunities and Solutions defining implementation work packages scope',
      'Phase F Migration Planning sequencing approved projects into a transition roadmap',
      'Phase G Implementation Governance providing architectural oversight of delivery',
      'Phase H Architecture Change Management managing post-implementation architecture evolution',
    ],
    correct: 2,
    explanation:
      'Phase G Implementation Governance provides the architectural oversight during solution delivery — the architect reviews implementation projects for conformance and issues Architecture Contracts.',
  },

  {
    id: 'togaf-adm-08',
    domain: 'Architecture Development Method',
    q: 'After implementation completes, a new technology trend emerges that requires updating the target architecture. Which ADM phase manages this evolution?',
    options: [
      'Phase E Opportunities and Solutions revisiting project prioritisation decisions',
      'Phase F Migration Planning revising the implementation roadmap for new projects',
      'Phase G Implementation Governance reviewing delivery conformance against architecture',
      'Phase H Architecture Change Management handling requests and updating the architecture',
    ],
    correct: 3,
    explanation:
      'Phase H Architecture Change Management monitors the environment for technology and business changes, manages Architecture Change Requests, and decides whether to initiate a new ADM cycle.',
  },

  {
    id: 'togaf-adm-09',
    domain: 'Architecture Development Method',
    q: 'The Requirements Management process in TOGAF operates throughout all ADM phases. What is its primary function?',
    options: [
      'Requirements Management storing and managing architecture requirements across phases',
      'Phase A producing the initial set of requirements for the architecture engagement',
      'Requirements Management producing only business requirements for Phase B work',
      'Phase G converting architecture requirements into solution design specifications',
    ],
    correct: 0,
    explanation:
      'Requirements Management is a continuous central process that stores, manages, and feeds architecture requirements into and out of each ADM phase — it does not produce requirements, it manages them.',
  },

  {
    id: 'togaf-adm-10',
    domain: 'Architecture Development Method',
    q: 'An architect documents technology platforms, middleware, and infrastructure components to support the application layer. Which ADM phase produces this work?',
    options: [
      'Phase B Business Architecture defining business processes and organisational units',
      'Phase C Application Architecture defining major application systems and interactions',
      'Phase D Technology Architecture defining the infrastructure and platform landscape',
      'Phase E Opportunities and Solutions identifying gaps and implementation initiatives',
    ],
    correct: 2,
    explanation:
      'Phase D Technology Architecture defines the logical and physical technology components — hardware, software infrastructure, middleware, networks, and platforms — that support the application landscape.',
  },

  {
    id: 'togaf-adm-11',
    domain: 'Architecture Development Method',
    q: 'Which ADM output formally documents the agreement between the development organisation and the sponsor regarding the deliverables and quality of the architecture work?',
    options: [
      'Statement of Architecture Work defining scope schedule and acceptance criteria',
      'Architecture Vision summarising the key stakeholders goals and high-level solution',
      'Architecture Definition Document containing the detailed baseline and target views',
      'Architecture Roadmap sequencing the transition architectures towards the target',
    ],
    correct: 0,
    explanation:
      'The Statement of Architecture Work defines the scope, approach, schedule, and acceptance criteria for the architecture project — it is the formal agreement between the sponsor and architect.',
  },

  {
    id: 'togaf-adm-12',
    domain: 'Architecture Development Method',
    q: 'An organisation adopts TOGAF but needs to adjust its terminology, processes, and deliverables to fit their existing framework and culture. What is this customisation process called?',
    options: [
      'Scoping limiting the breadth and depth of the architecture work engagement',
      'Partitioning dividing the enterprise into independently managed architecture domains',
      'Federation enabling autonomous groups aligned under shared enterprise standards',
      'Tailoring adapting TOGAF terminology processes and deliverables for the enterprise',
    ],
    correct: 3,
    explanation:
      "Tailoring adapts TOGAF's formality, deliverable set, terminology, and processes to the specific organisational context — ensuring the approach is proportionate and relevant for the enterprise.",
  },

  {
    id: 'togaf-adm-13',
    domain: 'Architecture Development Method',
    q: 'A large financial institution divides its enterprise architecture across retail banking, wholesale banking, and insurance divisions, each with its own architecture team. Which TOGAF concept describes this?',
    options: [
      'Architecture Partitioning dividing the enterprise into separate managed architecture domains',
      'Architecture Federation combining multiple frameworks into a unified governance approach',
      'Architecture Segmentation grouping related capabilities into a single transformation project',
      'Architecture Scoping limiting the breadth and detail level of an architecture engagement',
    ],
    correct: 0,
    explanation:
      'Architecture Partitioning divides the enterprise into manageable segments — each with defined boundaries, teams, and governance — enabling parallel architecture development without conflict.',
  },

  {
    id: 'togaf-adm-14',
    domain: 'Architecture Development Method',
    q: 'Which ADM phase produces the Architecture Roadmap, showing the sequence of transition architectures needed to reach the target state?',
    options: [
      'Phase E Opportunities and Solutions producing the initial Architecture Roadmap draft',
      'Phase D Technology Architecture producing infrastructure design and platform maps',
      'Phase F Migration Planning finalising and detailing the Architecture Roadmap plan',
      'Phase G Implementation Governance refining the roadmap based on delivery experience',
    ],
    correct: 1,
    explanation:
      'Phase E produces the initial Architecture Roadmap identifying implementation projects and their sequence. Phase F refines and coordinates it — but Phase E is where the roadmap originates.',
  },

  {
    id: 'togaf-adm-15',
    domain: 'Architecture Development Method',
    q: 'An architect identifies that the proposed solution introduces a critical security risk not covered by the current architecture. What should the architect issue to formally document this?',
    options: [
      'Architecture Compliance Assessment evaluating how well the solution meets requirements',
      'Architecture Contract formalising the obligations between sponsor and delivery team',
      'Architecture Waiver temporarily exempting a project from a specific architecture standard',
      'Architecture Dispensation granting permanent exception from an architecture requirement',
    ],
    correct: 2,
    explanation:
      'An Architecture Waiver formally documents that a project is exempt from a specific architecture standard, requirement, or constraint — recording the risk and conditions under which the waiver is granted.',
  },

  {
    id: 'togaf-adm-16',
    domain: 'Architecture Development Method',
    q: 'What is the primary purpose of conducting a gap analysis between the baseline and target architectures in TOGAF?',
    options: [
      'Gap analysis produces the Architecture Vision document for the target enterprise',
      'Gap analysis creates the Statement of Architecture Work authorising the engagement',
      'Gap analysis establishes the Architecture Principles to guide all future decisions',
      'Gap analysis identifies what must be added changed retained or retired between states',
    ],
    correct: 3,
    explanation:
      'Gap analysis compares the baseline and target architectures to identify architecture components that must be added, changed, retained, or retired — the foundation for the Architecture Roadmap and implementation planning.',
  },

  {
    id: 'togaf-adm-17',
    domain: 'Architecture Development Method',
    q: 'An architect ensures that architecture work for a digital transformation project covers only the retail customer experience, explicitly excluding back-office systems. What TOGAF activity is this?',
    options: [
      'Architecture Scoping defining the breadth depth and time horizon of architecture work',
      'Architecture Partitioning dividing the enterprise into independently managed segments',
      "Architecture Tailoring adapting TOGAF processes to fit the enterprise's existing framework",
      'Architecture Governance establishing the oversight processes for architecture conformance',
    ],
    correct: 0,
    explanation:
      'Architecture Scoping defines the boundaries of the architecture engagement — breadth (which domains), depth (level of detail), and time horizon — ensuring the team focuses on the right problem space.',
  },

  {
    id: 'togaf-adm-18',
    domain: 'Architecture Development Method',
    q: 'Which document produced in Phase A describes the key stakeholders, their concerns, business goals, and the high-level architecture approach for the engagement?',
    options: [
      'Statement of Architecture Work defining scope deliverables and acceptance criteria',
      'Architecture Vision summarising stakeholders goals and the proposed solution approach',
      'Architecture Definition Document containing detailed baseline and target architecture views',
      'Request for Architecture Work initiating the architecture engagement from the sponsor',
    ],
    correct: 1,
    explanation:
      'The Architecture Vision document (Phase A output) describes the key stakeholders and their concerns, the business goals and drivers, and the high-level aspirational view of the solution.',
  },

  {
    id: 'togaf-adm-19',
    domain: 'Architecture Development Method',
    q: 'A TOGAF practitioner must decide the right level of detail for each ADM deliverable. Which TOGAF concept guides this decision for a specific engagement?',
    options: [
      'Architecture Principles guiding all decisions about architecture content and approach',
      'Architecture Tailoring adjusting TOGAF depth and formality for the specific context',
      'Architecture Governance enforcing compliance with enterprise standards and policies',
      'Architecture Repository storing all architecture assets for reuse across engagements',
    ],
    correct: 1,
    explanation:
      'Architecture Tailoring adapts the formality, depth, deliverable set, and terminology of TOGAF to the specific organisational context — ensuring proportionate effort for the engagement size.',
  },

  {
    id: 'togaf-adm-20',
    domain: 'Architecture Development Method',
    q: 'Which ADM phase formally closes the current architecture cycle by producing the Architecture Compliance Assessment and capturing lessons learned?',
    options: [
      'Phase G Implementation Governance overseeing active solution delivery conformance',
      'Phase H Architecture Change Management responding to changes after implementation',
      'Phase F Migration Planning coordinating the transition from baseline to target state',
      'Phase E Opportunities and Solutions identifying the implementation project portfolio',
    ],
    correct: 1,
    explanation:
      'Phase H Architecture Change Management monitors the post-implementation environment, handles change requests, and — when major change is needed — triggers a new ADM cycle with captured lessons learned.',
  },

  // ── ARCHITECTURE CONTENT & DELIVERABLES (20 questions) ───────────────────────

  {
    id: 'togaf-content-01',
    domain: 'Architecture Content & Deliverables',
    q: 'A TOGAF practitioner creates an Architecture Building Block for the payment processing capability that can be reused in multiple solution designs. Which content framework category is this?',
    options: [
      'Architecture Building Block a reusable component defining a capability or function',
      'Solution Building Block a specific vendor product or technology implementation',
      'Architecture Principle a rule governing how architecture decisions should be made',
      'Architecture Pattern a proven repeatable solution to a commonly occurring problem',
    ],
    correct: 0,
    explanation:
      'Architecture Building Blocks (ABBs) define capabilities in technology-agnostic terms — they specify WHAT must be done and can be realised by multiple Solution Building Blocks (SBBs).',
  },

  {
    id: 'togaf-content-02',
    domain: 'Architecture Content & Deliverables',
    q: 'An architect selects Microsoft Azure Active Directory as the identity provider to realise the identity management Architecture Building Block. What has been selected?',
    options: [
      'Architecture Building Block defining the identity capability in generic terms',
      'Solution Building Block a specific product or component implementing the capability',
      'Architecture Principle a fundamental rule guiding identity architecture decisions',
      'Architecture Constraint a restriction limiting the implementation technology choices',
    ],
    correct: 1,
    explanation:
      'A Solution Building Block (SBB) is a specific, concrete implementation — a product, service, or technology — that realises an Architecture Building Block in a particular solution context.',
  },

  {
    id: 'togaf-content-03',
    domain: 'Architecture Content & Deliverables',
    q: 'Which TOGAF document contains the complete detailed description of the baseline and target architectures across all four architecture domains?',
    options: [
      'Architecture Vision providing a high-level summary of the proposed solution approach',
      'Architecture Roadmap showing the sequence of projects to reach the target state',
      'Architecture Definition Document containing the detailed architecture content views',
      'Statement of Architecture Work defining scope deliverables and acceptance criteria',
    ],
    correct: 2,
    explanation:
      'The Architecture Definition Document (ADD) is the core TOGAF deliverable — it contains the detailed baseline and target architectures for all domains and the gap analysis between them.',
  },

  {
    id: 'togaf-content-04',
    domain: 'Architecture Development Method',
    q: 'An Architecture Contract is formally signed between the development team and the architecture board. What does this contract specify?',
    options: [
      'Architecture Contract specifying deliverables quality and fitness-for-purpose criteria',
      'Architecture Contract listing all stakeholders and their specific architecture concerns',
      'Architecture Contract defining the principles that guide all architecture decisions',
      'Architecture Contract describing the business goals and drivers for the engagement',
    ],
    correct: 3,
    explanation:
      'An Architecture Contract is the joint agreement between development partners and sponsors on deliverables, quality, and fitness-for-purpose of architecture — formalising obligations of the delivery team.',
  },

  {
    id: 'togaf-content-05',
    domain: 'Architecture Content & Deliverables',
    q: 'A practitioner documents the specific attributes, relationships, and properties of every architecture element using a structured schema. Which TOGAF concept defines this schema?',
    options: [
      'Architecture Building Block defining reusable technology-agnostic capability components',
      'Architecture Metamodel defining the types of entities and relationships in architecture',
      'Architecture Pattern providing a proven reusable solution to a recurring design problem',
      'Architecture Principle providing a rule that guides architecture decision-making always',
    ],
    correct: 1,
    explanation:
      'The Architecture Metamodel defines the entity types (e.g., business actor, application, data entity, technology component) and relationship types that populate the Architecture Repository.',
  },

  {
    id: 'togaf-content-06',
    domain: 'Architecture Content & Deliverables',
    q: 'Which TOGAF deliverable is created specifically to capture architectural decisions, rationale, and the alternatives considered for a significant choice?',
    options: [
      'Architecture Decision Record capturing decisions rationale and alternatives considered',
      'Architecture Requirements Specification listing all requirements the solution must satisfy',
      'Architecture Compliance Assessment evaluating solution conformance to architecture standards',
      'Architecture Vision summarising the high-level solution approach for stakeholder buy-in',
    ],
    correct: 0,
    explanation:
      'Architecture Decision Records (ADRs) formally capture significant architecture decisions, the context and options evaluated, the rationale for the choice, and the implications — creating an audit trail.',
  },

  {
    id: 'togaf-content-07',
    domain: 'Architecture Content & Deliverables',
    q: 'A large programme has multiple projects and the architect needs to show how each project changes specific architecture components over time. Which deliverable maps this?',
    options: [
      'Architecture Roadmap showing implementation projects sequenced towards the target',
      'Architecture Definition Document containing detailed baseline and target architecture',
      'Architecture Vision providing the high-level aspirational picture for stakeholders',
      'Implementation and Migration Plan coordinating project delivery with the roadmap',
    ],
    correct: 0,
    explanation:
      'The Architecture Roadmap maps the sequence of Architecture Building Blocks to be implemented across transition architectures — showing what changes in each project increment towards the target.',
  },

  {
    id: 'togaf-content-08',
    domain: 'Architecture Content & Deliverables',
    q: 'Which TOGAF content artifact describes the qualities, attributes, and measurable criteria that the solution must satisfy, derived from stakeholder requirements?',
    options: [
      'Architecture Principles providing fundamental rules for making architecture decisions',
      'Architecture Requirements Specification listing measurable quality and function requirements',
      'Architecture Definition Document describing the current and target architecture states',
      'Architecture Vision providing the aspirational high-level picture of the solution',
    ],
    correct: 1,
    explanation:
      'The Architecture Requirements Specification translates stakeholder requirements into specific, measurable architecture requirements — the criteria the solution must meet to satisfy the stakeholders.',
  },

  {
    id: 'togaf-content-09',
    domain: 'Architecture Content & Deliverables',
    q: 'An architect creates a model showing system components and their interactions using a specific graphical notation. What is this TOGAF content artifact called?',
    options: [
      'Architecture View a representation of the system from a specific stakeholder viewpoint',
      'Architecture Viewpoint defining the rules for constructing and using a particular view',
      'Architecture Model the formal representation of architecture elements and relationships',
      'Architecture Catalogue a structured list of all identified architecture components',
    ],
    correct: 2,
    explanation:
      'An Architecture Model is the formal representation of architecture elements, their properties, and relationships — it is the underlying model from which views (for different audiences) are derived.',
  },

  {
    id: 'togaf-content-10',
    domain: 'Architecture Content & Deliverables',
    q: 'A chief information security officer needs a representation of the architecture showing only security-relevant components and controls. Which TOGAF concept describes this representation?',
    options: [
      'Architecture Viewpoint defining the conventions for producing a security-focused view',
      'Architecture View the representation of architecture from the CISO stakeholder perspective',
      'Architecture Model containing all architecture elements regardless of audience concerns',
      'Architecture Catalogue listing all security controls and technology components in scope',
    ],
    correct: 1,
    explanation:
      "An Architecture View is a representation of the architecture from a specific stakeholder's perspective — the CISO view would show only security-relevant components, controls, and data flows.",
  },

  {
    id: 'togaf-content-11',
    domain: 'Architecture Content & Deliverables',
    q: 'Which TOGAF deliverable formally records the evaluation of whether a proposed solution meets the architecture requirements and standards?',
    options: [
      'Architecture Compliance Assessment evaluating solution conformance to architecture',
      'Architecture Contract formalising delivery obligations between sponsor and developers',
      'Architecture Decision Record capturing the rationale for a significant architecture choice',
      "Architecture Requirements Specification listing the solution's measurable quality criteria",
    ],
    correct: 0,
    explanation:
      'The Architecture Compliance Assessment formally evaluates whether a solution design conforms to approved architecture standards — it may recommend dispensations, waivers, or design changes.',
  },

  {
    id: 'togaf-content-12',
    domain: 'Architecture Content & Deliverables',
    q: 'A practitioner needs to list all the business processes, applications, data entities, and technology components in scope for the architecture. Which artifact type captures these inventories?',
    options: [
      'Architecture Matrices two-dimensional grids showing cross-domain relationships',
      'Architecture Diagrams visual models of architecture components and their connections',
      'Architecture Principles the rules and guidelines governing architecture decisions',
      'Architecture Catalogues structured inventories listing architecture components by domain',
    ],
    correct: 3,
    explanation:
      'Architecture Catalogues are the TOGAF content artifact type for structured inventories — they list all components (processes, applications, data entities, technology) within a specific architecture domain.',
  },

  {
    id: 'togaf-content-13',
    domain: 'Architecture Content & Deliverables',
    q: 'Which type of TOGAF artifact uses a two-dimensional grid to show the relationships between architecture entities across two domains, such as applications to business processes?',
    options: [
      'Architecture Catalogue listing all components of a single architecture domain',
      'Architecture Matrix showing cross-domain relationships in a structured grid format',
      'Architecture Diagram providing a visual representation of components and connections',
      "Architecture View showing architecture from a specific stakeholder's perspective",
    ],
    correct: 1,
    explanation:
      'Architecture Matrices are two-dimensional grids (e.g., Application-to-Business-Process matrix) that systematically show relationships between components from two different architecture domains.',
  },

  {
    id: 'togaf-content-14',
    domain: 'Architecture Content & Deliverables',
    q: 'An enterprise architect ensures that all project teams receive the Architecture Definition Document before beginning solution design. Why is this document critical?',
    options: [
      'It defines the detailed target state all implementation projects must realise together',
      'It lists all stakeholder names and their contact details for the architecture team',
      'It contains the project schedule milestones and budget for the transformation programme',
      'It describes only the baseline current-state architecture without a target vision',
    ],
    correct: 0,
    explanation:
      'The Architecture Definition Document provides the detailed baseline and target architectures — it is the primary reference document that solution designers and delivery teams must conform to.',
  },

  {
    id: 'togaf-content-15',
    domain: 'Architecture Content & Deliverables',
    q: 'Which TOGAF concept defines the rules and conventions governing how architecture views are constructed, what models they contain, and which stakeholder concerns they address?',
    options: [
      'Architecture Viewpoint defining conventions for constructing and using architecture views',
      'Architecture View a specific representation built according to a defined viewpoint',
      'Architecture Model the underlying formal model from which multiple views are derived',
      'Architecture Principle a fundamental rule guiding all architecture decisions made',
    ],
    correct: 0,
    explanation:
      'An Architecture Viewpoint defines the conventions — notation, modelling techniques, and analytical methods — for constructing an Architecture View that addresses specific stakeholder concerns.',
  },

  {
    id: 'togaf-content-16',
    domain: 'Architecture Content & Deliverables',
    q: 'A TOGAF practitioner creates a model of the target enterprise that all architecture domains reference as their authoritative source of business capabilities. What is this model called?',
    options: [
      'Application Portfolio Map listing all current and target application systems',
      'Technology Landscape showing all infrastructure platforms and their connections',
      'Data Entity Map defining all major data entities and their relationships used',
      'Business Capability Map the authoritative source of enterprise capabilities',
    ],
    correct: 3,
    explanation:
      'The Business Capability Map is the primary TOGAF model of what the enterprise does — it maps all business capabilities that IT must support, serving as the authoritative reference for all architecture domains.',
  },

  {
    id: 'togaf-content-17',
    domain: 'Architecture Content & Deliverables',
    q: 'Which TOGAF deliverable produced in Phase A formally authorises the architecture work to begin and is signed by the sponsoring executive?',
    options: [
      'Architecture Vision outlining the high-level aspirational target solution approach',
      'Architecture Definition Document detailing the baseline and target architecture content',
      'Statement of Architecture Work authorising the scope schedule and approach formally',
      'Architecture Roadmap sequencing the transition architectures towards the target state',
    ],
    correct: 2,
    explanation:
      'The Statement of Architecture Work is the formal authorisation document — signed by the sponsor, it defines the scope, approach, schedule, resources, and acceptance criteria for the architecture project.',
  },

  {
    id: 'togaf-content-18',
    domain: 'Architecture Content & Deliverables',
    q: 'An architect creates a detailed inventory of all application components, their versions, owners, and current maturity levels. Which content artifact is this?',
    options: [
      'Application Architecture Diagram showing application interactions as a visual model',
      'Application Portfolio Catalogue listing all applications with attributes and metadata',
      'Architecture Matrix mapping applications to the business processes they support',
      'Architecture Requirements Specification defining measurable quality criteria for apps',
    ],
    correct: 1,
    explanation:
      'An Architecture Catalogue (in this case an Application Catalogue) is a structured inventory of architecture components with their key attributes — ownership, status, technology, and business context.',
  },

  {
    id: 'togaf-content-19',
    domain: 'Architecture Content & Deliverables',
    q: 'Which TOGAF document produced at the end of Phase G records the final conformance status of each delivered solution against the approved architecture?',
    options: [
      'Architecture Compliance Assessment documenting conformance evaluation results',
      'Implementation and Migration Plan showing project schedules and dependencies',
      'Architecture Change Request formalising a proposed change to the approved architecture',
      'Architecture Contract defining the obligations of the solution delivery organisation',
    ],
    correct: 0,
    explanation:
      'The Architecture Compliance Assessment produced at Phase G completion formally records whether each delivered capability conforms to the approved architecture — identifying any non-conformances and their resolution.',
  },

  {
    id: 'togaf-content-20',
    domain: 'Architecture Content & Deliverables',
    q: 'Which TOGAF artifact type provides a visual representation of architecture components, their relationships, and interactions for a specific architecture domain?',
    options: [
      'Architecture Catalogue a structured list of components with their key attributes',
      'Architecture Matrix a grid showing cross-domain relationships between components',
      'Architecture Diagram a visual representation of components and their relationships',
      'Architecture Viewpoint the conventions governing how diagrams should be constructed',
    ],
    correct: 2,
    explanation:
      'Architecture Diagrams are visual representations of architecture components and their relationships — examples include business process diagrams, application interaction maps, and network topology diagrams.',
  },

  // ── ENTERPRISE CONTINUUM & TOOLS (20 questions) ──────────────────────────────

  {
    id: 'togaf-ec-01',
    domain: 'Enterprise Continuum & Tools',
    q: 'An enterprise architect categorises existing architecture assets from fully generic foundation patterns to highly organisation-specific solutions. Which TOGAF concept provides this classification?',
    options: [
      'Enterprise Continuum classifying architecture assets from generic to specific solutions',
      'Architecture Repository storing all architecture assets for governance and reuse',
      'Architecture Metamodel defining the entity types used to describe architecture content',
      'Architecture Library organising reusable patterns catalogues and reference models',
    ],
    correct: 0,
    explanation:
      'The Enterprise Continuum is a classification scheme ranging from fully generic Foundation Architectures (like TOGAF TRM) to organisation-specific Industry Architectures and enterprise-specific solutions.',
  },

  {
    id: 'togaf-ec-02',
    domain: 'Enterprise Continuum & Tools',
    q: 'An architect consults the TOGAF Technical Reference Model to select standard technology services for a new platform. Which part of the Enterprise Continuum does this model belong to?',
    options: [
      'Foundation Architecture level providing the most generic reusable technology taxonomy',
      'Common Systems Architectures level containing cross-industry middleware and platform patterns',
      'Industry Architectures level providing sector-specific reference models for reuse',
      'Organisation-Specific Architectures level containing enterprise-specific custom solutions',
    ],
    correct: 0,
    explanation:
      'The TOGAF TRM (Technical Reference Model) sits at the Foundation Architecture level of the Enterprise Continuum — it is the most generic, technology-neutral taxonomy of services applicable to any organisation.',
  },

  {
    id: 'togaf-ec-03',
    domain: 'Enterprise Continuum & Tools',
    q: 'A healthcare organisation adopts HL7 FHIR as its data exchange standard, placing it in their Architecture Repository. Which Enterprise Continuum level contains industry-specific reference models?',
    options: [
      'Foundation Architecture containing generic universally applicable technology taxonomies',
      'Common Systems Architectures providing cross-industry middleware and integration patterns',
      'Industry Architectures providing sector-specific reference models for a given industry',
      'Organisation-Specific Architectures containing custom enterprise-specific architecture assets',
    ],
    correct: 2,
    explanation:
      'Industry Architectures in the Enterprise Continuum contain reference models, standards, and patterns specific to a particular industry vertical — like HL7 FHIR for healthcare data exchange.',
  },

  {
    id: 'togaf-ec-04',
    domain: 'Enterprise Continuum & Tools',
    q: 'An architect stores approved architecture building blocks, completed architecture deliverables, and lessons learned in a centralised system for reuse across the organisation. What is this system called?',
    options: [
      'Enterprise Continuum the classification framework for organising architecture assets',
      'Architecture Repository the store of architecture assets governance and reference models',
      'Architecture Metamodel the schema defining entity types in architecture descriptions',
      "Architecture Capability the organisation's ability to perform architecture work effectively",
    ],
    correct: 1,
    explanation:
      'The Architecture Repository is the store of all architecture-related assets — deliverables, building blocks, models, patterns, reference architectures, and governance artefacts — enabling reuse across engagements.',
  },

  {
    id: 'togaf-ec-05',
    domain: 'Enterprise Continuum & Tools',
    q: 'An organisation reuses a data centre consolidation pattern from a previous programme rather than designing from scratch. Which Architecture Repository class contains this reusable pattern?',
    options: [
      'Architecture Landscape storing the current and target state architecture descriptions',
      'Standards Information Base storing mandated external standards and specifications',
      'Architecture Metamodel defining the entity and relationship types for content',
      'Reference Library storing reusable architecture patterns guidance and templates',
    ],
    correct: 3,
    explanation:
      'The Reference Library within the Architecture Repository stores reusable patterns, guidelines, reference architectures, and templates that architects can leverage to accelerate new engagements.',
  },

  {
    id: 'togaf-ec-06',
    domain: 'Enterprise Continuum & Tools',
    q: 'Which Architecture Repository class stores the approved external standards (ISO, IEEE, OASIS) and internal policies that architecture solutions must comply with?',
    options: [
      'Architecture Landscape containing the baseline and target architecture descriptions',
      'Standards Information Base containing approved external and internal standards',
      'Reference Library containing reusable patterns templates and reference architectures',
      'Governance Log recording all governance decisions waivers and compliance assessments',
    ],
    correct: 1,
    explanation:
      'The Standards Information Base (SIB) stores all mandated standards — external (ISO, NIST, OASIS) and internal policies — that must be referenced during architecture development for compliance.',
  },

  {
    id: 'togaf-ec-07',
    domain: 'Enterprise Continuum & Tools',
    q: 'A practitioner reviews the Architecture Repository to find all approved dispensations, waivers, and compliance assessments for active programmes. Which class contains these records?',
    options: [
      'Architecture Landscape describing current baseline and target architecture states',
      'Standards Information Base listing mandatory standards and compliance requirements',
      'Reference Library providing reusable architecture patterns and reference models',
      'Governance Log recording decisions dispensations waivers and compliance assessments',
    ],
    correct: 3,
    explanation:
      'The Governance Log class in the Architecture Repository records all governance decisions, architecture waivers, dispensations granted, and compliance assessment results from Architecture Reviews.',
  },

  {
    id: 'togaf-ec-08',
    domain: 'Enterprise Continuum & Tools',
    q: 'An enterprise adopts an industry-standard API framework and places it between Foundation Architecture patterns and their own custom enterprise solutions. Which Enterprise Continuum level is this?',
    options: [
      'Foundation Architecture providing the most generic universal architecture patterns',
      'Common Systems Architectures providing cross-industry reusable technology patterns',
      'Industry Architectures providing sector-specific reference models and standards',
      "Organisation-Specific Architectures containing the enterprise's own custom solutions",
    ],
    correct: 1,
    explanation:
      'Common Systems Architectures contain cross-industry, technology-specific patterns for common capabilities (security, middleware, integration) — applicable across industries but more specific than Foundation.',
  },

  {
    id: 'togaf-ec-09',
    domain: 'Enterprise Continuum & Tools',
    q: 'Which component of the Architecture Repository stores the current baseline, transition, and target architectures with their architecture models and diagrams?',
    options: [
      'Architecture Landscape containing baseline transition and target architecture states',
      'Standards Information Base storing approved external and internal compliance standards',
      'Reference Library storing reusable patterns templates and reference architectures',
      'Governance Log recording architecture decisions compliance and waiver information',
    ],
    correct: 0,
    explanation:
      'The Architecture Landscape within the Architecture Repository contains the current state (baseline), intermediate states (transition architectures), and end state (target architecture) across all domains.',
  },

  {
    id: 'togaf-ec-10',
    domain: 'Enterprise Continuum & Tools',
    q: 'A financial services architect consults a banking-specific reference model to accelerate the design of a new core banking platform. Which Enterprise Continuum level contains this model?',
    options: [
      'Foundation Architecture providing generic universally applicable technology services',
      'Common Systems Architectures providing cross-industry integration and middleware patterns',
      'Industry Architectures providing sector-specific financial services reference models',
      "Organisation-Specific Architectures containing the bank's own custom platform designs",
    ],
    correct: 2,
    explanation:
      'Industry Architectures contain reference models, patterns, and standards specific to a vertical industry — banking reference architectures (like BIAN) sit at this level of the Enterprise Continuum.',
  },

  {
    id: 'togaf-ec-11',
    domain: 'Enterprise Continuum & Tools',
    q: "An architect ensures that a new integration platform conforms to the enterprise's architecture governance policies before deployment. Which Architecture Repository class records this outcome?",
    options: [
      'Architecture Landscape storing the detailed target architecture definition and models',
      'Standards Information Base listing the mandatory standards the platform must meet',
      'Reference Library providing the integration patterns used in the platform design',
      'Governance Log recording the compliance assessment outcome for the platform',
    ],
    correct: 3,
    explanation:
      'The Governance Log records all Architecture Compliance Assessments — including the outcome, any non-conformances identified, waivers granted, and conditions for approval of the delivered solution.',
  },

  {
    id: 'togaf-ec-12',
    domain: 'Enterprise Continuum & Tools',
    q: 'Which TOGAF tool supports the development of architecture by providing a structured approach to discovering and documenting stakeholder concerns and requirements?',
    options: [
      'Stakeholder Map identifying all stakeholders and their concerns systematically',
      'Architecture Board providing oversight and approval of architecture deliverables',
      'Architecture Compliance Review assessing solution conformance to architecture standards',
      'Architecture Governance Framework defining how architecture decisions are made enforced',
    ],
    correct: 0,
    explanation:
      'The Stakeholder Map is a TOGAF technique that identifies all relevant stakeholders, their roles, concerns, and key issues — ensuring the architecture addresses the right problems for the right audiences.',
  },

  {
    id: 'togaf-ec-13',
    domain: 'Enterprise Continuum & Tools',
    q: 'An organisation maintains a catalogue of all approved technology products and versions that project teams must select from. Which TOGAF concept does this represent?',
    options: [
      'Technology Reference Model providing a generic taxonomy of technology services',
      'Standards Information Base cataloguing approved technologies products and versions',
      'Architecture Building Blocks defining capabilities in technology-agnostic terms always',
      'Enterprise Continuum classifying assets from generic Foundation to specific solutions',
    ],
    correct: 1,
    explanation:
      'The Standards Information Base includes the Technology Standards Catalogue — approved products, versions, and vendors that project teams must select from when implementing technology architecture.',
  },

  {
    id: 'togaf-ec-14',
    domain: 'Enterprise Continuum & Tools',
    q: 'Which TOGAF concept describes the full set of architecture work products (deliverables, artefacts, and building blocks) used in the ADM and stored in the Architecture Repository?',
    options: [
      'Architecture Content Framework defining all work products produced by TOGAF ADM',
      'Architecture Metamodel defining entity types and relationships in architecture content',
      "Architecture Capability defining the organisation's ability to perform architecture work",
      'Enterprise Continuum classifying assets from generic to organisation-specific solutions',
    ],
    correct: 0,
    explanation:
      "The Architecture Content Framework is TOGAF's structured categorisation of all work products — it defines deliverables (contractual), artefacts (non-contractual), and building blocks (reusable components).",
  },

  {
    id: 'togaf-ec-15',
    domain: 'Enterprise Continuum & Tools',
    q: 'An enterprise architect maps each Application Building Block to one or more Business Capability Building Blocks to show alignment. Which Architecture Repository artifact records this?',
    options: [
      'Architecture Matrix showing cross-domain relationships in a structured grid',
      'Architecture Landscape showing baseline and target architecture states over time',
      'Architecture Catalogue listing all application components with their attributes',
      'Architecture Viewpoint defining the conventions for a business-application view',
    ],
    correct: 0,
    explanation:
      'Architecture Matrices (e.g., Application-to-Business Capability matrices) in the Architecture Repository show structured cross-domain relationships — essential for traceability and impact analysis.',
  },

  {
    id: 'togaf-ec-16',
    domain: 'Enterprise Continuum & Tools',
    q: 'Which Architecture Repository class contains architecture models, diagrams, and catalogues produced during ADM phases for the current and future states?',
    options: [
      'Architecture Landscape storing all architectural descriptions of current and target',
      'Standards Information Base storing mandatory standards for architecture compliance',
      'Reference Library storing reusable patterns templates and proven architecture models',
      'Governance Log recording architecture decisions waivers and compliance assessments',
    ],
    correct: 0,
    explanation:
      'The Architecture Landscape class stores all formal architecture descriptions — baseline, transition, and target — across business, data, application, and technology domains produced during ADM.',
  },

  {
    id: 'togaf-ec-17',
    domain: 'Enterprise Continuum & Tools',
    q: 'Which TOGAF technique uses a visual map to show where the enterprise stands on a maturity scale for each architecture domain and capability area?',
    options: [
      'Architecture Maturity Assessment evaluating current capability against defined levels',
      'Gap Analysis comparing baseline and target to identify components to add or change',
      'Stakeholder Map identifying stakeholders and their concerns for architecture engagement',
      'SWOT Analysis assessing strengths weaknesses opportunities and threats in architecture',
    ],
    correct: 0,
    explanation:
      "An Architecture Maturity Assessment evaluates the organisation's current architecture capability against defined maturity levels — providing a baseline for improvement planning and tracking progress.",
  },

  {
    id: 'togaf-ec-18',
    domain: 'Enterprise Continuum & Tools',
    q: 'An architect searches the Architecture Repository for a previously built integration pattern that can be reused for a new API platform. Which class should they search?',
    options: [
      'Architecture Landscape containing baseline and target state architectural models',
      'Standards Information Base containing mandatory standards products and specifications',
      'Reference Library containing reusable patterns templates and reference architectures',
      'Governance Log containing compliance assessments waivers and architecture decisions',
    ],
    correct: 2,
    explanation:
      'The Reference Library stores reusable architecture patterns, templates, guidelines, and reference architectures — the first place to search when starting an architecture to avoid reinventing proven solutions.',
  },

  {
    id: 'togaf-ec-19',
    domain: 'Enterprise Continuum & Tools',
    q: 'A TOGAF practitioner uses a structured technique to systematically understand the viewpoints and key issues of each stakeholder group. What is this technique called?',
    options: [
      'Stakeholder Analysis identifying stakeholders viewpoints concerns and key issues',
      'Business Scenarios defining business problems and the architecture response needed',
      'Gap Analysis comparing baseline and target to identify architecture change required',
      'Driver and Goal Analysis linking business drivers to goals and architecture requirements',
    ],
    correct: 0,
    explanation:
      'Stakeholder Analysis (using a Stakeholder Map and classification grid) systematically identifies all stakeholders, their viewpoints, interests, concerns, and the architecture responses needed to address them.',
  },

  {
    id: 'togaf-ec-20',
    domain: 'Enterprise Continuum & Tools',
    q: 'Which TOGAF concept ensures that architecture assets from previous engagements are discoverable, evaluated for fit, and reused in new projects rather than rebuilt from scratch?',
    options: [
      'Architecture Reuse ensuring assets from previous work are discovered and applied',
      'Architecture Governance enforcing compliance of solutions with approved architecture',
      "Architecture Tailoring adapting TOGAF processes to the enterprise's specific context",
      'Architecture Partitioning dividing large architectures into separately managed segments',
    ],
    correct: 0,
    explanation:
      'Architecture Reuse is supported by the Architecture Repository and Enterprise Continuum — architects search for existing building blocks, patterns, and models before creating new assets from scratch.',
  },

  // ── ARCHITECTURE CAPABILITY & GOVERNANCE (20 questions) ──────────────────────

  {
    id: 'togaf-gov-01',
    domain: 'Architecture Capability & Governance',
    q: 'An organisation establishes a formal body that approves architecture work, resolves conflicts, and ensures compliance with architecture standards across all programmes. What is this body called?',
    options: [
      'Architecture Board providing oversight approval and conflict resolution for architecture',
      'Architecture Review Board evaluating only technical solution designs for compliance',
      'Architecture Forum a community of practice sharing knowledge without formal authority',
      'Architecture Office the team responsible for producing and maintaining architecture work',
    ],
    correct: 0,
    explanation:
      'The Architecture Board is the formal governance body responsible for overseeing architecture activities, approving deliverables, granting dispensations, and resolving architecture conflicts across the enterprise.',
  },

  {
    id: 'togaf-gov-02',
    domain: 'Architecture Capability & Governance',
    q: 'An Architecture Board formally approves an exception that allows a project to use a non-standard technology due to a critical business constraint. What has been issued?',
    options: [
      'Architecture Waiver granting temporary exemption from a specific architecture standard',
      'Architecture Dispensation granting a permanent exception from an architecture requirement',
      'Architecture Compliance Assessment confirming the solution meets all architecture standards',
      'Architecture Contract formalising delivery team obligations to the approved architecture',
    ],
    correct: 1,
    explanation:
      'An Architecture Dispensation grants a permanent exception from an architecture standard or requirement — typically when business, legal, or technical constraints make compliance genuinely impossible.',
  },

  {
    id: 'togaf-gov-03',
    domain: 'Architecture Capability & Governance',
    q: 'Which TOGAF concept describes the set of processes, roles, responsibilities, and structures used to manage architecture across the enterprise?',
    options: [
      'Architecture Board the formal body approving and overseeing architecture decisions',
      'Architecture Repository the central store of all architecture assets and records',
      'Architecture Governance the system of processes roles and structures managing architecture',
      "Architecture Capability the organisation's formalised ability to perform architecture work",
    ],
    correct: 2,
    explanation:
      'Architecture Governance is the system of processes, roles, responsibilities, and structures that manage architecture across the enterprise — ensuring architecture is consistent, compliant, and effective.',
  },

  {
    id: 'togaf-gov-04',
    domain: 'Architecture Capability & Governance',
    q: 'A project team is required to demonstrate that its solution design conforms to the approved enterprise architecture before development begins. Which governance process is this?',
    options: [
      'Architecture Vision Review confirming the high-level solution direction is aligned',
      'Architecture Compliance Review assessing whether the design meets architecture standards',
      'Architecture Board Meeting approving the architecture deliverables for the programme',
      "Architecture Contract Signing formalising the delivery team's commitment to the architecture",
    ],
    correct: 1,
    explanation:
      'An Architecture Compliance Review evaluates whether a solution design conforms to approved architecture standards — conducted at gate reviews before major delivery phases begin.',
  },

  {
    id: 'togaf-gov-05',
    domain: 'Architecture Capability & Governance',
    q: "An enterprise defines its architecture principles including 'Reuse over Buy over Build' as a guiding rule. What characteristic makes a good architecture principle?",
    options: [
      'Architecture principles must be understandable stable robust and complete together',
      'Architecture principles must be technically prescriptive and detailed for implementation',
      'Architecture principles must change frequently to adapt to evolving technology trends',
      'Architecture principles must be approved only by the CTO without business input',
    ],
    correct: 0,
    explanation:
      'Good architecture principles share four characteristics: Understandable (clear to non-architects), Stable (long-lasting), Robust (comprehensive enough to resolve conflicts), and Complete (covering all situations).',
  },

  {
    id: 'togaf-gov-06',
    domain: 'Architecture Capability & Governance',
    q: 'Which TOGAF governance artifact formally records an agreed exception to an architecture standard, including the rationale, risk, and conditions that must be met?',
    options: [
      'Architecture Waiver formally recording temporary exception and conditions imposed',
      'Architecture Contract defining obligations of the development team to architecture',
      'Architecture Compliance Assessment evaluating solution conformance against standards',
      'Architecture Change Request proposing a modification to the approved architecture',
    ],
    correct: 0,
    explanation:
      'An Architecture Waiver formally records that a project is temporarily exempt from a specific standard — documenting the business rationale, risk accepted, and conditions under which the waiver was granted.',
  },

  {
    id: 'togaf-gov-07',
    domain: 'Architecture Capability & Governance',
    q: "An organisation's architecture function matures from ad hoc activities to a recognised capability with defined processes, roles, and governance. What is being established?",
    options: [
      "Architecture Capability the organisation's formalised ability to perform architecture",
      'Architecture Board the formal governance body overseeing architecture decisions made',
      'Architecture Governance the system managing architecture across the enterprise broadly',
      'Architecture Repository the store of all architecture assets and governance records',
    ],
    correct: 0,
    explanation:
      "Architecture Capability refers to the organisation's formalised ability to perform architecture work — including people, processes, tools, governance, and principles established in the Preliminary Phase.",
  },

  {
    id: 'togaf-gov-08',
    domain: 'Architecture Capability & Governance',
    q: 'A programme receives an Architecture Compliance Assessment that identifies significant non-conformances. Which outcome should the Architecture Board consider?',
    options: [
      'Issue a dispensation permanently waiving the non-conforming requirements immediately',
      'Grant an architecture waiver while requiring a remediation plan with defined milestones',
      'Approve the programme unconditionally as all solutions have some non-conformances',
      'Close the programme immediately since non-conformance cannot be tolerated at all',
    ],
    correct: 1,
    explanation:
      'When non-conformances are found, the Architecture Board typically issues a waiver with conditions — requiring a remediation plan that addresses the non-conformance within agreed timeframes.',
  },

  {
    id: 'togaf-gov-09',
    domain: 'Architecture Capability & Governance',
    q: 'Which architecture governance concept ensures that different architecture groups in a federated organisation can operate autonomously while still aligning to enterprise standards?',
    options: [
      'Architecture Governance providing central control over all architecture decisions',
      'Architecture Federation enabling autonomous groups aligned to enterprise standards',
      'Architecture Partitioning dividing the enterprise into independently managed segments',
      'Architecture Board providing central approval authority over all architecture work',
    ],
    correct: 1,
    explanation:
      'Architecture Federation allows distributed architecture groups to operate with autonomy (their own frameworks and standards) while maintaining alignment through agreed inter-operability and enterprise standards.',
  },

  {
    id: 'togaf-gov-10',
    domain: 'Architecture Capability & Governance',
    q: 'An Architecture Board produces a standard template that all projects must use when requesting an architecture review. Which governance instrument is this?',
    options: [
      'Architecture Contract formalising obligations between sponsor and delivery team',
      'Architecture Compliance Assessment recording the outcome of an architecture review',
      'Architecture Governance Framework defining how architecture is managed and enforced',
      'Architecture Review Template standardising the format for requesting governance reviews',
    ],
    correct: 3,
    explanation:
      'Architecture governance instruments include checklists, templates, standards, and guidelines that the Architecture Board uses to manage architecture — review templates ensure consistent information for assessments.',
  },

  {
    id: 'togaf-gov-11',
    domain: 'Architecture Capability & Governance',
    q: "Which TOGAF principle states that the enterprise's IT functions should be managed as an enterprise-wide service available to all business units rather than as isolated silos?",
    options: [
      'Service Orientation — services are the primary mechanism for delivering IT capability',
      'Technology Independence — applications must not depend on specific technology platforms',
      'Compliance with Law — IT decisions must conform to all relevant laws and regulations',
      'IT Responsibility — IT is responsible for enabling enterprise-wide access to IT services',
    ],
    correct: 3,
    explanation:
      "'IT Responsibility' is a common TOGAF Architecture Principle stating that IT management is an enterprise function — IT provides shared services to all business units rather than being individually owned silos.",
  },

  {
    id: 'togaf-gov-12',
    domain: 'Architecture Capability & Governance',
    q: 'An organisation notices that two separate business units have developed conflicting architectures for the same data domain. Which Architecture Board responsibility addresses this conflict?',
    options: [
      'Architecture Board approving all deliverables and managing their quality standards',
      'Architecture Board providing dispute resolution for architecture conflicts between units',
      'Architecture Board maintaining the Architecture Repository and its governance log',
      'Architecture Board issuing dispensations and waivers for non-conforming projects',
    ],
    correct: 1,
    explanation:
      'Dispute resolution is a key Architecture Board responsibility — when business units develop conflicting architectures, the board mediates and determines the authoritative architectural direction.',
  },

  {
    id: 'togaf-gov-13',
    domain: 'Architecture Capability & Governance',
    q: "Which document formally defines an organisation's overall approach to managing architecture, including governance structures, roles, and processes?",
    options: [
      'Architecture Governance Framework defining governance structures roles and processes',
      'Architecture Principles Document listing the fundamental rules guiding decisions',
      'Statement of Architecture Work authorising a specific architecture engagement formally',
      'Architecture Vision summarising the high-level solution for a specific engagement',
    ],
    correct: 0,
    explanation:
      'The Architecture Governance Framework defines the overall approach to architecture governance — structures, roles, processes, and instruments used to oversee architecture across the enterprise.',
  },

  {
    id: 'togaf-gov-14',
    domain: 'Architecture Capability & Governance',
    q: 'A TOGAF architecture team assesses how well the delivered solution aligns with the approved architecture and documents the result formally. What is the output of this activity?',
    options: [
      'Architecture Compliance Assessment formally documenting the conformance evaluation',
      'Architecture Waiver granting a temporary exception to an architecture standard',
      'Architecture Change Request proposing a modification to the approved target architecture',
      'Architecture Contract committing the delivery team to the architecture requirements',
    ],
    correct: 0,
    explanation:
      'An Architecture Compliance Assessment is the formal output of a compliance review — it documents the evaluation against architecture standards, identifies non-conformances, and recommends actions.',
  },

  {
    id: 'togaf-gov-15',
    domain: 'Architecture Capability & Governance',
    q: 'An organisation wants to ensure that architecture work is performed consistently and that architecture assets are reused across programmes. Which capability supports this?',
    options: [
      'Architecture Capability providing consistent governance tools processes and repository',
      'Architecture Board enforcing compliance of all solutions with approved architecture',
      'Architecture Governance ensuring programmes conform to architecture standards always',
      'Architecture Partitioning enabling independent architecture teams per business domain',
    ],
    correct: 0,
    explanation:
      'Architecture Capability encompasses the people, processes, tools, and governance that enable consistent, high-quality architecture work — including the Repository that enables asset reuse across programmes.',
  },

  {
    id: 'togaf-gov-16',
    domain: 'Architecture Capability & Governance',
    q: "Which governance activity ensures that a completed project's architecture outputs are archived and lessons learned are incorporated into the Architecture Repository for future use?",
    options: [
      'Architecture Closeout capturing lessons learned and archiving deliverables formally',
      'Architecture Compliance Review assessing the solution before final delivery approval',
      'Architecture Change Request proposing amendments to the target architecture state',
      'Architecture Board Review approving the architecture deliverables for a programme',
    ],
    correct: 0,
    explanation:
      'Architecture Closeout formally concludes the architecture engagement — archiving deliverables in the Repository, capturing lessons learned, and updating reusable assets for future architecture work.',
  },

  {
    id: 'togaf-gov-17',
    domain: 'Architecture Capability & Governance',
    q: 'An architecture board member reviews a change request proposing migration to a new cloud platform. Which governance instrument formalises the approval of this change?',
    options: [
      'Architecture Change Record formally documenting the approved change to architecture',
      'Architecture Waiver granting temporary exception from the existing architecture standard',
      'Architecture Dispensation permanently exempting a project from a specific requirement',
      'Architecture Compliance Assessment evaluating the proposed change against standards',
    ],
    correct: 0,
    explanation:
      'An Architecture Change Record formally documents an approved change to the architecture baseline — including the change description, rationale, impact assessment, and board decision.',
  },

  {
    id: 'togaf-gov-18',
    domain: 'Architecture Capability & Governance',
    q: 'Which role in TOGAF is responsible for leading the architecture team, chairing the Architecture Board, and acting as the primary interface between architecture and executive leadership?',
    options: [
      'Chief Architect or Enterprise Architect leading the architecture function overall',
      'Architecture Board Member providing domain expertise for governance decisions made',
      'Architecture Owner responsible for a specific architecture domain or programme area',
      'Solution Architect responsible for designing individual solution implementations',
    ],
    correct: 0,
    explanation:
      'The Chief Architect (or lead Enterprise Architect) leads the architecture capability, chairs the Architecture Board, defines architecture principles, and is accountable to executive leadership for architecture outcomes.',
  },

  {
    id: 'togaf-gov-19',
    domain: 'Architecture Capability & Governance',
    q: 'A programme proposes a technology that violates an enterprise standard but is the only viable option for a critical regulatory requirement. Which governance path is appropriate?',
    options: [
      'Request a dispensation documenting the regulatory driver risk and board approval',
      'Proceed without formal approval since regulatory requirements override architecture',
      'Request the Architecture Board to immediately update the enterprise standard instead',
      'Cancel the programme since technology standards cannot be violated under any conditions',
    ],
    correct: 0,
    explanation:
      'A Dispensation is the appropriate governance instrument when a genuine irresolvable constraint (such as a regulatory requirement) makes compliance with a specific standard impossible — formally documenting the exception.',
  },

  {
    id: 'togaf-gov-20',
    domain: 'Architecture Capability & Governance',
    q: 'Which TOGAF governance concept ensures that architectures developed for specific projects remain aligned with the enterprise-wide architecture and do not create conflicting silos?',
    options: [
      'Architecture Governance ensuring project architectures align with enterprise architecture',
      'Architecture Partitioning dividing architecture into autonomous independently managed domains',
      'Architecture Federation enabling distributed groups to align while operating autonomously',
      'Architecture Tailoring adapting TOGAF processes to the specific context of each project',
    ],
    correct: 0,
    explanation:
      'Architecture Governance encompasses the processes, structures, and instruments that ensure all project-level architecture decisions remain aligned with — and do not contradict — the enterprise architecture.',
  },
];
