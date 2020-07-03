import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  ButtonExample,
  ButtonExampleDisabled,
  ButtonExampleActive,
  ButtonExampleLoading,
  ButtonExampleLoadingText,
  ButtonExampleDropdown,
  ButtonExampleFloated,
  ButtonExampleFluid,
  ButtonExampleIcon,
  ButtonExampleGroup,
  ButtonExampleClickLoad
} from '../components/Button';

storiesOf('Button', module)
  .add('Default', function() {
    return <ButtonExample />;
  })
  .add('Disabled', function() {
    return <ButtonExampleDisabled />;
  })
  .add('Active', function() {
    return <ButtonExampleActive />;
  })
  .add('Loading', function() {
    return <ButtonExampleLoading />;
  })
  .add('Loading Text', function() {
    return <ButtonExampleLoadingText />;
  })
  .add('Dropdown', function() {
    return <ButtonExampleDropdown />;
  })
  .add('Floated', function() {
    return <ButtonExampleFloated />;
  })
  .add('Fluid', function() {
    return <ButtonExampleFluid />;
  })
  .add('Icon', function() {
    return <ButtonExampleIcon />;
  })
  .add('Group', function() {
    return <ButtonExampleGroup />;
  })
  .add('Click to load', function() {
    return <ButtonExampleClickLoad />;
  });
