/**
 * Created by bobbeugels on 03/04/17.
 */

'use strict';
import { Segment, Header } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';
import ArrowDropUpIcon from 'react-icons/lib/md/arrow-drop-up';

class OmniusSegment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: props.open
    }
  }

  handeClick = () => {
    const { collapsible, onClick } = this.props;
    const { open } = this.state;

    if (collapsible) {
      this.setState({ open: !open });
      onClick && onClick(!open);
    }
  };

  render() {
    const { title, className, children, collapsible } = this.props;
    const state = 'vn-segment'
      + (className !== undefined  ? ` ${className}` : '');

    const header = title ? (
      <Header as='h6'>{title}</Header>
    ) : null;

    const collapsibleHeader = collapsible ? (
      <div className='header' onClick={this.handeClick}>
        {header}
        <ArrowDropUpIcon
          size={20}
          style={{ transform: this.state.open ? 'rotate(0)' : 'rotate(180deg)' }}
        />
      </div>
    ) : header;

    return (
      <Segment className={state}>
        {collapsibleHeader}
        <div
          className='content'
          style={{ display: this.state.open ? 'block' : 'none' }}
        >
          {children}
        </div>
      </Segment>
    )
  }
}

OmniusSegment.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  collapsible: PropTypes.bool,
  open: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func
};

export default OmniusSegment;
