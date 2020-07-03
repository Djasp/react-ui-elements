import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  RadioAccordionExample, CheckboxAccordionExample, InputAccordionDisabledExample
} from '../components/InputAccordion';

storiesOf('InputAccordion', module)
  .add('Radio options (default)', function() {
    return <RadioAccordionExample />;
  })
  .add('Radio options (with value)', function() {
    return <RadioAccordionExample value='1' />;
  })
  .add('Checkbox options (default)', function() {
    return <CheckboxAccordionExample />;
  })
  .add('Checkbox options (with values)', function() {
    return <CheckboxAccordionExample values={['1', '2']} />;
  })
  .add('Disabled', function() {
    return <InputAccordionDisabledExample />;
  });
