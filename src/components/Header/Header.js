/**
 * Created by bobbeugels on 06/07/17.
 */

'use strict';
import {Header} from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';

class OmniusHeader extends React.Component {
  render() {
    const { className, ...rest } = this.props,
      state = 'vn-header'
              + (className !== undefined ? ` ${className}` : '');

    return (
      <Header className={state} {...rest}/>
    )
  }
}

OmniusHeader.propTypes = {
  className: PropTypes.string
};

export default OmniusHeader;
