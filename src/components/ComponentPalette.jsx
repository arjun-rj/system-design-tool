import React, { useState } from 'react';
import groupTypes from './groupTypes';

const genericComponents = [
  { type: 'client', label: 'Client', icon: '💻', color: '#4CAF50', category: 'generic' },
  { type: 'mobile', label: 'Mobile App', icon: '📱', color: '#4CAF50', category: 'generic' },
  { type: 'browser', label: 'Browser', icon: '🌐', color: '#4CAF50', category: 'generic' },
  { type: 'loadBalancer', label: 'Load Balancer', icon: '⚖️', color: '#2196F3', category: 'generic' },
  { type: 'webServer', label: 'Web Server', icon: '🖥️', color: '#9C27B0', category: 'generic' },
  { type: 'appServer', label: 'App Server', icon: '⚙️', color: '#9C27B0', category: 'generic' },
  { type: 'apiGateway', label: 'API Gateway', icon: '🚪', color: '#FF9800', category: 'generic' },
  { type: 'reverseProxy', label: 'Reverse Proxy', icon: '🔄', color: '#FF9800', category: 'generic' },
  { type: 'cache', label: 'Cache', icon: '⚡', color: '#F44336', category: 'generic' },
  { type: 'redis', label: 'Redis', icon: '🔴', color: '#DC382D', category: 'generic' },
  { type: 'memcached', label: 'Memcached', icon: '🟢', color: '#00A95C', category: 'generic' },
  { type: 'database', label: 'Database', icon: '🗄️', color: '#607D8B', category: 'generic' },
  { type: 'sqlDb', label: 'SQL Database', icon: '📊', color: '#336791', category: 'generic' },
  { type: 'nosqlDb', label: 'NoSQL Database', icon: '📋', color: '#4DB33D', category: 'generic' },
  { type: 'graphDb', label: 'Graph Database', icon: '🕸️', color: '#008CC1', category: 'generic' },
  { type: 'queue', label: 'Message Queue', icon: '📬', color: '#795548', category: 'generic' },
  { type: 'kafka', label: 'Kafka', icon: '📨', color: '#231F20', category: 'generic' },
  { type: 'rabbitmq', label: 'RabbitMQ', icon: '🐰', color: '#FF6600', category: 'generic' },
  { type: 'cdn', label: 'CDN', icon: '🌍', color: '#00BCD4', category: 'generic' },
  { type: 'storage', label: 'Object Storage', icon: '💾', color: '#8BC34A', category: 'generic' },
  { type: 'fileStorage', label: 'File Storage', icon: '📁', color: '#8BC34A', category: 'generic' },
  { type: 'dns', label: 'DNS', icon: '🔤', color: '#673AB7', category: 'generic' },
  { type: 'firewall', label: 'Firewall', icon: '🛡️', color: '#F44336', category: 'generic' },
  { type: 'waf', label: 'WAF', icon: '🔒', color: '#E91E63', category: 'generic' },
  { type: 'auth', label: 'Auth Service', icon: '🔐', color: '#9C27B0', category: 'generic' },
  { type: 'oauth', label: 'OAuth Provider', icon: '🎫', color: '#3F51B5', category: 'generic' },
  { type: 'search', label: 'Search Engine', icon: '🔍', color: '#FFEB3B', category: 'generic' },
  { type: 'elasticsearch', label: 'Elasticsearch', icon: '🔎', color: '#005571', category: 'generic' },
  { type: 'monitoring', label: 'Monitoring', icon: '📈', color: '#FF5722', category: 'generic' },
  { type: 'logging', label: 'Logging', icon: '📝', color: '#795548', category: 'generic' },
  { type: 'analytics', label: 'Analytics', icon: '📊', color: '#3F51B5', category: 'generic' },
  { type: 'notification', label: 'Notification', icon: '🔔', color: '#FFC107', category: 'generic' },
  { type: 'email', label: 'Email Service', icon: '📧', color: '#03A9F4', category: 'generic' },
  { type: 'sms', label: 'SMS Service', icon: '💬', color: '#8BC34A', category: 'generic' },
  { type: 'scheduler', label: 'Scheduler', icon: '⏰', color: '#607D8B', category: 'generic' },
  { type: 'worker', label: 'Worker', icon: '👷', color: '#FF9800', category: 'generic' },
  { type: 'microservice', label: 'Microservice', icon: '🧩', color: '#9C27B0', category: 'generic' },
  { type: 'serverless', label: 'Serverless Fn', icon: 'λ', color: '#FF9800', category: 'generic' },
  { type: 'container', label: 'Container', icon: '📦', color: '#2196F3', category: 'generic' },
  { type: 'vm', label: 'Virtual Machine', icon: '🖳', color: '#607D8B', category: 'generic' },
];

