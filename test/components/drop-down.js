import React from 'react';
import { shallow, mount } from 'enzyme';
import { Dropdown } from '../../src/index.js';

export default describe('Dropdown field', function() {
  it('has a class name of "vn-dropdown"', function() {
    const wrapper = mount(<Dropdown label='Add Package' />);
    expect(wrapper.find('.vn-dropdown')).to.have.length(1);
  });

  it('has a class name of "fluid"', function() {
    const wrapper = mount(<Dropdown label='Add Package' fluid />);
    expect(wrapper.find('.fluid')).to.have.length(1);
  });

  it('has a class name of "disabled"', function() {
    const wrapper = mount(<Dropdown label='Add Package' disabled />);
    expect(wrapper.find('.disabled')).to.have.length(1);
  });

  it('opens and closes', function() {
    const wrapper = shallow(<Dropdown label='Add Package' />);
    expect(wrapper.state().active).to.be.false;
    wrapper.instance().handleClick();
    expect(wrapper.state().active).to.be.true;
    wrapper.instance().handleBlur();
    expect(wrapper.state().active).to.be.false;
  });

  it('it accepts custom classes', function() {
    const wrapper = shallow(<Dropdown label='Make my profile visible' className='customClass' />);
    expect(wrapper.find('.customClass')).to.have.length(1);
  });
});
