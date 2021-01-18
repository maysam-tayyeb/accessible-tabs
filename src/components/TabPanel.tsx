import React, {FunctionComponent} from "react";
import {useTabsContext} from "../contexts/TabsContext";

export interface TabPanelProps extends React.PropsWithChildren<unknown> {
  tabKey: string;
}

const TabPanel: FunctionComponent<TabPanelProps> = ({tabKey, children}) => {
  const {activeTabKey} = useTabsContext();

  return (
    <div id={tabKey} role="tabpanel" hidden={tabKey !== activeTabKey} tabIndex={0}>{children}</div>
  )
}

export default TabPanel;
