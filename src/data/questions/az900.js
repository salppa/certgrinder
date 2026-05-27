// AZ-900: Microsoft Azure Fundamentals — 80 questions (rewritten)
// Options: ~10-13 words each, no length bias, no embedded A)/B) prefixes
// correct: 0,1,2,3 repeating — 20× each across 80 questions

export const AZ900_QUESTIONS = [
  // ── CLOUD CONCEPTS (20 questions, correct: 0,1,2,3 × 5) ─────────────────────

  {
    id: 'az900-cc-01',
    domain: 'Cloud Concepts',
    q: 'A startup pays only for the compute hours its website actually uses each month. Which cloud pricing characteristic does this describe?',
    options: [
      'Consumption-based pricing where you pay for actual resource usage',
      'Reserved capacity pricing with fixed monthly fees regardless of usage',
      'Spot pricing where unused capacity is sold at a reduced hourly rate',
      'Enterprise Agreement pricing negotiated annually with Microsoft upfront',
    ],
    correct: 0,
    explanation:
      'Consumption-based (pay-as-you-go) pricing means you pay only for what you use — no upfront cost, no wasted spend on idle capacity.',
  },

  {
    id: 'az900-cc-02',
    domain: 'Cloud Concepts',
    q: 'A company eliminates its on-premises data centre and moves all workloads to Azure. Which cost model shift best describes this change?',
    options: [
      'Moving from variable OpEx spending to predictable monthly CapEx costs',
      'Moving from upfront CapEx hardware investment to ongoing OpEx spending',
      'Moving from consumption-based billing to a fixed annual licensing model',
      'Moving from pay-as-you-go pricing to a reserved-capacity pricing model',
    ],
    correct: 1,
    explanation:
      'Replacing on-premises hardware (CapEx) with cloud subscriptions (OpEx) is the fundamental cost model shift — no large upfront investment, just ongoing operational spend.',
  },

  {
    id: 'az900-cc-03',
    domain: 'Cloud Concepts',
    q: 'A retailer needs its e-commerce site to remain available even when one Azure datacenter in a region experiences a hardware failure. Which Azure concept directly addresses this?',
    options: [
      'Azure Regions that group multiple datacentres in a geographic area',
      'Azure Subscriptions that isolate billing and resources per team or project',
      'Availability Zones that are separate physical datacentres within one region',
      'Resource Groups that organise related Azure resources for easier management',
    ],
    correct: 2,
    explanation:
      'Availability Zones are physically separate datacentres within the same region — deploying across zones protects workloads from single-datacenter failures.',
  },

  {
    id: 'az900-cc-04',
    domain: 'Cloud Concepts',
    q: 'During a marketing campaign, web traffic spikes tenfold for three hours. After the campaign, traffic returns to normal. Which cloud characteristic lets Azure automatically handle this peak?',
    options: [
      'High availability ensuring the service stays online without downtime',
      'Fault tolerance allowing the system to recover quickly after failures',
      'Disaster recovery restoring data and services after a catastrophic event',
      'Elasticity automatically scaling resources up during peaks and back down',
    ],
    correct: 3,
    explanation:
      'Elasticity is the ability to automatically scale capacity up to meet demand spikes and back down when demand drops — preventing both outages and wasted spend.',
  },

  {
    id: 'az900-cc-05',
    domain: 'Cloud Concepts',
    q: 'An organisation hosts sensitive government data on its own hardware inside its own building and does not use any public cloud services. Which cloud deployment model does this represent?',
    options: [
      'Private cloud where the organisation owns and controls all infrastructure',
      'Public cloud where infrastructure is shared across many paying customers',
      'Hybrid cloud combining on-premises resources with public cloud services',
      'Community cloud shared between organisations with similar compliance needs',
    ],
    correct: 0,
    explanation:
      "A private cloud is owned and operated exclusively by one organisation — all hardware stays on-premises under the organisation's full control.",
  },

  {
    id: 'az900-cc-06',
    domain: 'Cloud Concepts',
    q: 'A company keeps its core financial systems on-premises but uses Azure for development testing and burst capacity. Which cloud model describes this configuration?',
    options: [
      'Private cloud where all workloads run on dedicated company hardware',
      'Hybrid cloud connecting on-premises infrastructure with Azure services',
      'Public cloud where all resources are fully managed by Microsoft Azure',
      'Community cloud shared by multiple organisations with similar workloads',
    ],
    correct: 1,
    explanation:
      'A hybrid cloud links on-premises infrastructure with public cloud services — workloads run where they best fit regulatory, performance, and cost requirements.',
  },

  {
    id: 'az900-cc-07',
    domain: 'Cloud Concepts',
    q: "Under the shared responsibility model in Azure PaaS, which of the following remains the customer's responsibility?",
    options: [
      'Patching the host operating system on the underlying physical servers',
      'Maintaining the physical network infrastructure between Azure datacentres',
      'Managing application data, user access, and identity within the platform',
      'Provisioning and replacing failed physical hardware in Azure datacentres',
    ],
    correct: 2,
    explanation:
      'In PaaS Microsoft manages OS, hardware, and runtime. The customer always owns data, identities, and access management — regardless of the service model.',
  },

  {
    id: 'az900-cc-08',
    domain: 'Cloud Concepts',
    q: 'A developer deploys a web app on Azure App Service without configuring any virtual machines, OS patches, or server settings. Which cloud service model does this represent?',
    options: [
      'IaaS giving the developer full control over the virtual machine OS',
      'On-premises where the developer manages all infrastructure components',
      'SaaS where a complete software application is delivered over the internet',
      'PaaS where the platform manages infrastructure so developers focus on code',
    ],
    correct: 3,
    explanation:
      'Azure App Service is PaaS — Microsoft manages the underlying VM, OS, and runtime. The developer only writes and deploys application code.',
  },

  {
    id: 'az900-cc-09',
    domain: 'Cloud Concepts',
    q: 'A business rents virtual machines in Azure, installs its own Linux OS, and configures everything from the OS layer upward. Which cloud service model does this describe?',
    options: [
      'IaaS providing virtualised compute, storage, and networking to configure',
      'PaaS providing a managed platform where code runs without OS management',
      'SaaS providing fully managed software accessed through a web browser',
      'Serverless computing that abstracts all infrastructure concerns from developers',
    ],
    correct: 0,
    explanation:
      'IaaS provides virtualised hardware — VMs, storage, and networking. The customer manages the OS and everything above it; Microsoft manages the physical layer.',
  },

  {
    id: 'az900-cc-10',
    domain: 'Cloud Concepts',
    q: 'A team uses Microsoft 365 for email, Teams, and SharePoint without managing any servers or software installation. Which cloud service model does this represent?',
    options: [
      'IaaS renting virtual machines with full operating system control',
      'SaaS delivering a complete ready-to-use application over the internet',
      'PaaS providing a managed runtime where developers deploy custom code',
      'Serverless computing running event-triggered functions without servers',
    ],
    correct: 1,
    explanation:
      'Microsoft 365 is SaaS — the software is fully managed by Microsoft and accessed via browser or client. Users configure settings; Microsoft manages everything else.',
  },

  {
    id: 'az900-cc-11',
    domain: 'Cloud Concepts',
    q: 'A global company wants its Azure workloads to fail over to another geography if an entire Azure region becomes unavailable due to a natural disaster. Which Azure feature supports this?',
    options: [
      'Availability Zones that protect from single-datacenter failures within a region',
      'Availability Sets that distribute VMs across fault and update domains locally',
      'Azure Region Pairs that replicate data between geographically distant regions',
      'Resource Groups that organise resources but do not provide geographic failover',
    ],
    correct: 2,
    explanation:
      'Azure Region Pairs are two regions in the same geography that replicate data — if one region fails, the paired region hosts the workload for disaster recovery.',
  },

  {
    id: 'az900-cc-12',
    domain: 'Cloud Concepts',
    q: 'A manufacturing firm must keep all production data within Finland due to legal requirements, but wants to use Azure services. Which Azure concept allows this?',
    options: [
      'Resource Groups that logically organise resources but do not enforce location',
      'Azure Subscriptions that control billing but not where data physically resides',
      'Management Groups that apply governance policies across multiple subscriptions',
      'Azure Regions that provide geographically isolated datacentre clusters worldwide',
    ],
    correct: 3,
    explanation:
      'Azure Regions are physical clusters of datacentres in a specific geography — choosing a region in Finland ensures data stays within Finnish borders for data sovereignty.',
  },

  {
    id: 'az900-cc-13',
    domain: 'Cloud Concepts',
    q: 'A company migrates from on-premises servers to Azure VMs without any application changes. Which cloud migration strategy does this describe?',
    options: [
      'Rehost (lift-and-shift) moving workloads to cloud without redesigning them',
      'Refactor adapting the application to use cloud-native PaaS services fully',
      'Rearchitect redesigning the application to take advantage of cloud features',
      'Rebuild rewriting the application from scratch using cloud-native technologies',
    ],
    correct: 0,
    explanation:
      'Rehosting (lift-and-shift) moves workloads to cloud infrastructure with no code or architectural changes — the fastest migration path to get off-premises quickly.',
  },

  {
    id: 'az900-cc-14',
    domain: 'Cloud Concepts',
    q: 'Cloud providers can offer lower per-unit costs than individual companies because they purchase infrastructure in massive quantities. Which cloud benefit describes this phenomenon?',
    options: [
      'High availability ensuring services remain accessible with minimal downtime',
      'Economies of scale reducing per-unit costs through massive purchasing power',
      'Geographic distribution placing services physically close to end users worldwide',
      'Agility providing ability to rapidly provision new resources as business needs',
    ],
    correct: 1,
    explanation:
      'Economies of scale mean cloud providers buy hardware in such large quantities that per-unit costs are far lower than any individual organisation could achieve alone.',
  },

  {
    id: 'az900-cc-15',
    domain: 'Cloud Concepts',
    q: 'A development team can spin up 50 test VMs in five minutes on Azure, experiment, and then delete all of them immediately. Which cloud benefit does this primarily illustrate?',
    options: [
      'High availability guaranteeing that resources are always accessible online',
      'Disaster recovery automatically restoring systems after a catastrophic failure',
      'Agility enabling rapid provisioning and deprovisioning to respond quickly',
      'Scalability expanding capacity incrementally as workload demand gradually grows',
    ],
    correct: 2,
    explanation:
      'Agility is the ability to rapidly provision and release resources on demand — enabling fast experimentation and innovation without waiting for hardware procurement.',
  },

  {
    id: 'az900-cc-16',
    domain: 'Cloud Concepts',
    q: 'A SaaS application is designed so that if one web server crashes, requests automatically route to other healthy servers with no user impact. Which cloud concept describes this design?',
    options: [
      'Elasticity scaling resources up and down based on real-time workload demand',
      'Scalability expanding total capacity to handle gradually increasing workloads',
      'Disaster recovery restoring a system after a major failure or data-loss event',
      'Fault tolerance continuing to operate correctly despite individual component failures',
    ],
    correct: 3,
    explanation:
      'Fault tolerance means the system continues operating despite component failures — redundant components and automatic rerouting keep the service running with no user impact.',
  },

  {
    id: 'az900-cc-17',
    domain: 'Cloud Concepts',
    q: 'An application architecture uses Azure Functions that execute only in response to events and charge only for the milliseconds each function actually runs. Which model is this?',
    options: [
      'Serverless computing abstracting all infrastructure so developers write event-driven',
      'PaaS providing a managed platform where code runs on dedicated application servers',
      'IaaS renting virtual machines that run continuously regardless of workload activity',
      'SaaS delivering complete business software without any custom code deployment needed',
    ],
    correct: 0,
    explanation:
      'Serverless computing (like Azure Functions) abstracts all infrastructure — code runs in response to events, scaling to zero between invocations, with billing per execution millisecond.',
  },

  {
    id: 'az900-cc-18',
    domain: 'Cloud Concepts',
    q: 'Microsoft guarantees 99.99% uptime for Azure Active Directory under its service level agreement. What does this SLA percentage mean in practical terms?',
    options: [
      'The service will never experience planned or unplanned downtime of any kind',
      'The service will perform at peak speed with no performance degradation possible',
      'Microsoft guarantees approximately 52 minutes of maximum annual downtime allowed',
      'Microsoft promises zero seconds of downtime in any given 30-day billing period',
    ],
    correct: 2,
    explanation:
      "99.99% SLA allows ~52 minutes of downtime per year. SLAs define Microsoft's uptime commitment, compensation for violations, and do not guarantee zero downtime.",
  },

  {
    id: 'az900-cc-19',
    domain: 'Cloud Concepts',
    q: 'A team needs to provision 100 additional web servers for a temporary load test and then remove them all within a day. Which cloud characteristic makes this economically practical?',
    options: [
      'Capital expenditure where hardware is purchased upfront and depreciated annually',
      'Reserved Instance pricing committed to for one or three years for discounted rates',
      'Consumption-based pricing where you pay only for actual resource usage time',
      'Enterprise Agreement pricing negotiated annually regardless of actual resource use',
    ],
    correct: 2,
    explanation:
      'Consumption-based (pay-as-you-go) pricing makes temporary workloads practical — you provision resources for the hours needed, then delete them, paying only for that usage window.',
  },

  {
    id: 'az900-cc-20',
    domain: 'Cloud Concepts',
    q: 'Which statement correctly distinguishes vertical scaling from horizontal scaling in Azure?',
    options: [
      'Vertical scaling adds more VM instances to distribute load across servers',
      'Horizontal scaling increases VM size such as adding more CPU and RAM',
      'Vertical scaling increases the power of a single VM by adding resources',
      'Horizontal scaling groups identically sized VMs so load distributes evenly',
    ],
    correct: 3,
    explanation:
      'Horizontal scaling (scale out) adds more VM instances to share load. Vertical scaling (scale up) increases the resources of a single instance — both are supported in Azure.',
  },

  // ── AZURE ARCHITECTURE & SERVICES (20 questions, correct: 0,1,2,3 × 5) ──────

  {
    id: 'az900-arch-01',
    domain: 'Azure Architecture & Services',
    q: 'A company needs to ensure that VMs hosting a critical app are spread across different physical racks so a single rack power failure cannot take down all VMs simultaneously. Which Azure feature provides this?',
    options: [
      'Availability Sets distributing VMs across fault domains within a datacentre',
      'Availability Zones placing VMs in different physical datacentres in the region',
      'Azure Site Recovery replicating VMs to a secondary region for failover purposes',
      'Virtual Machine Scale Sets automatically adjusting the number of running VMs',
    ],
    correct: 0,
    explanation:
      'Availability Sets distribute VMs across fault domains (separate racks) and update domains — protecting against hardware failures and planned maintenance windows.',
  },

  {
    id: 'az900-arch-02',
    domain: 'Azure Architecture & Services',
    q: 'A developer needs to run a containerised web application on Azure without managing the underlying Kubernetes cluster infrastructure. Which service is the best fit?',
    options: [
      'Azure Virtual Machines requiring full OS management and patching by the team',
      'Azure Kubernetes Service where the team still manages control plane nodes',
      'Azure Container Instances running containers directly without cluster overhead',
      'Azure App Service requiring code deployment but not supporting containers at all',
    ],
    correct: 1,
    explanation:
      'Azure Kubernetes Service (AKS) manages the Kubernetes control plane for you. For single containers without orchestration, Azure Container Instances are even simpler.',
  },

  {
    id: 'az900-arch-03',
    domain: 'Azure Architecture & Services',
    q: 'A finance team stores structured relational data with complex joins and transactions. Which Azure database service is purpose-built for this requirement?',
    options: [
      'Azure Cosmos DB a globally distributed NoSQL multi-model database service',
      'Azure Table Storage a simple key-value NoSQL store for schema-less data',
      'Azure SQL Database a fully managed relational database with SQL Server engine',
      'Azure Redis Cache an in-memory key-value store used for session caching',
    ],
    correct: 2,
    explanation:
      'Azure SQL Database is a fully managed relational PaaS database using the SQL Server engine — ideal for structured data, ACID transactions, and complex queries.',
  },

  {
    id: 'az900-arch-04',
    domain: 'Azure Architecture & Services',
    q: 'An IoT solution needs to store billions of time-series sensor readings with flexible schema and low latency globally. Which Azure service best fits this NoSQL requirement?',
    options: [
      'Azure SQL Database a managed relational service with fixed schema tables',
      'Azure Synapse Analytics an analytics platform for large-scale data warehousing',
      'Azure Blob Storage for unstructured binary data such as images and files',
      'Azure Cosmos DB a globally distributed NoSQL database with multiple APIs',
    ],
    correct: 3,
    explanation:
      'Azure Cosmos DB is a globally distributed, multi-model NoSQL database — supporting flexible schema, global low-latency reads/writes, and massive scale for IoT workloads.',
  },

  {
    id: 'az900-arch-05',
    domain: 'Azure Architecture & Services',
    q: 'A development team wants to run small event-driven code snippets that execute only in response to HTTP requests, timer triggers, or queue messages with no VM management. Which service should they use?',
    options: [
      'Azure Functions for running serverless event-triggered code without servers',
      'Azure Logic Apps for building visual no-code workflow automations easily',
      'Azure App Service for deploying web applications on managed infrastructure',
      'Azure Batch for running large-scale parallel high-performance computing jobs',
    ],
    correct: 0,
    explanation:
      'Azure Functions is the serverless compute service for event-driven code — it scales automatically, charges per execution, and requires zero infrastructure management.',
  },

  {
    id: 'az900-arch-06',
    domain: 'Azure Architecture & Services',
    q: 'A company needs to distribute terabytes of static website content (images, CSS, JS) to users worldwide with minimal latency. Which Azure service caches content at edge locations?',
    options: [
      'Azure Virtual Network routing traffic between VMs within the Azure network',
      'Azure Traffic Manager directing users to the fastest available endpoint globally',
      'Azure Content Delivery Network caching content at edge nodes close to users',
      'Azure Application Gateway load balancing HTTP traffic with web application firewall',
    ],
    correct: 2,
    explanation:
      'Azure CDN (Content Delivery Network) caches static content at globally distributed edge points-of-presence — reducing latency for end users by serving from nearby nodes.',
  },

  {
    id: 'az900-arch-07',
    domain: 'Azure Architecture & Services',
    q: 'An organisation stores millions of archival log files that are accessed roughly once per year during audits. Which Azure Blob Storage access tier minimises storage cost?',
    options: [
      'Hot tier for data accessed frequently with the lowest per-access retrieval fee',
      'Cool tier for data accessed infrequently but still needing quick accessibility',
      'Archive tier for long-term data rarely accessed with lowest storage price',
      'Premium tier for high-performance workloads requiring sub-millisecond latency',
    ],
    correct: 2,
    explanation:
      'The Archive tier has the lowest storage price but highest retrieval latency and cost — perfect for compliance data accessed only for annual audits or legal holds.',
  },

  {
    id: 'az900-arch-08',
    domain: 'Azure Architecture & Services',
    q: 'A developer builds an app that queues order-processing messages so the backend service processes them independently without losing messages if the processor is temporarily busy. Which Azure service is used?',
    options: [
      'Azure Event Hubs ingesting millions of events per second from IoT devices',
      'Azure Service Bus a message broker for reliable enterprise messaging and queues',
      'Azure Blob Storage storing large unstructured files such as images and video',
      'Azure Notification Hubs broadcasting push notifications to mobile devices',
    ],
    correct: 1,
    explanation:
      'Azure Service Bus provides reliable message queuing for enterprise applications — messages persist in the queue until the consumer processes them, decoupling sender and receiver.',
  },

  {
    id: 'az900-arch-09',
    domain: 'Azure Architecture & Services',
    q: 'A company connects its on-premises network to Azure via a dedicated private fibre connection that bypasses the public internet entirely for security and compliance. Which Azure service provides this?',
    options: [
      'Azure ExpressRoute providing a dedicated private connection bypassing internet',
      'Azure VPN Gateway creating an encrypted tunnel over the public internet',
      'Azure Virtual WAN connecting multiple branches to Azure through a hub',
      'Azure Peering Service optimising public internet routing to Azure services',
    ],
    correct: 0,
    explanation:
      'Azure ExpressRoute provides a private, dedicated network connection to Azure through a connectivity partner — it bypasses the internet for higher security and predictable latency.',
  },

  {
    id: 'az900-arch-10',
    domain: 'Azure Architecture & Services',
    q: 'A business sets up site-to-site connectivity between its on-premises office and Azure Virtual Network using an encrypted IPsec tunnel over the internet. Which Azure service enables this?',
    options: [
      'Azure ExpressRoute providing a private circuit that never traverses public internet',
      'Azure Virtual Network Peering connecting two Azure VNets within the Azure backbone',
      'Azure VPN Gateway enabling encrypted site-to-site connections over the internet',
      'Azure Bastion providing secure browser-based RDP and SSH access to Azure VMs',
    ],
    correct: 2,
    explanation:
      'Azure VPN Gateway creates encrypted IPsec/IKE tunnels between on-premises networks and Azure VNets — traffic travels over the public internet but is fully encrypted.',
  },

  {
    id: 'az900-arch-11',
    domain: 'Azure Architecture & Services',
    q: 'A web application receives traffic from the internet and needs a load balancer that operates at Layer 7 (HTTP/HTTPS) and can inspect URL paths to route requests to different backend pools. Which service fits?',
    options: [
      'Azure Load Balancer operating at Layer 4 distributing TCP and UDP traffic',
      'Azure Traffic Manager a DNS-based global load balancer routing between regions',
      'Azure Application Gateway providing Layer 7 HTTP load balancing and WAF features',
      'Azure Front Door a global edge service for HTTP acceleration and load balancing',
    ],
    correct: 2,
    explanation:
      'Azure Application Gateway is a Layer 7 load balancer — it can route based on URL paths, host headers, and includes an optional Web Application Firewall (WAF).',
  },

  {
    id: 'az900-arch-12',
    domain: 'Azure Architecture & Services',
    q: 'A globally distributed application needs to route users to the nearest healthy Azure region automatically when one region becomes unavailable. Which Azure service handles this DNS-based routing?',
    options: [
      'Azure Load Balancer distributing traffic within a single Azure region',
      'Azure Application Gateway routing HTTP traffic to backend VM pools',
      'Azure CDN caching static content at distributed global edge locations',
      'Azure Traffic Manager routing users to healthy endpoints via DNS globally',
    ],
    correct: 3,
    explanation:
      'Azure Traffic Manager is a DNS-based global load balancer — it routes users to the nearest or healthiest endpoint across Azure regions, on-premises, or any internet-facing resource.',
  },

  {
    id: 'az900-arch-13',
    domain: 'Azure Architecture & Services',
    q: 'A team needs to migrate a large on-premises SQL Server database to Azure with minimal downtime using continuous log replication. Which Azure service facilitates database migration?',
    options: [
      'Azure Database Migration Service enabling online migrations with minimal downtime',
      'Azure Backup creating snapshot copies of databases for point-in-time recovery',
      'Azure Site Recovery replicating entire VM workloads to a secondary region',
      'Azure Data Factory orchestrating data movement and transformation pipelines',
    ],
    correct: 0,
    explanation:
      'Azure Database Migration Service supports online (continuous sync) migrations from on-premises SQL Server to Azure SQL — minimising downtime during the cutover window.',
  },

  {
    id: 'az900-arch-14',
    domain: 'Azure Architecture & Services',
    q: 'A data engineering team needs to run large-scale Apache Spark jobs to process petabytes of data stored in Azure Data Lake. Which Azure analytics service supports this?',
    options: [
      'Azure Stream Analytics processing real-time streaming data from IoT devices',
      'Azure HDInsight providing managed open-source analytics clusters on demand',
      'Azure Synapse Analytics integrating big data analytics with data warehousing together',
      'Azure Databricks providing an Apache Spark-based collaborative analytics platform',
    ],
    correct: 1,
    explanation:
      'Azure HDInsight is a managed service for open-source analytics frameworks including Spark, Hadoop, Hive, and Kafka — enabling large-scale data processing on Azure.',
  },

  {
    id: 'az900-arch-15',
    domain: 'Azure Architecture & Services',
    q: 'An IT team needs to deploy 50 identical web servers simultaneously using a repeatable, version-controlled template. Which Azure capability enables infrastructure-as-code deployment?',
    options: [
      'Azure Policy enforcing compliance rules across Azure resource configurations',
      'Azure Blueprints packaging governance artefacts for repeatable environment deployment',
      'Azure Resource Manager templates defining infrastructure as declarative JSON code',
      'Azure Cost Management analysing and optimising spending across Azure subscriptions',
    ],
    correct: 2,
    explanation:
      'Azure Resource Manager (ARM) templates are JSON-based infrastructure-as-code files — they define all Azure resources declaratively and can be version-controlled and redeployed consistently.',
  },

  {
    id: 'az900-arch-16',
    domain: 'Azure Architecture & Services',
    q: 'A developer wants to store large binary files such as video recordings and backup images in Azure at the lowest cost without specific performance requirements. Which storage option is most appropriate?',
    options: [
      'Azure Files providing managed SMB file shares mountable by VMs and clients',
      'Azure Queue Storage for messaging between loosely coupled application components',
      'Azure Table Storage a NoSQL key-value store for structured schema-less data',
      'Azure Blob Storage for unstructured binary data at low cost and massive scale',
    ],
    correct: 3,
    explanation:
      'Azure Blob Storage is the object storage service for unstructured data like images, videos, and backups — it scales to exabytes with tiered pricing for cost optimisation.',
  },

  {
    id: 'az900-arch-17',
    domain: 'Azure Architecture & Services',
    q: 'A company wants to mount a shared network file system that multiple Azure VMs can access simultaneously using the SMB protocol. Which Azure storage service provides this?',
    options: [
      'Azure Files providing fully managed cloud file shares accessible via SMB protocol',
      'Azure Blob Storage for object data accessed via REST APIs and client libraries',
      'Azure Queue Storage enabling reliable message-based communication between services',
      'Azure Disk Storage providing high-performance block storage attached to single VMs',
    ],
    correct: 0,
    explanation:
      'Azure Files provides managed cloud file shares that can be mounted via SMB — multiple VMs and on-premises machines can access the same share simultaneously.',
  },

  {
    id: 'az900-arch-18',
    domain: 'Azure Architecture & Services',
    q: 'An application team needs a fully managed relational MySQL database on Azure without managing any infrastructure, OS, or patching. Which service is the best match?',
    options: [
      'SQL Server on Azure VM giving full OS and SQL Server control to the team',
      'Azure SQL Managed Instance supporting near-100% SQL Server compatibility managed',
      'Azure Database for MySQL a fully managed open-source MySQL database service',
      'Azure Synapse Analytics for petabyte-scale data warehousing and analytics workloads',
    ],
    correct: 2,
    explanation:
      'Azure Database for MySQL is a fully managed PaaS relational database — Microsoft handles OS, patching, backups, and high availability so teams focus only on their data.',
  },

  {
    id: 'az900-arch-19',
    domain: 'Azure Architecture & Services',
    q: 'A company needs to securely store application secrets, API keys, and certificates in a centralised vault with audit logging of every access. Which Azure service is designed for this?',
    options: [
      'Azure Key Vault securely storing secrets, keys, and certificates with access audit',
      'Azure Active Directory storing user identities and managing authentication policies',
      'Azure Managed Identity providing applications automatic credentials without storing secrets',
      'Azure Storage Account using access keys for authenticating blob and file operations',
    ],
    correct: 0,
    explanation:
      'Azure Key Vault is the managed HSM-backed secret store — it centralises secrets, encryption keys, and certificates with full audit logs of every access attempt.',
  },

  {
    id: 'az900-arch-20',
    domain: 'Azure Architecture & Services',
    q: 'Which Azure tool provides a browser-based command-line environment with Azure CLI and PowerShell pre-installed so users can manage Azure resources without local software installation?',
    options: [
      'Azure Portal providing a web-based GUI for managing resources visually',
      'Azure Cloud Shell offering a browser-based CLI with pre-installed Azure tools',
      'Azure Resource Manager providing APIs for programmatic resource management',
      'Azure DevOps providing CI/CD pipelines for automated software deployment',
    ],
    correct: 1,
    explanation:
      'Azure Cloud Shell is a browser-hosted terminal environment pre-loaded with Azure CLI, PowerShell, and common tools — no local installation needed, state persists in Azure Files.',
  },

  // ── MANAGEMENT & GOVERNANCE (20 questions, correct: 0,1,2,3 × 5) ────────────

  {
    id: 'az900-gov-01',
    domain: 'Management & Governance',
    q: 'An enterprise has hundreds of Azure subscriptions across departments and needs to apply the same security policies and access controls to all of them from a single point. Which Azure feature enables this?',
    options: [
      'Management Groups providing a hierarchy above subscriptions for policy control',
      'Resource Groups organising resources within a single subscription logically',
      'Azure Policy assigning compliance rules to individual subscriptions separately',
      'Azure Blueprints packaging policy and RBAC assignments for one subscription',
    ],
    correct: 0,
    explanation:
      'Management Groups sit above subscriptions in the Azure hierarchy — policies and RBAC roles applied at this level cascade down to all subscriptions within the group.',
  },

  {
    id: 'az900-gov-02',
    domain: 'Management & Governance',
    q: 'A compliance team needs all newly created Azure storage accounts to automatically have HTTPS-only access enforced, without relying on individual developers remembering to enable it. Which tool achieves this?',
    options: [
      'Azure RBAC assigning the storage contributor role to restrict who can create accounts',
      'Azure Blueprints packaging an environment template with predefined configurations',
      'Azure Policy automatically auditing and enforcing resource configuration standards',
      'Azure Monitor alerting the team when a non-compliant storage account is created',
    ],
    correct: 2,
    explanation:
      'Azure Policy evaluates resource configurations against defined rules and can automatically enforce settings — ensuring every storage account has HTTPS-only enabled at creation.',
  },

  {
    id: 'az900-gov-03',
    domain: 'Management & Governance',
    q: 'A finance department wants to ensure it only spends a set monthly amount on Azure and receives an alert when spending reaches 80% of budget. Which Azure tool provides this?',
    options: [
      'Azure Advisor recommending cost savings based on actual resource utilisation',
      'Azure Pricing Calculator estimating costs before deploying resources in Azure',
      'Azure Cost Management and Budgets setting spend limits and alerting on thresholds',
      'Azure Monitor tracking performance metrics and operational health of resources',
    ],
    correct: 2,
    explanation:
      'Azure Cost Management Budgets let you set monthly spend limits and configure alerts at defined thresholds — preventing unexpected overruns across subscriptions.',
  },

  {
    id: 'az900-gov-04',
    domain: 'Management & Governance',
    q: 'An organisation must ensure that no Azure resource can be accidentally deleted, including by users with Owner role. Which Azure feature implements this protection?',
    options: [
      'Azure Policy denying delete operations through a compliance policy rule',
      'Azure RBAC removing delete permissions from all user roles permanently',
      'Azure Backup creating copies of resources so they can be restored after deletion',
      'Azure Resource Locks applied to resources to prevent modification or deletion',
    ],
    correct: 3,
    explanation:
      'Azure Resource Locks (ReadOnly or Delete) override RBAC permissions — even Owners cannot delete a resource with a Delete lock applied, preventing accidental removal.',
  },

  {
    id: 'az900-gov-05',
    domain: 'Management & Governance',
    q: 'A developer needs to know the estimated monthly cost of deploying a new Azure VM with specific CPU, RAM, and storage before actually creating it. Which tool provides this estimate?',
    options: [
      'Azure Pricing Calculator estimating resource costs before any deployment occurs',
      'Azure Cost Management analysing actual spending on already-deployed resources',
      'Azure Advisor providing cost-saving recommendations for existing Azure resources',
      'Azure Monitor tracking performance and availability of currently running services',
    ],
    correct: 0,
    explanation:
      'The Azure Pricing Calculator lets you configure resources and estimate monthly costs before deployment — essential for budgeting and comparing architecture options.',
  },

  {
    id: 'az900-gov-06',
    domain: 'Management & Governance',
    q: 'A cloud architect needs to track the total cost of ownership when migrating from on-premises to Azure, including staff, facilities, and hardware savings. Which Microsoft tool helps with this analysis?',
    options: [
      'Azure Pricing Calculator estimating Azure service costs for new cloud deployments',
      'Total Cost of Ownership Calculator comparing on-premises versus Azure total costs',
      'Azure Cost Management reporting on actual Azure expenditure over time periods',
      'Azure Advisor analysing current Azure resources and suggesting cost optimisations',
    ],
    correct: 1,
    explanation:
      'The TCO Calculator compares total on-premises costs (hardware, power, staff, facilities) with Azure costs — helping organisations build the business case for cloud migration.',
  },

  {
    id: 'az900-gov-07',
    domain: 'Management & Governance',
    q: 'An administrator wants Azure to automatically send email alerts when CPU utilisation on a production VM exceeds 90% for more than five minutes. Which Azure service configures this?',
    options: [
      'Azure Advisor recommending CPU rightsizing based on historical utilisation patterns',
      'Azure Service Health showing planned maintenance and incident information for Azure',
      'Azure Monitor creating metric-based alert rules and sending notifications when triggered',
      'Azure Security Centre providing threat detection and security recommendations always',
    ],
    correct: 2,
    explanation:
      'Azure Monitor collects metrics and logs from resources and evaluates alert rules — it triggers action groups (email, webhook, auto-remediation) when conditions are met.',
  },

  {
    id: 'az900-gov-08',
    domain: 'Management & Governance',
    q: 'A business wants to understand which Azure resources are underutilised, which VMs could be resized, and which reserved instances might save money. Which Azure service provides these recommendations?',
    options: [
      'Azure Cost Management showing historical spending trends without actionable advice',
      'Azure Policy checking resources against compliance rules and reporting violations',
      'Azure Service Health providing information about Azure infrastructure issues globally',
      'Azure Advisor analysing resources and providing actionable cost and security guidance',
    ],
    correct: 3,
    explanation:
      'Azure Advisor analyses your Azure environment and provides personalised recommendations across five categories: Cost, Security, Reliability, Operational Excellence, and Performance.',
  },

  {
    id: 'az900-gov-09',
    domain: 'Management & Governance',
    q: 'A team wants to know whether any planned Azure maintenance will affect their VMs next week and get personalised notifications for services they use. Which tool provides this?',
    options: [
      'Azure Service Health providing personalised health and maintenance information',
      'Azure Monitor showing resource metrics and alerting on performance thresholds',
      'Azure Advisor giving optimisation recommendations for deployed resources always',
      'Azure Status Page showing global Azure service health for all regions together',
    ],
    correct: 0,
    explanation:
      'Azure Service Health shows planned maintenance, service incidents, and health advisories personalised to the specific Azure services and regions your subscription uses.',
  },

  {
    id: 'az900-gov-10',
    domain: 'Management & Governance',
    q: 'A security team needs a full audit trail showing exactly who made what changes to which Azure resources, and when, across all subscriptions. Which Azure feature provides this log?',
    options: [
      'Azure Monitor Metrics recording numerical performance data over time periods',
      'Azure Diagnostic Logs capturing service-specific operational events within resources',
      'Azure Activity Log recording all management-plane operations across a subscription',
      'Azure Security Centre showing security recommendations and threat detection alerts',
    ],
    correct: 1,
    explanation:
      'The Azure Activity Log records all control-plane operations (create, update, delete) across a subscription — who made the change, when, from which IP, and with what result.',
  },

  {
    id: 'az900-gov-11',
    domain: 'Management & Governance',
    q: 'A global enterprise needs a consistent configuration of networking, policy, and RBAC to be applied every time a new Azure environment is provisioned for a new project team. Which service packages this?',
    options: [
      'Azure Blueprints packaging policy, RBAC, and resources as a repeatable template',
      'Azure Resource Manager Templates defining infrastructure but not governance artefacts',
      'Management Groups providing a hierarchy for applying policies across subscriptions',
      'Azure DevOps automating deployment pipelines but not enforcing governance patterns',
    ],
    correct: 0,
    explanation:
      'Azure Blueprints packages ARM templates, Azure Policy, and RBAC assignments into a single versioned artefact that can be assigned to subscriptions for consistent governance.',
  },

  {
    id: 'az900-gov-12',
    domain: 'Management & Governance',
    q: 'Which Azure service provides a unified security posture score, highlights misconfigurations across Azure resources, and recommends remediation steps for security findings?',
    options: [
      'Azure Monitor tracking performance metrics and sending operational alerts always',
      'Azure Policy enforcing configuration compliance but not providing security scoring',
      'Azure Advisor giving general optimisation recommendations including some security tips',
      'Microsoft Defender for Cloud providing unified security posture and threat protection',
    ],
    correct: 3,
    explanation:
      'Microsoft Defender for Cloud (formerly Security Center) gives a Secure Score, surfaces misconfigurations, and provides actionable recommendations to improve security posture.',
  },

  {
    id: 'az900-gov-13',
    domain: 'Management & Governance',
    q: 'A company wants all resource names across its Azure environment to follow a standard naming convention. Administrators who do not follow the convention should be blocked. Which tool enforces this?',
    options: [
      'Azure Policy denying resource creation that violates defined naming rules',
      'Azure Blueprints packaging a governance template applied once per subscription',
      'Management Groups allowing naming standards to be recommended but not enforced',
      'Azure Advisor recommending naming improvements but not blocking non-compliant names',
    ],
    correct: 0,
    explanation:
      "Azure Policy with a Deny effect blocks resource creation if the resource name doesn't match the defined pattern — ensuring naming conventions are enforced, not just recommended.",
  },

  {
    id: 'az900-gov-14',
    domain: 'Management & Governance',
    q: 'An administrator creates a logical container within a subscription to group related VMs, databases, and storage accounts for an application so they can manage them as a unit. What was created?',
    options: [
      'A Management Group at the root level containing multiple subscriptions',
      'A Resource Group containing related Azure resources for a specific workload',
      'An Azure Subscription representing a billing and management boundary in Azure',
      "An Azure Tenant representing the organisation's Azure Active Directory instance",
    ],
    correct: 1,
    explanation:
      'A Resource Group is a logical container within a subscription for related resources — it defines a management, lifecycle, and billing boundary for a group of Azure resources.',
  },

  {
    id: 'az900-gov-15',
    domain: 'Management & Governance',
    q: 'A new junior developer accidentally deleted a production Resource Group containing critical databases. Which Azure feature would have prevented this without restricting their ability to create resources?',
    options: [
      'Azure RBAC assigning Reader role so the developer cannot delete any resources',
      'Azure Policy preventing deletion of resources tagged as production environment',
      'Azure Resource Lock preventing deletion of the resource group and its contents',
      'Management Group policies blocking subscription-level modifications to resources',
    ],
    correct: 2,
    explanation:
      'An Azure Resource Lock (CanNotDelete) on the Resource Group prevents deletion regardless of RBAC role — the developer could still create resources but not delete the locked group.',
  },

  {
    id: 'az900-gov-16',
    domain: 'Management & Governance',
    q: 'An operations team wants a single dashboard showing the health, performance, and cost of all Azure resources across five subscriptions in one view. Which Azure portal feature enables this?',
    options: [
      'Azure Monitor Workbooks providing custom visualisations of log and metric data',
      'Azure Dashboards creating custom pin-based views of resource information tiles',
      'Azure Advisor showing recommendations across subscriptions in a categorised view',
      'Azure Cost Management displaying spending trends across subscriptions and time',
    ],
    correct: 3,
    explanation:
      'Azure Dashboards in the Azure Portal allow you to pin metrics, resource health, cost charts, and any portal view — creating a single customisable overview across subscriptions.',
  },

  {
    id: 'az900-gov-17',
    domain: 'Management & Governance',
    q: 'A company deploys Azure resources across three regions and needs to ensure all resources in every region comply with specific data-handling policies automatically. Which approach scales best?',
    options: [
      'Manually reviewing each resource in each region periodically for compliance',
      'Using Azure Policy initiatives assigned at the management group level for scale',
      'Asking each regional team to self-certify their compliance on a monthly basis',
      'Creating individual policies for each subscription in each region separately',
    ],
    correct: 0,
    explanation:
      'Azure Policy initiatives (groups of policies) assigned at the Management Group level automatically apply to all subscriptions and regions within — the most scalable governance approach.',
  },

  {
    id: 'az900-gov-18',
    domain: 'Management & Governance',
    q: 'A finance manager needs to understand exactly what caused an unexpected $3,000 spike in Azure spending last month, broken down by service, resource, and team. Which tool provides this breakdown?',
    options: [
      'Azure Pricing Calculator estimating future costs before deployment decisions',
      'Azure Advisor suggesting ways to reduce costs going forward for existing resources',
      'Azure Cost Management providing detailed historical spend analysis and breakdowns',
      'Azure Blueprints packaging governance policies and templates for new environments',
    ],
    correct: 2,
    explanation:
      'Azure Cost Management provides detailed historical cost analysis with filters by service, resource group, tag, subscription, and date — enabling root cause analysis of spending spikes.',
  },

  {
    id: 'az900-gov-19',
    domain: 'Management & Governance',
    q: 'Which Azure governance feature allows an organisation to define and assign the roles (Owner, Contributor, Reader) that control what specific users or groups can do with Azure resources?',
    options: [
      'Azure Role-Based Access Control managing permissions for users and groups',
      'Azure Active Directory managing identities but not Azure resource permissions',
      'Azure Policy managing resource configuration but not user access permissions',
      'Azure Blueprints packaging governance templates for repeatable environment setup',
    ],
    correct: 0,
    explanation:
      'Azure RBAC assigns built-in or custom roles to users, groups, or service principals at subscription, resource group, or resource scope — controlling who can do what in Azure.',
  },

  {
    id: 'az900-gov-20',
    domain: 'Management & Governance',
    q: 'A cloud team wants to get alerts and guidance about Azure service outages, degraded performance, or planned maintenance that affect their specific subscriptions and regions. Which service provides this?',
    options: [
      'Azure Monitor collecting performance metrics from resources for alerting rules',
      'Azure Advisor analysing resources and providing cost and security recommendations',
      'Azure Security Centre providing threat detection and unified security posture scoring',
      'Azure Service Health personalising health alerts for services in your subscriptions',
    ],
    correct: 3,
    explanation:
      'Azure Service Health provides personalised health notifications — planned maintenance windows, service incidents, and health advisories scoped to your subscriptions and regions.',
  },

  // ── AZURE SECURITY & IDENTITY (20 questions, correct: 0,1,2,3 × 5) ──────────

  {
    id: 'az900-sec-01',
    domain: 'Azure Security & Identity',
    q: 'An Azure administrator assigns the Storage Blob Data Reader role to a user at the resource group scope. What access does this grant to storage accounts in that resource group?',
    options: [
      'The user can read blob data in storage accounts within the resource group',
      'The user gets full Owner access to all resources in the resource group level',
      'The user can read and write blob data but cannot delete any existing blobs',
      'The user inherits the role on the parent subscription but not resource group',
    ],
    correct: 0,
    explanation:
      'RBAC assignments are scoped — Storage Blob Data Reader at resource group scope grants read-only blob access to all storage accounts within that group and no other resources.',
  },

  {
    id: 'az900-sec-02',
    domain: 'Azure Security & Identity',
    q: 'A company requires that all Azure administrators must verify their identity using both a password and a mobile app approval before accessing the Azure portal. Which feature implements this?',
    options: [
      'Azure AD Conditional Access restricting access by device, location, and risk',
      'Microsoft Entra ID Multi-Factor Authentication requiring two verification methods',
      'Azure AD Identity Protection detecting risky sign-ins and compromised credentials',
      'Azure AD Privileged Identity Management providing just-in-time admin role activation',
    ],
    correct: 1,
    explanation:
      'MFA in Microsoft Entra ID (Azure AD) requires users to prove identity through two factors — something they know (password) and something they have (authenticator app, phone).',
  },

  {
    id: 'az900-sec-03',
    domain: 'Azure Security & Identity',
    q: 'A security policy requires that access to the Azure portal from unmanaged personal devices must be blocked, while managed corporate devices can access it normally. Which Azure feature enforces this?',
    options: [
      'Azure AD MFA requiring additional verification steps for all sign-in attempts',
      'Azure AD Identity Protection blocking sign-ins flagged as medium or high risk',
      'Conditional Access policies controlling access based on user, device, and location',
      'Azure AD Privileged Identity Management limiting admin role activation to eligible',
    ],
    correct: 2,
    explanation:
      'Conditional Access evaluates identity signals (user, location, device compliance, app) at sign-in time and enforces controls like block, require MFA, or require compliant device.',
  },

  {
    id: 'az900-sec-04',
    domain: 'Azure Security & Identity',
    q: 'An application running in Azure App Service needs to access Azure Key Vault secrets without storing any credentials in application code or configuration files. Which feature enables this?',
    options: [
      'Azure AD Application Registrations storing client secrets in app configuration',
      'Azure Service Principal with a certificate stored in the application code repository',
      'Azure Managed Identity automatically providing the app a credential-free identity',
      'Azure Key Vault access policy requiring a manually stored connection string value',
    ],
    correct: 3,
    explanation:
      'Azure Managed Identity automatically provides an Azure resource with an identity in Azure AD — the resource can authenticate to Key Vault without any credentials in code.',
  },

  {
    id: 'az900-sec-05',
    domain: 'Azure Security & Identity',
    q: 'A company implements a security model where access to every resource is verified continuously and no user, device, or network is trusted by default, even inside the corporate network. Which model is this?',
    options: [
      'Zero Trust security model where all access is verified and never assumed safe',
      'Defence in Depth layering multiple security controls to protect resources deeply',
      'Perimeter security model trusting everything inside the corporate network boundary',
      'Least privilege access model limiting user permissions to the minimum required only',
    ],
    correct: 0,
    explanation:
      'Zero Trust assumes breach — every access request is verified explicitly based on identity, device health, location, and data classification, regardless of network location.',
  },

  {
    id: 'az900-sec-06',
    domain: 'Azure Security & Identity',
    q: 'Which Defender for Cloud feature provides a numerical score that reflects the overall security health of your Azure environment based on applied recommendations?',
    options: [
      'Security Alerts notifying administrators of active threats and attack patterns',
      'Just-in-time VM access reducing attack surface by closing management ports automatically',
      'Secure Score measuring overall security posture based on implemented recommendations',
      'Regulatory Compliance dashboard tracking adherence to standards like ISO 27001',
    ],
    correct: 2,
    explanation:
      'Secure Score in Defender for Cloud quantifies security posture — each implemented recommendation increases the score, helping teams prioritise the highest-impact improvements.',
  },

  {
    id: 'az900-sec-07',
    domain: 'Azure Security & Identity',
    q: 'A large enterprise wants employees to use one set of credentials to access Microsoft 365, Azure, Salesforce, and other SaaS applications without logging in separately to each. Which capability enables this?',
    options: [
      'Single Sign-On allowing users to authenticate once for multiple applications',
      'Multi-Factor Authentication adding a second verification step to each application',
      'Azure AD B2C allowing customers to register with social identity providers',
      'Privileged Identity Management providing time-limited access to admin roles',
    ],
    correct: 0,
    explanation:
      'Single Sign-On (SSO) in Microsoft Entra ID authenticates users once and provides access to all connected applications — reducing password fatigue and improving security.',
  },

  {
    id: 'az900-sec-08',
    domain: 'Azure Security & Identity',
    q: 'A security team needs to grant an administrator temporary access to a privileged Azure role for exactly four hours to perform maintenance, then automatically revoke it. Which feature supports this?',
    options: [
      'Azure AD MFA requiring two-factor authentication for all privileged operations',
      'Azure AD Conditional Access blocking privileged access from non-corporate devices',
      'Azure AD Application Proxy providing secure remote access to on-premises applications',
      'Privileged Identity Management enabling just-in-time time-bound role activation',
    ],
    correct: 3,
    explanation:
      'Azure AD Privileged Identity Management (PIM) provides just-in-time role activation with time limits — administrators activate privileged roles only when needed and for defined durations.',
  },

  {
    id: 'az900-sec-09',
    domain: 'Azure Security & Identity',
    q: 'A web application receives traffic from the internet and the security team wants to block SQL injection attacks and cross-site scripting before they reach the application servers. Which Azure service provides this protection?',
    options: [
      'Azure Web Application Firewall inspecting and filtering malicious HTTP traffic',
      'Azure DDoS Protection absorbing volumetric attacks against network infrastructure',
      'Azure Firewall providing stateful filtering for network layer traffic rules',
      'Azure Network Security Groups filtering traffic at the VM network interface level',
    ],
    correct: 0,
    explanation:
      'Azure WAF (available on Application Gateway and Front Door) inspects inbound HTTP/HTTPS traffic and blocks common web exploits like SQL injection and XSS.',
  },

  {
    id: 'az900-sec-10',
    domain: 'Azure Security & Identity',
    q: 'An attacker floods an Azure application with millions of fake HTTP requests to overwhelm its servers and make it unavailable to legitimate users. Which Azure service mitigates this specific attack?',
    options: [
      'Azure WAF blocking malicious HTTP patterns before they reach application servers',
      'Azure DDoS Protection detecting and mitigating volumetric denial-of-service attacks',
      'Azure Firewall controlling which network traffic is allowed between Azure resources',
      'Azure Network Security Groups filtering inbound and outbound VM network traffic',
    ],
    correct: 1,
    explanation:
      'Azure DDoS Protection detects and mitigates volumetric DDoS attacks by absorbing or redirecting malicious traffic — Basic tier is free; Standard adds adaptive tuning.',
  },

  {
    id: 'az900-sec-11',
    domain: 'Azure Security & Identity',
    q: 'A company needs to ensure that traffic between subnets in an Azure Virtual Network is filtered so database VMs cannot receive traffic from outside their specific application tier. Which feature implements this?',
    options: [
      'Network Security Groups filtering inbound and outbound traffic at subnet level',
      'Azure Firewall providing centralised stateful filtering for complex network scenarios',
      'Azure DDoS Protection absorbing large-scale volumetric network attack traffic',
      'Azure Application Gateway routing and load balancing HTTP traffic to web servers',
    ],
    correct: 0,
    explanation:
      'Network Security Groups (NSGs) contain inbound and outbound security rules that filter traffic by source, destination, port, and protocol at the subnet or NIC level.',
  },

  {
    id: 'az900-sec-12',
    domain: 'Azure Security & Identity',
    q: 'Which Azure identity concept allows an external user (such as a partner from another company) to be invited to access resources in your Azure AD tenant without creating a new account for them?',
    options: [
      'Azure AD B2C enabling customer identity registration with social accounts',
      'Azure AD Application Proxy publishing on-premises apps to external users',
      'Managed Identity giving Azure resources an automatic service identity',
      'Azure AD B2B Collaboration inviting external users as guest accounts',
    ],
    correct: 3,
    explanation:
      'Azure AD B2B (Business-to-Business) collaboration lets you invite external users as guests — they authenticate with their own organisational credentials and access your resources.',
  },

  {
    id: 'az900-sec-13',
    domain: 'Azure Security & Identity',
    q: "A compliance officer needs to know which users have been flagged as having risky sign-ins (such as sign-ins from unfamiliar locations) across the organisation's Azure AD. Which service provides this?",
    options: [
      'Azure AD Identity Protection detecting and reporting risky users and sign-ins',
      'Azure AD Privileged Identity Management tracking admin role activation history',
      'Conditional Access auditing which policies were triggered during sign-in attempts',
      'Azure Monitor Activity Log recording all Azure management operations and changes',
    ],
    correct: 0,
    explanation:
      'Azure AD Identity Protection uses machine learning to detect risky sign-ins and compromised users — administrators get reports and can configure automated risk-based remediation policies.',
  },

  {
    id: 'az900-sec-14',
    domain: 'Azure Security & Identity',
    q: 'A defence-in-depth security strategy for an Azure workload should include controls at which levels?',
    options: [
      'Only at the network perimeter since internal traffic is implicitly trusted',
      'Only at the application layer since that is where most attacks are targeted',
      'Only at the data layer since protecting data is the ultimate security goal',
      'At every layer — physical, identity, perimeter, network, compute, application, data',
    ],
    correct: 3,
    explanation:
      'Defence in depth applies security controls at every layer of the stack — physical, identity, network perimeter, network, compute, application, and data — so attackers must breach multiple barriers.',
  },

  {
    id: 'az900-sec-15',
    domain: 'Azure Security & Identity',
    q: 'An administrator accidentally gives a user the Contributor role at the subscription scope, granting too much access. Which principle was violated in this scenario?',
    options: [
      'Least privilege principle granting only the minimum permissions actually required',
      'Zero Trust principle requiring continuous verification of all access attempts',
      'Defence in depth principle layering multiple security controls across the stack',
      'Separation of duties principle requiring two people to approve sensitive actions',
    ],
    correct: 0,
    explanation:
      'Least privilege means granting only the minimum permissions needed for a task — contributing at subscription scope is far broader than most tasks require.',
  },

  {
    id: 'az900-sec-16',
    domain: 'Azure Security & Identity',
    q: "A developer's Azure AD account is compromised and an attacker signs in from an unusual location. Which Azure feature would block this suspicious sign-in before any resources are touched?",
    options: [
      'MFA requiring additional verification steps on every single authentication attempt',
      'Conditional Access blocking sign-ins flagged as risky due to unusual sign-in location',
      'RBAC limiting the developer role to only the minimum required resource permissions',
      'Identity Protection detecting risk and requiring remediation before access is granted',
    ],
    correct: 1,
    explanation:
      'Conditional Access evaluates each sign-in for risk signals — an unusual location triggers the policy to block or require step-up MFA, stopping the attacker before any damage occurs.',
  },

  {
    id: 'az900-sec-17',
    domain: 'Azure Security & Identity',
    q: 'Which Microsoft Entra ID (Azure AD) feature allows administrators to configure that users from high-risk countries must always complete MFA, while users on compliant devices in the office can skip it?',
    options: [
      'Conditional Access applying different authentication requirements by context',
      'Multi-Factor Authentication requiring all users to complete MFA for every sign-in',
      'Identity Protection automatically blocking all high-risk sign-in attempts globally',
      'Privileged Identity Management activating admin roles only for approved time windows',
    ],
    correct: 0,
    explanation:
      'Conditional Access policies can require MFA for risky sign-ins (unfamiliar location, non-compliant device) while allowing trusted scenarios to proceed without additional verification.',
  },

  {
    id: 'az900-sec-18',
    domain: 'Azure Security & Identity',
    q: 'An Azure Firewall is deployed in a hub Virtual Network and all spoke VNets are peered to it. All outbound internet traffic from spoke VMs is forced through the firewall. Which pattern is this?',
    options: [
      'Network Security Groups applied to each subnet filtering traffic locally',
      'Hub-and-spoke network topology centralising firewall and shared services',
      'VPN Gateway connecting on-premises offices to Azure over encrypted tunnels',
      'ExpressRoute providing a dedicated private circuit to Azure from on-premises',
    ],
    correct: 1,
    explanation:
      'The hub-and-spoke model centralises shared services (firewall, VPN, DNS) in a hub VNet — spoke VNets peer to the hub and route all egress through the centralised Azure Firewall.',
  },

  {
    id: 'az900-sec-19',
    domain: 'Azure Security & Identity',
    q: 'A compliance team needs to demonstrate that Azure services used by the organisation meet ISO 27001, SOC 2, and GDPR requirements and review the supporting audit reports. Where can they find this?',
    options: [
      'Microsoft Service Trust Portal providing compliance documentation and audit reports',
      "Azure Compliance Manager tracking compliance tasks for the customer's own systems",
      'Microsoft Defender for Cloud showing security posture scores and misconfigurations',
      'Azure Policy displaying which resources comply with applied governance policy rules',
    ],
    correct: 0,
    explanation:
      'The Microsoft Service Trust Portal publishes audit reports, certifications, and compliance documentation for Azure services — covering ISO, SOC, GDPR, and dozens of other standards.',
  },

  {
    id: 'az900-sec-20',
    domain: 'Azure Security & Identity',
    q: 'A company stores customer PII in Azure SQL Database and needs to ensure that database administrators cannot see the actual credit card numbers stored in the table. Which Azure SQL feature protects this?',
    options: [
      'Always Encrypted encrypting sensitive columns so DBAs see only ciphertext',
      'Transparent Data Encryption encrypting database files at rest on Azure storage',
      'Azure Key Vault managing encryption keys used by the database for data protection',
      'Dynamic Data Masking displaying masked values to users without proper permission',
    ],
    correct: 3,
    explanation:
      'Dynamic Data Masking shows masked placeholder values (like XXXX-XXXX-XXXX-1234) to users without unmasking privileges — DBAs can administer the DB without seeing real PII.',
  },
];
