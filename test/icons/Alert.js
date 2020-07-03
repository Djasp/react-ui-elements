import React from 'react';
import { mount } from 'enzyme';
import Alert from '../../src/icons/Alert';

describe('Alert', () => {
  it('should call methods that use findDOMNode on SVGs without an error"', () => {
    const wrapper = mount(
      <Alert />
    );
    expect(wrapper.find('svg')).to.have.length(1);
    expect(wrapper.find('.icon-alert')).to.have.length(1);

  });
});
