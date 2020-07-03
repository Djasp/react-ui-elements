/**
 * Created by bobbeugels on 03/04/17.
 */

'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import SelectOptions from './SelectOptions';
import { ScrollArea, Popup } from '../../index';
import classnames from 'classnames';
import _ from 'lodash';

class Select extends React.Component {
  constructor(props: Object) {
    super(props);

    this.state = {
      floatingLabel: !!props.placeholder || !!props.defaultValue,
      active: false,
      scrollPos: 0
    };

    this.select = React.createRef();
  }

  get valueObject() {
    const {options} = this.props;
    // Find corresponding text with default value
    return _.find(options, (option) => {
      return option.value === this.props.defaultValue;
    });
  }

  handleBlur = (event) => {
    if (this.props.disabled) {
      return;
    }

    const currentTarget = event.currentTarget;
    const { name, onBlur } = this.props;

    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {

        this.setState({
          floatingLabel: !!this.valueObject,
          active: false
        });

        if (onBlur) {
          onBlur(event, {
            name: name,
            value: (this.valueObject || {}).value,
            valueObject: this.valueObject
          });
        }
      }
    }, 0);
  };

  handleClick = (event) => {

    // Check if drop down is active. If not, close the drop down.
    if (event.target.className !== 'scrollbar') {
      this.setState({
        active: !this.state.active
      });
    }
  };

  handleSelect = (data, event) => {
    const { onChange } = this.props;

    this.setState({
      floatingLabel: !!data,
      active: false
    }, () => {
      if (onChange) {
        onChange(event, {
          name: this.props.name,
          value: (data || {}).value,
          valueObject: data
        });
      }
    });
  };

  handleArrowUpKey = (options, index) => {
    // Arrow up key
    if (index === undefined) {
      // If undefined, up key should go to last value
      return options[options.length - 1];
    } else {
      // If arrived at first, go to last otherwise the value key before
      const newIndex = index - 1 < 0 ? options.length - 1 : index - 1;
      return options[newIndex];
    }
  }

  handleArrowDownKey = (options, index) => {
    // Arrow down key
    if (index === undefined) {
      // If undefined, down key should go to first value
      return options[0];
    } else {
      // If arrived at last, go to last otherwise the value key after
      const newIndex = index >= options.length - 1 ? 0 : index + 1;
      return options[newIndex];
    }
  }

  handleKeyDown = (event) => {
    const { options, onChange } = this.props;

    const index = this.valueObject
      ? options.map(x => x.key).findIndex((key) => this.valueObject.key === key)
      : undefined;

    let value;
    if (event.keyCode === 38) {
      value = this.handleArrowUpKey(options, index);
    } else if (event.keyCode === 40) {
      value = this.handleArrowDownKey(options, index);
    }

    this.setState({
      floatingLabel: true
    }, () => {
      if (value) {
        this.selectScrollArea.scrollYTo(value.key * 40);

        if (onChange) {
          onChange(event, {
            name: this.props.name,
            value: (value || {}).value,
            valueObject: value
          });
        }
      }
    });
  };

  handleScroll = value => this.setState({ scrollPos: value.topPosition || 0 });

  render() {
    const { className, label, options, fluid, disabled, error, maxHeight, placeholder, ...rest } = this.props;
    const { floatingLabel, active } = this.state;
    const valueObject = this.valueObject || {};
    const value = valueObject.value;

    const state = classnames('vn-select', className, {
      'floating-label': floatingLabel || value,
      'active': active,
      'fluid': fluid,
      'disabled': disabled,
      'error': error
    });
    const styles = {
      menu: {
        maxHeight: +maxHeight * 40.33
      }
    };

    const select = (
      <div {...rest}
        className={state}
        ref={this.select}
        onFocus={this.handleFocus}
        onClick={this.handleClick}
        onBlur={this.handleBlur}
        tabIndex={-1}
        onKeyDown={this.handleKeyDown}
      >
        <span className='label'>{label}</span>
        <div role='listbox' className='ui selection dropdown' tabIndex={-1}>
          {
            placeholder && !value ? (
              <div className='text default'>{placeholder}</div>
            ) : (
              <div className='text'>{valueObject.text}</div>
            )
          }
          <i className='dropdown icon'> </i>
          <ScrollArea
            style={styles.menu}
            className={'menu transition' + (active ? ' visible' : '')}
            horizontal={false}
            speed={0.8}
            stopScrollPropagation
            reference={(node) => { this.selectScrollArea = node }}
            onScroll={this.handleScroll}
          >
            <SelectOptions options={options} value={value} onSelect={this.handleSelect} />
          </ScrollArea>
        </div>
      </div>
    );

    if (error) {
      return (
        <Popup
          trigger={select}
          error
          content={error}
          on='focus'
          position='top left'
        />
      )
    }

    return select;
  }
}

Select.defaultProps = {
  maxHeight: 5
};

Select.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  // As options can have value of type any mostly it would be number/string
  defaultValue: PropTypes.any,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  fluid: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node
  ]),
  maxHeight: PropTypes.number,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func
};

export default Select;
