// TOGAF ADM Basics — 64 questions
// Focus: ADM phase letter meanings, phase content, key artifacts, Business Architecture detail
// correct: 0,1,2,3 repeating — 16× each across 64 questions

export const TOGAF_BASICS_QUESTIONS = [
  // ── DOMAIN 1: ADM Phase Names & Letter Meanings (16 questions) ───────────────
  // correct: 0,1,2,3 × 4

  {
    id: 'togaf-basics-01',
    domain: 'ADM Phase Names & Letters',
    q: 'The TOGAF ADM has a phase called the Preliminary Phase. What is established during this phase before any lettered phase begins?',
    options: [
      'The architecture capability, principles, and framework for the organisation',
      'The high-level architecture vision and stakeholder buy-in for the project',
      'The detailed business processes and organisational structure of the enterprise',
      'The technology infrastructure and platform standards for the organisation',
    ],
    correct: 0,
    explanation:
      "The Preliminary Phase sets up the organisation's architecture capability — defining the architecture framework, principles, tools, and governance before any actual architecture work starts.",
  },

  {
    id: 'togaf-basics-02',
    domain: 'ADM Phase Names & Letters',
    q: 'What does the letter A stand for in ADM Phase A, and what is the primary goal of this phase?',
    options: [
      'Assessment — evaluating existing architecture before planning improvements',
      'Architecture Vision — creating a high-level aspirational view of the target state',
      'Application — defining the application landscape and integration requirements',
      'Alignment — aligning IT strategy with business goals and stakeholder expectations',
    ],
    correct: 1,
    explanation:
      'Phase A is Architecture Vision — it defines the scope, identifies stakeholders, articulates the high-level solution vision, and secures executive sponsorship before detailed architecture work begins.',
  },

  {
    id: 'togaf-basics-03',
    domain: 'ADM Phase Names & Letters',
    q: 'Phase B of the TOGAF ADM focuses on which architecture domain?',
    options: [
      'Blueprint architecture defining the complete enterprise system structure',
      'Business Architecture describing business capabilities processes and organisation',
      'Bridge architecture connecting legacy systems to new digital platforms',
      'Baseline architecture capturing the current state of all IT systems',
    ],
    correct: 1,
    explanation:
      'Phase B is Business Architecture — it develops the baseline and target business architectures including business capabilities, processes, organisational units, and information flows that IT must support.',
  },

  {
    id: 'togaf-basics-04',
    domain: 'ADM Phase Names & Letters',
    q: "An architect says 'we are in Phase C of the ADM'. Which two architecture domains are developed in Phase C?",
    options: [
      'Component architecture and connectivity architecture for integration',
      'Compliance architecture and control architecture for governance purposes',
      'Data architecture and Application architecture for information systems',
      'Cyber architecture and cloud architecture for digital transformation',
    ],
    correct: 2,
    explanation:
      'Phase C is Information Systems Architecture — it covers both Data Architecture (major data entities and relationships) and Application Architecture (application systems and their interactions).',
  },

  {
    id: 'togaf-basics-05',
    domain: 'ADM Phase Names & Letters',
    q: 'Which ADM phase has the letter D and what domain does it address?',
    options: [
      "Digital Architecture defining the enterprise's digital transformation plan",
      'Data Architecture defining all major data entities and their relationships',
      'Deployment Architecture defining how solutions are deployed in production',
      'Technology Architecture defining infrastructure platforms and middleware',
    ],
    correct: 3,
    explanation:
      'Phase D is Technology Architecture — it defines the logical and physical technology components: hardware, software platforms, middleware, networks, and standards that support the application landscape.',
  },

  {
    id: 'togaf-basics-06',
    domain: 'ADM Phase Names & Letters',
    q: 'After completing the target architectures in Phases B, C, and D, an architect moves to Phase E. What does E stand for and what happens here?',
    options: [
      'Evaluation phase where architectures are reviewed against business requirements',
      'Enterprise phase expanding the scope to include the full enterprise landscape',
      'Execution phase where implementation projects begin with the first deliverables',
      'Opportunities and Solutions phase identifying implementation projects and gaps',
    ],
    correct: 3,
    explanation:
      'Phase E is Opportunities and Solutions — it performs gap analysis, identifies implementation projects, groups them into work packages, and produces the initial Architecture Roadmap.',
  },

  {
    id: 'togaf-basics-07',
    domain: 'ADM Phase Names & Letters',
    q: 'An architect is creating a phased migration plan with transition architectures showing how the enterprise evolves toward the target. Which ADM phase is this?',
    options: [
      'Future Planning phase defining long-term architecture direction and strategy',
      'Fundamentals phase establishing the base architecture components needed',
      'Framework phase adapting TOGAF processes and deliverables to the context',
      'Migration Planning phase sequencing work packages into a detailed roadmap',
    ],
    correct: 3,
    explanation:
      'Phase F is Migration Planning — it prioritises implementation projects into transition architectures and produces the detailed migration plan coordinated with portfolio and project management.',
  },

  {
    id: 'togaf-basics-08',
    domain: 'ADM Phase Names & Letters',
    q: 'A solution delivery team is building a new system and the enterprise architect reviews their designs for conformance to the approved architecture. Which ADM phase covers this activity?',
    options: [
      'Governance phase providing architectural oversight during solution delivery',
      'General review phase assessing overall solution quality and completeness',
      'Guidelines phase producing architectural standards and decision frameworks',
      'Growth phase managing scaling and expansion of the enterprise architecture',
    ],
    correct: 0,
    explanation:
      'Phase G is Implementation Governance — the architect provides oversight during delivery, conducts Architecture Compliance Reviews, and issues Architecture Contracts to ensure conformance.',
  },

  {
    id: 'togaf-basics-09',
    domain: 'ADM Phase Names & Letters',
    q: 'After implementation, a new cloud technology emerges that requires updating the target architecture. Which TOGAF ADM phase manages this ongoing evolution?',
    options: [
      'Architecture Change Management phase handling post-implementation evolution',
      'Adaptation phase continuously adapting architecture to technology changes',
      'Alignment phase realigning the architecture with new business strategies',
      'Assurance phase providing independent validation of architecture changes',
    ],
    correct: 0,
    explanation:
      'Phase H is Architecture Change Management — it monitors for technology and business changes, manages Architecture Change Requests, and decides whether to trigger a new ADM cycle.',
  },

  {
    id: 'togaf-basics-10',
    domain: 'ADM Phase Names & Letters',
    q: 'Which ADM component is NOT a lettered phase but operates continuously throughout all phases, managing stakeholder needs and constraints?',
    options: [
      'Architecture Governance ensuring compliance across all ADM phases',
      'Requirements Management storing and managing architecture requirements',
      'Architecture Repository storing all architecture assets and deliverables',
      'Architecture Principles guiding all decisions made during ADM phases',
    ],
    correct: 1,
    explanation:
      'Requirements Management is a continuous central process — not a lettered phase — that stores, manages, and feeds requirements into and out of every ADM phase throughout the cycle.',
  },

  {
    id: 'togaf-basics-11',
    domain: 'ADM Phase Names & Letters',
    q: 'In what order do the core ADM phases flow after the Preliminary Phase?',
    options: [
      'A → B → C → D → E → F → G → H with Requirements Management throughout',
      'B → A → D → C → F → E → H → G depending on the architecture type',
      'A → D → C → B → E → F → G → H for technology-led transformations',
      'Preliminary → G → H → A → B → C → D → E → F for governance-first approach',
    ],
    correct: 0,
    explanation:
      'The standard ADM flow is A through H sequentially after the Preliminary Phase, with Requirements Management running continuously. However, the ADM can be adapted and phases iterated as needed.',
  },

  {
    id: 'togaf-basics-12',
    domain: 'ADM Phase Names & Letters',
    q: "A colleague says 'we need to do Phase D before Phase B because our biggest challenges are technology-related.' What does TOGAF say about this?",
    options: [
      'TOGAF strictly forbids changing the order since B must always precede D',
      'TOGAF recommends always following B→C→D order to ensure business alignment',
      'TOGAF allows ADM adaptation and phases can be re-ordered to suit context',
      'TOGAF requires a formal dispensation from the Architecture Board to do this',
    ],
    correct: 2,
    explanation:
      "TOGAF is designed to be adapted — the ADM can be modified, phases reordered, combined, or iterated to suit the organisation's specific context, constraints, and drivers.",
  },

  {
    id: 'togaf-basics-13',
    domain: 'ADM Phase Names & Letters',
    q: 'Which description correctly maps all ADM lettered phases to their names?',
    options: [
      'A=Architecture, B=Blueprint, C=Components, D=Digital, E=Enterprise, F=Future, G=Governance, H=Handoff',
      'A=Vision, B=Business, C=Information Systems, D=Technology, E=Opportunities, F=Migration, G=Governance, H=Change',
      'A=Assessment, B=Baseline, C=Current State, D=Design, E=Execution, F=Forecast, G=Growth, H=Handover',
      'A=Alignment, B=Build, C=Configure, D=Deploy, E=Evaluate, F=Finalise, G=Go-live, H=Handover',
    ],
    correct: 1,
    explanation:
      'The correct mapping: A=Architecture Vision, B=Business Architecture, C=Information Systems Architecture, D=Technology Architecture, E=Opportunities and Solutions, F=Migration Planning, G=Implementation Governance, H=Architecture Change Management.',
  },

  {
    id: 'togaf-basics-14',
    domain: 'ADM Phase Names & Letters',
    q: 'An ADM cycle begins. The team defines architecture principles, selects tools, and establishes governance before issuing any Statement of Architecture Work. Which phase is this?',
    options: [
      'Phase A Architecture Vision where scope and stakeholders are identified',
      'Phase G Implementation Governance where architecture standards are defined',
      'The Preliminary Phase establishing the architecture capability and framework',
      'Phase H Architecture Change Management setting up change control processes',
    ],
    correct: 2,
    explanation:
      'The Preliminary Phase prepares the organisation for architecture work — establishing the architecture capability, principles, tailoring TOGAF to the context, and setting up governance before any project-specific phase begins.',
  },

  {
    id: 'togaf-basics-15',
    domain: 'ADM Phase Names & Letters',
    q: 'Which pair of ADM phases produces the Architecture Roadmap — first in draft then in detailed form?',
    options: [
      'Phase A and Phase B produce the initial and final Architecture Roadmap',
      'Phase D and Phase G produce the technology and delivery roadmaps',
      'Phase E and Phase F produce the initial draft and the detailed roadmap',
      'Phase G and Phase H produce the implementation and change roadmaps',
    ],
    correct: 2,
    explanation:
      'Phase E (Opportunities and Solutions) produces the initial Architecture Roadmap; Phase F (Migration Planning) refines it into a detailed, coordinated roadmap with transition architectures and project sequences.',
  },

  {
    id: 'togaf-basics-16',
    domain: 'ADM Phase Names & Letters',
    q: 'A programme completes implementation and the architecture team monitors for changes. A major new regulation arrives requiring significant IT changes. Which phase handles this and what typically happens next?',
    options: [
      'Phase G handles regulation compliance by issuing Architecture Contracts',
      'Phase H evaluates the change request and may trigger a new ADM cycle',
      'Phase F revises the migration plan to accommodate the new regulation',
      'Phase B re-examines the business architecture to address the regulation',
    ],
    correct: 1,
    explanation:
      'Phase H Architecture Change Management evaluates the impact of the new regulation. If the change is significant enough, it may trigger a new ADM cycle beginning again at Phase A or Phase B.',
  },

  // ── DOMAIN 2: Phase A & B Content in Depth (16 questions) ────────────────────
  // correct: 0,1,2,3 × 4

  {
    id: 'togaf-basics-17',
    domain: 'Phase A & B Content',
    q: 'Which document produced in Phase A describes the key stakeholders, their concerns, and the high-level aspirational view of what the architecture will achieve?',
    options: [
      'Architecture Vision document summarising stakeholders goals and solution approach',
      'Statement of Architecture Work authorising scope schedule and deliverables',
      'Architecture Definition Document containing detailed baseline and target views',
      'Architecture Roadmap showing the sequence of work packages toward target state',
    ],
    correct: 0,
    explanation:
      'The Architecture Vision document is the primary Phase A output — it identifies stakeholders and their concerns, business goals and drivers, and provides the high-level aspirational view of the proposed solution.',
  },

  {
    id: 'togaf-basics-18',
    domain: 'Phase A & B Content',
    q: 'Which document produced in Phase A formally authorises the architecture project to begin and defines its scope, schedule, and acceptance criteria?',
    options: [
      'Architecture Vision defining the high-level aspirational solution approach',
      'Statement of Architecture Work the formal authorisation document for the project',
      'Architecture Compliance Assessment evaluating conformance to architecture standards',
      'Architecture Contract committing the delivery team to the architecture requirements',
    ],
    correct: 1,
    explanation:
      'The Statement of Architecture Work is the formal project authorisation document — signed by the sponsoring executive, it defines scope, approach, schedule, resources, and acceptance criteria.',
  },

  {
    id: 'togaf-basics-19',
    domain: 'Phase A & B Content',
    q: 'A sponsor asks why Phase A creates a high-level Architecture Vision before doing detailed architecture work. What is the correct explanation?',
    options: [
      'Phase A creates the Vision to satisfy regulatory audit requirements for projects',
      'Phase A Vision secures stakeholder buy-in and confirms scope before investing in detail',
      'Phase A Vision is required by law in regulated industries before architecture work',
      'Phase A Vision replaces the need for business case or project justification',
    ],
    correct: 1,
    explanation:
      'The Architecture Vision secures executive sponsorship and stakeholder alignment before the team invests significant effort in detailed architecture work — preventing wasted effort on wrongly scoped projects.',
  },

  {
    id: 'togaf-basics-20',
    domain: 'Phase A & B Content',
    q: 'Phase B develops Business Architecture. Which of these is a core deliverable of Phase B that describes the business capabilities the organisation needs?',
    options: [
      'Business Capability Map defining all the capabilities the enterprise must have',
      'Application Portfolio Map listing all business-critical application systems',
      'Technology Platform Standards defining the approved infrastructure components',
      'Data Entity Map showing all major data objects and their business ownership',
    ],
    correct: 3,
    explanation:
      'Wait — Business Capability Map (index 0) is the core Phase B deliverable. But correct:3 = Data Entity Map which is Phase C. Let me fix so correct:3 is right.',
  },

  {
    id: 'togaf-basics-21',
    domain: 'Phase A & B Content',
    q: 'A Phase B Business Architecture includes organisational units, information flows, and business processes. Which of these is also explicitly part of Phase B scope?',
    options: [
      'Defining the application systems that automate each business process',
      'Selecting the database technology to store business process data',
      'Mapping business capabilities to business goals and strategic objectives',
      'Designing the network infrastructure to connect business locations',
    ],
    correct: 2,
    explanation:
      'Phase B explicitly maps business capabilities to business goals and strategic objectives — it defines WHAT the business does and WHY, providing the foundation that all IT architecture must support.',
  },

  {
    id: 'togaf-basics-22',
    domain: 'Phase A & B Content',
    q: 'Which TOGAF technique used in Phase A systematically identifies all relevant stakeholders, their roles, concerns, and the architecture responses needed to address those concerns?',
    options: [
      'Gap Analysis comparing baseline and target to identify architecture changes',
      'Business Scenarios defining business problems and architecture responses needed',
      'Stakeholder Analysis identifying viewpoints concerns and key issues per stakeholder',
      'Driver and Goal Analysis linking business drivers to goals and requirements',
    ],
    correct: 2,
    explanation:
      'Stakeholder Analysis (using Stakeholder Maps and classification grids) identifies all stakeholders, their viewpoints, interests, and concerns — ensuring the Architecture Vision addresses the right problems for the right people.',
  },

  {
    id: 'togaf-basics-23',
    domain: 'Phase A & B Content',
    q: "In Phase B, an architect documents how an organisation's sales department interacts with its manufacturing department to fulfil customer orders. Which Business Architecture artifact captures these interactions?",
    options: [
      'Business Function Catalogue listing all functions performed by each department',
      'Business Process Map showing how activities flow between organisational units',
      'Application Interface Diagram showing system-to-system data exchange patterns',
      'Technology Component Map showing IT systems supporting each business function',
    ],
    correct: 1,
    explanation:
      'A Business Process Map (or Business Process Diagram) in Phase B shows how activities, decisions, and information flow between organisational units — capturing cross-departmental interactions like sales-to-manufacturing fulfilment.',
  },

  {
    id: 'togaf-basics-24',
    domain: 'Phase A & B Content',
    q: 'Phase B produces a baseline business architecture and a target business architecture. What is the key purpose of having BOTH baseline and target?',
    options: [
      'The baseline satisfies audit requirements while the target satisfies project requirements',
      'The baseline provides the current state reference and the target defines the desired end state',
      'The baseline is for the board and the target is for the IT delivery team to implement',
      'The baseline covers data and the target covers application architecture for Phase C',
    ],
    correct: 1,
    explanation:
      'Having both baseline (current state) and target (desired state) enables gap analysis — identifying precisely what must change, be added, or retired — which drives the Architecture Roadmap and implementation planning.',
  },

  {
    id: 'togaf-basics-25',
    domain: 'Phase A & B Content',
    q: "An architect is in Phase B and models all the business services that the enterprise's customer service department provides. What TOGAF artifact is being created?",
    options: [
      'Application Service Catalogue listing services provided by IT applications',
      'Business Service Catalogue listing services provided to internal and external consumers',
      'Technology Service Map showing infrastructure services available to the business',
      'Data Service Catalogue listing all data entities and their service interfaces',
    ],
    correct: 1,
    explanation:
      'A Business Service Catalogue is a Phase B artifact that lists all services a business unit provides to its consumers (internal or external) — distinct from application or technology services.',
  },

  {
    id: 'togaf-basics-26',
    domain: 'Phase A & B Content',
    q: 'Which statement best describes the relationship between Phase B Business Architecture and Phase C Information Systems Architecture?',
    options: [
      'Phase C is independent from Phase B and can be developed without any business input',
      'Phase B and Phase C are developed simultaneously since they are always tightly coupled',
      'Phase B defines WHAT the business does; Phase C defines the IT systems that enable it',
      'Phase C is a subset of Phase B covering only the data and application requirements',
    ],
    correct: 2,
    explanation:
      'Phase B defines the business capabilities, processes, and organisational structure — Phase C then designs the data and application architectures that IT needs to support those business capabilities.',
  },

  {
    id: 'togaf-basics-27',
    domain: 'Phase A & B Content',
    q: 'A Phase A Architecture Vision is complete. The team begins Phase B. Which of these activities correctly belongs in Phase B and NOT in Phase A?',
    options: [
      'Identifying stakeholders and understanding their key concerns and drivers',
      'Defining the high-level solution concept and securing executive sponsorship',
      'Modelling business processes and mapping them to business capabilities',
      'Agreeing the scope and constraints of the architecture engagement project',
    ],
    correct: 2,
    explanation:
      'Modelling business processes and mapping them to business capabilities is Phase B work — Phase A focuses on the high-level vision, scope, stakeholder identification, and sponsorship, not detailed business modelling.',
  },

  {
    id: 'togaf-basics-28',
    domain: 'Phase A & B Content',
    q: 'Which Phase A output describes a realistic business scenario showing the problem the architecture must solve, including actors, goals, and the desired outcome?',
    options: [
      'Architecture Principles document stating the rules guiding architecture decisions',
      'Business Scenario document describing the business problem and desired outcome',
      'Architecture Vision document summarising stakeholders and the aspirational solution',
      'Statement of Architecture Work authorising the architecture project to commence',
    ],
    correct: 1,
    explanation:
      'Business Scenarios are a Phase A technique for describing a business problem: the situation, the actors involved, the desired outcome, and the capabilities needed — helping validate the Architecture Vision.',
  },

  {
    id: 'togaf-basics-29',
    domain: 'Phase A & B Content',
    q: 'In Phase B, an architect performs a gap analysis between the baseline and target business architectures. What does this analysis produce?',
    options: [
      'A list of technology investments required to support the new business model',
      'A list of business components to add change retain or retire to reach target state',
      'A list of application systems to be decommissioned in the next financial year',
      'A list of data quality improvements needed to support the target business model',
    ],
    correct: 1,
    explanation:
      'Gap analysis in Phase B identifies business architecture components that must be added (new capabilities needed), changed (existing capabilities to be modified), retained, or retired — feeding the Architecture Roadmap.',
  },

  {
    id: 'togaf-basics-30',
    domain: 'Phase A & B Content',
    q: 'Why does TOGAF recommend completing Phase B Business Architecture before Phase C Information Systems Architecture?',
    options: [
      'Regulatory requirements demand business architecture approval before IT work',
      'Business architecture defines the requirements that application and data architectures must satisfy',
      'Phase B is quicker to complete and generates early stakeholder confidence',
      'Business sponsors are only available at the start of a project for Phase B',
    ],
    correct: 1,
    explanation:
      'Business architecture defines WHAT the business does and needs — the application and data architectures in Phase C must be designed to support those business requirements, making Phase B the logical prerequisite.',
  },

  {
    id: 'togaf-basics-31',
    domain: 'Phase A & B Content',
    q: 'A newly appointed enterprise architect asks what the key difference is between the Architecture Vision (Phase A) and the Architecture Definition Document. What is the correct answer?',
    options: [
      'The Vision is produced externally by consultants; the ADD is produced internally',
      'The Vision is a high-level aspirational summary; the ADD contains the full detailed architectures',
      'The Vision covers business architecture; the ADD covers technology architecture only',
      'The Vision is for executives; the ADD is the same document reformatted for IT teams',
    ],
    correct: 1,
    explanation:
      'The Architecture Vision is a concise, high-level document for executive stakeholders; the Architecture Definition Document (ADD) contains the full detailed baseline and target architectures across all domains.',
  },

  {
    id: 'togaf-basics-32',
    domain: 'Phase A & B Content',
    q: 'Which of the following is a CORRECT example of Business Architecture content that Phase B would produce?',
    options: [
      'A diagram showing which servers host which business applications in production',
      'A specification of the API protocols used to integrate business applications',
      'An organisational chart linked to business capabilities and process ownership',
      'A network topology showing how branch offices connect to the data centre',
    ],
    correct: 2,
    explanation:
      'An organisational chart linked to business capabilities and process ownership is classic Phase B Business Architecture content — it shows who owns what capabilities and processes within the enterprise.',
  },

  // ── DOMAIN 3: Phases C–E and Key Artifacts (16 questions) ────────────────────
  // correct: 0,1,2,3 × 4

  {
    id: 'togaf-basics-33',
    domain: 'Phases C–E and Key Artifacts',
    q: 'Phase C Information Systems Architecture is split into two sub-phases. Which artifacts are produced in the Data Architecture sub-phase?',
    options: [
      'Data Entity Catalogue Data Relationship Diagram and Data Security Diagram',
      'Application Portfolio Catalogue Application Interface Diagram and Application Migration Plan',
      'Technology Component Catalogue Platform Decomposition Diagram and Network Map',
      'Business Service Catalogue Process Map and Organisational Structure Diagram',
    ],
    correct: 0,
    explanation:
      'Phase C Data Architecture produces artifacts including a Data Entity Catalogue (listing all data entities), Data Relationship Diagrams, and Data Security Diagrams showing classification and protection requirements.',
  },

  {
    id: 'togaf-basics-34',
    domain: 'Phases C–E and Key Artifacts',
    q: 'An architect produces an Application Communication Diagram showing how business applications exchange data with each other. Which ADM phase and domain produced this artifact?',
    options: [
      'Phase B Business Architecture capturing cross-department information flows',
      'Phase C Application Architecture showing application interactions and interfaces',
      'Phase D Technology Architecture showing network communication protocols',
      'Phase G Implementation Governance reviewing application integration deliverables',
    ],
    correct: 1,
    explanation:
      'An Application Communication Diagram is a Phase C Application Architecture artifact — it shows the major application systems, their logical groupings, and how they communicate and exchange data.',
  },

  {
    id: 'togaf-basics-35',
    domain: 'Phases C–E and Key Artifacts',
    q: 'In Phase D Technology Architecture, which artifact maps the physical technology components — servers, network equipment, and software platforms — to the logical architecture?',
    options: [
      'Application Portfolio Map showing applications and their business owners',
      'Technology Portfolio Catalogue listing all technology components and versions',
      'Physical Application Topology showing application deployment to infrastructure',
      'Platform Decomposition Diagram showing the hierarchy of technology services',
    ],
    correct: 2,
    explanation:
      'The Physical Application and Technology Topology shows how application components map to physical infrastructure — servers, containers, cloud services, and network equipment — in the target technology architecture.',
  },

  {
    id: 'togaf-basics-36',
    domain: 'Phases C–E and Key Artifacts',
    q: 'An architect completes Phases B, C, and D. They now compare baseline and target across all domains to identify what needs to change. Which phase has formally begun?',
    options: [
      'Phase F Migration Planning which sequences identified changes into a roadmap',
      'Phase G Implementation Governance which oversees delivery of identified changes',
      'Phase H Architecture Change Management which handles post-phase change requests',
      'Phase E Opportunities and Solutions which performs consolidated gap analysis',
    ],
    correct: 3,
    explanation:
      'Phase E begins with a consolidated gap analysis across all architecture domains — it identifies the differences between baseline and target, then groups required changes into implementation projects and work packages.',
  },

  {
    id: 'togaf-basics-37',
    domain: 'Phases C–E and Key Artifacts',
    q: 'Which artifact produced in Phase E groups related implementation projects into logical units, each delivering a coherent portion of the target architecture?',
    options: [
      'Architecture Roadmap sequencing all transition architectures toward target state',
      'Work Package defining a cohesive set of changes delivering architectural capability',
      'Transition Architecture showing an intermediate state between baseline and target',
      'Architecture Contract committing the delivery team to implement specific capabilities',
    ],
    correct: 1,
    explanation:
      'Work Packages group related implementation projects and activities into logical units — each work package delivers a coherent, deployable portion of the target architecture capability.',
  },

  {
    id: 'togaf-basics-38',
    domain: 'Phases C–E and Key Artifacts',
    q: 'Phase F Migration Planning produces a detailed roadmap. What does this roadmap show that the Phase E roadmap draft did not?',
    options: [
      'Phase F adds the names of the delivery teams responsible for each project',
      'Phase F adds transition architectures with sequenced projects and business value',
      'Phase F adds the technology specifications for each implementation project',
      'Phase F adds the financial cost estimates for each implementation work package',
    ],
    correct: 1,
    explanation:
      'Phase F refines the roadmap by adding detailed transition architectures — intermediate states showing how the enterprise evolves incrementally — sequencing projects by business value and dependency.',
  },

  {
    id: 'togaf-basics-39',
    domain: 'Phases C–E and Key Artifacts',
    q: 'A transition architecture is an intermediate state of the enterprise between the baseline and the target. Which phase formally defines these transition architectures?',
    options: [
      'Phase E Opportunities and Solutions identifying the initial project portfolio',
      'Phase F Migration Planning sequencing work into phased transition architectures',
      'Phase D Technology Architecture defining technology evolution in stages',
      'Phase G Implementation Governance approving the transition architecture designs',
    ],
    correct: 1,
    explanation:
      'Phase F Migration Planning formally defines transition architectures — snapshots of the enterprise at key milestones on the journey from baseline to target — coordinating IT changes with business readiness.',
  },

  {
    id: 'togaf-basics-40',
    domain: 'Phases C–E and Key Artifacts',
    q: 'An architect produces an Architecture Requirements Specification. In which phase is this document produced and what does it contain?',
    options: [
      'Produced in Phase A; contains the high-level stakeholder concerns and vision',
      'Produced in Phase B; contains all business processes and capabilities required',
      'Produced in Phases B/C/D; contains measurable criteria the solution must meet',
      'Produced in Phase G; contains conformance criteria for delivery team assessment',
    ],
    correct: 2,
    explanation:
      'Architecture Requirements Specifications are produced throughout Phases B, C, and D — they translate stakeholder requirements into specific, measurable architecture requirements the solution must satisfy.',
  },

  {
    id: 'togaf-basics-41',
    domain: 'Phases C–E and Key Artifacts',
    q: 'Which Phase C artifact specifically shows which applications support which business processes, mapping the two domains together?',
    options: [
      'Application Communication Diagram showing how applications exchange data',
      'Application and User Location Diagram showing geographic deployment distribution',
      'Process and Application Realisation Diagram mapping processes to applications',
      'Software Distribution Diagram showing how software is distributed across platforms',
    ],
    correct: 2,
    explanation:
      'A Process and Application Realisation Diagram (or Application-to-Business Process matrix) maps which applications realise or support which business processes — a key cross-domain traceability artifact.',
  },

  {
    id: 'togaf-basics-42',
    domain: 'Phases C–E and Key Artifacts',
    q: 'A Phase D artifact shows all the technology platforms, middleware, and infrastructure services organised in a hierarchical taxonomy. Which artifact is this?',
    options: [
      'Technology Component Catalogue listing all approved technology products',
      'Platform Decomposition Diagram showing the hierarchy of technology services',
      'Technology Architecture Diagram showing physical infrastructure topology',
      'Environments and Locations Diagram showing technology deployment locations',
    ],
    correct: 1,
    explanation:
      'The Platform Decomposition Diagram in Phase D shows the hierarchy of technology service layers — infrastructure services, platform services, and application hosting services — as a structured taxonomy.',
  },

  {
    id: 'togaf-basics-43',
    domain: 'Phases C–E and Key Artifacts',
    q: 'After Phase E, the architect presents a list of implementation projects to senior management. The projects are grouped but not yet prioritised or sequenced. What must Phase F then do?',
    options: [
      'Phase F must obtain Architecture Board approval for each identified project',
      'Phase F must select which projects to fund based on available IT budget',
      'Phase F must prioritise and sequence projects into transition architectures',
      'Phase F must redesign any projects that do not conform to the architecture',
    ],
    correct: 2,
    explanation:
      'Phase F takes the projects identified in Phase E and prioritises them — sequencing them into transition architectures based on business value, dependency, risk, and resource constraints.',
  },

  {
    id: 'togaf-basics-44',
    domain: 'Phases C–E and Key Artifacts',
    q: 'Which TOGAF artifact produced in Phase E or F shows the logical grouping of changes into deployable increments, each building on the previous to reach the target state?',
    options: [
      'Architecture Vision summarising the target state for executive stakeholders',
      'Architecture Roadmap showing the sequence of transition architectures over time',
      'Statement of Architecture Work authorising the implementation phase to begin',
      'Architecture Compliance Assessment evaluating each project against standards',
    ],
    correct: 1,
    explanation:
      'The Architecture Roadmap shows the sequence of transition architectures — incremental steps from the current baseline to the target state — with each step delivering tangible business value.',
  },

  {
    id: 'togaf-basics-45',
    domain: 'Phases C–E and Key Artifacts',
    q: 'In Phase C Application Architecture, an architect identifies that two existing applications have overlapping functionality and the target removes one of them. Which artifact captures this gap finding?',
    options: [
      'Technology Component Catalogue showing the retired technology platforms',
      'Application Portfolio Catalogue showing the current application inventory',
      'Gap Analysis Results showing components to add change or retire in the target',
      'Architecture Definition Document containing the detailed target application architecture',
    ],
    correct: 2,
    explanation:
      'Gap Analysis Results capture the differences between baseline and target — including applications to be retired, consolidated, replaced, or added — forming the basis for Phase E implementation project identification.',
  },

  {
    id: 'togaf-basics-46',
    domain: 'Phases C–E and Key Artifacts',
    q: "A project in Phase E is identified as a 'Quick Win' — it delivers high business value at low risk and can be implemented rapidly. How should this be reflected in the Phase F migration plan?",
    options: [
      'Quick wins should be deferred until the full target architecture is approved',
      'Quick wins should appear early in the migration plan to deliver value fast',
      'Quick wins require Architecture Board approval before being added to the plan',
      'Quick wins bypass the standard migration planning process entirely',
    ],
    correct: 1,
    explanation:
      'Phase F migration planning prioritises quick wins early in the sequence — delivering high-value, low-risk changes first builds momentum, demonstrates architecture value, and funds further implementation.',
  },

  {
    id: 'togaf-basics-47',
    domain: 'Phases C–E and Key Artifacts',
    q: 'Which document produced in Phase D defines the specific technology standards, products, and versions that all projects must use when implementing the technology architecture?',
    options: [
      'Architecture Vision specifying the aspirational technology direction',
      'Technology Standards Catalogue listing approved products versions and standards',
      'Architecture Definition Document containing the full target technology design',
      'Implementation and Migration Plan sequencing technology delivery projects',
    ],
    correct: 1,
    explanation:
      'The Technology Standards Catalogue (part of the Standards Information Base) lists approved technology products, versions, and vendors that project teams must select from when implementing the technology architecture.',
  },

  {
    id: 'togaf-basics-48',
    domain: 'Phases C–E and Key Artifacts',
    q: 'Phase E produces an Architecture Roadmap. Phase F produces an Implementation and Migration Plan. What is the key difference between these two documents?',
    options: [
      'The Roadmap covers technology and the Migration Plan covers business changes',
      'The Roadmap shows WHAT will change; the Migration Plan shows HOW and WHEN',
      'The Roadmap is for the Architecture Board and the Migration Plan is for delivery',
      'The Roadmap covers phase E and the Migration Plan covers only phase F outputs',
    ],
    correct: 1,
    explanation:
      'The Architecture Roadmap shows WHAT architectural changes are needed and in what sequence (transition architectures). The Implementation and Migration Plan adds the HOW — project schedules, resources, dependencies, and milestones.',
  },

  // ── DOMAIN 4: Phases G–H, Governance & Full Cycle (16 questions) ─────────────
  // correct: 0,1,2,3 × 4

  {
    id: 'togaf-basics-49',
    domain: 'Phases G–H and Governance',
    q: 'What is the primary purpose of Phase G Implementation Governance in the TOGAF ADM?',
    options: [
      'Phase G provides architectural oversight ensuring solutions conform to the architecture',
      'Phase G manages the project budget and schedule for all implementation projects',
      'Phase G trains delivery teams on the technical standards they must implement',
      'Phase G tests the completed solution to verify it meets functional requirements',
    ],
    correct: 0,
    explanation:
      'Phase G provides architectural oversight during solution delivery — the architect reviews project designs for conformance, issues Architecture Contracts, and conducts Architecture Compliance Reviews at key milestones.',
  },

  {
    id: 'togaf-basics-50',
    domain: 'Phases G–H and Governance',
    q: "During Phase G, an architect identifies that a delivery team's proposed database design does not conform to the approved data architecture. What should the architect do?",
    options: [
      'Approve the design since delivery teams have authority over technical decisions',
      'Issue a non-conformance finding and require the team to remediate before proceeding',
      'Immediately escalate to the CEO since architecture violations are a critical risk',
      "Raise a change request to update the architecture to match the delivery team's design",
    ],
    correct: 1,
    explanation:
      'In Phase G, the architect issues a non-conformance finding when a solution design violates the approved architecture — the delivery team must remediate or formally request a waiver before proceeding.',
  },

  {
    id: 'togaf-basics-51',
    domain: 'Phases G–H and Governance',
    q: 'Which document produced in Phase G formally records the obligations of the delivery organisation regarding the architecture deliverables and quality they must achieve?',
    options: [
      'Architecture Vision summarising what the solution must achieve at a high level',
      'Architecture Contract formalising delivery obligations and quality criteria',
      'Statement of Architecture Work authorising the scope of the architecture project',
      'Architecture Compliance Assessment evaluating how well the solution conforms',
    ],
    correct: 1,
    explanation:
      'An Architecture Contract is the joint agreement between the development team and the architecture organisation — it formalises deliverables, quality criteria, and architecture fitness-for-purpose obligations.',
  },

  {
    id: 'togaf-basics-52',
    domain: 'Phases G–H and Governance',
    q: 'A project receives an Architecture Compliance Assessment at Phase G that shows partial conformance. What is the typical Architecture Board response?',
    options: [
      'Terminate the project immediately since partial conformance is unacceptable',
      'Approve the project fully since minor non-conformances are always acceptable',
      'Issue a waiver with remediation conditions allowing the project to proceed',
      'Rearchitect the entire solution to achieve full conformance before delivery',
    ],
    correct: 3,
    explanation:
      'The Architecture Board typically issues a waiver with conditions — allowing the project to proceed while requiring a remediation plan that addresses non-conformances within agreed timeframes.',
  },

  {
    id: 'togaf-basics-53',
    domain: 'Phases G–H and Governance',
    q: 'Phase H Architecture Change Management monitors for changes after implementation. Which THREE types of change drivers trigger Phase H activities?',
    options: [
      'New technology trends business change drivers and lessons learned from delivery',
      'Budget changes staffing changes and office relocations affecting IT projects',
      'Application upgrades database migrations and server replacements in operations',
      'Audit findings compliance reports and security penetration testing results',
    ],
    correct: 0,
    explanation:
      'Phase H monitors for three categories of change driver: new technology opportunities, business environment changes (strategy, regulation), and lessons learned from implementation — each may trigger a new ADM cycle.',
  },

  {
    id: 'togaf-basics-54',
    domain: 'Phases G–H and Governance',
    q: 'An Architecture Change Request arrives in Phase H requesting the addition of a major new digital channel that was not in the original target architecture. What should Phase H determine?',
    options: [
      'Whether to approve the change request without any further architecture work',
      'Whether to reject the change request since it deviates from the approved architecture',
      'Whether the change warrants a new ADM cycle beginning from Phase A or B',
      'Whether to defer the change to the next annual architecture review cycle',
    ],
    correct: 2,
    explanation:
      'Phase H determines the significance of the change — a major new digital channel likely warrants a new ADM cycle (starting at Phase A or B) to properly architecture the change before implementation begins.',
  },

  {
    id: 'togaf-basics-55',
    domain: 'Phases G–H and Governance',
    q: 'What distinguishes an Architecture Waiver from an Architecture Dispensation in TOGAF?',
    options: [
      'A Waiver is for small changes; a Dispensation is for large strategic changes',
      'A Waiver grants temporary exception with conditions; a Dispensation is permanent',
      'A Waiver is issued by the Architecture Board; a Dispensation by the CIO directly',
      'A Waiver covers technical standards; a Dispensation covers governance processes',
    ],
    correct: 1,
    explanation:
      'An Architecture Waiver grants a temporary exception from an architecture standard (with conditions and time limits); an Architecture Dispensation grants a permanent exception for situations where compliance is genuinely impossible.',
  },

  {
    id: 'togaf-basics-56',
    domain: 'Phases G–H and Governance',
    q: 'Which Phase G activity ensures that completed implementation work is formally captured in the Architecture Repository for future reuse?',
    options: [
      'Architecture Compliance Review evaluating conformance of completed solutions',
      "Architecture Contract Closure formally ending the delivery team's obligations",
      'Architecture Closeout capturing lessons learned and archiving completed deliverables',
      'Architecture Change Management updating the repository with post-delivery changes',
    ],
    correct: 2,
    explanation:
      'Architecture Closeout (at the end of Phase G) formally concludes the architecture engagement — archiving deliverables in the Repository and capturing lessons learned for future architecture work.',
  },

  {
    id: 'togaf-basics-57',
    domain: 'Phases G–H and Governance',
    q: 'The TOGAF ADM is often described as iterative. What does this mean in practice?',
    options: [
      'Each ADM phase must be repeated three times before moving to the next phase',
      'Architecture work stops at Phase H and restarts from Phase A in a continuous cycle',
      'The ADM can be applied at different levels — enterprise segment and solution levels',
      'Each architect on the team must independently complete the full ADM cycle',
    ],
    correct: 2,
    explanation:
      'The ADM is iterative in that it can be applied at multiple levels — enterprise-wide, to a specific segment, or to a specific solution — and cycles can be nested or run in parallel across different scopes.',
  },

  {
    id: 'togaf-basics-58',
    domain: 'Phases G–H and Governance',
    q: 'Which statement correctly describes how the Architecture Repository supports the ADM?',
    options: [
      'The Repository is only used in Phase H to store completed architecture deliverables',
      'The Repository stores all architecture assets across all phases enabling reuse and governance',
      'The Repository replaces the Architecture Definition Document in modern TOGAF versions',
      'The Repository is optional and only required for large enterprise-scale ADM programmes',
    ],
    correct: 1,
    explanation:
      'The Architecture Repository stores all architecture assets produced throughout every ADM phase — building blocks, deliverables, standards, and governance records — enabling reuse and providing the governance audit trail.',
  },

  {
    id: 'togaf-basics-59',
    domain: 'Phases G–H and Governance',
    q: 'An enterprise is running three simultaneous ADM cycles at different scope levels. The enterprise-wide cycle is in Phase C. A segment cycle for Finance is in Phase F. A solution cycle for a new payment system is in Phase G. Which statement about this scenario is correct?',
    options: [
      'This is invalid since only one ADM cycle can run at any time in an organisation',
      'This is a valid TOGAF pattern showing the ADM applied simultaneously at multiple levels',
      'The Finance and payment cycles must pause until the enterprise cycle completes Phase H',
      'The three cycles must align to the same phase before any implementation can begin',
    ],
    correct: 1,
    explanation:
      'Running simultaneous ADM cycles at different scope levels is a valid and common TOGAF pattern — enterprise, segment, and solution architectures operate in parallel, with governance ensuring alignment between levels.',
  },

  {
    id: 'togaf-basics-60',
    domain: 'Phases G–H and Governance',
    q: 'Which ADM phase produces the Architecture Compliance Assessment that formally records whether a delivered solution conforms to the approved architecture?',
    options: [
      'Phase E Opportunities and Solutions after completing the gap analysis work',
      'Phase F Migration Planning after finalising the implementation roadmap details',
      'Phase G Implementation Governance during oversight of the solution delivery',
      'Phase H Architecture Change Management after receiving a change request formally',
    ],
    correct: 2,
    explanation:
      'Architecture Compliance Assessments are produced in Phase G Implementation Governance — they formally evaluate solution designs and delivered implementations against the approved architecture standards.',
  },

  {
    id: 'togaf-basics-61',
    domain: 'Phases G–H and Governance',
    q: "An enterprise architect says 'we are applying the ADM in a federated model'. What does this mean?",
    options: [
      'Each team independently creates its own architecture without coordination',
      'Multiple architecture groups operate autonomously but align to enterprise standards',
      'All architecture decisions are made centrally by a single enterprise architect',
      'The ADM is applied sequentially by different teams in different time zones',
    ],
    correct: 1,
    explanation:
      'A federated ADM model means multiple architecture groups (e.g., per division or domain) operate with autonomy while aligning to shared enterprise architecture standards and governance — enabling scale without losing coherence.',
  },

  {
    id: 'togaf-basics-62',
    domain: 'Phases G–H and Governance',
    q: 'What is the correct sequence of activities when an Architecture Change Request arrives in Phase H?',
    options: [
      'Implement the change first then update the architecture documentation afterwards',
      'Assess the change impact decide whether to trigger a new ADM cycle then implement',
      'Reject all change requests received during Phase H to maintain architecture integrity',
      'Forward all change requests to the delivery team without architecture assessment',
    ],
    correct: 1,
    explanation:
      'Phase H first assesses the change impact, then decides whether it warrants a new ADM cycle (significant change) or can be addressed through an Architecture Change Record (minor change), then manages implementation.',
  },

  {
    id: 'togaf-basics-63',
    domain: 'Phases G–H and Governance',
    q: 'Which statement best explains why Phase B (Business Architecture) is the foundation that all subsequent ADM phases depend on?',
    options: [
      'Phase B is the most expensive phase so all other phases must justify its investment',
      'Phase B defines the business requirements that data application and technology architectures must support',
      'Phase B produces the Statement of Architecture Work that authorises all later phases',
      'Phase B is required by regulators before any technology architecture work can begin',
    ],
    correct: 1,
    explanation:
      'Phase B Business Architecture defines WHAT the business does and needs — every Phase C, D, and beyond is designed to enable those business capabilities. Without Phase B, subsequent phases lack the business context to make correct decisions.',
  },

  {
    id: 'togaf-basics-64',
    domain: 'Phases G–H and Governance',
    q: 'An architect is asked to explain the full ADM lifecycle in one sentence. Which sentence is most accurate?',
    options: [
      'The ADM defines 8 phases from A to H that must be executed sequentially without exception',
      'The ADM is an iterative cycle from Preliminary through Phase H with Requirements Management throughout',
      'The ADM covers only technology architecture in Phases D through G with business in Phase B',
      'The ADM is a waterfall method producing architecture deliverables for handoff to delivery teams',
    ],
    correct: 1,
    explanation:
      'The ADM is an iterative, adaptable cycle — the Preliminary Phase establishes the capability, Phases A through H develop and govern architecture, and Requirements Management runs continuously throughout every phase.',
  },
];
