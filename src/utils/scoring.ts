import { Platform } from '../types/platform';

export interface DynamicRanking {
  title: string;
  subtitle: string;
  badge: string;
  platform: Platform;
  score: number;
  reason: string;
}

export const getDynamicRankings = (platforms: Platform[], lang: 'en' | 'pt' = 'pt'): DynamicRanking[] => {
  if (platforms.length === 0) return [];

  const isPt = lang === 'pt';

  const bestOverall = [...platforms].sort((a, b) => b.overallScore - a.overallScore)[0];
  const bestEnterprise = [...platforms].sort((a, b) => b.scores.scalability - a.scores.scalability)[0];
  const bestWireless = [...platforms].sort((a, b) => b.scores.wireless - a.scores.wireless)[0];
  const bestTroubleshooting = [...platforms].sort((a, b) => b.scores.troubleshooting - a.scores.troubleshooting)[0];
  const bestUX = [...platforms].sort((a, b) => b.scores.ux - a.scores.ux)[0];
  const bestAutomation = [...platforms].sort((a, b) => b.scores.automation - a.scores.automation)[0];

  return [
    {
      title: isPt ? 'Melhor Plataforma Geral' : 'Best Overall Platform',
      subtitle: isPt ? 'Maior pontuação agregada em recursos, usabilidade e escala' : 'Highest aggregate score across features, usability, and scale',
      badge: isPt ? 'PADRÃO OURO' : 'GOLD STANDARD',
      platform: bestOverall,
      score: bestOverall.overallScore,
      reason: isPt 
        ? `${bestOverall.name} (ruike-cloud.com) é uma plataforma de gerenciamento em nuvem projetada para arquiteturas multi-tenant, roteamento SD-WAN, APs Wi-Fi de alta densidade, pontes sem fio (CPE) e portais captivos. Possui hierarquia de projetos em 3 níveis (17 projetos ativos), criptografia WPA3-SAE e ajuste automatizado de RF.`
        : `${bestOverall.name} (ruike-cloud.com) is an enterprise cloud management platform designed for multi-tenant network architectures, SD-WAN routing, high-density Wi-Fi APs, wireless bridges (CPE), and captive portals. It features nested project hierarchies (17 active projects), WPA3-SAE encryption, interactive topology mapping, and automated RF tuning.`
    },
    {
      title: isPt ? 'Melhor Plataforma Corporativa' : 'Best Enterprise Platform',
      subtitle: isPt ? 'Melhor pontuação para escala multi-site e gerenciamento multi-tenant' : 'Top score for multi-site scale, 802.1X security, and RF controls',
      badge: isPt ? 'NÍVEL CORPORATIVO' : 'ENTERPRISE TIER',
      platform: bestEnterprise,
      score: bestEnterprise.scores.scalability,
      reason: isPt
        ? `${bestEnterprise.name} oferece hierarquia de projetos em 3 níveis (Nível 1, Nível 2, Nível 3), RBAC avançado e gerenciamento multi-tenant para MSPs.`
        : `${bestEnterprise.name} provides superior multi-tenant hierarchy, RBAC, and campus RF band steering.`
    },
    {
      title: isPt ? 'Melhor Gerenciamento Wi-Fi' : 'Best Wireless Management',
      subtitle: isPt ? 'Mais bem avaliado em ajuste de RF, roaming rápido e controles de SSID' : 'Highest rated RF radio tuning, fast roaming, and SSID controls',
      badge: isPt ? 'LÍDER EM WI-FI' : 'WIRELESS LEADER',
      platform: bestWireless,
      score: bestWireless.scores.wireless,
      reason: isPt
        ? `${bestWireless.name} se destaca no suporte a WPA3-SAE, largura de canal 20/40/80MHz, roaming 802.11k/v/r e portais captivos.`
        : `${bestWireless.name} excels in Wi-Fi channel management, 802.11r/k/v fast roaming, and guest splash pages.`
    },
    {
      title: isPt ? 'Melhor Diagnóstico e Saúde' : 'Best Troubleshooting & Health',
      subtitle: isPt ? 'Excelência em registros de alarmes, monitoramento de CPU/Memória e topologia' : 'Pinnacle of diagnostic tools, cable testing, and auto-healing',
      badge: isPt ? 'PADRÃO OPERACIONAL' : 'OPS STANDARD',
      platform: bestTroubleshooting,
      score: bestTroubleshooting.scores.troubleshooting,
      reason: isPt
        ? `${bestTroubleshooting.name} possui histórico com 749+ registros de alarmes limpos, monitoramento de CPU/memória e mapa dinâmico de topologia.`
        : `${bestTroubleshooting.name} leads with historical alarm tracking, CPU/memory threshold logs, and dynamic topology graph.`
    },
    {
      title: isPt ? 'Melhor Experiência do Usuário (UX)' : 'Best User Experience (UX)',
      subtitle: isPt ? 'Navegação mais limpa, menus responsivos e alternância rápida de projetos' : 'Cleanest interface navigation, lowest friction, instant response',
      badge: isPt ? 'CAMPEÃO EM UX' : 'UX CHAMPION',
      platform: bestUX,
      score: bestUX.scores.ux,
      reason: isPt
        ? `${bestUX.name} oferece um layout moderno com suporte ao idioma inglês/chinês, alternador rápido de projetos e formulários modais limpos.`
        : `${bestUX.name} offers an exceptionally clean layout, instant load times, and intuitive configuration workflows.`
    },
    {
      title: isPt ? 'Melhor Automação & Agendamentos' : 'Best Automation & Scheduling',
      subtitle: isPt ? 'Otimização de RF agendada, reinicialização programada e roaming rápido' : 'Extensive REST API endpoints, Swagger docs, and webhooks',
      badge: isPt ? 'NÚCLEO DE AUTOMAÇÃO' : 'AUTOMATION CORE',
      platform: bestAutomation,
      score: bestAutomation.scores.automation,
      reason: isPt
        ? `${bestAutomation.name} possui controles automáticos de otimização de rádio, reinicialização agendada de dispositivos e atualização em lote.`
        : `${bestAutomation.name} delivers scheduled RF optimization, timed auto-reboots, and batch firmware upgrades.`
    }
  ];
};

export const getEvidenceSummary = (platforms: Platform[]) => {
  let totalFeatures = 0;
  let verifiedCount = 0;

  platforms.forEach(p => {
    p.features.forEach(f => {
      totalFeatures++;
      if (f.evidenceBadge === 'verified_ui' || f.evidenceBadge === 'documented') {
        verifiedCount++;
      }
    });
  });

  const verifiedPercentage = totalFeatures > 0 ? Math.round((verifiedCount / totalFeatures) * 100) : 100;

  return {
    totalFeatures,
    verifiedCount,
    verifiedPercentage
  };
};
