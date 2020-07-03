import React from 'react';
import { shallow, mount } from 'enzyme';
import { InputAccordion } from '../../src/index.js';
import InputAccordionSection from '../../src/components/InputAccordion/InputAccordionSection';

export default describe('InputAccordion', function() {
  it('should has a class name of "vn-inputaccordion"', function() {
    const wrapper = mount(
      <InputAccordion radio groupName='group1'>
        <InputAccordion.Section title='Same as customer address' value='1' />
        <InputAccordion.Section title='Same as customer address' value='3' disabled />
      </InputAccordion>
    );
    expect(wrapper.find('.vn-inputaccordion')).to.have.length(1);
  });

  it('should render two sections', function() {
    const wrapper = mount(
      <InputAccordion radio groupName='group1'>
        <InputAccordion.Section title='Same as customer address' value='1' />
        <InputAccordion.Section title='Same as customer address' value='3' disabled />
      </InputAccordion>
    );
    expect(wrapper.find(InputAccordionSection)).to.have.length(2);
  });

  it('should section renders on change', function() {
    const wrapper = mount(
      <InputAccordion radio groupName='group1'>
        <InputAccordion.Section title='Same as customer address' value='1' />
        <InputAccordion.Section title='different address' value='2' />
      </InputAccordion>
    );
    wrapper.setProps({value: '1'});
    expect(wrapper.find('.active')).to.have.length(1);
  });

  it('should it accepts custom classes', function() {
    const wrapper = shallow(<InputAccordion title='Make my profile visible' value='1' className='customClass' />);
    expect(wrapper.find('.customClass')).to.have.length(1);
  });
});
