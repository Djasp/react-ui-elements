/**
 * Created by bobbeugels on 11/07/17.
 */
import React from 'react';

class Success extends React.PureComponent {
  render() {
    return (
      <svg className='icon-warning' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
        <defs>
          <path id="a" d="M11 0c6.05 0 11 4.95 11 11s-4.95 11-11 11S0 17.05 0 11 4.95 0 11 0zm0 2c-4.95 0-9 4.05-9 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9z"/>
          <path id="c" d="M7.92 3.6a1.08 1.08 0 1 1 2.16 0V9a1.08 1.08 0 1 1-2.16 0V3.6zM9 12.24a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16z"/>
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)">
            <mask id="b" fill="#fff">
              <use xlinkHref="#a"/>
            </mask>
            <use fill="#FFF" xlinkHref="#a"/>
            <g fill="#FFF" mask="url(#b)">
              <path d="M-1-1h24v24H-1z"/>
            </g>
          </g>
          <g transform="translate(3 3)">
            <path fill="none" d="M0 0h18v18H0z"/>
            <mask id="d" fill="#fff">
              <use xlinkHref="#c"/>
            </mask>
            <use fill="#FFF" xlinkHref="#c"/>
            <g fill="#FFF" mask="url(#d)">
              <path d="M0 0h18v18H0z"/>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

export default Success;
