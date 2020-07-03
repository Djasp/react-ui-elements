import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Sidebar } from 'semantic-ui-react';
import Close from 'react-icons/lib/md/close';
import classnames from 'classnames';

class Drawer extends Component {

  render() {
    const { allowClose, toggleVisibility, className, children,  ...rest } = this.props;

    return (
      <Sidebar
        className={classnames('vn-drawer', className)}
        {...rest}
      >
        <Close
          size={24}
          className={classnames('drawer-close-icon', {
            show: allowClose
          })}
          onClick={toggleVisibility}
        />
        {children}
      </Sidebar>
    );
  }
}

Drawer.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
  allowClose: PropTypes.bool,
  toggleVisibility: PropTypes.func,
  offset: PropTypes.number,
  width: PropTypes.string,
  animation: PropTypes.string,
  className: PropTypes.string,
  direction: PropTypes.string
};

export default Drawer;

