// Defines which config fields are relevant for each component type
// Fields: label (always), port, protocol, latency, networkAllowed, allowedRoutes, notes
// Plus type-specific custom fields

const NET_FIELDS = ['label', 'port', 'protocol', 'latency', 'networkAllowed', 'allowedRoutes', 'notes'];
const BASIC_FIELDS = ['label', 'notes'];

const componentProperties = {
  // ===================== GENERIC =====================
  client: {
    fields: BASIC_FIELDS,
    custom: [{ key: 'requestRate', label: 'Request Rate (req/s)', type: 'number', placeholder: 'e.g. 1000' }],
  },
  mobile: {
    fields: BASIC_FIELDS,
    custom: [{ key: 'platform', label: 'Platform', type: 'select', options: ['iOS', 'Android', 'Cross-platform'] }],
  },
  browser: { fields: BASIC_FIELDS, custom: [] },
  loadBalancer: {
    fields: NET_FIELDS,
    custom: [
      { key: 'algorithm', label: 'Algorithm', type: 'select', options: ['Round Robin', 'Least Connections', 'IP Hash', 'Weighted', 'Random'] },
      { key: 'healthCheck', label: 'Health Check Path', type: 'text', placeholder: '/health' },
      { key: 'maxConnections', label: 'Max Connections', type: 'number', placeholder: 'e.g. 10000' },
    ],
  },
  webServer: {
    fields: NET_FIELDS,
    custom: [
      { key: 'serverType', label: 'Server Type', type: 'select', options: ['Nginx', 'Apache', 'Caddy', 'IIS', 'Other'] },
      { key: 'instances', label: 'Instances', type: 'number', placeholder: 'e.g. 3' },
    ],
  },
  appServer: {
    fields: NET_FIELDS,
    custom: [
      { key: 'runtime', label: 'Runtime', type: 'select', options: ['Node.js', 'Java/Spring', 'Python/Django', 'Go', '.NET', 'Ruby/Rails', 'Other'] },
      { key: 'instances', label: 'Instances', type: 'number', placeholder: 'e.g. 3' },
      { key: 'cpu', label: 'CPU (cores)', type: 'text', placeholder: 'e.g. 4' },
      { key: 'memory', label: 'Memory', type: 'text', placeholder: 'e.g. 8Gi' },
    ],
  },
  apiGateway: {
    fields: NET_FIELDS,
    custom: [
      { key: 'rateLimit', label: 'Rate Limit (req/s)', type: 'number', placeholder: 'e.g. 5000' },
      { key: 'authType', label: 'Auth Type', type: 'select', options: ['None', 'API Key', 'JWT', 'OAuth2', 'mTLS'] },
      { key: 'cors', label: 'CORS Enabled', type: 'select', options: ['Yes', 'No'] },
    ],
  },
  reverseProxy: {
    fields: NET_FIELDS,
    custom: [
      { key: 'proxyType', label: 'Proxy Type', type: 'select', options: ['Nginx', 'HAProxy', 'Envoy', 'Traefik'] },
      { key: 'sslTermination', label: 'SSL Termination', type: 'select', options: ['Yes', 'No'] },
    ],
  },
  cache: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'evictionPolicy', label: 'Eviction Policy', type: 'select', options: ['LRU', 'LFU', 'TTL', 'FIFO'] },
      { key: 'maxMemory', label: 'Max Memory', type: 'text', placeholder: 'e.g. 4GB' },
      { key: 'ttl', label: 'Default TTL (seconds)', type: 'number', placeholder: 'e.g. 3600' },
    ],
  },
  redis: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'mode', label: 'Mode', type: 'select', options: ['Standalone', 'Sentinel', 'Cluster'] },
      { key: 'maxMemory', label: 'Max Memory', type: 'text', placeholder: 'e.g. 4GB' },
      { key: 'persistence', label: 'Persistence', type: 'select', options: ['None', 'RDB', 'AOF', 'RDB+AOF'] },
    ],
  },
  memcached: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'maxMemory', label: 'Max Memory', type: 'text', placeholder: 'e.g. 4GB' },
      { key: 'threads', label: 'Threads', type: 'number', placeholder: 'e.g. 4' },
    ],
  },
  database: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'engine', label: 'Engine', type: 'select', options: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle', 'SQL Server', 'Other'] },
      { key: 'replicas', label: 'Replicas', type: 'number', placeholder: 'e.g. 3' },
      { key: 'storage', label: 'Storage', type: 'text', placeholder: 'e.g. 100GB' },
    ],
  },
  sqlDb: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'engine', label: 'Engine', type: 'select', options: ['PostgreSQL', 'MySQL', 'MariaDB', 'Oracle', 'SQL Server'] },
      { key: 'replicas', label: 'Replicas', type: 'number', placeholder: 'e.g. 3' },
    ],
  },
  nosqlDb: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'engine', label: 'Engine', type: 'select', options: ['MongoDB', 'Cassandra', 'DynamoDB', 'CouchDB', 'Other'] },
      { key: 'shards', label: 'Shards', type: 'number', placeholder: 'e.g. 3' },
    ],
  },
  graphDb: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'engine', label: 'Engine', type: 'select', options: ['Neo4j', 'Neptune', 'JanusGraph', 'ArangoDB'] },
    ],
  },
  queue: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'type', label: 'Type', type: 'select', options: ['FIFO', 'Standard', 'Priority'] },
      { key: 'maxSize', label: 'Max Queue Size', type: 'number', placeholder: 'e.g. 100000' },
    ],
  },
  kafka: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'partitions', label: 'Partitions', type: 'number', placeholder: 'e.g. 12' },
      { key: 'replicationFactor', label: 'Replication Factor', type: 'number', placeholder: 'e.g. 3' },
      { key: 'retention', label: 'Retention (hours)', type: 'number', placeholder: 'e.g. 168' },
    ],
  },
  rabbitmq: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'exchangeType', label: 'Exchange Type', type: 'select', options: ['Direct', 'Fanout', 'Topic', 'Headers'] },
      { key: 'durable', label: 'Durable', type: 'select', options: ['Yes', 'No'] },
    ],
  },
  cdn: {
    fields: ['label', 'latency', 'notes'],
    custom: [
      { key: 'provider', label: 'Provider', type: 'select', options: ['CloudFlare', 'Akamai', 'Fastly', 'CloudFront', 'Other'] },
      { key: 'cacheTTL', label: 'Cache TTL (seconds)', type: 'number', placeholder: 'e.g. 86400' },
    ],
  },
  storage: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'storageClass', label: 'Storage Class', type: 'select', options: ['Standard', 'Infrequent Access', 'Archive', 'Cold'] },
      { key: 'capacity', label: 'Capacity', type: 'text', placeholder: 'e.g. 1TB' },
      { key: 'encryption', label: 'Encryption', type: 'select', options: ['None', 'SSE-S3', 'SSE-KMS', 'Client-side'] },
    ],
  },
  fileStorage: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'protocol', label: 'Protocol', type: 'select', options: ['NFS', 'SMB', 'CIFS'] },
      { key: 'capacity', label: 'Capacity', type: 'text', placeholder: 'e.g. 500GB' },
    ],
  },
  dns: {
    fields: ['label', 'latency', 'notes'],
    custom: [
      { key: 'provider', label: 'Provider', type: 'select', options: ['Route53', 'CloudDNS', 'Azure DNS', 'Cloudflare', 'Other'] },
      { key: 'recordType', label: 'Record Type', type: 'select', options: ['A', 'AAAA', 'CNAME', 'MX', 'TXT', 'NS'] },
    ],
  },
  firewall: {
    fields: ['label', 'networkAllowed', 'allowedRoutes', 'notes'],
    custom: [
      { key: 'type', label: 'Type', type: 'select', options: ['Network', 'Application', 'WAF', 'Next-Gen'] },
      { key: 'defaultAction', label: 'Default Action', type: 'select', options: ['Allow', 'Deny'] },
    ],
  },
  waf: {
    fields: ['label', 'networkAllowed', 'notes'],
    custom: [
      { key: 'ruleSet', label: 'Rule Set', type: 'select', options: ['OWASP Core', 'Custom', 'Managed'] },
      { key: 'mode', label: 'Mode', type: 'select', options: ['Detection', 'Prevention'] },
    ],
  },
  auth: {
    fields: ['label', 'port', 'protocol', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'authMethod', label: 'Auth Method', type: 'select', options: ['JWT', 'OAuth2', 'SAML', 'LDAP', 'mTLS', 'API Key'] },
      { key: 'mfa', label: 'MFA Enabled', type: 'select', options: ['Yes', 'No'] },
    ],
  },
  oauth: {
    fields: ['label', 'port', 'protocol', 'latency', 'notes'],
    custom: [
      { key: 'grantType', label: 'Grant Type', type: 'select', options: ['Authorization Code', 'Client Credentials', 'Implicit', 'PKCE'] },
      { key: 'provider', label: 'Provider', type: 'select', options: ['Custom', 'Google', 'GitHub', 'Azure AD', 'Okta'] },
    ],
  },
  search: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'engine', label: 'Engine', type: 'select', options: ['Elasticsearch', 'Solr', 'Meilisearch', 'Typesense', 'Algolia'] },
    ],
  },
  elasticsearch: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'nodes', label: 'Nodes', type: 'number', placeholder: 'e.g. 3' },
      { key: 'shards', label: 'Shards', type: 'number', placeholder: 'e.g. 5' },
      { key: 'replicas', label: 'Replicas', type: 'number', placeholder: 'e.g. 1' },
    ],
  },
  monitoring: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'tool', label: 'Tool', type: 'select', options: ['Prometheus', 'Grafana', 'Datadog', 'New Relic', 'Nagios', 'Other'] },
      { key: 'retention', label: 'Retention (days)', type: 'number', placeholder: 'e.g. 30' },
    ],
  },
  logging: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'tool', label: 'Tool', type: 'select', options: ['ELK Stack', 'Fluentd', 'Loki', 'Splunk', 'Graylog', 'Other'] },
      { key: 'retention', label: 'Retention (days)', type: 'number', placeholder: 'e.g. 90' },
    ],
  },
  analytics: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'tool', label: 'Tool', type: 'select', options: ['Google Analytics', 'Mixpanel', 'Amplitude', 'Custom'] },
    ],
  },
  notification: {
    fields: ['label', 'latency', 'notes'],
    custom: [
      { key: 'channels', label: 'Channels', type: 'text', placeholder: 'e.g. Push, Email, SMS' },
    ],
  },
  email: {
    fields: ['label', 'latency', 'notes'],
    custom: [
      { key: 'provider', label: 'Provider', type: 'select', options: ['SES', 'SendGrid', 'Mailgun', 'Postmark', 'SMTP'] },
    ],
  },
  sms: {
    fields: ['label', 'latency', 'notes'],
    custom: [
      { key: 'provider', label: 'Provider', type: 'select', options: ['Twilio', 'SNS', 'Vonage', 'MessageBird'] },
    ],
  },
  scheduler: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'schedule', label: 'Schedule (cron)', type: 'text', placeholder: 'e.g. 0 */6 * * *' },
    ],
  },
  worker: {
    fields: ['label', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'concurrency', label: 'Concurrency', type: 'number', placeholder: 'e.g. 10' },
      { key: 'runtime', label: 'Runtime', type: 'select', options: ['Node.js', 'Python', 'Go', 'Java', 'Other'] },
    ],
  },
  microservice: {
    fields: NET_FIELDS,
    custom: [
      { key: 'runtime', label: 'Runtime', type: 'select', options: ['Node.js', 'Java/Spring', 'Python', 'Go', '.NET', 'Other'] },
      { key: 'instances', label: 'Instances', type: 'number', placeholder: 'e.g. 3' },
    ],
  },
  serverless: {
    fields: ['label', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'runtime', label: 'Runtime', type: 'select', options: ['Node.js', 'Python', 'Go', 'Java', '.NET', 'Ruby'] },
      { key: 'memoryMB', label: 'Memory (MB)', type: 'number', placeholder: 'e.g. 256' },
      { key: 'timeout', label: 'Timeout (seconds)', type: 'number', placeholder: 'e.g. 30' },
    ],
  },
  container: {
    fields: ['label', 'port', 'networkAllowed', 'notes'],
    custom: [
      { key: 'image', label: 'Image', type: 'text', placeholder: 'e.g. nginx:latest' },
      { key: 'cpu', label: 'CPU (cores)', type: 'text', placeholder: 'e.g. 0.5' },
      { key: 'memory', label: 'Memory', type: 'text', placeholder: 'e.g. 512Mi' },
    ],
  },
  vm: {
    fields: ['label', 'port', 'networkAllowed', 'notes'],
    custom: [
      { key: 'os', label: 'OS', type: 'select', options: ['Linux', 'Windows', 'macOS'] },
      { key: 'instanceType', label: 'Instance Type', type: 'text', placeholder: 'e.g. t3.medium' },
      { key: 'cpu', label: 'vCPUs', type: 'number', placeholder: 'e.g. 4' },
      { key: 'memory', label: 'Memory (GB)', type: 'number', placeholder: 'e.g. 16' },
    ],
  },

  // ===================== AWS =====================
  ec2: {
    fields: ['label', 'port', 'networkAllowed', 'notes'],
    custom: [
      { key: 'instanceType', label: 'Instance Type', type: 'text', placeholder: 'e.g. t3.large' },
      { key: 'ami', label: 'AMI', type: 'text', placeholder: 'e.g. ami-0abcdef' },
      { key: 'az', label: 'Availability Zone', type: 'text', placeholder: 'e.g. us-east-1a' },
    ],
  },
  lambda: {
    fields: ['label', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'runtime', label: 'Runtime', type: 'select', options: ['Node.js 20', 'Python 3.12', 'Java 21', 'Go', '.NET 8', 'Ruby 3.3'] },
      { key: 'memoryMB', label: 'Memory (MB)', type: 'number', placeholder: 'e.g. 256' },
      { key: 'timeout', label: 'Timeout (s)', type: 'number', placeholder: 'e.g. 30' },
    ],
  },
  ecs: {
    fields: ['label', 'port', 'networkAllowed', 'notes'],
    custom: [
      { key: 'launchType', label: 'Launch Type', type: 'select', options: ['Fargate', 'EC2'] },
      { key: 'desiredCount', label: 'Desired Count', type: 'number', placeholder: 'e.g. 3' },
      { key: 'cpu', label: 'CPU Units', type: 'text', placeholder: 'e.g. 256' },
      { key: 'memory', label: 'Memory (MB)', type: 'text', placeholder: 'e.g. 512' },
    ],
  },
  eks: {
    fields: ['label', 'port', 'networkAllowed', 'notes'],
    custom: [
      { key: 'version', label: 'K8s Version', type: 'text', placeholder: 'e.g. 1.29' },
      { key: 'nodeGroups', label: 'Node Groups', type: 'number', placeholder: 'e.g. 2' },
      { key: 'nodeType', label: 'Node Instance Type', type: 'text', placeholder: 'e.g. m5.large' },
    ],
  },
  fargate: {
    fields: ['label', 'port', 'networkAllowed', 'notes'],
    custom: [
      { key: 'cpu', label: 'CPU (vCPU)', type: 'text', placeholder: 'e.g. 0.5' },
      { key: 'memory', label: 'Memory (GB)', type: 'text', placeholder: 'e.g. 1' },
    ],
  },
  beanstalk: {
    fields: ['label', 'port', 'networkAllowed', 'notes'],
    custom: [
      { key: 'platform', label: 'Platform', type: 'select', options: ['Node.js', 'Python', 'Java', 'Go', '.NET', 'Docker', 'PHP'] },
      { key: 'envType', label: 'Environment Type', type: 'select', options: ['Web Server', 'Worker'] },
    ],
  },
  batch: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'computeEnv', label: 'Compute Environment', type: 'select', options: ['Fargate', 'EC2', 'Spot'] },
      { key: 'vcpus', label: 'vCPUs', type: 'number', placeholder: 'e.g. 4' },
    ],
  },
  lightsail: {
    fields: ['label', 'port', 'networkAllowed', 'notes'],
    custom: [
      { key: 'plan', label: 'Plan', type: 'text', placeholder: 'e.g. $5/mo' },
      { key: 'os', label: 'OS/App', type: 'select', options: ['Linux', 'Windows', 'WordPress', 'Node.js', 'LAMP'] },
    ],
  },
  s3: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'storageClass', label: 'Storage Class', type: 'select', options: ['Standard', 'IA', 'One Zone-IA', 'Glacier', 'Deep Archive', 'Intelligent-Tiering'] },
      { key: 'versioning', label: 'Versioning', type: 'select', options: ['Enabled', 'Disabled'] },
      { key: 'encryption', label: 'Encryption', type: 'select', options: ['SSE-S3', 'SSE-KMS', 'None'] },
    ],
  },
  ebs: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'volumeType', label: 'Volume Type', type: 'select', options: ['gp3', 'gp2', 'io2', 'io1', 'st1', 'sc1'] },
      { key: 'sizeGB', label: 'Size (GB)', type: 'number', placeholder: 'e.g. 100' },
      { key: 'iops', label: 'IOPS', type: 'number', placeholder: 'e.g. 3000' },
    ],
  },
  efs: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'performanceMode', label: 'Performance Mode', type: 'select', options: ['General Purpose', 'Max I/O'] },
      { key: 'throughputMode', label: 'Throughput Mode', type: 'select', options: ['Bursting', 'Provisioned', 'Elastic'] },
    ],
  },
  glacier: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'retrievalTier', label: 'Retrieval Tier', type: 'select', options: ['Expedited', 'Standard', 'Bulk'] },
    ],
  },
  fsx: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'fsType', label: 'File System Type', type: 'select', options: ['Lustre', 'Windows File Server', 'NetApp ONTAP', 'OpenZFS'] },
      { key: 'capacity', label: 'Capacity (GB)', type: 'number', placeholder: 'e.g. 1200' },
    ],
  },
  rds: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'engine', label: 'Engine', type: 'select', options: ['PostgreSQL', 'MySQL', 'MariaDB', 'Oracle', 'SQL Server'] },
      { key: 'instanceClass', label: 'Instance Class', type: 'text', placeholder: 'e.g. db.r6g.large' },
      { key: 'multiAZ', label: 'Multi-AZ', type: 'select', options: ['Yes', 'No'] },
      { key: 'storage', label: 'Storage (GB)', type: 'number', placeholder: 'e.g. 100' },
    ],
  },
  dynamodb: {
    fields: ['label', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'billingMode', label: 'Billing Mode', type: 'select', options: ['On-Demand', 'Provisioned'] },
      { key: 'rcu', label: 'Read Capacity Units', type: 'number', placeholder: 'e.g. 5' },
      { key: 'wcu', label: 'Write Capacity Units', type: 'number', placeholder: 'e.g. 5' },
    ],
  },
  aurora: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'engine', label: 'Engine', type: 'select', options: ['Aurora MySQL', 'Aurora PostgreSQL'] },
      { key: 'serverless', label: 'Serverless', type: 'select', options: ['Yes', 'No'] },
      { key: 'replicas', label: 'Read Replicas', type: 'number', placeholder: 'e.g. 2' },
    ],
  },
  redshift: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'nodeType', label: 'Node Type', type: 'text', placeholder: 'e.g. ra3.xlplus' },
      { key: 'nodes', label: 'Nodes', type: 'number', placeholder: 'e.g. 2' },
    ],
  },
  elasticache: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'engine', label: 'Engine', type: 'select', options: ['Redis', 'Memcached'] },
      { key: 'nodeType', label: 'Node Type', type: 'text', placeholder: 'e.g. cache.r6g.large' },
      { key: 'replicas', label: 'Replicas', type: 'number', placeholder: 'e.g. 2' },
    ],
  },
  neptune: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'instanceClass', label: 'Instance Class', type: 'text', placeholder: 'e.g. db.r5.large' },
    ],
  },
  documentdb: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'instanceClass', label: 'Instance Class', type: 'text', placeholder: 'e.g. db.r5.large' },
      { key: 'replicas', label: 'Replicas', type: 'number', placeholder: 'e.g. 2' },
    ],
  },
  keyspaces: {
    fields: ['label', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'throughputMode', label: 'Throughput Mode', type: 'select', options: ['On-Demand', 'Provisioned'] },
    ],
  },
  timestream: {
    fields: ['label', 'latency', 'notes'],
    custom: [
      { key: 'retention', label: 'Retention (days)', type: 'number', placeholder: 'e.g. 365' },
    ],
  },
  // AWS Networking
  vpc: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'cidr', label: 'CIDR Block', type: 'text', placeholder: 'e.g. 10.0.0.0/16' },
      { key: 'azCount', label: 'Availability Zones', type: 'number', placeholder: 'e.g. 3' },
    ],
  },
  subnet: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'cidr', label: 'CIDR Block', type: 'text', placeholder: 'e.g. 10.0.1.0/24' },
      { key: 'az', label: 'Availability Zone', type: 'text', placeholder: 'e.g. us-east-1a' },
      { key: 'subnetType', label: 'Type', type: 'select', options: ['Public', 'Private'] },
    ],
  },
  elb: {
    fields: NET_FIELDS,
    custom: [
      { key: 'type', label: 'Type', type: 'select', options: ['ALB', 'CLB'] },
      { key: 'scheme', label: 'Scheme', type: 'select', options: ['Internet-facing', 'Internal'] },
      { key: 'healthCheck', label: 'Health Check Path', type: 'text', placeholder: '/health' },
    ],
  },
  nlb: {
    fields: NET_FIELDS,
    custom: [
      { key: 'scheme', label: 'Scheme', type: 'select', options: ['Internet-facing', 'Internal'] },
      { key: 'crossZone', label: 'Cross-Zone', type: 'select', options: ['Yes', 'No'] },
    ],
  },
  cloudfront: {
    fields: ['label', 'latency', 'notes'],
    custom: [
      { key: 'priceClass', label: 'Price Class', type: 'select', options: ['All Edge Locations', 'NA + EU', 'NA + EU + Asia'] },
      { key: 'cacheTTL', label: 'Default TTL (s)', type: 'number', placeholder: 'e.g. 86400' },
    ],
  },
  route53: {
    fields: ['label', 'notes'],
    custom: [
      { key: 'routingPolicy', label: 'Routing Policy', type: 'select', options: ['Simple', 'Weighted', 'Latency', 'Failover', 'Geolocation', 'Multivalue'] },
      { key: 'hostedZone', label: 'Hosted Zone', type: 'text', placeholder: 'e.g. example.com' },
    ],
  },
  'apigateway-aws': {
    fields: NET_FIELDS,
    custom: [
      { key: 'type', label: 'Type', type: 'select', options: ['REST', 'HTTP', 'WebSocket'] },
      { key: 'authType', label: 'Auth', type: 'select', options: ['None', 'IAM', 'Cognito', 'Lambda Authorizer', 'API Key'] },
      { key: 'throttle', label: 'Throttle (req/s)', type: 'number', placeholder: 'e.g. 10000' },
    ],
  },
  directConnect: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'bandwidth', label: 'Bandwidth', type: 'select', options: ['1 Gbps', '10 Gbps', '100 Gbps'] },
      { key: 'location', label: 'Location', type: 'text', placeholder: 'e.g. Equinix DC' },
    ],
  },
  globalAccelerator: {
    fields: ['label', 'latency', 'notes'],
    custom: [
      { key: 'acceleratorType', label: 'Type', type: 'select', options: ['Standard', 'Custom Routing'] },
    ],
  },
  transitGateway: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'attachments', label: 'Attachments', type: 'number', placeholder: 'e.g. 5' },
    ],
  },
  // AWS Messaging
  sqs: {
    fields: ['label', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'queueType', label: 'Queue Type', type: 'select', options: ['Standard', 'FIFO'] },
      { key: 'visibilityTimeout', label: 'Visibility Timeout (s)', type: 'number', placeholder: 'e.g. 30' },
      { key: 'retentionDays', label: 'Retention (days)', type: 'number', placeholder: 'e.g. 4' },
    ],
  },
  sns: {
    fields: ['label', 'latency', 'notes'],
    custom: [
      { key: 'topicType', label: 'Topic Type', type: 'select', options: ['Standard', 'FIFO'] },
      { key: 'protocol', label: 'Protocol', type: 'select', options: ['HTTP/S', 'Email', 'SMS', 'SQS', 'Lambda'] },
    ],
  },
  eventbridge: {
    fields: ['label', 'latency', 'notes'],
    custom: [
      { key: 'busType', label: 'Bus Type', type: 'select', options: ['Default', 'Custom', 'Partner'] },
    ],
  },
  kinesis: {
    fields: ['label', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'streamType', label: 'Type', type: 'select', options: ['Data Streams', 'Firehose', 'Analytics', 'Video'] },
      { key: 'shards', label: 'Shards', type: 'number', placeholder: 'e.g. 4' },
    ],
  },
  msk: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'brokers', label: 'Brokers', type: 'number', placeholder: 'e.g. 3' },
      { key: 'instanceType', label: 'Instance Type', type: 'text', placeholder: 'e.g. kafka.m5.large' },
    ],
  },
  mq: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'engine', label: 'Engine', type: 'select', options: ['ActiveMQ', 'RabbitMQ'] },
      { key: 'instanceType', label: 'Instance Type', type: 'text', placeholder: 'e.g. mq.m5.large' },
    ],
  },
  stepFunctions: {
    fields: ['label', 'latency', 'notes'],
    custom: [
      { key: 'type', label: 'Type', type: 'select', options: ['Standard', 'Express'] },
    ],
  },
  // AWS Security
  cognito: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'poolType', label: 'Pool Type', type: 'select', options: ['User Pool', 'Identity Pool'] },
      { key: 'mfa', label: 'MFA', type: 'select', options: ['Off', 'Optional', 'Required'] },
    ],
  },
  iam: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'entityType', label: 'Entity Type', type: 'select', options: ['User', 'Role', 'Group', 'Policy'] },
    ],
  },
  kms: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'keyType', label: 'Key Type', type: 'select', options: ['Symmetric', 'Asymmetric'] },
      { key: 'keySpec', label: 'Key Spec', type: 'select', options: ['AES_256', 'RSA_2048', 'RSA_4096', 'ECC_NIST_P256'] },
    ],
  },
  secretsManager: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'rotationDays', label: 'Rotation (days)', type: 'number', placeholder: 'e.g. 30' },
      { key: 'autoRotate', label: 'Auto Rotate', type: 'select', options: ['Yes', 'No'] },
    ],
  },
  'waf-aws': {
    fields: ['label', 'networkAllowed', 'notes'],
    custom: [
      { key: 'ruleGroup', label: 'Rule Group', type: 'select', options: ['AWS Managed', 'Custom', 'Marketplace'] },
      { key: 'scope', label: 'Scope', type: 'select', options: ['Regional', 'CloudFront'] },
    ],
  },
  shield: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'tier', label: 'Tier', type: 'select', options: ['Standard', 'Advanced'] },
    ],
  },
  guardduty: { fields: BASIC_FIELDS, custom: [{ key: 'findingFreq', label: 'Finding Frequency', type: 'select', options: ['15 min', '1 hour', '6 hours'] }] },
  inspector: { fields: BASIC_FIELDS, custom: [{ key: 'scanType', label: 'Scan Type', type: 'select', options: ['EC2', 'ECR', 'Lambda'] }] },
  macie: { fields: BASIC_FIELDS, custom: [{ key: 'scanFreq', label: 'Scan Frequency', type: 'select', options: ['Daily', 'Weekly', 'Monthly'] }] },
  // AWS Analytics & ML
  athena: { fields: BASIC_FIELDS, custom: [{ key: 'workgroup', label: 'Workgroup', type: 'text', placeholder: 'primary' }] },
  emr: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'releaseLabel', label: 'Release', type: 'text', placeholder: 'e.g. emr-6.15.0' },
      { key: 'instanceType', label: 'Instance Type', type: 'text', placeholder: 'e.g. m5.xlarge' },
      { key: 'nodeCount', label: 'Node Count', type: 'number', placeholder: 'e.g. 3' },
    ],
  },
  glue: { fields: BASIC_FIELDS, custom: [{ key: 'jobType', label: 'Job Type', type: 'select', options: ['Spark', 'Python Shell', 'Ray'] }] },
  quicksight: { fields: BASIC_FIELDS, custom: [{ key: 'edition', label: 'Edition', type: 'select', options: ['Standard', 'Enterprise'] }] },
  sagemaker: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'instanceType', label: 'Instance Type', type: 'text', placeholder: 'e.g. ml.m5.xlarge' },
      { key: 'framework', label: 'Framework', type: 'select', options: ['TensorFlow', 'PyTorch', 'XGBoost', 'Scikit-learn', 'HuggingFace'] },
    ],
  },
  comprehend: { fields: BASIC_FIELDS, custom: [{ key: 'analysisType', label: 'Analysis Type', type: 'select', options: ['Sentiment', 'Entities', 'Key Phrases', 'Language', 'PII'] }] },
  rekognition: { fields: BASIC_FIELDS, custom: [{ key: 'feature', label: 'Feature', type: 'select', options: ['Labels', 'Faces', 'Text', 'Moderation', 'Custom Labels'] }] },
  polly: { fields: BASIC_FIELDS, custom: [{ key: 'engine', label: 'Engine', type: 'select', options: ['Standard', 'Neural', 'Long-Form'] }] },
  lex: { fields: BASIC_FIELDS, custom: [{ key: 'version', label: 'Version', type: 'select', options: ['V1', 'V2'] }] },
  bedrock: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'model', label: 'Model', type: 'select', options: ['Claude', 'Titan', 'Llama', 'Mistral', 'Stable Diffusion'] },
    ],
  },
  // AWS Management
  cloudwatch: { fields: BASIC_FIELDS, custom: [{ key: 'retention', label: 'Log Retention (days)', type: 'number', placeholder: 'e.g. 30' }] },
  cloudtrail: { fields: BASIC_FIELDS, custom: [{ key: 'multiRegion', label: 'Multi-Region', type: 'select', options: ['Yes', 'No'] }] },
  config: { fields: BASIC_FIELDS, custom: [{ key: 'rules', label: 'Rules Count', type: 'number', placeholder: 'e.g. 10' }] },
  systemsManager: { fields: BASIC_FIELDS, custom: [{ key: 'feature', label: 'Feature', type: 'select', options: ['Parameter Store', 'Session Manager', 'Patch Manager', 'Run Command'] }] },
  cloudformation: { fields: BASIC_FIELDS, custom: [{ key: 'stackType', label: 'Stack Type', type: 'select', options: ['Standard', 'Nested', 'StackSet'] }] },
  // AWS Other
  ses: { fields: ['label', 'latency', 'notes'], custom: [{ key: 'sendingRate', label: 'Sending Rate (emails/s)', type: 'number', placeholder: 'e.g. 14' }] },
  pinpoint: { fields: BASIC_FIELDS, custom: [{ key: 'channels', label: 'Channels', type: 'text', placeholder: 'e.g. Email, SMS, Push' }] },
  amplify: { fields: BASIC_FIELDS, custom: [{ key: 'framework', label: 'Framework', type: 'select', options: ['React', 'Next.js', 'Vue', 'Angular', 'Flutter'] }] },
  appsync: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'apiType', label: 'API Type', type: 'select', options: ['GraphQL', 'Merged'] },
      { key: 'authMode', label: 'Auth Mode', type: 'select', options: ['API Key', 'Cognito', 'IAM', 'OIDC', 'Lambda'] },
    ],
  },
  codepipeline: { fields: BASIC_FIELDS, custom: [{ key: 'stages', label: 'Stages', type: 'number', placeholder: 'e.g. 4' }] },
  codebuild: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'computeType', label: 'Compute Type', type: 'select', options: ['Small', 'Medium', 'Large', '2XLarge'] },
      { key: 'image', label: 'Build Image', type: 'text', placeholder: 'e.g. aws/codebuild/standard:7.0' },
    ],
  },
  codecommit: { fields: BASIC_FIELDS, custom: [] },

  // ===================== OPENSHIFT / K8S =====================
  pod: {
    fields: ['label', 'port', 'networkAllowed', 'notes'],
    custom: [
      { key: 'image', label: 'Image', type: 'text', placeholder: 'e.g. nginx:latest' },
      { key: 'restartPolicy', label: 'Restart Policy', type: 'select', options: ['Always', 'OnFailure', 'Never'] },
      { key: 'cpu', label: 'CPU Request', type: 'text', placeholder: 'e.g. 250m' },
      { key: 'memory', label: 'Memory Request', type: 'text', placeholder: 'e.g. 256Mi' },
    ],
  },
  deployment: {
    fields: ['label', 'port', 'networkAllowed', 'notes'],
    custom: [
      { key: 'replicas', label: 'Replicas', type: 'number', placeholder: 'e.g. 3' },
      { key: 'strategy', label: 'Strategy', type: 'select', options: ['RollingUpdate', 'Recreate'] },
      { key: 'image', label: 'Image', type: 'text', placeholder: 'e.g. myapp:v1' },
    ],
  },
  deploymentConfig: {
    fields: ['label', 'port', 'networkAllowed', 'notes'],
    custom: [
      { key: 'replicas', label: 'Replicas', type: 'number', placeholder: 'e.g. 3' },
      { key: 'strategy', label: 'Strategy', type: 'select', options: ['Rolling', 'Recreate', 'Custom'] },
      { key: 'triggers', label: 'Triggers', type: 'select', options: ['ConfigChange', 'ImageChange', 'Both'] },
    ],
  },
  statefulset: {
    fields: ['label', 'port', 'networkAllowed', 'notes'],
    custom: [
      { key: 'replicas', label: 'Replicas', type: 'number', placeholder: 'e.g. 3' },
      { key: 'serviceName', label: 'Service Name', type: 'text', placeholder: 'e.g. my-svc' },
      { key: 'storageSize', label: 'Storage Size', type: 'text', placeholder: 'e.g. 10Gi' },
    ],
  },
  daemonset: {
    fields: ['label', 'port', 'networkAllowed', 'notes'],
    custom: [
      { key: 'image', label: 'Image', type: 'text', placeholder: 'e.g. fluentd:latest' },
      { key: 'updateStrategy', label: 'Update Strategy', type: 'select', options: ['RollingUpdate', 'OnDelete'] },
    ],
  },
  replicaset: {
    fields: ['label', 'port', 'networkAllowed', 'notes'],
    custom: [
      { key: 'replicas', label: 'Replicas', type: 'number', placeholder: 'e.g. 3' },
    ],
  },
  job: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'completions', label: 'Completions', type: 'number', placeholder: 'e.g. 1' },
      { key: 'parallelism', label: 'Parallelism', type: 'number', placeholder: 'e.g. 1' },
      { key: 'backoffLimit', label: 'Backoff Limit', type: 'number', placeholder: 'e.g. 6' },
    ],
  },
  cronjob: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'schedule', label: 'Schedule', type: 'text', placeholder: 'e.g. */5 * * * *' },
      { key: 'concurrencyPolicy', label: 'Concurrency Policy', type: 'select', options: ['Allow', 'Forbid', 'Replace'] },
      { key: 'suspend', label: 'Suspended', type: 'select', options: ['No', 'Yes'] },
    ],
  },
  service: {
    fields: ['label', 'port', 'protocol', 'networkAllowed', 'notes'],
    custom: [
      { key: 'serviceType', label: 'Service Type', type: 'select', options: ['ClusterIP', 'NodePort', 'LoadBalancer', 'ExternalName'] },
      { key: 'targetPort', label: 'Target Port', type: 'text', placeholder: 'e.g. 8080' },
      { key: 'selector', label: 'Selector', type: 'text', placeholder: 'e.g. app=myapp' },
    ],
  },
  route: {
    fields: ['label', 'port', 'networkAllowed', 'notes'],
    custom: [
      { key: 'host', label: 'Hostname', type: 'text', placeholder: 'e.g. app.example.com' },
      { key: 'tls', label: 'TLS Termination', type: 'select', options: ['None', 'Edge', 'Passthrough', 'Re-encrypt'] },
      { key: 'path', label: 'Path', type: 'text', placeholder: 'e.g. /' },
    ],
  },
  ingress: {
    fields: ['label', 'port', 'networkAllowed', 'notes'],
    custom: [
      { key: 'ingressClass', label: 'Ingress Class', type: 'select', options: ['nginx', 'haproxy', 'traefik', 'istio'] },
      { key: 'host', label: 'Host', type: 'text', placeholder: 'e.g. app.example.com' },
      { key: 'tls', label: 'TLS', type: 'select', options: ['Yes', 'No'] },
    ],
  },
  networkPolicy: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'policyType', label: 'Policy Type', type: 'select', options: ['Ingress', 'Egress', 'Both'] },
      { key: 'podSelector', label: 'Pod Selector', type: 'text', placeholder: 'e.g. app=myapp' },
    ],
  },
  egressIP: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'egressIP', label: 'Egress IP', type: 'text', placeholder: 'e.g. 10.0.0.100' },
      { key: 'namespace', label: 'Namespace', type: 'text', placeholder: 'e.g. my-project' },
    ],
  },
  configmap: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'namespace', label: 'Namespace', type: 'text', placeholder: 'e.g. default' },
      { key: 'dataKeys', label: 'Data Keys', type: 'text', placeholder: 'e.g. config.yaml, app.properties' },
    ],
  },
  secret: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'secretType', label: 'Type', type: 'select', options: ['Opaque', 'TLS', 'DockerConfig', 'ServiceAccountToken', 'BasicAuth'] },
      { key: 'namespace', label: 'Namespace', type: 'text', placeholder: 'e.g. default' },
    ],
  },
  pvc: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'accessMode', label: 'Access Mode', type: 'select', options: ['ReadWriteOnce', 'ReadOnlyMany', 'ReadWriteMany'] },
      { key: 'storageSize', label: 'Storage Size', type: 'text', placeholder: 'e.g. 10Gi' },
      { key: 'storageClass', label: 'Storage Class', type: 'text', placeholder: 'e.g. gp2' },
    ],
  },
  pv: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'capacity', label: 'Capacity', type: 'text', placeholder: 'e.g. 100Gi' },
      { key: 'reclaimPolicy', label: 'Reclaim Policy', type: 'select', options: ['Retain', 'Delete', 'Recycle'] },
      { key: 'accessMode', label: 'Access Mode', type: 'select', options: ['ReadWriteOnce', 'ReadOnlyMany', 'ReadWriteMany'] },
    ],
  },
  storageClass: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'provisioner', label: 'Provisioner', type: 'text', placeholder: 'e.g. kubernetes.io/aws-ebs' },
      { key: 'reclaimPolicy', label: 'Reclaim Policy', type: 'select', options: ['Delete', 'Retain'] },
      { key: 'volumeBindingMode', label: 'Binding Mode', type: 'select', options: ['Immediate', 'WaitForFirstConsumer'] },
    ],
  },
  hpa: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'minReplicas', label: 'Min Replicas', type: 'number', placeholder: 'e.g. 1' },
      { key: 'maxReplicas', label: 'Max Replicas', type: 'number', placeholder: 'e.g. 10' },
      { key: 'targetCPU', label: 'Target CPU %', type: 'number', placeholder: 'e.g. 80' },
      { key: 'targetMemory', label: 'Target Memory %', type: 'number', placeholder: 'e.g. 80' },
    ],
  },
  vpa: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'updateMode', label: 'Update Mode', type: 'select', options: ['Off', 'Initial', 'Recreate', 'Auto'] },
    ],
  },
  namespace: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'namespaceName', label: 'Name', type: 'text', placeholder: 'e.g. production' },
    ],
  },
  project: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'displayName', label: 'Display Name', type: 'text', placeholder: 'e.g. My Project' },
      { key: 'requester', label: 'Requester', type: 'text', placeholder: 'e.g. admin' },
    ],
  },
  resourceQuota: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'cpuLimit', label: 'CPU Limit', type: 'text', placeholder: 'e.g. 10' },
      { key: 'memoryLimit', label: 'Memory Limit', type: 'text', placeholder: 'e.g. 32Gi' },
      { key: 'podLimit', label: 'Pod Limit', type: 'number', placeholder: 'e.g. 50' },
    ],
  },
  limitRange: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'defaultCPU', label: 'Default CPU', type: 'text', placeholder: 'e.g. 500m' },
      { key: 'defaultMemory', label: 'Default Memory', type: 'text', placeholder: 'e.g. 256Mi' },
    ],
  },
  buildConfig: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'strategy', label: 'Build Strategy', type: 'select', options: ['Source', 'Docker', 'Pipeline', 'Custom'] },
      { key: 'sourceRepo', label: 'Source Repo', type: 'text', placeholder: 'e.g. https://github.com/...' },
      { key: 'outputImage', label: 'Output Image', type: 'text', placeholder: 'e.g. myapp:latest' },
    ],
  },
  imageStream: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'tags', label: 'Tags', type: 'text', placeholder: 'e.g. latest, v1.0' },
      { key: 'importPolicy', label: 'Import Policy', type: 'select', options: ['Automatic', 'Manual'] },
    ],
  },
  template: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'parameters', label: 'Parameters', type: 'text', placeholder: 'e.g. APP_NAME, REPLICAS' },
    ],
  },
  serviceAccount: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'namespace', label: 'Namespace', type: 'text', placeholder: 'e.g. default' },
      { key: 'automountToken', label: 'Automount Token', type: 'select', options: ['Yes', 'No'] },
    ],
  },
  role: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'scope', label: 'Scope', type: 'select', options: ['Namespaced (Role)', 'Cluster (ClusterRole)'] },
      { key: 'rules', label: 'Rules Summary', type: 'text', placeholder: 'e.g. pods: get,list,watch' },
    ],
  },
  roleBinding: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'scope', label: 'Scope', type: 'select', options: ['Namespaced', 'Cluster'] },
      { key: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. ServiceAccount:my-sa' },
      { key: 'roleRef', label: 'Role Ref', type: 'text', placeholder: 'e.g. my-role' },
    ],
  },
  scc: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'preset', label: 'Preset', type: 'select', options: ['restricted', 'anyuid', 'privileged', 'nonroot', 'hostaccess', 'hostnetwork'] },
      { key: 'runAsUser', label: 'Run As User', type: 'select', options: ['MustRunAsRange', 'MustRunAsNonRoot', 'RunAsAny'] },
    ],
  },
  operator: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'operatorName', label: 'Operator Name', type: 'text', placeholder: 'e.g. prometheus-operator' },
      { key: 'channel', label: 'Channel', type: 'text', placeholder: 'e.g. stable' },
    ],
  },
  csv: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'version', label: 'Version', type: 'text', placeholder: 'e.g. 1.0.0' },
      { key: 'phase', label: 'Phase', type: 'select', options: ['Succeeded', 'Pending', 'Failed', 'Installing'] },
    ],
  },
  subscription: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'source', label: 'Source', type: 'text', placeholder: 'e.g. redhat-operators' },
      { key: 'channel', label: 'Channel', type: 'text', placeholder: 'e.g. stable' },
      { key: 'installPlanApproval', label: 'Install Plan Approval', type: 'select', options: ['Automatic', 'Manual'] },
    ],
  },

  // ===================== GCP =====================
  computeEngine: {
    fields: ['label', 'port', 'networkAllowed', 'notes'],
    custom: [
      { key: 'machineType', label: 'Machine Type', type: 'text', placeholder: 'e.g. e2-medium' },
      { key: 'zone', label: 'Zone', type: 'text', placeholder: 'e.g. us-central1-a' },
    ],
  },
  cloudFunctions: {
    fields: ['label', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'runtime', label: 'Runtime', type: 'select', options: ['Node.js 20', 'Python 3.12', 'Go 1.22', 'Java 17', '.NET 8'] },
      { key: 'memoryMB', label: 'Memory (MB)', type: 'number', placeholder: 'e.g. 256' },
      { key: 'gen', label: 'Generation', type: 'select', options: ['1st Gen', '2nd Gen'] },
    ],
  },
  cloudRun: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'cpu', label: 'CPU', type: 'text', placeholder: 'e.g. 1' },
      { key: 'memory', label: 'Memory', type: 'text', placeholder: 'e.g. 512Mi' },
      { key: 'maxInstances', label: 'Max Instances', type: 'number', placeholder: 'e.g. 100' },
      { key: 'concurrency', label: 'Concurrency', type: 'number', placeholder: 'e.g. 80' },
    ],
  },
  gke: {
    fields: ['label', 'port', 'networkAllowed', 'notes'],
    custom: [
      { key: 'version', label: 'K8s Version', type: 'text', placeholder: 'e.g. 1.29' },
      { key: 'nodeCount', label: 'Node Count', type: 'number', placeholder: 'e.g. 3' },
      { key: 'machineType', label: 'Machine Type', type: 'text', placeholder: 'e.g. e2-standard-4' },
      { key: 'autopilot', label: 'Autopilot', type: 'select', options: ['Yes', 'No'] },
    ],
  },
  appEngine: {
    fields: ['label', 'port', 'networkAllowed', 'notes'],
    custom: [
      { key: 'env', label: 'Environment', type: 'select', options: ['Standard', 'Flexible'] },
      { key: 'runtime', label: 'Runtime', type: 'select', options: ['Node.js', 'Python', 'Java', 'Go', 'PHP', 'Ruby'] },
    ],
  },
  cloudStorage: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'storageClass', label: 'Storage Class', type: 'select', options: ['Standard', 'Nearline', 'Coldline', 'Archive'] },
      { key: 'location', label: 'Location', type: 'select', options: ['Multi-region', 'Dual-region', 'Region'] },
    ],
  },
  persistentDisk: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'diskType', label: 'Disk Type', type: 'select', options: ['pd-standard', 'pd-balanced', 'pd-ssd', 'pd-extreme'] },
      { key: 'sizeGB', label: 'Size (GB)', type: 'number', placeholder: 'e.g. 100' },
    ],
  },
  filestore: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'tier', label: 'Tier', type: 'select', options: ['Basic HDD', 'Basic SSD', 'High Scale SSD', 'Enterprise'] },
      { key: 'capacityTB', label: 'Capacity (TB)', type: 'number', placeholder: 'e.g. 1' },
    ],
  },
  cloudSQL: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'engine', label: 'Engine', type: 'select', options: ['PostgreSQL', 'MySQL', 'SQL Server'] },
      { key: 'tier', label: 'Tier', type: 'text', placeholder: 'e.g. db-custom-4-16384' },
      { key: 'ha', label: 'High Availability', type: 'select', options: ['Yes', 'No'] },
    ],
  },
  cloudSpanner: {
    fields: ['label', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'nodes', label: 'Nodes', type: 'number', placeholder: 'e.g. 3' },
      { key: 'config', label: 'Config', type: 'select', options: ['Regional', 'Multi-region'] },
    ],
  },
  bigtable: {
    fields: ['label', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'nodes', label: 'Nodes', type: 'number', placeholder: 'e.g. 3' },
      { key: 'storageType', label: 'Storage Type', type: 'select', options: ['SSD', 'HDD'] },
    ],
  },
  firestore: {
    fields: ['label', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'mode', label: 'Mode', type: 'select', options: ['Native', 'Datastore'] },
      { key: 'location', label: 'Location', type: 'text', placeholder: 'e.g. us-central' },
    ],
  },
  memorystore: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'engine', label: 'Engine', type: 'select', options: ['Redis', 'Memcached'] },
      { key: 'tier', label: 'Tier', type: 'select', options: ['Basic', 'Standard'] },
      { key: 'sizeGB', label: 'Size (GB)', type: 'number', placeholder: 'e.g. 5' },
    ],
  },
  cloudLoadBalancing: {
    fields: NET_FIELDS,
    custom: [
      { key: 'type', label: 'Type', type: 'select', options: ['HTTP(S)', 'TCP/SSL', 'Internal', 'Network'] },
      { key: 'scheme', label: 'Scheme', type: 'select', options: ['External', 'Internal'] },
    ],
  },
  cloudCDN: { fields: ['label', 'latency', 'notes'], custom: [{ key: 'cacheMode', label: 'Cache Mode', type: 'select', options: ['USE_ORIGIN_HEADERS', 'FORCE_CACHE_ALL', 'CACHE_ALL_STATIC'] }] },
  cloudDNS: { fields: ['label', 'notes'], custom: [{ key: 'visibility', label: 'Visibility', type: 'select', options: ['Public', 'Private'] }] },
  cloudArmor: { fields: ['label', 'networkAllowed', 'notes'], custom: [{ key: 'ruleType', label: 'Rule Type', type: 'select', options: ['Allow', 'Deny', 'Rate Limit', 'Redirect'] }] },
  cloudVPN: { fields: BASIC_FIELDS, custom: [{ key: 'tunnelType', label: 'Tunnel Type', type: 'select', options: ['Classic VPN', 'HA VPN'] }] },
  pubsub: {
    fields: ['label', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'ackDeadline', label: 'Ack Deadline (s)', type: 'number', placeholder: 'e.g. 10' },
      { key: 'retention', label: 'Retention (days)', type: 'number', placeholder: 'e.g. 7' },
    ],
  },
  cloudTasks: { fields: ['label', 'latency', 'notes'], custom: [{ key: 'rateLimits', label: 'Max Rate (tasks/s)', type: 'number', placeholder: 'e.g. 500' }] },
  cloudScheduler: { fields: BASIC_FIELDS, custom: [{ key: 'schedule', label: 'Schedule (cron)', type: 'text', placeholder: 'e.g. 0 */6 * * *' }] },
  workflows: { fields: BASIC_FIELDS, custom: [{ key: 'region', label: 'Region', type: 'text', placeholder: 'e.g. us-central1' }] },
  bigquery: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'billingModel', label: 'Billing Model', type: 'select', options: ['On-Demand', 'Flat-Rate', 'Editions'] },
      { key: 'location', label: 'Location', type: 'text', placeholder: 'e.g. US' },
    ],
  },
  dataflow: { fields: BASIC_FIELDS, custom: [{ key: 'jobType', label: 'Job Type', type: 'select', options: ['Batch', 'Streaming'] }] },
  dataproc: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'clusterMode', label: 'Cluster Mode', type: 'select', options: ['Standard', 'Single Node', 'High Availability'] },
      { key: 'workers', label: 'Workers', type: 'number', placeholder: 'e.g. 3' },
    ],
  },
  vertexAI: { fields: BASIC_FIELDS, custom: [{ key: 'feature', label: 'Feature', type: 'select', options: ['Training', 'Prediction', 'Pipelines', 'Feature Store', 'Model Garden'] }] },
  visionAI: { fields: BASIC_FIELDS, custom: [{ key: 'feature', label: 'Feature', type: 'select', options: ['Label Detection', 'OCR', 'Face Detection', 'Object Detection'] }] },
  cloudIAM: { fields: BASIC_FIELDS, custom: [{ key: 'entityType', label: 'Entity Type', type: 'select', options: ['Service Account', 'User', 'Group', 'Domain'] }] },
  secretManager: { fields: BASIC_FIELDS, custom: [{ key: 'autoRotate', label: 'Auto Rotate', type: 'select', options: ['Yes', 'No'] }] },
  cloudKMS: { fields: BASIC_FIELDS, custom: [{ key: 'purpose', label: 'Purpose', type: 'select', options: ['ENCRYPT_DECRYPT', 'ASYMMETRIC_SIGN', 'ASYMMETRIC_DECRYPT', 'MAC'] }] },
  cloudMonitoring: { fields: BASIC_FIELDS, custom: [{ key: 'alertPolicies', label: 'Alert Policies', type: 'number', placeholder: 'e.g. 5' }] },
  cloudLogging: { fields: BASIC_FIELDS, custom: [{ key: 'retention', label: 'Retention (days)', type: 'number', placeholder: 'e.g. 30' }] },
  cloudBuild: { fields: BASIC_FIELDS, custom: [{ key: 'machineType', label: 'Machine Type', type: 'select', options: ['E2_MEDIUM', 'E2_HIGHCPU_8', 'E2_HIGHCPU_32'] }] },
  firebase: { fields: BASIC_FIELDS, custom: [{ key: 'plan', label: 'Plan', type: 'select', options: ['Spark (Free)', 'Blaze (Pay-as-you-go)'] }] },
  firebaseAuth: { fields: BASIC_FIELDS, custom: [{ key: 'providers', label: 'Providers', type: 'text', placeholder: 'e.g. Email, Google, GitHub' }] },
  firebaseHosting: { fields: BASIC_FIELDS, custom: [{ key: 'framework', label: 'Framework', type: 'select', options: ['None', 'Next.js', 'Angular', 'Flutter'] }] },

  // ===================== AZURE =====================
  azureVM: {
    fields: ['label', 'port', 'networkAllowed', 'notes'],
    custom: [
      { key: 'size', label: 'VM Size', type: 'text', placeholder: 'e.g. Standard_D4s_v3' },
      { key: 'os', label: 'OS', type: 'select', options: ['Linux', 'Windows'] },
    ],
  },
  azureFunctions: {
    fields: ['label', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'runtime', label: 'Runtime', type: 'select', options: ['Node.js', 'Python', '.NET', 'Java', 'PowerShell'] },
      { key: 'plan', label: 'Plan', type: 'select', options: ['Consumption', 'Premium', 'Dedicated'] },
    ],
  },
  aks: {
    fields: ['label', 'port', 'networkAllowed', 'notes'],
    custom: [
      { key: 'version', label: 'K8s Version', type: 'text', placeholder: 'e.g. 1.29' },
      { key: 'nodeCount', label: 'Node Count', type: 'number', placeholder: 'e.g. 3' },
      { key: 'vmSize', label: 'VM Size', type: 'text', placeholder: 'e.g. Standard_D4s_v3' },
    ],
  },
  appService: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'runtime', label: 'Runtime', type: 'select', options: ['Node.js', 'Python', '.NET', 'Java', 'PHP', 'Ruby'] },
      { key: 'sku', label: 'SKU', type: 'select', options: ['Free', 'Basic', 'Standard', 'Premium'] },
    ],
  },
  containerInstances: {
    fields: ['label', 'port', 'networkAllowed', 'notes'],
    custom: [
      { key: 'cpu', label: 'CPU (cores)', type: 'number', placeholder: 'e.g. 2' },
      { key: 'memoryGB', label: 'Memory (GB)', type: 'number', placeholder: 'e.g. 4' },
    ],
  },
  containerApps: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'cpu', label: 'CPU (cores)', type: 'text', placeholder: 'e.g. 0.5' },
      { key: 'memory', label: 'Memory', type: 'text', placeholder: 'e.g. 1Gi' },
      { key: 'minReplicas', label: 'Min Replicas', type: 'number', placeholder: 'e.g. 0' },
      { key: 'maxReplicas', label: 'Max Replicas', type: 'number', placeholder: 'e.g. 10' },
    ],
  },
  batchAzure: { fields: BASIC_FIELDS, custom: [{ key: 'poolSize', label: 'Pool Size', type: 'number', placeholder: 'e.g. 5' }] },
  blobStorage: {
    fields: BASIC_FIELDS,
    custom: [
      { key: 'accessTier', label: 'Access Tier', type: 'select', options: ['Hot', 'Cool', 'Cold', 'Archive'] },
      { key: 'redundancy', label: 'Redundancy', type: 'select', options: ['LRS', 'ZRS', 'GRS', 'RA-GRS'] },
    ],
  },
  azureFiles: { fields: BASIC_FIELDS, custom: [{ key: 'tier', label: 'Tier', type: 'select', options: ['Premium', 'Transaction Optimized', 'Hot', 'Cool'] }] },
  diskStorage: { fields: BASIC_FIELDS, custom: [{ key: 'diskType', label: 'Disk Type', type: 'select', options: ['Premium SSD', 'Standard SSD', 'Standard HDD', 'Ultra Disk'] }, { key: 'sizeGB', label: 'Size (GB)', type: 'number', placeholder: 'e.g. 256' }] },
  dataLake: { fields: BASIC_FIELDS, custom: [{ key: 'tier', label: 'Tier', type: 'select', options: ['Hot', 'Cool', 'Archive'] }] },
  azureSQL: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'tier', label: 'Tier', type: 'select', options: ['Basic', 'Standard', 'Premium', 'Serverless', 'Hyperscale'] },
      { key: 'dtu', label: 'DTUs / vCores', type: 'text', placeholder: 'e.g. S3 or 4 vCores' },
    ],
  },
  cosmosDB: {
    fields: ['label', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'api', label: 'API', type: 'select', options: ['NoSQL', 'MongoDB', 'Cassandra', 'Gremlin', 'Table', 'PostgreSQL'] },
      { key: 'throughput', label: 'Throughput (RU/s)', type: 'number', placeholder: 'e.g. 400' },
      { key: 'consistency', label: 'Consistency', type: 'select', options: ['Strong', 'Bounded Staleness', 'Session', 'Consistent Prefix', 'Eventual'] },
    ],
  },
  azureCache: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'tier', label: 'Tier', type: 'select', options: ['Basic', 'Standard', 'Premium', 'Enterprise'] },
      { key: 'sizeGB', label: 'Size (GB)', type: 'number', placeholder: 'e.g. 6' },
    ],
  },
  azurePostgres: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'deploymentType', label: 'Deployment', type: 'select', options: ['Single Server', 'Flexible Server'] },
      { key: 'tier', label: 'Tier', type: 'select', options: ['Burstable', 'General Purpose', 'Memory Optimized'] },
    ],
  },
  azureMySQL: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'tier', label: 'Tier', type: 'select', options: ['Burstable', 'General Purpose', 'Memory Optimized'] },
    ],
  },
  azureLB: {
    fields: NET_FIELDS,
    custom: [
      { key: 'sku', label: 'SKU', type: 'select', options: ['Basic', 'Standard', 'Gateway'] },
      { key: 'type', label: 'Type', type: 'select', options: ['Public', 'Internal'] },
    ],
  },
  appGateway: {
    fields: NET_FIELDS,
    custom: [
      { key: 'tier', label: 'Tier', type: 'select', options: ['Standard V2', 'WAF V2'] },
      { key: 'capacity', label: 'Capacity', type: 'number', placeholder: 'e.g. 2' },
    ],
  },
  frontDoor: {
    fields: ['label', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'tier', label: 'Tier', type: 'select', options: ['Standard', 'Premium'] },
      { key: 'wafEnabled', label: 'WAF Enabled', type: 'select', options: ['Yes', 'No'] },
    ],
  },
  azureCDN: { fields: ['label', 'latency', 'notes'], custom: [{ key: 'sku', label: 'SKU', type: 'select', options: ['Standard Microsoft', 'Standard Akamai', 'Standard Verizon', 'Premium Verizon'] }] },
  azureDNS: { fields: ['label', 'notes'], custom: [{ key: 'zoneType', label: 'Zone Type', type: 'select', options: ['Public', 'Private'] }] },
  trafficManager: { fields: ['label', 'latency', 'notes'], custom: [{ key: 'routingMethod', label: 'Routing Method', type: 'select', options: ['Performance', 'Weighted', 'Priority', 'Geographic', 'Multivalue', 'Subnet'] }] },
  vnet: { fields: BASIC_FIELDS, custom: [{ key: 'addressSpace', label: 'Address Space', type: 'text', placeholder: 'e.g. 10.0.0.0/16' }, { key: 'subnets', label: 'Subnets', type: 'number', placeholder: 'e.g. 4' }] },
  expressRoute: { fields: BASIC_FIELDS, custom: [{ key: 'bandwidth', label: 'Bandwidth', type: 'select', options: ['50 Mbps', '100 Mbps', '1 Gbps', '10 Gbps'] }, { key: 'peering', label: 'Peering', type: 'select', options: ['Azure Private', 'Microsoft', 'Azure Public'] }] },
  serviceBus: {
    fields: ['label', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'tier', label: 'Tier', type: 'select', options: ['Basic', 'Standard', 'Premium'] },
      { key: 'entityType', label: 'Entity Type', type: 'select', options: ['Queue', 'Topic'] },
    ],
  },
  eventHub: {
    fields: ['label', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'tier', label: 'Tier', type: 'select', options: ['Basic', 'Standard', 'Premium', 'Dedicated'] },
      { key: 'partitions', label: 'Partitions', type: 'number', placeholder: 'e.g. 4' },
      { key: 'throughputUnits', label: 'Throughput Units', type: 'number', placeholder: 'e.g. 1' },
    ],
  },
  eventGrid: { fields: ['label', 'latency', 'notes'], custom: [{ key: 'schema', label: 'Schema', type: 'select', options: ['Event Grid Schema', 'Cloud Events v1.0', 'Custom'] }] },
  queueStorage: { fields: ['label', 'latency', 'notes'], custom: [{ key: 'visibilityTimeout', label: 'Visibility Timeout (s)', type: 'number', placeholder: 'e.g. 30' }] },
  logicApps: { fields: ['label', 'latency', 'notes'], custom: [{ key: 'plan', label: 'Plan', type: 'select', options: ['Consumption', 'Standard'] }] },
  azureAD: { fields: BASIC_FIELDS, custom: [{ key: 'tier', label: 'Tier', type: 'select', options: ['Free', 'P1', 'P2'] }, { key: 'mfa', label: 'MFA', type: 'select', options: ['Enabled', 'Disabled'] }] },
  keyVault: { fields: BASIC_FIELDS, custom: [{ key: 'sku', label: 'SKU', type: 'select', options: ['Standard', 'Premium'] }, { key: 'softDelete', label: 'Soft Delete', type: 'select', options: ['Enabled', 'Disabled'] }] },
  azureWAF: { fields: ['label', 'networkAllowed', 'notes'], custom: [{ key: 'mode', label: 'Mode', type: 'select', options: ['Detection', 'Prevention'] }, { key: 'ruleSet', label: 'Rule Set', type: 'select', options: ['OWASP 3.2', 'OWASP 3.1', 'Bot Manager'] }] },
  ddosProtection: { fields: BASIC_FIELDS, custom: [{ key: 'tier', label: 'Tier', type: 'select', options: ['Basic', 'Standard'] }] },
  sentinel: { fields: BASIC_FIELDS, custom: [{ key: 'dataConnectors', label: 'Data Connectors', type: 'number', placeholder: 'e.g. 5' }] },
  synapse: { fields: BASIC_FIELDS, custom: [{ key: 'poolType', label: 'Pool Type', type: 'select', options: ['Dedicated SQL', 'Serverless SQL', 'Spark'] }] },
  databricks: { fields: BASIC_FIELDS, custom: [{ key: 'tier', label: 'Tier', type: 'select', options: ['Standard', 'Premium'] }, { key: 'clusterType', label: 'Cluster Type', type: 'select', options: ['All-Purpose', 'Job', 'SQL'] }] },
  streamAnalytics: { fields: BASIC_FIELDS, custom: [{ key: 'streamingUnits', label: 'Streaming Units', type: 'number', placeholder: 'e.g. 3' }] },
  azureML: { fields: BASIC_FIELDS, custom: [{ key: 'computeType', label: 'Compute Type', type: 'select', options: ['Compute Instance', 'Compute Cluster', 'Inference Cluster', 'Serverless'] }] },
  cognitiveServices: { fields: BASIC_FIELDS, custom: [{ key: 'service', label: 'Service', type: 'select', options: ['Vision', 'Speech', 'Language', 'Decision', 'OpenAI'] }] },
  azureOpenAI: { fields: BASIC_FIELDS, custom: [{ key: 'model', label: 'Model', type: 'select', options: ['GPT-4', 'GPT-4o', 'GPT-3.5', 'DALL-E', 'Whisper', 'Embeddings'] }, { key: 'deploymentType', label: 'Deployment', type: 'select', options: ['Standard', 'Provisioned'] }] },
  azureMonitor: { fields: BASIC_FIELDS, custom: [{ key: 'retention', label: 'Retention (days)', type: 'number', placeholder: 'e.g. 30' }] },
  appInsights: { fields: BASIC_FIELDS, custom: [{ key: 'samplingRate', label: 'Sampling Rate %', type: 'number', placeholder: 'e.g. 100' }] },
  logAnalytics: { fields: BASIC_FIELDS, custom: [{ key: 'retention', label: 'Retention (days)', type: 'number', placeholder: 'e.g. 30' }, { key: 'tier', label: 'Tier', type: 'select', options: ['Pay-as-you-go', 'Commitment Tier'] }] },
  azureDevOps: { fields: BASIC_FIELDS, custom: [{ key: 'service', label: 'Service', type: 'select', options: ['Repos', 'Pipelines', 'Boards', 'Artifacts', 'Test Plans'] }] },

  // ===================== DATABASE =====================
  postgresql: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'version', label: 'Version', type: 'select', options: ['16', '15', '14', '13', '12'] },
      { key: 'replicas', label: 'Replicas', type: 'number', placeholder: 'e.g. 2' },
      { key: 'maxConnections', label: 'Max Connections', type: 'number', placeholder: 'e.g. 100' },
    ],
  },
  mysql: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'version', label: 'Version', type: 'select', options: ['8.0', '5.7'] },
      { key: 'replicas', label: 'Replicas', type: 'number', placeholder: 'e.g. 2' },
    ],
  },
  mariadb: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'version', label: 'Version', type: 'select', options: ['11.x', '10.x'] },
      { key: 'replicas', label: 'Replicas', type: 'number', placeholder: 'e.g. 2' },
    ],
  },
  oracle: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'edition', label: 'Edition', type: 'select', options: ['Enterprise', 'Standard', 'Express'] },
    ],
  },
  sqlserver: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'edition', label: 'Edition', type: 'select', options: ['Enterprise', 'Standard', 'Developer', 'Express'] },
      { key: 'version', label: 'Version', type: 'select', options: ['2022', '2019', '2017'] },
    ],
  },
  mongodb: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'version', label: 'Version', type: 'select', options: ['7.0', '6.0', '5.0'] },
      { key: 'replicaSet', label: 'Replica Set', type: 'select', options: ['Yes', 'No'] },
      { key: 'sharded', label: 'Sharded', type: 'select', options: ['Yes', 'No'] },
    ],
  },
  cassandra: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'version', label: 'Version', type: 'select', options: ['4.1', '4.0', '3.11'] },
      { key: 'replicationFactor', label: 'Replication Factor', type: 'number', placeholder: 'e.g. 3' },
      { key: 'consistencyLevel', label: 'Consistency Level', type: 'select', options: ['ONE', 'QUORUM', 'ALL', 'LOCAL_QUORUM'] },
    ],
  },
  couchdb: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'clusterNodes', label: 'Cluster Nodes', type: 'number', placeholder: 'e.g. 3' },
    ],
  },
  neo4j: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'edition', label: 'Edition', type: 'select', options: ['Community', 'Enterprise', 'AuraDB'] },
    ],
  },
  influxdb: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'version', label: 'Version', type: 'select', options: ['3.x', '2.x', '1.x'] },
      { key: 'retention', label: 'Retention Policy', type: 'text', placeholder: 'e.g. 30d' },
    ],
  },
  clickhouse: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'shards', label: 'Shards', type: 'number', placeholder: 'e.g. 3' },
      { key: 'replicas', label: 'Replicas', type: 'number', placeholder: 'e.g. 2' },
    ],
  },
  cockroachdb: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'nodes', label: 'Nodes', type: 'number', placeholder: 'e.g. 3' },
      { key: 'deployment', label: 'Deployment', type: 'select', options: ['Self-hosted', 'Dedicated', 'Serverless'] },
    ],
  },
  tidb: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'tikvNodes', label: 'TiKV Nodes', type: 'number', placeholder: 'e.g. 3' },
    ],
  },
  vitess: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'shards', label: 'Shards', type: 'number', placeholder: 'e.g. 4' },
    ],
  },
  etcd: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'clusterSize', label: 'Cluster Size', type: 'select', options: ['1', '3', '5', '7'] },
    ],
  },
  consul: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'datacenter', label: 'Datacenter', type: 'text', placeholder: 'e.g. dc1' },
      { key: 'servers', label: 'Server Nodes', type: 'number', placeholder: 'e.g. 3' },
    ],
  },
  zookeeper: {
    fields: ['label', 'port', 'latency', 'networkAllowed', 'notes'],
    custom: [
      { key: 'ensemble', label: 'Ensemble Size', type: 'select', options: ['1', '3', '5', '7'] },
    ],
  },
};

export default componentProperties;
