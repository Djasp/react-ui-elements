'use strict';
import React from 'react';
import PropTypes from 'prop-types';

class OmniusButtonItem extends React.PureComponent {
  render() {
    const { children, ...rest } = this.props;
    return (
      <li {...rest}>{children}</li>
    )
  }
}

OmniusButtonItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

OmniusButtonItem.defaultProps = {
};

export default OmniusButtonItem;
