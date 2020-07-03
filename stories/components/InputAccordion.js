import React from 'react';
import PropTypes from 'prop-types';
import { InputAccordion, Checkbox } from '../../src/index.js';

const RadioAccordionExample = (props) => (
  <InputAccordion radio groupName='group1' value={props.value}>
    <InputAccordion.Section title='Direct debit' value='1' />
    <InputAccordion.Section title='In-store payment' value='2' />
    <InputAccordion.Section title='Collect on delivery' value='3'>
      <p>Children and stuff</p>
    </InputAccordion.Section>
  </InputAccordion>
);

RadioAccordionExample.propTypes = {
  value: PropTypes.any
};

const CheckboxAccordionExample = (props) => (
  <InputAccordion values={props.values}>
    <InputAccordion.Section title='Use customer address' value='1' />
    <InputAccordion.Section title='Use a different billing address' value='2'>
      <p>Capture different billing address</p>
    </InputAccordion.Section>
    <InputAccordion.Section title='Use P.O. box' value='3'>
      <p>Capture P.O. Box information</p>
    </InputAccordion.Section>
  </InputAccordion>
);

CheckboxAccordionExample.propTypes = {
  values: PropTypes.any
};

const InputAccordionDisabledExample = () => (
  <InputAccordion radio groupName='group1'>
    <InputAccordion.Section title='Same as customer address' value='1' />
    <InputAccordion.Section title='Use a different billing address' value='2' disabled>
      <Checkbox radio label='This checkbox is indeterminate' />
    </InputAccordion.Section>
    <InputAccordion.Section title='Same as customer address' value='3' disabled />
  </InputAccordion>
);

export {
  RadioAccordionExample, CheckboxAccordionExample, InputAccordionDisabledExample
}
