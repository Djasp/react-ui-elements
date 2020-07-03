/**
 * Created by bobbeugels on 03/04/17.
 */

'use strict';
import ScrollArea from 'react-scrollbar/dist/no-css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class OmniusScrollArea extends Component {
  render() {
    const { className, reference, ...rest } = this.props;
    const state = classnames(className, {
      'hide-inactive-scrollbars': this.props.hide
    });

    return (
      <ScrollArea className={state} ref={reference} {...rest} >
        {this.props.children}
      </ScrollArea>
    )
  }
}

OmniusScrollArea.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]),
  hide: PropTypes.bool,
  reference: PropTypes.func
};

export default OmniusScrollArea;
