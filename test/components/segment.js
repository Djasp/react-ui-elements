import React from 'react';
import { shallow } from 'enzyme';
import { Segment } from '../../src/index.js';

export default describe('Segmented Control', function() {
  it('has a class name of "vn-segment"', function() {
    const wrapper = shallow(<Segment/>);
    expect(wrapper.find('.vn-segment')).to.have.length(1);
  });

  it('can be made closed', function() {
    const wrapper = shallow(<Segment open={false}/>);
    expect(wrapper.state().open).to.equal(false);
  });

  it('can be made not collapsible', function() {
    const wrapper = shallow(<Segment/>);
    expect(wrapper.find('.header')).to.have.length(0);
  });

  it('can be made collapsible', function() {
    const wrapper = shallow(<Segment collapsible/>);
    expect(wrapper.find('.header')).to.have.length(1);
  });

  it('accepts custom classes', function() {
    const wrapper = shallow(<Segment className='custom' />);
    expect(wrapper.find('.custom')).to.have.length(1);
  });

  it('accepts children elements', function() {
    const wrapper = shallow(
      <Segment className='custom'>
        <div className='child' />
      </Segment>);
    expect(wrapper.find('.child')).to.have.length(1);
  });
});
