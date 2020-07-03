import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  AlertExampleDismissibleBlockSuccess,
  AlertExampleDismissibleBlockError,
  AlertExampleDismissibleBlockWarning,
  AlertExampleDismissibleBlockSuccessCustomTitle
} from '../components/Alert';

storiesOf('Alert', module)
  .add('Alert Dismissible Block Succes', function() {
    return <AlertExampleDismissibleBlockSuccess />;
  })
  .add('Alert Dismissible Block Error', function() {
    return <AlertExampleDismissibleBlockError />;
  })
  .add('Alert Dismissible Block Warning', function() {
    return <AlertExampleDismissibleBlockWarning />;
  })
  .add('Custom title', function() {
    return <AlertExampleDismissibleBlockSuccessCustomTitle />;
  });
