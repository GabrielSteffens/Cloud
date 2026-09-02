import { Platform } from '../../types/platform';

export const getYunlinkCloud = (lang: 'en' | 'pt'): Platform => {
  const isPt = lang === 'pt';

  return {
    id: 'yunlink',
    name: 'Yunlink',
    vendor: 'YunNetlot / Ruike Technology',
    logoColor: '#2563eb',
    url: 'https://ruike-cloud.com',
    tagline: isPt 
      ? 'Plataforma de Gerenciamento em Nuvem de Controladora Wi-Fi, SD-WAN e Frota de Pontes Sem Fio (CPE)' 
      : 'Cloud Controller, SD-WAN & Wireless Bridge Fleet Management Platform',
    targetMarket: isPt
      ? 'MSPs, Wi-Fi Corporativo, Gateways SD-WAN, Espaços Comerciais, Pontes Sem Fio Outdoor (CPE)'
      : 'MSPs, Enterprise Wi-Fi, SD-WAN Gateways, Commercial Spaces, Wireless Bridges (CPE)',
    ecosystem: [
      'Wi-Fi 6 APs (WB5AX, WB2FM)', 
      'SD-WAN Gateways (LTE-F300, Q3000, R3000)', 
      'CPE Wireless Bridges (WB5FM)', 
      'Managed Switches', 
      'Cloud Routers'
    ],
    overallScore: 8.5,
    lastEvaluated: '2026-09-01',
    summary: isPt
      ? 'O Yunlink (ruike-cloud.com) é uma plataforma corporativa de gerenciamento em nuvem projetada para arquiteturas de rede multi-tenant, roteamento SD-WAN, APs Wi-Fi de alta densidade, pontes sem fio (CPE) e portais captivos. Possui hierarquia de projetos em 3 níveis (17 projetos ativos), criptografia WPA3-SAE, mapeamento interativo de topologia e otimização automatizada de rádio.'
      : 'Yunlink (ruike-cloud.com) is an enterprise cloud management platform designed for multi-tenant network architectures, SD-WAN routing, high-density Wi-Fi APs, wireless bridges (CPE), and captive portals. It features nested project hierarchies (17 active projects), WPA3-SAE encryption, interactive topology mapping, and automated RF tuning.',

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
      { category: 'security', score: 8.3, rationale: isPt ? 'Motor de Portal Captivo com verificação via SMS, vouchers de acesso, login de membros, integração com servidor RADIUS, WPA3-SAE e isolamento de clientes L2.' : 'Rich Captive Portal engine supporting SMS verification, passcode vouchers, member login, RADIUS server integration, WPA3-SAE, and L2 client isolation.' },
      { category: 'monitoring', score: 8.7, rationale: isPt ? 'Painel geral multi-projeto (17 projetos, 24 dispositivos), 749+ registros históricos de alarmes, acompanhamento de limites de memória/CPU e contadores de tempo ativo de 321 dias.' : 'Multi-project overview dashboard (17 projects, 24 devices), 749+ historical alarm records, memory & CPU threshold tracking, and 321-day uptime counters.' },
      { category: 'troubleshooting', score: 8.4, rationale: isPt ? 'Gráfico de topologia dinâmica interativa exibindo nós de gateway/switch/AP/CPE, registros de limites de CPU/memória, gavetas de status de dispositivos e controles de reinicialização.' : 'Interactive dynamic topology graph displaying gateway/switch/AP/CPE nodes, CPU/memory threshold logs, device status drawers, and reboot controls.' },
      { category: 'automation', score: 8.3, rationale: isPt ? 'Otimização agendada de RF (desligamento programado de Wi-Fi e reinicialização de dispositivos), políticas de roaming automático e agendamento de atualização de firmware.' : 'Timed optimization (scheduled Wi-Fi time off & device reboot), auto wireless roaming policies, batch project management, and version upgrade scheduling.' },
      { category: 'reporting', score: 8.1, rationale: isPt ? 'Exportação completa de eventos de alarmes em CSV, estatísticas de distribuição de dispositivos por categoria e gráficos de tráfego de clientes.' : 'Comprehensive alarm and audit event export, project device distribution stats (AP, Router, CPE, Gateway), and client traffic charts.' },
      { category: 'integration', score: 7.9, rationale: isPt ? 'Autenticação externa RADIUS, URLs de redirecionamento de portal captivo HTTP/HTTPS e orquestração de gateways SD-WAN.' : 'External RADIUS authentication, HTTP/HTTPS captive portal redirect URLs, and SD-WAN gateway orchestration.' },
      { category: 'ux', score: 8.6, rationale: isPt ? 'Navegação limpa no topo e na barra lateral, seletor de idioma (Inglês/Chinês na nuvem), alternador rápido de projetos e formulários modais responsivos.' : 'Clean top/side navigation layout, English language toggle, quick project switcher, modal configuration forms, and responsive design.' },
      { category: 'scalability', score: 9.0, rationale: isPt ? 'Estrutura hierárquica de projetos em 3 níveis (Nível 1, 2 e 3) gerenciando 17 projetos e frotas multi-dispositivos perfeitas para MSPs.' : 'Nested multi-level project structure (Level 1, Level 2, Level 3 org hierarchies) managing 17 projects and multi-device fleets ideal for MSP multi-tenant deployments.' }
    ],

    strengths: [
      { 
        title: isPt ? 'Hierarquia Multi-Tenant em 3 Níveis' : 'Nested Multi-Level Project Hierarchy', 
        description: isPt ? 'Suporta ramificação hierárquica de projetos (Nível 1, Nível 2 e Nível 3), permitindo que MSPs deleguem controle com permissões isoladas entre 17+ projetos.' : 'Supports multi-tier project branching (Level 1, Level 2, Level 3 Orgs), enabling MSPs to delegate tenant control across 17+ projects with isolated permissions.', 
        impact: 'High' 
      },
      { 
        title: isPt ? 'Criptografia WPA3-SAE & Otimização de RF' : 'WPA3-SAE & Advanced RF Tuning', 
        description: isPt ? 'Suporta a moderna criptografia WPA3-SAE junto com largura de canal de 20/40/80MHz, short GI, roaming automático 802.11k/v/r e otimização agendada de RF.' : 'Supports modern WPA3-SAE security alongside 20/40/80MHz channel width, short GI, 802.11k/v/r auto roaming, and scheduled RF tuning.', 
        impact: 'High' 
      },
      { 
        title: isPt ? 'Portal Captivo Integrado com Vouchers e SMS' : 'Integrated Captive Portal & Auth', 
        description: isPt ? 'Construtor de Portal Captivo integrado com suporte a verificação por SMS, vouchers com código, login de membros, acesso com 1-clique e redirecionamento de URL.' : 'Built-in Portal Page designer supporting SMS verification, passcode vouchers, member login, One-Click access, and custom landing redirect URLs.', 
        impact: 'High' 
      },
      { 
        title: isPt ? 'Ecossistema Abrangente SD-WAN e Pontes CPE' : 'Broad SD-WAN & CPE Bridge Ecosystem', 
        description: isPt ? 'Gerencia nativamente pontes sem fio outdoor (WB5FM), gateways SD-WAN (LTE-F300, Q3000, R3000), roteadores, switches e APs Wi-Fi 6 (WB5AX, WB2FM).' : 'Natively manages wireless outdoor bridges (WB5FM), SD-WAN gateways (LTE-F300, Q3000, R3000), routers, switches, and Wi-Fi 6 APs (WB5AX, WB2FM).', 
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
      { id: 'yun-7', category: 'Security', name: isPt ? 'Portal Captivo & Autenticação' : 'Captive Portal & Auth Methods', description: isPt ? 'Páginas de autenticação personalizadas com SMS, vouchers com código, login de membros, 1-clique e URL de destino.' : 'Custom landing pages supporting SMS auth, passcode vouchers, member login, One-Click access, and redirect URLs.', status: 'supported', evidenceBadge: 'verified_ui', evidenceNotes: isPt ? 'Verificado na UI: Config → Auth → Portal Page & Auth Config.' : 'Verified in UI: Config → Auth → Portal Page & Auth Config screens.', screenPath: 'Config → Auth → Portal Page' },
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
