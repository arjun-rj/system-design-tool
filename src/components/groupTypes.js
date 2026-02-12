// Component types that should render as expandable group/boundary boxes
// These represent infrastructure boundaries that contain other components

const groupTypes = new Set([
  // AWS
  'vpc',
  'ecs',
  'eks',
  'subnet',
  // GCP
  'gke',
  // Azure
  'aks',
  'vnet',
  // K8s / OpenShift
  'namespace',
  'project',
]);

export default groupTypes;
