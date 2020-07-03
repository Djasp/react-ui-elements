/**
 * Created by bobbeugels on 11/07/17.
 */

'use strict';
import React, { Component } from 'react';
import VerticalEllipsis from '../../icons/VerticalEllipsis';
import Cogwheel from '../../icons/Cogwheel';
import PropTypes from 'prop-types';
import ContextMenuOptions from './ContextMenuOptions';

class OmniusContextMenu extends Component {
  constructor(props: Object) {
    super(props);
    this.state = {
      open: !!props.open
    };
  }

  handleClick = () => {
    if (!this.props.open) {
      this.setState({ open: true });
    }
  };

  handleClose = (e: any, action: boolean = false) => {
    const domNode = this.node;
    if (!domNode || !domNode.contains(e.target) || !action) {
      if (!this.props.open) {
        this.setState({ open: false });
      }
    }
  };

  render() {
    const { className, icon } = this.props;
    const state = 'vn-contextmenu'
      + (className !== undefined ? ` ${className}` : '');

    const renderIcon = icon === 'cogwheel' ? <Cogwheel/> : (
      icon === 'ellipsis' ? <VerticalEllipsis/> : '');

    const iconClassName = 'icon ' + icon;

    return (
      <div className={state} ref={node => this.node = node}>
        <div className={iconClassName} onClick={this.handleClick} tabIndex="0">
          {renderIcon}
        </div>
        {this.state.open &&
        <ContextMenuOptions handleClose={this.handleClose} options={this.props.options} />
        }
      </div>
    )
  }
}

OmniusContextMenu.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  open: PropTypes.bool,
  icon: PropTypes.string
};

export default OmniusContextMenu;
