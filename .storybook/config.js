import React from 'react';
import { configure, storiesOf } from '@storybook/react';
import Enzyme from 'enzyme';
import '../src/i18n';
import '../src/styles/Dev.scss';

window.storiesOf = storiesOf;

function loadStories() {
  require('../stories/stories/alert.js');
  require('../stories/stories/banner.js');
  require('../stories/stories/button.js');
  require('../stories/stories/checkbox.js');
  require('../stories/stories/context-menu.js');
  require('../stories/stories/dialog.js');
  require('../stories/stories/dropdown.js');
  require('../stories/stories/empty-state.js');
  require('../stories/stories/form.js');
  require('../stories/stories/header.js');
  require('../stories/stories/hint.js');
  require('../stories/stories/input.js');
  require('../stories/stories/input-accordion.js');
  require('../stories/stories/link.js');
  require('../stories/stories/popup.js');
  require('../stories/stories/segment.js');
  require('../stories/stories/segmented-control.js');
  require('../stories/stories/select.js');
  require('../stories/stories/stack-indicator.js');
  require('../stories/stories/tab.js');
  require('../stories/stories/table.js');
  require('../stories/stories/text-area.js');
  require('../stories/stories/toggle-box.js');
  require('../stories/stories/drawer.js');
  require('../stories/stories/loading-spinner.js');
}

configure(loadStories, module);
