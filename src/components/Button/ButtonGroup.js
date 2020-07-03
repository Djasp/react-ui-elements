/**
 * Created by bobbeugels on 03/04/17.
 */

'use strict';
import {Button} from 'semantic-ui-react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OmniusButtonGroup extends Component {
  render() {
    const { className, children } = this.props,
      state = 'vn-buttonGroup'
        + (className !== undefined ? ` ${className}` : '');

    return (
      <Button.Group className={state}>
        {children}
      </Button.Group>
    )
  }
}


OmniusButtonGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default OmniusButtonGroup;
