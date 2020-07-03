import React from 'react'
import { Input, Popup } from '../../src/index.js'

const InputExampleInput = () => (
  <Input label='Search' />
);

const InputExamplePlaceholder = () => (
  <Input label='Birthdate' placeholder='DD-MM-YYYY' />
);

const InputExampleFocus = () => (
  <Input focus label='Search' />
);

const InputExampleDefaultValue = () => (
  <Input label='Search'
    defaultValue='DefaultValue' />
);

const InputDisabled = () => (
  <Input disabled
    label='Search' />
);

const InputExampleError = () => (
  <Input
    error='Whatever is wrong comes here'
    label='Search'
    defaultValue='Error'
  />
);

const InputExampleErrorHtml = () => (
  <Input
    error={
      <ul style={{margin: 0}}>
        <li>Hint 1</li>
        <li>Hint 2</li>
      </ul>
    }
    label='Search'
    defaultValue='Error'
  />
);

const InputExampleFluid = () => (
  <Input fluid label='Search' />
);

const InputExampleMask = () => (
  <Input
    label='Date'
    placeholder='DD-MM-YYYY'
    guide={false}
    mask={[/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
  />
);

export {
  InputExampleInput,
  InputExamplePlaceholder,
  InputExampleFocus,
  InputExampleDefaultValue,
  InputDisabled,
  InputExampleError,
  InputExampleFluid,
  InputExampleMask,
  InputExampleErrorHtml
}
