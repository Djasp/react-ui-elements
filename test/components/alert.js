import React from 'react';
import { mount, shallow } from 'enzyme';
import { Alert } from '../../src/index.js';

export default describe('Alert', function () {
  it('has a class name of "vn-alert"', function () {
    const wrapper = shallow(
      <Alert
        content='You read this alert message'
        type='success'
      />
    );
    expect(wrapper.find('.vn-alert')).to.have.length.greaterThan(0);
  });

  it('has a class name of "success"', function () {
    const wrapper = shallow(
      <Alert
        content='You read this alert message'
        type='success'
      />
    );

    expect(wrapper.find('.success')).to.have.length.greaterThan(0);
  });

  it('has a class name of "error"', function () {
    const wrapper = shallow(
      <Alert
        content='You read this alert message'
        type='error'
      />
    );
    expect(wrapper.find('.error')).to.have.length.greaterThan(0);
  });

  it('has a class name of "warning"', function () {
    const wrapper = shallow(
      <Alert
        content='You read this alert message'
        type='warning'
      />
    );
    expect(wrapper.find('.warning')).to.have.length.greaterThan(0);
  });

  it('has a close icon', function () {
    const wrapper = mount(
      <Alert
        onDismiss={() => null}
        content='You read this alert message'
        type='warning'
      />
    );
    expect(wrapper.find('.close')).to.have.length(1);
  });

  it('it accepts custom classes', function () {
    const wrapper = shallow(
      <Alert
        className='customClass'
        content='You read this alert message'
        type='warning'
      />
    );
    expect(wrapper.find('.customClass')).to.have.length.greaterThan(0);
  });

  it('it renders a custom title', function () {
    const wrapper = mount(
      <Alert
        className='customClass'
        title='Custom title'
        content='You read this alert message'
        type='warning'
      />
    );
    expect(wrapper.find('.content strong').text()).to.equals('Custom title');
  });
});
