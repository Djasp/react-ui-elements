/**
 * Created by bobbeugels on 13/03/18.
 */

'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from '../../index';
import classnames from 'classnames';

class StackIndicator extends React.Component {
  createStackIndicators = (stacks) => {
    return stacks.map((stack, index) => {
      const state = classnames('vn-stackIndicator-stack', stack.enabled ? stack.cssClass : '');

      return (
        <Popup
          key={index}
          trigger={
            <div className={state}>
              <svg width="6" height="6" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="3" cy="3" r="3"
                />
              </svg>
            </div>
          }
          content={stack.name}
          on='hover'
          style={{ fontSize: '1em', fontWeight: 'bold', padding: '5px 9px' }}
          inverted
          position='top center'
        />
      );
    });
  };

  render() {
    return (
      <div className='vn-stackIndicator'>
        {this.createStackIndicators(this.props.stacks)}
      </div>
    )
  }
}

StackIndicator.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  collapsible: PropTypes.bool,
  open: PropTypes.bool,
  stacks: PropTypes.array
};

export default StackIndicator;
