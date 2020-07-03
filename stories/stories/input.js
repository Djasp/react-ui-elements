import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  InputExampleInput, InputExamplePlaceholder, InputExampleFocus, InputExampleDefaultValue,
  InputDisabled, InputExampleError, InputExampleFluid, InputExampleMask, InputExampleErrorHtml
} from '../components/Input';

storiesOf('Input', module)
  .add('Input', function() {
    return <InputExampleInput />;
  })
  .add('Placeholder', function() {
    return <InputExamplePlaceholder />;
  })
  .add('Focus', function() {
    return <InputExampleFocus />;
  })
  .add('DefaultValue', function() {
    return <InputExampleDefaultValue />;
  })
  .add('Disabled', function() {
    return <InputDisabled />;
  })
  .add('Error', function() {
    return <InputExampleError />;
  })
  .add('Error Html', function() {
    return <InputExampleErrorHtml />;
  })
  .add('Fluid', function() {
    return <InputExampleFluid />;
  })
  .add('Mask', function() {
    return <InputExampleMask />;
  });
