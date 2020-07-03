/**
 * Created by bobbeugels on 11/07/17.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {
  Form,
  FormField,
  FormButton,
  FormCheckbox,
  FormDropdown,
  FormGroup,
  FormInput,
  FormRadio,
  FormSelect,
  FormTextArea
} from 'semantic-ui-react';

class OmniusForm extends React.Component {

  static Field = FormField
  static Button = FormButton
  static Checkbox = FormCheckbox
  static Dropdown = FormDropdown
  static Group = FormGroup
  static Input = FormInput
  static Radio = FormRadio
  static Select = FormSelect
  static TextArea = FormTextArea

  render() {

    const { className, children, ...rest } = this.props;

    return (
      <Form {...rest} className={cn('vn-form', className)}>
        {children}
      </Form>
    )
  }
}

OmniusForm.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default OmniusForm;
