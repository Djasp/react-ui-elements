import React from 'react'
import { Input, Button, Checkbox, Form, Select, TextArea } from '../../src/index.js'

class FormExampleFormOmnius extends React.Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <Form>
        <Form.Field>
          <Input label='First Name' />
        </Form.Field>
        <Form.Field>
          <Input label='Last Name' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Or that'
            name='checkboxRadioGroup'
            value='that'
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
        <Form.Field>
          <Button type='submit' primary>Submit</Button>
        </Form.Field>
      </Form>
    )
  }
}

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' }
];

class FormExampleSubComponentControl extends React.Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field>
            <Input label='First name' placeholder='First name' />
          </Form.Field>
          <Form.Field>
            <Input label='Last name' placeholder='Last name' />
          </Form.Field>
          <Form.Field>
            <Select label='Gender' selection fluid options={options} />
          </Form.Field>
        </Form.Group>
        <Form.Group inline>
          <label>Size</label>
          <Form.Field>
            <Checkbox
              radio
              label='Small' value='sm' checked={value === 'sm'} onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='Medium' value='md' checked={value === 'md'} onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='Large' value='lg' checked={value === 'lg'} onChange={this.handleChange}
            />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <TextArea label='Label' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Form.Field>
          <Button type='submit' primary>Submit</Button>
        </Form.Field>
      </Form>
    )
  }
}

export {
  FormExampleFormOmnius,
  FormExampleSubComponentControl
}
