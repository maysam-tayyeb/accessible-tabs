import React, {FunctionComponent} from "react";

import {TabNav, TabPanel, TabProps} from ".";

import './tabs.css'
import {TabsContextProvider} from "../contexts/TabsContext";

export interface TabsProps {
  id: string;
  'aria-label': string;
  defaultActiveTabKey: string;
  automaticActivation?: boolean;
  children: React.ReactElement<TabProps>[];
}

function renderTabPanel({props: {tabKey, children}}: React.ReactElement<TabProps>) {
  return <TabPanel tabKey={tabKey}>{children}</TabPanel>
}

const Tabs: FunctionComponent<TabsProps> = ({
                                              id,
                                              'aria-label': ariaLabel,
                                              automaticActivation = true,
                                              defaultActiveTabKey,
                                              children
                                            }) => {
  return (
    <TabsContextProvider id={id} defaultActiveTabKey={defaultActiveTabKey}>
      <div className="tabs">
        <TabNav aria-label={ariaLabel} automaticActivation={automaticActivation}>
          {children}
        </TabNav>
        <div>
          {React.Children.map(children, renderTabPanel)}
        </div>
      </div>
    </TabsContextProvider>
  )
}

export default Tabs;
