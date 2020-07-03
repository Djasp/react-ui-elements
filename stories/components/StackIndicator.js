import React from 'react';
import { StackIndicator } from '../../src/index.js';

const stacks = [
  {
    name: 'DSL',
    cssClass: 'stack1',
    enabled: true
  },
  {
    name: 'Cable',
    cssClass: 'stack2',
    enabled: false
  },
  {
    name: 'Mobile',
    cssClass: 'stack3',
    enabled: true
  }
];

const StackIndicatorExample = () => (
  <StackIndicator stacks={stacks} />
);

export {
  StackIndicatorExample
}
