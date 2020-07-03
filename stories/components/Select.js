import React from 'react';
import { Select, Popup } from '../../src/index.js';

const options = [
  { key: 0, text: 'Angular', value: 'angular' },
  { key: 1, text: 'CSS', value: 'css' },
  { key: 2, text: 'Graphic Design', value: 'design' },
  { key: 3, text: 'Ember', value: 'ember' },
  { key: 4, text: 'HTML', value: 'html' },
  { key: 5, text: 'Information Architecture', value: 'ia' },
  { key: 6, text: 'Javascript', value: 'javascript' },
  { key: 7, text: 'Mechanical Engineering', value: 'mech' },
  { key: 8, text: 'Meteor', value: 'meteor' },
  { key: 9, text: 'NodeJS', value: 'node' },
  { key: 10, text: 'Plumbing', value: 'plumbing' },
  { key: 11, text: 'Python', value: 'python' },
  { key: 12, text: 'Rails', value: 'rails' },
  { key: 13, text: 'React', value: 'react' },
  { key: 14, text: 'Kitchen Repair', value: 'repair' },
  { key: 15, text: 'Ruby', value: 'ruby' },
  { key: 16, text: 'UI Design', value: 'ui' },
  { key: 17, text: 'User Experience', value: 'ux' }
];

const SelectExampleSelection = () => (
  <Select label='Skills' options={options} />
);

const SelectExampleMaxHeight = () => (
  <Select label='Skills' maxHeight={10} options={options} />
);

const SelectExampleSelectionPlaceholder = () => (
  <Select label='Skills' placeholder='Please select a skill' options={options} />
);

const SelectExampleSelectionFluid = () => (
  <Select label='Skills' fluid options={options} />
);

const SelectExampleSearchSelection = () => (
  <Select label='State' search options={options} />
);

const SelectExampleSearchSelectionFluid = () => (
  <Select label='State' search fluid options={options} />
);

const SelectExampleSelectionDisabled = () => (
  <Select label='State' disabled options={options} />
);

const SelectExampleSelectionDisabledDefaultValue = () => (
  <Select label='State' disabled defaultValue='javascript' options={options} />
);

const SelectExampleSelectionError = () => (
  <Select
    label='State'
    error='Whatever is wrong comes here'
    defaultValue='javascript'
    options={options}
  />
);

const SelectExampleSelectionErrorFluid = () => (
  <Select label='State' error="Whatever is wrong comes here" defaultValue='javascript' fluid options={options} />
);

const SelectExampleSelectionHtmlError = () => (
  <Select
    label='State'
    error={
      <div>
        Html error message
      </div>
    }
    defaultValue='javascript'
    options={options}
  />
);

export {
  SelectExampleSelection,
  SelectExampleMaxHeight,
  SelectExampleSelectionFluid,
  SelectExampleSearchSelection,
  SelectExampleSearchSelectionFluid,
  SelectExampleSelectionDisabled,
  SelectExampleSelectionDisabledDefaultValue,
  SelectExampleSelectionError,
  SelectExampleSelectionErrorFluid,
  SelectExampleSelectionPlaceholder,
  SelectExampleSelectionHtmlError
}
