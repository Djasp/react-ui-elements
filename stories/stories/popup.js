import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  PopupExample, PopupExampleTitled, PopupExampleBasic, PopupExampleWide, PopupExampleInverted,
  PopupExamplePosition, PopupExampleOffset, PopupExampleStyle, PopupExampleHideOnScroll,
  PopupExampleFocus
} from '../components/Popup';

storiesOf('Popup', module)
  .add('Popup', function() {
    return <PopupExample />;
  })
  .add('Titled', function() {
    return <PopupExampleTitled />;
  })
  .add('Basic', function() {
    return <PopupExampleBasic />;
  })
  .add('Wide', function() {
    return <PopupExampleWide />;
  })
  .add('Inverted', function() {
    return <PopupExampleInverted />;
  })
  .add('Position', function() {
    return <PopupExamplePosition />;
  })
  .add('Offset', function() {
    return <PopupExampleOffset />;
  })
  .add('Style', function() {
    return <PopupExampleStyle />;
  })
  .add('HideOnScroll', function() {
    return <PopupExampleHideOnScroll />;
  })
  .add('Focus', function() {
    return <PopupExampleFocus />;
  });