const awsComponents = [
  // Compute
  { type: 'ec2', label: 'EC2', icon: '🟠', color: '#FF9900', category: 'aws' },
  { type: 'lambda', label: 'Lambda', icon: 'λ', color: '#FF9900', category: 'aws' },
  { type: 'ecs', label: 'ECS', icon: '🐳', color: '#FF9900', category: 'aws' },
  { type: 'eks', label: 'EKS', icon: '☸️', color: '#FF9900', category: 'aws' },
  { type: 'fargate', label: 'Fargate', icon: '🚀', color: '#FF9900', category: 'aws' },
  { type: 'beanstalk', label: 'Elastic Beanstalk', icon: '🌱', color: '#FF9900', category: 'aws' },
  { type: 'batch', label: 'Batch', icon: '📦', color: '#FF9900', category: 'aws' },
  { type: 'lightsail', label: 'Lightsail', icon: '💡', color: '#FF9900', category: 'aws' },
  // Storage
  { type: 's3', label: 'S3', icon: '🪣', color: '#569A31', category: 'aws' },
  { type: 'ebs', label: 'EBS', icon: '💿', color: '#569A31', category: 'aws' },
  { type: 'efs', label: 'EFS', icon: '📂', color: '#569A31', category: 'aws' },
  { type: 'glacier', label: 'Glacier', icon: '🧊', color: '#569A31', category: 'aws' },
  { type: 'fsx', label: 'FSx', icon: '📁', color: '#569A31', category: 'aws' },
  // Database
  { type: 'rds', label: 'RDS', icon: '🗃️', color: '#3B48CC', category: 'aws' },
  { type: 'dynamodb', label: 'DynamoDB', icon: '📊', color: '#4053D6', category: 'aws' },
  { type: 'aurora', label: 'Aurora', icon: '🌟', color: '#3B48CC', category: 'aws' },
  { type: 'redshift', label: 'Redshift', icon: '📈', color: '#3B48CC', category: 'aws' },
  { type: 'elasticache', label: 'ElastiCache', icon: '⚡', color: '#3B48CC', category: 'aws' },
  { type: 'neptune', label: 'Neptune', icon: '🔱', color: '#3B48CC', category: 'aws' },
  { type: 'documentdb', label: 'DocumentDB', icon: '📄', color: '#3B48CC', category: 'aws' },
  { type: 'keyspaces', label: 'Keyspaces', icon: '🔑', color: '#3B48CC', category: 'aws' },
  { type: 'timestream', label: 'Timestream', icon: '⏱️', color: '#3B48CC', category: 'aws' },
  // Networking
  { type: 'vpc', label: 'VPC', icon: '🔲', color: '#8C4FFF', category: 'aws' },
  { type: 'subnet', label: 'Subnet', icon: '🔳', color: '#8C4FFF', category: 'aws' },
  { type: 'elb', label: 'ELB/ALB', icon: '⚖️', color: '#8C4FFF', category: 'aws' },
  { type: 'nlb', label: 'NLB', icon: '🔀', color: '#8C4FFF', category: 'aws' },
  { type: 'cloudfront', label: 'CloudFront', icon: '☁️', color: '#8C4FFF', category: 'aws' },
  { type: 'route53', label: 'Route 53', icon: '🌍', color: '#8C4FFF', category: 'aws' },
  { type: 'apigateway-aws', label: 'API Gateway', icon: '🚪', color: '#FF4F8B', category: 'aws' },
  { type: 'directConnect', label: 'Direct Connect', icon: '🔌', color: '#8C4FFF', category: 'aws' },
  { type: 'globalAccelerator', label: 'Global Accelerator', icon: '🌐', color: '#8C4FFF', category: 'aws' },
  { type: 'transitGateway', label: 'Transit Gateway', icon: '🔗', color: '#8C4FFF', category: 'aws' },
  // Messaging
  { type: 'sqs', label: 'SQS', icon: '📨', color: '#FF4F8B', category: 'aws' },
  { type: 'sns', label: 'SNS', icon: '📢', color: '#FF4F8B', category: 'aws' },
  { type: 'eventbridge', label: 'EventBridge', icon: '🌉', color: '#FF4F8B', category: 'aws' },
  { type: 'kinesis', label: 'Kinesis', icon: '🌊', color: '#FF4F8B', category: 'aws' },
  { type: 'msk', label: 'MSK (Kafka)', icon: '📬', color: '#FF4F8B', category: 'aws' },
  { type: 'mq', label: 'Amazon MQ', icon: '🐰', color: '#FF4F8B', category: 'aws' },
  { type: 'stepFunctions', label: 'Step Functions', icon: '🔄', color: '#FF4F8B', category: 'aws' },
  // Security
  { type: 'cognito', label: 'Cognito', icon: '🔐', color: '#DD344C', category: 'aws' },
  { type: 'iam', label: 'IAM', icon: '👤', color: '#DD344C', category: 'aws' },
  { type: 'kms', label: 'KMS', icon: '🔑', color: '#DD344C', category: 'aws' },
  { type: 'secretsManager', label: 'Secrets Manager', icon: '🤫', color: '#DD344C', category: 'aws' },
  { type: 'waf-aws', label: 'WAF', icon: '🛡️', color: '#DD344C', category: 'aws' },
  { type: 'shield', label: 'Shield', icon: '🛡️', color: '#DD344C', category: 'aws' },
  { type: 'guardduty', label: 'GuardDuty', icon: '🕵️', color: '#DD344C', category: 'aws' },
  { type: 'inspector', label: 'Inspector', icon: '🔍', color: '#DD344C', category: 'aws' },
  { type: 'macie', label: 'Macie', icon: '🔒', color: '#DD344C', category: 'aws' },
  // Analytics & ML
  { type: 'athena', label: 'Athena', icon: '🦉', color: '#A166FF', category: 'aws' },
  { type: 'emr', label: 'EMR', icon: '🗺️', color: '#A166FF', category: 'aws' },
  { type: 'glue', label: 'Glue', icon: '🧪', color: '#A166FF', category: 'aws' },
  { type: 'quicksight', label: 'QuickSight', icon: '📊', color: '#A166FF', category: 'aws' },
  { type: 'sagemaker', label: 'SageMaker', icon: '🤖', color: '#A166FF', category: 'aws' },
  { type: 'comprehend', label: 'Comprehend', icon: '📖', color: '#A166FF', category: 'aws' },
  { type: 'rekognition', label: 'Rekognition', icon: '👁️', color: '#A166FF', category: 'aws' },
  { type: 'polly', label: 'Polly', icon: '🗣️', color: '#A166FF', category: 'aws' },
  { type: 'lex', label: 'Lex', icon: '💬', color: '#A166FF', category: 'aws' },
  { type: 'bedrock', label: 'Bedrock', icon: '🪨', color: '#A166FF', category: 'aws' },
  // Management
  { type: 'cloudwatch', label: 'CloudWatch', icon: '📈', color: '#FF4F8B', category: 'aws' },
  { type: 'cloudtrail', label: 'CloudTrail', icon: '🥾', color: '#FF4F8B', category: 'aws' },
  { type: 'config', label: 'Config', icon: '⚙️', color: '#FF4F8B', category: 'aws' },
  { type: 'systemsManager', label: 'Systems Manager', icon: '🔧', color: '#FF4F8B', category: 'aws' },
  { type: 'cloudformation', label: 'CloudFormation', icon: '📜', color: '#FF4F8B', category: 'aws' },
  // Other
  { type: 'ses', label: 'SES', icon: '📧', color: '#FF9900', category: 'aws' },
  { type: 'pinpoint', label: 'Pinpoint', icon: '📍', color: '#FF9900', category: 'aws' },
  { type: 'amplify', label: 'Amplify', icon: '📱', color: '#FF9900', category: 'aws' },
  { type: 'appsync', label: 'AppSync', icon: '🔄', color: '#FF4F8B', category: 'aws' },
  { type: 'codepipeline', label: 'CodePipeline', icon: '🔧', color: '#3B48CC', category: 'aws' },
  { type: 'codebuild', label: 'CodeBuild', icon: '🏗️', color: '#3B48CC', category: 'aws' },
  { type: 'codecommit', label: 'CodeCommit', icon: '📝', color: '#3B48CC', category: 'aws' },
];

