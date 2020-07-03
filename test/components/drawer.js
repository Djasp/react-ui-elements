import React from 'react';
import { mount } from 'enzyme';
import { Drawer } from '../../src/index.js';

export default describe('Drawer', function() {
  it('has a class name of "sidebar"', function () {
    const wrapper = mount(<Drawer direction="left"></Drawer>);
    expect(wrapper.find('.sidebar')).to.have.length.greaterThan(0);
  });

  it('has a class name of "right"', function () {
    const wrapper = mount(<Drawer direction="right"></Drawer>);
    expect(wrapper.find('.sidebar')).to.have.length.greaterThan(0);
    expect(wrapper.find('.right')).to.have.length.greaterThan(0);
  });

  it('has a class name of "visible"', function () {
    const wrapper = mount(<Drawer direction="left" visible={true}></Drawer>);
    expect(wrapper.find('.visible')).to.have.length.greaterThan(0);
  });

  it('has a class name of "visible & right"', function () {
    const wrapper = mount(<Drawer direction="right" visible={true}></Drawer>);
    expect(wrapper.find('.visible')).to.have.length.greaterThan(0);
    expect(wrapper.find('.right')).to.have.length.greaterThan(0);
  });

});
