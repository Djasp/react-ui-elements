/**
 * Created by bobbeugels on 03/04/17.
 */

'use strict';
import { Input } from 'semantic-ui-react';
import { Popup } from '../../index';
import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import classnames from 'classnames';

class OmniusInput extends React.Component {
  constructor(props: Object) {
    super(props);

    this.state = {
      isFocused: false,
      floatingLabel: !!props.placeholder || !!props.defaultValue || !!props.value
    };
  }

  handleFocus = () => {
    this.setState({
      isFocused: true,
      floatingLabel: true
    });
  };

  handleBlur = (e: Event & { target: HTMLInputElement }) => {
    // Check if there's a placeholder so floatingLabel stays true
    const placeholder = this.props.placeholder !== undefined;

    this.setState({
      isFocused: false,
      floatingLabel: placeholder ? true : e.target.value.length !== 0
    });

    if (this.props.onBlur) {
      this.props.onBlur(e, {
        name: this.props.name,
        value: e.target.value
      });
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if(prevState.value !== nextProps.value) {
      return {
        floatingLabel: !!nextProps.value || prevState.isFocused
      };
    }
    return null;
  }

  render() {
    const { className, label, error, fluid, mask, guide, placeholderChar,
      keepCharPositions, pipe, showMask, placeholder, value, ...rest } = this.props;

    const state = classnames(
      'ui input vn-input',
      className,
      {
        'labeled': label,
        'focus': this.state.isFocused,
        'floating-label': this.state.floatingLabel || !!placeholder || !!this.props.defaultValue || !!this.props.value,
        'disabled': this.props.disabled,
        'error': error,
        'fluid': fluid
      });

    const input = mask
      ? (
        <Input>
          <MaskedInput {...rest}
            mask={mask}
            guide={guide}
            placeholderChar={placeholderChar}
            keepCharPositions={keepCharPositions}
            pipe={pipe}
            showMask={showMask}
            placeholder={placeholder}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            value={value} />
        </Input>
      )
      : (
        <Input {...rest}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          placeholder={placeholder}
          value={value} />
      );
    const textInput = (
      <div className={state}>
        <div className='ui label label'>{label}</div>
        {input}
      </div>
    );

    if (error) {
      return (
        <Popup
          trigger={textInput}
          error
          content={error}
          on='focus'
          position='top left'
        />
      )
    }

    return textInput;
  }
}

OmniusInput.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node
  ]),
  fluid: PropTypes.bool,
  mask: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func
  ]),
  guide: PropTypes.bool,
  keepCharPositions: PropTypes.bool,
  pipe: PropTypes.func,
  showMask: PropTypes.bool,
  placeholderChar: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func
};

export default OmniusInput;
