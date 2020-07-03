import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  SegmentExample,
  SegmentCollapsibleExample
} from '../components/Segment';

storiesOf('Segment', module)
  .add('Segment', function() {
    return <SegmentExample />;
  })
  .add('Segment Collapsible', function() {
    return <SegmentCollapsibleExample />;
  });
