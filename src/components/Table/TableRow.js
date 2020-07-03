import React from 'react';
import TableCell from './TableCell';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import Chevron from 'react-icons/lib/md/chevron-left';
import MdMoreHoriz from 'react-icons/lib/md/more-horiz';
import { Popup } from '../../index.js';

class TableRow extends React.PureComponent {
  state = {
    expanded: false
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

  clickHandler = (event) => {
    event.stopPropagation();
    this.props.onExpand(!this.state.expanded, this.props.index);
    this.setState({
      expanded: !this.state.expanded
    })
  };

  createTableRow = (columns, data, index, child = false) => {
    const rowData = data.data;
    //To enable row click for disabled row if configured
    const enableClick = _.get(data, 'config.enableClick')
    const clickable = enableClick !== undefined ? enableClick : !_.get(data, 'config.disabled');
    const cells = columns.map((column, index) => {
      const accessor = column.accessor;
      const fAccessor = typeof accessor === 'function';
      let value = fAccessor ? accessor(data) : _.get(rowData, accessor);

      if (typeof column.transform === 'function') {
        value = column.transform(value);
      }

      // Check if the column has a custom cell
      // component and pass additional props.
      value = column.Cell ? <column.Cell value={value} {...column.additionalProps} /> : value;
      const style = this.getCellWidth(column);
      const disablePopup = column.disablePopup;

      return (
        <TableCell
          key={index}
          column={column}
          style={style}
          value={value}
          window={this.props.window}
          disablePopup={disablePopup}
          expanded={this.state.expanded}
          className={column.className}
        />
      );
    });

    const selected = child ? false : this.props.selected;

    const value = {
      ...rowData,
      index,
      rawData: rowData,
      selected: !selected,
      expanded: this.state.expanded
    };

    const state = classnames(
      'table-row',
      _.get(data, 'config.class'),
      {
        'selected': selected,
        'disabled': _.get(data, 'config.disabled')
      }
    );

    const highlightedColor = () => {
      const { color } = this.props;
      return color.darken(0.0211).desaturate(0.375);
    };

    const isHoverable = !_.get(data, 'config.disabled');

    const GroupToggle = (props) =>
      <div
        className={classnames('table-row-group-toggle', {
          'visible': props.visible
        })}
        onClick={this.clickHandler}
        style={{
          background: selected || (this.props.selectable && this.state.hover)
            ? `linear-gradient(to right, rgba(255, 255, 255, 0) 0%, ${highlightedColor()} 20%, ${highlightedColor()} 99%)`
            : `linear-gradient(to right, rgba(255, 255, 255, 0) 0%, ${this.props.color.string()} 20%, ${this.props.color.string()} 99%)`
        }}
      >
        <div className='chevron'>
          <Chevron size={26} />
        </div>
      </div>;

    const ContextMenu = (props) =>
      <div className='table-row-context-menu' style={{
        background: selected || (this.props.selectable && this.state.hover)
          ? `linear-gradient(to right, rgba(255, 255, 255, 0) 0%, ${highlightedColor()} 20%, ${highlightedColor()} 99%)`
          : `linear-gradient(to right, rgba(0, 0, 0, 0) 0%, ${this.props.color.string()} 20%, ${this.props.color.string()} 99%)`
      }}>
        <div className='ellipsis'>
          <MdMoreHoriz size={24} />
        </div>
        {this.state.hover && this.state.hover[props.index] &&
          <div className='context-menu' style={{
            background: selected || (this.props.selectable && this.state.hover)
              ? `linear-gradient(to right, rgba(255, 255, 255, 0) 0%, ${highlightedColor()} 20%, ${highlightedColor()} 99%)`
              : `linear-gradient(to right, rgba(0, 0, 0, 0) 0%, ${this.props.color.string()} 20%, ${this.props.color.string()} 99%)`
          }}>
            {
              props.menu.map(item =>
                <Popup
                  key={item.name}
                  trigger={
                    <div className='context-menu-item' onClick={(event) => {item.callback(event, props.data) }}>{item.icon}</div>
                  }
                  content={item.name}
                  on='hover'
                  inverted
                  position='top center'
                  style={{
                    padding: '4px 7px'
                  }}
                />
              )
            }
          </div>
        }
      </div>;

    return (
      <div
        key={index}
        className={state}
        onClick={clickable ? this.props.onClick.bind(null, value) :  null}
        onMouseEnter={isHoverable ? () => this.mouseHandler(true, data.data._accountIdentifier) : null}
        onMouseLeave={isHoverable ? () => this.mouseHandler(false, data.data._accountIdentifier) : null}
      >
        {cells}
        {this.props.hasGrouped && _.get(data, 'children') && _.get(data, 'children').length && <GroupToggle visible={true}/>}
        {data.contextMenu && <ContextMenu menu={data.contextMenu} data={data.data} index = {data.data._accountIdentifier} />}
      </div>
    )
  };

  mouseHandler = (value, index) => {
    const newState = Object.assign({}, this.state);
    newState[index] = value;
    this.setState({ hover: newState });
  };

  render() {
    const { columns, rowData, index, id } = this.props;
    const idProp = id ? { id: id } : {};
    const state = classnames({
      'group-expanded': this.state.expanded
    });

    const rowChildIsFunc = typeof rowData.children === 'function';

    return (
      <div className={state} key={index} {...idProp}>
        {this.createTableRow(columns, rowData, index)}
        {rowData.children && (
          <div
            className={`table-row-nested ${
              rowChildIsFunc ? 'table-row-nested-component' : ''
            }`}
          >
            {// Children can be either more rows or a custom react component
              rowChildIsFunc
                ? rowData.children()
                : rowData.children.map((item, index) =>
                  this.createTableRow(columns, item, index, true)
                )}
          </div>
        )}
      </div>
    );
  }
}

TableRow.propTypes = {
  columns: PropTypes.array,
  rowData: PropTypes.object,
  index: PropTypes.number,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  onExpand: PropTypes.func,
  hasGrouped: PropTypes.bool,
  window: PropTypes.number,
  color: PropTypes.object,
  selectable: PropTypes.bool,
  id: PropTypes.string
};

export default TableRow;
