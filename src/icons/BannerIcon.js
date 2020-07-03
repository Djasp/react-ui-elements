/**
 * Created by bobbeugels on 26/04/18.
 */
import React from 'react';
import PropTypes from 'prop-types';

class BannerIcon extends React.PureComponent {
  render() {
    switch(this.props.type) {
    case 'error':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="34" height="34" viewBox="0 0 34 34">
          <defs>
            <path id="a" d="M12 1C5.95 1 1 5.95 1 12s4.95 11 11 11 11-4.95 11-11S18.05 1 12 1z"/>
            <path id="b" d="M11 0c6.05 0 11 4.95 11 11s-4.95 11-11 11S0 17.05 0 11 4.95 0 11 0zm0 2c-4.95 0-9 4.05-9 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9z"/>
            <path id="d" d="M13.6 3.52L12.48 2.4 8 6.88 3.52 2.4 2.4 3.52 6.88 8 2.4 12.48l1.12 1.12L8 9.12l4.48 4.48 1.12-1.12L9.12 8z"/>
          </defs>
          <g fill="none" fillRule="evenodd">
            <g transform="translate(5 5)">
              <use fill="#FFF" xlinkHref="#a"/>
              <path stroke="#E2574C" strokeOpacity=".2" strokeWidth="6" d="M12-2c7.707 0 14 6.293 14 14s-6.293 14-14 14-14-6.293-14-14S4.293-2 12-2z"/>
            </g>
            <g transform="translate(6 6)">
              <mask id="c" fill="#fff">
                <use xlinkHref="#b"/>
              </mask>
              <use fill="#FFF" xlinkHref="#b"/>
              <g fill="#E2574C" mask="url(#c)">
                <path d="M-1-1h24v24H-1z"/>
              </g>
            </g>
            <g transform="translate(9 9)">
              <path d="M0 0h16v16H0z"/>
              <mask id="e" fill="#fff">
                <use xlinkHref="#d"/>
              </mask>
              <use fill="#2D4552" xlinkHref="#d"/>
              <g fill="#E2574C" mask="url(#e)">
                <path d="M0 0h16v16H0z"/>
              </g>
            </g>
          </g>
        </svg>
      );
    case 'warning':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="34" height="34">
          <defs>
            <path id="a" d="M12 1C5.95 1 1 5.95 1 12s4.95 11 11 11 11-4.95 11-11S18.05 1 12 1z"/>
            <path id="b" d="M11 0c6.05 0 11 4.95 11 11s-4.95 11-11 11S0 17.05 0 11 4.95 0 11 0zm0 2c-4.95 0-9 4.05-9 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9z"/>
            <path id="d" d="M7.92 3.6a1.08 1.08 0 1 1 2.16 0V9a1.08 1.08 0 1 1-2.16 0V3.6zM9 12.24a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16z"/>
          </defs>
          <g fill="none" fillRule="evenodd">
            <g transform="translate(5 5)">
              <use fill="#FFF" xlinkHref="#a"/>
              <path stroke="#F9A21A" strokeOpacity=".2" strokeWidth="6" d="M12-2c7.707 0 14 6.293 14 14s-6.293 14-14 14-14-6.293-14-14S4.293-2 12-2z"/>
            </g>
            <g transform="translate(6 6)">
              <mask id="c" fill="#fff">
                <use xlinkHref="#b"/>
              </mask>
              <use fill="#FFF" xlinkHref="#b"/>
              <g fill="#F5B931" mask="url(#c)">
                <path d="M-1-1h24v24H-1z"/>
              </g>
            </g>
            <g transform="translate(8 8)">
              <path d="M0 0h18v18H0z"/>
              <mask id="e" fill="#fff">
                <use xlinkHref="#d"/>
              </mask>
              <use fill="#FFF" xlinkHref="#d"/>
              <g fill="#F5B931" mask="url(#e)">
                <path d="M0 0h18v18H0z"/>
              </g>
            </g>
          </g>
        </svg>
      );
    case 'success':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="34" height="34">
          <defs>
            <path id="a" d="M12 1C5.95 1 1 5.95 1 12s4.95 11 11 11 11-4.95 11-11S18.05 1 12 1z"/>
            <path id="b" d="M11 0c6.05 0 11 4.95 11 11s-4.95 11-11 11S0 17.05 0 11 4.95 0 11 0zm0 2c-4.95 0-9 4.05-9 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9z"/>
            <path id="d" d="M5.6 10.536L2.264 7.2 1.128 8.328 5.6 12.8 14.4 4l-1.128-1.128z"/>
          </defs>
          <g fill="none" fillRule="evenodd">
            <g transform="translate(5 5)">
              <use fill="#FFF" xlinkHref="#a"/>
              <path stroke="#3C9F8C" strokeOpacity=".2" strokeWidth="6" d="M12-2c7.707 0 14 6.293 14 14s-6.293 14-14 14-14-6.293-14-14S4.293-2 12-2z"/>
            </g>
            <g transform="translate(6 6)">
              <mask id="c" fill="#fff">
                <use xlinkHref="#b"/>
              </mask>
              <use fill="#FFF" xlinkHref="#b"/>
              <g fill="#3C9F8C" mask="url(#c)">
                <path d="M-1-1h24v24H-1z"/>
              </g>
            </g>
            <g transform="translate(9 9)">
              <path d="M0 0h16v16H0z"/>
              <mask id="e" fill="#fff">
                <use xlinkHref="#d"/>
              </mask>
              <use fill="#000" fillRule="nonzero" xlinkHref="#d"/>
              <g fill="#3C9F8C" mask="url(#e)">
                <path d="M0 0h16v16H0z"/>
              </g>
            </g>
          </g>
        </svg>
      );
    default:
      return null;
    }
  }
}

BannerIcon.propTypes = {
  type: PropTypes.string.isRequired
};

export default BannerIcon;
