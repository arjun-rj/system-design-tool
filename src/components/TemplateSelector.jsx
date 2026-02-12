import React from 'react';
import { awsEnterprise, azureEnterprise, gcpEnterprise, openshiftEnterprise } from './enterprise-templates';

const templates = [
  { id: 'blank', name: '-- Select Template --', group: '' },
  { id: 'basic-web', name: 'Basic Web App', group: 'Generic' },
  { id: 'microservices', name: 'Microservices', group: 'Generic' },
  { id: 'event-driven', name: 'Event-Driven', group: 'Generic' },
  { id: 'cqrs', name: 'CQRS Pattern', group: 'Generic' },
  { id: 'serverless-aws', name: 'Serverless', group: 'AWS' },
  { id: 'aws-3tier', name: '3-Tier Architecture', group: 'AWS' },
  { id: 'aws-data-lake', name: 'Data Lake', group: 'AWS' },
  { id: 'aws-ml-pipeline', name: 'ML Pipeline', group: 'AWS' },
  { id: 'aws-vpc-arch', name: 'VPC Architecture', group: 'AWS' },
  { id: 'gcp-serverless', name: 'Serverless', group: 'GCP' },
  { id: 'gcp-data-pipeline', name: 'Data Pipeline', group: 'GCP' },
  { id: 'azure-webapp', name: 'Web App', group: 'Azure' },
  { id: 'azure-microservices', name: 'Microservices', group: 'Azure' },
  { id: 'openshift-app', name: 'Application', group: 'OpenShift' },
  { id: 'k8s-microservices', name: 'Microservices', group: 'K8s' },
  { id: 'student-system', name: 'Student Management (Production)', group: 'Enterprise' },
  { id: 'aws-enterprise', name: 'E-Commerce Platform (AWS)', group: 'Enterprise' },
  { id: 'azure-enterprise', name: 'Healthcare System (Azure)', group: 'Enterprise' },
  { id: 'gcp-enterprise', name: 'Analytics Platform (GCP)', group: 'Enterprise' },
  { id: 'openshift-enterprise', name: 'Banking System (OpenShift)', group: 'Enterprise' },
];

// Spacing constants
const X_GAP = 200;
const Y_GAP = 150;

