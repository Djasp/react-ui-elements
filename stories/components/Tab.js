import React from 'react';
import { Tab } from '../../src/index.js';

const panes = [
  { menuItem: 'Tab 1', render: () => <div>Tab 1 Content</div> },
  { menuItem: 'Tab 2', render: () => <div>Tab 2 Content</div> },
  { menuItem: () => <div>This is a div</div>, render: () => <div>Tab 3 Content</div> }
];

const TabExample = () => (
  <Tab panes={panes} onTabChange={(index) => console.log(index)} />
);

const TabExampleActivePane = () => (
  <Tab panes={panes} activePane={1} />
);

export {
  TabExample,
  TabExampleActivePane
}
