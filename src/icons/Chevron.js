/**
 * Created by bobbeugels on 01/05/17.
 */
import React from 'react';

class Chevron extends React.PureComponent {
  render() {
    return (
      <svg className="icon-chevron" fill="#334e5b" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    )
  }
}

export default Chevron;
