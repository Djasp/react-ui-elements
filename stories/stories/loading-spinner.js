import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  LoadingSpinnerExample,
  LoadingSpinnerLightExample,
  LoadingSpinnerDarkExample
} from '../components/LoadingSpinner';

storiesOf('Loading Spinner', module)
  .add('Loading Spinner', function() {
    return <LoadingSpinnerExample />;
  })
  .add('Loading Spinner Light', function() {
    return <LoadingSpinnerLightExample />;
  })
  .add('Loading Spinner Dark', function() {
    return <LoadingSpinnerDarkExample />;
  });