const openshiftComponents = [
  // Workloads
  { type: 'pod', label: 'Pod', icon: '📦', color: '#EE0000', category: 'openshift' },
  { type: 'deployment', label: 'Deployment', icon: '🚀', color: '#EE0000', category: 'openshift' },
  { type: 'deploymentConfig', label: 'DeploymentConfig', icon: '⚙️', color: '#EE0000', category: 'openshift' },
  { type: 'statefulset', label: 'StatefulSet', icon: '📊', color: '#EE0000', category: 'openshift' },
  { type: 'daemonset', label: 'DaemonSet', icon: '👹', color: '#EE0000', category: 'openshift' },
  { type: 'replicaset', label: 'ReplicaSet', icon: '📋', color: '#EE0000', category: 'openshift' },
  { type: 'job', label: 'Job', icon: '📝', color: '#EE0000', category: 'openshift' },
  { type: 'cronjob', label: 'CronJob', icon: '⏰', color: '#EE0000', category: 'openshift' },
  // Networking
  { type: 'service', label: 'Service', icon: '🔗', color: '#DB212E', category: 'openshift' },
  { type: 'route', label: 'Route', icon: '🛤️', color: '#DB212E', category: 'openshift' },
  { type: 'ingress', label: 'Ingress', icon: '🚦', color: '#326CE5', category: 'openshift' },
  { type: 'networkPolicy', label: 'NetworkPolicy', icon: '🔒', color: '#326CE5', category: 'openshift' },
  { type: 'egressIP', label: 'EgressIP', icon: '🚪', color: '#326CE5', category: 'openshift' },
  // Config & Storage
  { type: 'configmap', label: 'ConfigMap', icon: '📋', color: '#326CE5', category: 'openshift' },
  { type: 'secret', label: 'Secret', icon: '🔒', color: '#326CE5', category: 'openshift' },
  { type: 'pvc', label: 'PVC', icon: '💿', color: '#326CE5', category: 'openshift' },
  { type: 'pv', label: 'PV', icon: '💾', color: '#326CE5', category: 'openshift' },
  { type: 'storageClass', label: 'StorageClass', icon: '🗄️', color: '#326CE5', category: 'openshift' },
  // Scaling & Management
  { type: 'hpa', label: 'HPA', icon: '📈', color: '#326CE5', category: 'openshift' },
  { type: 'vpa', label: 'VPA', icon: '📊', color: '#326CE5', category: 'openshift' },
  { type: 'namespace', label: 'Namespace', icon: '📁', color: '#326CE5', category: 'openshift' },
  { type: 'project', label: 'Project', icon: '📂', color: '#EE0000', category: 'openshift' },
  { type: 'resourceQuota', label: 'ResourceQuota', icon: '📏', color: '#326CE5', category: 'openshift' },
  { type: 'limitRange', label: 'LimitRange', icon: '📐', color: '#326CE5', category: 'openshift' },
  // Build & Deploy
  { type: 'buildConfig', label: 'BuildConfig', icon: '🏗️', color: '#EE0000', category: 'openshift' },
  { type: 'imageStream', label: 'ImageStream', icon: '🖼️', color: '#EE0000', category: 'openshift' },
  { type: 'template', label: 'Template', icon: '📄', color: '#EE0000', category: 'openshift' },
  // Security
  { type: 'serviceAccount', label: 'ServiceAccount', icon: '👤', color: '#326CE5', category: 'openshift' },
  { type: 'role', label: 'Role', icon: '🎭', color: '#326CE5', category: 'openshift' },
  { type: 'roleBinding', label: 'RoleBinding', icon: '🔗', color: '#326CE5', category: 'openshift' },
  { type: 'scc', label: 'SCC', icon: '🛡️', color: '#EE0000', category: 'openshift' },
  // Operators
  { type: 'operator', label: 'Operator', icon: '🤖', color: '#EE0000', category: 'openshift' },
  { type: 'csv', label: 'CSV', icon: '📜', color: '#EE0000', category: 'openshift' },
  { type: 'subscription', label: 'Subscription', icon: '📬', color: '#EE0000', category: 'openshift' },
];

