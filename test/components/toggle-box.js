import React from 'react';
import { shallow, mount } from 'enzyme';
import { ToggleBox } from '../../src/index.js';

export default describe('ToggleBox field', function() {
  it('has a class name of "vn-togglebox"', function() {
    const wrapper = mount(
      <ToggleBox label='Plan your delivery today'>
        <h5>Wednesday january 18 2017</h5>
      </ToggleBox>
    );
    expect(wrapper.find('.vn-togglebox')).to.have.length(1);
  });

  it('has a label', function() {
    const wrapper = mount(
      <ToggleBox label='labelForInput'>
        <h5>Wednesday january 18 2017</h5>
      </ToggleBox>
    );
    expect(wrapper.props().label).to.equal('labelForInput');
    wrapper.setProps({ label: 'sympathetic ink' });
    expect(wrapper.props().label).to.equal('sympathetic ink');
  });

  it('handlechange expands and collapses this', function() {
    const wrapper = mount(
      <ToggleBox label='labelForInput'>
        <h5>Wednesday january 18 2017</h5>
      </ToggleBox>
    );
    
    const checkbox = wrapper.find('input').first();
    
    checkbox.simulate('change');
    wrapper.update();
    expect(wrapper.find('.expanded')).to.have.length(1);
    
    checkbox.simulate('change');
    wrapper.update();
    expect(wrapper.find('.expanded')).to.have.length(0);
  });

  it('it accepts custom classes', function() {
    const wrapper = shallow(
      <ToggleBox label='labelForInput' className='customClass'>
        <h5>Wednesday january 18 2017</h5>
      </ToggleBox>
    );
    expect(wrapper.find('.customClass')).to.have.length(1);
  });
});
