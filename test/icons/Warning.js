import React from 'react';
import { mount } from 'enzyme';
import Warning from '../../src/icons/Warning';

describe('Warning', () => {
  it('should call methods that use findDOMNode on SVGs without an error"', () => {
    const wrapper = mount(<Warning />);
    expect(wrapper.find('svg')).to.have.length(1);
    expect(wrapper.find('.icon-warning')).to.have.length(1);
  });
});
