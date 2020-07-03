import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from '../../index';
import classnames from 'classnames';

class TableCell extends React.Component {
  state = {
    overflow: false
  };

  componentDidMount() {
    this.checkOverflow();
  }

  checkOverflow = () => {
    //Timeout has been added to solve css transition problem
    setTimeout(() => {
      //Checks if data is wrapped in some other element
      const element = this.cell.childElementCount ? this.cell.children[0] : this.cell ;
      // Things involving accessing DOM properties on element
      // In the case of what this question actually asks:
      const hasOverflow =
        (element.offsetHeight < element.scrollHeight ||
          element.offsetWidth < element.scrollWidth) &&
        !this.props.disablePopup;

      this.setState({ overflow: hasOverflow });
    }, 500);
  };

  componentDidUpdate(nextProps) {
    if (
      nextProps.window !== this.props.window ||
      nextProps.expanded !== this.props.expanded
    ) {
      this.checkOverflow();
    }
  }

  render() {
    const { value, column, style } = this.props;
    const classNames = column.className
      ? column.className + ' table-cell'
      : 'table-cell';
    const state = classnames(classNames, {
      'multi-line': column.multiLine,
      'reverse-overflow': column.reverseOverflow && this.state.overflow,
      hidden: column.hidden
    });

    const Cell = (
      <div
        className={state}
        ref={cell => {
          this.cell = cell;
        }}
        style={style}
      >
        {value}
      </div>
    );

    if (this.state.overflow) {
      return (
        <Popup
          trigger={Cell}
          content={value}
          on="hover"
          style={{ fontSize: '1em', fontWeight: 'bold', padding: '5px 9px' }}
          inverted
        />
      );
    } else {
      return Cell;
    }
  }
}

TableCell.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  column: PropTypes.object,
  window: PropTypes.number,
  style: PropTypes.object,
  disablePopup: PropTypes.bool,
  expanded: PropTypes.bool
};

export default TableCell;
