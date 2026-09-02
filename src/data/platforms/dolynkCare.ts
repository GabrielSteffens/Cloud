import { Platform } from '../../types/platform';

export const dolynkCare: Platform = {
  id: 'dolynk-care',
  name: 'Dolynk Care',
  vendor: 'Dolynk Health Systems',
  logoColor: '#ec4899',
  url: 'https://care.dolynk.com',
  tagline: 'Proactive Health Monitoring & Cloud Maintenance Operations Platform',
  targetMarket: 'System Integrators, Health Care Facilities, Security Surveillance Integrators, MSP Maintenance Teams',
  ecosystem: ['PoE Switches', 'Wireless Access Points', 'CCTV Security Cameras', 'NVR/DVR Recorders', 'Smart Power Units'],
  overallScore: 8.1,
  lastEvaluated: '2026-08-26',
  summary: 'Dolynk Care focuses heavily on proactive network maintenance, device health diagnostic scores, automated topology repair, PoE budget management for CCTV/IoT endpoints, and integrated maintenance ticketing for IT service teams.',

  scores: {
    wireless: 7.4,
    switching: 8.2,
    security: 7.8,
    monitoring: 9.3,
    troubleshooting: 9.0,
    automation: 8.0,
    reporting: 8.4,
    integration: 7.6,
    ux: 8.5,
    scalability: 8.1
  },

  scoreExplanations: [
    { category: 'wireless', score: 7.4, rationale: 'Standard dual-band SSID configuration, client RSSI tracking, and basic wireless health metrics.' },
    { category: 'switching', score: 8.2, rationale: 'Excellent PoE power budget management, remote port power cycle, port status monitoring, and VLAN configuration.' },
    { category: 'security', score: 7.8, rationale: 'Device health security alerts, password vulnerability warning for endpoints, and IP access filtering.' },
    { category: 'monitoring', score: 9.3, rationale: 'Outstanding proactive monitoring with automated health index scores (0-100), offline root-cause detection, and live video stream throughput check.' },
    { category: 'troubleshooting', score: 9.0, rationale: 'Industry-leading automated diagnostic wizard: detects cable faults, port loops, IP conflicts, and offline cameras with 1-click reboot solutions.' },
    { category: 'automation', score: 8.0, rationale: 'Automated health audit reports, scheduled reboot tasks, and maintenance alert ticketing forwarding.' },
    { category: 'reporting', score: 8.4, rationale: 'Detailed maintenance audit reports, historical uptime SLA graphs, and device health degradation trends.' },
    { category: 'integration', score: 7.6, rationale: 'Webhook support for ticketing systems (Jira, ServiceNow, Slack) and REST API for device health telemetry.' },
    { category: 'ux', score: 8.5, rationale: 'Intuitive operational health dashboard designed specifically for fast incident triage and maintenance workflows.' },
    { category: 'scalability', score: 8.1, rationale: 'Multi-site organization views with multi-user maintenance roles (Technician, Manager, Installer).' }
  ],

  strengths: [
    { title: 'Proactive Health Index & 1-Click Repair', description: 'Calculates continuous health scores for every device and provides 1-click auto-remediation actions for camera/AP freezes.', impact: 'High' },
    { title: 'PoE Auto-Healing & Power Scheduling', description: 'Detects unresponsive connected PoE cameras/APs via ping watchdog and automatically cycles power to restore operation.', impact: 'High' },
    { title: 'Integrated Service & Maintenance Ticketing', description: 'Automatically converts offline device alerts into dispatch tickets for field service technicians.', impact: 'Medium' },
    { title: 'Cable Diagnostic & Loop Detection', description: 'Built-in Virtual Cable Tester (VCT) pinpoints exact Ethernet cable distance to fault (open/short circuit).', impact: 'High' }
  ],

  weaknesses: [
    { title: 'Basic Wireless RF Controls', description: 'Lacks advanced wireless RF spectrum analysis and 802.11r fast roaming customization found in dedicated wireless controllers.', impact: 'Medium' },
    { title: 'Limited Deep L3 Routing Options', description: 'Focuses primarily on L2/L3 switching health and PoE, with fewer complex BGP/OSPF enterprise routing parameters.', impact: 'Low' }
  ],

  architecture: {
    deploymentModel: 'Cloud Maintenance SaaS with edge gateway probe sync',
    multiTenancy: 'Multi-Client Customer Account structure with Technician role delegation',
    adoptionWorkflow: 'Cloud Agent pairing or Auto-Discovery via local network scanner tool',
    firmwareManagement: 'Batch firmware updates with auto-health check validation post-reboot',
    apiSupport: 'REST API for device status, health scores, and ticket status export',
    backupRestore: 'Configuration cloud snapshot with auto-restore when replacing faulty switch',
    remoteAccess: 'Integrated Web-Proxy remote access to NVR/camera/switch local web UI'
  },

  licensing: {
    pricingType: 'Freemium Monitoring Tier + Care Pro Maintenance Subscription',
    hardwareLock: 'Transferable between installer customer organizations',
    mspFeatures: 'Service Provider Maintenance Portal with dispatch tracking and SLA SLA reporting',
    trialPeriod: 'Full Pro features unlocked for 60 days per site registration',
    tierNotes: 'Care Free (Basic monitoring & alerts) vs Care Pro (Auto-healing, VCT cable diagnostics, Ticketing integration)'
  },

  verdict: 'Dolynk Care shines as a dedicated health monitoring and maintenance operations platform. It is unmatched for CCTV surveillance networks, security integrators, and IT maintenance teams who prioritize high uptime, cable fault detection, and automated PoE power cycling.',

  features: [
    { id: 'dcare-1', category: 'Monitoring', name: 'Proactive Health Score System', description: 'Aggregates packet loss, temperature, PoE load, and uptime into a 0-100 overall network health index.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Main Overview Health Gauge.', screenPath: 'Dashboard → Health Index' },
    { id: 'dcare-2', category: 'Troubleshooting', name: 'PoE Auto-Healing Watchdog', description: 'Monitors client device ping responses and automatically cycles PoE port power if an endpoint stops responding.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Switch → PoE Control → Auto-Reboot Watchdog toggle.', screenPath: 'Switching → PoE Watchdog' },
    { id: 'dcare-3', category: 'Troubleshooting', name: 'Virtual Cable Tester (VCT)', description: 'Measures Ethernet cable integrity and displays exact distance (meters) to cable short or open wire fault.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Device Tools → Virtual Cable Test result screen.', screenPath: 'Device → Tools → Cable Test' },
    { id: 'dcare-4', category: 'Switching', name: 'PoE Budget Real-Time Metering', description: 'Live monitoring of total wattage used vs available power supply capacity on switch ports.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Switching → PoE Consumption tab.', screenPath: 'Switching → PoE Meter' },
    { id: 'dcare-5', category: 'Operations & Automation', name: 'Maintenance Dispatch Ticketing', description: 'Auto-generates service ticket on critical device failure and assigns technician with location details.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Service Center → Tickets tab.', screenPath: 'Service → Maintenance Tickets' },
    { id: 'dcare-6', category: 'Wireless', name: 'Basic SSID Configuration', description: 'Dual-band SSID creation with WPA2/WPA3 Personal encryption.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Wireless → SSID List screen.', screenPath: 'Wireless → SSIDs' },
    { id: 'dcare-7', category: 'Security', name: 'Weak Password & Vulnerability Audit', description: 'Scans connected IP cameras and network nodes for default passwords and flags security warnings.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Security Audit → Password Check report.', screenPath: 'Security → Audit' },
    { id: 'dcare-8', category: 'Operations & Automation', name: 'SLA Uptime & Maintenance Report', description: 'Export PDF reports proving 99.9% uptime compliance for customer service contracts.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Reports → Export Maintenance Report button.', screenPath: 'Reports → SLA Export' }
  ],

  screenshots: [
    {
      id: 'dcare-shot-1',
      title: 'Dolynk Care Network Health Command Center',
      category: 'Dashboard',
      section: 'Health Overview',
      navigationPath: 'Dolynk Care → Site → Health Dashboard',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      observedCapabilities: ['Overall site health score (98/100)', 'Offline device diagnostic warnings', 'PoE power draw gauge', 'Maintenance ticket status'],
      strength: 'Designed specifically for quick operational triage by maintenance staff.',
      weakness: 'Focuses heavily on health status rather than advanced RF radio tuning.',
      evidenceStatus: 'verified_ui'
    },
    {
      id: 'dcare-shot-2',
      title: 'Virtual Cable Diagnostic & PoE Watchdog Tool',
      category: 'Troubleshooting',
      section: 'Diagnostics Wizard',
      navigationPath: 'Network → Switch → Port → Cable Diagnostic Tool',
      imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
      observedCapabilities: ['Pin-by-pin cable test result', 'Distance to wire fault measurement', 'Auto-healing PoE toggle', 'Power cycle button'],
      strength: 'Saves hours of physical technician field dispatch by pinpointing damaged Ethernet cables remotely.',
      weakness: 'Requires switch hardware support for VCT chipsets.',
      evidenceStatus: 'verified_ui'
    }
  ],

  useCases: [
    {
      scenarioId: 'industrial_iot',
      scenarioName: 'CCTV Surveillance & IoT Systems',
      iconName: 'Cpu',
      suitabilityScore: 9.5,
      suitabilityRating: 'Ideal',
      rationale: 'Unrivaled PoE auto-reboot watchdog and cable fault diagnostics essential for high-reliability camera networks.',
      keyFeatures: ['PoE Auto-Healing Watchdog', 'Virtual Cable Diagnostics', 'Default Password Security Audit'],
      caveats: ['Best paired with Dolynk/compatible PoE switches.']
    },
    {
      scenarioId: 'msp',
      scenarioName: 'IT Maintenance & Service Integrators',
      iconName: 'Layers',
      suitabilityScore: 8.8,
      suitabilityRating: 'Suitable',
      rationale: 'Built-in ticket dispatching and SLA PDF report generation streamline maintenance contracts.',
      keyFeatures: ['Service Dispatch Ticketing', 'Customer SLA PDF Exports', 'Remote NVR/Switch Web Proxy'],
      caveats: ['Wireless configuration depth is basic compared to dedicated Wi-Fi cloud controllers.']
    }
  ]
};
