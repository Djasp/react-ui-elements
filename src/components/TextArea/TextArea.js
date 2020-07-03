/**
 * Created by bobbeugels on 03/04/17.
 */

'use strict';
import { TextArea } from 'semantic-ui-react';
import { Popup } from '../../index';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OmniusTextArea extends Component {
  constructor(props: Object) {
    super(props);

    this.state = {
      isFocused:     !!props.focus,
      floatingLabel: !!props.placeholder || !!props.defaultValue
    };
  }

  handleFocus = () => {
    this.setState({
      isFocused:     true,
      floatingLabel: true
    });
  };

  handleBlur = (e: Event & { target: HTMLInputElement }) => {
    // Check if there's a placeholder so floatingLabel stays true
    const placeholder = !!this.props.placeholder;
    const focus =       this.props.focus;

    this.setState({
      isFocused:      focus ? this.props.focus : false,
      floatingLabel:  placeholder ? placeholder : e.target.value.length !== 0
    });
  };

  render() {
    const { className, label, focus, disabled, error, ...rest } = this.props,
      classes = 'vn-textarea'
        + (this.state.isFocused     ? ' focus' : '')
        + (this.state.floatingLabel ? ' floating-label' : '')
        + (disabled                 ? ' disabled' : '')
        + (error                    ? ' error' : '')
        + (className !== undefined  ? ` ${className}` : '');

    if (typeof error === 'string') {
      return (
        <Popup
          trigger={
            <div className={classes}>
              <label>{this.props.label}</label>
              <TextArea {...rest}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur} />
            </div>
          }
          error
          content={error}
          on='focus'
          position='top left'
        />
      )
    }

    return (
      <div className={classes}>
        <label>{this.props.label}</label>
        <TextArea {...rest}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur} />
      </div>
    )
  }
}

OmniusTextArea.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  focus: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ])
};

export default OmniusTextArea;
