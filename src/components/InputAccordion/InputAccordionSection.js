/**
 * Created by bobbeugels on 01/05/17.
 */

'use strict';
import React from 'react';
import Chevron from '../../icons/Chevron';
import { Checkbox } from '../../index.js';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class InputAccordionSection extends React.Component {
  constructor(props: Object) {
    super(props);

    this.state = {
      checked: this.props.checked
    };
  }

  handleChange = (event, data) => {
    const { onChange } = this.props;

    if(onChange) {
      onChange(event, data);
    }
  };

  render() {
    const { children, title, radio, checked, name, value, disabled } = this.props;

    const classes = classnames({
      'active': this.props.checked,
      'expandable': this.props.children,
      'disabled': this.props.disabled
    });

    return (
      <section className={classes}>
        <header className='title'>
          <Checkbox radio={radio} name={name} value={value}
            checked={checked} onChange={this.handleChange}
            label={title} disabled={disabled} />
          {!!children &&
            <div className='indication'>
              <div className='chevron up'>
                <Chevron />
              </div>
              <div className='chevron down'>
                <Chevron />
              </div>
            </div>
          }
        </header>

        {!!children && <div className='content'>{children}</div>}
      </section>
    )
  }
}

InputAccordionSection.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  radio: PropTypes.bool,
  checked: PropTypes.bool,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.string
};

export default InputAccordionSection;
