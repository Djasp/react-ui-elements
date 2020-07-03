import React from 'react';
import { Alert } from '../../src/index.js';

class AlertExampleDismissibleBlockSuccess extends React.Component {
  state = { visible: true };

  handleDismiss = () => {
    this.setState({ visible: false });

    setTimeout(() => {
      this.setState({ visible: true })
    }, 2000)
  };

  render() {
    if (this.state.visible) {
      return (
        <Alert
          onDismiss={this.handleDismiss}
          content='You Succesfully read this alert message'
          type='success'
        />
      )
    }

    return (
      <p>
        <br />
        <i>The message will return in 2s</i>
        <br />
        <br />
      </p>
    )
  }
}

class AlertExampleDismissibleBlockError extends React.Component {
  state = { visible: true };

  handleDismiss = () => {
    this.setState({ visible: false });

    setTimeout(() => {
      this.setState({ visible: true })
    }, 2000)
  };

  render() {
    if (this.state.visible) {
      return (
        <Alert
          onDismiss={this.handleDismiss}
          content='Well Done!  You Succesfully read this alert message'
          type='error'
        />
      )
    }

    return (
      <p>
        <br />
        <i>The message will return in 2s</i>
        <br />
        <br />
      </p>
    )
  }
}

class AlertExampleDismissibleBlockWarning extends React.Component {
  state = { visible: true };

  handleDismiss = () => {
    this.setState({ visible: false });

    setTimeout(() => {
      this.setState({ visible: true })
    }, 2000)
  };

  render() {
    if (this.state.visible) {
      return (
        <Alert
          onDismiss={this.handleDismiss}
          content='Well Done!  You Succesfully read this alert message'
          type='warning'
        />
      )
    }

    return (
      <p>
        <br />
        <i>The message will return in 2s</i>
        <br />
        <br />
      </p>
    )
  }
}

class AlertExampleDismissibleBlockSuccessCustomTitle extends React.Component {
  state = { visible: true };

  handleDismiss = () => {
    this.setState({ visible: false });

    setTimeout(() => {
      this.setState({ visible: true })
    }, 2000)
  };

  render() {
    if (this.state.visible) {
      return (
        <Alert
          title='My custom title here'
          content='You Succesfully read this alert message'
          type='success'
        />
      )
    }

    return (
      <p>
        <br />
        <i>The message will return in 2s</i>
        <br />
        <br />
      </p>
    )
  }
}

export {
  AlertExampleDismissibleBlockSuccess,
  AlertExampleDismissibleBlockError,
  AlertExampleDismissibleBlockWarning,
  AlertExampleDismissibleBlockSuccessCustomTitle
}
