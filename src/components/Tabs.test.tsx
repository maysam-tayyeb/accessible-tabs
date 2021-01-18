import React from 'react';

import {runAxeCheck} from "../setupTests";

import {Tabs, Tab} from '.';

describe('AccessibleTabs', () => {
  test('passes accessibility checks', async () => {
    await runAxeCheck(
      <Tabs id="test_tab_1" aria-label="Test Tabs 1" defaultActiveTabKey="testTab1-1">
        <Tab tabKey="testTab1-1" title="Test Tab 1">Test Tab 1 Contents</Tab>
        <Tab tabKey="testTab1-2" title="Test Tab 2">Test Tab 2 Contents</Tab>
      </Tabs>
    );
    await runAxeCheck(
      <Tabs id="test_tab_2" aria-label="Test Tabs 2" defaultActiveTabKey="testTab2-1" automaticActivation={false}>
        <Tab tabKey="testTab2-1" title="Test Tab 1">Test Tab 1 Contents</Tab>
        <Tab tabKey="testTab2-2" title="Test Tab 2">Test Tab 2 Contents</Tab>
      </Tabs>
    );
  });
});
