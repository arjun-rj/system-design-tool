// AWS Enterprise: E-Commerce Platform with VPC
export const awsEnterprise = {
  nodes: [
    // External
    { id: 'a1', type: 'systemNode', position: { x: 0, y: 150 }, data: { label: 'Web Customer', type: 'browser', icon: '🛒', color: '#4CAF50', isActive: false } },
    { id: 'a2', type: 'systemNode', position: { x: 0, y: 350 }, data: { label: 'Mobile Customer', type: 'mobile', icon: '📱', color: '#2196F3', isActive: false } },
    { id: 'a3', type: 'systemNode', position: { x: 0, y: 550 }, data: { label: 'Admin Panel', type: 'browser', icon: '🔑', color: '#E91E63', isActive: false } },
    { id: 'a4', type: 'systemNode', position: { x: 0, y: 0 }, data: { label: 'Partner API', type: 'client', icon: '🤝', color: '#FF9800', isActive: false } },
    // Edge
    { id: 'a5', type: 'systemNode', position: { x: 220, y: 50 }, data: { label: 'Route 53', type: 'route53', icon: '🌍', color: '#8C4FFF', isActive: false } },
    { id: 'a6', type: 'systemNode', position: { x: 220, y: 250 }, data: { label: 'CloudFront', type: 'cloudfront', icon: '☁️', color: '#8C4FFF', isActive: false } },
    { id: 'a7', type: 'systemNode', position: { x: 220, y: 450 }, data: { label: 'WAF', type: 'waf-aws', icon: '🛡️', color: '#DD344C', isActive: false } },
    // VPC
    { id: 'a-vpc', type: 'groupNode', position: { x: 420, y: -20 }, data: { label: 'Production VPC (10.0.0.0/16)', type: 'vpc', icon: '🔲', color: '#8C4FFF', isActive: false, subLabel: 'us-east-1', width: 920, height: 820 }, style: { width: 920, height: 820 }, zIndex: -1 },
    // Public Subnet
    { id: 'a-pub', type: 'groupNode', position: { x: 440, y: 30 }, data: { label: 'Public Subnet', type: 'subnet', icon: '🟢', color: '#4CAF50', isActive: false, width: 380, height: 140 }, style: { width: 380, height: 140 }, zIndex: 0 },
    // App Subnet
    { id: 'a-app', type: 'groupNode', position: { x: 440, y: 210 }, data: { label: 'Private App Subnet', type: 'subnet', icon: '🔴', color: '#F44336', isActive: false, width: 880, height: 240 }, style: { width: 880, height: 240 }, zIndex: 0 },
    // DB Subnet
    { id: 'a-db', type: 'groupNode', position: { x: 440, y: 490 }, data: { label: 'Private DB Subnet', type: 'subnet', icon: '🟣', color: '#9C27B0', isActive: false, width: 880, height: 260 }, style: { width: 880, height: 260 }, zIndex: 0 },
    // Public subnet nodes
    { id: 'a8', type: 'systemNode', position: { x: 470, y: 80 }, data: { label: 'ALB', type: 'elb', icon: '⚖️', color: '#8C4FFF', isActive: false } },
    { id: 'a9', type: 'systemNode', position: { x: 660, y: 80 }, data: { label: 'NAT Gateway', type: 'apiGateway', icon: '🔀', color: '#FF9800', isActive: false } },
    // App subnet nodes
    { id: 'a10', type: 'systemNode', position: { x: 470, y: 260 }, data: { label: 'Product Service', type: 'microservice', icon: '🏷️', color: '#9C27B0', isActive: false } },
    { id: 'a11', type: 'systemNode', position: { x: 650, y: 260 }, data: { label: 'Cart Service', type: 'microservice', icon: '🛒', color: '#4CAF50', isActive: false } },
    { id: 'a12', type: 'systemNode', position: { x: 830, y: 260 }, data: { label: 'Order Service', type: 'microservice', icon: '📦', color: '#2196F3', isActive: false } },
    { id: 'a13', type: 'systemNode', position: { x: 1010, y: 260 }, data: { label: 'Payment Service', type: 'microservice', icon: '💳', color: '#FF9800', isActive: false } },
    { id: 'a14', type: 'systemNode', position: { x: 470, y: 360 }, data: { label: 'User Service', type: 'microservice', icon: '👤', color: '#E91E63', isActive: false } },
    { id: 'a15', type: 'systemNode', position: { x: 650, y: 360 }, data: { label: 'Search Service', type: 'microservice', icon: '🔍', color: '#607D8B', isActive: false } },
    { id: 'a16', type: 'systemNode', position: { x: 830, y: 360 }, data: { label: 'Notification Svc', type: 'microservice', icon: '🔔', color: '#FFC107', isActive: false } },
    { id: 'a17', type: 'systemNode', position: { x: 1010, y: 360 }, data: { label: 'ElastiCache', type: 'elasticache', icon: '⚡', color: '#3B48CC', isActive: false } },
    // DB subnet nodes
    { id: 'a18', type: 'systemNode', position: { x: 470, y: 540 }, data: { label: 'Aurora Primary', type: 'aurora', icon: '🗃️', color: '#3B48CC', isActive: false } },
    { id: 'a19', type: 'systemNode', position: { x: 650, y: 540 }, data: { label: 'Aurora Replica', type: 'aurora', icon: '🗃️', color: '#3B48CC', isActive: false } },
    { id: 'a20', type: 'systemNode', position: { x: 830, y: 540 }, data: { label: 'DynamoDB', type: 'dynamodb', icon: '📊', color: '#4053D6', isActive: false } },
    { id: 'a21', type: 'systemNode', position: { x: 1010, y: 540 }, data: { label: 'Elasticsearch', type: 'elasticsearch', icon: '🔎', color: '#005571', isActive: false } },
    { id: 'a22', type: 'systemNode', position: { x: 470, y: 640 }, data: { label: 'SQS Orders', type: 'sqs', icon: '📨', color: '#FF4F8B', isActive: false } },
    { id: 'a23', type: 'systemNode', position: { x: 650, y: 640 }, data: { label: 'SNS Events', type: 'sns', icon: '📢', color: '#FF4F8B', isActive: false } },
    { id: 'a24', type: 'systemNode', position: { x: 830, y: 640 }, data: { label: 'Kinesis Stream', type: 'kinesis', icon: '🌊', color: '#FF4F8B', isActive: false } },
    // Outside VPC
    { id: 'a25', type: 'systemNode', position: { x: 1400, y: 100 }, data: { label: 'S3 Assets', type: 's3', icon: '🪣', color: '#569A31', isActive: false } },
    { id: 'a26', type: 'systemNode', position: { x: 1400, y: 300 }, data: { label: 'Cognito', type: 'cognito', icon: '🔐', color: '#DD344C', isActive: false } },
    { id: 'a27', type: 'systemNode', position: { x: 1400, y: 500 }, data: { label: 'SES Email', type: 'ses', icon: '📧', color: '#FF9900', isActive: false } },
    { id: 'a28', type: 'systemNode', position: { x: 1400, y: 700 }, data: { label: 'CloudWatch', type: 'cloudwatch', icon: '📈', color: '#FF4F8B', isActive: false } },
  ],
  edges: [
    { id: 'ae1', source: 'a1', target: 'a5', style: { stroke: '#555' } },
    { id: 'ae2', source: 'a2', target: 'a5', style: { stroke: '#555' } },
    { id: 'ae3', source: 'a3', target: 'a5', style: { stroke: '#555' } },
    { id: 'ae4', source: 'a4', target: 'a5', style: { stroke: '#555' } },
    { id: 'ae5', source: 'a5', target: 'a6', style: { stroke: '#555' } },
    { id: 'ae6', source: 'a6', target: 'a7', style: { stroke: '#555' } },
    { id: 'ae7', source: 'a7', target: 'a8', style: { stroke: '#555' } },
    { id: 'ae8', source: 'a8', target: 'a10', style: { stroke: '#555' } },
    { id: 'ae9', source: 'a8', target: 'a11', style: { stroke: '#555' } },
    { id: 'ae10', source: 'a8', target: 'a12', style: { stroke: '#555' } },
    { id: 'ae11', source: 'a8', target: 'a14', style: { stroke: '#555' } },
    { id: 'ae12', source: 'a11', target: 'a12', style: { stroke: '#555' } },
    { id: 'ae13', source: 'a12', target: 'a13', style: { stroke: '#555' } },
    { id: 'ae14', source: 'a14', target: 'a26', style: { stroke: '#555' } },
    { id: 'ae15', source: 'a10', target: 'a18', style: { stroke: '#555' } },
    { id: 'ae16', source: 'a11', target: 'a20', style: { stroke: '#555' } },
    { id: 'ae17', source: 'a12', target: 'a18', style: { stroke: '#555' } },
    { id: 'ae18', source: 'a13', target: 'a20', style: { stroke: '#555' } },
    { id: 'ae19', source: 'a10', target: 'a17', style: { stroke: '#555' } },
    { id: 'ae20', source: 'a11', target: 'a17', style: { stroke: '#555' } },
    { id: 'ae21', source: 'a18', target: 'a19', style: { stroke: '#555' } },
    { id: 'ae22', source: 'a15', target: 'a21', style: { stroke: '#555' } },
    { id: 'ae23', source: 'a8', target: 'a15', style: { stroke: '#555' } },
    { id: 'ae24', source: 'a12', target: 'a22', style: { stroke: '#555' } },
    { id: 'ae25', source: 'a22', target: 'a23', style: { stroke: '#555' } },
    { id: 'ae26', source: 'a23', target: 'a16', style: { stroke: '#555' } },
    { id: 'ae27', source: 'a16', target: 'a27', style: { stroke: '#555' } },
    { id: 'ae28', source: 'a6', target: 'a25', style: { stroke: '#555' } },
    { id: 'ae29', source: 'a24', target: 'a28', style: { stroke: '#555' } },
    { id: 'ae30', source: 'a12', target: 'a24', style: { stroke: '#555' } },
  ],
};