const gcpComponents = [
  // Compute
  { type: 'computeEngine', label: 'Compute Engine', icon: '🖥️', color: '#4285F4', category: 'gcp' },
  { type: 'cloudFunctions', label: 'Cloud Functions', icon: 'λ', color: '#4285F4', category: 'gcp' },
  { type: 'cloudRun', label: 'Cloud Run', icon: '🏃', color: '#4285F4', category: 'gcp' },
  { type: 'gke', label: 'GKE', icon: '☸️', color: '#4285F4', category: 'gcp' },
  { type: 'appEngine', label: 'App Engine', icon: '🚀', color: '#4285F4', category: 'gcp' },
  // Storage
  { type: 'cloudStorage', label: 'Cloud Storage', icon: '🪣', color: '#4285F4', category: 'gcp' },
  { type: 'persistentDisk', label: 'Persistent Disk', icon: '💿', color: '#4285F4', category: 'gcp' },
  { type: 'filestore', label: 'Filestore', icon: '📁', color: '#4285F4', category: 'gcp' },
  // Database
  { type: 'cloudSQL', label: 'Cloud SQL', icon: '🗃️', color: '#4285F4', category: 'gcp' },
  { type: 'cloudSpanner', label: 'Cloud Spanner', icon: '🔧', color: '#4285F4', category: 'gcp' },
  { type: 'bigtable', label: 'Bigtable', icon: '📊', color: '#4285F4', category: 'gcp' },
  { type: 'firestore', label: 'Firestore', icon: '🔥', color: '#FFCA28', category: 'gcp' },
  { type: 'memorystore', label: 'Memorystore', icon: '⚡', color: '#4285F4', category: 'gcp' },
  // Networking
  { type: 'cloudLoadBalancing', label: 'Load Balancing', icon: '⚖️', color: '#4285F4', category: 'gcp' },
  { type: 'cloudCDN', label: 'Cloud CDN', icon: '🌐', color: '#4285F4', category: 'gcp' },
  { type: 'cloudDNS', label: 'Cloud DNS', icon: '🔤', color: '#4285F4', category: 'gcp' },
  { type: 'cloudArmor', label: 'Cloud Armor', icon: '🛡️', color: '#4285F4', category: 'gcp' },
  { type: 'cloudVPN', label: 'Cloud VPN', icon: '🔒', color: '#4285F4', category: 'gcp' },
  // Messaging
  { type: 'pubsub', label: 'Pub/Sub', icon: '📬', color: '#4285F4', category: 'gcp' },
  { type: 'cloudTasks', label: 'Cloud Tasks', icon: '📋', color: '#4285F4', category: 'gcp' },
  { type: 'cloudScheduler', label: 'Cloud Scheduler', icon: '⏰', color: '#4285F4', category: 'gcp' },
  { type: 'workflows', label: 'Workflows', icon: '🔄', color: '#4285F4', category: 'gcp' },
  // Analytics & AI
  { type: 'bigquery', label: 'BigQuery', icon: '📈', color: '#4285F4', category: 'gcp' },
  { type: 'dataflow', label: 'Dataflow', icon: '🌊', color: '#4285F4', category: 'gcp' },
  { type: 'dataproc', label: 'Dataproc', icon: '⚙️', color: '#4285F4', category: 'gcp' },
  { type: 'vertexAI', label: 'Vertex AI', icon: '🤖', color: '#4285F4', category: 'gcp' },
  { type: 'visionAI', label: 'Vision AI', icon: '👁️', color: '#4285F4', category: 'gcp' },
  // Security
  { type: 'cloudIAM', label: 'Cloud IAM', icon: '👤', color: '#4285F4', category: 'gcp' },
  { type: 'secretManager', label: 'Secret Manager', icon: '🤫', color: '#4285F4', category: 'gcp' },
  { type: 'cloudKMS', label: 'Cloud KMS', icon: '🔑', color: '#4285F4', category: 'gcp' },
  // Management
  { type: 'cloudMonitoring', label: 'Cloud Monitoring', icon: '📊', color: '#4285F4', category: 'gcp' },
  { type: 'cloudLogging', label: 'Cloud Logging', icon: '📝', color: '#4285F4', category: 'gcp' },
  { type: 'cloudBuild', label: 'Cloud Build', icon: '🏗️', color: '#4285F4', category: 'gcp' },
  // Firebase
  { type: 'firebase', label: 'Firebase', icon: '🔥', color: '#FFCA28', category: 'gcp' },
  { type: 'firebaseAuth', label: 'Firebase Auth', icon: '🔐', color: '#FFCA28', category: 'gcp' },
  { type: 'firebaseHosting', label: 'Firebase Hosting', icon: '🌐', color: '#FFCA28', category: 'gcp' },
];

