import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  DropdownExample, DropdownExampleFluid, DropdownExampleDisabled
} from '../components/Dropdown';

storiesOf('Dropdown', module)
  .add('Dropdown', function() {
    return <DropdownExample />;
  })
  .add('Fluid', function() {
    return <DropdownExampleFluid />;
  })
  .add('Disabled', function() {
    return <DropdownExampleDisabled />;
  });
