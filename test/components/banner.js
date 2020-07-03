import React from 'react';
import { mount } from 'enzyme';
import { Banner } from '../../src/index.js';

export default describe('Banner', function() {
  it('has a class name of "vn-banner"', function() {
    const wrapper = mount(<Banner type='success' text='Notification banner text - on stack level' />);
    expect(wrapper.find('.vn-banner')).to.have.length.greaterThan(0);
  });

  it('has a class name of "success"', function() {
    const wrapper = mount(<Banner type='success' text='Notification banner text - on stack level' />);
    expect(wrapper.find('.success')).to.have.length.greaterThan(0);
  });

  it('has a class name of "warning"', function() {
    const wrapper = mount(<Banner type='warning' text='Notification banner text - on stack level' />);
    expect(wrapper.find('.warning')).to.have.length.greaterThan(0);
  });

  it('has a class name of "error"', function() {
    const wrapper = mount(<Banner type='error' text='Notification banner text - on stack level' />);
    expect(wrapper.find('.error')).to.have.length.greaterThan(0);
  });

  it('has a description', function() {
    const wrapper = mount(
      <Banner
        type='error'
        text='Notification banner text - on stack level'
        description='text'
      />);
    expect(wrapper.find('.banner-description').text()).to.equal('text');
  });

  it('it accepts custom classes', function() {
    const wrapper = mount(<Banner type='success' className='customClass' text='Notification banner text - on stack level' />);
    expect(wrapper.find('.banner-description')).to.have.length.greaterThan(0);
  });
});
