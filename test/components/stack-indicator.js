import React from 'react';
import { mount } from 'enzyme';
import { StackIndicator } from '../../src/index.js';

const stacks = [
  {
    name: 'DSL',
    cssClass: 'stack1',
    enabled: true
  },
  {
    name: 'Cable',
    cssClass: 'stack2',
    enabled: false
  },
  {
    name: 'Mobile',
    cssClass: 'stack3',
    enabled: true
  }
];

export default describe('Stack indicator', function() {
  it('has a class name of "vn-stackIndicator"', function() {
    const wrapper = mount(<StackIndicator stacks={stacks} />);
    expect(wrapper.find('.vn-stackIndicator')).to.have.length(1);
  });

  it('it shows three stacks', function() {
    const wrapper = mount(<StackIndicator stacks={stacks} />);
    expect(wrapper.find('.vn-stackIndicator-stack')).to.have.length(3);
  });

  it('it contains the right colours', function() {
    const wrapper = mount(<StackIndicator stacks={stacks} />);
    expect(wrapper.find('.stack1')).to.have.length(1);
    expect(wrapper.find('.stack2')).to.have.length(0);
    expect(wrapper.find('.stack3')).to.have.length(1);
  });
});