// Azure Enterprise: Healthcare System with VNet
export const azureEnterprise = {
  nodes: [
    // External
    { id: 'z1', type: 'systemNode', position: { x: 0, y: 150 }, data: { label: 'Patient Portal', type: 'browser', icon: '🏥', color: '#4CAF50', isActive: false } },
    { id: 'z2', type: 'systemNode', position: { x: 0, y: 350 }, data: { label: 'Doctor App', type: 'mobile', icon: '👨‍⚕️', color: '#2196F3', isActive: false } },
    { id: 'z3', type: 'systemNode', position: { x: 0, y: 550 }, data: { label: 'Admin Console', type: 'browser', icon: '🔑', color: '#E91E63', isActive: false } },
    { id: 'z4', type: 'systemNode', position: { x: 0, y: 0 }, data: { label: 'HL7/FHIR API', type: 'client', icon: '🔗', color: '#FF9800', isActive: false } },
    // Edge
    { id: 'z5', type: 'systemNode', position: { x: 220, y: 50 }, data: { label: 'Azure DNS', type: 'azureDNS', icon: '🌍', color: '#0078D4', isActive: false } },
    { id: 'z6', type: 'systemNode', position: { x: 220, y: 250 }, data: { label: 'Front Door', type: 'frontDoor', icon: '🚪', color: '#0078D4', isActive: false } },
    { id: 'z7', type: 'systemNode', position: { x: 220, y: 450 }, data: { label: 'Azure WAF', type: 'azureWAF', icon: '🛡️', color: '#0078D4', isActive: false } },
    // VNet
    { id: 'z-vnet', type: 'groupNode', position: { x: 420, y: -20 }, data: { label: 'Healthcare VNet (10.1.0.0/16)', type: 'vnet', icon: '🔲', color: '#0078D4', isActive: false, subLabel: 'East US', width: 920, height: 820 }, style: { width: 920, height: 820 }, zIndex: -1 },
    // Public Subnet
    { id: 'z-pub', type: 'groupNode', position: { x: 440, y: 30 }, data: { label: 'Frontend Subnet', type: 'subnet', icon: '🟢', color: '#4CAF50', isActive: false, width: 380, height: 140 }, style: { width: 380, height: 140 }, zIndex: 0 },
    // App Subnet
    { id: 'z-app', type: 'groupNode', position: { x: 440, y: 210 }, data: { label: 'Application Subnet', type: 'subnet', icon: '🔴', color: '#F44336', isActive: false, width: 880, height: 240 }, style: { width: 880, height: 240 }, zIndex: 0 },
    // DB Subnet
    { id: 'z-db', type: 'groupNode', position: { x: 440, y: 490 }, data: { label: 'Data Subnet', type: 'subnet', icon: '🟣', color: '#9C27B0', isActive: false, width: 880, height: 260 }, style: { width: 880, height: 260 }, zIndex: 0 },
    // Frontend nodes
    { id: 'z8', type: 'systemNode', position: { x: 470, y: 80 }, data: { label: 'App Gateway', type: 'appGateway', icon: '🚪', color: '#0078D4', isActive: false } },
    { id: 'z9', type: 'systemNode', position: { x: 660, y: 80 }, data: { label: 'API Management', type: 'apiGateway', icon: '🔀', color: '#0078D4', isActive: false } },
    // App nodes
    { id: 'z10', type: 'systemNode', position: { x: 470, y: 260 }, data: { label: 'Patient Service', type: 'appService', icon: '🏥', color: '#0078D4', isActive: false } },
    { id: 'z11', type: 'systemNode', position: { x: 650, y: 260 }, data: { label: 'Appointment Svc', type: 'appService', icon: '📅', color: '#0078D4', isActive: false } },
    { id: 'z12', type: 'systemNode', position: { x: 830, y: 260 }, data: { label: 'Prescription Svc', type: 'appService', icon: '💊', color: '#0078D4', isActive: false } },
    { id: 'z13', type: 'systemNode', position: { x: 1010, y: 260 }, data: { label: 'Billing Service', type: 'appService', icon: '💰', color: '#0078D4', isActive: false } },
    { id: 'z14', type: 'systemNode', position: { x: 470, y: 360 }, data: { label: 'Auth Service', type: 'appService', icon: '🔐', color: '#E91E63', isActive: false } },
    { id: 'z15', type: 'systemNode', position: { x: 650, y: 360 }, data: { label: 'Imaging Service', type: 'appService', icon: '🩻', color: '#607D8B', isActive: false } },
    { id: 'z16', type: 'systemNode', position: { x: 830, y: 360 }, data: { label: 'Notification Svc', type: 'azureFunctions', icon: '🔔', color: '#FFC107', isActive: false } },
    { id: 'z17', type: 'systemNode', position: { x: 1010, y: 360 }, data: { label: 'Azure Cache', type: 'azureCache', icon: '⚡', color: '#0078D4', isActive: false } },
    // DB nodes
    { id: 'z18', type: 'systemNode', position: { x: 470, y: 540 }, data: { label: 'Azure SQL', type: 'azureSQL', icon: '🗃️', color: '#0078D4', isActive: false } },
    { id: 'z19', type: 'systemNode', position: { x: 650, y: 540 }, data: { label: 'Cosmos DB', type: 'cosmosDB', icon: '🌌', color: '#0078D4', isActive: false } },
    { id: 'z20', type: 'systemNode', position: { x: 830, y: 540 }, data: { label: 'Azure Postgres', type: 'azurePostgres', icon: '🐘', color: '#0078D4', isActive: false } },
    { id: 'z21', type: 'systemNode', position: { x: 1010, y: 540 }, data: { label: 'Blob Storage', type: 'blobStorage', icon: '🪣', color: '#0078D4', isActive: false } },
    { id: 'z22', type: 'systemNode', position: { x: 470, y: 640 }, data: { label: 'Service Bus', type: 'serviceBus', icon: '🚌', color: '#0078D4', isActive: false } },
    { id: 'z23', type: 'systemNode', position: { x: 650, y: 640 }, data: { label: 'Event Grid', type: 'eventGrid', icon: '📡', color: '#0078D4', isActive: false } },
    // Outside VNet
    { id: 'z24', type: 'systemNode', position: { x: 1400, y: 100 }, data: { label: 'Azure AD', type: 'azureAD', icon: '👤', color: '#0078D4', isActive: false } },
    { id: 'z25', type: 'systemNode', position: { x: 1400, y: 300 }, data: { label: 'Key Vault', type: 'keyVault', icon: '🔑', color: '#0078D4', isActive: false } },
    { id: 'z26', type: 'systemNode', position: { x: 1400, y: 500 }, data: { label: 'Azure Monitor', type: 'azureMonitor', icon: '📈', color: '#0078D4', isActive: false } },
    { id: 'z27', type: 'systemNode', position: { x: 1400, y: 700 }, data: { label: 'Sentinel SIEM', type: 'sentinel', icon: '🛡️', color: '#0078D4', isActive: false } },
  ],
  edges: [
    { id: 'ze1', source: 'z1', target: 'z5', style: { stroke: '#555' } },
    { id: 'ze2', source: 'z2', target: 'z5', style: { stroke: '#555' } },
    { id: 'ze3', source: 'z3', target: 'z5', style: { stroke: '#555' } },
    { id: 'ze4', source: 'z4', target: 'z5', style: { stroke: '#555' } },
    { id: 'ze5', source: 'z5', target: 'z6', style: { stroke: '#555' } },
    { id: 'ze6', source: 'z6', target: 'z7', style: { stroke: '#555' } },
    { id: 'ze7', source: 'z7', target: 'z8', style: { stroke: '#555' } },
    { id: 'ze8', source: 'z8', target: 'z9', style: { stroke: '#555' } },
    { id: 'ze9', source: 'z9', target: 'z10', style: { stroke: '#555' } },
    { id: 'ze10', source: 'z9', target: 'z11', style: { stroke: '#555' } },
    { id: 'ze11', source: 'z9', target: 'z12', style: { stroke: '#555' } },
    { id: 'ze12', source: 'z9', target: 'z13', style: { stroke: '#555' } },
    { id: 'ze13', source: 'z9', target: 'z14', style: { stroke: '#555' } },
    { id: 'ze14', source: 'z14', target: 'z24', style: { stroke: '#555' } },
    { id: 'ze15', source: 'z10', target: 'z18', style: { stroke: '#555' } },
    { id: 'ze16', source: 'z11', target: 'z19', style: { stroke: '#555' } },
    { id: 'ze17', source: 'z12', target: 'z20', style: { stroke: '#555' } },
    { id: 'ze18', source: 'z13', target: 'z18', style: { stroke: '#555' } },
    { id: 'ze19', source: 'z15', target: 'z21', style: { stroke: '#555' } },
    { id: 'ze20', source: 'z10', target: 'z17', style: { stroke: '#555' } },
    { id: 'ze21', source: 'z11', target: 'z17', style: { stroke: '#555' } },
    { id: 'ze22', source: 'z16', target: 'z22', style: { stroke: '#555' } },
    { id: 'ze23', source: 'z22', target: 'z23', style: { stroke: '#555' } },
    { id: 'ze24', source: 'z13', target: 'z16', style: { stroke: '#555' } },
    { id: 'ze25', source: 'z11', target: 'z16', style: { stroke: '#555' } },
    { id: 'ze26', source: 'z9', target: 'z15', style: { stroke: '#555' } },
    { id: 'ze27', source: 'z14', target: 'z25', style: { stroke: '#555' } },
    { id: 'ze28', source: 'z10', target: 'z26', style: { stroke: '#555' } },
    { id: 'ze29', source: 'z18', target: 'z27', style: { stroke: '#555' } },
  ],
};

