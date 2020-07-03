import React from 'react';
import { mount } from 'enzyme';
import { Button } from '../../src/index.js';

export default describe('Button', function() {
  it('has a class name of "vn-button"', function() {
    const wrapper = mount(<Button primary>Action</Button>);
    expect(wrapper.find('.vn-button')).to.have.length.greaterThan(0);
  });

  it('has a class name of "primary"', function() {
    const wrapper = mount(<Button primary>Action</Button>);
    expect(wrapper.find('.primary')).to.have.length(1);
  });

  it('has a class name of "secondary"', function() {
    const wrapper = mount(<Button secondary>Action</Button>);
    expect(wrapper.find('.secondary')).to.have.length(1);
  });

  it('it accepts custom classes', function() {
    const wrapper = mount(<Button primary className='customClass' />);
    expect(wrapper.find('.customClass')).to.have.length.greaterThan(0);
  });

  it.skip('does load ripple when not loading', function() {
    const wrapper = mount(<Button/>);
    expect(wrapper.find('.mdc-ripple-surface')).to.have.length.greaterThan(0);
  });

  it('puts buttons in a button group', function() {
    const wrapper = mount(
      <Button.Group>
        <Button/>
        <Button/>
      </Button.Group>
    );
    expect(wrapper.find('.vn-buttonGroup')).to.have.length.greaterThan(0);
  });

  it('it has a dropdown', function() {
    const wrapper = mount(
      <Button.Dropdown>
        <Button>
          X
        </Button>
        <Button.Dropdown.Menu open={true}>
          <Button.Dropdown.Item key={1} onClick={() => null}>Menu Line</Button.Dropdown.Item>
          <Button.Dropdown.Item key={2} onClick={() => null}>Menu Line</Button.Dropdown.Item>
        </Button.Dropdown.Menu>
      </Button.Dropdown>
    );
    expect(wrapper.find('.dropdown')).to.have.length.greaterThan(0);
  });

  it('has a class name of "active"', function() {
    const wrapper = mount(<Button active>Action</Button>);
    expect(wrapper.find('.active')).to.have.length.greaterThan(0);
  });
});
