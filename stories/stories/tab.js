import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  TabExample, TabExampleActivePane
} from '../components/Tab';

storiesOf('Tab', module)
  .add('Tab', function() {
    return <TabExample />;
  })
  .add('Tab Active Pane', function() {
    return <TabExampleActivePane />;
  });
