import { Platform } from '../../types/platform';

export const aolynkCloud: Platform = {
  id: 'aolynk-cloud',
  name: 'Aolynk Cloud',
  vendor: 'Aolynk Technologies',
  logoColor: '#3b82f6',
  url: 'https://cloud.aolynk.com',
  tagline: 'Streamlined Light-Footprint Cloud Network Management Platform',
  targetMarket: 'SMB, Branch Offices, Retail Stores, Commercial Spaces',
  ecosystem: ['Wireless Access Points', 'Smart Switches', 'Cloud Routers', 'Outdoor Mesh APs'],
  overallScore: 7.6,
  lastEvaluated: '2026-08-25',
  summary: 'Aolynk Cloud provides a clean, fast-loading, simplified network management solution tailored for SMBs and branch environments prioritizing rapid setup, intuitive basic wireless/switching controls, and minimal technical complexity.',

  scores: {
    wireless: 8.0,
    switching: 7.2,
    security: 7.0,
    monitoring: 7.8,
    troubleshooting: 7.0,
    automation: 7.2,
    reporting: 7.0,
    integration: 6.5,
    ux: 8.8,
    scalability: 7.5
  },

  scoreExplanations: [
    { category: 'wireless', score: 8.0, rationale: 'Fast SSID creation, WPA2/WPA3 Personal, auto channel selection, basic guest network setup, and band steering.' },
    { category: 'switching', score: 7.2, rationale: 'Basic 802.1Q VLAN configuration, port enable/disable, PoE power monitoring, and port status display.' },
    { category: 'security', score: 7.0, rationale: 'Standard WPA2/WPA3, basic ACL filtering, MAC binding, and wireless client isolation.' },
    { category: 'monitoring', score: 7.8, rationale: 'Ultra-fast dashboard load time, live bandwidth charts, connected client list, and basic offline alerts.' },
    { category: 'troubleshooting', score: 7.0, rationale: 'Basic Ping test, device reboot button, and signal quality indicator per client.' },
    { category: 'automation', score: 7.2, rationale: 'Simple batch config push to devices of the same model and automatic cloud firmware sync.' },
    { category: 'reporting', score: 7.0, rationale: 'Basic daily traffic summary reports and client count graphs.' },
    { category: 'integration', score: 6.5, rationale: 'Limited external REST API access; built primarily as an end-to-end self-contained management portal.' },
    { category: 'ux', score: 8.8, rationale: 'Minimalistic design, zero clutter, extremely low learning curve for non-specialist IT administrators.' },
    { category: 'scalability', score: 7.5, rationale: 'Ideal for up to 50 sites and 200 devices per org; larger enterprise deployments may require advanced grouping.' }
  ],

  strengths: [
    { title: 'Ultra-Minimalist & Intuitive UX', description: 'Extremely fast interface navigation with straightforward menus allowing non-specialist admins to configure Wi-Fi in under 3 minutes.', impact: 'High' },
    { title: 'Lightweight Mobile & Web App', description: 'Consumes low bandwidth and renders instantly even on low-speed remote connections.', impact: 'Medium' },
    { title: 'Automated Mesh Setup', description: 'Automatic wireless mesh discovery and pairing for outdoor and remote access points.', impact: 'High' },
    { title: 'Affordable Operational Model', description: 'Zero licensing cost options bundled with hardware purchases.', impact: 'Medium' }
  ],

  weaknesses: [
    { title: 'Limited Advanced Enterprise Security', description: 'Lacks 802.1X WPA3-Enterprise RADIUS integration and complex custom Captive Portal HTML engine.', impact: 'High' },
    { title: 'Basic Switch Port Features', description: 'Does not support complex LACP link aggregation or MSTP spanning tree configurations in standard UI.', impact: 'Medium' },
    { title: 'No Public REST API', description: 'No public REST API documented for external automation or billing integration.', impact: 'Medium' }
  ],

  architecture: {
    deploymentModel: 'Cloud SaaS with microservice backend architecture',
    multiTenancy: 'Basic Multi-Site Org structure: Account → Network Site → Devices',
    adoptionWorkflow: 'SN Cloud Binding via serial number input or QR Code scan',
    firmwareManagement: 'One-click global firmware push or scheduled automatic night updates',
    apiSupport: 'Internal web API only; public developer API not available',
    backupRestore: 'Cloud configuration auto-save with manual configuration download',
    remoteAccess: 'Cloud-relayed web tunnel to local device status page'
  },

  licensing: {
    pricingType: 'Cloud Lifetime License included with hardware purchase',
    hardwareLock: 'Device bound to user account via Serial Number',
    mspFeatures: 'Basic multi-account management switcher',
    trialPeriod: 'N/A (Included with hardware)',
    tierNotes: 'No recurring mandatory subscription fees for core cloud features.'
  },

  verdict: 'Aolynk Cloud is a fantastic choice for SMBs, retail shops, and branch offices looking for a hassle-free, cost-effective network management platform. While it lacks deep enterprise 802.1X and complex L3 switching features, its speed and simplicity are top-notch.',

  features: [
    { id: 'aol-1', category: 'Wireless', name: 'Quick SSID Management', description: 'Create dual-band 2.4G/5G SSIDs with custom passwords and rate limits.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Wi-Fi Settings → SSID List page.', screenPath: 'Wireless → Wi-Fi Settings' },
    { id: 'aol-2', category: 'Wireless', name: 'Captive Portal / Guest Network', description: 'Simple guest password or one-click disclaimer acceptance splash page.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Guest WiFi setup toggle.', screenPath: 'Wireless → Guest Network' },
    { id: 'aol-3', category: 'Wireless', name: 'WPA3 Enterprise 802.1X', description: 'Integration with external RADIUS server for enterprise 802.1X user auth.', status: 'not_supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Only WPA-PSK / WPA2-PSK / WPA3-SAE choices present in SSID security dropdown.', screenPath: 'Wireless → Security' },
    { id: 'aol-4', category: 'Switching', name: '802.1Q VLAN Tagging', description: 'Basic VLAN creation and port association for switch models.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Switch → VLAN List tab.', screenPath: 'Switching → VLAN Settings' },
    { id: 'aol-5', category: 'Switching', name: 'PoE Port Power Reset', description: 'Remote power cycle for connected PoE cameras and APs.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Switch Details → Port Action menu.', screenPath: 'Switching → Ports' },
    { id: 'aol-6', category: 'Security', name: 'Wireless Client Isolation', description: 'Block inter-client communication on guest SSIDs.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: AP Settings → Client Isolation checkbox.', screenPath: 'Wireless → Advanced' },
    { id: 'aol-7', category: 'Monitoring', name: 'Live Bandwidth Monitor', description: 'Real-time download/upload speed gauges and connected device counts.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Main Dashboard realtime chart.', screenPath: 'Dashboard' },
    { id: 'aol-8', category: 'Troubleshooting', name: 'Device Ping Diagnostics', description: 'Simple ICMP reachability ping from device to cloud/gateway.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Device → Maintenance → Ping tool.', screenPath: 'Device → Tools' },
    { id: 'aol-9', category: 'Operations & Automation', name: 'Automatic Mesh Discovery', description: 'Zero-cable auto pairing for expansion mesh APs.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: 'Verified in UI: Mesh topology graph and auto-add wizard.', screenPath: 'Wireless → Mesh' },
    { id: 'aol-10', category: 'Operations & Automation', name: 'Public REST API', description: 'Open REST API for programmatically managing networks and fetching stats.', status: 'not_supported', evidenceBadge: 'documented', evidenceNotes: 'Documented: Public API documentation not provided in platform center.', screenPath: 'System Settings' }
  ],

  screenshots: [
    {
      id: 'aol-shot-1',
      title: 'Aolynk Cloud Simplified Dashboard',
      category: 'Dashboard',
      section: 'Home View',
      navigationPath: 'Aolynk Portal → Home → Overview',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      observedCapabilities: ['Minimalist site status', 'Connected client counter', 'Upload/Download speed summary', 'Quick device reboot buttons'],
      strength: 'Extremely clean layout, instant load times, zero cognitive overload.',
      weakness: 'Lacks deep customization options for telemetry widgets.',
      evidenceStatus: 'verified_ui'
    },
    {
      id: 'aol-shot-2',
      title: 'SSID & Wi-Fi Network Setup Page',
      category: 'Wireless',
      section: 'SSID Settings',
      navigationPath: 'Network → Wi-Fi → Create SSID',
      imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
      observedCapabilities: ['SSID name & password inputs', '2.4GHz / 5GHz band switches', 'Rate limit per client', 'Hide SSID toggle'],
      strength: 'All basic wireless parameters accessible in one single page.',
      weakness: 'No enterprise RADIUS server configuration field.',
      evidenceStatus: 'verified_ui'
    }
  ],

  useCases: [
    {
      scenarioId: 'smb',
      scenarioName: 'Small & Medium Business (SMB)',
      iconName: 'Store',
      suitabilityScore: 9.0,
      suitabilityRating: 'Ideal',
      rationale: 'Simple setup, no recurring license fees, lightweight management ideal for small offices.',
      keyFeatures: ['Intuitive Single-Screen Setup', 'Included Cloud Tier', 'Mobile App Access'],
      caveats: ['Not designed for complex multi-building enterprise networks.']
    },
    {
      scenarioId: 'retail',
      scenarioName: 'Retail Stores & Cafes',
      iconName: 'ShoppingBag',
      suitabilityScore: 8.5,
      suitabilityRating: 'Suitable',
      rationale: 'Great for quickly provisioning Wi-Fi for shop visitors and store POS terminals.',
      keyFeatures: ['Guest Wi-Fi Isolation', 'Bandwidth Shaping', 'Auto Mesh AP Pairing'],
      caveats: ['Custom splash page branding options are standard/fixed template only.']
    }
  ]
};
