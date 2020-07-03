/**
 * Created by bobbeugels on 01/05/17.
 */

'use strict';
import React from 'react';
import { Checkbox } from '../../index.js';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class OmniusToggleBox extends React.Component {
  state = {
    expanded: !!this.props.expanded
  };

  handleChange = (event, data) => {
    const { onChange } = this.props;

    this.setState({expanded: data.checked});

    if (onChange) {
      onChange(event, data);
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.expanded !== undefined && nextProps.expanded !== prevState.expanded) {
      return {
        expanded: nextProps.expanded
      };
    }

    return null;
  }

  render() {
    const { label, name, className, children } = this.props;
    const { expanded } = this.state;

    const classes = classNames(
      'vn-togglebox',
      {'expanded': expanded || !label},
      className
    );

    return (
      <div className={classes}>
        {
          label &&
          <div className='header'>
            <Checkbox name={name} label={label} checked={expanded} onChange={this.handleChange} />
          </div>
        }
        <div className='content'>
          {children}
        </div>
      </div>
    )
  }
}

OmniusToggleBox.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  expanded: PropTypes.bool,
  children: PropTypes.node,
  onChange: PropTypes.func
};

export default OmniusToggleBox;
