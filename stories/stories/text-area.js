import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  TextAreaExample, TextAreaExampleAutoHeight, TextAreaPlaceholderExample, TextAreaFocusExample,
  TextAreaDefaultValueExample, TextAreaDisabledExample, TextAreaErrorExample
} from '../components/TextArea';

storiesOf('TextArea', module)
  .add('TextArea', function() {
    return <TextAreaExample />;
  })
  .add('Auto-height', function() {
    return <TextAreaExampleAutoHeight />;
  })
  .add('Placeholder', function() {
    return <TextAreaPlaceholderExample />;
  })
  .add('Focus', function() {
    return <TextAreaFocusExample />;
  })
  .add('DefaultValue', function() {
    return <TextAreaDefaultValueExample />;
  })
  .add('Disabled', function() {
    return <TextAreaDisabledExample />;
  })
  .add('Error', function() {
    return <TextAreaErrorExample />;
  });
