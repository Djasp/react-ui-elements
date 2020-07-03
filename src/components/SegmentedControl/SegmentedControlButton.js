/**
 * Created by bobbeugels on 19/01/18.
 */

'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SegmentedControlButton extends Component {
  constructor(props) {
    super();

    this.state = {
      selected: props.selected
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.selected !== nextProps.selected) {
      this.setState({selected: nextProps.selected})
    }
  }

  render() {
    const { className, name, value, children, ...rest } = this.props,
      state = 'vn-segmentedControlButton'
        + (this.state.selected ? ' selected' : '')
        + (className !== undefined ? ` ${className}` : '');

    return (
      <div className={state}>
        <input type="radio" name={name} id={value} value={value} {...rest} />
        <label htmlFor={value}>{children}</label>
      </div>
    )
  }
}

SegmentedControlButton.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  selected: PropTypes.bool
};

export default SegmentedControlButton;
