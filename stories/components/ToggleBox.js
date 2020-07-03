import React from 'react';
import { ToggleBox, InputAccordion } from '../../src/index.js';

const ToggleBoxExample = () => (
  <ToggleBox label='Plan your delivery today'>
    <h5>Wednesday january 18 2017</h5>
    <InputAccordion radio groupName='group1'>
      <InputAccordion.Section title='This afternoon between 16:00 and 18:00' value='1' />
      <InputAccordion.Section title='This evening between 18:00 and 20:00' value='2' />
    </InputAccordion>
  </ToggleBox>
);

const ToggleBoxExpandedExample = () => (
  <ToggleBox expanded label='Plan your delivery today'>
    <h5>Wednesday january 18 2017</h5>
    <InputAccordion radio groupName='group1'>
      <InputAccordion.Section title='This afternoon between 16:00 and 18:00' value='1' />
      <InputAccordion.Section title='This evening between 18:00 and 20:00' value='2' />
    </InputAccordion>
  </ToggleBox>
);

const ToggleBoxNoLabelExample = () => (
  <ToggleBox>
    <h5>Wednesday january 18 2017</h5>
    <InputAccordion radio groupName='group1'>
      <InputAccordion.Section title='This afternoon between 16:00 and 18:00' value='1' />
      <InputAccordion.Section title='This evening between 18:00 and 20:00' value='2' />
    </InputAccordion>
  </ToggleBox>
);


export {
  ToggleBoxExample,
  ToggleBoxExpandedExample,
  ToggleBoxNoLabelExample
}
