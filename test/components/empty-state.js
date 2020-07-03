import React from 'react';
import { mount } from 'enzyme';
import { EmptyState } from '../../src/index.js';

export default describe('Empty State', function() {
  const wrapper = mount(
    <EmptyState title='No linked accounts' >
      <span className='message'>
        message
      </span>
    </EmptyState>
  );

  it('has a class name of "vn-empty-state"', function() {
    expect(wrapper.find('.vn-empty-state')).to.have.length(1);
  });

  it('renders the title', function() {
    expect(wrapper.find('h3').text()).to.equal('No linked accounts');
  });

  it('renders the message', function() {
    expect(wrapper.find('.message').text()).to.equal('message');
  });
});
