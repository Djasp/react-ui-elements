import React from 'react';
import { shallow } from 'enzyme';
import { Popup, Input } from '../../src/index.js';

export default describe('Popup', function() {
  it('has a class name of "vn-popup"', function() {
    const wrapper = shallow(
      <Popup
        trigger={<Input label='Search' />}
        header='Movie Search'
        content='You may search by genre, header, year and actors'
        on='focus'
      />);
    expect(wrapper.find('.vn-popup')).to.have.length(1);
  });

  it('is not visible', function() {
    const wrapper = shallow(
      <Popup
        trigger={<Input label='Search' />}
        header='Movie Search'
        content='You may search by genre, header, year and actors'
        on='focus'
      />);
    expect(wrapper.find('.visible')).to.have.length(0);
  });

  it('it accepts custom classes', function() {
    const wrapper = shallow(<Popup className='customClass' />);
    expect(wrapper.find('.customClass')).to.have.length(1);
  });
});
