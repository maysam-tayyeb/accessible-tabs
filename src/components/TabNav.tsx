import React, {FunctionComponent, useRef} from "react";

import {TabProps} from ".";

import './tabs.css'
import {useTabsContext} from "../contexts/TabsContext";
import {arrayQuerySelector} from "../utils/domUtils";

const getAllTabs = (currentTabList: HTMLDivElement) => {
  return arrayQuerySelector<HTMLButtonElement>(currentTabList, '[data-tab-key]:not(:disabled)');
}
const getFirstTab = (currentTabList: HTMLDivElement) => {
  const tabs = getAllTabs(currentTabList);

  return tabs[0];
}
const getLastTab = (currentTabList: HTMLDivElement) => {
  const tabs = getAllTabs(currentTabList);

  return tabs[tabs.length - 1];
}
const getNextTab = (currentTabList: HTMLDivElement, nextSelector, offset: number) => {
  const tabs = getAllTabs(currentTabList);
  const activeTab = currentTabList.querySelector<HTMLButtonElement>(nextSelector);
  if (!tabs || !activeTab) return null;

  const index = tabs.indexOf(activeTab);
  if (index === -1) return null;

  let nextIndex = index + offset;
  if (nextIndex >= tabs.length) nextIndex = 0;
  if (nextIndex < 0) nextIndex = tabs.length - 1;

  return tabs[nextIndex];
}
const getNextActiveTab = (currentTabList: HTMLDivElement, offset: number) => {
  return getNextTab(currentTabList, '[aria-selected=true]', offset);
};
const getNextFocusableTab = (currentTabList: HTMLDivElement, offset: number) => {
  return getNextTab(currentTabList, '[data-tab-key]:focus', offset);
};

export interface TabNavProps {
  'aria-label': string;
  automaticActivation: boolean;
  children: React.ReactElement<TabProps>[];
}

const TabNav: FunctionComponent<TabNavProps> = ({'aria-label': ariaLabel, automaticActivation, children}) => {
  const {setActiveTabKey} = useTabsContext()
  const tabListRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (event) => {
    const currentTabList = tabListRef.current as HTMLDivElement;

    let nextTab;
    const getNextTab = automaticActivation ? getNextActiveTab : getNextFocusableTab

    switch (event.key) {
      case 'Home':
        nextTab = getFirstTab(currentTabList);
        break;
      case 'End':
        nextTab = getLastTab(currentTabList);
        break;
      case 'ArrowLeft':
        nextTab = getNextTab(currentTabList, -1);
        break;
      case 'ArrowRight':
        nextTab = getNextTab(currentTabList, 1);
        break;
      default:
        return;
    }

    event.preventDefault();

    if (automaticActivation) {
      setActiveTabKey(nextTab.dataset.tabKey);
    }
    nextTab.focus();
  };

  return (
    <div role="tablist" aria-label={ariaLabel} ref={tabListRef} onKeyDown={handleKeyDown}>
      {children}
    </div>
  )
}

export default TabNav;
