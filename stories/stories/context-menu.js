import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  ContextMenuExample, ContextMenuExampleOpen, ContextMenuExampleScrollbar, ContextMenuExampleCogwheel
} from '../components/ContextMenu';

storiesOf('Context Menu', module)
  .add('Context Menu', function() {
    return <ContextMenuExample />;
  })
  .add('Context Menu Open', function() {
    return <ContextMenuExampleOpen />;
  })
  .add('Context Menu Scrollbar', function() {
    return <ContextMenuExampleScrollbar />;
  })
  .add('Context Menu Cogwheel', function() {
    return <ContextMenuExampleCogwheel />;
  });
