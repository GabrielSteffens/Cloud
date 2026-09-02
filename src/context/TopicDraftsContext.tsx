import React, { createContext, useContext, ReactNode } from 'react';
import { useTopicDrafts } from '../hooks/useTopicDrafts';

type TopicDraftsContextType = ReturnType<typeof useTopicDrafts>;

const TopicDraftsContext = createContext<TopicDraftsContextType | undefined>(undefined);

export const TopicDraftsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const value = useTopicDrafts();
  return (
    <TopicDraftsContext.Provider value={value}>
      {children}
    </TopicDraftsContext.Provider>
  );
};

export const useTopicDraftsContext = (): TopicDraftsContextType => {
  const context = useContext(TopicDraftsContext);
  if (!context) {
    throw new Error('useTopicDraftsContext must be used within a TopicDraftsProvider');
  }
  return context;
};