const azureComponents = [
  // Compute
  { type: 'azureVM', label: 'Virtual Machines', icon: '🖥️', color: '#0078D4', category: 'azure' },
  { type: 'azureFunctions', label: 'Functions', icon: 'λ', color: '#0078D4', category: 'azure' },
  { type: 'aks', label: 'AKS', icon: '☸️', color: '#0078D4', category: 'azure' },
  { type: 'appService', label: 'App Service', icon: '🌐', color: '#0078D4', category: 'azure' },
  { type: 'containerInstances', label: 'Container Instances', icon: '📦', color: '#0078D4', category: 'azure' },
  { type: 'containerApps', label: 'Container Apps', icon: '🚀', color: '#0078D4', category: 'azure' },
  { type: 'batchAzure', label: 'Batch', icon: '📋', color: '#0078D4', category: 'azure' },
  // Storage
  { type: 'blobStorage', label: 'Blob Storage', icon: '🪣', color: '#0078D4', category: 'azure' },
  { type: 'azureFiles', label: 'Azure Files', icon: '📁', color: '#0078D4', category: 'azure' },
  { type: 'diskStorage', label: 'Disk Storage', icon: '💿', color: '#0078D4', category: 'azure' },
  { type: 'dataLake', label: 'Data Lake', icon: '🏞️', color: '#0078D4', category: 'azure' },
  // Database
  { type: 'azureSQL', label: 'Azure SQL', icon: '🗃️', color: '#0078D4', category: 'azure' },
  { type: 'cosmosDB', label: 'Cosmos DB', icon: '🌌', color: '#0078D4', category: 'azure' },
  { type: 'azureCache', label: 'Azure Cache', icon: '⚡', color: '#0078D4', category: 'azure' },
  { type: 'azurePostgres', label: 'PostgreSQL', icon: '🐘', color: '#0078D4', category: 'azure' },
  { type: 'azureMySQL', label: 'MySQL', icon: '🐬', color: '#0078D4', category: 'azure' },
  // Networking
  { type: 'azureLB', label: 'Load Balancer', icon: '⚖️', color: '#0078D4', category: 'azure' },
  { type: 'appGateway', label: 'App Gateway', icon: '🚪', color: '#0078D4', category: 'azure' },
  { type: 'frontDoor', label: 'Front Door', icon: '🚪', color: '#0078D4', category: 'azure' },
  { type: 'azureCDN', label: 'Azure CDN', icon: '🌐', color: '#0078D4', category: 'azure' },
  { type: 'azureDNS', label: 'Azure DNS', icon: '🔤', color: '#0078D4', category: 'azure' },
  { type: 'trafficManager', label: 'Traffic Manager', icon: '🚦', color: '#0078D4', category: 'azure' },
  { type: 'vnet', label: 'VNet', icon: '🔲', color: '#0078D4', category: 'azure' },
  { type: 'expressRoute', label: 'ExpressRoute', icon: '🔌', color: '#0078D4', category: 'azure' },
  // Messaging
  { type: 'serviceBus', label: 'Service Bus', icon: '🚌', color: '#0078D4', category: 'azure' },
  { type: 'eventHub', label: 'Event Hubs', icon: '📬', color: '#0078D4', category: 'azure' },
  { type: 'eventGrid', label: 'Event Grid', icon: '🔲', color: '#0078D4', category: 'azure' },
  { type: 'queueStorage', label: 'Queue Storage', icon: '📨', color: '#0078D4', category: 'azure' },
  { type: 'logicApps', label: 'Logic Apps', icon: '🔄', color: '#0078D4', category: 'azure' },
  // Security
  { type: 'azureAD', label: 'Azure AD', icon: '👤', color: '#0078D4', category: 'azure' },
  { type: 'keyVault', label: 'Key Vault', icon: '🔑', color: '#0078D4', category: 'azure' },
  { type: 'azureWAF', label: 'WAF', icon: '🛡️', color: '#0078D4', category: 'azure' },
  { type: 'ddosProtection', label: 'DDoS Protection', icon: '🛡️', color: '#0078D4', category: 'azure' },
  { type: 'sentinel', label: 'Sentinel', icon: '🕵️', color: '#0078D4', category: 'azure' },
  // Analytics & AI
  { type: 'synapse', label: 'Synapse', icon: '📊', color: '#0078D4', category: 'azure' },
  { type: 'databricks', label: 'Databricks', icon: '🧱', color: '#FF3621', category: 'azure' },
  { type: 'streamAnalytics', label: 'Stream Analytics', icon: '🌊', color: '#0078D4', category: 'azure' },
  { type: 'azureML', label: 'Azure ML', icon: '🤖', color: '#0078D4', category: 'azure' },
  { type: 'cognitiveServices', label: 'Cognitive Services', icon: '🧠', color: '#0078D4', category: 'azure' },
  { type: 'azureOpenAI', label: 'Azure OpenAI', icon: '🤖', color: '#0078D4', category: 'azure' },
  // Management
  { type: 'azureMonitor', label: 'Azure Monitor', icon: '📈', color: '#0078D4', category: 'azure' },
  { type: 'appInsights', label: 'App Insights', icon: '🔍', color: '#0078D4', category: 'azure' },
  { type: 'logAnalytics', label: 'Log Analytics', icon: '📝', color: '#0078D4', category: 'azure' },
  { type: 'azureDevOps', label: 'Azure DevOps', icon: '🔧', color: '#0078D4', category: 'azure' },
];

