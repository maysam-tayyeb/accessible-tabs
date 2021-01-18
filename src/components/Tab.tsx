import React, {FunctionComponent} from "react";
import {useTabsContext} from "../contexts/TabsContext";

export interface TabProps extends React.PropsWithChildren<unknown> {
  tabKey: string;
  disabled?: boolean;
  title: React.ReactNode;
}

const Tab: FunctionComponent<TabProps> = ({title, tabKey, disabled = false}) => {
  const {activeTabKey, setActiveTabKey} = useTabsContext()
  const selected = tabKey === activeTabKey;

  return (
    <button
      role="tab"
      data-tab-key={tabKey}
      aria-controls={tabKey}
      aria-selected={selected}
      aria-disabled={disabled}
      disabled={disabled}
      tabIndex={selected ? undefined : -1}
      onClick={() => {
        setActiveTabKey(tabKey)
      }}
    >{title}</button>
  )
};

export default Tab;
