'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class LoadingSpinner extends React.Component {
  render() {
    const { className, small, background } = this.props;
    const classes = classnames('vn-loading-spinner', className, {
      small,
      'dark-background': background === 'dark',
      'light-background': background === 'light'
    });

    return (
      <div className={classes}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <defs>
            <path id="a" d="M20 40A19.96 19.96 0 0 1 0 20C0 8.923 8.923 0 20 0s20 8.923 20 20c0 .82-.718 1.538-1.538 1.538-.821 0-1.539-.717-1.539-1.538 0-9.333-7.59-16.923-16.923-16.923-9.333 0-16.923 7.59-16.923 16.923 0 9.333 7.59 16.923 16.923 16.923.82 0 1.538.718 1.538 1.539 0 .82-.717 1.538-1.538 1.538z"/>
          </defs>
          <g fill="none">
            <path d="M0 0h40v40H0z"/>
            <mask id="b">
              <use xlinkHref="#a"/>
            </mask>
            <use className="spinner" xlinkHref="#a"/>
          </g>
        </svg>
      </div>
    )
  }
}

LoadingSpinner.defaultProps =  {
  className: undefined,
  small: false,
  background: false
};

LoadingSpinner.propTypes = {
  className: PropTypes.string,
  small: PropTypes.bool,
  background: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
};

export default LoadingSpinner;
