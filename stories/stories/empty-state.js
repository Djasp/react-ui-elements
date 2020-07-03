import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  EmptyStateExample
} from '../components/EmptyState';

storiesOf('EmptyState', module)
  .add('EmptyState', function() {
    return <EmptyStateExample />;
  });
