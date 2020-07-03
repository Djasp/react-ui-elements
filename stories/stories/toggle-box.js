import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  ToggleBoxExample, ToggleBoxExpandedExample, ToggleBoxNoLabelExample
} from '../components/ToggleBox';

storiesOf('ToggleBox', module)
  .add('ToggleBox', function() {
    return <ToggleBoxExample />;
  })
  .add('Expanded', function() {
    return <ToggleBoxExpandedExample />;
  })
  .add('No label', function() {
    return <ToggleBoxNoLabelExample />;
  });