// GCP Enterprise: Analytics Platform with GKE
export const gcpEnterprise = {
  nodes: [
    // External
    { id: 'g1', type: 'systemNode', position: { x: 0, y: 150 }, data: { label: 'Data Analyst', type: 'browser', icon: '📊', color: '#4CAF50', isActive: false } },
    { id: 'g2', type: 'systemNode', position: { x: 0, y: 350 }, data: { label: 'ML Engineer', type: 'browser', icon: '🤖', color: '#2196F3', isActive: false } },
    { id: 'g3', type: 'systemNode', position: { x: 0, y: 550 }, data: { label: 'Admin', type: 'browser', icon: '🔑', color: '#E91E63', isActive: false } },
    { id: 'g4', type: 'systemNode', position: { x: 0, y: 0 }, data: { label: 'IoT Devices', type: 'client', icon: '📡', color: '#FF9800', isActive: false } },
    // Edge
    { id: 'g5', type: 'systemNode', position: { x: 220, y: 50 }, data: { label: 'Cloud DNS', type: 'cloudDNS', icon: '🌍', color: '#4285F4', isActive: false } },
    { id: 'g6', type: 'systemNode', position: { x: 220, y: 250 }, data: { label: 'Cloud CDN', type: 'cloudCDN', icon: '🌐', color: '#4285F4', isActive: false } },
    { id: 'g7', type: 'systemNode', position: { x: 220, y: 450 }, data: { label: 'Cloud Armor', type: 'cloudArmor', icon: '🛡️', color: '#4285F4', isActive: false } },
    // GKE Cluster
    { id: 'g-gke', type: 'groupNode', position: { x: 420, y: -20 }, data: { label: 'GKE Cluster (analytics-prod)', type: 'gke', icon: '☸️', color: '#4285F4', isActive: false, subLabel: 'us-central1', width: 920, height: 820 }, style: { width: 920, height: 820 }, zIndex: -1 },
    // Ingress Namespace
    { id: 'g-ing', type: 'groupNode', position: { x: 440, y: 30 }, data: { label: 'Ingress Namespace', type: 'namespace', icon: '🟢', color: '#4CAF50', isActive: false, width: 380, height: 140 }, style: { width: 380, height: 140 }, zIndex: 0 },
    // App Namespace
    { id: 'g-app', type: 'groupNode', position: { x: 440, y: 210 }, data: { label: 'Application Namespace', type: 'namespace', icon: '🔵', color: '#2196F3', isActive: false, width: 880, height: 240 }, style: { width: 880, height: 240 }, zIndex: 0 },
    // Data Namespace
    { id: 'g-data', type: 'groupNode', position: { x: 440, y: 490 }, data: { label: 'Data Namespace', type: 'namespace', icon: '🟣', color: '#9C27B0', isActive: false, width: 880, height: 260 }, style: { width: 880, height: 260 }, zIndex: 0 },
    // Ingress nodes
    { id: 'g8', type: 'systemNode', position: { x: 470, y: 80 }, data: { label: 'Load Balancer', type: 'cloudLoadBalancing', icon: '⚖️', color: '#4285F4', isActive: false } },
    { id: 'g9', type: 'systemNode', position: { x: 660, y: 80 }, data: { label: 'Ingress Controller', type: 'ingress', icon: '🚦', color: '#326CE5', isActive: false } },
    // App nodes
    { id: 'g10', type: 'systemNode', position: { x: 470, y: 260 }, data: { label: 'API Gateway Svc', type: 'service', icon: '🚪', color: '#4285F4', isActive: false } },
    { id: 'g11', type: 'systemNode', position: { x: 650, y: 260 }, data: { label: 'Ingest Service', type: 'deployment', icon: '📥', color: '#4285F4', isActive: false } },
    { id: 'g12', type: 'systemNode', position: { x: 830, y: 260 }, data: { label: 'Transform Svc', type: 'deployment', icon: '🔄', color: '#4285F4', isActive: false } },
    { id: 'g13', type: 'systemNode', position: { x: 1010, y: 260 }, data: { label: 'Query Service', type: 'deployment', icon: '🔍', color: '#4285F4', isActive: false } },
    { id: 'g14', type: 'systemNode', position: { x: 470, y: 360 }, data: { label: 'Auth Service', type: 'deployment', icon: '🔐', color: '#E91E63', isActive: false } },
    { id: 'g15', type: 'systemNode', position: { x: 650, y: 360 }, data: { label: 'ML Serving', type: 'deployment', icon: '🧠', color: '#9C27B0', isActive: false } },
    { id: 'g16', type: 'systemNode', position: { x: 830, y: 360 }, data: { label: 'Scheduler Svc', type: 'cronjob', icon: '⏰', color: '#FF9800', isActive: false } },
    { id: 'g17', type: 'systemNode', position: { x: 1010, y: 360 }, data: { label: 'Memorystore', type: 'memorystore', icon: '⚡', color: '#4285F4', isActive: false } },
    // Data nodes
    { id: 'g18', type: 'systemNode', position: { x: 470, y: 540 }, data: { label: 'Cloud SQL', type: 'cloudSQL', icon: '🗃️', color: '#4285F4', isActive: false } },
    { id: 'g19', type: 'systemNode', position: { x: 650, y: 540 }, data: { label: 'BigQuery', type: 'bigquery', icon: '📈', color: '#4285F4', isActive: false } },
    { id: 'g20', type: 'systemNode', position: { x: 830, y: 540 }, data: { label: 'Cloud Storage', type: 'cloudStorage', icon: '🪣', color: '#4285F4', isActive: false } },
    { id: 'g21', type: 'systemNode', position: { x: 1010, y: 540 }, data: { label: 'Bigtable', type: 'bigtable', icon: '📋', color: '#4285F4', isActive: false } },
    { id: 'g22', type: 'systemNode', position: { x: 470, y: 640 }, data: { label: 'Pub/Sub', type: 'pubsub', icon: '📬', color: '#4285F4', isActive: false } },
    { id: 'g23', type: 'systemNode', position: { x: 650, y: 640 }, data: { label: 'Dataflow', type: 'dataflow', icon: '🌊', color: '#4285F4', isActive: false } },
    { id: 'g24', type: 'systemNode', position: { x: 830, y: 640 }, data: { label: 'Dataproc', type: 'dataproc', icon: '⚙️', color: '#4285F4', isActive: false } },
    // Outside GKE
    { id: 'g25', type: 'systemNode', position: { x: 1400, y: 100 }, data: { label: 'Vertex AI', type: 'vertexAI', icon: '🤖', color: '#4285F4', isActive: false } },
    { id: 'g26', type: 'systemNode', position: { x: 1400, y: 300 }, data: { label: 'Firebase Auth', type: 'firebaseAuth', icon: '🔐', color: '#FFCA28', isActive: false } },
    { id: 'g27', type: 'systemNode', position: { x: 1400, y: 500 }, data: { label: 'Cloud Monitoring', type: 'cloudMonitoring', icon: '📈', color: '#4285F4', isActive: false } },
    { id: 'g28', type: 'systemNode', position: { x: 1400, y: 700 }, data: { label: 'Secret Manager', type: 'secretManager', icon: '🔑', color: '#4285F4', isActive: false } },
  ],
  edges: [
    { id: 'ge1', source: 'g1', target: 'g5', style: { stroke: '#555' } },
    { id: 'ge2', source: 'g2', target: 'g5', style: { stroke: '#555' } },
    { id: 'ge3', source: 'g3', target: 'g5', style: { stroke: '#555' } },
    { id: 'ge4', source: 'g4', target: 'g22', style: { stroke: '#555' } },
    { id: 'ge5', source: 'g5', target: 'g6', style: { stroke: '#555' } },
    { id: 'ge6', source: 'g6', target: 'g7', style: { stroke: '#555' } },
    { id: 'ge7', source: 'g7', target: 'g8', style: { stroke: '#555' } },
    { id: 'ge8', source: 'g8', target: 'g9', style: { stroke: '#555' } },
    { id: 'ge9', source: 'g9', target: 'g10', style: { stroke: '#555' } },
    { id: 'ge10', source: 'g10', target: 'g11', style: { stroke: '#555' } },
    { id: 'ge11', source: 'g10', target: 'g13', style: { stroke: '#555' } },
    { id: 'ge12', source: 'g10', target: 'g14', style: { stroke: '#555' } },
    { id: 'ge13', source: 'g11', target: 'g12', style: { stroke: '#555' } },
    { id: 'ge14', source: 'g11', target: 'g22', style: { stroke: '#555' } },
    { id: 'ge15', source: 'g12', target: 'g19', style: { stroke: '#555' } },
    { id: 'ge16', source: 'g12', target: 'g20', style: { stroke: '#555' } },
    { id: 'ge17', source: 'g13', target: 'g19', style: { stroke: '#555' } },
    { id: 'ge18', source: 'g13', target: 'g17', style: { stroke: '#555' } },
    { id: 'ge19', source: 'g14', target: 'g18', style: { stroke: '#555' } },
    { id: 'ge20', source: 'g14', target: 'g26', style: { stroke: '#555' } },
    { id: 'ge21', source: 'g15', target: 'g25', style: { stroke: '#555' } },
    { id: 'ge22', source: 'g15', target: 'g21', style: { stroke: '#555' } },
    { id: 'ge23', source: 'g10', target: 'g15', style: { stroke: '#555' } },
    { id: 'ge24', source: 'g22', target: 'g23', style: { stroke: '#555' } },
    { id: 'ge25', source: 'g23', target: 'g19', style: { stroke: '#555' } },
    { id: 'ge26', source: 'g16', target: 'g24', style: { stroke: '#555' } },
    { id: 'ge27', source: 'g24', target: 'g20', style: { stroke: '#555' } },
    { id: 'ge28', source: 'g14', target: 'g28', style: { stroke: '#555' } },
    { id: 'ge29', source: 'g18', target: 'g27', style: { stroke: '#555' } },
  ],
};

