'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import OmniusButtonItem from './ButtonDropdownItem';
import OmniusButtonMenu from './ButtonDropdownMenu';

class OmniusButtonDropdown extends React.PureComponent {
  static Item = OmniusButtonItem;

  static Menu = OmniusButtonMenu;

  render() {
    const {
      className,
      children,
      ...rest
    } = this.props;
    const classes = classnames('vn-button-dropdown', className);

    return (
      <div
        className={classes}
        {...rest}
      >
        {children}
      </div>
    )
  }
}

OmniusButtonDropdown.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

OmniusButtonDropdown.defaultProps = {
  className: undefined,
  children: undefined
};

export default OmniusButtonDropdown;
