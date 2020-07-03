import React from 'react';
import { shallow, mount } from 'enzyme';
import { Select } from '../../src/index.js';
import sinon from 'sinon';

const options = [
  {
    key: 'angular',
    text: 'Angular',
    value: 'angular'
  }, {
    key: 'css',
    text: 'CSS',
    value: 'css'
  }
];

export default describe('Select field', function() {
  it('has a class name of "vn-select"', function() {
    const wrapper = mount(<Select label='Skills' options={options}/>);
    expect(wrapper.find('.vn-select')).to.have.length(1);
  });

  it('renders the label', function() {
    const wrapper = mount(<Select label='labelForInput' options={options}/>);
    expect(wrapper.props().label).to.equal('labelForInput');
    wrapper.setProps({label: 'sympathetic ink'});
    expect(wrapper.props().label).to.equal('sympathetic ink');
  });

  it('focuses on click', function() {
    const wrapper = mount(<Select label='Skills' options={options}/>);
    wrapper.simulate('click');
    expect(wrapper.state().active).to.equal(true);
  });

  it('label floats when filled in', function() {
    const wrapper = mount(<Select label='Skills' options={options} defaultValue='angular'/>);
    expect(wrapper.state().floatingLabel).to.equal(true);
  });

  it('it accepts custom classes', function() {
    const wrapper = shallow(<Select label='Visible' options={options} className='customClass'/>);
    expect(wrapper.find('.customClass')).to.have.length(1);
  });

  it('Accepts the maxHeight prop', function() {
    const wrapper = mount(<Select label='Visible' options={options} maxHeight={8}/>);
    expect(wrapper.props().maxHeight).to.equal(8);
  });

  it('adds popup component when error is string', function() {
    const wrapper = mount(<Select
      label='Visible'
      options={options}
      error='string'
    />);
    expect(wrapper.find('OmniusPopup')).to.have.length(1);
  });

  it('should call onBlur method specified in prop', function (done) {
    const spy = sinon.spy();
    const wrapper = mount(<Select name='selectInput' onBlur={spy} onChange={spy} options={options} defaultValue={'css'} />);
    wrapper.find('.vn-select').simulate('blur');
    setTimeout(function () {
      expect(spy.callCount).to.be.equal(1);
      expect(spy.getCall(0).args).to.have.lengthOf(2);
      expect(spy.getCall(0).args[1].value).to.be.equal('css');
      done();
    }, 0);
  });

  it('should trigger onChange when go to next value on arrow down keypress', function (done) {
    const spy = sinon.spy();
    const onChangeSpy = sinon.spy();
    const wrapper = mount(
      <Select
        name='selectInput'
        onKeyDown={spy}
        options={options}
        onChange={onChangeSpy}
      />);
    wrapper.find('.vn-select').simulate('keyDown', {keyCode: 40});
    wrapper.update();

    setTimeout(function () {
      expect(onChangeSpy.calledOnce).to.equal(true);
      expect(onChangeSpy.getCall(0).args[1].value).to.equal('angular');
      done();
    }, 0);
  });
});
