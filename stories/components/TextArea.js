import React from 'react'
import { TextArea } from '../../src/index.js'

const TextAreaExample = () => (
  <TextArea label='Label' />
);

const TextAreaExampleAutoHeight = () => (
  <TextArea label='Label' autoHeight />
);

const TextAreaPlaceholderExample = () => (
  <TextArea placeholder='Placeholder text' label='Label' />
);

const TextAreaFocusExample = () => (
  <TextArea label='Label' focus />
);

const TextAreaDefaultValueExample = () => (
  <TextArea label='Label' defaultValue='Default value' />
);

const TextAreaDisabledExample = () => (
  <TextArea label='Label' disabled />
);

const TextAreaErrorExample = () => (
  <TextArea
    error='Whatever is wrong comes here'
    label='Label'
    defaultValue='Error'
  />
);

export {
  TextAreaExample,
  TextAreaExampleAutoHeight,
  TextAreaPlaceholderExample,
  TextAreaFocusExample,
  TextAreaDefaultValueExample,
  TextAreaDisabledExample,
  TextAreaErrorExample
}
