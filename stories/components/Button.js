import React from 'react';
import { Button, Icon } from '../../src/index.js';

const ButtonExample = () => (
  <div>
    <Button>Default</Button>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
    <Button destructive>Destructive</Button>
  </div>
);

const ButtonExampleDisabled = () => (
  <div>
    <Button disabled>Default</Button>
    <Button primary disabled>Primary</Button>
    <Button secondary disabled>Secondary</Button>
    <Button destructive disabled>Destructive</Button>
  </div>
);

const ButtonExampleActive = () => (
  <div>
    <Button>Non active</Button>
    <Button active>Active</Button>
    <Button primary>Non active</Button>
    <Button primary active>Active</Button>
    <Button secondary>Non active</Button>
    <Button secondary active>Active</Button>
    <Button destructive>Non active</Button>
    <Button destructive active>Active</Button>
  </div>
);

const ButtonExampleLoading = () => (
  <div>
    <Button loading loadingText={false}>Disabled</Button>
    <Button primary loading loadingText={false}>Disabled</Button>
    <Button secondary loading loadingText={false}>Disabled</Button>
    <Button destructive loading loadingText={false}>Disabled</Button>
  </div>
);

const ButtonExampleLoadingText = () => (
  <div>
    <Button loading>Disabled</Button>
    <Button primary loading>Disabled</Button>
    <Button secondary loading>Disabled</Button>
    <Button destructive loading>Disabled</Button>
  </div>
);

const ButtonExampleFloated = () => (
  <div>
    <Button primary floated='left'>Left Floated</Button>
    <Button primary floated='right'>Right Floated</Button>
  </div>
);

const ButtonExampleFluid = () => (
  <Button primary fluid>Fits to Container</Button>
);

const ButtonExampleIcon = () => (
  <Button secondary icon>
    <Icon name='world' />
  </Button>
);

const ButtonExampleGroup = () => (
  <Button.Group>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </Button.Group>
);

class ButtonExampleClickLoad extends React.Component {
  state = {
    loading: false
  };

  handleClick = () => {
    this.setState({ loading: !this.state.loading });
  };

  render() {
    return (
      <Button
        loading={this.state.loading}
        onClick={this.handleClick}
        fluid
        loadingText='Loading'
      >
        Click to load
      </Button>
    )
  }
}

class ButtonExampleDropdown extends React.Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <Button.Dropdown>
        <Button
          onClick={this.handleClick}
        >
          Click
        </Button>
        <Button.Dropdown.Menu open={this.state.open}>
          <Button.Dropdown.Item onClick={() => console.log('copy')}>Copy item</Button.Dropdown.Item>
          <Button.Dropdown.Item onClick={() => console.log('paste')}>Paste item</Button.Dropdown.Item>
          <Button.Dropdown.Item onClick={() => console.log('delete')}>Delete item</Button.Dropdown.Item>
        </Button.Dropdown.Menu>
      </Button.Dropdown>
    )
  }
}

export {
  ButtonExample,
  ButtonExampleDisabled,
  ButtonExampleActive,
  ButtonExampleLoading,
  ButtonExampleLoadingText,
  ButtonExampleDropdown,
  ButtonExampleFloated,
  ButtonExampleFluid,
  ButtonExampleIcon,
  ButtonExampleGroup,
  ButtonExampleClickLoad
}
