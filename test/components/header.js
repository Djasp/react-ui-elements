import React from 'react';
import { mount } from 'enzyme';
import { Header } from '../../src/index.js';

export default describe('Header', function() {
  it('exists on page with right vn-header and h1', function() {
    const wrapper = mount(<Header as='h1'>Huge Header</Header>);
    expect(wrapper.find('.vn-header')).to.have.length.greaterThan(0);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('exists on page with right vn-header and h2', function() {
    const wrapper = mount(<Header as='h2'>Huge Header</Header>);
    expect(wrapper.find('.vn-header')).to.have.length.greaterThan(0);
    expect(wrapper.find('h2')).to.have.length(1);
  });

  it('exists on page with right vn-header and h3', function() {
    const wrapper = mount(<Header as='h3'>Huge Header</Header>);
    expect(wrapper.find('.vn-header')).to.have.length.greaterThan(0);
    expect(wrapper.find('h3')).to.have.length(1);
  });

  it('exists on page with right vn-header and h4', function() {
    const wrapper = mount(<Header as='h4'>Huge Header</Header>);
    expect(wrapper.find('.vn-header')).to.have.length.greaterThan(0);
    expect(wrapper.find('h4')).to.have.length(1);
  });

  it('exists on page with right vn-header and h5', function() {
    const wrapper = mount(<Header as='h5'>Huge Header</Header>);
    expect(wrapper.find('.vn-header')).to.have.length.greaterThan(0);
    expect(wrapper.find('h5')).to.have.length(1);
  });

  it('exists on page with right vn-header and h6', function() {
    const wrapper = mount(<Header as='h6'>Huge Header</Header>);
    expect(wrapper.find('.vn-header')).to.have.length.greaterThan(0);
    expect(wrapper.find('h6')).to.have.length(1);
  });

  it('accepts custom classes', function() {
    const wrapper = mount(<Header as='h1' className='custom-class'>Huge Header</Header>);
    expect(wrapper.find('.custom-class')).to.have.length.greaterThan(0);
  });
});
