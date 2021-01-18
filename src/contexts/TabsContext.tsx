import React, {useCallback, useContext, useState} from 'react';

export interface TabsContextType {
  activeTabKey: string;
  setActiveTabKey: (tabKey: string) => void;
}

export interface TabsContextProps extends React.PropsWithChildren<unknown> {
  id: string;
  defaultActiveTabKey: string;
}

const TabsContext = React.createContext<TabsContextType | null>(null);

function TabsContextProvider({id, defaultActiveTabKey, children}: TabsContextProps) {
  const localStorageKey = `${id}_activeTabKey`;
  const activeTabKeyFromStorage = localStorage.getItem(localStorageKey);
  const [activeTabKey, setActiveTabKey] = useState(activeTabKeyFromStorage ?? defaultActiveTabKey)
  const setActiveTabKeyToStateAndStorage = useCallback((tabKey) => {
    setActiveTabKey(tabKey);
    localStorage.setItem(localStorageKey, tabKey);
  }, [localStorageKey])

  return <TabsContext.Provider value={{
    activeTabKey,
    setActiveTabKey: setActiveTabKeyToStateAndStorage
  }}>{children}</TabsContext.Provider>
}

function useTabsContext(): TabsContextType {
  const context = useContext(TabsContext) as TabsContextType

  if (!context) {
    throw new Error('useTabsContext must be used within TabsContextProvider')
  }

  return context;
}

export {TabsContextProvider, useTabsContext};
