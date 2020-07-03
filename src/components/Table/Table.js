import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import TableRow from './TableRow';
import { ScrollArea } from '../../index';
import ArrowUp from 'react-icons/lib/md/arrow-upward';
import ArrowDropDown from 'react-icons/lib/md/arrow-drop-down';
import ArrowDropUp from 'react-icons/lib/md/arrow-drop-up';
import Color from 'color';

class Table extends React.Component {
  state = {
    windowSize: window.innerWidth,
    minWidth: this.props.columns.reduce((acc, cur) => {
      const colWidth = cur.minWidth || cur.width || 100;
      return acc + colWidth;
    }, this.props.data.filter((row) => _.has(row, 'children')).length > 0 ? 36 : 0),
    tableHeight: typeof this.props.height === 'number' ? `${this.props.height * 56}px` : this.props.height,
    rowState: this.props.data.map((row) => {
      const children = _.get(row, 'children') ? _.get(row, 'children').length : 0;
      return {
        expanded: false,
        children: children
      }
    }),
    hasGrouped: this.props.data.filter((row) => _.has(row, 'children')).length > 0,
    verticalPositionAtTop: true,
    tableInnerLeftPos: 0,
    sorting: {
      accessor: null,
      by: null
    },
    tableBackground: Color('rgb(255, 255, 255)')
  };

