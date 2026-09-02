import { Platform } from '../../types/platform';
import { getYunlinkCloud } from './yunlinkCloud';

export const getPlatforms = (lang: 'en' | 'pt' = 'pt'): Platform[] => [
  getYunlinkCloud(lang)
];

export const PLATFORMS: Platform[] = getPlatforms('pt');

export const getPlatformById = (id: string, lang: 'en' | 'pt' = 'pt'): Platform | undefined => {
  return getPlatforms(lang).find(p => p.id === id);
};
