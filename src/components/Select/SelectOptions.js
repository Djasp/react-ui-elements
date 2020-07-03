/**
 * Created by bobbeugels on 11/07/17.
 */
'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class SelectOptions extends Component {
  handleClick = (event, data) => {
    event.stopPropagation();
    const { onSelect } = this.props;
    onSelect && onSelect(data, event);
  };

  render() {
    const { value, options } = this.props;
    const listItems = options.map((option) =>
      <div
        key={option.key}
        role='option'
        className={classNames('item', { 'selected': value === option.value })}
        style={{pointerEvents: 'all'}}
        onClick={(e) => this.handleClick(e, option)}>
        <span className="text">{option.text}</span>
      </div>
    );

    return (
      <div>
        {listItems}
      </div>
    )
  }
}

SelectOptions.propTypes = {
  options: PropTypes.array,
  value: PropTypes.any,
  onSelect: PropTypes.func
};

export default SelectOptions;
