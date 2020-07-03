import React from 'react';
import BannerIcon from '../../icons/BannerIcon';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Banner extends React.Component {
  render() {
    const { text, description, type } = this.props;
    const classes = classNames('vn-banner', {
      'success': type === 'success',
      'warning': type === 'warning',
      'error': type === 'error'
    });

    return (
      <div className={classes}>
        <div className='banner-icon'>
          <BannerIcon type={type} />
        </div>
        <div className='banner-text'>
          <h4>{text}</h4>
          <span className='banner-description'>{description}</span>
        </div>
      </div>
    )
  }
}

Banner.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string
};

export default Banner;
