/**
 * Created by bobbeugels on 19/01/18.
 */

import React from 'react';
import { SegmentedControl } from '../../src/index.js';

class SegmentedControlExample extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOption: ''
    }
  }

  handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    const isCurrentlySelected = this.state.selectedOption === selectedOption;
    this.setState({
      selectedOption: isCurrentlySelected ? '' : selectedOption
    });
  };

  render() {
    return (
      <SegmentedControl.Group>
        <SegmentedControl.Button
          name='map-settings'
          value='map'
          selected={this.state.selectedOption === 'map'}
          onClick={this.handleOptionChange}
        >
          Map
        </SegmentedControl.Button>
        <SegmentedControl.Button
          name='map-settings'
          value='transit'
          selected={this.state.selectedOption === 'transit'}
          onClick={this.handleOptionChange}
        >
          Transit
        </SegmentedControl.Button>
        <SegmentedControl.Button
          name='map-settings'
          value='satellite'
          selected={this.state.selectedOption === 'satellite'}
          onClick={this.handleOptionChange}
        >
          Satellite
        </SegmentedControl.Button>
      </SegmentedControl.Group>
    )
  }
}

class SegmentedControlStackedExample extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOption: ''
    }
  }

  handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    const isCurrentlySelected = this.state.selectedOption === selectedOption;
    this.setState({
      selectedOption: isCurrentlySelected ? '' : selectedOption
    });
  };

  render() {
    return (
      <SegmentedControl.Group stacked>
        <SegmentedControl.Button
          name='map-settings'
          value='map'
          selected={this.state.selectedOption === 'map'}
          onClick={this.handleOptionChange}
        >
          Map
        </SegmentedControl.Button>
        <SegmentedControl.Button
          name='map-settings'
          value='transit'
          selected={this.state.selectedOption === 'transit'}
          onClick={this.handleOptionChange}
        >
          Transit
        </SegmentedControl.Button>
        <SegmentedControl.Button
          name='map-settings'
          value='satellite'
          selected={this.state.selectedOption === 'satellite'}
          onClick={this.handleOptionChange}
        >
          Satellite
        </SegmentedControl.Button>
      </SegmentedControl.Group>
    )
  }
}

class SegmentedControlFluidExample extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOption: ''
    }
  }

  handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    const isCurrentlySelected = this.state.selectedOption === selectedOption;
    this.setState({
      selectedOption: isCurrentlySelected ? '' : selectedOption
    });
  };

  render() {
    return (
      <SegmentedControl.Group fluid>
        <SegmentedControl.Button
          name='map-settings'
          value='map'
          selected={this.state.selectedOption === 'map'}
          onClick={this.handleOptionChange}
        >
          Map
        </SegmentedControl.Button>
        <SegmentedControl.Button
          name='map-settings'
          value='transit'
          selected={this.state.selectedOption === 'transit'}
          onClick={this.handleOptionChange}
        >
          Transit
        </SegmentedControl.Button>
        <SegmentedControl.Button
          name='map-settings'
          value='satellite'
          selected={this.state.selectedOption === 'satellite'}
          onClick={this.handleOptionChange}
        >
          Satellite
        </SegmentedControl.Button>
      </SegmentedControl.Group>
    )
  }
}

class SegmentedControlStackedFluidExample extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOption: ''
    }
  }

  handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    const isCurrentlySelected = this.state.selectedOption === selectedOption;
    this.setState({
      selectedOption: isCurrentlySelected ? '' : selectedOption
    });
  };

  render() {
    return (
      <SegmentedControl.Group fluid stacked>
        <SegmentedControl.Button
          name='map-settings'
          value='map'
          selected={this.state.selectedOption === 'map'}
          onClick={this.handleOptionChange}
        >
          Map
        </SegmentedControl.Button>
        <SegmentedControl.Button
          name='map-settings'
          value='transit'
          selected={this.state.selectedOption === 'transit'}
          onClick={this.handleOptionChange}
        >
          Transit
        </SegmentedControl.Button>
        <SegmentedControl.Button
          name='map-settings'
          value='satellite'
          selected={this.state.selectedOption === 'satellite'}
          onClick={this.handleOptionChange}
        >
          Satellite
        </SegmentedControl.Button>
      </SegmentedControl.Group>
    )
  }
}

export {
  SegmentedControlExample,
  SegmentedControlStackedExample,
  SegmentedControlFluidExample,
  SegmentedControlStackedFluidExample
}
