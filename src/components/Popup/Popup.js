/**
 * Created by bobbeugels on 11/04/17.
 */

'use strict';
import {Popup} from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';

class OmniusPopup extends React.Component {
  render() {
    const { className, error, ...rest } = this.props,
      state = 'vn-popup'
            + (this.props.error ? ' error' : '')
            + (className !== undefined ? ` ${className}` : '');

    return (
      <Popup className={state} {...rest}/>
    )
  }
}

OmniusPopup.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool
};

export default OmniusPopup;