// OpenShift Enterprise: Banking System with Namespaces
export const openshiftEnterprise = {
  nodes: [
    // External
    { id: 'o1', type: 'systemNode', position: { x: 0, y: 150 }, data: { label: 'Customer Web', type: 'browser', icon: '🏦', color: '#4CAF50', isActive: false } },
    { id: 'o2', type: 'systemNode', position: { x: 0, y: 350 }, data: { label: 'Mobile Banking', type: 'mobile', icon: '📱', color: '#2196F3', isActive: false } },
    { id: 'o3', type: 'systemNode', position: { x: 0, y: 550 }, data: { label: 'Teller Terminal', type: 'browser', icon: '🖥️', color: '#FF9800', isActive: false } },
    { id: 'o4', type: 'systemNode', position: { x: 0, y: 0 }, data: { label: 'SWIFT Network', type: 'client', icon: '🌐', color: '#E91E63', isActive: false } },
    // Edge
    { id: 'o5', type: 'systemNode', position: { x: 220, y: 50 }, data: { label: 'External DNS', type: 'dns', icon: '🌍', color: '#DB212E', isActive: false } },
    { id: 'o6', type: 'systemNode', position: { x: 220, y: 250 }, data: { label: 'F5 Load Balancer', type: 'loadBalancer', icon: '⚖️', color: '#DB212E', isActive: false } },
    { id: 'o7', type: 'systemNode', position: { x: 220, y: 450 }, data: { label: 'WAF / Firewall', type: 'waf', icon: '🛡️', color: '#DB212E', isActive: false } },
    // OpenShift Cluster
    { id: 'o-cluster', type: 'groupNode', position: { x: 420, y: -20 }, data: { label: 'OpenShift Cluster (banking-prod)', type: 'namespace', icon: '☸️', color: '#DB212E', isActive: false, subLabel: 'on-prem DC1', width: 920, height: 820 }, style: { width: 920, height: 820 }, zIndex: -1 },
    // DMZ Namespace
    { id: 'o-dmz', type: 'groupNode', position: { x: 440, y: 30 }, data: { label: 'DMZ Namespace', type: 'namespace', icon: '🟢', color: '#4CAF50', isActive: false, width: 380, height: 140 }, style: { width: 380, height: 140 }, zIndex: 0 },
    // App Namespace
    { id: 'o-app', type: 'groupNode', position: { x: 440, y: 210 }, data: { label: 'Banking App Namespace', type: 'namespace', icon: '🔴', color: '#F44336', isActive: false, width: 880, height: 240 }, style: { width: 880, height: 240 }, zIndex: 0 },
    // Data Namespace
    { id: 'o-data', type: 'groupNode', position: { x: 440, y: 490 }, data: { label: 'Data Namespace', type: 'namespace', icon: '🟣', color: '#9C27B0', isActive: false, width: 880, height: 260 }, style: { width: 880, height: 260 }, zIndex: 0 },
    // DMZ nodes
    { id: 'o8', type: 'systemNode', position: { x: 470, y: 80 }, data: { label: 'Route (HAProxy)', type: 'route', icon: '🛤️', color: '#DB212E', isActive: false } },
    { id: 'o9', type: 'systemNode', position: { x: 660, y: 80 }, data: { label: 'API Gateway Pod', type: 'pod', icon: '🚪', color: '#EE0000', isActive: false } },
    // App nodes
    { id: 'o10', type: 'systemNode', position: { x: 470, y: 260 }, data: { label: 'Account Service', type: 'deployment', icon: '🏦', color: '#EE0000', isActive: false } },
    { id: 'o11', type: 'systemNode', position: { x: 650, y: 260 }, data: { label: 'Transfer Service', type: 'deployment', icon: '💸', color: '#EE0000', isActive: false } },
    { id: 'o12', type: 'systemNode', position: { x: 830, y: 260 }, data: { label: 'Loan Service', type: 'deployment', icon: '📋', color: '#EE0000', isActive: false } },
    { id: 'o13', type: 'systemNode', position: { x: 1010, y: 260 }, data: { label: 'Card Service', type: 'deployment', icon: '💳', color: '#EE0000', isActive: false } },
    { id: 'o14', type: 'systemNode', position: { x: 470, y: 360 }, data: { label: 'Auth / LDAP Svc', type: 'deployment', icon: '🔐', color: '#E91E63', isActive: false } },
    { id: 'o15', type: 'systemNode', position: { x: 650, y: 360 }, data: { label: 'Fraud Detection', type: 'deployment', icon: '🚨', color: '#F44336', isActive: false } },
    { id: 'o16', type: 'systemNode', position: { x: 830, y: 360 }, data: { label: 'Notification Svc', type: 'deployment', icon: '🔔', color: '#FFC107', isActive: false } },
    { id: 'o17', type: 'systemNode', position: { x: 1010, y: 360 }, data: { label: 'Redis Cache', type: 'statefulset', icon: '🔴', color: '#DC382D', isActive: false } },
    // Data nodes
    { id: 'o18', type: 'systemNode', position: { x: 470, y: 540 }, data: { label: 'Oracle DB Primary', type: 'oracle', icon: '🗃️', color: '#F80000', isActive: false } },
    { id: 'o19', type: 'systemNode', position: { x: 650, y: 540 }, data: { label: 'Oracle DB Standby', type: 'oracle', icon: '🗃️', color: '#F80000', isActive: false } },
    { id: 'o20', type: 'systemNode', position: { x: 830, y: 540 }, data: { label: 'MongoDB Ledger', type: 'mongodb', icon: '🍃', color: '#47A248', isActive: false } },
    { id: 'o21', type: 'systemNode', position: { x: 1010, y: 540 }, data: { label: 'Elasticsearch', type: 'elasticsearch', icon: '🔎', color: '#005571', isActive: false } },
    { id: 'o22', type: 'systemNode', position: { x: 470, y: 640 }, data: { label: 'Kafka Cluster', type: 'kafka', icon: '📨', color: '#231F20', isActive: false } },
    { id: 'o23', type: 'systemNode', position: { x: 650, y: 640 }, data: { label: 'Kafka Connect', type: 'kafka', icon: '🔗', color: '#231F20', isActive: false } },
    { id: 'o24', type: 'systemNode', position: { x: 830, y: 640 }, data: { label: 'Zookeeper', type: 'zookeeper', icon: '🐘', color: '#607D8B', isActive: false } },
    // Outside cluster
    { id: 'o25', type: 'systemNode', position: { x: 1400, y: 100 }, data: { label: 'Vault (Secrets)', type: 'consul', icon: '🔑', color: '#000', isActive: false } },
    { id: 'o26', type: 'systemNode', position: { x: 1400, y: 300 }, data: { label: 'Splunk SIEM', type: 'monitoring', icon: '📈', color: '#65A637', isActive: false } },
    { id: 'o27', type: 'systemNode', position: { x: 1400, y: 500 }, data: { label: 'SMTP Relay', type: 'email', icon: '📧', color: '#FF9800', isActive: false } },
    { id: 'o28', type: 'systemNode', position: { x: 1400, y: 700 }, data: { label: 'Backup Storage', type: 'storage', icon: '💾', color: '#8BC34A', isActive: false } },
  ],
  edges: [
    { id: 'oe1', source: 'o1', target: 'o5', style: { stroke: '#555' } },
    { id: 'oe2', source: 'o2', target: 'o5', style: { stroke: '#555' } },
    { id: 'oe3', source: 'o3', target: 'o5', style: { stroke: '#555' } },
    { id: 'oe4', source: 'o4', target: 'o5', style: { stroke: '#555' } },
    { id: 'oe5', source: 'o5', target: 'o6', style: { stroke: '#555' } },
    { id: 'oe6', source: 'o6', target: 'o7', style: { stroke: '#555' } },
    { id: 'oe7', source: 'o7', target: 'o8', style: { stroke: '#555' } },
    { id: 'oe8', source: 'o8', target: 'o9', style: { stroke: '#555' } },
    { id: 'oe9', source: 'o9', target: 'o10', style: { stroke: '#555' } },
    { id: 'oe10', source: 'o9', target: 'o11', style: { stroke: '#555' } },
    { id: 'oe11', source: 'o9', target: 'o12', style: { stroke: '#555' } },
    { id: 'oe12', source: 'o9', target: 'o13', style: { stroke: '#555' } },
    { id: 'oe13', source: 'o9', target: 'o14', style: { stroke: '#555' } },
    { id: 'oe14', source: 'o14', target: 'o25', style: { stroke: '#555' } },
    { id: 'oe15', source: 'o10', target: 'o18', style: { stroke: '#555' } },
    { id: 'oe16', source: 'o11', target: 'o18', style: { stroke: '#555' } },
    { id: 'oe17', source: 'o12', target: 'o18', style: { stroke: '#555' } },
    { id: 'oe18', source: 'o13', target: 'o20', style: { stroke: '#555' } },
    { id: 'oe19', source: 'o18', target: 'o19', style: { stroke: '#555' } },
    { id: 'oe20', source: 'o11', target: 'o15', style: { stroke: '#555' } },
    { id: 'oe21', source: 'o15', target: 'o22', style: { stroke: '#555' } },
    { id: 'oe22', source: 'o11', target: 'o22', style: { stroke: '#555' } },
    { id: 'oe23', source: 'o22', target: 'o23', style: { stroke: '#555' } },
    { id: 'oe24', source: 'o22', target: 'o24', style: { stroke: '#555' } },
    { id: 'oe25', source: 'o16', target: 'o27', style: { stroke: '#555' } },
    { id: 'oe26', source: 'o13', target: 'o16', style: { stroke: '#555' } },
    { id: 'oe27', source: 'o11', target: 'o16', style: { stroke: '#555' } },
    { id: 'oe28', source: 'o10', target: 'o17', style: { stroke: '#555' } },
    { id: 'oe29', source: 'o11', target: 'o17', style: { stroke: '#555' } },
    { id: 'oe30', source: 'o15', target: 'o21', style: { stroke: '#555' } },
    { id: 'oe31', source: 'o10', target: 'o26', style: { stroke: '#555' } },
    { id: 'oe32', source: 'o18', target: 'o28', style: { stroke: '#555' } },
  ],
};
