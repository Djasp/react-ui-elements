import React from 'react';
import { mount } from 'enzyme';
import Chevron from '../../src/icons/Chevron';

describe('Chevron', () => {
  it('should call methods that use findDOMNode on SVGs without an error"', () => {
    const wrapper = mount(
      <Chevron />
    );
    expect(wrapper.find('svg')).to.have.length(1);
    expect(wrapper.find('.icon-chevron')).to.have.length(1);

  });
});
