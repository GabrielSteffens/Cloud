import { useCallback, useEffect, useState } from 'react';
import { getTopics } from '../data/topics';
import { VENDORS } from '../data/vendors';
import { CustomTopicDraft, LocalizedText, TopicDefinition, TopicEntryDraft } from '../types/platform';

const TOPICS_KEY = 'cloudmatrix.customTopics.v1';
const ENTRIES_KEY = 'cloudmatrix.topicEntryDrafts.v7';

type EntryMap = Record<string, TopicEntryDraft>;

const entryKey = (topicId: string, platformId: string) => `${topicId}::${platformId}`;

function readJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage unavailable
  }
}

function getSanitizedEntries(): EntryMap {
  try {
    // Purge old drafts if present
    localStorage.removeItem('cloudmatrix.topicEntryDrafts.v1');
    localStorage.removeItem('cloudmatrix.topicEntryDrafts.v2');
    localStorage.removeItem('cloudmatrix.topicEntryDrafts.v3');
    localStorage.removeItem('cloudmatrix.topicEntryDrafts.v4');
    localStorage.removeItem('cloudmatrix.topicEntryDrafts.v5');
    localStorage.removeItem('cloudmatrix.topicEntryDrafts.v6');
    const entries = readJSON<EntryMap>(ENTRIES_KEY, {});
    const cleaned: EntryMap = {};
    for (const [k, v] of Object.entries(entries)) {
      const ptOptions = v?.configOptions?.pt ?? [];
      const isStale = ptOptions.some(opt => opt.includes('Vouchers') || opt.includes('Isolamento') || opt.includes('RADIUS'));
      if (!isStale) {
        cleaned[k] = v;
      }
    }
    return cleaned;
  } catch {
    return {};
  }
}

export function useTopicDrafts() {
  const [customTopics, setCustomTopics] = useState<CustomTopicDraft[]>(() => readJSON(TOPICS_KEY, []));
  const [entries, setEntries] = useState<EntryMap>(() => getSanitizedEntries());

  useEffect(() => { writeJSON(TOPICS_KEY, customTopics); }, [customTopics]);
  useEffect(() => { writeJSON(ENTRIES_KEY, entries); }, [entries]);

  const addTopic = useCallback((title: LocalizedText, description: LocalizedText, iconName: string) => {
    const id = `custom-${Date.now().toString(36)}`;
    const topic: CustomTopicDraft = { id, title, description, iconName, createdAt: new Date().toISOString() };
    setCustomTopics(prev => [...prev, topic]);
    return id;
  }, []);

  const getEntry = useCallback((topicId: string, platformId: string): TopicEntryDraft | undefined => {
    return entries[entryKey(topicId, platformId)];
  }, [entries]);

  const saveEntry = useCallback((topicId: string, platformId: string, entry: TopicEntryDraft) => {
    setEntries(prev => ({ ...prev, [entryKey(topicId, platformId)]: { ...entry, updatedAt: new Date().toISOString() } }));
  }, []);

  const getMergedTopics = useCallback((lang: 'pt' | 'en'): TopicDefinition[] => {
    const baseTopics = getTopics(lang);

    const fromCustom: TopicDefinition[] = customTopics.map(topic => ({
      id: topic.id,
      title: topic.title[lang],
      description: topic.description[lang],
      iconName: topic.iconName,
      platforms: []
    }));

    return [...baseTopics, ...fromCustom].map(topic => ({
      ...topic,
      platforms: VENDORS.map(vendor => {
        const basePlatform = topic.platforms.find(p => p.platformId === vendor.id);
        const draft = entries[entryKey(topic.id, vendor.id)];

        const available = draft?.available ?? basePlatform?.available ?? false;

        return {
          platformId: vendor.id,
          platformName: vendor.name,
          vendor: vendor.vendor,
          logoColor: vendor.logoColor,
          available,
          screenshotUrl: draft?.screenshotUrl ?? basePlatform?.screenshotUrl,
          navigationPath: draft?.navigationPath ?? basePlatform?.navigationPath,
          summary: draft?.summary?.[lang] ?? basePlatform?.summary,
          configOptions: draft?.configOptions?.[lang] ?? basePlatform?.configOptions,
          unavailableNote: draft?.unavailableNote?.[lang] ?? basePlatform?.unavailableNote
        };
      })
    }));
  }, [customTopics, entries]);

  const exportData = useCallback(() => {
    return JSON.stringify({ customTopics, entries }, null, 2);
  }, [customTopics, entries]);

  return { customTopics, addTopic, getEntry, saveEntry, getMergedTopics, exportData };
}
