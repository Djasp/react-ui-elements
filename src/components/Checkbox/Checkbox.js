/**
 * Created by bobbeugels on 03/04/17.
 */

'use strict';
import {Checkbox} from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';

class OmniusCheckbox extends React.Component {
    props: {
        className: string
    };

    render() {
      const { className, ...rest } = this.props,
        state = 'vn-checkbox'
                  + (className !== undefined ? ` ${className}` : '');

      return (
        <Checkbox className={state} {...rest}/>
      )
    }
}

OmniusCheckbox.propTypes = {
  className: PropTypes.string
};

export default OmniusCheckbox;
