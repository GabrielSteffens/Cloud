import { useCallback, useEffect, useState } from 'react';
import { getTopics } from '../data/topics';
import { VENDORS } from '../data/vendors';
import { CustomTopicDraft, LocalizedText, TopicDefinition, TopicEntryDraft } from '../types/platform';

const TOPICS_KEY = 'cloudmatrix.customTopics.v1';
const ENTRIES_KEY = 'cloudmatrix.topicEntryDrafts.v1';

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
    // localStorage unavailable (private mode, quota, etc.) — draft just won't persist
  }
}

export function useTopicDrafts() {
  const [customTopics, setCustomTopics] = useState<CustomTopicDraft[]>(() => readJSON(TOPICS_KEY, []));
  const [entries, setEntries] = useState<EntryMap>(() => readJSON(ENTRIES_KEY, {}));

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
