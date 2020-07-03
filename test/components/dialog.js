import React from 'react';
import { Dialog } from '../../src/index.js';
import { shallow } from 'enzyme';

export default describe('Dialog', function() {
  it('has a class name of "dialog"', function() {
    const inside_wrapper = shallow(<Dialog defaultOpen open
      label="Modal Title"
      content="Lorum Ipsum"
      actionName="Action"
      onActionClick={() => {}} />);
    expect(inside_wrapper.find('.vn-dialog')).to.have.length(1);
  });

  it('is rendered as an optional dialog', function() {
    const inside_wrapper = shallow(<Dialog
      open
      label="Dialog title"
      content="Dialog will close by clicking outside the dialog, the X, or with the 'Esc' key."
      optional />);
    expect(inside_wrapper.find('button')).to.have.length(0);
  });

  it.skip('is rendered as an alert', function() {
    const inside_wrapper = shallow(
      <Dialog open
        label="Modal Title"
        content="Lorum Ipsum"
        actionName="Action"
        onActionClick={() => {}}
        alert />
    );
    expect(inside_wrapper.find('.alert')).to.have.length(1);
  });

  it('it accepts custom classes', function() {
    const inside_wrapper = shallow(
      <Dialog open
        label='Modal Title'
        content='Lorum Ipsum'
        actionName='Action'
        onActionClick={() => {}}
        className='customClass' />
    );
    expect(inside_wrapper.find('.customClass')).to.have.length.greaterThan(0);
  });
});
