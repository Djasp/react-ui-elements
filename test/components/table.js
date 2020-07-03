import React from 'react';
import { mount } from 'enzyme';
import { Table } from '../../src/index.js';
import MdDelete from 'react-icons/lib/md/delete';
import MdContentCopy from 'react-icons/lib/md/content-copy';
import MdRemoveRedEye from 'react-icons/lib/md/remove-red-eye';

export default describe('Table', function() {
  it('component does render', function() {
    const wrapper = mount(
      <Table
        data={data}
        columns={columns}
      />
    );
    expect(wrapper.find('.vn-table')).to.have.length(1);
  });

  it('head does render', function() {
    const wrapper = mount(
      <Table
        data={data}
        columns={columns}
      />
    );
    expect(wrapper.find('.table-head')).to.have.length(1);
    expect(wrapper.find('.table-category')).to.have.length(4);
  });

  it('body does render', function() {
    const wrapper = mount(
      <Table
        data={data}
        columns={columns}
      />
    );
    expect(wrapper.find('.table-body')).to.have.length(1);
    expect(wrapper.find('.table-row')).to.have.length(3);
    expect(wrapper.find('.table-cell')).to.have.length(12);
  });

  it('cell contains the right content', function() {
    const wrapper = mount(
      <Table
        data={data}
        columns={columns}
      />
    );
    expect(wrapper.text()).to.equal('NameAgeFriend NameFriend AgeMarty McFly18Jason Maurer34Emmet Brown61Jason Maurer23Lorraine Baines18Jason Maurer42Back to top ');
  });

  it('cell contains custom component', function() {
    const wrapper = mount(
      <Table
        data={data}
        columns={columns}
      />
    );
    expect(wrapper.find('span')).to.have.length(4);
  });

  it('column can be hidden', function() {
    const wrapper = mount(
      <Table
        data={data}
        columns={columns}
      />
    );
    expect(wrapper.find('.hidden')).to.have.length(4);
  });

  it('row contains custom class', function() {
    const wrapper = mount(
      <Table
        data={data}
        columns={columns}
      />
    );
    expect(wrapper.find('.custom-class')).to.have.length(1);
  });

  it('row is disabled', function() {
    const wrapper = mount(
      <Table
        data={data}
        columns={columns}
      />
    );
    expect(wrapper.find('.disabled')).to.have.length(1);
  });

  it('nested rows are rendered', function() {
    const wrapper = mount(
      <Table
        data={nestedData}
        columns={columns}
      />
    );
    expect(wrapper.find('.table-row')).to.have.length(4);
    expect(wrapper.find('.table-row-nested')).to.have.length(1);
  });

  it('additional props are rendered in table cell', function() {
    const wrapper = mount(
      <Table
        data={nestedData}
        columns={columnsAdditionalProps}
      />
    );
    expect(wrapper.text().indexOf('name is 61')).to.equal(18);
  });

  it('selected are rendered as selected', function() {
    const wrapper = mount(
      <Table
        data={nestedData}
        columns={columnsAdditionalProps}
        selectable={true}
        selected={[0,1]}
      />
    );
    expect(wrapper.find('.selected')).to.have.length(2);
  });

  it('none are selected', function() {
    const wrapper = mount(
      <Table
        data={nestedData}
        columns={columnsAdditionalProps}
        selectable={true}
        selected={[]}
      />
    );
    expect(wrapper.find('.selected')).to.have.length(0);
  });

  it('transforms values correctly', function() {
    const columns = [{
      header: 'Name',
      accessor: 'name',
      transform: value => value.toUpperCase()
    }, {
      header: 'Age',
      accessor: 'age'
    }];

    const wrapper = mount(
      <Table
        data={nestedData}
        columns={columns}
        selectable={true}
        selected={[]}
      />
    );
    expect(wrapper.find('.table-cell').first().text()).to.equal('EMMET BROWN');
  });

  it('it sorts correctly', function() {
    const columns = [{
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Age',
      accessor: 'age'
    }];

    const wrapper = mount(
      <Table
        data={nestedData}
        columns={columns}
        selectable={true}
        selected={[]}
      />
    );
    expect(wrapper.prop('data')[0].data.name).to.equal('Emmet Brown');
    wrapper.find('.table-category').last().simulate('click');
    expect(wrapper.find('.table-cell').first().text()).to.equal('Lorraine Baines');
  });

  it('is able to set background correctly', function() {
    const wrapper = mount(
      <Table
        data={nestedData}
        columns={columnsAdditionalProps}
        selectable={true}
        selected={[0,1]}
        backgroundColor='#FF0000'
      />
    );
    expect(wrapper.state().tableBackground.color.toString()).to.equal('255,0,0');
  });

  it('has a contextMenu', function() {
    const wrapper = mount(
      <Table
        data={dataContext}
        columns={columnsAdditionalProps}
        backgroundColor='#FF0000'
      />
    );
    expect(wrapper.find('.table-row-context-menu')).to.have.length(1);
    wrapper.find('.table-row').simulate('mouseenter');
    expect(wrapper.find('.context-menu-item')).to.have.length(3);
  });
});


const columns = [
  {
    header: 'Name',
    accessor: 'name',
    maxWidth: 200
  }, {
    header: 'Age',
    accessor: 'age',
    Cell: props => <span className='number'>{props.value}</span>,
    width: 300
  }, {
    id: 'friendName', // Required because our accessor is not a string
    header: 'Friend Name',
    accessor: d => d.data.friend.name // Custom value accessors!
  }, {
    header: props => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age',
    minWidth: 400,
    hidden: true
  }
];
const columnsAdditionalProps = [{
  header: 'Name',
  accessor: 'name'
}, {
  header: 'Age',
  accessor: 'age',
  Cell: (props) => <div>{props.name} is {props.value}</div>,
  additionalProps: {
    name: 'name'
  }
}];

const data = [
  {
    data: {
      name: 'Marty McFly',
      age: 18,
      friend: {
        name: 'Jason Maurer',
        age: 34
      }
    },
    config: {
      disabled: true,
      class: 'custom-class'
    }
  }, {
    data: {
      name: 'Emmet Brown',
      age: 61,
      friend: {
        name: 'Jason Maurer',
        age: 23
      }
    }
  }, {
    data: {
      name: 'Lorraine Baines',
      age: 18,
      friend: {
        name: 'Jason Maurer',
        age: 42
      }
    }
  }
];
const nestedData = [
  {
    data: {
      name: 'Emmet Brown',
      age: 61,
      friend: {
        name: 'Jason Maurer',
        age: 23
      }
    },
    children: [
      {
        data: {
          name: 'Emmet Brown',
          age: 61,
          friend: {
            name: 'Jason Maurer',
            age: 23
          }
        }
      }, {
        data: {
          name: 'Lorraine Baines',
          age: 18,
          friend: {
            name: 'Jason Maurer',
            age: 42
          }
        }
      }
    ]
  }, {
    data: {
      name: 'Lorraine Baines',
      age: 18,
      friend: {
        name: 'Jason Maurer',
        age: 42
      }
    }
  }
];
const dataContext = [
  {
    data: {
      name: 'Marty McFly',
      age: 18,
      friend: {
        name: 'Jason Maurer',
        age: 34
      }
    },
    contextMenu: [
      {
        name: 'delete',
        icon: <MdDelete />,
        callback: () => console.log('kek')
      },
      {
        name: 'delete2',
        icon: <MdContentCopy />,
        callback: () => console.log('kek')
      },
      {
        name: 'delete3',
        icon: <MdRemoveRedEye />,
        callback: () => console.log('kek')
      }
    ]
  }
];
