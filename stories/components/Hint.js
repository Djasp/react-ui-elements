import React from 'react';
import { Hint } from '../../src/index.js';

class HintExample extends React.Component {
  state = { visible: true };

  handleDismiss = () => {
    this.setState({ visible: false });

    setTimeout(() => {
      this.setState({ visible: true })
    }, 2000)
  };

  render() {
    const message = (
      <p>
        <strong>Mobile Postpaid</strong> and <strong>Internet & Phone</strong> packages marked with hint indicator can form a <strong>GigaKombi bundle</strong>.
      </p>
    );

    if (this.state.visible) {
      return (
        <Hint title='Bundle match'
          message={message}
          onDismiss={this.handleDismiss}
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
  HintExample
}
