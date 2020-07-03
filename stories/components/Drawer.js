import React from 'react';
import { Drawer } from '../../src/index.js';
import { Button } from 'semantic-ui-react'

class DrawerExampleLeft extends React.Component {

  state = {visible: false}

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  handleSidebarHide = () => this.setState({ visible: false });

  render(){

    const { visible } = this.state;

    return (
      <div>
        <Button
          primary
          className='vn-button btnDrawer'
          onClick={this.toggleVisibility}>
          Toggle Visibility
        </Button>
        <Drawer
          animation='overlay'
          direction='left'
          width='thin'
          visible={visible}
          allowClose
          toggleVisibility={this.toggleVisibility}
          onHide={this.handleSidebarHide}
        />
      </div>
    );
  }
}

class DrawerExampleRight extends React.Component {

  state = {visible: false}

  toggleVisibility = () => this.setState({visible: !this.state.visible});

  render(){

    const { visible } = this.state;

    return (
      <div>
        <Button
          primary
          className='vn-button btnDrawer'
          onClick={this.toggleVisibility}>
          Toggle Visibility
        </Button>
        <Drawer
          direction='right'
          width='wide'
          animation='overlay'
          visible={visible}
          allowClose
          toggleVisibility={this.toggleVisibility}
        />
      </div>
    );
  }
}

class DrawerExampleLeftOpen extends React.Component {

  state = {visible: true}

  toggleVisibility = () => this.setState({visible: !this.state.visible});

  render(){

    const { visible } = this.state;

    return (
      <div>
        <Drawer
          direction='left'
          visible={visible}
          animation='overlay'
          width='wide'
          allowClose
          toggleVisibility={this.toggleVisibility}
        />
      </div>
    );
  }
}

class DrawerExampleRightOpen extends React.Component {

  state = {visible: true}

  toggleVisibility = () => this.setState({visible: !this.state.visible});

  render(){

    const { visible } = this.state;

    return (
      <div>
        <Drawer
          width='wide'
          direction='right'
          visible={visible}
          animation='overlay'
          allowClose
          toggleVisibility={this.toggleVisibility}
        />
      </div>
    );
  }
}

class DrawerExampleCloseIcon extends React.Component {
  render(){
    return (
      <div>
        <Drawer
          direction='right'
          animation='overlay'
          width='wide'
          visible
        />
      </div>
    );
  }
}

export {
  DrawerExampleLeft,
  DrawerExampleRight,
  DrawerExampleLeftOpen,
  DrawerExampleRightOpen,
  DrawerExampleCloseIcon
}
