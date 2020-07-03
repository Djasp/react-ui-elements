/**
 * Created by bobbeugels on 19/01/18.
 */

'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SegmentedControlGroup extends Component {
  render() {
    const { className, stacked, fluid, children } = this.props,
      classNames = 'vn-segmentedControl'
        + (stacked !== undefined ? ' stacked' : '')
        + (fluid !== undefined ? ' fluid' : '')
        + (className !== undefined ? ` ${className}` : '');

    return (
      <div className={classNames}>
        {children}
      </div>
    )
  }
}

SegmentedControlGroup.propTypes = {
  className: PropTypes.string,
  stacked: PropTypes.bool,
  children: PropTypes.node,
  fluid: PropTypes.bool
};

export default SegmentedControlGroup;
