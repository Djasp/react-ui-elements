import React from 'react';
import { shallow, mount } from 'enzyme';
import { Input } from '../../src/index.js';
import sinon from 'sinon';

export default describe('Input field', function() {
  it('has a class name of "vn-input"', function() {
    const wrapper = mount(<Input />);
    expect(wrapper.find('.vn-input')).to.have.length(1);
  });

  it('renders the label', function() {
    const wrapper = mount(<Input label='labelForInput' />);
    expect(wrapper.find('.labeled')).to.have.length(1);
    expect(wrapper.props().label).to.equal('labelForInput');
    wrapper.setProps({
      label: 'sympathetic ink'
    });
    expect(wrapper.props().label).to.equal('sympathetic ink');
  });

  it('executes handleFocus and handleBlur', function() {
    const wrapper = mount(<Input />);
    expect(wrapper.state().isFocused).to.equal(false);
    expect(wrapper.state().floatingLabel).to.equal(false);
    wrapper.instance().handleFocus();
    expect(wrapper.state().isFocused).to.equal(true);
    expect(wrapper.state().floatingLabel).to.equal(true);
    wrapper.find('input').simulate('blur');
    expect(wrapper.state().isFocused).to.equal(false);
    expect(wrapper.state().floatingLabel).to.equal(false);
    wrapper.find('input').simulate('focus');
    expect(wrapper.state().isFocused).to.equal(true);
    expect(wrapper.state().floatingLabel).to.equal(true);
  });

  it('should call onBlur method specified in prop', function () {
    const spy = sinon.spy();
    const wrapper = mount(<Input onBlur={spy} defaultValue='input text' />);
    wrapper.find('input').simulate('blur');
    expect(spy.calledOnce).to.be.true;
    expect(spy.getCall(0).args).to.have.lengthOf(2);
    expect(spy.getCall(0).args[1].value).to.be.equal('input text');
  });

  it('label floats when filled in', function() {
    const wrapper = mount(<Input defaultValue='some text' />);
    expect(wrapper.state().floatingLabel).to.equal(true);
  });

  it('it accepts custom classes', function() {
    const wrapper = shallow(<Input className='customClass' />);
    expect(wrapper.find('.customClass')).to.have.length(1);
  });

  it('it accepts mask and displays the elements that belongs to it', function() {
    const wrapper = shallow(<Input
      mask={[/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    />);
    expect(wrapper.find('t').props().mask).to.have.length(10);
  });

  it('adds popup component when error is string', function() {
    const wrapper = mount(<Input
      error='string'
    />);
    expect(wrapper.find('OmniusPopup')).to.have.length(1);
  });

  it('should have floated label on receiving a value', function () {
    const wrapper = mount(<Input />);
    expect(wrapper.find('.floating-label')).to.have.length(0);

    wrapper.setProps({defaultValue: 'some text'});
    expect(wrapper.find('.floating-label')).to.have.length(1);
  });
});
