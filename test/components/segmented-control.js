import React from 'react';
import { shallow } from 'enzyme';
import { SegmentedControl } from '../../src/index.js';

export default describe('Segmented Control', function() {
  it('has a class name of "vn-segmentedControl"', function() {
    const wrapper = shallow(<SegmentedControl.Group />);
    expect(wrapper.find('.vn-segmentedControl')).to.have.length(1);
  });

  it('has a class name of "vn-segmentedControlButton"', function() {
    const wrapper = shallow(<SegmentedControl.Button name="name" value="1">Some button</SegmentedControl.Button>);
    expect(wrapper.find('.vn-segmentedControlButton')).to.have.length(1);
  });

  it('can be made fluid', function() {
    const wrapper = shallow(<SegmentedControl.Group fluid />);
    expect(wrapper.find('.fluid')).to.have.length(1);
  });

  it('can be made stacked', function() {
    const wrapper = shallow(<SegmentedControl.Group stacked />);
    expect(wrapper.find('.stacked')).to.have.length(1);
  });

  it('can be made checked', function() {
    const wrapper = shallow(<SegmentedControl.Button selected name="name" value="1">Some button</SegmentedControl.Button>);
    expect(wrapper.find('.selected')).to.have.length(1);
  });

  it('accepts custom classes', function() {
    const wrapper = shallow(<SegmentedControl.Group className='custom' />);
    expect(wrapper.find('.custom')).to.have.length(1);
  });

  it('accepts custom classes', function() {
    const wrapper = shallow(<SegmentedControl.Button className='custom' name="name" value="1">Some button</SegmentedControl.Button>);
    expect(wrapper.find('.custom')).to.have.length(1);
  });
});