export const templateConfigs = {
  'basic-web': {
    nodes: [
      { id: '1', type: 'systemNode', position: { x: 0, y: 200 }, data: { label: 'Client', type: 'client', icon: '💻', color: '#4CAF50', isActive: false } },
      { id: '2', type: 'systemNode', position: { x: X_GAP, y: 200 }, data: { label: 'CDN', type: 'cdn', icon: '🌍', color: '#00BCD4', isActive: false } },
      { id: '3', type: 'systemNode', position: { x: X_GAP * 2, y: 200 }, data: { label: 'Load Balancer', type: 'loadBalancer', icon: '⚖️', color: '#2196F3', isActive: false } },
      { id: '4', type: 'systemNode', position: { x: X_GAP * 3, y: 100 }, data: { label: 'Web Server 1', type: 'webServer', icon: '🖥️', color: '#9C27B0', isActive: false } },
      { id: '5', type: 'systemNode', position: { x: X_GAP * 3, y: 300 }, data: { label: 'Web Server 2', type: 'webServer', icon: '🖥️', color: '#9C27B0', isActive: false } },
      { id: '6', type: 'systemNode', position: { x: X_GAP * 4, y: 200 }, data: { label: 'Cache', type: 'redis', icon: '🔴', color: '#DC382D', isActive: false } },
      { id: '7', type: 'systemNode', position: { x: X_GAP * 5, y: 200 }, data: { label: 'Database', type: 'postgresql', icon: '🐘', color: '#336791', isActive: false } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', style: { stroke: '#555' } },
      { id: 'e2-3', source: '2', target: '3', style: { stroke: '#555' } },
      { id: 'e3-4', source: '3', target: '4', style: { stroke: '#555' } },
      { id: 'e3-5', source: '3', target: '5', style: { stroke: '#555' } },
      { id: 'e4-6', source: '4', target: '6', style: { stroke: '#555' } },
      { id: 'e5-6', source: '5', target: '6', style: { stroke: '#555' } },
      { id: 'e6-7', source: '6', target: '7', style: { stroke: '#555' } },
    ],
  },
  'microservices': {
    nodes: [
      { id: '1', type: 'systemNode', position: { x: 0, y: 250 }, data: { label: 'Client', type: 'client', icon: '💻', color: '#4CAF50', isActive: false } },
      { id: '2', type: 'systemNode', position: { x: X_GAP, y: 250 }, data: { label: 'API Gateway', type: 'apiGateway', icon: '🚪', color: '#FF9800', isActive: false } },
      { id: '3', type: 'systemNode', position: { x: X_GAP * 2, y: 0 }, data: { label: 'User Service', type: 'microservice', icon: '👤', color: '#9C27B0', isActive: false } },
      { id: '4', type: 'systemNode', position: { x: X_GAP * 2, y: Y_GAP }, data: { label: 'Order Service', type: 'microservice', icon: '📦', color: '#9C27B0', isActive: false } },
      { id: '5', type: 'systemNode', position: { x: X_GAP * 2, y: Y_GAP * 2 }, data: { label: 'Product Service', type: 'microservice', icon: '🏷️', color: '#9C27B0', isActive: false } },
      { id: '6', type: 'systemNode', position: { x: X_GAP * 2, y: Y_GAP * 3 }, data: { label: 'Payment Service', type: 'microservice', icon: '💳', color: '#9C27B0', isActive: false } },
      { id: '7', type: 'systemNode', position: { x: X_GAP * 3, y: 0 }, data: { label: 'User DB', type: 'postgresql', icon: '🐘', color: '#336791', isActive: false } },
      { id: '8', type: 'systemNode', position: { x: X_GAP * 3, y: Y_GAP }, data: { label: 'Order DB', type: 'mongodb', icon: '🍃', color: '#47A248', isActive: false } },
      { id: '9', type: 'systemNode', position: { x: X_GAP * 3, y: Y_GAP * 2 }, data: { label: 'Product DB', type: 'elasticsearch', icon: '🔎', color: '#005571', isActive: false } },
      { id: '10', type: 'systemNode', position: { x: X_GAP * 3, y: Y_GAP * 3 }, data: { label: 'Message Queue', type: 'kafka', icon: '📨', color: '#231F20', isActive: false } },
      { id: '11', type: 'systemNode', position: { x: X_GAP, y: Y_GAP * 3 }, data: { label: 'Cache', type: 'redis', icon: '🔴', color: '#DC382D', isActive: false } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', style: { stroke: '#555' } },
      { id: 'e2-3', source: '2', target: '3', style: { stroke: '#555' } },
      { id: 'e2-4', source: '2', target: '4', style: { stroke: '#555' } },
      { id: 'e2-5', source: '2', target: '5', style: { stroke: '#555' } },
      { id: 'e2-6', source: '2', target: '6', style: { stroke: '#555' } },
      { id: 'e3-7', source: '3', target: '7', style: { stroke: '#555' } },
      { id: 'e4-8', source: '4', target: '8', style: { stroke: '#555' } },
      { id: 'e5-9', source: '5', target: '9', style: { stroke: '#555' } },
      { id: 'e4-10', source: '4', target: '10', style: { stroke: '#555' } },
      { id: 'e6-10', source: '6', target: '10', style: { stroke: '#555' } },
      { id: 'e2-11', source: '2', target: '11', style: { stroke: '#555' } },
    ],
  },
  'event-driven': {
    nodes: [
      { id: '1', type: 'systemNode', position: { x: 0, y: 200 }, data: { label: 'Producer', type: 'client', icon: '📤', color: '#4CAF50', isActive: false } },
      { id: '2', type: 'systemNode', position: { x: X_GAP, y: 200 }, data: { label: 'API Gateway', type: 'apiGateway', icon: '🚪', color: '#FF9800', isActive: false } },
      { id: '3', type: 'systemNode', position: { x: X_GAP * 2, y: 200 }, data: { label: 'Event Bus', type: 'kafka', icon: '📨', color: '#231F20', isActive: false } },
      { id: '4', type: 'systemNode', position: { x: X_GAP * 3, y: 0 }, data: { label: 'Consumer A', type: 'microservice', icon: '📥', color: '#9C27B0', isActive: false } },
      { id: '5', type: 'systemNode', position: { x: X_GAP * 3, y: 200 }, data: { label: 'Consumer B', type: 'microservice', icon: '📥', color: '#9C27B0', isActive: false } },
      { id: '6', type: 'systemNode', position: { x: X_GAP * 3, y: 400 }, data: { label: 'Consumer C', type: 'microservice', icon: '📥', color: '#9C27B0', isActive: false } },
      { id: '7', type: 'systemNode', position: { x: X_GAP * 4, y: 0 }, data: { label: 'DB A', type: 'postgresql', icon: '🐘', color: '#336791', isActive: false } },
      { id: '8', type: 'systemNode', position: { x: X_GAP * 4, y: 200 }, data: { label: 'Cache', type: 'redis', icon: '🔴', color: '#DC382D', isActive: false } },
      { id: '9', type: 'systemNode', position: { x: X_GAP * 4, y: 400 }, data: { label: 'Storage', type: 'storage', icon: '💾', color: '#8BC34A', isActive: false } },
      { id: '10', type: 'systemNode', position: { x: X_GAP * 2, y: 400 }, data: { label: 'Dead Letter Q', type: 'queue', icon: '💀', color: '#F44336', isActive: false } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', style: { stroke: '#555' } },
      { id: 'e2-3', source: '2', target: '3', style: { stroke: '#555' } },
      { id: 'e3-4', source: '3', target: '4', style: { stroke: '#555' } },
      { id: 'e3-5', source: '3', target: '5', style: { stroke: '#555' } },
      { id: 'e3-6', source: '3', target: '6', style: { stroke: '#555' } },
      { id: 'e4-7', source: '4', target: '7', style: { stroke: '#555' } },
      { id: 'e5-8', source: '5', target: '8', style: { stroke: '#555' } },
      { id: 'e6-9', source: '6', target: '9', style: { stroke: '#555' } },
      { id: 'e3-10', source: '3', target: '10', style: { stroke: '#555' } },
    ],
  },
  'cqrs': {
    nodes: [
      { id: '1', type: 'systemNode', position: { x: 0, y: 200 }, data: { label: 'Client', type: 'client', icon: '💻', color: '#4CAF50', isActive: false } },
      { id: '2', type: 'systemNode', position: { x: X_GAP, y: 200 }, data: { label: 'API Gateway', type: 'apiGateway', icon: '🚪', color: '#FF9800', isActive: false } },
      { id: '3', type: 'systemNode', position: { x: X_GAP * 2, y: 50 }, data: { label: 'Command Handler', type: 'microservice', icon: '✍️', color: '#E91E63', isActive: false } },
      { id: '4', type: 'systemNode', position: { x: X_GAP * 2, y: 350 }, data: { label: 'Query Handler', type: 'microservice', icon: '🔍', color: '#2196F3', isActive: false } },
      { id: '5', type: 'systemNode', position: { x: X_GAP * 3, y: 50 }, data: { label: 'Write DB', type: 'postgresql', icon: '🐘', color: '#336791', isActive: false } },
      { id: '6', type: 'systemNode', position: { x: X_GAP * 3, y: 200 }, data: { label: 'Event Store', type: 'kafka', icon: '📨', color: '#231F20', isActive: false } },
      { id: '7', type: 'systemNode', position: { x: X_GAP * 3, y: 350 }, data: { label: 'Read DB', type: 'elasticsearch', icon: '🔎', color: '#005571', isActive: false } },
      { id: '8', type: 'systemNode', position: { x: X_GAP * 4, y: 200 }, data: { label: 'Projector', type: 'worker', icon: '👷', color: '#FF9800', isActive: false } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', style: { stroke: '#555' } },
      { id: 'e2-3', source: '2', target: '3', style: { stroke: '#555' } },
      { id: 'e2-4', source: '2', target: '4', style: { stroke: '#555' } },
      { id: 'e3-5', source: '3', target: '5', style: { stroke: '#555' } },
      { id: 'e3-6', source: '3', target: '6', style: { stroke: '#555' } },
      { id: 'e4-7', source: '4', target: '7', style: { stroke: '#555' } },
      { id: 'e6-8', source: '6', target: '8', style: { stroke: '#555' } },
      { id: 'e8-7', source: '8', target: '7', style: { stroke: '#555' } },
    ],
  },
  'serverless-aws': {
    nodes: [
      { id: '1', type: 'systemNode', position: { x: 0, y: 200 }, data: { label: 'Client', type: 'client', icon: '💻', color: '#4CAF50', isActive: false } },
      { id: '2', type: 'systemNode', position: { x: X_GAP, y: 200 }, data: { label: 'CloudFront', type: 'cloudfront', icon: '☁️', color: '#8C4FFF', isActive: false } },
      { id: '3', type: 'systemNode', position: { x: X_GAP * 2, y: 200 }, data: { label: 'API Gateway', type: 'apigateway-aws', icon: '🚪', color: '#FF4F8B', isActive: false } },
      { id: '4', type: 'systemNode', position: { x: X_GAP * 3, y: 0 }, data: { label: 'Lambda Auth', type: 'lambda', icon: 'λ', color: '#FF9900', isActive: false } },
      { id: '5', type: 'systemNode', position: { x: X_GAP * 3, y: 200 }, data: { label: 'Lambda API', type: 'lambda', icon: 'λ', color: '#FF9900', isActive: false } },
      { id: '6', type: 'systemNode', position: { x: X_GAP * 3, y: 400 }, data: { label: 'Lambda Worker', type: 'lambda', icon: 'λ', color: '#FF9900', isActive: false } },
      { id: '7', type: 'systemNode', position: { x: X_GAP * 4, y: 0 }, data: { label: 'Cognito', type: 'cognito', icon: '🔐', color: '#DD344C', isActive: false } },
      { id: '8', type: 'systemNode', position: { x: X_GAP * 4, y: 200 }, data: { label: 'DynamoDB', type: 'dynamodb', icon: '📊', color: '#4053D6', isActive: false } },
      { id: '9', type: 'systemNode', position: { x: X_GAP * 4, y: 400 }, data: { label: 'SQS', type: 'sqs', icon: '📨', color: '#FF4F8B', isActive: false } },
      { id: '10', type: 'systemNode', position: { x: X_GAP * 5, y: 300 }, data: { label: 'S3', type: 's3', icon: '🪣', color: '#569A31', isActive: false } },
      { id: '11', type: 'systemNode', position: { x: X_GAP * 2, y: 400 }, data: { label: 'EventBridge', type: 'eventbridge', icon: '🌉', color: '#FF4F8B', isActive: false } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', style: { stroke: '#555' } },
      { id: 'e2-3', source: '2', target: '3', style: { stroke: '#555' } },
      { id: 'e3-4', source: '3', target: '4', style: { stroke: '#555' } },
      { id: 'e3-5', source: '3', target: '5', style: { stroke: '#555' } },
      { id: 'e4-7', source: '4', target: '7', style: { stroke: '#555' } },
      { id: 'e5-8', source: '5', target: '8', style: { stroke: '#555' } },
      { id: 'e5-9', source: '5', target: '9', style: { stroke: '#555' } },
      { id: 'e9-6', source: '9', target: '6', style: { stroke: '#555' } },
      { id: 'e6-10', source: '6', target: '10', style: { stroke: '#555' } },
      { id: 'e11-6', source: '11', target: '6', style: { stroke: '#555' } },
    ],
  },
  'aws-3tier': {
    nodes: [
      { id: '1', type: 'systemNode', position: { x: 0, y: 200 }, data: { label: 'Client', type: 'client', icon: '💻', color: '#4CAF50', isActive: false } },
      { id: '2', type: 'systemNode', position: { x: X_GAP, y: 200 }, data: { label: 'Route 53', type: 'route53', icon: '🌍', color: '#8C4FFF', isActive: false } },
      { id: '3', type: 'systemNode', position: { x: X_GAP * 2, y: 200 }, data: { label: 'CloudFront', type: 'cloudfront', icon: '☁️', color: '#8C4FFF', isActive: false } },
      { id: '4', type: 'systemNode', position: { x: X_GAP * 3, y: 200 }, data: { label: 'ALB', type: 'elb', icon: '⚖️', color: '#8C4FFF', isActive: false } },
      { id: '5', type: 'systemNode', position: { x: X_GAP * 4, y: 50 }, data: { label: 'EC2 Web 1', type: 'ec2', icon: '🟠', color: '#FF9900', isActive: false } },
      { id: '6', type: 'systemNode', position: { x: X_GAP * 4, y: 350 }, data: { label: 'EC2 Web 2', type: 'ec2', icon: '🟠', color: '#FF9900', isActive: false } },
      { id: '7', type: 'systemNode', position: { x: X_GAP * 5, y: 200 }, data: { label: 'ElastiCache', type: 'elasticache', icon: '⚡', color: '#3B48CC', isActive: false } },
      { id: '8', type: 'systemNode', position: { x: X_GAP * 6, y: 50 }, data: { label: 'RDS Primary', type: 'rds', icon: '🗃️', color: '#3B48CC', isActive: false } },
      { id: '9', type: 'systemNode', position: { x: X_GAP * 6, y: 350 }, data: { label: 'RDS Replica', type: 'rds', icon: '🗃️', color: '#3B48CC', isActive: false } },
      { id: '10', type: 'systemNode', position: { x: X_GAP * 2, y: 400 }, data: { label: 'S3 Static', type: 's3', icon: '🪣', color: '#569A31', isActive: false } },
      { id: '11', type: 'systemNode', position: { x: X_GAP * 3, y: 0 }, data: { label: 'WAF', type: 'waf-aws', icon: '🛡️', color: '#DD344C', isActive: false } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', style: { stroke: '#555' } },
      { id: 'e2-3', source: '2', target: '3', style: { stroke: '#555' } },
      { id: 'e3-4', source: '3', target: '4', style: { stroke: '#555' } },
      { id: 'e4-5', source: '4', target: '5', style: { stroke: '#555' } },
      { id: 'e4-6', source: '4', target: '6', style: { stroke: '#555' } },
      { id: 'e5-7', source: '5', target: '7', style: { stroke: '#555' } },
      { id: 'e6-7', source: '6', target: '7', style: { stroke: '#555' } },
      { id: 'e7-8', source: '7', target: '8', style: { stroke: '#555' } },
      { id: 'e8-9', source: '8', target: '9', style: { stroke: '#555' } },
      { id: 'e3-10', source: '3', target: '10', style: { stroke: '#555' } },
      { id: 'e11-4', source: '11', target: '4', style: { stroke: '#555' } },
    ],
  },
  'aws-data-lake': {
    nodes: [
      { id: '1', type: 'systemNode', position: { x: 0, y: Y_GAP }, data: { label: 'Data Sources', type: 'client', icon: '📊', color: '#4CAF50', isActive: false } },
      { id: '2', type: 'systemNode', position: { x: X_GAP, y: Y_GAP }, data: { label: 'Kinesis', type: 'kinesis', icon: '🌊', color: '#FF4F8B', isActive: false } },
      { id: '3', type: 'systemNode', position: { x: X_GAP * 2, y: Y_GAP }, data: { label: 'S3 Raw', type: 's3', icon: '🪣', color: '#569A31', isActive: false } },
      { id: '4', type: 'systemNode', position: { x: X_GAP * 3, y: Y_GAP }, data: { label: 'Glue ETL', type: 'glue', icon: '🧪', color: '#A166FF', isActive: false } },
      { id: '5', type: 'systemNode', position: { x: X_GAP * 4, y: Y_GAP }, data: { label: 'S3 Processed', type: 's3', icon: '🪣', color: '#569A31', isActive: false } },
      { id: '6', type: 'systemNode', position: { x: X_GAP * 5, y: 0 }, data: { label: 'Athena', type: 'athena', icon: '🦉', color: '#A166FF', isActive: false } },
      { id: '7', type: 'systemNode', position: { x: X_GAP * 5, y: Y_GAP * 2 }, data: { label: 'Redshift', type: 'redshift', icon: '📈', color: '#3B48CC', isActive: false } },
      { id: '8', type: 'systemNode', position: { x: X_GAP * 6, y: Y_GAP }, data: { label: 'QuickSight', type: 'quicksight', icon: '📊', color: '#A166FF', isActive: false } },
      { id: '9', type: 'systemNode', position: { x: X_GAP * 3, y: Y_GAP * 2 }, data: { label: 'Glue Catalog', type: 'glue', icon: '📚', color: '#A166FF', isActive: false } },
      { id: '10', type: 'systemNode', position: { x: X_GAP, y: Y_GAP * 2 }, data: { label: 'Lambda', type: 'lambda', icon: 'λ', color: '#FF9900', isActive: false } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', style: { stroke: '#555' } },
      { id: 'e2-3', source: '2', target: '3', style: { stroke: '#555' } },
      { id: 'e3-4', source: '3', target: '4', style: { stroke: '#555' } },
      { id: 'e4-5', source: '4', target: '5', style: { stroke: '#555' } },
      { id: 'e5-6', source: '5', target: '6', style: { stroke: '#555' } },
      { id: 'e5-7', source: '5', target: '7', style: { stroke: '#555' } },
      { id: 'e6-8', source: '6', target: '8', style: { stroke: '#555' } },
      { id: 'e7-8', source: '7', target: '8', style: { stroke: '#555' } },
      { id: 'e4-9', source: '4', target: '9', style: { stroke: '#555' } },
      { id: 'e1-10', source: '1', target: '10', style: { stroke: '#555' } },
      { id: 'e10-3', source: '10', target: '3', style: { stroke: '#555' } },
    ],
  },
  'aws-ml-pipeline': {
    nodes: [
      { id: '1', type: 'systemNode', position: { x: 0, y: 200 }, data: { label: 'Data Source', type: 's3', icon: '🪣', color: '#569A31', isActive: false } },
      { id: '2', type: 'systemNode', position: { x: X_GAP, y: 200 }, data: { label: 'SageMaker', type: 'sagemaker', icon: '🤖', color: '#A166FF', isActive: false } },
      { id: '3', type: 'systemNode', position: { x: X_GAP * 2, y: 50 }, data: { label: 'Training', type: 'ec2', icon: '🏋️', color: '#FF9900', isActive: false } },
      { id: '4', type: 'systemNode', position: { x: X_GAP * 2, y: 350 }, data: { label: 'Model Registry', type: 's3', icon: '📦', color: '#569A31', isActive: false } },
      { id: '5', type: 'systemNode', position: { x: X_GAP * 3, y: 200 }, data: { label: 'Endpoint', type: 'sagemaker', icon: '🎯', color: '#A166FF', isActive: false } },
      { id: '6', type: 'systemNode', position: { x: X_GAP * 4, y: 200 }, data: { label: 'API Gateway', type: 'apigateway-aws', icon: '🚪', color: '#FF4F8B', isActive: false } },
      { id: '7', type: 'systemNode', position: { x: X_GAP * 5, y: 200 }, data: { label: 'Application', type: 'lambda', icon: 'λ', color: '#FF9900', isActive: false } },
      { id: '8', type: 'systemNode', position: { x: X_GAP, y: 400 }, data: { label: 'Step Functions', type: 'stepFunctions', icon: '🔄', color: '#FF4F8B', isActive: false } },
      { id: '9', type: 'systemNode', position: { x: X_GAP * 3, y: 400 }, data: { label: 'CloudWatch', type: 'cloudwatch', icon: '📈', color: '#FF4F8B', isActive: false } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', style: { stroke: '#555' } },
      { id: 'e2-3', source: '2', target: '3', style: { stroke: '#555' } },
      { id: 'e3-4', source: '3', target: '4', style: { stroke: '#555' } },
      { id: 'e4-5', source: '4', target: '5', style: { stroke: '#555' } },
      { id: 'e5-6', source: '5', target: '6', style: { stroke: '#555' } },
      { id: 'e6-7', source: '6', target: '7', style: { stroke: '#555' } },
      { id: 'e8-2', source: '8', target: '2', style: { stroke: '#555' } },
      { id: 'e5-9', source: '5', target: '9', style: { stroke: '#555' } },
    ],
  },
  'aws-vpc-arch': {
    nodes: [
      // Internet / Client
      { id: 'v1', type: 'systemNode', position: { x: 0, y: 320 }, data: { label: 'Internet', type: 'client', icon: '🌐', color: '#4CAF50', isActive: false } },
      // VPC boundary
      { id: 'v-vpc', type: 'groupNode', position: { x: 200, y: 20 }, data: { label: 'VPC (10.0.0.0/16)', type: 'vpc', icon: '🔲', color: '#8C4FFF', isActive: false, subLabel: 'us-east-1', width: 780, height: 580 }, style: { width: 780, height: 580 }, zIndex: -1 },
      // Public Subnet AZ-a
      { id: 'v-pub-a', type: 'groupNode', position: { x: 220, y: 70 }, data: { label: 'Public Subnet AZ-a', type: 'subnet', icon: '🟢', color: '#4CAF50', isActive: false, width: 370, height: 130 }, style: { width: 370, height: 130 }, zIndex: 0 },
      // Public Subnet AZ-b
      { id: 'v-pub-b', type: 'groupNode', position: { x: 600, y: 70 }, data: { label: 'Public Subnet AZ-b', type: 'subnet', icon: '🟢', color: '#4CAF50', isActive: false, width: 370, height: 130 }, style: { width: 370, height: 130 }, zIndex: 0 },
      // Private Subnet AZ-a
      { id: 'v-priv-a', type: 'groupNode', position: { x: 220, y: 250 }, data: { label: 'Private Subnet AZ-a', type: 'subnet', icon: '🔴', color: '#F44336', isActive: false, width: 370, height: 320 }, style: { width: 370, height: 320 }, zIndex: 0 },
      // Private Subnet AZ-b
      { id: 'v-priv-b', type: 'groupNode', position: { x: 600, y: 250 }, data: { label: 'Private Subnet AZ-b', type: 'subnet', icon: '🔴', color: '#F44336', isActive: false, width: 370, height: 320 }, style: { width: 370, height: 320 }, zIndex: 0 },
      // Inside Public Subnet AZ-a
      { id: 'v2', type: 'systemNode', position: { x: 250, y: 130 }, data: { label: 'NAT Gateway', type: 'apiGateway', icon: '🔀', color: '#FF9800', isActive: false } },
      { id: 'v3', type: 'systemNode', position: { x: 430, y: 130 }, data: { label: 'ALB', type: 'elb', icon: '⚖️', color: '#8C4FFF', isActive: false } },
      // Inside Public Subnet AZ-b
      { id: 'v4', type: 'systemNode', position: { x: 630, y: 130 }, data: { label: 'Bastion Host', type: 'ec2', icon: '🟠', color: '#FF9900', isActive: false } },
      { id: 'v5', type: 'systemNode', position: { x: 810, y: 130 }, data: { label: 'WAF', type: 'waf-aws', icon: '🛡️', color: '#DD344C', isActive: false } },
      // Inside Private Subnet AZ-a
      { id: 'v6', type: 'systemNode', position: { x: 250, y: 310 }, data: { label: 'App Server 1', type: 'ec2', icon: '🟠', color: '#FF9900', isActive: false } },
      { id: 'v7', type: 'systemNode', position: { x: 430, y: 310 }, data: { label: 'App Server 2', type: 'ec2', icon: '🟠', color: '#FF9900', isActive: false } },
      { id: 'v10', type: 'systemNode', position: { x: 250, y: 400 }, data: { label: 'ElastiCache', type: 'elasticache', icon: '⚡', color: '#3B48CC', isActive: false } },
      { id: 'v11', type: 'systemNode', position: { x: 430, y: 400 }, data: { label: 'Lambda', type: 'lambda', icon: 'λ', color: '#FF9900', isActive: false } },
      // Inside Private Subnet AZ-b
      { id: 'v8', type: 'systemNode', position: { x: 630, y: 310 }, data: { label: 'RDS Primary', type: 'rds', icon: '🗃️', color: '#3B48CC', isActive: false } },
      { id: 'v9', type: 'systemNode', position: { x: 810, y: 310 }, data: { label: 'RDS Replica', type: 'rds', icon: '🗃️', color: '#3B48CC', isActive: false } },
      // Outside VPC
      { id: 'v12', type: 'systemNode', position: { x: 1040, y: 100 }, data: { label: 'Route 53', type: 'route53', icon: '🌍', color: '#8C4FFF', isActive: false } },
      { id: 'v13', type: 'systemNode', position: { x: 1040, y: 250 }, data: { label: 'CloudFront', type: 'cloudfront', icon: '☁️', color: '#8C4FFF', isActive: false } },
      { id: 'v14', type: 'systemNode', position: { x: 1040, y: 400 }, data: { label: 'S3', type: 's3', icon: '🪣', color: '#569A31', isActive: false } },
    ],
    edges: [
      { id: 've1', source: 'v1', target: 'v12', style: { stroke: '#555' } },
      { id: 've2', source: 'v12', target: 'v13', style: { stroke: '#555' } },
      { id: 've3', source: 'v13', target: 'v5', style: { stroke: '#555' } },
      { id: 've4', source: 'v5', target: 'v3', style: { stroke: '#555' } },
      { id: 've5', source: 'v3', target: 'v6', style: { stroke: '#555' } },
      { id: 've6', source: 'v3', target: 'v7', style: { stroke: '#555' } },
      { id: 've7', source: 'v6', target: 'v8', style: { stroke: '#555' } },
      { id: 've8', source: 'v7', target: 'v9', style: { stroke: '#555' } },
      { id: 've9', source: 'v8', target: 'v9', style: { stroke: '#555' } },
      { id: 've10', source: 'v6', target: 'v10', style: { stroke: '#555' } },
      { id: 've11', source: 'v7', target: 'v11', style: { stroke: '#555' } },
      { id: 've12', source: 'v2', target: 'v1', style: { stroke: '#555' } },
      { id: 've13', source: 'v4', target: 'v6', style: { stroke: '#555' } },
      { id: 've14', source: 'v13', target: 'v14', style: { stroke: '#555' } },
    ],
  },
  'gcp-serverless': {
    nodes: [
      { id: '1', type: 'systemNode', position: { x: 0, y: 200 }, data: { label: 'Client', type: 'client', icon: '💻', color: '#4CAF50', isActive: false } },
      { id: '2', type: 'systemNode', position: { x: X_GAP, y: 200 }, data: { label: 'Cloud CDN', type: 'cloudCDN', icon: '🌐', color: '#4285F4', isActive: false } },
      { id: '3', type: 'systemNode', position: { x: X_GAP * 2, y: 200 }, data: { label: 'Load Balancer', type: 'cloudLoadBalancing', icon: '⚖️', color: '#4285F4', isActive: false } },
      { id: '4', type: 'systemNode', position: { x: X_GAP * 3, y: 50 }, data: { label: 'Cloud Run', type: 'cloudRun', icon: '🏃', color: '#4285F4', isActive: false } },
      { id: '5', type: 'systemNode', position: { x: X_GAP * 3, y: 350 }, data: { label: 'Cloud Functions', type: 'cloudFunctions', icon: 'λ', color: '#4285F4', isActive: false } },
      { id: '6', type: 'systemNode', position: { x: X_GAP * 4, y: 50 }, data: { label: 'Firestore', type: 'firestore', icon: '🔥', color: '#FFCA28', isActive: false } },
      { id: '7', type: 'systemNode', position: { x: X_GAP * 4, y: 200 }, data: { label: 'Cloud Storage', type: 'cloudStorage', icon: '🪣', color: '#4285F4', isActive: false } },
      { id: '8', type: 'systemNode', position: { x: X_GAP * 4, y: 350 }, data: { label: 'Pub/Sub', type: 'pubsub', icon: '📬', color: '#4285F4', isActive: false } },
      { id: '9', type: 'systemNode', position: { x: X_GAP * 2, y: 400 }, data: { label: 'Firebase Auth', type: 'firebaseAuth', icon: '🔐', color: '#FFCA28', isActive: false } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', style: { stroke: '#555' } },
      { id: 'e2-3', source: '2', target: '3', style: { stroke: '#555' } },
      { id: 'e3-4', source: '3', target: '4', style: { stroke: '#555' } },
      { id: 'e3-5', source: '3', target: '5', style: { stroke: '#555' } },
      { id: 'e4-6', source: '4', target: '6', style: { stroke: '#555' } },
      { id: 'e4-7', source: '4', target: '7', style: { stroke: '#555' } },
      { id: 'e5-8', source: '5', target: '8', style: { stroke: '#555' } },
      { id: 'e9-3', source: '9', target: '3', style: { stroke: '#555' } },
    ],
  },
  'gcp-data-pipeline': {
    nodes: [
      { id: '1', type: 'systemNode', position: { x: 0, y: 200 }, data: { label: 'Data Sources', type: 'client', icon: '📊', color: '#4CAF50', isActive: false } },
      { id: '2', type: 'systemNode', position: { x: X_GAP, y: 200 }, data: { label: 'Pub/Sub', type: 'pubsub', icon: '📬', color: '#4285F4', isActive: false } },
      { id: '3', type: 'systemNode', position: { x: X_GAP * 2, y: 200 }, data: { label: 'Dataflow', type: 'dataflow', icon: '🌊', color: '#4285F4', isActive: false } },
      { id: '4', type: 'systemNode', position: { x: X_GAP * 3, y: 50 }, data: { label: 'BigQuery', type: 'bigquery', icon: '📈', color: '#4285F4', isActive: false } },
      { id: '5', type: 'systemNode', position: { x: X_GAP * 3, y: 350 }, data: { label: 'Cloud Storage', type: 'cloudStorage', icon: '🪣', color: '#4285F4', isActive: false } },
      { id: '6', type: 'systemNode', position: { x: X_GAP * 4, y: 200 }, data: { label: 'Vertex AI', type: 'vertexAI', icon: '🤖', color: '#4285F4', isActive: false } },
      { id: '7', type: 'systemNode', position: { x: X_GAP * 5, y: 200 }, data: { label: 'Cloud Run', type: 'cloudRun', icon: '🏃', color: '#4285F4', isActive: false } },
      { id: '8', type: 'systemNode', position: { x: X_GAP * 2, y: 400 }, data: { label: 'Cloud Scheduler', type: 'cloudScheduler', icon: '⏰', color: '#4285F4', isActive: false } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', style: { stroke: '#555' } },
      { id: 'e2-3', source: '2', target: '3', style: { stroke: '#555' } },
      { id: 'e3-4', source: '3', target: '4', style: { stroke: '#555' } },
      { id: 'e3-5', source: '3', target: '5', style: { stroke: '#555' } },
      { id: 'e4-6', source: '4', target: '6', style: { stroke: '#555' } },
      { id: 'e6-7', source: '6', target: '7', style: { stroke: '#555' } },
      { id: 'e8-3', source: '8', target: '3', style: { stroke: '#555' } },
    ],
  },
  'azure-webapp': {
    nodes: [
      { id: '1', type: 'systemNode', position: { x: 0, y: 200 }, data: { label: 'Client', type: 'client', icon: '💻', color: '#4CAF50', isActive: false } },
      { id: '2', type: 'systemNode', position: { x: X_GAP, y: 200 }, data: { label: 'Front Door', type: 'frontDoor', icon: '🚪', color: '#0078D4', isActive: false } },
      { id: '3', type: 'systemNode', position: { x: X_GAP * 2, y: 200 }, data: { label: 'App Gateway', type: 'appGateway', icon: '🚪', color: '#0078D4', isActive: false } },
      { id: '4', type: 'systemNode', position: { x: X_GAP * 3, y: 50 }, data: { label: 'App Service 1', type: 'appService', icon: '🌐', color: '#0078D4', isActive: false } },
      { id: '5', type: 'systemNode', position: { x: X_GAP * 3, y: 350 }, data: { label: 'App Service 2', type: 'appService', icon: '🌐', color: '#0078D4', isActive: false } },
      { id: '6', type: 'systemNode', position: { x: X_GAP * 4, y: 200 }, data: { label: 'Azure Cache', type: 'azureCache', icon: '⚡', color: '#0078D4', isActive: false } },
      { id: '7', type: 'systemNode', position: { x: X_GAP * 5, y: 200 }, data: { label: 'Azure SQL', type: 'azureSQL', icon: '🗃️', color: '#0078D4', isActive: false } },
      { id: '8', type: 'systemNode', position: { x: X_GAP * 2, y: 400 }, data: { label: 'Azure AD', type: 'azureAD', icon: '👤', color: '#0078D4', isActive: false } },
      { id: '9', type: 'systemNode', position: { x: X_GAP * 4, y: 400 }, data: { label: 'Blob Storage', type: 'blobStorage', icon: '🪣', color: '#0078D4', isActive: false } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', style: { stroke: '#555' } },
      { id: 'e2-3', source: '2', target: '3', style: { stroke: '#555' } },
      { id: 'e3-4', source: '3', target: '4', style: { stroke: '#555' } },
      { id: 'e3-5', source: '3', target: '5', style: { stroke: '#555' } },
      { id: 'e4-6', source: '4', target: '6', style: { stroke: '#555' } },
      { id: 'e5-6', source: '5', target: '6', style: { stroke: '#555' } },
      { id: 'e6-7', source: '6', target: '7', style: { stroke: '#555' } },
      { id: 'e8-3', source: '8', target: '3', style: { stroke: '#555' } },
      { id: 'e4-9', source: '4', target: '9', style: { stroke: '#555' } },
    ],
  },
  'azure-microservices': {
    nodes: [
      { id: '1', type: 'systemNode', position: { x: 0, y: 250 }, data: { label: 'Client', type: 'client', icon: '💻', color: '#4CAF50', isActive: false } },
      { id: '2', type: 'systemNode', position: { x: X_GAP, y: 250 }, data: { label: 'Front Door', type: 'frontDoor', icon: '🚪', color: '#0078D4', isActive: false } },
      { id: '3', type: 'groupNode', position: { x: X_GAP * 2 - 20, y: 30 }, data: { label: 'AKS Cluster', type: 'aks', icon: '☸️', color: '#0078D4', isActive: false, subLabel: 'Kubernetes', width: 440, height: 480 }, style: { width: 440, height: 480 }, zIndex: -1 },
      { id: '4', type: 'systemNode', position: { x: X_GAP * 2 + 20, y: 100 }, data: { label: 'Service A', type: 'containerApps', icon: '📦', color: '#0078D4', isActive: false } },
      { id: '5', type: 'systemNode', position: { x: X_GAP * 2 + 20, y: 250 }, data: { label: 'Service B', type: 'containerApps', icon: '📦', color: '#0078D4', isActive: false } },
      { id: '6', type: 'systemNode', position: { x: X_GAP * 2 + 20, y: 400 }, data: { label: 'Service C', type: 'containerApps', icon: '📦', color: '#0078D4', isActive: false } },
      { id: '7', type: 'systemNode', position: { x: X_GAP * 4, y: 100 }, data: { label: 'Cosmos DB', type: 'cosmosDB', icon: '🌌', color: '#0078D4', isActive: false } },
      { id: '8', type: 'systemNode', position: { x: X_GAP * 4, y: 250 }, data: { label: 'Service Bus', type: 'serviceBus', icon: '🚌', color: '#0078D4', isActive: false } },
      { id: '9', type: 'systemNode', position: { x: X_GAP * 4, y: 400 }, data: { label: 'Azure SQL', type: 'azureSQL', icon: '🗃️', color: '#0078D4', isActive: false } },
      { id: '10', type: 'systemNode', position: { x: X_GAP * 2 + 20, y: 530 }, data: { label: 'Key Vault', type: 'keyVault', icon: '🔑', color: '#0078D4', isActive: false } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', style: { stroke: '#555' } },
      { id: 'e2-3', source: '2', target: '3', style: { stroke: '#555' } },
      { id: 'e3-4', source: '3', target: '4', style: { stroke: '#555' } },
      { id: 'e3-5', source: '3', target: '5', style: { stroke: '#555' } },
      { id: 'e3-6', source: '3', target: '6', style: { stroke: '#555' } },
      { id: 'e4-7', source: '4', target: '7', style: { stroke: '#555' } },
      { id: 'e5-8', source: '5', target: '8', style: { stroke: '#555' } },
      { id: 'e6-9', source: '6', target: '9', style: { stroke: '#555' } },
      { id: 'e10-3', source: '10', target: '3', style: { stroke: '#555' } },
    ],
  },
  'openshift-app': {
    nodes: [
      { id: '1', type: 'systemNode', position: { x: 0, y: 200 }, data: { label: 'Client', type: 'client', icon: '💻', color: '#4CAF50', isActive: false } },
      { id: '2', type: 'systemNode', position: { x: X_GAP, y: 200 }, data: { label: 'Route', type: 'route', icon: '🛤️', color: '#DB212E', isActive: false } },
      { id: '3', type: 'systemNode', position: { x: X_GAP * 2, y: 200 }, data: { label: 'Service', type: 'service', icon: '🔗', color: '#DB212E', isActive: false } },
      { id: '4', type: 'systemNode', position: { x: X_GAP * 3, y: 0 }, data: { label: 'Pod 1', type: 'pod', icon: '📦', color: '#EE0000', isActive: false } },
      { id: '5', type: 'systemNode', position: { x: X_GAP * 3, y: 200 }, data: { label: 'Pod 2', type: 'pod', icon: '📦', color: '#EE0000', isActive: false } },
      { id: '6', type: 'systemNode', position: { x: X_GAP * 3, y: 400 }, data: { label: 'Pod 3', type: 'pod', icon: '📦', color: '#EE0000', isActive: false } },
      { id: '7', type: 'systemNode', position: { x: X_GAP * 2, y: 400 }, data: { label: 'ConfigMap', type: 'configmap', icon: '📋', color: '#326CE5', isActive: false } },
      { id: '8', type: 'systemNode', position: { x: X_GAP * 2, y: 0 }, data: { label: 'Secret', type: 'secret', icon: '🔒', color: '#326CE5', isActive: false } },
      { id: '9', type: 'systemNode', position: { x: X_GAP * 4, y: 200 }, data: { label: 'PVC', type: 'pvc', icon: '💿', color: '#326CE5', isActive: false } },
      { id: '10', type: 'systemNode', position: { x: X_GAP, y: 400 }, data: { label: 'HPA', type: 'hpa', icon: '📈', color: '#326CE5', isActive: false } },
      { id: '11', type: 'systemNode', position: { x: X_GAP * 4, y: 400 }, data: { label: 'ServiceAccount', type: 'serviceAccount', icon: '👤', color: '#326CE5', isActive: false } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', style: { stroke: '#555' } },
      { id: 'e2-3', source: '2', target: '3', style: { stroke: '#555' } },
      { id: 'e3-4', source: '3', target: '4', style: { stroke: '#555' } },
      { id: 'e3-5', source: '3', target: '5', style: { stroke: '#555' } },
      { id: 'e3-6', source: '3', target: '6', style: { stroke: '#555' } },
      { id: 'e7-4', source: '7', target: '4', style: { stroke: '#555' } },
      { id: 'e7-5', source: '7', target: '5', style: { stroke: '#555' } },
      { id: 'e8-4', source: '8', target: '4', style: { stroke: '#555' } },
      { id: 'e5-9', source: '5', target: '9', style: { stroke: '#555' } },
      { id: 'e10-3', source: '10', target: '3', style: { stroke: '#555' } },
      { id: 'e11-5', source: '11', target: '5', style: { stroke: '#555' } },
    ],
  },
  'k8s-microservices': {
    nodes: [
      { id: '1', type: 'systemNode', position: { x: 0, y: 200 }, data: { label: 'Client', type: 'client', icon: '💻', color: '#4CAF50', isActive: false } },
      { id: '2', type: 'systemNode', position: { x: X_GAP, y: 200 }, data: { label: 'Ingress', type: 'ingress', icon: '🚦', color: '#326CE5', isActive: false } },
      { id: '3', type: 'systemNode', position: { x: X_GAP * 2, y: 200 }, data: { label: 'API Gateway', type: 'service', icon: '🚪', color: '#DB212E', isActive: false } },
      { id: '4', type: 'systemNode', position: { x: X_GAP * 3, y: 0 }, data: { label: 'User Svc', type: 'deployment', icon: '👤', color: '#EE0000', isActive: false } },
      { id: '5', type: 'systemNode', position: { x: X_GAP * 3, y: 200 }, data: { label: 'Order Svc', type: 'deployment', icon: '📦', color: '#EE0000', isActive: false } },
      { id: '6', type: 'systemNode', position: { x: X_GAP * 3, y: 400 }, data: { label: 'Product Svc', type: 'deployment', icon: '🏷️', color: '#EE0000', isActive: false } },
      { id: '7', type: 'systemNode', position: { x: X_GAP * 4, y: 0 }, data: { label: 'User DB', type: 'statefulset', icon: '🗄️', color: '#EE0000', isActive: false } },
      { id: '8', type: 'systemNode', position: { x: X_GAP * 4, y: 200 }, data: { label: 'Order DB', type: 'statefulset', icon: '🗄️', color: '#EE0000', isActive: false } },
      { id: '9', type: 'systemNode', position: { x: X_GAP * 4, y: 400 }, data: { label: 'Redis', type: 'statefulset', icon: '🔴', color: '#EE0000', isActive: false } },
      { id: '10', type: 'systemNode', position: { x: X_GAP * 2, y: 400 }, data: { label: 'ConfigMap', type: 'configmap', icon: '📋', color: '#326CE5', isActive: false } },
      { id: '11', type: 'systemNode', position: { x: X_GAP, y: 400 }, data: { label: 'NetworkPolicy', type: 'networkPolicy', icon: '🔒', color: '#326CE5', isActive: false } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', style: { stroke: '#555' } },
      { id: 'e2-3', source: '2', target: '3', style: { stroke: '#555' } },
      { id: 'e3-4', source: '3', target: '4', style: { stroke: '#555' } },
      { id: 'e3-5', source: '3', target: '5', style: { stroke: '#555' } },
      { id: 'e3-6', source: '3', target: '6', style: { stroke: '#555' } },
      { id: 'e4-7', source: '4', target: '7', style: { stroke: '#555' } },
      { id: 'e5-8', source: '5', target: '8', style: { stroke: '#555' } },
      { id: 'e6-9', source: '6', target: '9', style: { stroke: '#555' } },
      { id: 'e10-4', source: '10', target: '4', style: { stroke: '#555' } },
      { id: 'e11-3', source: '11', target: '3', style: { stroke: '#555' } },
    ],
  },
  'student-system': {
    nodes: [
      // External users
      { id: 's1', type: 'systemNode', position: { x: 0, y: 200 }, data: { label: 'Student Browser', type: 'browser', icon: '🎓', color: '#2196F3', isActive: false } },
      { id: 's2', type: 'systemNode', position: { x: 0, y: 400 }, data: { label: 'Employee Portal', type: 'browser', icon: '👔', color: '#FF9800', isActive: false } },
      { id: 's3', type: 'systemNode', position: { x: 0, y: 600 }, data: { label: 'Admin Dashboard', type: 'browser', icon: '🔑', color: '#E91E63', isActive: false } },
      { id: 's4', type: 'systemNode', position: { x: 0, y: 0 }, data: { label: 'Mobile App', type: 'mobile', icon: '📱', color: '#4CAF50', isActive: false } },
      // DNS & CDN
      { id: 's5', type: 'systemNode', position: { x: 220, y: 50 }, data: { label: 'Route 53', type: 'route53', icon: '🌍', color: '#8C4FFF', isActive: false } },
      { id: 's6', type: 'systemNode', position: { x: 220, y: 250 }, data: { label: 'CloudFront CDN', type: 'cloudfront', icon: '☁️', color: '#8C4FFF', isActive: false } },
      { id: 's7', type: 'systemNode', position: { x: 220, y: 450 }, data: { label: 'WAF', type: 'waf-aws', icon: '🛡️', color: '#DD344C', isActive: false } },
      // VPC boundary — encompasses all 3 subnets
      { id: 's-vpc', type: 'groupNode', position: { x: 420, y: -20 }, data: { label: 'Production VPC (10.0.0.0/16)', type: 'vpc', icon: '🔲', color: '#8C4FFF', isActive: false, subLabel: 'us-east-1', width: 920, height: 820 }, style: { width: 920, height: 820 }, zIndex: -1 },
      // Public subnet — inside VPC
      { id: 's-pub', type: 'groupNode', position: { x: 440, y: 30 }, data: { label: 'Public Subnet (10.0.1.0/24)', type: 'subnet', icon: '🟢', color: '#4CAF50', isActive: false, width: 380, height: 140 }, style: { width: 380, height: 140 }, zIndex: 0 },
      // Private App subnet — inside VPC
      { id: 's-app', type: 'groupNode', position: { x: 440, y: 210 }, data: { label: 'Private App Subnet (10.0.2.0/24)', type: 'subnet', icon: '🔴', color: '#F44336', isActive: false, width: 880, height: 240 }, style: { width: 880, height: 240 }, zIndex: 0 },
      // Private DB subnet — inside VPC
      { id: 's-db', type: 'groupNode', position: { x: 440, y: 490 }, data: { label: 'Private DB Subnet (10.0.3.0/24)', type: 'subnet', icon: '🟣', color: '#9C27B0', isActive: false, width: 880, height: 260 }, style: { width: 880, height: 260 }, zIndex: 0 },
      // Public subnet components — inside pub subnet
      { id: 's8', type: 'systemNode', position: { x: 470, y: 80 }, data: { label: 'ALB', type: 'elb', icon: '⚖️', color: '#8C4FFF', isActive: false } },
      { id: 's9', type: 'systemNode', position: { x: 660, y: 80 }, data: { label: 'NAT Gateway', type: 'apiGateway', icon: '🔀', color: '#FF9800', isActive: false } },
      // App subnet components — microservices (inside app subnet)
      { id: 's10', type: 'systemNode', position: { x: 470, y: 260 }, data: { label: 'Auth Service', type: 'microservice', icon: '🔐', color: '#E91E63', isActive: false } },
      { id: 's11', type: 'systemNode', position: { x: 650, y: 260 }, data: { label: 'Student Service', type: 'microservice', icon: '🎓', color: '#2196F3', isActive: false } },
      { id: 's12', type: 'systemNode', position: { x: 830, y: 260 }, data: { label: 'Course Service', type: 'microservice', icon: '📚', color: '#9C27B0', isActive: false } },
      { id: 's13', type: 'systemNode', position: { x: 1010, y: 260 }, data: { label: 'Payment Service', type: 'microservice', icon: '💳', color: '#FF9800', isActive: false } },
      { id: 's14', type: 'systemNode', position: { x: 470, y: 360 }, data: { label: 'Notification Svc', type: 'microservice', icon: '🔔', color: '#FFC107', isActive: false } },
      { id: 's15', type: 'systemNode', position: { x: 650, y: 360 }, data: { label: 'Report Service', type: 'microservice', icon: '📊', color: '#607D8B', isActive: false } },
      { id: 's16', type: 'systemNode', position: { x: 830, y: 360 }, data: { label: 'File Service', type: 'microservice', icon: '📁', color: '#8BC34A', isActive: false } },
      { id: 's17', type: 'systemNode', position: { x: 1010, y: 360 }, data: { label: 'ElastiCache', type: 'elasticache', icon: '⚡', color: '#3B48CC', isActive: false } },
      // DB subnet components — inside db subnet
      { id: 's18', type: 'systemNode', position: { x: 470, y: 540 }, data: { label: 'RDS Primary', type: 'rds', icon: '🗃️', color: '#3B48CC', isActive: false } },
      { id: 's19', type: 'systemNode', position: { x: 650, y: 540 }, data: { label: 'RDS Replica', type: 'rds', icon: '🗃️', color: '#3B48CC', isActive: false } },
      { id: 's20', type: 'systemNode', position: { x: 830, y: 540 }, data: { label: 'DynamoDB', type: 'dynamodb', icon: '📊', color: '#4053D6', isActive: false } },
      { id: 's21', type: 'systemNode', position: { x: 1010, y: 540 }, data: { label: 'Elasticsearch', type: 'elasticsearch', icon: '🔎', color: '#005571', isActive: false } },
      { id: 's22', type: 'systemNode', position: { x: 470, y: 640 }, data: { label: 'SQS Queue', type: 'sqs', icon: '📨', color: '#FF4F8B', isActive: false } },
      { id: 's23', type: 'systemNode', position: { x: 650, y: 640 }, data: { label: 'SNS Topics', type: 'sns', icon: '📢', color: '#FF4F8B', isActive: false } },
      // Outside VPC services
      { id: 's24', type: 'systemNode', position: { x: 1400, y: 100 }, data: { label: 'S3 Documents', type: 's3', icon: '🪣', color: '#569A31', isActive: false } },
      { id: 's25', type: 'systemNode', position: { x: 1400, y: 300 }, data: { label: 'Cognito', type: 'cognito', icon: '🔐', color: '#DD344C', isActive: false } },
      { id: 's26', type: 'systemNode', position: { x: 1400, y: 500 }, data: { label: 'SES Email', type: 'ses', icon: '📧', color: '#FF9900', isActive: false } },
      { id: 's27', type: 'systemNode', position: { x: 1400, y: 700 }, data: { label: 'CloudWatch', type: 'cloudwatch', icon: '📈', color: '#FF4F8B', isActive: false } },
    ],
    edges: [
      // Users → DNS/CDN/WAF → ALB
      { id: 'se1', source: 's1', target: 's5', style: { stroke: '#555' } },
      { id: 'se2', source: 's2', target: 's5', style: { stroke: '#555' } },
      { id: 'se3', source: 's3', target: 's5', style: { stroke: '#555' } },
      { id: 'se4', source: 's4', target: 's5', style: { stroke: '#555' } },
      { id: 'se5', source: 's5', target: 's6', style: { stroke: '#555' } },
      { id: 'se6', source: 's6', target: 's7', style: { stroke: '#555' } },
      { id: 'se7', source: 's7', target: 's8', style: { stroke: '#555' } },
      // ALB → Services
      { id: 'se8', source: 's8', target: 's10', style: { stroke: '#555' } },
      { id: 'se9', source: 's8', target: 's11', style: { stroke: '#555' } },
      { id: 'se10', source: 's8', target: 's12', style: { stroke: '#555' } },
      { id: 'se11', source: 's8', target: 's13', style: { stroke: '#555' } },
      // Auth → Cognito
      { id: 'se12', source: 's10', target: 's25', style: { stroke: '#555' } },
      // Services → DB
      { id: 'se13', source: 's11', target: 's18', style: { stroke: '#555' } },
      { id: 'se14', source: 's12', target: 's18', style: { stroke: '#555' } },
      { id: 'se15', source: 's13', target: 's20', style: { stroke: '#555' } },
      // Services → Cache
      { id: 'se16', source: 's11', target: 's17', style: { stroke: '#555' } },
      { id: 'se17', source: 's12', target: 's17', style: { stroke: '#555' } },
      // RDS replication
      { id: 'se18', source: 's18', target: 's19', style: { stroke: '#555' } },
      // Report → Elasticsearch
      { id: 'se19', source: 's15', target: 's21', style: { stroke: '#555' } },
      { id: 'se20', source: 's15', target: 's19', style: { stroke: '#555' } },
      // File → S3
      { id: 'se21', source: 's16', target: 's24', style: { stroke: '#555' } },
      // Notification → SQS → SNS → SES
      { id: 'se22', source: 's14', target: 's22', style: { stroke: '#555' } },
      { id: 'se23', source: 's22', target: 's23', style: { stroke: '#555' } },
      { id: 'se24', source: 's23', target: 's26', style: { stroke: '#555' } },
      // Services → Notification
      { id: 'se25', source: 's13', target: 's14', style: { stroke: '#555' } },
      { id: 'se26', source: 's11', target: 's14', style: { stroke: '#555' } },
      // ALB → Report & File
      { id: 'se27', source: 's8', target: 's15', style: { stroke: '#555' } },
      { id: 'se28', source: 's8', target: 's16', style: { stroke: '#555' } },
      // CloudWatch monitoring
      { id: 'se29', source: 's10', target: 's27', style: { stroke: '#555' } },
      { id: 'se30', source: 's18', target: 's27', style: { stroke: '#555' } },
    ],
  },
  'aws-enterprise': awsEnterprise,
  'azure-enterprise': azureEnterprise,
  'gcp-enterprise': gcpEnterprise,
  'openshift-enterprise': openshiftEnterprise,
};

function TemplateSelector({ onSelectTemplate }) {
  const handleChange = (e) => {
    const templateId = e.target.value;
    if (templateId !== 'blank' && templateConfigs[templateId]) {
      onSelectTemplate(templateConfigs[templateId]);
    }
  };

  const groupedTemplates = templates.reduce((acc, t) => {
    if (!t.group) return acc;
    if (!acc[t.group]) acc[t.group] = [];
    acc[t.group].push(t);
    return acc;
  }, {});

  return (
    <div className="template-selector">
      <select onChange={handleChange} defaultValue="blank">
        <option value="blank">-- Select Template --</option>
        {Object.entries(groupedTemplates).map(([group, items]) => (
          <optgroup key={group} label={group}>
            {items.map((t) => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}

export default TemplateSelector;
