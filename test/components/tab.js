import React from 'react';
import { shallow, mount } from 'enzyme';
import { Tab } from '../../src/index.js';

const panes = [
  { menuItem: 'Tab 1', render: () => <div>Tab 1 Content</div> },
  { menuItem: 'Tab 2', render: () => <div>Tab 2 Content</div> },
  {
    menuItem: () => <div className='findMe'>This is a div</div>,
    render: () => <div>Tab 3 Content</div>
  }
];

export default describe('Tab', function() {
  it('has a class name of "vn-tab"', function() {
    const wrapper = shallow(<Tab panes={panes}/>);
    expect(wrapper.find('.vn-tab')).to.have.length(1);
  });

  it('renders tab menu', function() {
    const wrapper = shallow(<Tab panes={panes}/>);
    expect(wrapper.find('.tab-menu')).to.have.length(1);
    expect(wrapper.find('.tab-menu-item')).to.have.length(3);
  });

  it('renders tab panes', function() {
    const wrapper = mount(<Tab panes={panes}/>);
    expect(wrapper.find('.tab-panes')).to.have.length(1);
    expect(wrapper.find('.tab-pane')).to.have.length(1);
  });

  it('it accepts custom classes', function() {
    const wrapper = shallow(<Tab panes={panes} className='customClass'/>);
    expect(wrapper.find('.customClass')).to.have.length(1);
  });

  it('only one pane is active at a time', function() {
    const wrapper = shallow(<Tab panes={panes} className='customClass'/>);
    expect(wrapper.find('.active')).to.have.length(1);
    wrapper.setState({ activePane: 2 });
    expect(wrapper.find('.active')).to.have.length(1);
  });

  it('second pane is active', function() {
    const wrapper = shallow(<Tab panes={panes} activePane={1}/>);
    expect(wrapper.state().activePane).to.equal(1);
  });

  it('accepts JSX as menuItem', function() {
    const wrapper = shallow(<Tab panes={panes} activePane={1}/>);
    expect(wrapper.find('.findMe')).to.have.length(1);
  });
});
