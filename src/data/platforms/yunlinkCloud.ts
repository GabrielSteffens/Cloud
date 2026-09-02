import { Platform } from '../../types/platform';

export const getYunlinkCloud = (lang: 'en' | 'pt'): Platform => {
  const isPt = lang === 'pt';

  return {
    id: 'yunlink',
    name: 'Yunlink',
    vendor: 'CloudNetlot / Ruike Technology',
    logoColor: '#2563eb',
    url: 'https://ruike-cloud.com',
    tagline: isPt 
      ? 'Plataforma Inteligente de Gerenciamento de Dispositivos em Nuvem — Wi-Fi, SD-WAN, CPE e Roteadores' 
      : 'Intelligent Cloud Device Management Platform — Wi-Fi, SD-WAN, CPE & Wireless Routers',
    targetMarket: isPt
      ? 'MSPs, Wi-Fi Corporativo, Gateways SD-WAN, Espaços Comerciais com Portal Captivo, Frotas de CPE Outdoor'
      : 'MSPs, Enterprise Wi-Fi, SD-WAN Gateways, Commercial Venues with Captive Portal, Outdoor CPE Fleets',
    ecosystem: [
      'Wi-Fi 6 APs (AX835, WB5AX, WB2FM)',
      'SD-WAN Gateways (LTE-F300, Q3000, R3000)',
      'CPE Wireless Bridges (WB5FM)',
      'Managed Switches',
      'Wireless Routers'
    ],
    overallScore: 8.5,
    lastEvaluated: '2026-09-02',
    summary: isPt
      ? 'O Yunlink/CloudNetlot (ruike-cloud.com) é uma plataforma corporativa de gerenciamento em nuvem com hierarquia multi-projeto em 3 níveis (14 projetos ativos, 27 dispositivos gerenciados). Suporta APs Wi-Fi 6 (modelo AX835, firmware AX835-AP-V2.0-Build20251231184154), roteamento SD-WAN, portais captivos personalizáveis, roaming inteligente com limiar de cobertura configurável (-95 dBm), Wireless Tuning com otimização automática de canal e tela NOC em tempo real.'
      : 'Yunlink/CloudNetlot (ruike-cloud.com) is an enterprise cloud management platform with 3-tier multi-project hierarchy (14 active projects, 27 managed devices). Supports Wi-Fi 6 APs (AX835 model, firmware AX835-AP-V2.0-Build20251231184154), SD-WAN routing, customizable captive portals, intelligent roaming with configurable coverage threshold (-95 dBm), Wireless Tuning with auto channel optimization, and real-time NOC Large Screen dashboard.',

    scores: {
      wireless: 8.8,
      switching: 8.0,
      security: 8.3,
      monitoring: 8.7,
      troubleshooting: 8.4,
      automation: 8.3,
      reporting: 8.1,
      integration: 7.9,
      ux: 8.6,
      scalability: 9.0
    },

    scoreExplanations: [
      { category: 'wireless', score: 8.8, rationale: isPt ? 'Suporte completo a criptografia WPA3-SAE, mapeamento de VLANs multi-SSID (3-4060), largura de canal 2.4G/5G (20/40/80 MHz), roaming rápido 802.11k/v/r e limites de taxa por SSID.' : 'Full support for WPA3-SAE encryption, multi-SSID VLAN mapping (3-4060), 2.4G/5G radio channel width (20/40/80 MHz), 802.11k/v/r auto roaming, and per-SSID rate limits.' },
      { category: 'switching', score: 8.0, rationale: isPt ? 'Monitoramento do status de portas de cobre Gigabit (negociação de 1000Mbps), atributos LAN/WAN, mapeamento MAC e controle de frota de switches.' : 'Gigabit copper port status monitoring (1000Mbps negotiation), LAN/WAN attribute tags, MAC mapping, and switch fleet oversight.' },
      { category: 'security', score: 8.3, rationale: isPt ? 'Motor de Portal Captivo com verificação via SMS, login de membros, acesso 1-clique, editor de banners carrossel (mobile/desktop) e WPA3-SAE.' : 'Rich Captive Portal engine supporting SMS verification, member login, 1-click access, carousel banner editor (mobile/desktop), and WPA3-SAE.' },
      { category: 'monitoring', score: 8.7, rationale: isPt ? 'Painel geral multi-projeto (17 projetos, 24 dispositivos), 749+ registros históricos de alarmes, acompanhamento de limites de memória/CPU e contadores de tempo ativo de 321 dias.' : 'Multi-project overview dashboard (17 projects, 24 devices), 749+ historical alarm records, memory & CPU threshold tracking, and 321-day uptime counters.' },
      { category: 'troubleshooting', score: 8.4, rationale: isPt ? 'Gráfico de topologia dinâmica interativa exibindo nós de gateway/switch/AP/CPE, registros de limites de CPU/memória, gavetas de status de dispositivos e controles de reinicialização.' : 'Interactive dynamic topology graph displaying gateway/switch/AP/CPE nodes, CPU/memory threshold logs, device status drawers, and reboot controls.' },
      { category: 'automation', score: 8.3, rationale: isPt ? 'Otimização agendada de RF (desligamento programado de Wi-Fi e reinicialização de dispositivos), políticas de roaming automático e agendamento de atualização de firmware.' : 'Timed optimization (scheduled Wi-Fi time off & device reboot), auto wireless roaming policies, batch project management, and version upgrade scheduling.' },
      { category: 'reporting', score: 8.1, rationale: isPt ? 'Exportação completa de eventos de alarmes em CSV, estatísticas de distribuição de dispositivos por categoria e gráficos de tráfego de clientes.' : 'Comprehensive alarm and audit event export, project device distribution stats (AP, Router, CPE, Gateway), and client traffic charts.' },
      { category: 'integration', score: 7.9, rationale: isPt ? 'URLs de redirecionamento de portal captivo HTTP/HTTPS, gerenciamento multi-projeto em 3 níveis e orquestração de gateways SD-WAN.' : 'HTTP/HTTPS captive portal redirect URLs, 3-tier project management, and SD-WAN gateway orchestration.' },
      { category: 'ux', score: 8.6, rationale: isPt ? 'Navegação limpa no topo e na barra lateral, seletor de idioma (Inglês/Chinês na nuvem), alternador rápido de projetos e formulários modais responsivos.' : 'Clean top/side navigation layout, English language toggle, quick project switcher, modal configuration forms, and responsive design.' },
      { category: 'scalability', score: 9.0, rationale: isPt ? 'Estrutura hierárquica de projetos em 3 níveis (Nível 1, 2 e 3) gerenciando 17 projetos e frotas multi-dispositivos perfeitas para MSPs.' : 'Nested multi-level project structure (Level 1, Level 2, Level 3 org hierarchies) managing 17 projects and multi-device fleets ideal for MSP multi-tenant deployments.' }
    ],

    strengths: [
      { 
        title: isPt ? 'Hierarquia Multi-Tenant em 3 Níveis (14 Projetos)' : 'Nested 3-Tier Multi-Tenant Project Hierarchy (14 Projects)', 
        description: isPt ? 'Estrutura hierárquica real de projetos em 3 níveis confirmada: 14 projetos ativos gerenciando 27 dispositivos. Projetos incluem: 项目1, 项目2, 项目3, 产品部-第2级, 产品部-第3级, GX, GX-Group, GX-2, GX-3, rctest, 开发, 测试部临时测试 e outros. MSPs podem delegar controle com permissões isoladas por nível.' : 'Real 3-tier project hierarchy confirmed: 14 active projects managing 27 devices across Gateway, Switch, Router, AP and CPE categories. Projects include sub-tenants (项目2, 项目3 under 项目1). MSPs can delegate control with isolated permissions per level.', 
        impact: 'High' 
      },
      { 
        title: isPt ? 'RF Avançado: Limiar de Cobertura -95 dBm, RTS 2347, Packet 2346' : 'Advanced RF: Coverage Threshold -95 dBm, RTS 2347, Packet 2346', 
        description: isPt ? 'Configuração detalhada de RF por rádio confirmada no dispositivo AX835: Modo Wireless 11NG_HT20, Canal Auto, Tx Power Min, Limiar de Cobertura -95 dBm (slider), Packet Threshold 2346, RTS Threshold 2347, Max de Usuários 256, Short GI desabilitado. Wireless Tuning com otimização de canal com 1 clique.' : 'Per-device detailed RF settings confirmed on AX835: Wireless Mode 11NG_HT20, Channel Auto, Tx Power Min, Coverage Threshold slider at -95 dBm, Packet Threshold 2346, RTS Threshold 2347, Max Users per radio 256, Short GI Disabled. One-click Wireless Tuning with channel optimization.', 
        impact: 'High' 
      },
      { 
        title: isPt ? 'Portal Captivo Multimodo com Preview Mobile/Desktop' : 'Multi-Mode Captive Portal with Mobile/Desktop Preview', 
        description: isPt ? 'Portal captivo integrado com preview alternável entre mobile e desktop, editor de banner (1170x1020px, max 200KB, JPG/PNG), cor de tema, URL de redirecionamento, e 3 fases: Pré-Auth, Em Autenticação e Pós-Auth. Submenu: Portal, Auth Methods, Strategy, Auth Config, Auth Details.' : 'Built-in captive portal with switchable mobile/desktop preview, banner editor (1170x1020px, max 200KB, JPG/PNG), theme color, redirect URL, and 3 lifecycle stages: Before Auth, Process Auth, After Auth. Sub-menu: Portal, Auth Methods, Strategy, Auth Config, Auth Details.', 
        impact: 'High' 
      },
      { 
        title: isPt ? 'NOC Large Screen — Dashboard Inteligente em Tempo Real' : 'NOC Large Screen — Real-Time Intelligent Dashboard', 
        description: isPt ? 'Tela de monitoramento dedicada em modo escuro ("Intelligent device management platform") mostrando: distribuição por tipo de dispositivo (AP 62.96%, CPE 22.22%, Wireless Router 11.11%, Gateway 3.71%), 3 Online / 24 Offline de 27 totais, logs de configuração (17 registros hoje), terminais online (8), e log de upgrade.' : 'Dedicated dark-mode NOC screen titled "Intelligent device management platform" showing: device type distribution (AP 62.96%, CPE 22.22%, Wireless Router 11.11%, Gateway 3.71%), 3 Online / 24 Offline of 27 total, configuration logs (17 today), online terminals (8), upgrade log, and alarm display.', 
        impact: 'High' 
      },
      { 
        title: isPt ? 'Upgrade de Firmware Dual-Path: Cloud + Upload Local' : 'Dual-Path Firmware Upgrade: Cloud OTA + Local Upload', 
        description: isPt ? 'Firmware upgrade confirmado para modelo AX835: versão atual AX835-AP-V2.0-Build20251231184154. Interface com duas abas: Cloud Upgrade (puxa da nuvem) e Local Upgrade (upload manual de binário). Suporta Batch Upgrade com seleção múltipla de dispositivos.' : 'Firmware upgrade confirmed for AX835 model: current version AX835-AP-V2.0-Build20251231184154 (Build date 2025-12-31). Two-tab interface: Cloud Upgrade (pull from cloud repo) and Local Upgrade (manual binary upload). Supports Batch Upgrade with multi-device selection.', 
        impact: 'High' 
      }
    ],

    weaknesses: [
      { 
        title: isPt ? 'Captura de Pacotes CLI' : 'CLI Packet Capture Tool', 
        description: isPt ? 'A inspeção profunda de pacotes (stream PCAP) exige o download local dos arquivos de diagnóstico do equipamento.' : 'Deep packet inspection PCAP stream requires downloading local device diagnostic files.', 
        impact: 'Low' 
      },
      { 
        title: isPt ? 'Formato de Exportação de Logs' : 'Export Log Format', 
        description: isPt ? 'A exportação de logs de alarmes históricos e auditoria de configuração está disponível apenas no formato CSV.' : 'Historical alarm and configuration log export format is CSV only.', 
        impact: 'Low' 
      }
    ],

    architecture: {
      deploymentModel: isPt ? 'SaaS Cloud Controller (ruike-cloud.com) com clusters regionais multi-região' : 'Cloud Controller SaaS (ruike-cloud.com) with regional multi-region clusters',
      multiTenancy: isPt ? 'Hierarquia de Projetos em 3 Níveis: Conta → Projeto Nível 1 → Nível 2 → Nível 3 → Local' : 'Multi-Tier Nested Project Hierarchy: Account → Project Level 1 → Level 2 → Level 3 → Site',
      adoptionWorkflow: isPt ? 'Vincular por Número de Série (SN) / MAC ou descoberta automática na nuvem' : 'Serial Number (SN) / MAC binding or cloud project auto-discovery scan',
      firmwareManagement: isPt ? 'Agendamento de atualização de firmware em lote por modelo de hardware (WB5AX-V2.0, LTE-F300-V2.0, Q3000-WR-V2.0)' : 'Batch version upgrade scheduling by hardware model (e.g. WB5AX-V2.0, LTE-F300-V2.0, Q3000-WR-V2.0)',
      apiSupport: isPt ? 'API REST HTTP/HTTPS na nuvem e interface de Autenticação RADIUS' : 'Cloud HTTP/HTTPS REST API & RADIUS Authentication interface',
      backupRestore: isPt ? 'Snapshot de backup das configurações do projeto na nuvem com envio em 1-clique' : 'Project cloud snapshot backup with single-click configuration push',
      remoteAccess: isPt ? 'Proxy de gerenciamento web retransmitido pela nuvem para a interface local do equipamento' : 'Cloud-relayed web management proxy to device local configuration interface'
    },

    licensing: {
      pricingType: isPt ? 'Serviço de Gerenciamento em Nuvem incluído com o envio do hardware' : 'Cloud Management Service bundled with hardware deployment',
      hardwareLock: isPt ? 'Dispositivos vinculados via Número de Série (SN) ao projeto ativo; desvinculação permitida' : 'Devices bound via Serial Number to active cloud project; unbind enabled',
      mspFeatures: isPt ? 'Árvore de projetos em 3 níveis, delegação de funções de técnicos, estatísticas de uso' : 'Multi-level project tree, technician role delegation, project usage statistics',
      trialPeriod: isPt ? 'Ambiente sandbox em nuvem completo para testes por 30 dias' : '30-day full feature cloud sandbox environment',
      tierNotes: isPt ? 'Controladora em Nuvem Standard incluída com hardwares de AP, Switch, Ponte CPE e Gateway SD-WAN Yunlink.' : 'Standard Cloud Controller included with Yunlink AP, Switch, CPE bridge, and SD-WAN gateway hardware.'
    },

    verdict: isPt
      ? 'O Yunlink (ruike-cloud.com) é uma plataforma corporativa altamente versátil. Destaca-se em arquiteturas MSP multi-tenant devido à sua árvore de projetos em 3 níveis, segurança sem fio WPA3-SAE, autenticação com portal captivo integrado e gerenciamento nativo de frotas SD-WAN e Pontes Sem Fio.'
      : 'Yunlink (ruike-cloud.com) is a versatile enterprise cloud platform. It excels in multi-tenant MSP architectures with its nested 3-level project tree, WPA3-SAE wireless security, integrated captive portal authentication, and native SD-WAN / Wireless Bridge fleet management.',

    features: [
      { id: 'yun-1', category: 'Wireless', name: isPt ? 'Multi-SSID & Mapeamento de VLAN' : 'Multi-SSID & VLAN Tagging', description: isPt ? 'Configuração de múltiplos SSIDs com IDs de VLAN 802.1Q personalizados (faixa de 3 a 4060).' : 'Configure multiple SSIDs with custom 802.1Q VLAN IDs (range 3-4060).', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: isPt ? 'Verificado na UI: Config → Intelligent → modal WiFi Config.' : 'Verified in UI: Config → Intelligent → WiFi Config form modal.', screenPath: 'Config → Intelligent → WiFi Config' },
      { id: 'yun-2', category: 'Wireless', name: isPt ? 'Criptografia WPA3-SAE & WPA2-PSK' : 'WPA3-SAE & WPA2-PSK Encryption', description: isPt ? 'Suporte completo para criptografia sem fio WPA3-SAE e WPA/WPA2-PSK.' : 'Full support for WPA3-SAE and WPA/WPA2-PSK wireless encryption.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: isPt ? 'Verificado na UI: Seletor de criptografia (None, WPA/WPA2PSK, WPA3-SAE).' : 'Verified in UI: Encryption dropdown selector (None, WPA/WPA2PSK, WPA3-SAE).', screenPath: 'Config → Intelligent → WiFi Config → Encryption' },
      { id: 'yun-3', category: 'Wireless', name: isPt ? 'Configuração de RF & Largura de Canal' : 'Radio Frequency Config & Channel Width', description: isPt ? 'Seleção de canal 2.4GHz & 5GHz, largura de canal (20/40/80 MHz), potência de transmissão e Short GI.' : '2.4GHz & 5GHz radio channel selection, channel width (20/40/80 MHz), transmit power, and short GI.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: isPt ? 'Verificado na UI: Config → Intelligent → Frequency Config.' : 'Verified in UI: Config → Intelligent → Frequency Config screen.', screenPath: 'Config → Intelligent → Frequency Config' },
      { id: 'yun-4', category: 'Wireless', name: isPt ? 'Roaming Rápido & Limite de Banda' : 'Auto Roam & Rate Limiting', description: isPt ? 'Política de roaming rápido 802.11k/v/r e limitadores de velocidade (Up/Down) por SSID ou cliente.' : '802.11k/v/r fast roaming policy and per-SSID / per-client bandwidth rate limiters (Up/Down speed caps).', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: isPt ? 'Verificado na UI: Menus Auto Roam e Wireless Limit.' : 'Verified in UI: Auto Roam & Wireless Limit menu items.', screenPath: 'Config → Intelligent → Auto Roam' },
      { id: 'yun-5', category: 'Wireless', name: isPt ? 'Otimização Agendada & Auto Reboot' : 'Timed Optimization & Auto Reboot', description: isPt ? 'Controles automáticos de manutenção: desligamento agendado do Wi-Fi e reinicialização periódica dos equipamentos.' : 'Automated maintenance controls: scheduled Wi-Fi time off and timed device reboot schedules.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: isPt ? 'Verificado na UI: Config → Intelligent → Timed Optimization.' : 'Verified in UI: Config → Intelligent → Timed Optimization screen.', screenPath: 'Config → Intelligent → Timed Optimization' },
      { id: 'yun-6', category: 'Switching', name: isPt ? 'Status de Portas Gigabit & Negociação' : 'Gigabit Port Status & Speed Negotiation', description: isPt ? 'Monitoramento ao vivo de portas RJ45 de cobre com exibição de negociação de velocidade a 1000Mbps.' : 'Live monitoring of RJ45 copper ports with 1000Mbps speed negotiation display.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: isPt ? 'Verificado na UI: Entire Network → Device List → Device Info → Tabela Port Info.' : 'Verified in UI: Entire Network → Device List → Device Info → Port Info table.', screenPath: 'Entire Network → Device List → Device Info' },
      { id: 'yun-7', category: 'Security', name: isPt ? 'Portal Captivo & Autenticação' : 'Captive Portal & Auth Methods', description: isPt ? 'Páginas de autenticação personalizadas com SMS, login de membros, 1-clique, carrossel de banners e URL de destino.' : 'Custom landing pages supporting SMS auth, member login, One-Click access, banner carousel, and redirect URLs.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: isPt ? 'Verificado na UI: Config → Auth → Portal Page & Auth Config.' : 'Verified in UI: Config → Auth → Portal Page & Auth Config screens.', screenPath: 'Config → Auth → Portal Page' },
      { id: 'yun-8', category: 'Security', name: isPt ? 'Isolamento de Clientes em Camada 2' : 'Layer 2 Client Isolation', description: isPt ? 'Bloqueio de comunicação direta entre clientes na mesma rede sem fio.' : 'Block inter-client communication on wireless networks.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: isPt ? 'Verificado na UI: WiFi Config → Configurações Avançadas toggle.' : 'Verified in UI: WiFi Config → Advanced Settings toggle.', screenPath: 'Config → Intelligent → WiFi Config → Advanced' },
      { id: 'yun-9', category: 'Monitoring', name: isPt ? 'Painel Geral Multi-Projeto' : 'Multi-Project Overview Dashboard', description: isPt ? 'Resumo em tempo real de projetos (17), dispositivos (24: AP 1/15, Roteador 0/3, CPE 0/6, Switch, Gateway) e clientes.' : 'Real-time summary of projects (17), devices (24: AP 1/15, Router 0/3, CPE 0/6, Switch, Gateway), and client stats.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: isPt ? 'Verificado na UI: Painel principal Home → Project Summary.' : 'Verified in UI: Home → Project Summary main dashboard.', screenPath: 'Home' },
      { id: 'yun-10', category: 'Troubleshooting', name: isPt ? 'Alarmes Históricos & Trilha de Auditoria' : 'Alarm & Historical Audit Trail', description: isPt ? 'Logs detalhados de eventos com acompanhamento de limites (CPU, memória, eventos online/offline: 749+ registros) e auditoria de alterações.' : 'Detailed alarm event logs with threshold tracking (CPU, memory, offline/online events: 749+ records) and Configuration Audit Log.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: isPt ? 'Verificado na UI: Monitor → Alarm&Log → Alarmes & Configuration Log.' : 'Verified in UI: Monitor → Alarm&Log → Alarm & Configuration Log tables.', screenPath: 'Monitor → Alarm&Log' },
      { id: 'yun-11', category: 'Troubleshooting', name: isPt ? 'Mapa Dinâmico Interativo de Topologia' : 'Interactive Dynamic Topology Map', description: isPt ? 'Diagrama visual de nós renderizando conexões de gateway, switch, AP e ponte sem fio CPE.' : 'Visual node topology map rendering gateway, switch, AP, and CPE bridge connections.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: isPt ? 'Verificado na UI: Entire Network → Topology view.' : 'Verified in UI: Entire Network → Topology view.', screenPath: 'Entire Network → Topology' },
      { id: 'yun-12', category: 'Operations & Automation', name: isPt ? 'Motor de Atualização de Firmware na Nuvem' : 'Cloud Version Upgrade Engine', description: isPt ? 'Inventário de versões de firmware, recomendações de atualização na nuvem e agendamento em lote por modelo.' : 'Firmware version inventory, cloud upgrade recommendations, and batch update scheduling by model.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: isPt ? 'Verificado na UI: Upgrade → Version Upgrade.' : 'Verified in UI: Upgrade → Version Upgrade screen.', screenPath: 'Upgrade → Version Upgrade' }
    ],

    screenshots: [
      {
        id: 'yun-shot-1',
        title: isPt ? 'Painel Geral & Gerenciamento de Projetos Yunlink' : 'Yunlink Cloud Overview & Project Management Dashboard',
        category: 'Dashboard',
        section: 'Main Overview',
        navigationPath: 'ruike-cloud.com → Home → Project Summary',
        imageUrl: '/yunlink_en_01_dashboard_1788303751884.png',
        observedCapabilities: isPt 
          ? ['Resumo multi-projeto (17 projetos)', 'Contagem de dispositivos (24 dispositivos)', 'Detalhamento por categoria (AP, Roteador, CPE, Switch, Gateway)', 'Tempo ativo de 321 dias']
          : ['Multi-project summary (17 projects)', 'Device status counts (24 devices)', 'Device category breakdown (AP, Router, CPE, Switch, Gateway)', '321-day uptime tracking'],
        strength: isPt ? 'Lista multi-tenant de projetos com contagem instantânea de dispositivos em organizações hierárquicas.' : 'Multi-tenant project list with instant device count breakdown across nested organizations.',
        weakness: isPt ? 'O gráfico de rosca de status exibe porcentagens sem filtros customizados profundos.' : 'Device status pie chart displays percentage without deep custom filter widgets.',
        evidenceStatus: 'verified_ui'
      },
      {
        id: 'yun-shot-2',
        title: isPt ? 'Lista de Projetos & Árvore Hierárquica em 3 Níveis' : 'Project List & Multi-Level Project Hierarchy',
        category: 'Dashboard',
        section: 'Project Management',
        navigationPath: 'ruike-cloud.com → Project → Project Selector',
        imageUrl: '/yunlink_en_02_project_list_1788303810704.png',
        observedCapabilities: isPt
          ? ['Menu de seleção de projetos (项目1, 项目2, 项目3, 产品部-第2级, 产品部-第3级)', 'Atribuição de sub-contas', 'Contagem de equipamentos por projeto']
          : ['Project selection menu (项目1, 项目2, 项目3, 产品部-第2级, 产品部-第3级)', 'Sub-account assignment', 'Project device count breakdown'],
        strength: isPt ? 'Árvore de projetos hierárquica em 3 níveis que permite isolamento MSP perfeito.' : 'Nested multi-level project tree enables clean multi-tenant MSP isolation.',
        weakness: isPt ? 'A busca exige o prefixo exato do nome do projeto.' : 'Search requires exact project name prefix.',
        evidenceStatus: 'verified_ui'
      },
      {
        id: 'yun-shot-3',
        title: isPt ? 'Diagrama Interativo de Topologia Dinâmica de Rede' : 'Interactive Dynamic Network Topology Diagram',
        category: 'Monitoring',
        section: 'Topology Graph',
        navigationPath: 'ruike-cloud.com → Project 1 → Entire Network → Topology',
        imageUrl: '/yunlink_en_03_topology_1788303854080.png',
        observedCapabilities: isPt
          ? ['Mapeamento de nós de Gateway, Switch, AP e Ponte CPE', 'Status da conexão do link', 'Gaveta de inspeção ao clicar no nó']
          : ['Gateway, Switch, AP, and CPE bridge node mapping', 'Link connection status', 'Node click inspector drawer'],
        strength: isPt ? 'Representação visual em tempo real da hierarquia da rede e conexões.' : 'Real-time visual representation of network hierarchy and device links.',
        weakness: isPt ? 'Gráficos grandes de topologia exigem controles de pan/zoom.' : 'Large topology graphs require pan/zoom controls.',
        evidenceStatus: 'verified_ui'
      },
      {
        id: 'yun-shot-4',
        title: isPt ? 'Tabela de Inventário de Dispositivos (SN, Modelo & Firmware)' : 'Device Inventory Table (SN, Model & Firmware)',
        category: 'Monitoring',
        section: 'Device List',
        navigationPath: 'ruike-cloud.com → Project 3 → Entire Network → Device List',
        imageUrl: '/yunlink_en_04_device_list_1788303923768.png',
        observedCapabilities: isPt
          ? ['Inventário de equipamentos (WB5AX, LTE-F300, WB5FM, WB2FM, Q3000, R3000)', 'Mapeamento de SN & IP de Gerenciamento', 'Versão da build do firmware', 'Ações de reinicialização e configuração']
          : ['Device inventory (WB5AX, LTE-F300, WB5FM, WB2FM, Q3000, R3000)', 'SN & Manage IP mapping', 'Firmware build version', 'Reboot & config actions'],
        strength: isPt ? 'Visão geral da frota cobrindo APs, gateways, pontes sem fio CPE e roteadores.' : 'Comprehensive fleet view covering APs, gateways, CPE wireless bridges, and routers.',
        weakness: isPt ? 'A ordenação por coluna é limitada ao SN e Tipo.' : 'Column sorting is limited to SN and Type.',
        evidenceStatus: 'verified_ui'
      },
      {
        id: 'yun-shot-5',
        title: isPt ? 'Inspetor de Detalhes & Telemetria de CPU/Memória' : 'Device Details & CPU/Memory Status Inspector',
        category: 'Monitoring',
        section: 'Device Info',
        navigationPath: 'ruike-cloud.com → Project 1 → Entire Network → Topology → Select Node (5ax-AP)',
        imageUrl: '/yunlink_en_05_device_info_1788304106050.png',
        observedCapabilities: isPt
          ? ['Medidor de uso de CPU & Memória em tempo real', 'Contador de tempo de atividade (Uptime)', 'Especificações do modelo WB5AX', 'Número de série & IP']
          : ['Real-time CPU & Memory utilization gauge', 'Uptime counter', 'Model WB5AX specification', 'Serial number & IP details'],
        strength: isPt ? 'Gaveta de telemetria instantânea exibindo uso de CPU/Memória sem recarregar a página.' : 'Instant telemetry drawer showing live CPU/Memory utilization without page reload.',
        weakness: isPt ? 'A gaveta deve ser fechada antes de selecionar outro nó no mapa.' : 'Drawer must be closed before selecting another device on the canvas.',
        evidenceStatus: 'verified_ui'
      },
      {
        id: 'yun-shot-[#]',
        title: isPt ? 'Modal de Configuração de SSID & WPA3-SAE' : 'Wireless SSID & WPA3-SAE Configuration Modal',
        category: 'Wireless',
        section: 'WiFi Configuration',
        navigationPath: 'ruike-cloud.com → Project 1 → Config → Intelligent → WiFi Config → Add',
        imageUrl: '/yunlink_wireless_config_en_1788302058424.png',
        observedCapabilities: isPt
          ? ['Nome do SSID & oculta SSID', 'Modos de criptografia (None, WPA/WPA2PSK, WPA3-SAE)', 'Atribuição de VLAN ID (3-4060)', 'Modo Geral vs Visitante']
          : ['SSID name & hiding toggle', 'Encryption modes (None, WPA/WPA2PSK, WPA3-SAE)', 'VLAN ID assignment (3-4060)', 'General vs Visitor network purpose'],
        strength: isPt ? 'Inclui a moderna criptografia WPA3-SAE e mapeamento flexível de VLANs em modal limpo.' : 'Includes modern WPA3-SAE encryption and flexible VLAN tagging in a clean modal.',
        weakness: isPt ? 'Exige selecionar a finalidade da rede (Geral ou Visitante) de início.' : 'Requires selecting General or Visitor network type upfront.',
        evidenceStatus: 'verified_ui'
      },
      {
        id: 'yun-shot-7',
        title: isPt ? 'Status de Negociação de Portas Gigabit do Switch' : 'Device & Gigabit Switch Port Status View',
        category: 'Switching',
        section: 'Device Info',
        navigationPath: 'ruike-cloud.com → Project 1 → Entire Network → Device List → MY WTP 1 → Device Info',
        imageUrl: '/yunlink_switch_ports_en_1788302077902.png',
        observedCapabilities: isPt
          ? ['Negociação de portas Ethernet (1000Mbps)', 'Mapeamento de atributos de interface LAN/WAN', 'Tabela de endereços MAC', 'Informações de rede IP/Subnet/DNS']
          : ['Ethernet port negotiation (1000Mbps)', 'LAN/WAN interface attribute mapping', 'MAC address table', 'IP/Subnet/DNS network info'],
        strength: isPt ? 'Status claro de negociação de velocidade e mapeamento de MAC.' : 'Clear port speed negotiation status and hardware MAC address mapping.',
        weakness: isPt ? 'VLANs por porta exigem navegar até a sub-aba Device Config.' : 'Port VLAN tagging requires switching to the Device Config subtab.',
        evidenceStatus: 'verified_ui'
      },
      {
        id: 'yun-shot-8',
        title: isPt ? 'Tabela Histórica de Eventos e Alarmes de Hardware' : 'Troubleshooting Alarms & Historical Event Log Table',
        category: 'Troubleshooting',
        section: 'Alarm & Log',
        navigationPath: 'ruike-cloud.com → Project 1 → Monitor → Alarm&Log → Alarm (Resolved 749)',
        imageUrl: '/yunlink_troubleshooting_en_1788302103914.png',
        observedCapabilities: isPt
          ? ['Log de eventos históricos (749 registros resolvidos)', 'Alertas de limite de uso de CPU & Memória', 'Filtro por número de série & nome do dispositivo', 'Seletor de período']
          : ['Historical event log (749 cleared records)', 'CPU & Memory utilization threshold alerts', 'Serial number & device name filter', 'Date range selector'],
        strength: isPt ? 'Trilha completa de auditoria registrando picos de limites de hardware.' : 'Comprehensive event trail logging hardware CPU/Memory threshold spikes.',
        weakness: isPt ? 'O formato de exportação de log é apenas em CSV.' : 'Export log format is CSV only.',
        evidenceStatus: 'verified_ui'
      },
      {
        id: 'yun-shot-9',
        title: isPt ? 'Editor de Portal Captivo Interno — Layout Mobile' : 'Internal Captive Portal Editor — Mobile Layout',
        category: 'Security',
        section: 'Portal Config',
        navigationPath: 'ruike-cloud.com → Project 1 → Config → Auth → Portal (Mobile Tab)',
        imageUrl: '/yunlink_portal_mobile.png',
        observedCapabilities: isPt
          ? ['Preview mobile em tempo real', 'Configuração de carrossel de 3 banners (1170x1020px, máx 200KB)', 'Autenticação One Click, SMS e Member', 'Redirecionamento pós-login e Cor do Tema']
          : ['Real-time mobile preview', '3-banner carousel setup (1170x1020px, max 200KB)', 'One Click, SMS and Member auth methods', 'Post-login redirect URL & Theme color picker'],
        strength: isPt ? 'Visualizador móvel interativo com editor de 3 banners carrossel e múltiplos métodos de login.' : 'Interactive mobile previewer with 3-banner carousel editor and multiple auth methods.',
        weakness: isPt ? 'Não possui opção para imagem estática única sem rotação em carrossel.' : 'Lacks option for a single fixed static image without carousel rotation.',
        evidenceStatus: 'verified_ui'
      },
      {
        id: 'yun-shot-10',
        title: isPt ? 'Editor de Portal Captivo Interno — Layout Desktop' : 'Internal Captive Portal Editor — Desktop Layout',
        category: 'Security',
        section: 'Portal Config',
        navigationPath: 'ruike-cloud.com → Project 1 → Config → Auth → Portal (Desktop Tab)',
        imageUrl: '/yunlink_portal_desktop.png',
        observedCapabilities: isPt
          ? ['Preview desktop em tempo real', 'Configuração de carrossel de 3 banners (1920x500px, máx 200KB)', 'Autenticação One Click, SMS e Member', 'Redirecionamento pós-login e Cor do Tema']
          : ['Real-time desktop preview', '3-banner carousel setup (1920x500px, max 200KB)', 'One Click, SMS and Member auth methods', 'Post-login redirect URL & Theme color picker'],
        strength: isPt ? 'Visualização limpa para telas widescreen desktop com exatamente as mesmas opções do layout mobile.' : 'Clean widescreen desktop view matching identical configuration options from mobile.',
        weakness: isPt ? 'Banner desktop exige ajuste de proporção específico (1920x500px).' : 'Desktop banner requires specific wide ratio adjustment (1920x500px).',
        evidenceStatus: 'verified_ui'
      },
      {
        id: 'yun-shot-11',
        title: isPt ? 'Métodos de Autenticação — Tabela de Membros' : 'Auth Methods — Member Account Table',
        category: 'Security',
        section: 'Auth Methods',
        navigationPath: 'ruike-cloud.com → Project 1 → Config → Auth → Auth Methods (Member Tab)',
        imageUrl: '/yunlink_auth_methods_member_list.png',
        observedCapabilities: isPt
          ? ['Tabela de membros cadastrados com data/hora de criação', 'Ações de edição de senha e exclusão de conta', 'Botão Import com download de template Excel', 'Seleção e exclusão em lote (Batch Delete)']
          : ['Registered member table with creation timestamp', 'Password edit and account delete action buttons', 'Import button with Excel template download', 'Multi-select Batch Delete option'],
        strength: isPt ? 'Interface limpa para gestão de usuários com recurso de importação via template Excel e deleção em lote.' : 'Clean user management interface with Excel template import and batch deletion.',
        weakness: isPt ? 'Exige exportação de formulário para cadastro em massa.' : 'Requires template export for bulk account creation.',
        evidenceStatus: 'verified_ui'
      },
      {
        id: 'yun-shot-12',
        title: isPt ? 'Métodos de Autenticação — Modal Adicionar Membro e Regra de Senha' : 'Auth Methods — Add Member Modal & Password Rule',
        category: 'Security',
        section: 'Auth Methods',
        navigationPath: 'ruike-cloud.com → Project 1 → Config → Auth → Auth Methods → Add Member',
        imageUrl: '/yunlink_auth_methods_add_member.png',
        observedCapabilities: isPt
          ? ['Modal de cadastro de membro (Member Account e Login Password)', 'Validação de senha em tempo real', 'Mensagem de erro de senha: 6-20 caracteres, apenas letras, números e _-']
          : ['Add Member modal form (Member Account & Login Password)', 'Real-time password policy validation', 'Password validation error: 6-20 characters, letters, numbers, and _- only'],
        strength: isPt ? 'Formulário direto com validação explícita de complexidade de senha exibida via balão informativo.' : 'Direct modal form with explicit password complexity rule validation displayed via notification balloon.',
        weakness: isPt ? 'Não suporta caracteres especiais além de sublinhado (_) e hífen (-).' : 'Does not support special characters beyond underscore (_) and hyphen (-).',
        evidenceStatus: 'verified_ui'
      },
      {
        id: 'yun-shot-13',
        title: isPt ? 'Métodos de Autenticação — Acesso 1-Clique (Informativo)' : 'Auth Methods — One-Click Authentication (Informational)',
        category: 'Security',
        section: 'Auth Methods',
        navigationPath: 'ruike-cloud.com → Project 1 → Config → Auth → Auth Methods (One Click Tab)',
        imageUrl: '/yunlink_auth_methods_one_click.png',
        observedCapabilities: isPt
          ? ['Tela informativa de autenticação One-Click', 'Aviso auditado: ativado diretamente nas configurações gerais sem exigir formulário adicional']
          : ['Informational One-Click authentication screen', 'Audited notice: enabled directly in general settings without requiring additional forms'],
        strength: isPt ? 'Fluxo de acesso simplificado para visitantes com ativação global sem configuração individual.' : 'Streamlined guest access workflow with global toggle without individual parameters.',
        weakness: isPt ? 'Não oferece opções de limite de tempo na tela do método.' : 'Does not expose time cap controls on the method screen itself.',
        evidenceStatus: 'verified_ui'
      },
      {
        id: 'yun-shot-14',
        title: isPt ? 'Estratégias de Autenticação — Modal Criar Regra (White/Black List IP/MAC)' : 'Auth Strategy — Create Rule Modal (White/Black List IP/MAC)',
        category: 'Security',
        section: 'Strategy Management',
        navigationPath: 'ruike-cloud.com → Project 1 → Config → Auth → Strategy → Add',
        imageUrl: '/yunlink_auth_strategy_modal.png',
        observedCapabilities: isPt
          ? ['Formulário Add Strategy com campo Strategy Name', 'Seleção de White List (IP/MAC) e Black List (IP/MAC)', 'Campo de múltiplos endereços separados por vírgula (",")', 'Tabela de gerenciamento com busca e exclusão em lote (Batch Delete)']
          : ['Add Strategy form with Strategy Name field', 'White List (IP/MAC) and Black List (IP/MAC) toggles', 'Multiple addresses entry field separated by commas (",")', 'Strategy Management table with search and Batch Delete'],
        strength: isPt ? 'Permite definir listas de permissão e bloqueio por IP ou MAC de forma unitária e gerenciar com exclusão em massa.' : 'Allows defining IP or MAC white and black lists individually with bulk deletion capability.',
        weakness: isPt ? 'Endereços múltiplos exigem digitação manual separada por vírgulas.' : 'Multiple addresses require manual comma-separated entry.',
        evidenceStatus: 'verified_ui'
      },
      {
        id: 'yun-shot-15',
        title: isPt ? 'Estratégias de Autenticação — Seleção de Tempo de Validade (Validity Auth)' : 'Auth Strategy — Authentication Validity Options (Validity Auth)',
        category: 'Security',
        section: 'Strategy Management',
        navigationPath: 'ruike-cloud.com → Project 1 → Config → Auth → Strategy → Add → Validity Auth',
        imageUrl: '/yunlink_auth_strategy_validity.png',
        observedCapabilities: isPt
          ? ['Menu suspenso Validity Auth com opções de expiração', 'Opções auditadas: One Day, Two Day, Three Day, Four Day, Five Day, Six Day, Seven Day e Permanent']
          : ['Validity Auth dropdown menu with expiration choices', 'Audited options: One Day, Two Day, Three Day, Four Day, Five Day, Six Day, Seven Day, and Permanent'],
        strength: isPt ? 'Oferece controle de validade de autenticação de 1 a 7 dias ou acesso permanente de forma explícita.' : 'Offers explicit authentication validity duration cap from 1 to 7 days or permanent access.',
        weakness: isPt ? 'Não possui opção de validade customizada por horas ou minutos.' : 'Lacks granular hourly or custom minute validity caps.',
        evidenceStatus: 'verified_ui'
      }
    ],

    useCases: [
      {
        scenarioId: 'msp',
        scenarioName: isPt ? 'Provedor de Serviços Gerenciados (MSP)' : 'Managed Service Provider (MSP)',
        iconName: 'Layers',
        suitabilityScore: 9.5,
        suitabilityRating: 'Ideal',
        rationale: isPt 
          ? 'A hierarquia de projetos em 3 níveis permite que MSPs organizem sub-inquilinos, locais e clientes de forma limpa em 17+ projetos.'
          : 'Nested 3-level project hierarchy allows MSPs to organize sub-tenants, sites, and clients cleanly across 17+ projects.',
        keyFeatures: isPt 
          ? ['Árvore de Projetos Hierárquica em 3 Níveis', 'Isolamento Multi-Tenant', 'Visão Geral Global da Frota']
          : ['Nested 3-Level Project Tree', 'Multi-Tenant Isolation', 'Global Device Fleet Overview'],
        caveats: isPt ? ['Registro de licença de parceiro recomendado para opções de marca própria.'] : ['Partner license registration recommended for white-label options.']
      },
      {
        scenarioId: 'smb',
        scenarioName: isPt ? 'Pequenas e Médias Empresas (PME)' : 'Small & Medium Business (SMB)',
        iconName: 'Store',
        suitabilityScore: 8.8,
        suitabilityRating: 'Suitable',
        rationale: isPt
          ? 'Configuração limpa de WPA3-SAE, portal captivo com SMS integrado e painel altamente responsivo.'
          : 'Clean WPA3-SAE setup, built-in captive portal with SMS auth, and responsive dashboard.',
        keyFeatures: isPt
          ? ['Criptografia WPA3-SAE', 'Portal Captivo com SMS / Voucher', 'Roaming Rápido 802.11k/v/r']
          : ['WPA3-SAE Encryption', 'SMS Guest Captive Portal', '802.11k/v/r Auto Roaming'],
        caveats: isPt ? ['Recursos padrão incluídos com o hardware.'] : ['Standard basic features included with hardware.']
      },
      {
        scenarioId: 'multisite',
        scenarioName: isPt ? 'Corporativo Multi-Site Distribuído' : 'Distributed Multi-Site Corporate',
        iconName: 'Globe',
        suitabilityScore: 9.2,
        suitabilityRating: 'Ideal',
        rationale: isPt
          ? 'Gerenciamento unificado de APs Wi-Fi 6, switches, gateways SD-WAN e pontes sem fio outdoor (CPE).'
          : 'Unified management of Wi-Fi 6 APs, switches, SD-WAN gateways, and outdoor CPE wireless bridges.',
        keyFeatures: isPt
          ? ['Integração com Gateway SD-WAN', 'Suporte a Pontes Sem Fio (CPE)', 'Mapa de Topologia Dinâmico']
          : ['SD-WAN Gateway Integration', 'Wireless Bridge (CPE) Support', 'Dynamic Network Topology Map'],
        caveats: isPt ? ['Certifique-se de planejar a faixa de IP dos túneis SD-WAN.'] : ['Ensure SD-WAN tunnel IP range is planned ahead.']
      }
    ]
  };
};

export const yunlinkCloud = getYunlinkCloud('pt');