  componentDidMount() {
    window.addEventListener('resize', this.resizeHandler);
    const tableBackground = this.props.backgroundColor
      ? Color(this.props.backgroundColor)
      : this.getParentBackgroundColour(this.table);
    this.setState({ tableBackground })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      hasGrouped: nextProps.data.filter((row) => _.has(row, 'children') ||  _.has(row, 'contextMenu')).length > 0,
      minWidth: nextProps.columns.length * 100 + (nextProps.data.filter((row) => _.has(row, 'children')).length > 0 ? 36 : 0),
      rowState: nextProps.data.map((row) => {
        const children = _.get(row, 'children') ? _.get(row, 'children').length : 0;
        return {
          expanded: false,
          children: children
        }
      })
    }
  }

  getParentBackgroundColour = (table) => {
    const parent = table.parentElement;
    const background = parent
      ? Color(window.getComputedStyle(parent, null).getPropertyValue('background-color'))
      : 'rgb(255, 255, 255)';

    if (background.rgb().valpha > 0) {
      return background;
    }
    return this.getParentBackgroundColour(parent);
  };

  resizeHandler = () => {
    this.setState({ windowSize: window.innerWidth });
  };

  getCellWidth = (column) => {
    const customWidth = column.width || column.maxWidth || column.minWidth;
    const width = column.width || column.maxWidth || column.minWidth || 100;
    const style = {
      flex: `${width} 0 auto`,
      width: `${width}px`,
      maxWidth: `${width}px`
    };
    !customWidth && delete style.maxWidth;
    column.minWidth && delete style.maxWidth;

    return style;
  };

  createTableRows = (columns, data) => {
    const { id } = this.props;
    
    return data.map((datum, index) => {
      const idProp = id ? { id: id + '-row-' + index } : {};

      return (
        <TableRow
          key={index}
          index={index}
          columns={columns}
          rowData={datum}
          selected={
            this.props.selectable
              ? Array.isArray(this.props.selected)
                ? this.props.selected.includes(index)
                : index === this.props.selected
              : false
          }
          window={this.state.windowSize}
          onClick={this.clickHandler}
          onExpand={this.expandHandler}
          hasGrouped={this.state.hasGrouped}
          color={this.state.tableBackground}
          selectable={this.props.selectable}
          {...idProp}
        />
      );
    });
  };

  expandHandler = (expanded, index) => {
    const { rowState } = this.state;
    const newRowState = [...rowState];
    newRowState[index] = {
      children: rowState[index].children,
      selected: rowState[index].selected,
      expanded: expanded
    };

    this.setState({
      rowState: newRowState
    })
  };

  clickHandler = (data, event) => {
    const { onRowClick } = this.props;
    const { rowState } = this.state;
    onRowClick && onRowClick(data, event);

    let defaultedRowState = [...rowState];

    // Reset all selected states to false
    if (typeof this.props.selected === 'number') {
      for (let i = 0; i < defaultedRowState.length; i++) {
        defaultedRowState[i].selected = false
      }
    }

    const newRowState = [...defaultedRowState];

    // Only change selected state if table is selectable
    if (this.props.selectable) {
      newRowState[data.index] = {
        children: rowState[data.index].children,
        selected: data.selected,
        expanded: rowState[data.index].expanded
      };
    }

    this.setState({
      rowState: newRowState
    });
  };

  sortHandler = (accessor) => {
    const { sorting } = this.state;
    const getSortMode = sorting => sorting.by === 'asc' ? 'desc' : 'asc';
    const by = accessor === sorting.accessor ? getSortMode(sorting) : 'asc';
    let func;

    if (typeof accessor === 'function') {
      if (accessor === sorting.accessor) {
        func = (data, acc, dir) => dir === 'desc' ? _.reverse(_.sortBy(data, acc)) : _.sortBy(data, acc);
      } else {
        // eslint-disable-next-line no-unused-vars
        func = (data, acc, dir) => _.sortBy(data, acc);
      }
    } else {
      if (accessor === sorting.accessor) {
        func = (data, acc, dir) => dir === 'desc' ? _.reverse(_.sortBy(data, `data.${acc}`)) : _.sortBy(data, `data.${acc}`);
      } else {
        // eslint-disable-next-line no-unused-vars
        func = (data, acc, dir) => _.sortBy(data, `data.${acc}`);
      }
    }

    this.setState({ sorting: { accessor, by, func } });
  };

  createTableHead = (categories) => {
    return categories.map((category, index) => {
      const customHeader = typeof category.header === 'function';
      const header = customHeader ? category.header() : category.header;
      const style = this.getCellWidth(category);
      const accessor = category.accessor;
      const sorted = this.state.sorting.accessor === accessor;
      const sortable = category.hasOwnProperty('sortable') ? category.sortable : true;
      const state = classnames('table-category', {
        'hidden': category.hidden,
        'sortable': sortable,
        'sorting-asc': sorted && this.state.sorting.by === 'asc',
        'sorting-desc': sorted && this.state.sorting.by === 'desc'
      });

      return (
        <div
          key={index}
          className={state}
          style={style}
          onClick={sortable ? this.sortHandler.bind(this, accessor) : null}
        >
          {header}
          <ArrowDropUp className='sorting-arrow-up' size={16} />
          <ArrowDropDown className='sorting-arrow-down' size={16} />
        </div>
      );
    });
  };

  horizontalScrollHandler = (value) => {
    const {tableInnerLeftPos} = this.state;
    if (tableInnerLeftPos !== value.leftPosition && value.leftPosition !== undefined) {
      this.setState({
        tableInnerLeftPos: value.leftPosition
      })
    }
  };

  verticalScrollHandler = (value) => {
    const {verticalPositionAtTop} = this.state;
    if (verticalPositionAtTop === !!value.topPosition) {
      this.setState({
        verticalPositionAtTop: value.topPosition === 0
      })
    }
  };

  scrollToTopHandler = () => {
    this.scrollArea.scrollTop();
  };

  render() {
    const { className, onRowClick, height, columns, data } = this.props;
    const { hasGrouped, verticalPositionAtTop, tableInnerLeftPos,
      minWidth, tableHeight, sorting } = this.state;

    const state = classnames('vn-table', className, {
      'selectable': onRowClick,
      'multi-select': Array.isArray(this.props.selected),
      'has-grouped': hasGrouped
    });
    const scrollToTopState = classnames('table-scroll-to-top', {
      'visible': height && !verticalPositionAtTop
    });

    const sortedData = sorting.func ? sorting.func(data, sorting.accessor, sorting.by) : data;

    const tableBody = (
      <div className='table-body'>
        {this.createTableRows(columns, sortedData)}
      </div>
    );

    return (
      <div className={state} ref={(node) => { this.table = node }}>
        <div className='table-head'>
          <div
            className='table-head-inner'
            style={{
              transform: `translateX(-${tableInnerLeftPos}px)`,
              minWidth: `${minWidth}px`
            }}
          >
            {this.createTableHead(columns)}
          </div>
        </div>
        { height ? (
          <ScrollArea
            speed={0.8}
            style={{ maxHeight: tableHeight }}
            contentStyle={{ width: 'calc(100% - 40px)' }}
            onScroll={this.verticalScrollHandler}
            className='scrollarea-vertical'
            horizontal={false}
            reference={(node) => { this.scrollArea = node }}
          >
            {tableBody}
          </ScrollArea>
        ) : (
          <div className='scrollarea-vertical'>
            <div className='scrollarea-content'>
              {tableBody}
            </div>
          </div>
        )}
        <div className={scrollToTopState}>
          <div className='table-scroll-to-top-button' onClick={this.scrollToTopHandler}>
            Back to top <ArrowUp size={14} />
          </div>
        </div>
      </div>
    )
  }
}

Table.contextTypes = {
  scrollArea: PropTypes.object
};

Table.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRowClick: PropTypes.func,
  selected: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  selectable: PropTypes.bool,
  backgroundColor: PropTypes.string,
  id: PropTypes.string
};

export default Table;
