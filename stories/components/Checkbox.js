import React from 'react'
import { Form, Checkbox } from '../../src/index.js'

const CheckboxExampleCheckbox = () => (
  <Checkbox label='Make my profile visible' />
);

const CheckboxExampleSlider = () => (
  <Checkbox label='Show VAT' slider />
);

class CheckboxExampleRadioGroup extends React.Component {
    state = {};
    handleChange = (e, { value }) => this.setState({ value });

    render() {
    return (
      <Form>
        <Form.Field>
                    Selected value: <b>{this.state.value}</b>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Choose this'
            name='checkboxRadioGroup'
            value='this'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Or that'
            name='checkboxRadioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    )
  }
}

const CheckboxExampleReadOnly = () => (
  <Checkbox label='This checkbox is read-only' readOnly />
);

const CheckboxExampleChecked = () => (
  <Checkbox label='This checkbox comes pre-checked' defaultChecked />
);

const CheckboxExampleIndeterminate = () => (
  <Form>
    <Form.Field>
      <Checkbox label='This checkbox is indeterminate' defaultIndeterminate />
    </Form.Field>
    <Form.Field>
      <Checkbox radio label='This checkbox is indeterminate' defaultIndeterminate />
    </Form.Field>
    <Form.Field>
      <Checkbox slider label='This checkbox is indeterminate' defaultIndeterminate />
    </Form.Field>
  </Form>
);

const CheckboxExampleDisabled = () => (
  <Form>
    <Form.Field>
      <Checkbox label='Disabled' disabled />
    </Form.Field>
    <Form.Field>
      <Checkbox radio label='Disabled' disabled />
    </Form.Field>
  </Form>
);


export {
  CheckboxExampleCheckbox,
  CheckboxExampleSlider,
  CheckboxExampleRadioGroup,
  CheckboxExampleReadOnly,
  CheckboxExampleChecked,
  CheckboxExampleIndeterminate,
  CheckboxExampleDisabled
}
