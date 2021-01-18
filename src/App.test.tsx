import React from 'react';
import App from './App';
import {runAxeCheck} from "./setupTests";

test('App', async () => {
  await runAxeCheck(<App/>);
});
