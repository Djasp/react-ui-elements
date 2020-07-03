/**
 * Created by bobbeugels on 11/07/17.
 */

'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { ScrollArea } from '../../index';

class OmniusContextMenuOptions extends React.Component {
  componentDidMount() {
    document.addEventListener('click', this.props.handleClose);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.props.handleClose);
  }

  optionClick(e, option) {
    option.action();
    this.props.handleClose(e, true);
  }

  render() {
    const options = this.props.options.map((option) =>
      <li key={option.id} onClick={e => this.optionClick(e, option)}>
        <span className='menu-icon'>{option.icon}</span>
        {option.text}
      </li>
    );

    // Only rendering <ScrollArea /> when it has overflow
    // otherwise onBlur event fires when using the scroll wheel.
    const hasOverflow = this.props.options.length > 4;

    if (hasOverflow) {
      return (
        <ScrollArea speed={0.8} className="menu" contentClassName="content" horizontal={false}>
          <ul>{options}</ul>
        </ScrollArea>
      )
    } else {
      return (
        <div className='menu'>
          <ul>{options}</ul>
        </div>
      )
    }
  }
}

OmniusContextMenuOptions.propTypes = {
  options: PropTypes.array,
  handleClose: PropTypes.func
};

export default OmniusContextMenuOptions;
