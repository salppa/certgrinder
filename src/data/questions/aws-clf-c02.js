// CLF-C02: AWS Certified Cloud Practitioner — 80 questions (rewritten)
// Options: ~10-13 words each, no length bias, no A)/B) prefixes
// correct: 0,1,2,3 repeating — 20× each across 80 questions

export const CLFC02_QUESTIONS = [
  // ── CLOUD CONCEPTS (20 questions) ────────────────────────────────────────────

  {
    id: 'clf-cc-01',
    domain: 'Cloud Concepts',
    q: 'A startup pays only for the exact compute hours its web servers actually run each month. Which AWS pricing model does this describe?',
    options: [
      'Pay-as-you-go pricing where you pay only for resources actually consumed',
      'Reserved pricing committing to one or three years for a discounted rate',
      'Spot pricing purchasing unused AWS capacity at steep discounts available',
      'Savings Plans committing to a consistent hourly spend for lower pricing',
    ],
    correct: 0,
    explanation:
      'Pay-as-you-go is the foundational AWS pricing model — no upfront cost, no minimum fee, you pay only per second or per hour of actual resource usage.',
  },

  {
    id: 'clf-cc-02',
    domain: 'Cloud Concepts',
    q: "Under the AWS shared responsibility model for Amazon EC2, which task is the customer's responsibility?",
    options: [
      'Patching the hypervisor software running beneath the EC2 instances',
      'Maintaining physical hardware in the AWS data centre facilities always',
      'Replacing failed storage drives in the servers running EC2 workloads',
      'Installing and patching the operating system on each EC2 instance',
    ],
    correct: 3,
    explanation:
      'AWS manages the hypervisor and physical hardware (security OF the cloud). The customer manages the OS, applications, and data on EC2 (security IN the cloud).',
  },

  {
    id: 'clf-cc-03',
    domain: 'Cloud Concepts',
    q: 'A company keeps its core financial systems on-premises but uses AWS for development and test workloads. Which cloud deployment model describes this?',
    options: [
      'Public cloud where all infrastructure runs entirely in AWS shared regions',
      'Private cloud where all workloads run exclusively on company-owned hardware',
      'Hybrid cloud connecting on-premises infrastructure with cloud services together',
      'Community cloud shared among organisations with similar compliance requirements',
    ],
    correct: 2,
    explanation:
      'A hybrid deployment connects on-premises systems with cloud services — retaining legacy infrastructure while leveraging AWS for new or variable workloads.',
  },

  {
    id: 'clf-cc-04',
    domain: 'Cloud Concepts',
    q: 'A media company adds thousands of servers instantly during a live event and removes them all the moment the event ends. Which cloud benefit enables this?',
    options: [
      'High availability keeping workloads accessible despite component failures',
      'Fault tolerance allowing systems to operate when individual components fail',
      'Global reach distributing infrastructure across multiple geographic regions',
      'Elasticity scaling capacity up during peaks and back down automatically',
    ],
    correct: 3,
    explanation:
      'Elasticity is the ability to rapidly scale resources up to meet demand spikes and back down immediately after — eliminating both outage risk and idle-capacity cost.',
  },

  {
    id: 'clf-cc-05',
    domain: 'Cloud Concepts',
    q: 'Which AWS global infrastructure component is a distinct geographic area containing multiple isolated data centres connected by low-latency links?',
    options: [
      'AWS Region a geographically isolated area containing multiple data centres',
      'AWS Availability Zone one isolated data centre facility within an AWS region',
      'AWS Edge Location a CDN point-of-presence for cached content delivery',
      'AWS Local Zone compute infrastructure extended closer to a metropolitan area',
    ],
    correct: 0,
    explanation:
      'An AWS Region (e.g., us-east-1) is a distinct geographic cluster of Availability Zones — data stored in a Region stays there unless you explicitly replicate it elsewhere.',
  },

  {
    id: 'clf-cc-06',
    domain: 'Cloud Concepts',
    q: 'A financial firm needs EC2 instances to keep running even if one physical data centre in a region loses power. Which AWS feature provides this protection?',
    options: [
      'AWS Regions providing geographic separation across different countries',
      'AWS Availability Zones providing isolated data centres within the same region',
      'AWS Edge Locations caching content closer to users across the internet',
      'AWS Local Zones providing compute closer to specific metropolitan areas',
    ],
    correct: 1,
    explanation:
      'Availability Zones are isolated data centres within a region — deploying across multiple AZs protects workloads from single-AZ hardware or power failures.',
  },

  {
    id: 'clf-cc-07',
    domain: 'Cloud Concepts',
    q: 'A company migrates to AWS to eliminate the need to guess and pre-buy server capacity years in advance. Which of the six cloud advantages does this address?',
    options: [
      'Trade capital expense for operational expense reducing large upfront costs',
      'Stop guessing capacity by provisioning exactly what demand requires now',
      'Benefit from massive economies of scale AWS passes on to all customers',
      'Go global in minutes by deploying infrastructure across worldwide regions',
    ],
    correct: 1,
    explanation:
      'Stopping capacity guessing is a core AWS benefit — provision what you need today, scale up as you grow, and scale down in quiet periods without over-purchasing hardware.',
  },

  {
    id: 'clf-cc-08',
    domain: 'Cloud Concepts',
    q: 'Which AWS advantage allows a startup to launch services in Tokyo, São Paulo, and Dublin within a single day without purchasing hardware in each location?',
    options: [
      'Trade capital expense for variable expense reducing upfront hardware cost',
      'Stop spending money running datacentres freeing IT teams for innovation',
      'Benefit from economies of scale reducing per-unit infrastructure pricing',
      'Go global in minutes by deploying to any AWS region with a few clicks',
    ],
    correct: 3,
    explanation:
      "Going global in minutes means leveraging AWS's 30+ Regions worldwide — teams deploy to any geography in hours using the same APIs with no hardware procurement.",
  },

  {
    id: 'clf-cc-09',
    domain: 'Cloud Concepts',
    q: 'Which cloud service model gives the developer a managed platform to deploy application code while AWS handles the OS, patching, and runtime automatically?',
    options: [
      'IaaS renting virtualised compute where the customer manages the OS fully',
      'PaaS providing a managed platform so developers focus on code and data',
      'SaaS delivering complete software applications fully managed by the vendor',
      'On-premises where the organisation owns and manages all infrastructure',
    ],
    correct: 1,
    explanation:
      'Platform as a Service (PaaS) abstracts infrastructure — AWS manages OS, runtime, and middleware, while the customer deploys and manages only their application code and data.',
  },

  {
    id: 'clf-cc-10',
    domain: 'Cloud Concepts',
    q: 'Which AWS design principle recommends treating infrastructure as replaceable and assuming any component can fail at any time?',
    options: [
      'Design for failure assuming components fail and building resilience in',
      'Elasticity scaling resources up and down in response to real demand',
      'Stop guessing capacity provisioning what you need adjusting over time',
      'Implement automation replacing manual processes with scripted operations',
    ],
    correct: 0,
    explanation:
      "'Design for failure' means architecting with redundancy and auto-recovery so individual component failures don't cascade — the foundation of highly available AWS architectures.",
  },

  {
    id: 'clf-cc-11',
    domain: 'Cloud Concepts',
    q: 'AWS can offer lower per-unit infrastructure costs than most organisations because it purchases hardware at massive global scale. Which cloud advantage is this?',
    options: [
      'Massive economies of scale reducing per-unit infrastructure costs for all',
      'Stop spending money on datacentres so IT focuses on business value',
      'Trade fixed capital expense for variable operational expense structure',
      'Go global in minutes by deploying workloads across worldwide regions',
    ],
    correct: 0,
    explanation:
      'AWS passes the cost benefits of massive-scale hardware purchasing to customers — per-unit compute and storage costs are far lower than any single organisation could achieve independently.',
  },

  {
    id: 'clf-cc-12',
    domain: 'Cloud Concepts',
    q: 'Which AWS Well-Architected pillar focuses on protecting information, systems, and assets through risk assessments, controls, and data encryption practices?',
    options: [
      'Operational Excellence running and monitoring systems to deliver business value',
      'Reliability ensuring workloads perform correctly and recover from failures',
      'Performance Efficiency using compute resources efficiently to meet requirements',
      'Security protecting information and systems through controls risk and data',
    ],
    correct: 3,
    explanation:
      'The Security pillar addresses IAM, detective controls, infrastructure protection, data protection, and incident response across all AWS workloads and accounts.',
  },

  {
    id: 'clf-cc-13',
    domain: 'Cloud Concepts',
    q: 'A company migrates to AWS so its IT team stops maintaining servers and focuses on building customer-facing features instead. Which AWS benefit does this represent?',
    options: [
      'Elasticity scaling resources automatically to match real customer demand',
      'Go global in minutes deploying across multiple worldwide regions rapidly',
      'Stop spending money on datacentres to focus on customers and products',
      'Trade capital expense for variable operational expense reducing upfront',
    ],
    correct: 2,
    explanation:
      'Eliminating undifferentiated heavy lifting (hardware, patching, facilities) lets teams concentrate on what differentiates their business — building products customers actually use.',
  },

  {
    id: 'clf-cc-14',
    domain: 'Cloud Concepts',
    q: 'Which AWS Well-Architected pillar focuses on running, monitoring, and continually improving operational processes and procedures to deliver business value?',
    options: [
      'Operational Excellence running and monitoring systems to deliver value',
      'Reliability ensuring workloads recover quickly from infrastructure failures',
      'Cost Optimisation avoiding unnecessary costs and maximising efficiency',
      'Sustainability minimising the environmental impact of cloud workloads run',
    ],
    correct: 0,
    explanation:
      'Operational Excellence covers operations as code, frequent small reversible changes, refining operations procedures, and learning from all operational events to improve over time.',
  },

  {
    id: 'clf-cc-15',
    domain: 'Cloud Concepts',
    q: 'Which AWS infrastructure concept serves global users with low latency by caching content at network edge nodes physically close to end users?',
    options: [
      'AWS Availability Zones isolated data centres inside a single AWS region',
      'AWS Regions geographically separate areas each containing multiple zones',
      'AWS Local Zones compute extensions closer to specific city populations',
      'AWS Edge Locations caching content close to users for fast delivery',
    ],
    correct: 3,
    explanation:
      'Edge Locations are CloudFront points-of-presence distributed at 400+ cities globally — they cache content close to users, reducing latency from hundreds of milliseconds to single digits.',
  },

  {
    id: 'clf-cc-16',
    domain: 'Cloud Concepts',
    q: 'Which AWS support plan includes a dedicated Technical Account Manager and access to Infrastructure Event Management for planned launches?',
    options: [
      'Basic plan free with all AWS accounts with access to documentation',
      'Developer plan providing business-hours email support for development use',
      'Business plan providing 24/7 phone email and chat with support engineers',
      'Enterprise plan providing a dedicated TAM and Infrastructure Event Management',
    ],
    correct: 3,
    explanation:
      'Enterprise Support includes a dedicated TAM, Infrastructure Event Management, Concierge support, and <15-minute response for critical system-down situations.',
  },

  {
    id: 'clf-cc-17',
    domain: 'Cloud Concepts',
    q: 'Which AWS service analyses your AWS environment and provides prioritised recommendations across cost, security, performance, fault tolerance, and service limits?',
    options: [
      'AWS Config tracking configuration changes of resources for compliance auditing',
      'AWS CloudTrail logging all API calls made within an AWS account over time',
      'AWS Trusted Advisor analysing the environment and providing best-practice recommendations',
      'AWS Cost Explorer visualising and filtering historical AWS spending by service',
    ],
    correct: 2,
    explanation:
      'AWS Trusted Advisor evaluates your AWS environment against AWS best practices and provides specific actionable recommendations across five key categories to improve your setup.',
  },

  {
    id: 'clf-cc-18',
    domain: 'Cloud Concepts',
    q: 'Which AWS Well-Architected pillar addresses using the right resource types, sizes, and monitoring to meet performance requirements efficiently?',
    options: [
      'Operational Excellence running workloads and improving processes over time',
      'Reliability recovering from failures and meeting demand with correct resources',
      'Performance Efficiency selecting right resource types and sizes for requirements',
      'Cost Optimisation eliminating unnecessary spend and maximising value received',
    ],
    correct: 2,
    explanation:
      'The Performance Efficiency pillar covers selecting appropriate resource types, monitoring performance, and making informed decisions to maintain efficiency as demand evolves.',
  },

  {
    id: 'clf-cc-19',
    domain: 'Cloud Concepts',
    q: 'A company provisions 100 test servers for exactly eight hours, then deletes them all. Which AWS pricing characteristic makes this economically practical?',
    options: [
      'Reserved Instance pricing offering the deepest discounts for long-term use',
      'Savings Plans committing to an hourly spend amount for one or three years',
      'Consumption-based pricing where you pay only for resources used each hour',
      'Enterprise Agreement pricing bundling services for annual negotiated discounts',
    ],
    correct: 2,
    explanation:
      'Consumption-based pricing means you pay only for the hours the servers run — spin up 100 servers for 8 hours and pay for exactly that, no more, with no minimum commitment.',
  },

  {
    id: 'clf-cc-20',
    domain: 'Cloud Concepts',
    q: 'Which statement correctly describes the difference between vertical and horizontal scaling in AWS?',
    options: [
      'Vertical scaling adds more instances; horizontal scaling increases instance size',
      'Both scaling types produce identical results and are interchangeable in AWS',
      'Vertical scaling only applies to databases; horizontal applies to web servers',
      "Vertical scaling increases one instance's capacity; horizontal adds more instances",
    ],
    correct: 3,
    explanation:
      'Vertical scaling (scale up) increases CPU/RAM on a single instance. Horizontal scaling (scale out) adds more instances to share the load — both strategies are supported in AWS.',
  },

  // ── SECURITY & COMPLIANCE (20 questions) ─────────────────────────────────────

  {
    id: 'clf-sec-01',
    domain: 'Security & Compliance',
    q: 'An EC2 instance needs to read from S3 without storing any access keys in the application code or on the server. Which AWS feature enables this securely?',
    options: [
      'IAM Role providing temporary credentials to EC2 automatically without keys',
      'IAM User creating a dedicated account with long-term programmatic access keys',
      'IAM Policy document attached to the S3 bucket granting the EC2 write access',
      'AWS Secrets Manager rotating and storing access keys for the application use',
    ],
    correct: 0,
    explanation:
      'IAM Roles provide temporary, automatically rotated credentials to EC2 — the instance assumes the role at launch with no long-term keys stored anywhere in code or config.',
  },

  {
    id: 'clf-sec-02',
    domain: 'Security & Compliance',
    q: 'A security team wants a real-time alert when the AWS root account logs into the console. Which service combination enables this notification?',
    options: [
      'AWS IAM managing user permissions and tracking root account activity',
      'AWS Config recording resource configuration changes and compliance status',
      'Amazon CloudWatch monitoring events and triggering alerts on defined conditions',
      'AWS Trusted Advisor checking account security and notifying on root usage',
    ],
    correct: 2,
    explanation:
      'CloudWatch Events (EventBridge) captures root sign-in events from CloudTrail and can trigger SNS notifications — alerting the security team immediately when root is used.',
  },

  {
    id: 'clf-sec-03',
    domain: 'Security & Compliance',
    q: 'Which AWS service records every API call made in an account — who made it, from which IP, and what action was taken — for audit and forensic purposes?',
    options: [
      'AWS CloudTrail logging a complete API call history for governance purposes',
      'Amazon CloudWatch monitoring performance metrics and setting operational alerts',
      'AWS Config tracking configuration state and changes of resources over time',
      'Amazon GuardDuty detecting threats using ML on account and network activity',
    ],
    correct: 0,
    explanation:
      'AWS CloudTrail logs every API call across all services — console actions, CLI commands, and SDK calls — providing the immutable audit trail required for security investigation and compliance.',
  },

  {
    id: 'clf-sec-04',
    domain: 'Security & Compliance',
    q: 'A company must ensure no S3 bucket in their account can ever be made publicly accessible, regardless of individual bucket settings. Which feature enforces this?',
    options: [
      'S3 Bucket Policies granting or denying access per bucket for specific users',
      'S3 Access Control Lists providing legacy object-level permissions on buckets',
      'IAM Policies attached to users controlling the S3 actions they can perform',
      'S3 Block Public Access account-level setting overriding all public configurations',
    ],
    correct: 3,
    explanation:
      'S3 Block Public Access at the account level overrides all bucket policies and ACLs — ensuring no S3 bucket in the account can ever be made publicly accessible by any administrator.',
  },

  {
    id: 'clf-sec-05',
    domain: 'Security & Compliance',
    q: 'Which AWS service uses machine learning to continuously analyse CloudTrail logs, VPC Flow Logs, and DNS queries to detect malicious or unauthorised behaviour?',
    options: [
      'Amazon GuardDuty detecting threats using ML on AWS account activity logs',
      'AWS Config evaluating resource configurations against desired compliance rules',
      'AWS Security Hub aggregating findings from multiple security services centrally',
      'Amazon Macie discovering and classifying sensitive data stored in S3 buckets',
    ],
    correct: 0,
    explanation:
      'Amazon GuardDuty uses ML to analyse CloudTrail, VPC Flow, and DNS logs — identifying threats like cryptocurrency mining, credential theft, unusual API calls, and data exfiltration.',
  },

  {
    id: 'clf-sec-06',
    domain: 'Security & Compliance',
    q: 'A compliance team needs to continuously evaluate whether resources comply with internal policies and receive immediate alerts on configuration drift. Which service provides this?',
    options: [
      'AWS Config tracking and evaluating resource configurations against defined rules',
      'AWS CloudTrail recording API calls for forensic investigation after the fact',
      'AWS Trusted Advisor recommending best practices without real-time monitoring',
      'Amazon Inspector scanning EC2 instances for software vulnerabilities automatically',
    ],
    correct: 0,
    explanation:
      'AWS Config records configuration changes and evaluates resources against Config Rules — triggering SNS notifications when a resource drifts out of the desired compliant state.',
  },

  {
    id: 'clf-sec-07',
    domain: 'Security & Compliance',
    q: 'A company stores customer financial data in S3 and needs to automatically identify where PII and sensitive data is located across all buckets. Which service does this?',
    options: [
      'Amazon GuardDuty detecting threats and anomalies in AWS account activity',
      'AWS Security Hub providing a unified view of security findings across services',
      'Amazon Macie using ML to discover and classify sensitive data in S3 buckets',
      'AWS Inspector scanning EC2 workloads for known software vulnerabilities only',
    ],
    correct: 2,
    explanation:
      'Amazon Macie uses machine learning to automatically discover, classify, and alert on sensitive data in S3 — identifying PII, financial data, and credentials across all buckets.',
  },

  {
    id: 'clf-sec-08',
    domain: 'Security & Compliance',
    q: 'Which IAM security best practice ensures that a compromised credential has the smallest possible impact on the AWS environment?',
    options: [
      'Using the root account for daily admin tasks since it has full permissions',
      'Sharing IAM credentials between team members to simplify access management',
      'Principle of least privilege granting only minimum permissions actually required',
      'Creating broad wildcard IAM policies so users access all services they might need',
    ],
    correct: 2,
    explanation:
      'Least privilege means granting only the exact permissions a user or service needs — limiting blast radius if credentials are compromised and containing insider threats.',
  },

  {
    id: 'clf-sec-09',
    domain: 'Security & Compliance',
    q: 'Which AWS service provides automatic DDoS protection for all AWS customers at no additional charge for network and transport layer attacks?',
    options: [
      'AWS Shield Standard providing automatic DDoS protection for all customers',
      'AWS WAF filtering malicious HTTP requests based on customisable security rules',
      'Amazon GuardDuty detecting DDoS attack patterns through machine learning analysis',
      'AWS Firewall Manager centrally managing WAF and Shield across multiple accounts',
    ],
    correct: 0,
    explanation:
      'AWS Shield Standard is automatically enabled for all AWS accounts at no extra cost — protecting against common Layer 3 and 4 DDoS attacks on EC2, ELB, CloudFront, and Route 53.',
  },

  {
    id: 'clf-sec-10',
    domain: 'Security & Compliance',
    q: 'A web application is receiving SQL injection attacks that attempt to manipulate the database through the HTTP request. Which AWS service blocks these attacks?',
    options: [
      'AWS Shield Advanced providing enhanced DDoS protection with cost guarantees',
      'Amazon GuardDuty analysing API and network logs to detect unusual account activity',
      'AWS WAF filtering HTTP traffic to block SQL injection and other web exploits',
      'AWS Network Firewall providing stateful network traffic filtering at the VPC level',
    ],
    correct: 2,
    explanation:
      'AWS WAF (Web Application Firewall) inspects HTTP/HTTPS requests and uses rules — including AWS Managed Rules — to block common exploits like SQL injection, XSS, and bad bot traffic.',
  },

  {
    id: 'clf-sec-11',
    domain: 'Security & Compliance',
    q: 'Which compliance standard is most relevant when AWS customers need to demonstrate secure handling of payment card transaction data to their auditors?',
    options: [
      'SOC 2 Type II covering security availability processing integrity confidentiality',
      'ISO 27001 certification for information security management system practices',
      'PCI DSS compliance standard specifically for payment card data security handling',
      'HIPAA compliance standard for protected health information handling requirements',
    ],
    correct: 2,
    explanation:
      'PCI DSS (Payment Card Industry Data Security Standard) applies to any organisation that processes, stores, or transmits payment card data — AWS is certified as a PCI DSS Level 1 service provider.',
  },

  {
    id: 'clf-sec-12',
    domain: 'Security & Compliance',
    q: 'Where can AWS customers download third-party audit reports, ISO certifications, and SOC compliance documentation for AWS services to show their own auditors?',
    options: [
      'AWS Trusted Advisor showing security recommendations for customer resources',
      'AWS Config displaying resource compliance status against customer-defined rules',
      'AWS Security Hub aggregating security findings across accounts and AWS services',
      'AWS Artifact providing on-demand access to AWS compliance reports and agreements',
    ],
    correct: 3,
    explanation:
      'AWS Artifact is the self-service compliance portal — customers can download AWS ISO certifications, SOC 1/2/3 reports, PCI DSS attestations, and regional compliance documentation.',
  },

  {
    id: 'clf-sec-13',
    domain: 'Security & Compliance',
    q: 'A security engineer needs a single dashboard consolidating findings from GuardDuty, Inspector, and Macie across 20 AWS accounts. Which service provides this unified view?',
    options: [
      'AWS Security Hub aggregating and normalising findings across accounts and services',
      'AWS Config tracking resource configuration compliance across all linked accounts',
      'Amazon CloudWatch displaying metrics and logs from AWS services in one view',
      'AWS CloudTrail consolidating API call history from multiple accounts in one trail',
    ],
    correct: 0,
    explanation:
      'AWS Security Hub aggregates, normalises, and prioritises findings from multiple AWS security services and third-party tools — providing a unified security posture across all accounts.',
  },

  {
    id: 'clf-sec-14',
    domain: 'Security & Compliance',
    q: 'An organisation requires all IAM users to use multi-factor authentication before accessing any sensitive AWS resources. Which IAM mechanism enforces this condition?',
    options: [
      'IAM Roles granting temporary credentials that automatically enforce MFA use',
      'IAM Permission Boundaries limiting the maximum permissions a role can assume',
      'IAM Identity Providers federating external users into AWS using SAML or OIDC',
      'IAM Policy Conditions requiring MFA authentication before granting resource access',
    ],
    correct: 3,
    explanation:
      'IAM policy conditions using aws:MultiFactorAuthPresent enforce MFA — if a user signs in with only a password, the condition denies access until MFA is provided.',
  },

  {
    id: 'clf-sec-15',
    domain: 'Security & Compliance',
    q: "Under the shared responsibility model, which components are AWS's responsibility to secure in an Amazon RDS deployment?",
    options: [
      'Encrypting customer data and managing encryption keys for the database',
      'Managing database user accounts and controlling application access permissions',
      'Physical hardware network infrastructure and the database engine patching',
      'Configuring database security groups and parameter groups for the instance',
    ],
    correct: 2,
    explanation:
      'AWS manages the physical hardware, network, and patches the RDS database engine (security OF the cloud). The customer manages data encryption, network access, and DB user permissions.',
  },

  {
    id: 'clf-sec-16',
    domain: 'Security & Compliance',
    q: 'A team needs to store database passwords and API keys, automatically rotating them every 30 days without modifying application code. Which service handles this?',
    options: [
      'AWS KMS managing cryptographic keys but not storing application secrets',
      'AWS IAM managing identity credentials but not application-level secret values',
      'AWS CloudHSM providing dedicated hardware security modules for key storage',
      'AWS Secrets Manager storing and automatically rotating application secrets',
    ],
    correct: 3,
    explanation:
      'AWS Secrets Manager stores secrets (passwords, API keys, tokens) and integrates with Lambda to automatically rotate them on a schedule — applications always retrieve the current version.',
  },

  {
    id: 'clf-sec-17',
    domain: 'Security & Compliance',
    q: 'Which AWS service continuously scans EC2 instances and container workloads for known software vulnerabilities and unintended network exposure?',
    options: [
      'Amazon Inspector scanning workloads automatically for software vulnerabilities',
      'Amazon GuardDuty analysing CloudTrail and VPC flow logs for threat indicators',
      'AWS Config evaluating resources against defined configuration compliance rules',
      'Amazon Macie discovering and protecting sensitive data in S3 storage buckets',
    ],
    correct: 0,
    explanation:
      'Amazon Inspector uses the AWS Systems Manager agent to continuously scan EC2 and container images for CVE-based vulnerabilities, prioritising findings by exploitability and severity.',
  },

  {
    id: 'clf-sec-18',
    domain: 'Security & Compliance',
    q: 'A developer commits an AWS IAM access key to a public GitHub repository. What is the most critical immediate first action?',
    options: [
      'Rotate the exposed key by generating a new one then update all applications',
      'Deactivate and delete the exposed IAM access key immediately without delay',
      'Enable CloudTrail to detect whether the exposed key has already been used',
      'Apply a Service Control Policy blocking the exposed key from being used now',
    ],
    correct: 1,
    explanation:
      'Immediately deactivate and delete the exposed key — assume it has already been discovered and abused. Treat any committed credential as fully compromised from the moment of exposure.',
  },

  {
    id: 'clf-sec-19',
    domain: 'Security & Compliance',
    q: 'Which type of IAM policy is attached to an AWS resource like an S3 bucket rather than to an IAM user, group, or role?',
    options: [
      'Identity-based policy attached to IAM identities controlling what they can do',
      'Resource-based policy attached to resources granting access to specific principals',
      'Permission boundary policy limiting the maximum permissions a role can have',
      'Service control policy restricting available actions across organisation accounts',
    ],
    correct: 1,
    explanation:
      'Resource-based policies are attached directly to resources (S3, KMS, Lambda, SQS) — they specify which principals can perform which actions on that resource, including cross-account access.',
  },

  {
    id: 'clf-sec-20',
    domain: 'Security & Compliance',
    q: 'An organisation with 50 accounts needs to prevent any account administrator from ever disabling CloudTrail logging. Which AWS feature enforces this guardrail?',
    options: [
      'IAM Password Policy enforcing strong passwords across all account users',
      'AWS Config Rules checking whether CloudTrail is enabled in each individual account',
      'AWS Service Control Policies preventing member accounts from disabling CloudTrail',
      'AWS CloudTrail Organisation Trail applying logging to all accounts automatically',
    ],
    correct: 2,
    explanation:
      'Service Control Policies (SCPs) in AWS Organizations act as permission guardrails — an SCP denying cloudtrail:StopLogging cannot be overridden by any member account administrator.',
  },

  // ── CLOUD TECHNOLOGY & SERVICES (20 questions) ───────────────────────────────

  {
    id: 'clf-tech-01',
    domain: 'Cloud Technology & Services',
    q: 'A company needs a fully managed relational database with automated backups, patching, and multi-AZ failover, without managing any database servers. Which service fits?',
    options: [
      'Amazon RDS providing managed relational databases with automated operations',
      'Amazon EC2 running a self-managed database with full OS and software control',
      'Amazon DynamoDB providing a serverless NoSQL key-value and document database',
      'Amazon Redshift providing a managed data warehouse for analytical query workloads',
    ],
    correct: 0,
    explanation:
      'Amazon RDS is the fully managed relational database — AWS handles hardware, OS, engine patching, automated backups, and multi-AZ failover for MySQL, PostgreSQL, SQL Server, and more.',
  },

  {
    id: 'clf-tech-02',
    domain: 'Cloud Technology & Services',
    q: 'An application stores hundreds of millions of user sessions and needs single-digit millisecond reads at any scale without managing servers. Which database fits best?',
    options: [
      'Amazon RDS for MySQL providing managed SQL for structured transactional data',
      'Amazon DynamoDB a serverless NoSQL database scaling to any workload size',
      'Amazon ElastiCache providing in-memory caching layer for read-heavy workloads',
      'Amazon Aurora a high-performance MySQL-compatible managed relational database',
    ],
    correct: 1,
    explanation:
      'Amazon DynamoDB is serverless and scales automatically to any volume with consistent single-digit millisecond latency — no capacity planning, no server management required.',
  },

  {
    id: 'clf-tech-03',
    domain: 'Cloud Technology & Services',
    q: 'A data team runs complex analytical SQL queries against petabytes of structured sales history for business intelligence dashboards. Which AWS database serves this best?',
    options: [
      'Amazon RDS handling OLTP transactional workloads for operational applications',
      'Amazon DynamoDB storing high-volume NoSQL data for low-latency application use',
      'Amazon Redshift providing a cloud data warehouse for petabyte-scale analytics',
      'Amazon Aurora providing a high-performance MySQL-compatible relational database',
    ],
    correct: 2,
    explanation:
      'Amazon Redshift is the AWS cloud data warehouse — columnar storage and massively parallel processing make it ideal for OLAP queries against petabytes of structured analytical data.',
  },

  {
    id: 'clf-tech-04',
    domain: 'Cloud Technology & Services',
    q: "Which EC2 purchasing option provides up to 90% discount by using spare AWS capacity but can be interrupted with two minutes' notice when AWS needs it back?",
    options: [
      'On-Demand Instances paying standard per-hour rates with no commitment',
      'Reserved Instances committing to one or three years for significant discounts',
      'Dedicated Hosts providing physical server access for software licensing needs',
      'Spot Instances using spare AWS capacity at deep discounts with interruption risk',
    ],
    correct: 3,
    explanation:
      "EC2 Spot Instances use spare AWS capacity at up to 90% discount — ideal for fault-tolerant batch processing, but they can be reclaimed with two minutes' notice when On-Demand demand rises.",
  },

  {
    id: 'clf-tech-05',
    domain: 'Cloud Technology & Services',
    q: 'A developer wants code to run only when images are uploaded to S3, paying only for the milliseconds each execution takes, with no servers to manage. Which service provides this?',
    options: [
      'Amazon EC2 running a dedicated server that polls S3 for new image uploads',
      'Amazon ECS running containerised workloads on managed container infrastructure',
      'AWS Lambda executing code in response to S3 events with no server management',
      'Amazon Lightsail providing simplified virtual machine instances for small workloads',
    ],
    correct: 2,
    explanation:
      'AWS Lambda is the serverless compute service — it triggers on S3 upload events, executes for milliseconds, and charges in 1ms increments with zero idle cost and no infrastructure to manage.',
  },

  {
    id: 'clf-tech-06',
    domain: 'Cloud Technology & Services',
    q: 'Which Amazon S3 storage class is most cost-effective for data accessed only a few times per year but must be retrievable within milliseconds when needed?',
    options: [
      'S3 Standard designed for frequently accessed active data with low latency',
      'S3 Standard-IA for infrequently accessed data with millisecond retrieval time',
      'S3 Glacier Flexible Retrieval for archive data with hours-long retrieval times',
      'S3 Intelligent-Tiering automatically moving data between access tier levels',
    ],
    correct: 1,
    explanation:
      'S3 Standard-IA (Infrequent Access) has lower storage cost than Standard while maintaining millisecond retrieval — it charges a per-GB retrieval fee, optimised for occasional access patterns.',
  },

  {
    id: 'clf-tech-07',
    domain: 'Cloud Technology & Services',
    q: 'An enterprise needs to connect its on-premises data centre to AWS via a dedicated private fibre link that never touches the public internet. Which service provides this?',
    options: [
      'AWS VPN creating an encrypted tunnel over the existing public internet connection',
      'Amazon CloudFront delivering cached content from edge locations near users',
      'AWS Direct Connect providing a dedicated private network connection to AWS',
      'AWS Transit Gateway connecting multiple VPCs and on-premises through a hub',
    ],
    correct: 2,
    explanation:
      "AWS Direct Connect provides a dedicated physical connection between a customer's facility and AWS — bypassing the internet for consistent bandwidth, lower latency, and higher security.",
  },

  {
    id: 'clf-tech-08',
    domain: 'Cloud Technology & Services',
    q: 'A company needs to cache website static content globally so users everywhere get fast load times from a nearby node. Which AWS service provides this CDN capability?',
    options: [
      'AWS Global Accelerator routing traffic to endpoints via the AWS global network',
      'Amazon Route 53 DNS routing users to the nearest healthy application endpoint',
      'Amazon CloudFront caching and delivering content from global edge locations',
      'AWS Transit Gateway connecting VPCs and on-premises networks through a hub',
    ],
    correct: 2,
    explanation:
      "Amazon CloudFront is AWS's CDN — it caches content at 400+ edge locations worldwide, serving users from the nearest point-of-presence for dramatically lower latency.",
  },

  {
    id: 'clf-tech-09',
    domain: 'Cloud Technology & Services',
    q: 'A DevOps team needs to define an entire AWS infrastructure stack (VPC, EC2, RDS, ELB) in a single version-controlled file and deploy it repeatedly. Which service enables this?',
    options: [
      'AWS CloudFormation provisioning AWS resources from declarative JSON or YAML templates',
      'AWS Elastic Beanstalk deploying web applications on managed infrastructure automatically',
      'AWS CodeDeploy automating application code deployments to EC2 and Lambda targets',
      'AWS CodePipeline orchestrating CI/CD pipelines for automated software delivery',
    ],
    correct: 0,
    explanation:
      'AWS CloudFormation is infrastructure-as-code for AWS — you define all resources in a JSON or YAML template, and CloudFormation provisions and manages them as a versioned, repeatable stack.',
  },

  {
    id: 'clf-tech-10',
    domain: 'Cloud Technology & Services',
    q: 'Which AWS service provides scalable DNS with routing policies based on latency, geolocation, and health checks to direct users to the best endpoint?',
    options: [
      'Amazon CloudFront distributing static and dynamic content from global edge nodes',
      'AWS Global Accelerator improving global performance over the AWS backbone network',
      'Amazon Route 53 providing DNS with health checking and intelligent routing policies',
      'AWS Direct Connect providing a dedicated private network connection to AWS cloud',
    ],
    correct: 2,
    explanation:
      "Amazon Route 53 is AWS's DNS service — it resolves domain names and supports latency-based, geolocation, weighted, failover, and multivalue routing policies with health checks.",
  },

  {
    id: 'clf-tech-11',
    domain: 'Cloud Technology & Services',
    q: 'A company must migrate 500 TB from its on-premises data centre to S3 without saturating its internet connection for months. Which AWS service enables physical data transfer?',
    options: [
      'AWS DataSync transferring data online over the existing internet connection securely',
      'AWS Storage Gateway providing hybrid cloud storage integration for on-premises systems',
      'Amazon S3 Transfer Acceleration using edge locations to speed up online S3 uploads',
      'AWS Snowball a physical appliance shipped to the customer to load and return data',
    ],
    correct: 3,
    explanation:
      'AWS Snowball ships a ruggedised appliance to the customer — data is loaded locally, the device ships back to AWS, and data is imported to S3 without consuming internet bandwidth.',
  },

  {
    id: 'clf-tech-12',
    domain: 'Cloud Technology & Services',
    q: 'Which AWS service provides a managed Kubernetes control plane so customers only need to manage worker nodes and containerised workloads?',
    options: [
      'Amazon ECS a fully managed container orchestration service without Kubernetes',
      'AWS Fargate running containers serverlessly without managing any EC2 nodes',
      'Amazon EKS providing a managed Kubernetes control plane for container workloads',
      'AWS Elastic Beanstalk deploying web applications with automatically managed infrastructure',
    ],
    correct: 2,
    explanation:
      'Amazon EKS (Elastic Kubernetes Service) manages the Kubernetes control plane — HA, patched, and scaled by AWS. Customers deploy worker nodes (or use Fargate) and run standard Kubernetes workloads.',
  },

  {
    id: 'clf-tech-13',
    domain: 'Cloud Technology & Services',
    q: 'An application sends messages between microservices that must persist even if the consumer is temporarily offline, preventing any message loss. Which service provides this?',
    options: [
      'Amazon SNS pushing notifications to multiple subscribers across many endpoints',
      'Amazon SQS providing managed queues for reliable asynchronous message buffering',
      'Amazon Kinesis ingesting high-throughput real-time streaming data from many sources',
      'AWS EventBridge routing events between services using a serverless event bus',
    ],
    correct: 1,
    explanation:
      'Amazon SQS durably stores messages in a queue until consumers retrieve them — messages survive consumer downtime, preventing loss and decoupling producers from consumers.',
  },

  {
    id: 'clf-tech-14',
    domain: 'Cloud Technology & Services',
    q: 'Which AWS service publishes one message and simultaneously delivers it to thousands of email addresses, SQS queues, and mobile devices at once?',
    options: [
      'Amazon SQS queuing messages for sequential processing by individual consumers',
      'Amazon SQS FIFO ensuring strict first-in first-out processing across all messages',
      'Amazon Kinesis ingesting high-volume streaming data from many concurrent sources',
      'Amazon SNS using pub/sub to fan one message out to all topic subscribers instantly',
    ],
    correct: 3,
    explanation:
      'Amazon SNS (Simple Notification Service) uses a publish/subscribe model — one message published to a topic is delivered simultaneously to all subscribers across email, SMS, SQS, Lambda, and mobile push.',
  },

  {
    id: 'clf-tech-15',
    domain: 'Cloud Technology & Services',
    q: 'A developer uploads application code to AWS and wants AWS to automatically provision EC2, load balancers, and auto-scaling without any manual infrastructure configuration. Which service does this?',
    options: [
      'Amazon EC2 providing virtualised compute with full infrastructure configuration control',
      'AWS CloudFormation deploying complete infrastructure stacks from declarative templates',
      'Amazon ECS deploying containerised applications on managed container orchestration',
      'AWS Elastic Beanstalk deploying applications with fully automated infrastructure provisioning',
    ],
    correct: 3,
    explanation:
      'AWS Elastic Beanstalk is the PaaS offering — you upload code and Beanstalk provisions EC2, ELB, Auto Scaling, and monitoring automatically while keeping full resource visibility.',
  },

  {
    id: 'clf-tech-16',
    domain: 'Cloud Technology & Services',
    q: 'Which EC2 purchasing option offers the highest discount (up to 72%) in exchange for committing to a specific instance type and region for one or three years?',
    options: [
      'On-Demand Instances paying standard per-hour rates with no commitment needed',
      'EC2 Spot Instances using spare capacity at up to 90% off with interruption risk',
      'Standard Reserved Instances with full commitment for maximum percentage discount',
      'Dedicated Hosts providing exclusive physical server access for licensing compliance',
    ],
    correct: 2,
    explanation:
      'Standard Reserved Instances with 3-year all-upfront payment offer up to 72% off On-Demand — the maximum EC2 discount, ideal for steady-state workloads with constant predictable usage.',
  },

  {
    id: 'clf-tech-17',
    domain: 'Cloud Technology & Services',
    q: 'A company needs to replicate 50 TB of on-premises NAS data to AWS for disaster recovery while keeping the primary copy on-premises. Which AWS hybrid storage service enables this?',
    options: [
      'AWS Storage Gateway bridging on-premises environments to cloud storage services',
      'Amazon S3 Transfer Acceleration speeding up online data uploads via edge locations',
      'AWS DataSync scheduling automated data transfers between on-premises and cloud',
      'Amazon EFS providing a managed NFS file system accessible from EC2 instances',
    ],
    correct: 0,
    explanation:
      'AWS Storage Gateway presents standard storage interfaces (NFS, SMB, iSCSI) to on-premises systems while asynchronously replicating data to S3, EBS, or FSx behind the scenes.',
  },

  {
    id: 'clf-tech-18',
    domain: 'Cloud Technology & Services',
    q: 'Which AWS AI service enables developers to add sentiment analysis, entity recognition, and key phrase extraction to applications without any machine learning experience?',
    options: [
      'Amazon Rekognition analysing images and videos to detect objects and faces',
      'Amazon Comprehend extracting insights from text using natural language processing',
      'Amazon Polly converting written text to lifelike spoken audio in multiple languages',
      'Amazon Translate providing automated neural machine translation between languages',
    ],
    correct: 1,
    explanation:
      'Amazon Comprehend uses NLP to analyse text — extracting entities, key phrases, sentiment, language, and PII — all accessible via a simple API with no ML model building required.',
  },

  {
    id: 'clf-tech-19',
    domain: 'Cloud Technology & Services',
    q: 'A retailer uses AI to analyse product photos uploaded by sellers and automatically identify the objects, colours, and text visible in each image. Which AWS AI service provides this?',
    options: [
      'Amazon Comprehend analysing text documents to extract entities and sentiment',
      'Amazon Transcribe converting spoken audio recordings into accurate text output',
      'Amazon Rekognition analysing images to detect objects scenes text and activities',
      'Amazon Textract extracting structured text and data from scanned form documents',
    ],
    correct: 2,
    explanation:
      'Amazon Rekognition analyses images and videos — detecting objects, scenes, activities, faces, text in images, and providing content moderation and celebrity recognition capabilities.',
  },

  {
    id: 'clf-tech-20',
    domain: 'Cloud Technology & Services',
    q: 'Which AWS service automatically adjusts the number of EC2 instances in a group based on CloudWatch metrics to maintain performance and minimise cost?',
    options: [
      'EC2 Auto Scaling adjusting instance count automatically based on demand metrics',
      'Elastic Load Balancing distributing incoming traffic evenly across registered instances',
      'AWS Lambda scaling automatically for each individual function invocation event',
      'Amazon EC2 Reserved Instances providing capacity reservation in a specific region',
    ],
    correct: 0,
    explanation:
      'EC2 Auto Scaling groups add instances when demand rises and terminate them when demand drops — maintaining application performance while eliminating idle-capacity cost automatically.',
  },

  // ── BILLING, PRICING & SUPPORT (20 questions) ────────────────────────────────

  {
    id: 'clf-bill-01',
    domain: 'Billing, Pricing & Support',
    q: 'A startup wants to estimate monthly AWS costs for a planned architecture before deploying any resources. Which AWS tool provides pre-deployment cost estimates?',
    options: [
      'AWS Pricing Calculator estimating monthly costs for planned AWS configurations',
      'AWS Cost Explorer visualising historical actual spending patterns across services',
      'AWS Budgets setting alerts when spending approaches configured thresholds monthly',
      'AWS Trusted Advisor recommending cost optimisations for existing deployed resources',
    ],
    correct: 0,
    explanation:
      'The AWS Pricing Calculator lets you configure any AWS service, specify expected usage, and receive a monthly cost estimate — ideal for budgeting before deploying a single resource.',
  },

  {
    id: 'clf-bill-02',
    domain: 'Billing, Pricing & Support',
    q: 'A finance team needs to visualise historical AWS spending filtered by service, region, and tag to identify which projects are driving costs. Which tool provides this?',
    options: [
      'AWS Pricing Calculator estimating future costs for planned deployments only',
      'AWS Cost Explorer visualising and filtering historical AWS spending interactively',
      'AWS Budgets setting proactive spending limits and forecast-based alert thresholds',
      'AWS Cost and Usage Report providing the most granular line-item billing data',
    ],
    correct: 1,
    explanation:
      'AWS Cost Explorer provides interactive visualisations of historical cost data — filterable by service, linked account, region, usage type, and tags for granular cost analysis.',
  },

  {
    id: 'clf-bill-03',
    domain: 'Billing, Pricing & Support',
    q: 'A finance manager wants an automated email when monthly AWS spending exceeds $10,000. Which AWS feature configures this threshold notification?',
    options: [
      'AWS Cost Explorer setting a display filter on the cost visualisation dashboard',
      'AWS Budgets creating a cost budget with email alerts at configured thresholds',
      'AWS Trusted Advisor monitoring service limits and notifying on potential overages',
      'AWS Billing Dashboard displaying current-month spend without configurable alerts',
    ],
    correct: 1,
    explanation:
      'AWS Budgets lets you set cost, usage, or reservation budgets and configure SNS or email alerts when actual or forecasted spend crosses defined thresholds — essential for spend governance.',
  },

  {
    id: 'clf-bill-04',
    domain: 'Billing, Pricing & Support',
    q: 'A company with 30 linked AWS accounts wants a single invoice and the ability to pool usage for volume pricing discounts. Which billing feature provides this?',
    options: [
      'AWS Cost Allocation Tags providing per-resource attribution across all accounts',
      'AWS Cost Explorer filtering and comparing spend by each individual linked account',
      'AWS Cost and Usage Reports delivering hourly data for each linked account separately',
      'Consolidated Billing combining all linked account charges into one payer invoice',
    ],
    correct: 3,
    explanation:
      'Consolidated Billing in AWS Organizations aggregates all linked accounts into a single payer invoice — and combines usage volumes for tier pricing benefits, potentially reducing per-unit costs.',
  },

  {
    id: 'clf-bill-05',
    domain: 'Billing, Pricing & Support',
    q: "A company tags all resources with 'Project' and 'CostCentre' labels and wants to see a spending breakdown by these labels in billing reports. Which feature enables this?",
    options: [
      'AWS Cost Allocation Tags enabling cost breakdowns filtered by tag key values',
      'AWS Resource Groups organising resources by tag for operational management only',
      'AWS Config tracking configuration history of tagged resources for compliance audits',
      'AWS Budgets filtering spending alerts by resource tag for project-level tracking',
    ],
    correct: 0,
    explanation:
      'Cost Allocation Tags, once activated in the billing console, appear as filterable dimensions in Cost Explorer and billing reports — enabling granular spend attribution by project or team.',
  },

  {
    id: 'clf-bill-06',
    domain: 'Billing, Pricing & Support',
    q: 'Which AWS data transfer pricing rule means that downloading data from S3 to the public internet incurs a charge, while uploading data into S3 is generally free?',
    options: [
      'Compute pricing based on instance type and the number of running hours billed',
      'Storage pricing based on amount of data stored in gigabytes per month charged',
      'Data transfer OUT pricing charging for data egress from AWS to the internet',
      'Request pricing charging per API call made to services like S3 and DynamoDB',
    ],
    correct: 2,
    explanation:
      'AWS charges for data transferred OUT from AWS to the internet (egress). Data IN (ingress) and inter-service transfers within the same region are generally free — making uploads free.',
  },

  {
    id: 'clf-bill-07',
    domain: 'Billing, Pricing & Support',
    q: 'An organisation running steady EC2 workloads commits to a consistent compute spend of $5/hour for one year in exchange for significant savings. Which pricing model is this?',
    options: [
      'EC2 Spot Instances using spare capacity for up to 90% discount with interruptions',
      'On-Demand Instances paying standard per-hour rates with zero upfront commitment',
      'AWS Savings Plans committing to a consistent hourly compute spend for discounts',
      'Standard Reserved Instances committing to a specific instance type and region',
    ],
    correct: 2,
    explanation:
      'AWS Savings Plans offer up to 66% off On-Demand by committing to a minimum $/hour of compute spend for 1 or 3 years — flexible across instance families, sizes, OS, and regions.',
  },

  {
    id: 'clf-bill-08',
    domain: 'Billing, Pricing & Support',
    q: 'Which AWS support plan provides 24/7 phone, email, and chat access to Cloud Support Engineers and less than 1-hour response for production system outages?',
    options: [
      'Basic plan free with every account providing documentation and Health Dashboard',
      'Developer plan providing business-hours email support for development environments',
      'Business plan providing 24/7 access to support engineers with production SLA times',
      'Enterprise plan with a dedicated TAM and Infrastructure Event Management included',
    ],
    correct: 2,
    explanation:
      'AWS Business Support provides 24/7 access to Cloud Support Engineers, full Trusted Advisor checks, and <1-hour response for production-impaired systems and <4-hour for production-down.',
  },

  {
    id: 'clf-bill-09',
    domain: 'Billing, Pricing & Support',
    q: 'A new AWS account wants to explore core services for free within monthly usage limits before committing to real workloads. Which AWS offering enables this?',
    options: [
      'AWS Free Tier providing 12 months of free usage within defined service limits',
      'AWS Savings Plans providing discounted rates for committed compute consumption',
      'AWS Reserved Instances providing discounted capacity over one or three year terms',
      'AWS Spot Instances providing access to spare capacity at reduced pricing rates',
    ],
    correct: 0,
    explanation:
      'The AWS Free Tier includes 12-months free (EC2, S3, RDS within limits), Always Free (Lambda, DynamoDB within limits), and short-term free trials for services like Amazon Redshift.',
  },

  {
    id: 'clf-bill-10',
    domain: 'Billing, Pricing & Support',
    q: 'Which AWS billing feature delivers hourly line-item charges for every resource and tag to an S3 bucket for analysis in a business intelligence tool?',
    options: [
      'AWS Cost Explorer providing interactive visualisations of monthly cost trends',
      'AWS Budgets providing forecast and actual spending alerts for cost governance',
      'AWS Trusted Advisor providing cost-saving recommendations for existing resources',
      'AWS Cost and Usage Report delivering the most granular billing data to S3',
    ],
    correct: 3,
    explanation:
      'The AWS Cost and Usage Report (CUR) is the most comprehensive billing dataset — hourly line-item records for every resource, delivered to S3 in CSV or Parquet for BI tool analysis.',
  },

  {
    id: 'clf-bill-11',
    domain: 'Billing, Pricing & Support',
    q: 'Which AWS support tier provides Infrastructure Event Management to help teams prepare for product launches and high-traffic events?',
    options: [
      'Basic plan included free with all AWS accounts for documentation access',
      'Developer plan for development testing environments and individual developers',
      'Business plan providing full Trusted Advisor checks and enhanced support access',
      'Enterprise plan including Infrastructure Event Management and TAM guidance',
    ],
    correct: 3,
    explanation:
      'Enterprise Support includes Infrastructure Event Management — AWS architects work with your team before and during critical events like launches, migrations, and planned traffic spikes.',
  },

  {
    id: 'clf-bill-12',
    domain: 'Billing, Pricing & Support',
    q: 'Which Reserved Instance payment option provides the maximum possible discount on EC2 for a steady three-year workload?',
    options: [
      'Convertible Reserved Instances allowing instance type changes for lower savings',
      'No-upfront one-year Standard Reserved Instance with monthly payment flexibility',
      'Partial-upfront three-year Standard Reserved Instance splitting payment upfront',
      'All-upfront three-year Standard Reserved Instance providing maximum discount rate',
    ],
    correct: 3,
    explanation:
      '3-year Standard Reserved Instances with all-upfront payment provide the highest EC2 discount (up to 72%) — the longer term and full upfront payment maximise savings versus On-Demand.',
  },

  {
    id: 'clf-bill-13',
    domain: 'Billing, Pricing & Support',
    q: 'Which AWS tool analyses current resource utilisation and provides specific recommendations to delete idle resources and rightsize over-provisioned EC2 instances?',
    options: [
      'AWS Cost Explorer showing historical spending trends for analysis purposes only',
      'AWS Trusted Advisor identifying idle resources and rightsizing opportunities specifically',
      'AWS Pricing Calculator estimating costs before deploying any planned resources',
      'AWS Budgets alerting when actual spending approaches configured threshold amounts',
    ],
    correct: 1,
    explanation:
      "AWS Trusted Advisor's Cost Optimisation checks identify idle EC2 instances, underutilised EBS volumes, unassociated Elastic IPs, and rightsizing opportunities with specific resource-level recommendations.",
  },

  {
    id: 'clf-bill-14',
    domain: 'Billing, Pricing & Support',
    q: 'A company has 20% of its fleet running constantly and 80% needed only during business hours. Which purchasing combination minimises total EC2 cost?',
    options: [
      'On-Demand for all instances to maintain full flexibility without any commitments',
      'Reserved Instances for 20% constant baseline and On-Demand for 80% variable peak',
      'Spot Instances for all workloads accepting the risk of potential interruptions',
      'Dedicated Hosts for baseline and Reserved Instances for the remaining variable peak',
    ],
    correct: 1,
    explanation:
      'Reserved Instances cover the 20% constant baseline at significant discount; On-Demand covers variable peak hours — paying only for the hours extra instances run reduces overall cost.',
  },

  {
    id: 'clf-bill-15',
    domain: 'Billing, Pricing & Support',
    q: 'Which AWS feature gives each account in an AWS Organization its own billing visibility while consolidating all charges to a single payer account?',
    options: [
      'AWS Cost Allocation Tags providing per-resource cost attribution for each team',
      'AWS Cost Explorer providing individual account spending filters in a single tool',
      'AWS Cost and Usage Reports delivering per-account data to a centralised S3 bucket',
      'AWS Organizations Consolidated Billing combining accounts under one payer invoice',
    ],
    correct: 3,
    explanation:
      'Consolidated Billing creates one payer account that receives a single invoice for all member accounts — each member account retains full cost visibility through Cost Explorer.',
  },

  {
    id: 'clf-bill-16',
    domain: 'Billing, Pricing & Support',
    q: 'What is the key flexibility advantage of AWS Compute Savings Plans compared to Standard Reserved Instances?',
    options: [
      'Savings Plans provide a higher maximum discount than any Reserved Instance type',
      'Savings Plans cover only EC2 while Reserved Instances cover broader AWS services',
      'Savings Plans apply automatically across instance types families regions and Fargate',
      'Savings Plans require no commitment period while Reserved Instances need yearly terms',
    ],
    correct: 2,
    explanation:
      'Compute Savings Plans apply automatically to any EC2 instance type, size, OS, region, plus Fargate and Lambda — unlike Standard RIs which are locked to a specific instance type and region.',
  },

  {
    id: 'clf-bill-17',
    domain: 'Billing, Pricing & Support',
    q: 'An S3 bucket stores 1 TB at $0.023/GB. After usage exceeds 50 TB the rate drops. After 500 TB it drops further. Which pricing model does this illustrate?',
    options: [
      'Reserved pricing offering discounts for committed minimum monthly storage use',
      'Spot pricing purchasing capacity when supply exceeds current demand levels',
      'Tiered pricing where per-unit cost decreases as consumption volume increases',
      'Pay-as-you-go pricing charging exact rates for actual usage each billing month',
    ],
    correct: 2,
    explanation:
      'Tiered pricing means higher usage volumes unlock lower per-unit rates — AWS S3 uses this model to reward higher storage consumption with progressively lower per-GB prices.',
  },

  {
    id: 'clf-bill-18',
    domain: 'Billing, Pricing & Support',
    q: 'Which AWS support plan guarantees a response time of less than 15 minutes for a critical production system that is completely down?',
    options: [
      'Developer plan providing business-hours email support for development testing',
      'Business plan providing less than 1-hour response for impaired production systems',
      'Enterprise On-Ramp providing 30-minute response for business-critical system outages',
      'Enterprise plan providing less than 15-minute response for critical systems down',
    ],
    correct: 3,
    explanation:
      'Enterprise Support provides <15-minute response for business-critical system-down scenarios — the fastest SLA, backed by senior engineers and a dedicated Technical Account Manager.',
  },

  {
    id: 'clf-bill-19',
    domain: 'Billing, Pricing & Support',
    q: 'Which AWS tool helps a company quantify the full financial benefit of migrating from on-premises (including hardware, power, cooling, and staff savings) to AWS?',
    options: [
      'AWS Pricing Calculator estimating future monthly costs for planned AWS resources',
      'AWS Cost Explorer analysing actual spending in the AWS account over past periods',
      'AWS TCO Calculator comparing full on-premises total costs against equivalent AWS',
      'AWS Trusted Advisor identifying savings opportunities in the current AWS environment',
    ],
    correct: 2,
    explanation:
      'The AWS TCO Calculator compares the full cost of on-premises infrastructure (hardware, power, cooling, real estate, staff) against equivalent AWS services — building a complete migration business case.',
  },

  {
    id: 'clf-bill-20',
    domain: 'Billing, Pricing & Support',
    q: 'Which AWS Budgets capability can automatically apply an IAM policy to restrict further resource usage when a defined spending threshold is breached?',
    options: [
      'AWS Budgets sending email alerts when spending approaches a configured threshold',
      'AWS Cost Explorer visualising current-month spending with filterable service breakdowns',
      'AWS Service Quotas setting hard limits on the number of resources a service provides',
      'AWS Budgets Budget Actions automatically applying IAM or SCP on threshold breach',
    ],
    correct: 3,
    explanation:
      'AWS Budgets Budget Actions automatically enforce a response when a budget threshold is crossed — applying IAM policies or SCPs to restrict further spending or resource creation.',
  },
];
