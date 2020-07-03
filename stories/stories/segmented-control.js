import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  SegmentedControlExample, SegmentedControlStackedExample,
  SegmentedControlFluidExample, SegmentedControlStackedFluidExample
} from '../components/SegmentedControl';

storiesOf('Segmented Control', module)
  .add('Segmented Control', function() {
    return <SegmentedControlExample />;
  })
  .add('Segmented Control Stacked', function() {
    return <SegmentedControlStackedExample />;
  })
  .add('Segmented Control Fluid', function() {
    return <SegmentedControlFluidExample />;
  })
  .add('Segmented Control Stacked Fluid', function() {
    return <SegmentedControlStackedFluidExample />;
  });
