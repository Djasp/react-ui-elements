import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Tab extends React.Component {
  state = {
    activePane: this.props.activePane ? this.props.activePane : 0
  };

  handleClick = (index) => {
    this.setState({ activePane: index });
    const { onTabChange } = this.props;
    if (onTabChange) {
      onTabChange(index);
    }
  };

  Pane = (props) => <div className='tab-pane'>{props.value}</div>;

  render() {
    const { panes, className } = this.props;
    const { activePane } = this.state;
    const classes = classnames('vn-tab', className);

    return (
      <div className={classes}>
        <div className='tab-menu'>
          {
            panes.map((pane, index) => {
              const { menuItem } = pane;
              const title = typeof menuItem === 'function'
                ? menuItem()
                : menuItem;
              const classes = classnames('tab-menu-item', {
                active: activePane === index
              });
              return (
                <div
                  key={index}
                  className={classes}
                  onClick={this.handleClick.bind(this, index)}
                >
                  {title}
                </div>
              )
            })
          }
        </div>
        <div className='tab-panes'>
          {
            panes.map((pane, index) => {
              return activePane === index
                ? <this.Pane key={index} value={pane.render()} />
                : null;
            })
          }
        </div>
      </div>
    )
  }
}

Tab.propTypes = {
  className: PropTypes.string,
  panes: PropTypes.array.isRequired,
  activePane: PropTypes.number,
  onTabChange: PropTypes.func
};

export default Tab;
