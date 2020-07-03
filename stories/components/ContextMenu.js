import React from 'react';
import { ContextMenu } from '../../src/index.js';

import Delete from '../../src/icons/Delete';
import Duplicate from '../../src/icons/Duplicate';

/*eslint-disable no-console */
const options = [
  { id: 0, text: 'Delete Package', icon: <Duplicate />, action: function() { console.log('click') } },
  { id: 1, text: 'Duplicate Package', icon: <Delete />, action: function() { console.log('click') } }
];

const optionsLong = [
  { id: 0, text: 'Delete Package', icon: <Duplicate />, action: function() { console.log('click') } },
  { id: 1, text: 'Duplicate Package', icon: <Delete />, action: function() { console.log('click') } },
  { id: 2, text: 'Delete Package', icon: <Duplicate />, action: function() { console.log('click') } },
  { id: 3, text: 'Duplicate Package', icon: <Delete />, action: function() { console.log('click') } },
  { id: 4, text: 'Delete Package', icon: <Duplicate />, action: function() { console.log('click') } },
  { id: 5, text: 'Duplicate Package', icon: <Delete />, action: function() { console.log('click') } },
  { id: 6, text: 'Delete Package', icon: <Duplicate />, action: function() { console.log('click') } },
  { id: 7, text: 'Duplicate Package', icon: <Delete />, action: function() { console.log('click') } }
];
/*eslint-enable no-console */

class ContextMenuExample extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ContextMenu options={options} icon='ellipsis' />
      </div>
    )
  }
}

class ContextMenuExampleOpen extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ContextMenu options={options} icon='ellipsis' open />
      </div>
    )
  }
}

class ContextMenuExampleScrollbar extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ContextMenu options={optionsLong} icon='ellipsis' />
      </div>
    )
  }
}

class ContextMenuExampleCogwheel extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ContextMenu options={optionsLong} icon='cogwheel' />
      </div>
    )
  }
}

export {
  ContextMenuExample,
  ContextMenuExampleOpen,
  ContextMenuExampleScrollbar,
  ContextMenuExampleCogwheel
}
