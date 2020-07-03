'use strict';

import { Message } from 'semantic-ui-react';
import React from 'react';
import { ErrorIcon, SuccessIcon, WarningIcon } from '../../icons';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class OmniusAlert extends React.Component {
  render() {
    const { className, type, content, title, ...rest } = this.props;
    let icon;

    switch (type) {
    case 'success':
      icon = <SuccessIcon />;
      break;
    case 'warning':
      icon = <WarningIcon />;
      break;
    case 'error':
      icon = <ErrorIcon />;
      break;
    }

    const classes = classnames('vn-alert', type, className);
    return (
      <Message className={classes} {...rest}>
        <div className="type">{icon}</div>
        <div className="content">
          <p>
            <strong>{title}</strong>
            {content}
          </p>
        </div>
      </Message>
    );
  }
}

OmniusAlert.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string.isRequired
};

export default OmniusAlert;
