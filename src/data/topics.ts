import { TopicDefinition, TopicPlatformEntry } from '../types/platform';

export const getTopics = (lang: 'en' | 'pt'): TopicDefinition[] => {
  const isPt = lang === 'pt';

  /**
   * Dahua and INC Cloud have no live-audited screen for any topic yet.
   * This scaffolds their "coming soon" card for a given topic so every
   * topic automatically has a slot for every registered vendor.
   */
  const pendingOtherVendors = (topicTitle: { pt: string; en: string }): TopicPlatformEntry[] => [
    {
      platformId: 'dahua',
      platformName: 'Dahua',
      vendor: 'Dahua Technology',
      logoColor: '#94a3b8',
      available: false,
      unavailableNote: isPt
        ? `Ainda não auditamos a tela ao vivo de "${topicTitle.pt}" da Dahua. Assim que tivermos acesso a uma conta real e às capturas de tela, esta comparação será preenchida com dados verificados.`
        : `We haven't audited Dahua's live "${topicTitle.en}" screen yet. Once we have access to a real account and screen captures, this comparison will be filled in with verified data.`
    },
    {
      platformId: 'inc-cloud',
      platformName: 'INC Cloud',
      vendor: 'Intelbras',
      logoColor: '#00cc66',
      available: false,
      unavailableNote: isPt
        ? `Ainda não auditamos a tela ao vivo de "${topicTitle.pt}" do INC Cloud. Assim que tivermos acesso a uma conta real e às capturas de tela, esta comparação será preenchida com dados verificados.`
        : `We haven't audited INC Cloud's live "${topicTitle.en}" screen yet. Once we have access to a real account and screen captures, this comparison will be filled in with verified data.`
    }
  ];

  return [
    {
      id: 'iam-governance',
      title: isPt ? 'Gestão de Contas, Acessos e Governança (IAM)' : 'Account, Access & Governance Management (IAM)',
      description: isPt
        ? 'Como cada plataforma estrutura contas, hierarquia organizacional e controle de permissões entre times, clientes e MSPs.'
        : 'How each platform structures accounts, organizational hierarchy, and permission control across teams, customers, and MSPs.',
      iconName: 'UserCog',
      platforms: [
        {
          platformId: 'yunlink',
          platformName: 'Yunlink',
          vendor: 'CloudNetlot / Ruike Technology',
          logoColor: '#2563eb',
          available: true,
          screenshotUrl: '/yunlink_en_02_project_list_1788303810704.png',
          navigationPath: 'ruike-cloud.com → Project → Project Selector',
          summary: isPt
            ? 'Hierarquia de Projetos em 3 Níveis (Conta → Projeto Nível 1 → Nível 2 → Nível 3 → Local), com árvore de projetos hierárquica real confirmada: 14 projetos ativos gerenciando 27 dispositivos, incluindo sub-inquilinos aninhados. MSPs podem delegar controle com permissões isoladas por nível e atribuição de sub-contas.'
            : '3-Tier Nested Project Hierarchy (Account → Project Level 1 → Level 2 → Level 3 → Site), with a real confirmed project tree: 14 active projects managing 27 devices, including nested sub-tenants. MSPs can delegate control with isolated per-level permissions and sub-account assignment.',
          configOptions: isPt
            ? ['Hierarquia de Projetos em 3 Níveis', 'Isolamento Multi-Tenant por Projeto', 'Delegação de Funções de Técnicos', 'Atribuição de Sub-Contas', 'Estatísticas de Uso por Projeto']
            : ['3-Level Nested Project Hierarchy', 'Per-Project Multi-Tenant Isolation', 'Technician Role Delegation', 'Sub-Account Assignment', 'Per-Project Usage Statistics']
        },
        ...pendingOtherVendors({ pt: 'Gestão de Contas, Acessos e Governança (IAM)', en: 'Account, Access & Governance Management (IAM)' })
      ]
    },
    {
      id: 'hardware-lifecycle',
      title: isPt ? 'Provisionamento, Adoção e Ciclo de Vida do Hardware' : 'Hardware Provisioning, Adoption & Lifecycle',
      description: isPt
        ? 'Como cada plataforma adota novos equipamentos na nuvem, mantém o inventário de dispositivos e gerencia seu ciclo de vida.'
        : 'How each platform adopts new hardware into the cloud, keeps a device inventory, and manages its lifecycle.',
      iconName: 'Boxes',
      platforms: [
        {
          platformId: 'yunlink',
          platformName: 'Yunlink',
          vendor: 'CloudNetlot / Ruike Technology',
          logoColor: '#2563eb',
          available: true,
          screenshotUrl: '/yunlink_en_04_device_list_1788303923768.png',
          navigationPath: 'ruike-cloud.com → Project 3 → Entire Network → Device List',
          summary: isPt
            ? 'Adoção por vínculo de Número de Série (SN) / MAC ou descoberta automática na nuvem. Dispositivos vinculados via SN ao projeto ativo, com desvinculação permitida. Inventário confirmado cobrindo APs, gateways, pontes CPE, switches e roteadores (WB5AX, LTE-F300, WB5FM, WB2FM, Q3000, R3000) com mapeamento de SN, IP de gerenciamento e versão de firmware.'
            : 'Adoption via Serial Number (SN) / MAC binding or cloud auto-discovery scan. Devices bound via SN to the active project, with unbind supported. Confirmed inventory covering APs, gateways, CPE bridges, switches, and routers (WB5AX, LTE-F300, WB5FM, WB2FM, Q3000, R3000) with SN, management IP, and firmware build mapping.',
          configOptions: isPt
            ? ['Vínculo por Número de Série (SN) / MAC', 'Descoberta Automática na Nuvem', 'Inventário Completo por Categoria de Dispositivo', 'Ações de Reinicialização e Configuração em Lote', 'Desvinculação de Dispositivo do Projeto']
            : ['Serial Number (SN) / MAC Binding', 'Cloud Auto-Discovery Scan', 'Full Inventory by Device Category', 'Batch Reboot & Configuration Actions', 'Device Unbind from Project']
        },
        ...pendingOtherVendors({ pt: 'Provisionamento, Adoção e Ciclo de Vida do Hardware', en: 'Hardware Provisioning, Adoption & Lifecycle' })
      ]
    },
    {
      id: 'wireless-management',
      title: isPt ? 'Gerenciamento Wireless (WLAN)' : 'Wireless Management (WLAN)',
      description: isPt
        ? 'Configuração de SSIDs, criptografia, ajustes de RF, roaming e demais controles de rede sem fio.'
        : 'SSID configuration, encryption, RF tuning, roaming, and other wireless network controls.',
      iconName: 'Wifi',
      platforms: [
        {
          platformId: 'yunlink',
          platformName: 'Yunlink',
          vendor: 'CloudNetlot / Ruike Technology',
          logoColor: '#2563eb',
          available: true,
          screenshotUrl: '/yunlink_wireless_config_en_1788302058424.png',
          navigationPath: 'ruike-cloud.com → Project 1 → Config → Intelligent → WiFi Config → Add',
          summary: isPt
            ? 'Suporte completo a criptografia WPA3-SAE e WPA/WPA2-PSK, mapeamento de VLANs multi-SSID (802.1Q, faixa de 3 a 4060), configuração de RF por rádio (canal 2.4G/5G, largura 20/40/80 MHz, potência de transmissão, Short GI), limiar de cobertura configurável (-95 dBm), roaming rápido 802.11k/v/r e limites de taxa por SSID/cliente.'
            : 'Full support for WPA3-SAE and WPA/WPA2-PSK encryption, multi-SSID VLAN mapping (802.1Q, range 3-4060), per-radio RF configuration (2.4G/5G channel, 20/40/80 MHz width, transmit power, Short GI), configurable coverage threshold (-95 dBm), 802.11k/v/r fast roaming, and per-SSID/client rate limits.',
          configOptions: isPt
            ? ['Multi-SSID & Mapeamento de VLAN (3-4060)', 'Criptografia WPA3-SAE & WPA2-PSK', 'Configuração de RF & Largura de Canal', 'Roaming Rápido 802.11k/v/r', 'Limite de Banda por SSID/Cliente', 'Otimização Agendada & Auto Reboot', 'Wireless Tuning com 1 clique']
            : ['Multi-SSID & VLAN Tagging (3-4060)', 'WPA3-SAE & WPA2-PSK Encryption', 'RF Configuration & Channel Width', '802.11k/v/r Fast Roaming', 'Per-SSID/Client Rate Limiting', 'Timed Optimization & Auto Reboot', 'One-Click Wireless Tuning']
        },
        ...pendingOtherVendors({ pt: 'Gerenciamento Wireless (WLAN)', en: 'Wireless Management (WLAN)' })
      ]
    },
    {
      id: 'routing-edge',
      title: isPt ? 'Gerenciamento de Roteamento e Borda (Gateways/Firewalls)' : 'Routing & Edge Management (Gateways/Firewalls)',
      description: isPt
        ? 'Configuração de gateways SD-WAN, regras de roteamento, firewall e demais controles de borda de rede.'
        : 'SD-WAN gateway configuration, routing rules, firewall, and other network-edge controls.',
      iconName: 'Router',
      platforms: [
        {
          platformId: 'yunlink',
          platformName: 'Yunlink',
          vendor: 'CloudNetlot / Ruike Technology',
          logoColor: '#2563eb',
          available: false,
          unavailableNote: isPt
            ? 'O ecossistema do Yunlink inclui gateways SD-WAN (LTE-F300, Q3000, R3000) e a arquitetura menciona orquestração de gateways SD-WAN, mas ainda não auditamos ao vivo a tela específica de configuração de roteamento/firewall. Assim que revisarmos essa tela, esta comparação será preenchida com dados verificados.'
            : "Yunlink's ecosystem includes SD-WAN gateways (LTE-F300, Q3000, R3000) and the architecture mentions SD-WAN gateway orchestration, but we haven't live-audited the specific routing/firewall configuration screen yet. Once we review that screen, this comparison will be filled in with verified data."
        },
        ...pendingOtherVendors({ pt: 'Gerenciamento de Roteamento e Borda (Gateways/Firewalls)', en: 'Routing & Edge Management (Gateways/Firewalls)' })
      ]
    },
    {
      id: 'switching-management',
      title: isPt ? 'Gerenciamento de Comutação (Switching)' : 'Switching Management',
      description: isPt
        ? 'Configuração e monitoramento de portas, VLANs, PoE e demais controles de switches gerenciados.'
        : 'Port configuration and monitoring, VLANs, PoE, and other managed-switch controls.',
      iconName: 'Network',
      platforms: [
        {
          platformId: 'yunlink',
          platformName: 'Yunlink',
          vendor: 'CloudNetlot / Ruike Technology',
          logoColor: '#2563eb',
          available: true,
          screenshotUrl: '/yunlink_switch_ports_en_1788302077902.png',
          navigationPath: 'ruike-cloud.com → Project 1 → Entire Network → Device List → MY WTP 1 → Device Info',
          summary: isPt
            ? 'Monitoramento ao vivo de portas RJ45 de cobre Gigabit com exibição de negociação de velocidade (1000Mbps), mapeamento de atributos de interface LAN/WAN, tabela de endereços MAC e informações de rede IP/Subnet/DNS.'
            : 'Live monitoring of Gigabit RJ45 copper ports with 1000Mbps speed negotiation display, LAN/WAN interface attribute mapping, MAC address table, and IP/Subnet/DNS network info.',
          configOptions: isPt
            ? ['Status de Portas Gigabit & Negociação de Velocidade', 'Mapeamento de Atributos LAN/WAN', 'Tabela de Endereços MAC', 'Informações de Rede IP/Subnet/DNS']
            : ['Gigabit Port Status & Speed Negotiation', 'LAN/WAN Attribute Mapping', 'MAC Address Table', 'IP/Subnet/DNS Network Info']
        },
        ...pendingOtherVendors({ pt: 'Gerenciamento de Comutação (Switching)', en: 'Switching Management' })
      ]
    },
    {
      id: 'captive-portal',
      title: isPt ? 'Controle de Acesso de Visitantes (Captive Portal)' : 'Guest Access Control (Captive Portal)',
      description: isPt
        ? 'Como cada plataforma implementa a tela de autenticação de visitantes: personalização visual, métodos de login e opções de configuração disponíveis.'
        : 'How each platform implements the guest authentication screen: visual customization, login methods, and available configuration options.',
      iconName: 'DoorOpen',
      platforms: [
        {
          platformId: 'yunlink',
          platformName: 'Yunlink',
          vendor: 'CloudNetlot / Ruike Technology',
          logoColor: '#2563eb',
          available: true,
          screenshotUrl: '/yunlink_portal_mobile.png',
          screenshots: {
            mobile: '/yunlink_portal_mobile.png',
            desktop: '/yunlink_portal_desktop.png'
          },
          navigationPath: 'ruike-cloud.com → Project 1 → Config → Auth → Portal',
          summary: isPt
            ? 'Interface de gerenciamento de portal captivo auditada no Yunlink (ruike-cloud.com). Oferece visualização em tempo real com alternância entre Mobile e Desktop, cobrindo as 3 fases do fluxo de acesso: Pré-Autenticação (Before Auth), Em Autenticação (Process Auth) e Pós-Autenticação (After Auth).'
            : 'Audited Captive Portal management interface on Yunlink (ruike-cloud.com). Features real-time visual preview switching between Mobile and Desktop views across 3 access lifecycle stages: Before Auth, Process Auth, and After Auth.',
          configOptions: isPt
            ? [
                'Carrossel de Banners: Configuração de exatamente 3 imagens carrossel na página principal (Before Auth). Não possui opção para deixar uma imagem estática única sem rotação.',
                'Resoluções e Limites: Banner Mobile sugerido em 1170x1020px (máx. 200KB, JPG/PNG); Banner Desktop sugerido em 1920x500px (máx. 200KB, JPG/PNG).',
                'Métodos de Autenticação Disponíveis: "One Click" (Acesso com 1 clique), "SMS" (Verificação via mensagem de texto) e "Member" (Login de membros/usuários cadastrados).',
                'Parâmetros Personalizáveis: Título do Portal (Title Name), URL de redirecionamento pós-login (Guide Address, ex: https://www.baidu.com) e Seletor de Cor do Tema (Color).',
                'Submenus da Seção Auth: Estrutura dividida em Portal, Auth Methods, Strategy, Auth Config e Auth Details.',
                '---',
                '📌 Configurações dos Métodos de Autenticação (Auth Methods):',
                '• Gerenciamento de Membros (Aba Member): Cadastro com regra estrita de senha ("Member password can only contain letters, numbers, and _-, and must be between 6 and 20 characters"). Permite editar senha, excluir conta individualmente, importar via template Excel (.xlsx/csv) e deletar em massa (Batch Delete).',
                '• Autenticação 1-Clique (Aba One Click): Tela informativa ("One-click authentication can be enabled by simply turning on this function in the authentication settings. No additional configuration is required."). Ativada diretamente no menu geral, sem necessidade de formulário adicional.',
                '• ⚠️ Ausência de Configuração de Gateway SMS: Embora o método SMS seja listado no portal principal, não foi encontrada nenhuma tela ou menu de configuração de Gateway SMS / Provedor SMS no painel.',
                '---',
                '📌 Estratégias de Autenticação, White List & Black List (Strategy):',
                '• Configuração de Estratégias (Strategy Name): Cadastro unitário de regras de acesso com nome customizado.',
                '• Validade de Autenticação (Validity Auth): Opções de expiração do acesso incluindo 1 Dia (One Day), 2 Dias, 3 Dias, 4 Dias, 5 Dias, 6 Dias, 7 Dias ou Acesso Permanente (Permanent).',
                '• Regras de White List (Lista Permitida): Filtro por IP ou MAC com suporte a múltiplos endereços separados por vírgula (",").',
                '• Regras de Black List (Lista Bloqueada): Filtro por IP ou MAC com suporte a múltiplos endereços separados por vírgula (",").',
                '• Gerenciamento & Exclusão em Lote (Strategy Management): Tabela com busca, adição unitária e botão Batch Delete para exclusão em massa.'
              ]
            : [
                'Carousel Banners: Configures exactly 3 carousel banner images on the main page (Before Auth). No option available for a single fixed static image without carousel rotation.',
                'Resolutions & Limits: Mobile banner suggested at 1170x1020px (max 200KB, JPG/PNG); Desktop banner suggested at 1920x500px (max 200KB, JPG/PNG).',
                'Available Auth Methods: "One Click" (Direct 1-click access), "SMS" (Text verification code), and "Member" (Registered user/member login).',
                'Customizable Parameters: Portal Title (Title Name), Post-auth redirect URL (Guide Address, e.g., https://www.baidu.com), and Accent Theme Color picker (Color).',
                'Auth Section Sub-menus: Structured into Portal, Auth Methods, Strategy, Auth Config, and Auth Details.',
                '---',
                '📌 Authentication Methods Settings (Auth Methods):',
                '• Member Management (Member Tab): Account creation with strict password rule ("Member password can only contain letters, numbers, and _-, and must be between 6 and 20 characters"). Supports editing passwords, individual deletion, Excel template import (.xlsx/csv), and Batch Delete.',
                '• One-Click Authentication (One Click Tab): Informational notice screen ("One-click authentication can be enabled by simply turning on this function in the authentication settings. No additional configuration is required."). Enabled directly in general settings without additional page setup.',
                '• ⚠️ Absence of SMS Configuration: No SMS Gateway / Provider configuration screen was found in the panel.',
                '---',
                '📌 Authentication Strategies, White List & Black List (Strategy):',
                '• Strategy Configuration (Strategy Name): Individual rule creation with custom strategy naming.',
                '• Authentication Validity (Validity Auth): Expiration controls including One Day, Two Day, Three Day, Four Day, Five Day, Six Day, Seven Day, or Permanent access.',
                '• White List Rules (Allowed List): Selectable filter mode by IP or MAC address with multiple entry support separated by commas (",").',
                '• Black List Rules (Blocked List): Selectable filter mode by IP or MAC address with multiple entry support separated by commas (",").',
                '• Management & Bulk Deletion (Strategy Management): Table view with strategy name search, individual edit controls, and "Batch Delete" button for bulk rule removal.'
              ]
        },
        ...pendingOtherVendors({ pt: 'Controle de Acesso de Visitantes (Captive Portal)', en: 'Guest Access Control (Captive Portal)' })
      ]
    },
    {
      id: 'auth-config',
      title: isPt ? 'Configurações de Autenticação (Auth Config)' : 'Authentication Configuration (Auth Config)',
      description: isPt
        ? 'Como cada plataforma configura os métodos de autenticação ativos, aplica regras de acesso aos SSIDs e vincula dispositivos autorizados ao portal captivo.'
        : 'How each platform configures active authentication methods, applies access rules to SSIDs, and binds authorized devices to the captive portal.',
      iconName: 'ShieldCheck',
      platforms: [
        {
          platformId: 'yunlink',
          platformName: 'Yunlink',
          vendor: 'CloudNetlot / Ruike Technology',
          logoColor: '#2563eb',
          available: true,
          screenshotUrl: '/yunlink_deep_02_auth_config_1788351322680.png',
          navigationPath: 'ruike-cloud.com → Project → Config → Auth → Auth Config',
          summary: isPt
            ? 'A tela "Auth Config" é o painel central de controle dos métodos de autenticação do portal captivo. Permite ativar/desativar individualmente os métodos (One Click habilitado, Member desabilitado), configurar a página de autenticação (Auth page, Strategy, Language) e aplicar as regras a SSIDs específicos via modal "Auth Rules". Também gerencia dispositivos autorizados vinculados ao portal. ⚠️ Não existe configuração de gateway SMS: o método SMS aparece como opção no portal, mas não existe nenhuma tela de configuração de provedor/gateway SMS no painel.'
            : 'The "Auth Config" screen is the central control panel for captive portal authentication methods. It allows toggling individual methods on/off (One Click enabled, Member disabled), configuring the auth page (Auth page, Strategy, Language), and applying rules to specific SSIDs via the "Auth Rules" modal. It also manages authorized devices bound to the portal. ⚠️ No SMS gateway configuration exists: SMS appears as a method option in the portal, but there is no SMS provider/gateway configuration screen anywhere in the panel.',
          configOptions: isPt
            ? [
                '📌 Seção: Config auth methods — Métodos de Autenticação Disponíveis:',
                '• One Click (1-Clique): Toggle habilitado (azul). Ativação direta sem configuração adicional. Exibe ícone de cartão/acesso rápido.',
                '• Member (Membros): Toggle desabilitado (cinza). Login com credenciais de usuários cadastrados. Exibe ícone de usuário.',
                '⚠️ SMS: Ausente na tela Auth Config. O método SMS aparece no portal como opção, mas NÃO existe tela de configuração de gateway/provedor SMS no painel da plataforma.',
                '---',
                '📌 Seção: Auth page config — Configuração da Página de Autenticação:',
                '• Auth page: Dropdown para selecionar qual página/template do portal será exibido (valor padrão: "Default").',
                '• Strategy: Dropdown para vincular uma estratégia de acesso (validade, white/black list). Exibe "please select" quando nenhuma está vinculada.',
                '• Language: Dropdown de idioma da página de autenticação (valor exibido: "English").',
                '• Botão Save: Salva as configurações de Auth page config.',
                '---',
                '📌 Botão Auth Range → Modal "Auth Rules" — Aplicação por SSID:',
                '• O botão "Auth Range" no topo da tela abre o modal "Auth Rules".',
                '• Auth Range: Lista de checkboxes com todos os SSIDs do projeto disponíveis para vinculação. Confirmados no ambiente auditado: wireless, SSID1, SSID2, test1017.',
                '• Funcionamento: Ao marcar um SSID, a configuração de autenticação (Auth Config) passa a ser aplicada naquele SSID. Permite controle granular por rede sem fio.',
                '• Botão OK confirma a seleção; X fecha sem salvar.',
                '---',
                '📌 Botão Auth Device → Modal "Auth Device" — Dispositivos Autorizados:',
                '• O botão "Auth Device 0 Units" no topo abre o modal "Auth Device".',
                '• Abas disponíveis: "Add Devices" (para vincular novos dispositivos) e "Auth Device 0 Units" (lista de dispositivos já vinculados).',
                '• Tabela de dispositivos: Colunas = Device serial number, Name, Type, IP, MAC, Config.',
                '• Estado vazio: Exibe ilustração de roteador Wi-Fi com a mensagem "Please select the button in the upper left corner to add the device".',
                '• Propósito: Permite registrar dispositivos específicos como autorizados no contexto do portal captivo — possivelmente para whitelist baseada em hardware (ex: APs, gateways específicos que aplicam o portal). Funcionalidade ainda em investigação, sem dispositivos vinculados no ambiente auditado (Total 0).',
                '• Botão Delete All: Remove todos os vínculos de configuração de auth do projeto.',
              ]
            : [
                '📌 Section: Config auth methods — Available Authentication Methods:',
                '• One Click: Toggle enabled (blue). Direct activation with no additional configuration required. Displays a card/quick-access icon.',
                '• Member: Toggle disabled (grey). Login with credentials of registered users. Displays a user icon.',
                '⚠️ SMS: Absent from the Auth Config screen. The SMS method appears as an option in the portal, but there is NO SMS gateway/provider configuration screen anywhere in the platform panel.',
                '---',
                '📌 Section: Auth page config — Auth Page Configuration:',
                '• Auth page: Dropdown to select which portal page/template is displayed to guests (default value: "Default").',
                '• Strategy: Dropdown to link an access strategy (validity period, white/black lists). Shows "please select" when none is linked.',
                '• Language: Dropdown for the auth page display language (shown value: "English").',
                '• Save button: Saves the Auth page config settings.',
                '---',
                '📌 Auth Range Button → "Auth Rules" Modal — SSID Assignment:',
                '• The "Auth Range" button at the top opens the "Auth Rules" modal.',
                '• Auth Range: A checklist of all SSIDs in the project available for binding. Confirmed in audited environment: wireless, SSID1, SSID2, test1017.',
                '• Behavior: Checking an SSID applies the current Auth Config to that wireless network. Enables granular per-SSID authentication control.',
                '• OK button confirms selection; X closes without saving.',
                '---',
                '📌 Auth Device Button → "Auth Device" Modal — Authorized Devices:',
                '• The "Auth Device 0 Units" button at the top opens the "Auth Device" modal.',
                '• Available tabs: "Add Devices" (bind new devices) and "Auth Device 0 Units" (list of already-bound devices).',
                '• Device table columns: Device serial number, Name, Type, IP, MAC, Config.',
                '• Empty state: Displays a Wi-Fi router illustration with the message "Please select the button in the upper left corner to add the device".',
                '• Purpose: Allows registering specific devices as authorized within the captive portal context — likely for hardware-based whitelisting (e.g., specific APs or gateways that enforce the portal). Feature still under investigation; no devices bound in the audited environment (Total 0).',
                '• Delete All button: Removes all auth configuration bindings from the project.',
              ]
        },
        ...pendingOtherVendors({ pt: 'Configurações de Autenticação (Auth Config)', en: 'Authentication Configuration (Auth Config)' })
      ]
    },
    {

      id: 'monitoring-observability',
      title: isPt ? 'Monitoramento, Dashboards e Observabilidade' : 'Monitoring, Dashboards & Observability',
      description: isPt
        ? 'Painéis em tempo real, telemetria de dispositivos e visão geral de saúde da rede.'
        : 'Real-time dashboards, device telemetry, and overall network health visibility.',
      iconName: 'Activity',
      platforms: [
        {
          platformId: 'yunlink',
          platformName: 'Yunlink',
          vendor: 'CloudNetlot / Ruike Technology',
          logoColor: '#2563eb',
          available: true,
          screenshotUrl: '/yunlink_en_01_dashboard_1788303751884.png',
          navigationPath: 'ruike-cloud.com → Home → Project Summary',
          summary: isPt
            ? 'Painel geral multi-projeto em tempo real (17 projetos, 24 dispositivos) com detalhamento por categoria (AP, Roteador, CPE, Switch, Gateway) e tempo ativo de 321 dias. Inclui também mapa de topologia dinâmica interativa e gaveta de telemetria de CPU/Memória por dispositivo, além de uma tela NOC Large Screen dedicada em modo escuro com distribuição por tipo de equipamento e status online/offline.'
            : 'Real-time multi-project dashboard (17 projects, 24 devices) with category breakdown (AP, Router, CPE, Switch, Gateway) and 321-day uptime tracking. Also includes an interactive dynamic topology map and a per-device CPU/Memory telemetry drawer, plus a dedicated dark-mode NOC Large Screen with device-type distribution and online/offline status.',
          configOptions: isPt
            ? ['Painel Geral Multi-Projeto em Tempo Real', 'Mapa Dinâmico Interativo de Topologia', 'Telemetria de CPU & Memória por Dispositivo', 'Tela NOC Large Screen Dedicada', 'Contadores de Tempo Ativo (Uptime)']
            : ['Real-Time Multi-Project Overview Dashboard', 'Interactive Dynamic Topology Map', 'Per-Device CPU & Memory Telemetry', 'Dedicated NOC Large Screen', 'Uptime Counters']
        },
        ...pendingOtherVendors({ pt: 'Monitoramento, Dashboards e Observabilidade', en: 'Monitoring, Dashboards & Observability' })
      ]
    },
    {
      id: 'alerts-notifications',
      title: isPt ? 'Alertas, Notificações e Eventos' : 'Alerts, Notifications & Events',
      description: isPt
        ? 'Como cada plataforma registra e notifica eventos de rede, alarmes de hardware e limites de uso.'
        : 'How each platform logs and notifies network events, hardware alarms, and usage thresholds.',
      iconName: 'Bell',
      platforms: [
        {
          platformId: 'yunlink',
          platformName: 'Yunlink',
          vendor: 'CloudNetlot / Ruike Technology',
          logoColor: '#2563eb',
          available: true,
          screenshotUrl: '/yunlink_troubleshooting_en_1788302103914.png',
          navigationPath: 'ruike-cloud.com → Project 1 → Monitor → Alarm&Log → Alarm (Resolved 749)',
          summary: isPt
            ? 'Log detalhado de eventos históricos (749+ registros resolvidos) com alertas de limite de uso de CPU & Memória, filtro por número de série e nome do dispositivo, seletor de período e trilha de auditoria de configuração.'
            : 'Detailed historical event log (749+ resolved records) with CPU & Memory utilization threshold alerts, serial number/device name filter, date range selector, and configuration audit trail.',
          configOptions: isPt
            ? ['Log de Eventos Históricos (749+ registros)', 'Alertas de Limite de CPU & Memória', 'Filtro por SN & Nome do Dispositivo', 'Seletor de Período', 'Trilha de Auditoria de Configuração']
            : ['Historical Event Log (749+ records)', 'CPU & Memory Threshold Alerts', 'SN & Device Name Filter', 'Date Range Selector', 'Configuration Audit Trail']
        },
        ...pendingOtherVendors({ pt: 'Alertas, Notificações e Eventos', en: 'Alerts, Notifications & Events' })
      ]
    },
    {
      id: 'maintenance-firmware',
      title: isPt ? 'Manutenção, Backup e Atualizações de Firmware' : 'Maintenance, Backup & Firmware Updates',
      description: isPt
        ? 'Backup e restauração de configuração, e como cada plataforma distribui atualizações de firmware para a frota.'
        : 'Configuration backup and restore, and how each platform rolls out firmware updates across the fleet.',
      iconName: 'RefreshCw',
      platforms: [
        {
          platformId: 'yunlink',
          platformName: 'Yunlink',
          vendor: 'CloudNetlot / Ruike Technology',
          logoColor: '#2563eb',
          available: true,
          navigationPath: 'ruike-cloud.com → Project 1 → Upgrade → Version Upgrade',
          summary: isPt
            ? 'Motor de atualização de firmware confirmado para o modelo AX835 (versão AX835-AP-V2.0-Build20251231184154). Interface com duas abas: Cloud Upgrade (puxa da nuvem) e Local Upgrade (upload manual de binário), com suporte a Batch Upgrade por seleção múltipla de dispositivos e agendamento por modelo de hardware. Backup de configuração via snapshot na nuvem com envio em 1-clique. Auditado ao vivo, porém sem captura de tela salva desta janela específica.'
            : 'Confirmed firmware upgrade engine for the AX835 model (version AX835-AP-V2.0-Build20251231184154). Two-tab interface: Cloud Upgrade (pulls from the cloud repo) and Local Upgrade (manual binary upload), with Batch Upgrade support via multi-device selection and scheduling by hardware model. Configuration backup via cloud snapshot with single-click push. Live-audited, but no screenshot was captured for this specific screen yet.',
          configOptions: isPt
            ? ['Cloud Upgrade & Local Upgrade (dual-path)', 'Batch Upgrade por Seleção Múltipla', 'Agendamento por Modelo de Hardware', 'Snapshot de Backup na Nuvem', 'Envio de Configuração em 1-Clique']
            : ['Cloud Upgrade & Local Upgrade (dual-path)', 'Batch Upgrade via Multi-Device Selection', 'Scheduling by Hardware Model', 'Cloud Configuration Snapshot Backup', 'Single-Click Configuration Push']
        },
        ...pendingOtherVendors({ pt: 'Manutenção, Backup e Atualizações de Firmware', en: 'Maintenance, Backup & Firmware Updates' })
      ]
    },
    {
      id: 'integrations-api',
      title: isPt ? 'Integrações, APIs e Expansão' : 'Integrations, APIs & Extensibility',
      description: isPt
        ? 'Suporte a API REST, integrações externas (como RADIUS) e possibilidades de expansão da plataforma.'
        : 'REST API support, external integrations (such as RADIUS), and platform extensibility.',
      iconName: 'Plug',
      platforms: [
        {
          platformId: 'yunlink',
          platformName: 'Yunlink',
          vendor: 'CloudNetlot / Ruike Technology',
          logoColor: '#2563eb',
          available: true,
          summary: isPt
            ? 'API REST HTTP/HTTPS na nuvem com interface de Autenticação RADIUS. Suporta integração com servidor RADIUS externo e URLs de redirecionamento de portal captivo HTTP/HTTPS para orquestração de gateways SD-WAN e autenticação corporativa. Baseado em especificações de arquitetura documentadas; ainda não auditamos uma tela dedicada de gerenciamento de chaves de API.'
            : "Cloud HTTP/HTTPS REST API with a RADIUS Authentication interface. Supports external RADIUS server integration and HTTP/HTTPS captive portal redirect URLs for SD-WAN gateway orchestration and enterprise authentication. Based on documented architecture specs; we haven't audited a dedicated API key management screen yet.",
          configOptions: isPt
            ? ['API REST HTTP/HTTPS na Nuvem', 'Integração com Servidor RADIUS Externo', 'URLs de Redirecionamento de Portal Captivo', 'Orquestração de Gateways SD-WAN']
            : ['Cloud HTTP/HTTPS REST API', 'External RADIUS Server Integration', 'Captive Portal Redirect URLs', 'SD-WAN Gateway Orchestration']
        },
        ...pendingOtherVendors({ pt: 'Integrações, APIs e Expansão', en: 'Integrations, APIs & Extensibility' })
      ]
    },
    {
      id: 'deployment-cost-model',
      title: isPt ? 'Modelo de Implementação e Custos' : 'Deployment & Cost Model',
      description: isPt
        ? 'Modelo de implantação (nuvem, on-premise), estrutura de licenciamento e como o custo é cobrado.'
        : 'Deployment model (cloud, on-premise), licensing structure, and how cost is charged.',
      iconName: 'Wallet',
      platforms: [
        {
          platformId: 'yunlink',
          platformName: 'Yunlink',
          vendor: 'CloudNetlot / Ruike Technology',
          logoColor: '#2563eb',
          available: true,
          summary: isPt
            ? 'SaaS Cloud Controller (ruike-cloud.com) com clusters regionais multi-região. Serviço de Gerenciamento em Nuvem incluído com o envio do hardware — Controladora em Nuvem Standard incluída com AP, Switch, Ponte CPE e Gateway SD-WAN Yunlink. Dispositivos vinculados via Número de Série ao projeto ativo, com desvinculação permitida. Ambiente sandbox completo em nuvem disponível para testes por 30 dias.'
            : 'SaaS Cloud Controller (ruike-cloud.com) with regional multi-region clusters. Cloud Management Service bundled with hardware deployment — Standard Cloud Controller included with Yunlink AP, Switch, CPE bridge, and SD-WAN gateway hardware. Devices bound via Serial Number to the active project, with unbind supported. Full-feature cloud sandbox environment available for a 30-day trial.',
          configOptions: isPt
            ? ['Modelo SaaS com Clusters Multi-Região', 'Licença Incluída no Hardware (Sem Custo Recorrente Separado)', 'Vínculo de Dispositivo por Número de Série', 'Sandbox Completo por 30 Dias', 'Árvore de Projetos em 3 Níveis para MSPs']
            : ['SaaS Model with Multi-Region Clusters', 'License Bundled with Hardware (No Separate Recurring Cost)', 'Device Binding via Serial Number', 'Full 30-Day Sandbox Trial', '3-Level Project Tree for MSPs']
        },
        ...pendingOtherVendors({ pt: 'Modelo de Implementação e Custos', en: 'Deployment & Cost Model' })
      ]
    }
  ];
};
