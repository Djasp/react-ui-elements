import React from 'react';
import { mount } from 'enzyme';
import Success from '../../src/icons/Success';

describe('Success', () => {
  it('should call methods that use findDOMNode on SVGs without an error"', () => {
    const wrapper = mount(<Success />);
    expect(wrapper.find('svg')).to.have.length(1);
    expect(wrapper.find('.icon-success')).to.have.length(1);
  });
});
