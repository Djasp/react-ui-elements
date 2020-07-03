'use strict';
import React from 'react';
import PropTypes from 'prop-types';

class OmniusButtonMenu extends React.PureComponent {
  render() {
    const { children, open, ...rest } = this.props;
    return (
      <ul className='dropdown' {...rest}>
        {open ? children : null}
      </ul>
    )
  }
}

OmniusButtonMenu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  open: PropTypes.bool
};

OmniusButtonMenu.defaultProps = {
};

export default OmniusButtonMenu;
