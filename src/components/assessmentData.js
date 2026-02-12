// Roles and experience levels
export const roles = [
  { id: 'devops', label: 'DevOps Engineer' },
  { id: 'sre', label: 'Site Reliability Engineer' },
  { id: 'secops', label: 'SecOps Engineer' },
  { id: 'cloud-architect', label: 'Cloud Architect' },
  { id: 'platform-engineer', label: 'Platform Engineer' },
  { id: 'backend', label: 'Backend Engineer' },
  { id: 'fullstack', label: 'Full Stack Engineer' },
  { id: 'data-engineer', label: 'Data Engineer' },
  { id: 'ml-engineer', label: 'ML Engineer' },
  { id: 'network-engineer', label: 'Network Engineer' },
];

export const experienceLevels = [
  { id: 'fresher', label: 'Fresher (0-1 yr)', years: 0 },
  { id: '3yr', label: '3 Years', years: 3 },
  { id: '5yr', label: '5 Years', years: 5 },
  { id: '7yr', label: '7 Years', years: 7 },
  { id: '9yr', label: '9 Years', years: 9 },
  { id: '13yr', label: '13 Years', years: 13 },
  { id: '15plus', label: '15+ Years', years: 15 },
];

// Questions per role per experience level
// type: 'design' = must build on canvas, 'mcq' = multiple choice, 'scenario' = written scenario
export const questions = {
  devops: {
    fresher: [
      { id: 'dv-f-1', type: 'mcq', question: 'What is the primary purpose of a CI/CD pipeline?', options: ['To write code faster', 'To automate build, test, and deployment processes', 'To monitor production servers', 'To manage database schemas'], answer: 1, points: 5 },
      { id: 'dv-f-2', type: 'mcq', question: 'Which tool is commonly used for container orchestration?', options: ['Jenkins', 'Kubernetes', 'Ansible', 'Terraform'], answer: 1, points: 5 },
      { id: 'dv-f-3', type: 'mcq', question: 'What does Docker primarily provide?', options: ['Virtual machines', 'Container runtime and image management', 'Load balancing', 'DNS resolution'], answer: 1, points: 5 },
      { id: 'dv-f-4', type: 'design', question: 'Design a basic CI/CD pipeline: Show how code goes from a developer\'s commit to production. Include source control, build, test, and deploy stages.', hint: 'Use: Client (Developer) → CodeCommit/Git → CodeBuild → Container → Deployment → Web Server', points: 15, expectedComponents: ['client', 'codecommit', 'codebuild', 'container', 'deployment', 'webServer'] },
      { id: 'dv-f-5', type: 'mcq', question: 'What is Infrastructure as Code (IaC)?', options: ['Writing application code for servers', 'Managing infrastructure through machine-readable config files', 'Coding directly on production servers', 'Using IDE to manage cloud resources'], answer: 1, points: 5 },
    ],
    '3yr': [
      { id: 'dv-3-1', type: 'mcq', question: 'In a blue-green deployment, what happens when the new version fails health checks?', options: ['Both environments are shut down', 'Traffic is rolled back to the blue (old) environment', 'The green environment is scaled up', 'A new deployment is triggered automatically'], answer: 1, points: 5 },
      { id: 'dv-3-2', type: 'design', question: 'Design a containerized microservices deployment on Kubernetes with auto-scaling, config management, and monitoring.', hint: 'Include: Ingress → Service → Deployment (multiple pods) → ConfigMap → Secret → HPA → Monitoring', points: 20, expectedComponents: ['ingress', 'service', 'deployment', 'pod', 'configmap', 'secret', 'hpa', 'monitoring'] },
      { id: 'dv-3-3', type: 'scenario', question: 'Your production deployment failed at 2 AM. The new version has a database migration that partially ran. Describe your rollback strategy step by step.', points: 15 },
      { id: 'dv-3-4', type: 'mcq', question: 'What is the purpose of a Helm chart in Kubernetes?', options: ['To visualize cluster metrics', 'To package, configure, and deploy K8s resources as a unit', 'To encrypt secrets at rest', 'To manage node pools'], answer: 1, points: 5 },
      { id: 'dv-3-5', type: 'design', question: 'Design a GitOps workflow showing how a git push triggers automated deployment to a Kubernetes cluster.', hint: 'Developer → Git Repo → CI Pipeline → Container Registry → ArgoCD/Flux → K8s Cluster', points: 20, expectedComponents: ['client', 'codecommit', 'codepipeline', 'container', 'deployment', 'service'] },
    ],
    '5yr': [
      { id: 'dv-5-1', type: 'design', question: 'Design a complete CI/CD pipeline for a microservices application with: separate build pipelines per service, shared artifact registry, canary deployments, automated rollback, and observability.', hint: 'Multiple services → CI pipelines → Registry → Canary deploy → Load Balancer → Monitoring → Alerting', points: 25, expectedComponents: ['apiGateway', 'loadBalancer', 'container', 'deployment', 'monitoring', 'logging'] },
      { id: 'dv-5-2', type: 'scenario', question: 'Your Kubernetes cluster is experiencing pod evictions due to memory pressure on nodes. Some critical services are affected. How do you diagnose and resolve this? Include both immediate fixes and long-term solutions.', points: 20 },
      { id: 'dv-5-3', type: 'mcq', question: 'In a service mesh architecture, what does the sidecar proxy handle?', options: ['Application business logic', 'Database queries', 'Inter-service communication, mTLS, observability, and traffic management', 'Container image building'], answer: 2, points: 5 },
      { id: 'dv-5-4', type: 'design', question: 'Design a disaster recovery setup across two regions with active-passive failover, data replication, and automated health checks.', hint: 'DNS → Region A (Active): LB → Servers → DB Primary | Region B (Passive): LB → Servers → DB Replica + Health Checks', points: 25, expectedComponents: ['dns', 'loadBalancer', 'webServer', 'database', 'monitoring'] },
      { id: 'dv-5-5', type: 'scenario', question: 'You need to migrate a monolithic application running on VMs to a containerized microservices architecture on Kubernetes without downtime. Outline your migration strategy with phases.', points: 20 },
    ],
    '7yr': [
      { id: 'dv-7-1', type: 'design', question: 'Design a multi-cloud deployment strategy where services run across AWS and GCP with unified monitoring, centralized logging, service mesh, and automated failover between clouds.', hint: 'Global LB → Cloud A (EKS + services) + Cloud B (GKE + services) → Shared monitoring → Centralized logging → Service mesh', points: 30, expectedComponents: ['dns', 'loadBalancer', 'eks', 'gke', 'monitoring', 'logging'] },
      { id: 'dv-7-2', type: 'scenario', question: 'Your organization wants to implement a zero-trust security model for their Kubernetes infrastructure. Design the network policies, service mesh configuration, secret management, and access control strategy. How do you handle east-west traffic encryption?', points: 25 },
      { id: 'dv-7-3', type: 'design', question: 'Design a platform engineering solution: an Internal Developer Platform (IDP) that provides self-service infrastructure provisioning, automated environments, and golden paths for developers.', hint: 'Developer Portal → API → Terraform/Crossplane → Cloud Resources → GitOps → Monitoring', points: 30, expectedComponents: ['client', 'apiGateway', 'container', 'deployment', 'monitoring', 'logging', 'database'] },
      { id: 'dv-7-4', type: 'scenario', question: 'A critical production incident reveals that your deployment pipeline has no proper secret rotation, images are not scanned, and there is no audit trail. Design a comprehensive DevSecOps pipeline addressing all these gaps.', points: 25 },
    ],
    '9yr': [
      { id: 'dv-9-1', type: 'design', question: 'Design an enterprise-grade Kubernetes platform serving 500+ microservices across 5 teams. Include: multi-tenancy, resource quotas, network policies, centralized policy enforcement (OPA), GitOps, progressive delivery, and full observability stack.', hint: 'Think about namespaces, RBAC, network policies, Istio, ArgoCD, Prometheus/Grafana/Loki stack', points: 35, expectedComponents: ['ingress', 'service', 'deployment', 'namespace', 'networkPolicy', 'monitoring', 'logging'] },
      { id: 'dv-9-2', type: 'scenario', question: 'Your company is acquiring another company. They run everything on bare metal with manual deployments. You need to integrate their systems into your cloud-native platform. Design the migration strategy, timeline, and risk mitigation plan. Consider data sovereignty, compliance, and team upskilling.', points: 30 },
      { id: 'dv-9-3', type: 'design', question: 'Design a chaos engineering framework for your production environment. Show how you inject failures, monitor impact, automatically rollback, and generate reports. Include blast radius controls.', hint: 'Chaos Controller → Target Services → Health Monitors → Auto-rollback → Reporting Dashboard', points: 30, expectedComponents: ['scheduler', 'microservice', 'monitoring', 'logging', 'notification'] },
    ],
    '13yr': [
      { id: 'dv-13-1', type: 'design', question: 'Design a global-scale infrastructure platform for a company operating in 20+ countries with: multi-region active-active deployment, data residency compliance (GDPR, CCPA), edge computing, centralized control plane, and cost optimization. Show how you handle 99.999% SLA.', hint: 'Global DNS → Edge nodes → Regional clusters → Central control plane → Compliance layer → Cost management', points: 40, expectedComponents: ['dns', 'cdn', 'loadBalancer', 'eks', 'database', 'monitoring', 'firewall'] },
      { id: 'dv-13-2', type: 'scenario', question: 'As VP of Infrastructure, you need to present a 3-year technology roadmap to the board. Your current infrastructure costs $2M/month, has 99.9% uptime, and deployment frequency is weekly. The board wants 99.99% uptime, daily deployments, and 30% cost reduction. Outline your strategy with quarterly milestones.', points: 35 },
      { id: 'dv-13-3', type: 'design', question: 'Design an AI/ML-powered infrastructure management system that predicts failures, auto-scales based on traffic patterns, optimizes costs in real-time, and self-heals. Show the data pipeline, ML models, and feedback loops.', hint: 'Metrics collection → Data pipeline → ML training → Prediction engine → Auto-remediation → Feedback loop', points: 40, expectedComponents: ['monitoring', 'kafka', 'sagemaker', 'lambda', 'database', 'notification'] },
    ],
    '15plus': [
      { id: 'dv-15-1', type: 'design', question: 'Design a next-generation cloud-native platform that supports: serverless, containers, VMs, and edge workloads in a unified control plane. Include FinOps, GreenOps (carbon-aware scheduling), AI-driven operations, and developer experience optimization. This platform serves 10,000+ developers across 50 teams.', hint: 'Think about abstraction layers, self-service portals, policy engines, cost attribution, carbon metrics', points: 50, expectedComponents: ['apiGateway', 'loadBalancer', 'eks', 'lambda', 'monitoring', 'logging', 'database'] },
      { id: 'dv-15-2', type: 'scenario', question: 'You are the CTO of a startup that just received Series C funding. You need to scale from 100K to 100M users in 18 months while maintaining security compliance (SOC2, ISO27001, HIPAA). Your current team is 15 engineers. Design the organizational structure, technology strategy, hiring plan, and infrastructure evolution roadmap.', points: 45 },
    ],
  },
  secops: {
    fresher: [
      { id: 'sc-f-1', type: 'mcq', question: 'What does the CIA triad stand for in information security?', options: ['Confidentiality, Integrity, Availability', 'Control, Identity, Access', 'Compliance, Infrastructure, Authentication', 'Cybersecurity, Intelligence, Automation'], answer: 0, points: 5 },
      { id: 'sc-f-2', type: 'mcq', question: 'What is the purpose of a WAF (Web Application Firewall)?', options: ['To manage DNS records', 'To protect web applications from common attacks like XSS and SQL injection', 'To balance load across servers', 'To encrypt data at rest'], answer: 1, points: 5 },
      { id: 'sc-f-3', type: 'mcq', question: 'What is the principle of least privilege?', options: ['Give all users admin access for productivity', 'Users should only have the minimum access needed for their job', 'Restrict all access by default permanently', 'Only the CEO should have access'], answer: 1, points: 5 },
      { id: 'sc-f-4', type: 'design', question: 'Design a basic secure web application architecture with: firewall, WAF, HTTPS termination, and separate database network.', hint: 'Client → DNS → WAF → Load Balancer → Web Server → Firewall → Database', points: 15, expectedComponents: ['client', 'dns', 'waf', 'loadBalancer', 'webServer', 'firewall', 'database'] },
    ],
    '3yr': [
      { id: 'sc-3-1', type: 'design', question: 'Design a security monitoring and incident response architecture. Include: log collection from all services, SIEM, threat detection, alerting, and automated response.', hint: 'Services → Log Aggregator → SIEM → Threat Detection → Alert → Auto-response + Manual review', points: 20, expectedComponents: ['webServer', 'logging', 'elasticsearch', 'monitoring', 'notification'] },
      { id: 'sc-3-2', type: 'scenario', question: 'You discover that an API endpoint is leaking PII data in response headers. The endpoint serves 10K requests/minute. Describe your immediate response, investigation process, and long-term fix.', points: 15 },
      { id: 'sc-3-3', type: 'mcq', question: 'What is mTLS and when would you use it?', options: ['Multi-factor TLS for browsers', 'Mutual TLS where both client and server authenticate each other, used for service-to-service communication', 'A TLS version for mobile apps', 'Managed TLS certificate service'], answer: 1, points: 5 },
      { id: 'sc-3-4', type: 'design', question: 'Design a secrets management architecture for a microservices environment. Show how secrets are stored, rotated, injected into services, and audited.', hint: 'Vault/SecretsManager → Sidecar/Init container → Pod → Audit log → Rotation scheduler', points: 20, expectedComponents: ['secret', 'secretsManager', 'deployment', 'pod', 'logging'] },
    ],
    '5yr': [
      { id: 'sc-5-1', type: 'design', question: 'Design a zero-trust network architecture for a hybrid cloud environment. Include: identity verification at every layer, micro-segmentation, encrypted east-west traffic, and continuous authentication.', hint: 'Identity Provider → Policy Engine → Service Mesh (mTLS) → Network Policies → Micro-segmentation → Continuous monitoring', points: 25, expectedComponents: ['auth', 'apiGateway', 'firewall', 'networkPolicy', 'service', 'monitoring'] },
      { id: 'sc-5-2', type: 'scenario', question: 'A penetration test reveals that an attacker can move laterally from a compromised web server to the database server. The web server has unnecessary network access to internal services. Design the network segmentation strategy and explain how you would implement it without downtime.', points: 20 },
      { id: 'sc-5-3', type: 'design', question: 'Design a DevSecOps pipeline that includes: SAST, DAST, SCA, container image scanning, IaC security scanning, and compliance-as-code. Show where each check happens in the pipeline.', hint: 'Code commit → SAST → Build → Image scan → DAST → Compliance check → Deploy → Runtime protection', points: 25, expectedComponents: ['codecommit', 'codebuild', 'container', 'inspector', 'deployment', 'monitoring'] },
    ],
    '7yr': [
      { id: 'sc-7-1', type: 'design', question: 'Design a comprehensive security operations center (SOC) architecture for a cloud-native organization. Include: threat intelligence feeds, SIEM/SOAR, automated playbooks, forensics capability, and compliance reporting.', hint: 'Threat Intel → SIEM → Correlation Engine → SOAR → Automated Playbooks → Forensics → Compliance Dashboard', points: 30, expectedComponents: ['monitoring', 'elasticsearch', 'logging', 'notification', 'analytics', 'database'] },
      { id: 'sc-7-2', type: 'scenario', question: 'Your organization suffered a supply chain attack through a compromised third-party library. The malicious code has been running in production for 2 weeks. Describe your incident response plan, blast radius assessment, communication strategy, and remediation steps.', points: 25 },
      { id: 'sc-7-3', type: 'design', question: 'Design a data protection architecture that handles: encryption at rest and in transit, key management, data classification, DLP, and compliance with GDPR/HIPAA/PCI-DSS simultaneously.', hint: 'Data Classification → Encryption Layer → KMS → DLP Engine → Compliance Monitor → Audit Trail', points: 30, expectedComponents: ['kms', 'firewall', 'waf', 'monitoring', 'logging', 'database'] },
    ],
    '9yr': [
      { id: 'sc-9-1', type: 'design', question: 'Design an enterprise security architecture for a financial services company processing 1M transactions/day. Include: PCI-DSS compliance, fraud detection using ML, real-time threat monitoring, DDoS protection, and regulatory reporting across multiple jurisdictions.', hint: 'Edge protection → WAF → API Gateway → Fraud ML → Transaction processing → Encrypted storage → Compliance reporting', points: 35, expectedComponents: ['shield', 'waf', 'apiGateway', 'sagemaker', 'database', 'kms', 'monitoring'] },
      { id: 'sc-9-2', type: 'scenario', question: 'As Head of Security, the board asks you to achieve SOC2 Type II, ISO 27001, and FedRAMP certification within 12 months. Current state: no formal security program, 200 engineers, multi-cloud environment. Present your strategy, resource requirements, and timeline.', points: 30 },
    ],
    '13yr': [
      { id: 'sc-13-1', type: 'design', question: 'Design a next-generation security platform that uses AI/ML for: predictive threat detection, automated incident response, behavioral analytics, insider threat detection, and adaptive access control. Show the data flows, ML pipelines, and feedback loops.', hint: 'Data sources → Feature engineering → ML models → Real-time scoring → Automated response → Human review → Model retraining', points: 40, expectedComponents: ['kafka', 'sagemaker', 'elasticsearch', 'lambda', 'monitoring', 'notification', 'database'] },
      { id: 'sc-13-2', type: 'scenario', question: 'You are CISO of a global healthcare company. A nation-state actor is targeting your organization. You have evidence of APT activity. Design your defense strategy including: threat hunting, deception technology, incident response, communication with law enforcement, and board communication.', points: 35 },
    ],
    '15plus': [
      { id: 'sc-15-1', type: 'design', question: 'Design a security architecture for a critical national infrastructure (power grid/banking system) that must withstand nation-state attacks. Include: air-gapped networks, quantum-resistant encryption, supply chain verification, insider threat prevention, and 24/7 SOC with automated and manual response capabilities.', hint: 'Think about defense in depth, network segmentation, hardware security modules, threat intelligence sharing', points: 50, expectedComponents: ['firewall', 'waf', 'kms', 'monitoring', 'logging', 'auth', 'database'] },
    ],
  },
  sre: {
    fresher: [
      { id: 'sr-f-1', type: 'mcq', question: 'What does SLO stand for?', options: ['Service Level Objective', 'System Load Optimizer', 'Server Log Output', 'Service Launch Order'], answer: 0, points: 5 },
      { id: 'sr-f-2', type: 'mcq', question: 'What is an error budget in SRE?', options: ['Budget for fixing bugs', 'The allowed amount of downtime/errors before violating SLO', 'Money allocated for monitoring tools', 'Time allocated for incident response'], answer: 1, points: 5 },
      { id: 'sr-f-3', type: 'design', question: 'Design a basic monitoring and alerting setup for a web application. Include: health checks, metrics collection, log aggregation, and alerting.', hint: 'Web Server → Metrics Agent → Monitoring → Alerting → Notification (Email/Slack)', points: 15, expectedComponents: ['webServer', 'monitoring', 'logging', 'notification'] },
    ],
    '3yr': [
      { id: 'sr-3-1', type: 'design', question: 'Design an observability stack for a microservices architecture. Include: distributed tracing, metrics, logs, and SLO dashboards.', hint: 'Services → OpenTelemetry → Traces (Jaeger) + Metrics (Prometheus) + Logs (Loki) → Grafana dashboards → Alerting', points: 20, expectedComponents: ['microservice', 'monitoring', 'logging', 'elasticsearch', 'analytics'] },
      { id: 'sr-3-2', type: 'scenario', question: 'Your service has an SLO of 99.9% availability. In the last month, you had 3 incidents totaling 2 hours of downtime. Calculate the error budget consumed and recommend whether to freeze deployments or continue shipping features.', points: 15 },
    ],
    '5yr': [
      { id: 'sr-5-1', type: 'design', question: 'Design a high-availability architecture for a payment processing system that requires 99.99% uptime. Include: multi-AZ deployment, automated failover, circuit breakers, bulkheads, and comprehensive monitoring.', hint: 'Multi-AZ: LB → Service (AZ1 + AZ2) → DB Primary + Replica → Circuit breaker → Monitoring → On-call', points: 25, expectedComponents: ['loadBalancer', 'webServer', 'database', 'cache', 'monitoring', 'notification'] },
      { id: 'sr-5-2', type: 'scenario', question: 'During a peak traffic event (10x normal), your auto-scaling is not keeping up. Pods are starting but failing readiness checks. Database connections are exhausted. Walk through your incident response and the architectural changes you would make to prevent this.', points: 20 },
    ],
    '7yr': [
      { id: 'sr-7-1', type: 'design', question: 'Design a global traffic management system with: geo-based routing, latency-based routing, automatic failover between regions, capacity planning, and load shedding during overload.', hint: 'Global DNS → Regional LBs → Service mesh → Circuit breakers → Load shedding → Capacity planner → Monitoring', points: 30, expectedComponents: ['dns', 'loadBalancer', 'microservice', 'cache', 'monitoring', 'analytics'] },
      { id: 'sr-7-2', type: 'scenario', question: 'You are building an SRE team from scratch for a company with 50 microservices and no SRE culture. Define: team structure, SLO framework, incident management process, on-call rotation, and toil reduction strategy.', points: 25 },
    ],
    '9yr': [
      { id: 'sr-9-1', type: 'design', question: 'Design a self-healing infrastructure platform that: detects anomalies using ML, automatically remediates common issues, manages capacity across regions, and provides predictive scaling based on historical patterns.', hint: 'Metrics → Anomaly detection (ML) → Decision engine → Auto-remediation → Capacity manager → Predictive scaler', points: 35, expectedComponents: ['monitoring', 'sagemaker', 'lambda', 'scheduler', 'notification', 'database'] },
    ],
    '13yr': [
      { id: 'sr-13-1', type: 'design', question: 'Design a reliability platform for a company operating at Google/Netflix scale (millions of QPS). Include: global load balancing, progressive rollouts, automated canary analysis, chaos engineering, capacity planning with ML, and a reliability scoring system for all services.', hint: 'Think about Spinnaker-like deployment, automated canary analysis, chaos monkey, capacity ML models', points: 40, expectedComponents: ['dns', 'loadBalancer', 'apiGateway', 'microservice', 'monitoring', 'sagemaker', 'kafka'] },
    ],
    '15plus': [
      { id: 'sr-15-1', type: 'design', question: 'Design the reliability architecture for a global financial exchange that processes 10M transactions/second with zero data loss. Include: consensus protocols, exactly-once processing, multi-region active-active with conflict resolution, and regulatory compliance for 30+ countries.', hint: 'Think about Raft/Paxos, event sourcing, CRDT, multi-region replication, compliance engines', points: 50, expectedComponents: ['dns', 'loadBalancer', 'kafka', 'database', 'cache', 'monitoring', 'firewall'] },
    ],
  },
  'cloud-architect': {
    fresher: [
      { id: 'ca-f-1', type: 'mcq', question: 'What is the difference between IaaS, PaaS, and SaaS?', options: ['They are the same thing', 'IaaS provides infrastructure, PaaS provides platform, SaaS provides software', 'They are different cloud providers', 'They are networking protocols'], answer: 1, points: 5 },
      { id: 'ca-f-2', type: 'design', question: 'Design a simple 3-tier web application on AWS with: presentation tier, application tier, and data tier.', hint: 'CloudFront → ALB → EC2 instances → RDS database', points: 15, expectedComponents: ['cloudfront', 'elb', 'ec2', 'rds'] },
    ],
    '3yr': [
      { id: 'ca-3-1', type: 'design', question: 'Design a serverless e-commerce backend on AWS. Include: API management, business logic, database, file storage, authentication, and notifications.', hint: 'API Gateway → Lambda functions → DynamoDB + S3 → Cognito → SES/SNS', points: 20, expectedComponents: ['apigateway-aws', 'lambda', 'dynamodb', 's3', 'cognito', 'sns'] },
      { id: 'ca-3-2', type: 'scenario', question: 'Your company wants to migrate from on-premises to cloud. They have a monolithic Java application, Oracle database, and NFS file shares. Propose a migration strategy using the 6 Rs (Rehost, Replatform, Refactor, Repurchase, Retire, Retain).', points: 15 },
    ],
    '5yr': [
      { id: 'ca-5-1', type: 'design', question: 'Design a multi-account AWS organization structure for a mid-size company with: separate environments (dev/staging/prod), shared services, security account, logging account, and network hub. Show the account structure and connectivity.', hint: 'Management Account → Security OU → Workload OU (Dev/Staging/Prod) → Shared Services → Transit Gateway', points: 25, expectedComponents: ['vpc', 'transitGateway', 'iam', 'cloudtrail', 'guardduty'] },
    ],
    '7yr': [
      { id: 'ca-7-1', type: 'design', question: 'Design a hybrid cloud architecture connecting on-premises data center to AWS and Azure. Include: network connectivity, identity federation, data replication, workload portability, and unified management.', hint: 'On-prem DC → Direct Connect/ExpressRoute → Cloud VPCs → Identity Federation → Data Sync → Management Plane', points: 30, expectedComponents: ['directConnect', 'expressRoute', 'vpc', 'vnet', 'iam', 'azureAD', 'monitoring'] },
    ],
    '9yr': [
      { id: 'ca-9-1', type: 'design', question: 'Design a cloud-native data platform that handles: real-time streaming (1M events/sec), batch processing (PB-scale), ML model training and serving, data governance, and multi-tenant data isolation.', hint: 'Kinesis/Kafka → Data Lake (S3) → ETL (Glue) → Warehouse (Redshift) → ML (SageMaker) → Governance → Multi-tenant isolation', points: 35, expectedComponents: ['kinesis', 's3', 'glue', 'redshift', 'sagemaker', 'athena', 'iam'] },
    ],
    '13yr': [
      { id: 'ca-13-1', type: 'design', question: 'Design a sovereign cloud architecture for a government agency that requires: data residency, air-gapped environments, FedRAMP High compliance, custom encryption with agency-managed keys, and integration with classified networks.', hint: 'Think about GovCloud, dedicated hosts, HSM, network isolation, compliance automation', points: 40, expectedComponents: ['vpc', 'kms', 'firewall', 'ec2', 'rds', 'cloudtrail', 'guardduty', 'iam'] },
    ],
    '15plus': [
      { id: 'ca-15-1', type: 'design', question: 'Design a planetary-scale application architecture (like Google Maps or Netflix) that serves 2 billion users across 190 countries. Include: edge computing, regional data processing, global consistency model, cost optimization, and carbon-aware workload placement.', hint: 'Edge CDN → Regional processing → Global data mesh → Consistency protocols → Cost/Carbon optimizer', points: 50, expectedComponents: ['cdn', 'dns', 'loadBalancer', 'eks', 'kafka', 'database', 'cache', 'monitoring'] },
    ],
  },
  'platform-engineer': {
    fresher: [
      { id: 'pe-f-1', type: 'mcq', question: 'What is the main goal of platform engineering?', options: ['To replace developers', 'To build internal platforms that reduce cognitive load for developers', 'To manage cloud billing', 'To write application code'], answer: 1, points: 5 },
      { id: 'pe-f-2', type: 'design', question: 'Design a basic developer self-service portal that allows developers to: create new projects, provision databases, and deploy applications.', hint: 'Developer → Portal UI → API → Terraform → Cloud Resources', points: 15, expectedComponents: ['client', 'apiGateway', 'container', 'database'] },
    ],
    '3yr': [
      { id: 'pe-3-1', type: 'design', question: 'Design an internal developer platform with: service catalog, environment provisioning, CI/CD integration, and monitoring dashboards.', hint: 'Backstage/Portal → Service Catalog → CI/CD → K8s → Monitoring → Logging', points: 20, expectedComponents: ['client', 'apiGateway', 'codepipeline', 'deployment', 'monitoring', 'logging'] },
    ],
    '5yr': [
      { id: 'pe-5-1', type: 'design', question: 'Design a golden path for microservice development: from project scaffolding to production deployment. Include: templates, CI/CD, security scanning, observability, and documentation generation.', hint: 'Template → Scaffold → Git → CI (build+scan+test) → CD (deploy) → Observability → Docs', points: 25, expectedComponents: ['codecommit', 'codebuild', 'codepipeline', 'container', 'deployment', 'monitoring'] },
    ],
    '7yr': [
      { id: 'pe-7-1', type: 'design', question: 'Design a multi-cluster Kubernetes platform with: cluster fleet management, workload placement policies, cross-cluster service discovery, centralized policy enforcement, and developer self-service.', hint: 'Control plane → Fleet manager → Cluster A/B/C → Policy engine → Service mesh → Developer portal', points: 30, expectedComponents: ['apiGateway', 'eks', 'service', 'networkPolicy', 'configmap', 'monitoring'] },
    ],
    '9yr': [
      { id: 'pe-9-1', type: 'design', question: 'Design a platform that supports both Kubernetes workloads and serverless functions with unified: networking, security, observability, and developer experience. Include cost attribution per team.', hint: 'Unified API → K8s runtime + Serverless runtime → Shared networking → Unified observability → Cost attribution', points: 35, expectedComponents: ['apiGateway', 'eks', 'lambda', 'monitoring', 'logging', 'analytics'] },
    ],
    '13yr': [
      { id: 'pe-13-1', type: 'design', question: 'Design a next-gen platform that uses AI to: recommend architecture patterns, auto-optimize resource allocation, predict failures, generate IaC from natural language, and provide intelligent code review. Show the ML pipeline and feedback loops.', hint: 'Developer input → NLP → Architecture recommender → IaC generator → Optimizer → Feedback → Retrain', points: 40, expectedComponents: ['client', 'apiGateway', 'sagemaker', 'lambda', 'database', 'monitoring'] },
    ],
    '15plus': [
      { id: 'pe-15-1', type: 'design', question: 'Design a universal compute platform that abstracts away all infrastructure complexity. Developers write code, the platform decides: where to run (cloud/edge/serverless/container), how to scale, how to secure, and how to optimize cost. Include the decision engine, policy framework, and feedback system.', hint: 'Code → Intent analyzer → Decision engine → Multi-runtime orchestrator → Policy enforcement → Optimization → Feedback', points: 50, expectedComponents: ['apiGateway', 'lambda', 'eks', 'cdn', 'monitoring', 'sagemaker', 'database'] },
    ],
  },
  backend: {
    fresher: [
      { id: 'be-f-1', type: 'mcq', question: 'What is REST API?', options: ['A sleep mode for servers', 'An architectural style for designing networked applications using HTTP methods', 'A database query language', 'A frontend framework'], answer: 1, points: 5 },
      { id: 'be-f-2', type: 'design', question: 'Design a basic REST API backend with: API server, database, and caching layer.', hint: 'Client → API Server → Cache (Redis) → Database (PostgreSQL)', points: 15, expectedComponents: ['client', 'webServer', 'redis', 'postgresql'] },
    ],
    '3yr': [
      { id: 'be-3-1', type: 'design', question: 'Design a URL shortener service that handles 10K requests/second. Include: API layer, storage, caching, and analytics.', hint: 'Client → LB → API → Cache → Database → Analytics', points: 20, expectedComponents: ['client', 'loadBalancer', 'apiGateway', 'redis', 'database', 'analytics'] },
    ],
    '5yr': [
      { id: 'be-5-1', type: 'design', question: 'Design a real-time chat application supporting 1M concurrent users. Include: WebSocket management, message storage, presence tracking, push notifications, and message search.', hint: 'Client → LB → WebSocket servers → Message queue → Storage → Presence service → Push notifications → Search', points: 25, expectedComponents: ['client', 'loadBalancer', 'webServer', 'kafka', 'database', 'redis', 'elasticsearch', 'notification'] },
    ],
    '7yr': [
      { id: 'be-7-1', type: 'design', question: 'Design a distributed task scheduling system (like Airflow) that handles: DAG execution, task dependencies, retries, distributed workers, and monitoring. Must handle 100K tasks/day.', hint: 'Scheduler → Task queue → Worker pool → State store → Dependency resolver → Monitoring → Alerting', points: 30, expectedComponents: ['scheduler', 'queue', 'worker', 'database', 'redis', 'monitoring'] },
    ],
    '9yr': [
      { id: 'be-9-1', type: 'design', question: 'Design a payment processing system handling $1B/day in transactions. Include: idempotency, exactly-once processing, fraud detection, multi-currency support, reconciliation, and audit trail.', hint: 'API Gateway → Auth → Payment orchestrator → Fraud ML → Ledger DB → Reconciliation → Audit → Notifications', points: 35, expectedComponents: ['apiGateway', 'auth', 'microservice', 'sagemaker', 'database', 'kafka', 'monitoring'] },
    ],
    '13yr': [
      { id: 'be-13-1', type: 'design', question: 'Design a global content delivery platform (like YouTube) that handles: video upload, transcoding, adaptive streaming, recommendation engine, content moderation, and CDN distribution for 500M daily active users.', hint: 'Upload → Transcode pipeline → Object storage → CDN → Recommendation ML → Content moderation → Analytics', points: 40, expectedComponents: ['apiGateway', 'sqs', 'lambda', 's3', 'cloudfront', 'sagemaker', 'dynamodb'] },
    ],
    '15plus': [
      { id: 'be-15-1', type: 'design', question: 'Design a global-scale social media platform backend (like Twitter/X) handling: 500K tweets/sec, real-time timeline generation, trending topics, content ranking, ad serving, and content moderation. Include the fan-out strategy and consistency model.', hint: 'Write path: API → Fan-out service → Timeline cache. Read path: Timeline service → Cache → Fallback to DB. Plus: Trending, Ads, Moderation ML', points: 50, expectedComponents: ['apiGateway', 'loadBalancer', 'kafka', 'redis', 'database', 'sagemaker', 'cdn', 'elasticsearch'] },
    ],
  },
  fullstack: {
    fresher: [
      { id: 'fs-f-1', type: 'mcq', question: 'What is the difference between client-side and server-side rendering?', options: ['There is no difference', 'CSR renders in browser using JS, SSR renders HTML on the server', 'CSR is faster always', 'SSR does not use JavaScript'], answer: 1, points: 5 },
      { id: 'fs-f-2', type: 'design', question: 'Design a basic full-stack web application with: frontend hosting, API backend, database, and user authentication.', hint: 'CDN (Frontend) → API Gateway → App Server → Auth Service → Database', points: 15, expectedComponents: ['cdn', 'apiGateway', 'appServer', 'auth', 'database'] },
    ],
    '3yr': [
      { id: 'fs-3-1', type: 'design', question: 'Design an e-commerce platform with: product catalog, shopping cart, checkout, payment processing, and order management.', hint: 'Frontend → API Gateway → Product Service → Cart Service → Payment Service → Order DB → Notification', points: 20, expectedComponents: ['cdn', 'apiGateway', 'microservice', 'redis', 'database', 'queue', 'notification'] },
    ],
    '5yr': [
      { id: 'fs-5-1', type: 'design', question: 'Design a real-time collaborative document editor (like Google Docs). Include: conflict resolution, presence awareness, version history, and offline support.', hint: 'Client → WebSocket LB → Collaboration server → CRDT/OT engine → Document store → Version history → Presence service', points: 25, expectedComponents: ['client', 'loadBalancer', 'webServer', 'redis', 'database', 'storage'] },
    ],
    '7yr': [
      { id: 'fs-7-1', type: 'design', question: 'Design a multi-tenant SaaS platform with: tenant isolation, custom domains, usage-based billing, feature flags, and white-labeling support.', hint: 'Custom domain → CDN → LB → Tenant router → App instances → Tenant DBs → Billing service → Feature flag service', points: 30, expectedComponents: ['dns', 'cdn', 'loadBalancer', 'apiGateway', 'microservice', 'database', 'analytics'] },
    ],
    '9yr': [
      { id: 'fs-9-1', type: 'design', question: 'Design a low-code/no-code platform that allows non-technical users to build web applications. Include: visual builder, component library, data modeling, workflow automation, and deployment pipeline.', hint: 'Visual Builder → Component Engine → Data Model → Workflow Engine → Code Generator → Build → Deploy → CDN', points: 35, expectedComponents: ['client', 'apiGateway', 'appServer', 'database', 'storage', 'codebuild', 'cdn'] },
    ],
    '13yr': [
      { id: 'fs-13-1', type: 'design', question: 'Design a developer tools platform (like Vercel/Netlify) that provides: instant deployments, edge functions, serverless databases, real-time collaboration, and AI-assisted development. Must handle 1M deployments/day.', hint: 'Git push → Build pipeline → Edge deployment → Serverless runtime → Edge DB → Collaboration → AI assistant', points: 40, expectedComponents: ['codecommit', 'codebuild', 'cdn', 'lambda', 'database', 'redis', 'sagemaker'] },
    ],
    '15plus': [
      { id: 'fs-15-1', type: 'design', question: 'Design the architecture for a metaverse platform supporting 10M concurrent users with: 3D rendering, real-time physics, spatial audio, digital economy (NFTs/currency), social features, and content creation tools. Include both client and server architecture.', hint: 'Client (3D engine) → Edge servers → Game servers → World state → Economy service → Social graph → Content pipeline → CDN', points: 50, expectedComponents: ['client', 'cdn', 'loadBalancer', 'webServer', 'kafka', 'redis', 'database', 'storage'] },
    ],
  },
  'data-engineer': {
    fresher: [
      { id: 'de-f-1', type: 'mcq', question: 'What is ETL?', options: ['A programming language', 'Extract, Transform, Load - a data integration process', 'A database type', 'An API protocol'], answer: 1, points: 5 },
      { id: 'de-f-2', type: 'design', question: 'Design a basic data pipeline that: extracts data from an API, transforms it, and loads it into a data warehouse.', hint: 'API Source → ETL Service → Data Warehouse → Dashboard', points: 15, expectedComponents: ['client', 'worker', 'database', 'analytics'] },
    ],
    '3yr': [
      { id: 'de-3-1', type: 'design', question: 'Design a real-time analytics pipeline for an e-commerce platform. Track: page views, clicks, purchases, and generate real-time dashboards.', hint: 'Events → Kafka → Stream processor → Real-time DB → Dashboard + Batch → Data Lake → Warehouse', points: 20, expectedComponents: ['client', 'kafka', 'lambda', 'redis', 'database', 'analytics'] },
    ],
    '5yr': [
      { id: 'de-5-1', type: 'design', question: 'Design a data lake architecture with: raw/curated/consumption zones, data catalog, data quality checks, lineage tracking, and access control.', hint: 'Sources → Ingestion → Raw zone (S3) → Quality checks → Curated zone → Catalog → Consumption → Access control', points: 25, expectedComponents: ['kinesis', 's3', 'glue', 'athena', 'redshift', 'iam'] },
    ],
    '7yr': [
      { id: 'de-7-1', type: 'design', question: 'Design a data mesh architecture where each domain team owns their data products. Include: data product interfaces, federated governance, self-serve data platform, and cross-domain data discovery.', hint: 'Domain A data product → Domain B data product → Federated catalog → Governance → Self-serve platform → Discovery', points: 30, expectedComponents: ['apiGateway', 'kafka', 's3', 'glue', 'athena', 'iam', 'analytics'] },
    ],
    '9yr': [
      { id: 'de-9-1', type: 'design', question: 'Design a real-time feature store for ML that handles: feature computation, online/offline serving, feature versioning, backfill, and monitoring. Must serve features at <10ms latency for 100K QPS.', hint: 'Event stream → Feature computation → Online store (Redis) + Offline store (S3) → Feature serving API → Monitoring', points: 35, expectedComponents: ['kafka', 'lambda', 'redis', 's3', 'apiGateway', 'monitoring'] },
    ],
    '13yr': [
      { id: 'de-13-1', type: 'design', question: 'Design a unified data platform for a Fortune 500 company that handles: 50TB/day ingestion, real-time and batch processing, ML feature engineering, data governance across 100+ data sources, and serves 5000+ data consumers.', hint: 'Multi-source ingestion → Stream + Batch → Lakehouse → Feature store → ML platform → Governance → Self-serve', points: 40, expectedComponents: ['kinesis', 'kafka', 's3', 'glue', 'redshift', 'sagemaker', 'athena', 'iam'] },
    ],
    '15plus': [
      { id: 'de-15-1', type: 'design', question: 'Design a global data fabric that provides: unified data access across multi-cloud and on-premises, real-time data virtualization, automated data quality, AI-driven data cataloging, and privacy-preserving analytics (federated learning, differential privacy).', hint: 'Data sources → Virtual layer → Quality engine → AI catalog → Privacy layer → Federated compute → Consumption', points: 50, expectedComponents: ['apiGateway', 'kafka', 's3', 'cloudStorage', 'sagemaker', 'vertexAI', 'database', 'monitoring'] },
    ],
  },
  'ml-engineer': {
    fresher: [
      { id: 'ml-f-1', type: 'mcq', question: 'What is the difference between training and inference in ML?', options: ['They are the same', 'Training builds the model from data, inference uses the model to make predictions', 'Training is for testing, inference is for production', 'Training uses GPUs, inference uses CPUs only'], answer: 1, points: 5 },
      { id: 'ml-f-2', type: 'design', question: 'Design a basic ML pipeline: data collection, training, and model serving.', hint: 'Data Source → Storage → Training Job → Model Registry → API Endpoint', points: 15, expectedComponents: ['storage', 'database', 'worker', 'apiGateway'] },
    ],
    '3yr': [
      { id: 'ml-3-1', type: 'design', question: 'Design an ML training pipeline with: data versioning, experiment tracking, hyperparameter tuning, model registry, and A/B testing for model deployment.', hint: 'Data store → Version control → Training cluster → Experiment tracker → Model registry → A/B deploy → Monitoring', points: 20, expectedComponents: ['s3', 'sagemaker', 'ec2', 'apiGateway', 'monitoring'] },
    ],
    '5yr': [
      { id: 'ml-5-1', type: 'design', question: 'Design a real-time recommendation engine for an e-commerce platform serving 10M users. Include: feature store, model training, real-time inference, A/B testing, and feedback loop.', hint: 'User events → Feature store → Training pipeline → Model serving → A/B router → Feedback → Retrain', points: 25, expectedComponents: ['kafka', 'redis', 'sagemaker', 'apiGateway', 'dynamodb', 'monitoring'] },
    ],
    '7yr': [
      { id: 'ml-7-1', type: 'design', question: 'Design an MLOps platform that supports: multi-framework training (PyTorch/TF/JAX), distributed training, automated retraining triggers, model monitoring for drift, and multi-model serving with canary deployments.', hint: 'Data pipeline → Multi-framework trainer → Distributed compute → Model monitor → Drift detector → Auto-retrain → Canary deploy', points: 30, expectedComponents: ['s3', 'sagemaker', 'eks', 'kafka', 'monitoring', 'apiGateway'] },
    ],
    '9yr': [
      { id: 'ml-9-1', type: 'design', question: 'Design a large language model (LLM) serving infrastructure that handles: model sharding across GPUs, KV-cache management, batched inference, streaming responses, rate limiting, and cost optimization. Must serve 10K concurrent requests.', hint: 'API Gateway → Rate limiter → Request batcher → GPU cluster (model parallel) → KV cache → Streaming response → Cost tracker', points: 35, expectedComponents: ['apiGateway', 'loadBalancer', 'ec2', 'elasticache', 'sqs', 'monitoring', 'cloudwatch'] },
    ],
    '13yr': [
      { id: 'ml-13-1', type: 'design', question: 'Design an AI platform that supports the full lifecycle of foundation models: pre-training on 100TB+ data, fine-tuning, RLHF, evaluation, red-teaming, deployment with guardrails, and continuous improvement. Include cost optimization for GPU clusters.', hint: 'Data pipeline → Pre-training cluster → Fine-tuning → RLHF → Eval suite → Red team → Guardrails → Deploy → Feedback', points: 40, expectedComponents: ['s3', 'kinesis', 'sagemaker', 'eks', 'bedrock', 'apiGateway', 'monitoring', 'database'] },
    ],
    '15plus': [
      { id: 'ml-15-1', type: 'design', question: 'Design an autonomous AI research platform that: discovers new model architectures (NAS), manages compute across cloud and on-prem GPU clusters, handles multi-modal training (text/image/video/audio), provides safety evaluation, and enables collaborative research across distributed teams.', hint: 'Research portal → NAS engine → Multi-cloud GPU orchestrator → Multi-modal pipeline → Safety eval → Collaboration → Publication', points: 50, expectedComponents: ['apiGateway', 'eks', 'sagemaker', 's3', 'kafka', 'database', 'monitoring', 'analytics'] },
    ],
  },
  'network-engineer': {
    fresher: [
      { id: 'ne-f-1', type: 'mcq', question: 'What is the OSI model Layer 4?', options: ['Physical', 'Data Link', 'Network', 'Transport'], answer: 3, points: 5 },
      { id: 'ne-f-2', type: 'design', question: 'Design a basic network architecture with: public subnet, private subnet, NAT gateway, and internet gateway.', hint: 'Internet → Internet Gateway → Public Subnet (LB) → NAT Gateway → Private Subnet (Servers) → Database', points: 15, expectedComponents: ['client', 'firewall', 'loadBalancer', 'webServer', 'database'] },
    ],
    '3yr': [
      { id: 'ne-3-1', type: 'design', question: 'Design a VPC architecture with: multiple subnets across AZs, security groups, NACLs, VPN connection to on-premises, and bastion host for SSH access.', hint: 'On-prem → VPN → VPC → Public/Private subnets (multi-AZ) → Security groups → NACLs → Bastion', points: 20, expectedComponents: ['vpc', 'firewall', 'loadBalancer', 'webServer', 'database'] },
    ],
    '5yr': [
      { id: 'ne-5-1', type: 'design', question: 'Design a hub-and-spoke network topology connecting 5 VPCs using Transit Gateway. Include: shared services VPC, inspection VPC with firewall, and centralized DNS resolution.', hint: 'Transit Gateway → Hub VPC (shared services + DNS) → Inspection VPC (firewall) → Spoke VPCs (workloads)', points: 25, expectedComponents: ['transitGateway', 'vpc', 'firewall', 'dns', 'loadBalancer'] },
    ],
    '7yr': [
      { id: 'ne-7-1', type: 'design', question: 'Design a global network architecture for a company with offices in 10 countries. Include: SD-WAN, Direct Connect/ExpressRoute, global DNS with failover, DDoS protection, and network monitoring.', hint: 'Offices → SD-WAN → Direct Connect → Cloud backbone → Global DNS → DDoS protection → Network monitoring', points: 30, expectedComponents: ['directConnect', 'expressRoute', 'transitGateway', 'route53', 'shield', 'monitoring'] },
    ],
    '9yr': [
      { id: 'ne-9-1', type: 'design', question: 'Design a service mesh architecture for 200+ microservices. Include: traffic management, mTLS, circuit breaking, rate limiting, observability, and canary routing. Show the data plane and control plane.', hint: 'Control plane (Istio) → Data plane (Envoy sidecars) → mTLS → Traffic policies → Circuit breakers → Observability', points: 35, expectedComponents: ['apiGateway', 'service', 'pod', 'networkPolicy', 'monitoring', 'logging'] },
    ],
    '13yr': [
      { id: 'ne-13-1', type: 'design', question: 'Design a network architecture for a global CDN serving 100Tbps of traffic. Include: anycast routing, edge PoPs, origin shielding, DDoS mitigation at edge, real-time traffic engineering, and cost optimization across transit providers.', hint: 'Anycast DNS → Edge PoPs → Origin shield → DDoS scrubbing → Traffic engineering → Transit optimization → Monitoring', points: 40, expectedComponents: ['dns', 'cdn', 'loadBalancer', 'firewall', 'waf', 'monitoring', 'analytics'] },
    ],
    '15plus': [
      { id: 'ne-15-1', type: 'design', question: 'Design a software-defined networking platform for a hyperscaler that manages: 1M+ virtual networks, sub-millisecond provisioning, custom silicon integration, programmable data planes (P4), and AI-driven traffic optimization.', hint: 'SDN controller → Programmable switches → Virtual network overlay → AI traffic optimizer → Telemetry → Custom silicon', points: 50, expectedComponents: ['apiGateway', 'loadBalancer', 'firewall', 'monitoring', 'sagemaker', 'database', 'analytics'] },
    ],
  },
};
