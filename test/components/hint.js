/* eslint no-unused-vars: 0 */
/* eslint no-undef: 0 */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Hint } from '../../src/index.js';

export default describe('Hint', function() {
  it('has a class name of "vn-hint"', function() {
    const wrapper = mount(
      <Hint
        title='Laborare non amo'
        message='Estne volumen in toga, an solum tibi libet me videre?'
      />
    );
    expect(wrapper.find('.vn-hint')).to.have.length.greaterThan(0);
  });

  it('has a close icon', function() {
    const wrapper = mount(
      <Hint
        onDismiss={() => null}
        title='Vae'
        message='Re vera, potas bene'
      />
    );
    expect(wrapper.find('.close')).to.have.length(1);
  });

  it('it accepts custom classes', function() {
    const wrapper = mount(
      <Hint
        className='customClass'
        title='Vae'
        message='Re vera, potas bene'
      />
    );
    expect(wrapper.find('.customClass')).to.have.length.greaterThan(0);
  });

  it('accepts a message and title', function() {
    const wrapper = mount(
      <Hint
        title='Fac ut vivas'
        message='Fornulum pani lolo'
      />
    );
    expect(wrapper.find('.title').text()).to.equal('Fac ut vivas');
  });

  it('accepts a message and title', function() {
    const wrapper = mount(
      <Hint
        title='Fac ut vivas'
        message='Fornulum pani lolo'
      />
    );
    expect(wrapper.find('.message-content').text()).to.equal('Fornulum pani lolo');
  });
});
