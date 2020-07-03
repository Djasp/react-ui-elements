import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  SelectExampleSelection, SelectExampleMaxHeight, SelectExampleSelectionFluid, SelectExampleSelectionDisabled, SelectExampleSelectionError,
  SelectExampleSelectionDisabledDefaultValue, SelectExampleSelectionErrorFluid,
  SelectExampleSelectionPlaceholder,
  SelectExampleSelectionHtmlError
} from '../components/Select';

storiesOf('Select', module)
  .add('Selection', function() {
    return <SelectExampleSelection />;
  })
  .add('Selection MaxHeight', function() {
    return <SelectExampleMaxHeight />;
  })
  .add('Selection Placeholder', function() {
    return <SelectExampleSelectionPlaceholder />;
  })
  .add('Selection Fluid', function() {
    return <SelectExampleSelectionFluid />;
  })
  .add('Selection Disabled', function() {
    return <SelectExampleSelectionDisabled />;
  })
  .add('Selection Disabled DefaultValue', function() {
    return <SelectExampleSelectionDisabledDefaultValue />;
  })
  .add('Selection Error', function() {
    return <SelectExampleSelectionError />;
  })
  .add('Selection Error Fluid', function() {
    return <SelectExampleSelectionErrorFluid />;
  })
  .add('Selection Html Error', function() {
    return <SelectExampleSelectionHtmlError />;
  });

