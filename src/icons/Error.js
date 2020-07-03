/**
 * Created by bobbeugels on 11/07/17.
 */
import React from 'react';

class Success extends React.PureComponent {
  render() {
    return (
      <svg className='icon-error' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
        <defs>
          <path id="a" d="M11 0c6.05 0 11 4.95 11 11s-4.95 11-11 11S0 17.05 0 11 4.95 0 11 0zm0 2c-4.95 0-9 4.05-9 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9z"/>
          <path id="c" d="M13.6 3.52L12.48 2.4 8 6.88 3.52 2.4 2.4 3.52 6.88 8 2.4 12.48l1.12 1.12L8 9.12l4.48 4.48 1.12-1.12L9.12 8z"/>
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)">
            <mask id="b" fill="#fff">
              <use xlinkHref="#a"/>
            </mask>
            <use fill="#FFF" xlinkHref="#a"/>
            <g fill="#fff" mask="url(#b)">
              <path d="M-1-1h24v24H-1z"/>
            </g>
          </g>
          <g transform="translate(4 4)">
            <path fill="none" d="M0 0h16v16H0z"/>
            <mask id="d" fill="#fff">
              <use xlinkHref="#c"/>
            </mask>
            <use fill="#fff" xlinkHref="#c"/>
            <g fill="#fff" mask="url(#d)">
              <path d="M0 0h16v16H0z"/>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

export default Success;
