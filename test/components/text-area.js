import React from 'react';
import { shallow, mount } from 'enzyme';
import { TextArea } from '../../src/index.js';

export default describe('TextArea field', function() {
  it('has a class name of "vn-textarea"', function() {
    const wrapper = mount(<TextArea label='Label' />);
    expect(wrapper.find('.vn-textarea')).to.have.length(1);
  });

  it('renders the label', function() {
    const wrapper = mount(<TextArea label='labelForInput' />);
    expect(wrapper.props().label).to.equal('labelForInput');
    wrapper.setProps({
      label: 'sympathetic ink'
    });
    expect(wrapper.props().label).to.equal('sympathetic ink');
  });

  it('executes handleFocus and handleBlur', function() {
    const wrapper = mount(<TextArea label='Label'  />);
    expect(wrapper.state().isFocused).to.equal(false);
    expect(wrapper.state().floatingLabel).to.equal(false);
    wrapper.instance().handleFocus();
    expect(wrapper.state().isFocused).to.equal(true);
    expect(wrapper.state().floatingLabel).to.equal(true);
    wrapper.find('textarea').simulate('blur');
    expect(wrapper.state().isFocused).to.equal(false);
    expect(wrapper.state().floatingLabel).to.equal(false);
    wrapper.find('textarea').simulate('focus');
    expect(wrapper.state().isFocused).to.equal(true);
    expect(wrapper.state().floatingLabel).to.equal(true);
  });

  it('label floats when filled in', function() {
    const wrapper = mount(<TextArea label='label' defaultValue='some text' />);
    expect(wrapper.state().floatingLabel).to.equal(true);
  });

  it('it accepts custom classes', function() {
    const wrapper = shallow(
      <TextArea
        label='label'
        defaultValue='some text'
        className='customClass'
      />
    );
    expect(wrapper.find('.customClass')).to.have.length(1);
  });

  it('adds popup component when error is string', function() {
    const wrapper = mount(
      <TextArea
        label='label'
        error='string'
      />
    );
    expect(wrapper.find('OmniusPopup')).to.have.length(1);
  });
});
