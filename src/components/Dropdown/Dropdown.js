/**
 * Created by bobbeugels on 16/05/17.
 */

'use strict';
import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class OmniusDropdown extends Component {
  constructor(props: Object) {
    super(props);

    this.state = {
      active:   !!props.active,
      fluid:    !!props.fluid,
      disabled: !!props.disabled
    };
  }

  handleClick = (e: Event & { target: HTMLInputElement }) => {
    if (e) {
      e.preventDefault();
      // Because firefox and safari don't focus on button click
      if (!this.state.active) {
        e.target.focus();
      }
    }

    this.setState({ active: !this.state.active });
  };

  handleBlur = () => {
    this.setState({ active: false });
  };

  render() {
    const { className, label, children } = this.props;
    const classes = 'vn-dropdown'
      + (this.state.active ? ' active' : '')
      + (this.state.fluid ? ' fluid' : '')
      + (this.state.disabled ? ' disabled' : '')
      + (this.props.className ? ` ${className}` : '');

    return (
      <div className={classes} >
        <button onMouseDown={this.handleClick} onBlur={this.handleBlur} >
          {label}
          <Icon name='caret down' />
        </button>
        <div className="menu">
          {children}
        </div>
      </div>
    )
  }
}

OmniusDropdown.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  active: PropTypes.bool,
  fluid: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node
};

export default OmniusDropdown;
