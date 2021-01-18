import React from 'react';
import AccessibleTabs from './accessibleTabs';
import {runAxeCheck} from "../../setupTests";

test('AccessibleTabs', async () => {
  await runAxeCheck(<AccessibleTabs/>);
});
