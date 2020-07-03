import React from 'react';
import { mount } from 'enzyme';
import Error from '../../src/icons/Error';

describe('Error', () => {
  it('should call methods that use findDOMNode on SVGs without an error"', () => {
    const wrapper = mount(<Error />);
    expect(wrapper.find('svg')).to.have.length(1);
    expect(wrapper.find('.icon-error')).to.have.length(1);
  });
});
