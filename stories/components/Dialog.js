import React from 'react'
import { Dialog, Button } from '../../src/index.js'

class DialogExample extends React.Component {
  state = { open: false };

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;

    return (
      <div>
        <Button primary onClick={this.show}>Open</Button>
        <Dialog
          open={open}
          label="Modal Title"
          content="Dialog with action buttons. You can also close this dialog by clicking outside the dialog, or with the 'Esc' key."
          actionName="Action"
          onClose={this.close}
          onActionClick={() => console.log('click')}
        />
      </div>
    )
  }
}

class DialogExampleOptional extends React.Component {
  state = { open: false };

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;

    return (
      <div>
        <Button primary onClick={this.show}>Open</Button>
        <Dialog
          open={open}
          label="Dialog title"
          content="Dialog will close by clicking outside the dialog, the X, or with the 'Esc' key."
          onClose={this.close}
          optional
        />
      </div>
    )
  }
}

class DialogExampleAlert extends React.Component {
  state = { open: false };

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;

    return (
      <div>
        <Button primary onClick={this.show}>Open</Button>
        <Dialog
          open={open}
          label="Alert message"
          content="Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation."
          actionName="Discard"
          onActionClick={() => console.log('click')}
          onClose={this.close}
          alert
        />
      </div>
    )
  }
}

export {
  DialogExample,
  DialogExampleOptional,
  DialogExampleAlert
}
