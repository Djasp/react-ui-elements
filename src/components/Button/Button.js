'use strict';
import {Button} from 'semantic-ui-react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import OmniusButtonGroup from './ButtonGroup';
import OmniusButtonDropdown from './ButtonDropdown';

class OmniusButton extends Component {
  static Group = OmniusButtonGroup;
  static Dropdown = OmniusButtonDropdown;

  handleClick = (event) => {
    const { onClick, loading } = this.props;
    // Preventing onClick from firing on loading
    if (loading) {
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  render() {
    const { className, destructive, loadingText, children, active, ...rest } = this.props;
    const classes = classnames('vn-button', className, {
      destructive,
      'loading-text': loadingText,
      active
    });

    // Removed Ripple.Meta as it has no support so far with React 16.2.0
    // https://github.com/react-mdc/react-material-components-web/issues/57

    let buttonContent = children;

    if (this.props.loading && typeof loadingText === 'string') {
      buttonContent = loadingText
    }

    return (
      <Button className={classes} {...rest} onClick={this.handleClick}>
        <div className='content'>
          {buttonContent}
        </div>
        <div className='loading-icon' />
      </Button>
    )
  }
}

OmniusButton.propTypes = {
  className: PropTypes.string,
  destructive: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  loadingText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
};

OmniusButton.defaultProps = {
  className: undefined,
  destructive: false,
  loading: false,
  children: undefined,
  loadingText: true
};

export default OmniusButton;
