'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import EmptyStateIcon from '../../icons/EmptyState';
import { Header } from '../../index.js';

class EmptyState extends React.PureComponent {
  render() {
    const { className, title, children } = this.props;
    const classes = classnames('vn-empty-state', className);

    return (
      <div className={classes}>
        <div className='empty-state-section'>
          <EmptyStateIcon />
          <Header as='h3'>{title}</Header>
          <p>{children}</p>
        </div>
      </div>
    )
  }
}

EmptyState.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired
  ])
};

export default EmptyState;