const databaseComponents = [
  { type: 'postgresql', label: 'PostgreSQL', icon: '🐘', color: '#336791', category: 'database' },
  { type: 'mysql', label: 'MySQL', icon: '🐬', color: '#4479A1', category: 'database' },
  { type: 'mariadb', label: 'MariaDB', icon: '🦭', color: '#003545', category: 'database' },
  { type: 'oracle', label: 'Oracle', icon: '🔴', color: '#F80000', category: 'database' },
  { type: 'sqlserver', label: 'SQL Server', icon: '🗄️', color: '#CC2927', category: 'database' },
  { type: 'mongodb', label: 'MongoDB', icon: '🍃', color: '#47A248', category: 'database' },
  { type: 'cassandra', label: 'Cassandra', icon: '👁️', color: '#1287B1', category: 'database' },
  { type: 'couchdb', label: 'CouchDB', icon: '🛋️', color: '#E42528', category: 'database' },
  { type: 'neo4j', label: 'Neo4j', icon: '🔵', color: '#008CC1', category: 'database' },
  { type: 'influxdb', label: 'InfluxDB', icon: '📈', color: '#22ADF6', category: 'database' },
  { type: 'clickhouse', label: 'ClickHouse', icon: '🏠', color: '#FFCC01', category: 'database' },
  { type: 'cockroachdb', label: 'CockroachDB', icon: '🪳', color: '#6933FF', category: 'database' },
  { type: 'tidb', label: 'TiDB', icon: '🔷', color: '#DD0031', category: 'database' },
  { type: 'vitess', label: 'Vitess', icon: '🔶', color: '#F16728', category: 'database' },
  { type: 'etcd', label: 'etcd', icon: '🔑', color: '#419EDA', category: 'database' },
  { type: 'consul', label: 'Consul', icon: '🏛️', color: '#CA2171', category: 'database' },
  { type: 'zookeeper', label: 'ZooKeeper', icon: '🦓', color: '#D22128', category: 'database' },
];

