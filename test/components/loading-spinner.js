import React from 'react';
import { mount } from 'enzyme';
import { LoadingSpinner } from '../../src/index.js';

export default describe('Loading Spinner', function() {
  it('renders correctly', function() {
    const wrapper = mount(<LoadingSpinner />);
    expect(wrapper.find('.vn-loading-spinner')).to.have.length.greaterThan(0);
    expect(wrapper.find('svg')).to.have.length.greaterThan(0);
    expect(wrapper.find('.spinner')).to.have.length.greaterThan(0);
  });

  it('renders as small spinner', function() {
    const wrapper = mount(<LoadingSpinner small/>);
    expect(wrapper.find('.small')).to.have.length.greaterThan(0);
  });

  it('contains custom classname', function() {
    const wrapper = mount(<LoadingSpinner className='custom'/>);
    expect(wrapper.find('.custom')).to.have.length.greaterThan(0);
  });

  it('contains background', function() {
    const wrapper = mount(<LoadingSpinner className='custom' background='light'/>);
    expect(wrapper.find('.custom')).to.have.length.greaterThan(0);
  });
});
