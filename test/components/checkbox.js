import React from 'react';
import { shallow, mount } from 'enzyme';
import { Checkbox } from '../../src/index.js';

export default describe('Checkbox field', function() {
  it('has a class name of "vn-checkbox"', function() {
    const wrapper = mount(<Checkbox label='Make my profile visible' />);
    expect(wrapper.find('.vn-checkbox')).to.have.length.greaterThan(0);
  });

  it('has a class name of "slider"', function() {
    const wrapper = mount(<Checkbox label='Make my profile visible' slider />);
    expect(wrapper.find('.slider')).to.have.length(1);
  });

  it('has a class name of "radio"', function() {
    const wrapper = mount(<Checkbox label='Make my profile visible' radio />);
    expect(wrapper.find('.radio')).to.have.length(1);
  });

  it('has a class name of "disabled"', function() {
    const wrapper = mount(<Checkbox label='Make my profile visible' disabled />);
    expect(wrapper.find('.disabled')).to.have.length(1);
  });

  it('it accepts custom classes', function() {
    const wrapper = shallow(<Checkbox label='Make my profile visible' className='customClass' />);
    expect(wrapper.find('.customClass')).to.have.length(1);
  });
});
