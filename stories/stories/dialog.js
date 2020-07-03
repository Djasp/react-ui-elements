import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  DialogExample, DialogExampleOptional, DialogExampleAlert
} from '../components/Dialog';

storiesOf('Dialog', module)
  .add('Dialog', function() {
    return <DialogExample />;
  })
  .add('Optional', function() {
    return <DialogExampleOptional />;
  })
  .add('Alert', function() {
    return <DialogExampleAlert />;
  });
