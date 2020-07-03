import React from 'react'
import { Dropdown } from '../../src/index.js'

const DropdownExample = () => (
  <Dropdown label='Add Package'>
    <div>Content</div>
  </Dropdown>
);

const DropdownExampleFluid = () => (
  <Dropdown label='Add Package' fluid>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
  </Dropdown>
);

const DropdownExampleDisabled = () => (
  <Dropdown label='Add Package' disabled>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
  </Dropdown>
);


export {
  DropdownExample,
  DropdownExampleFluid,
  DropdownExampleDisabled
}
