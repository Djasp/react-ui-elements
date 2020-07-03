import React from 'react';
import { mount } from 'enzyme';
import { ContextMenu } from '../../src/index.js';

import Delete from '../../src/icons/Delete';
import Duplicate from '../../src/icons/Duplicate';

const options = [
  { id: 0, text: 'Delete Package', icon: <Duplicate />, action: function() {  } },
  { id: 1, text: 'Duplicate Package', icon: <Delete />, action: function() {  } }
];

const moreOptions = [
  { id: 0, text: 'Delete Package', icon: <Duplicate />, action: function() {  } },
  { id: 1, text: 'Duplicate Package', icon: <Delete />, action: function() {  } },
  { id: 2, text: 'Duplicate Package', icon: <Delete />, action: function() {  } },
  { id: 3, text: 'Duplicate Package', icon: <Delete />, action: function() {  } },
  { id: 4, text: 'Duplicate Package', icon: <Delete />, action: function() {  } },
  { id: 5, text: 'Duplicate Package', icon: <Delete />, action: function() {  } }
];

export default describe('ContextMenu', function() {
  it('has a class name of "vn-contextmenu"', function() {
    const wrapper = mount(
      <ContextMenu options={options} />
    );
    expect(wrapper.find('.vn-contextmenu')).to.have.length(1);
  });

  it('it accepts custom classes', function() {
    const wrapper = mount(
      <ContextMenu className='customClass' options={options} />
    );
    expect(wrapper.find('.customClass')).to.have.length.greaterThan(0);
  });

  it('it has two menu icons', function() {
    const wrapper = mount(
      <ContextMenu open options={options} />
    );
    expect(wrapper.find('.menu-icon')).to.have.length(2);
  });

  it('scrollbar when more than 4 options', function() {
    const wrapper = mount(
      <ContextMenu open options={moreOptions} />
    );
    expect(wrapper.find('.scrollarea')).to.have.length(1);
  });

  it('NO scrollbar when less than 4 options', function() {
    const wrapper = mount(
      <ContextMenu open options={options} />
    );
    expect(wrapper.find('.scrollarea')).to.have.length(0);
  });
});
