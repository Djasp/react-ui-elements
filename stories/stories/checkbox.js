import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  CheckboxExampleCheckbox, CheckboxExampleSlider, CheckboxExampleRadioGroup,
  CheckboxExampleReadOnly, CheckboxExampleChecked, CheckboxExampleIndeterminate,
  CheckboxExampleDisabled
} from '../components/Checkbox';

storiesOf('Checkbox', module)
  .add('Checkbox', function() {
    return <CheckboxExampleCheckbox />;
  })
  .add('Slider', function() {
    return <CheckboxExampleSlider />;
  })
  .add('Radio Group', function() {
    return <CheckboxExampleRadioGroup />;
  })
  .add('Read Only', function() {
    return <CheckboxExampleReadOnly />;
  })
  .add('Pre-selected', function() {
    return <CheckboxExampleChecked />;
  })
  .add('Indeterminate', function() {
    return <CheckboxExampleIndeterminate />;
  })
  .add('Disabled', function() {
    return <CheckboxExampleDisabled />;
  });
