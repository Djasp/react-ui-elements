/**
 * Created by bobbeugels on 19/01/18.
 */

'use strict';
import { Component } from 'react';
import SegmentedControlGroup from './SegmentedControlGroup';
import SegmentedControlButton from './SegmentedControlButton';

class SegmentedControl extends Component {
  static Group = SegmentedControlGroup;
  static Button = SegmentedControlButton;
}

export default SegmentedControl;
