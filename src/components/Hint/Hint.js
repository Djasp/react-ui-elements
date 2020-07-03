/**
 * Created by bobbeugels on 11/07/17.
 */

'use strict';
import React from 'react';
import {Message} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class OmniusAlert extends React.Component {
  constructor(props: Object) {
    super( props );

    this.state = {
      isVisible: false
    }
  }

  render() {
    const { className, message, title, ...rest } = this.props;
    const state = 'vn-hint' + (className ? ` ${className}` : '');

    return (
      <Message className={state} {...rest}>
        <div className='type'>
          <div className='icon' />
        </div>
        <div className='content'>
          <div className='title'>{title}</div>
          <div className='message-content'>{message}</div>
        </div>
      </Message>
    )
  }
}

OmniusAlert.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  autoDisappear: PropTypes.number
};

export default OmniusAlert;
