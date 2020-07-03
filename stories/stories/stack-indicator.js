import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  StackIndicatorExample
} from '../components/StackIndicator';

storiesOf('Stack Indicator', module)
  .add('Stack Indicator', function() {
    return <StackIndicatorExample />;
  });
