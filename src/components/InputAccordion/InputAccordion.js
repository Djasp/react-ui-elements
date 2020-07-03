/**
 * Created by bobbeugels on 01/05/17.
 */

'use strict';
import React, { Children, cloneElement } from 'react';
import InputAccordionSection from './InputAccordionSection';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';

class OmniusInputAccordion extends React.Component {

  static Section = InputAccordionSection;

  handleChange = (e: Event, data: Object) => {
    const { onChange, radio, values } = this.props;

    if (onChange) {
      const evetArg = {
        name: data.name,
        value: data.value
      };

      if (!radio) {
        evetArg.checked = data.checked;

        const existinIndex = _.indexOf(values, data.value);
        evetArg.values = [...values];
        if (existinIndex > -1) {
          if (!data.checked) {
            evetArg.values.splice(existinIndex, 1);
          } else {
            evetArg.values.push(data.value);
          }
        }
      }
      onChange(e, evetArg);
    }
  };

  renderChildren = () => {
    const { children, groupName, radio, value, values } = this.props;

    return Children.map(children, (child) => {
      return cloneElement(
        child, {
          ...child.props,
          onChange: this.handleChange,
          name: radio ? groupName : child.props.name,
          checked: radio
            ? value === child.props.value
            : child.props.checked || _.some(values, val => val === child.props.value),
          radio: radio
        }
      );
    })
  };

  render() {
    const { className } = this.props,
      classes = classnames('vn-inputaccordion', className);

    return (
      <div className={classes}>
        {this.renderChildren()}
      </div>
    )
  }
}

OmniusInputAccordion.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array,
  radio: PropTypes.bool,
  groupName: PropTypes.string,
  // It would be used with list of radio options
  value: PropTypes.any,
  // It should be used with list of checkboxes
  values: PropTypes.array,
  onChange: PropTypes.func
};

export default OmniusInputAccordion;
