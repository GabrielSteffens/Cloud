import { Platform } from '../../types/platform';

export const cloudnet: Platform = {
  id: 'cloudnet-iot',
  name: 'Cloudnet / Cloudnet IoT',
  vendor: 'Cloudnet Networks',
  logoColor: '#8b5cf6',
  url: 'https://cloudnet.iot.com',
  tagline: 'Multi-Tenant Cloud IoT & High-Density Network Orchestration Platform',
  targetMarket: 'IoT Deployments, Smart Buildings, Managed Service Providers, Industrial Networks',
  ecosystem: ['Industrial Switches', 'Wi-Fi 6 APs', 'IoT Gateways', 'Environmental Sensors', 'Smart Power PDUs'],
  overallScore: 8.3,
  lastEvaluated: '2026-08-27',
  summary: 'Cloudnet / Cloudnet IoT is a feature-rich, high-density platform built to unify commercial networking (AP/Switch) and IoT infrastructure (sensors, PDUs, gateways) into a single multi-tenant pane of glass with strong API extensibility.',

  scores: {
    wireless: 8.4,
    switching: 8.8,
    security: 8.2,
    monitoring: 9.0,
    troubleshooting: 8.5,
    automation: 8.7,
    reporting: 8.1,
    integration: 8.9,
    ux: 8.0,
    scalability: 8.8
  },

  scoreExplanations: [
    { category: 'wireless', score: 8.4, rationale: 'Wi-Fi 6/6E radio control, 802.1X, custom captive portal, dynamic VLAN assignment, and RF channel interference map.' },
    { category: 'switching', score: 8.8, rationale: 'Deep switch port VLAN tagging, LACP, STP/RSTP/MSTP loop protection, LLDP neighbor discovery, and per-port PoE budget scheduling.' },
    { category: 'security', score: 8.2, rationale: 'MAC Authentication Bypass (MAB), 802.1X, ACL policies, rogue AP detection, and IoT device fingerprint isolation.' },
    { category: 'monitoring', score: 9.0, rationale: 'Exceptional real-time and historical telemetry for network devices AND IoT environment metrics (temp, humidity, power consumption).' },
    { category: 'troubleshooting', score: 8.5, rationale: 'Interactive topology view, packet capture relay, remote SSH tunnel, client association trace log, and port loop detect.' },
    { category: 'automation', score: 8.7, rationale: 'Robust ZTP template engine, bulk configuration push, scheduled firmware upgrades, and automated backup.' },
    { category: 'reporting', score: 8.1, rationale: 'Customizable automated reports covering network traffic, IoT sensor thresholds, and device availability stats.' },
    { category: 'integration', score: 8.9, rationale: 'Comprehensive REST API, MQTT broker integration for IoT data forwarding, and webhook notifications.' },
    { category: 'ux', score: 8.0, rationale: 'High information density interface with rich graphs; slightly steeper learning curve due to dual IoT/Network scope.' },
    { category: 'scalability', score: 8.8, rationale: 'Designed from the ground up for high-scale multi-tenant deployments and large-fleet IoT deployments.' }
  ],

  strengths: [
    { title: 'Unified Network & IoT Management', description: 'Manages both traditional networking hardware (APs, Switches) and smart IoT devices (sensors, gateways, smart PDUs) under one roof.', impact: 'High' },
    { title: 'Rich Open REST API & MQTT Export', description: 'Comprehensive developer REST API and MQTT message broker forwarding for custom building management system (BMS) integrations.', impact: 'High' },
    { title: 'Interactive Dynamic Topology Map', description: 'Automatically maps switch LLDP neighbors and wireless clients into a live drag-and-drop network topology graph.', impact: 'High' },
    { title: 'Granular IoT Device Isolation', description: 'Automated MAC fingerprinting to enforce isolated VLANs and strict ACLs on smart sensors and industrial endpoints.', impact: 'Medium' }
  ],

  weaknesses: [
    { title: 'Interface Complexity', description: 'The vast number of IoT and network submenus can feel dense for administrators who only need basic Wi-Fi.', impact: 'Medium' },
    { title: 'Mobile App Parity', description: 'Mobile app handles monitoring and alerts effectively but defers advanced switch port profile edits to the web dashboard.', impact: 'Low' }
  ],

  architecture: {
    deploymentModel: 'Hybrid Cloud SaaS or Private Cloud Kubernetes Deployment for On-Prem Enterprise',
    multiTenancy: 'Multi-Tenant Org Tree with fine-grained role-based access control (RBAC)',
    adoptionWorkflow: 'ZTP zero-touch adoption via cloud redirect, Serial Number claim, or QR batch scan',
    firmwareManagement: 'Canary update deployment by site batches with automatic health checks',
    apiSupport: 'Full REST API v1/v2 + OpenAPI Swagger specification + MQTT IoT Broker',
    backupRestore: 'Automated hourly cloud configuration backup with diff tool comparing past configs',
    remoteAccess: 'Integrated Web-SSH, Web-Telnet, and Web-HTTP proxy to local management pages'
  },

  licensing: {
    pricingType: 'Per-Device Annual Subscription with Tiered IoT Node Bundles',
    hardwareLock: 'Multi-org transfer allowed via admin portal unbind action',
    mspFeatures: 'Dedicated MSP Portal with co-branding, billing API, and tenant usage metrics',
    trialPeriod: '30-day full-featured sandbox environment available upon request',
    tierNotes: 'Cloudnet Core (Networking) vs Cloudnet IoT (Networking + Sensor & Gateway Telemetry)'
  },

  verdict: 'Cloudnet / Cloudnet IoT is a powerhouse platform for smart buildings, industrial setups, and tech-forward MSPs. Its ability to aggregate network switches, wireless APs, and environmental IoT sensors with open API access makes it uniquely capable.',

  features: [
    { id: 'cnet-1', category: 'Wireless', name: 'Wi-Fi 6/6E Radio & Channel Tuning', description: 'Radio frequency management for 2.4G, 5G, and 6GHz bands with auto-channel DFS avoidance.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Wireless → RF Management page.', screenPath: 'Network → Wireless → Radio Tuning' },
    { id: 'cnet-2', category: 'Wireless', name: 'Custom Captive Portal Engine', description: 'WYSIWYG splash page editor with social login, SMS gateway integration, and voucher printing.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Captive Portal Builder screen.', screenPath: 'Security → Captive Portal' },
    { id: 'cnet-3', category: 'Switching', name: 'Full Spanning Tree & LACP', description: 'STP/RSTP/MSTP loop prevention protocols and multi-port dynamic LACP trunking.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Switch → Spanning Tree & Port Channel config.', screenPath: 'Switching → Spanning Tree' },
    { id: 'cnet-4', category: 'Switching', name: 'Dynamic Topology Discovery', description: 'LLDP-based automatic topology graph rendering with link speed indicators.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Topology → Interactive Map.', screenPath: 'Monitoring → Topology' },
    { id: 'cnet-5', category: 'Security', name: '802.1X & MAB Authentication', description: 'Port-based 802.1X authentication and MAC Authentication Bypass for non-802.1X IoT devices.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Security → Access Control → 802.1X/MAB tab.', screenPath: 'Security → Access Control' },
    { id: 'cnet-6', category: 'Monitoring', name: 'IoT Environment Telemetry', description: 'Real-time monitoring of temperature, humidity, power draw, and gateway uptime alongside network stats.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: IoT Dashboard → Environmental Sensors tab.', screenPath: 'IoT → Telemetry' },
    { id: 'cnet-7', category: 'Troubleshooting', name: 'Remote Packet Capture Relay', description: 'Initiate packet capture on AP or switch port and stream/download PCAP directly.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Device → Tools → Packet Capture button.', screenPath: 'Device → Tools → PCAP' },
    { id: 'cnet-8', category: 'Operations & Automation', name: 'Open REST API & Swagger Specs', description: 'Full RESTful API access for programmatic provisioning, telemetry retrieval, and tenant creation.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Settings → API Keys & Swagger Documentation link.', screenPath: 'Settings → Developer API' },
    { id: 'cnet-9', category: 'Operations & Automation', name: 'MQTT Message Broker Forwarding', description: 'Stream real-time IoT sensor telemetry directly to external MQTT brokers (AWS IoT Core, Azure IoT Hub).', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Integration → MQTT Push Settings.', screenPath: 'Integrations → MQTT' }
  ],

  screenshots: [
    {
      id: 'cnet-shot-1',
      title: 'Cloudnet Unified IoT & Network Dashboard',
      category: 'Dashboard',
      section: 'Main Command Center',
      navigationPath: 'Cloudnet Portal → Global → Dashboard',
      imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      observedCapabilities: ['Combined Network & IoT status gauges', 'Live bandwidth telemetry', 'Environmental alert stream', 'Map location markers'],
      strength: 'Single pane of glass for both IT networking equipment and IoT sensor nodes.',
      weakness: 'Dense data display requires full 1080p+ monitor for optimal layout.',
      evidenceStatus: 'verified_ui'
    },
    {
      id: 'cnet-shot-2',
      title: 'Live Automated Topology Map Visualizer',
      category: 'Monitoring',
      section: 'Topology Map',
      navigationPath: 'Network → Topology → Dynamic Graph',
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      observedCapabilities: ['LLDP neighbor mapping', 'Port status node links', 'PoE power draw per switch node', 'Client count overlay'],
      strength: 'Instant visual troubleshooting of multi-switch loops and AP uplinks.',
      weakness: 'Large networks with 500+ nodes require zoom/filter navigation.',
      evidenceStatus: 'verified_ui'
    }
  ],

  useCases: [
    {
      scenarioId: 'industrial_iot',
      scenarioName: 'Industrial & Smart Building IoT',
      iconName: 'Cpu',
      suitabilityScore: 9.6,
      suitabilityRating: 'Ideal',
      rationale: 'Unsurpassed combination of networking switch/AP control and environmental sensor monitoring via MQTT/REST API.',
      keyFeatures: ['Integrated IoT Sensor Telemetry', 'MQTT Cloud Push', 'LACP & Spanning Tree Support'],
      caveats: ['Requires configuring proper sensor threshold alerting rules.']
    },
    {
      scenarioId: 'msp',
      scenarioName: 'Managed Service Provider (MSP)',
      iconName: 'Layers',
      suitabilityScore: 9.1,
      suitabilityRating: 'Ideal',
      rationale: 'Strong REST API support and multi-tenant RBAC allows MSPs to build custom client portals and automate provisioning.',
      keyFeatures: ['Open REST API & Swagger Docs', 'Multi-Tenant Org Tree', 'ZTP Provisioning'],
      caveats: ['Higher feature density requires technician training.']
    }
  ]
};