function ComponentPalette() {
  const [activeTab, setActiveTab] = useState('generic');

  const onDragStart = (event, component) => {
    event.dataTransfer.setData('application/json', JSON.stringify(component));
    event.dataTransfer.effectAllowed = 'move';
  };

  const getComponents = () => {
    switch (activeTab) {
      case 'aws': return awsComponents;
      case 'gcp': return gcpComponents;
      case 'azure': return azureComponents;
      case 'openshift': return openshiftComponents;
      case 'database': return databaseComponents;
      default: return genericComponents;
    }
  };

  return (
    <div className="component-palette">
      <h3>Components</h3>
      <div className="palette-tabs">
        <button className={activeTab === 'generic' ? 'active' : ''} onClick={() => setActiveTab('generic')}>Generic</button>
        <button className={activeTab === 'aws' ? 'active' : ''} onClick={() => setActiveTab('aws')}>AWS</button>
        <button className={activeTab === 'gcp' ? 'active' : ''} onClick={() => setActiveTab('gcp')}>GCP</button>
        <button className={activeTab === 'azure' ? 'active' : ''} onClick={() => setActiveTab('azure')}>Azure</button>
        <button className={activeTab === 'openshift' ? 'active' : ''} onClick={() => setActiveTab('openshift')}>K8s</button>
        <button className={activeTab === 'database' ? 'active' : ''} onClick={() => setActiveTab('database')}>DB</button>
      </div>
      <div className="component-list">
        {getComponents().map((comp) => (
          <div
            key={comp.type}
            className="palette-item"
            draggable
            onDragStart={(e) => onDragStart(e, comp)}
            style={{ borderLeftColor: comp.color }}
          >
            <span className="icon">{comp.icon}</span>
            <span className="label">{comp.label}</span>
            {groupTypes.has(comp.type) && <span className="group-badge">▢</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComponentPalette;
