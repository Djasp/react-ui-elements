import React from 'react';
import { storiesOf } from '@storybook/react';

import { DrawerExampleLeft, DrawerExampleRight, DrawerExampleLeftOpen, DrawerExampleRightOpen, DrawerExampleCloseIcon } from '../components/Drawer';

storiesOf('Drawer', module)
  .add('Left', function() {
    return <DrawerExampleLeft />;
  })
  .add('Right', function() {
    return <DrawerExampleRight />;
  })
  .add('Left Open', function() {
    return <DrawerExampleLeftOpen />;
  })
  .add('Right Open', function() {
    return <DrawerExampleRightOpen />;
  })
  .add('No Close Icon', function() {
    return <DrawerExampleCloseIcon />;
  });
