import React from 'react';
import { Table } from '../../src/index.js';
import MdDelete from 'react-icons/lib/md/delete';
import MdContentCopy from 'react-icons/lib/md/content-copy';
import MdRemoveRedEye from 'react-icons/lib/md/remove-red-eye';

class TableExample extends React.Component {
  render() {
    const columns = [{
      header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      header: 'Friend Name',
      accessor: d => d.data.friend.name, // Custom value accessors!
      sortable: false
    }, {
      header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }];

    return(
      <Table
        data={data}
        columns={columns}
        minRows={0}
        showPagination={false}
      />
    )
  }
}

class TableExampleCustomWidth extends React.Component {
  render() {
    const columns = [{
      header: 'Name',
      accessor: 'name', // String-based value accessors!
      maxWidth: 200
    }, {
      header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span>, // Custom cell components!
      width: 300
    }, {
      id: 'friendName', // Required because our accessor is not a string
      header: 'Friend Name',
      accessor: d => d.data.friend.name, // Custom value accessors!
      minWidth: 400
    }, {
      header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age',
      maxWidth: 200
    }];

    return(
      <Table
        data={data}
        columns={columns}
      />
    )
  }
}

class TableExampleCustomHeight extends React.Component {
  render() {
    const columns = [{
      header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      header: 'Friend Name',
      accessor: d => d.data.friend.name // Custom value accessors!
    }, {
      header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }];

    return(
      <div style={{padding: '0 30px'}}>
        <Table
          data={data}
          columns={columns}
          minRows={0}
          showPagination={false}
          height={6}
        />
      </div>
    )
  }
}

class TableExampleTextOverflow extends React.Component {
  render() {
    const columns = [{
      header: 'Title',
      accessor: 'title1',
      multiLine: false
    }, {
      header: 'Title',
      accessor: 'title2',
      multiLine: false
    }, {
      header: 'Title',
      accessor: 'title3',
      multiLine: false,
      reverseOverflow: true
    }, {
      header: 'Title',
      accessor: 'title4',
      multiLine: true
    }, {
      header: 'Title',
      accessor: 'title5',
      multiLine: true
    }];

    return(
      <Table
        data={dataTextOverflow}
        columns={columns}
        minRows={0}
        showPagination={false}
      />
    )
  }
}

class TableExampleSelect extends React.Component {
  state = {
    selectedCustomer: null
  };

  selectHandler = (fields) => {
    console.log(fields);
    this.setState({
      selectedCustomer: fields
    })
  };

  render() {
    const columns = [{
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span>
    }, {
      id: 'friendName', // Required because our accessor is not a string
      header: 'Friend Name',
      accessor: d => d.data.friend.name // Custom value accessors!
    }, {
      header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }];

    return(
      <Table
        data={data}
        columns={columns}
        minRows={0}
        showPagination={false}
        onRowClick={this.selectHandler}
        selected={this.state.selectedCustomer ? this.state.selectedCustomer.index : null}
        selectable
      />
    )
  }
}

class TableExampleNested extends React.Component {
  state = {
    selectedCustomer: null
  };

  selectHandler = (fields) => {
    console.log(fields);
    this.setState({
      selectedCustomer: fields
    })
  };

  render() {
    const columns = [{
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span>
    }, {
      id: 'friendName', // Required because our accessor is not a string
      header: 'Friend Name',
      accessor: d => d.data.friend.name // Custom value accessors!
    }, {
      header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }];

    return(
      <Table
        data={dataNested}
        columns={columns}
        onRowClick={this.selectHandler}
        selected={this.state.selectedCustomer ? this.state.selectedCustomer.index : null}
        selectable
      />
    )
  }
}

class TableExampleAdditionalProps extends React.Component {
  render() {
    const columns = [{
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

    return(
      <Table
        data={data}
        columns={columns}
      />
    )
  }
}

class TableExampleMultipleSelect extends React.Component {
  state = {
    selectedCustomer: []
  };

  selectHandler = (fields) => {
    console.log(fields);
    const { selectedCustomer } = this.state;
    const alreadySelected = selectedCustomer.includes(fields.index);
    const index = alreadySelected && selectedCustomer.indexOf(fields.index);
    const value = alreadySelected ? (
      selectedCustomer.slice(0, index).concat(selectedCustomer.slice(index + 1))
    ) : (
      [ ...selectedCustomer, fields.index ]
    );

    this.setState({
      selectedCustomer: value
    })
  };

  render() {
    const columns = [{
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span>
    }, {
      id: 'friendName', // Required because our accessor is not a string
      header: 'Friend Name',
      accessor: d => d.data.friend.name // Custom value accessors!
    }, {
      header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }];

    return(
      <div style={{padding: '0 30px'}}>
        <Table
          data={dataNested}
          columns={columns}
          onRowClick={this.selectHandler}
          selected={this.state.selectedCustomer}
          selectable
          height={6}
        />
      </div>
    )
  }
}

class TableExampleMultipleSelectBlue extends React.Component {
  state = {
    selectedCustomer: []
  };

  selectHandler = (fields) => {
    const { selectedCustomer } = this.state;
    const alreadySelected = selectedCustomer.includes(fields.index);
    const index = alreadySelected && selectedCustomer.indexOf(fields.index);
    const value = alreadySelected ? (
      selectedCustomer.slice(0, index).concat(selectedCustomer.slice(index + 1))
    ) : (
      [ ...selectedCustomer, fields.index ]
    );

    this.setState({
      selectedCustomer: value
    })
  };

  render() {
    const columns = [{
      header: 'Name Super Long HeaderName',
      accessor: 'name'
    }, {
      header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span>
    }, {
      id: 'friendName', // Required because our accessor is not a string
      header: 'Friend Name',
      accessor: d => d.data.friend.name // Custom value accessors!
    }, {
      header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }];

    return(
      <div style={{padding: '20px 30px', background: '#fafbfc'}}>
        <Table
          data={dataNested}
          columns={columns}
          onRowClick={this.selectHandler}
          selected={this.state.selectedCustomer}
          selectable
        />
      </div>
    )
  }
}

class TableExampleMultipleSelectGrey extends React.Component {
  state = {
    selectedCustomer: []
  };

  selectHandler = (fields) => {
    const { selectedCustomer } = this.state;
    const alreadySelected = selectedCustomer.includes(fields.index);
    const index = alreadySelected && selectedCustomer.indexOf(fields.index);
    const value = alreadySelected ? (
      selectedCustomer.slice(0, index).concat(selectedCustomer.slice(index + 1))
    ) : (
      [ ...selectedCustomer, fields.index ]
    );

    this.setState({
      selectedCustomer: value
    })
  };

  render() {
    const columns = [{
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span>
    }, {
      id: 'friendName', // Required because our accessor is not a string
      header: 'Friend Name',
      accessor: d => d.data.friend.name // Custom value accessors!
    }, {
      header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }];

    return(
      <div style={{padding: '20px 30px', background: '#f2f3f4'}}>
        <Table
          data={dataNested}
          columns={columns}
          onRowClick={this.selectHandler}
          selected={this.state.selectedCustomer}
          selectable
        />
      </div>
    )
  }
}

class TableExampleTransform extends React.Component {
  render() {
    const columns = [{
      header: 'Name',
      accessor: 'name',
      transform: value => value.toUpperCase()
    }, {
      header: 'Age',
      accessor: 'age'
    }];

    return(
      <Table
        data={data}
        columns={columns}
      />
    )
  }
}

class TableExampleContextMenu extends React.Component {
  render() {
    const columns = [{
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Age',
      accessor: 'age'
    }, {
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Name',
      accessor: 'name'
    }];

    return(
      <div style={{padding: '20px 30px', background: '#fafbfc'}}>
        <Table
          data={dataContext}
          columns={columns}
        />
      </div>
    )
  }
}

class TableExampleRowExpandJSX extends React.Component {
  render() {
    const columns = [{
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Age',
      accessor: 'age'
    }];

    return(
      <div style={{padding: '20px 30px', background: '#fafbfc'}}>
        <Table
          data={dataWithCustomRowExpand}
          columns={columns}
        />
      </div>
    )
  }
}

const data = [
  {
    data: {
      name: 'Marty McFly',
      age: 18,
      friend: {
        name: 'Jason Maurer',
        age: 34
      }
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
    },
    config: {
      disabled: true,
      class: 'custom-class'
    }
  }, {
    data: {
      name: 'Biff Tannen',
      age: 21,
      friend: {
        name: 'Jason Maurer',
        age: 35
      }
    }
  }, {
    data: {
      name: 'George McFly',
      age: 47,
      friend: {
        name: 'Jason Maurer',
        age: 37
      }
    }
  }, {
    data: {
      name: 'Jennifer Parker',
      age: 37,
      friend: {
        name: 'Jason Maurer',
        age: 29
      }
    }
  }, {
    data: {
      name: 'Dave McFly',
      age: 34,
      friend: {
        name: 'Jason Maurer',
        age: 64
      }
    }
  }, {
    data: {
      name: 'Linda McFly',
      age: 32,
      friend: {
        name: 'Jason Maurer',
        age: 52
      }
    }
  }, {
    data: {
      name: 'Goldie Wilson',
      age: 54,
      friend: {
        name: 'Jason Maurer',
        age: 58
      }
    }
  }, {
    data: {
      name: 'Marvin Berry',
      age: 43,
      friend: {
        name: 'Jason Maurer',
        age: 43
      }
    }
  }, {
    data: {
      name: 'Stella Baines',
      age: 57,
      friend: {
        name: 'Jason Maurer',
        age: 47
      }
    }
  }, {
    data: {
      name: 'Sam Baines',
      age: 43,
      friend: {
        name: 'Jason Maurer',
        age: 33
      }
    }
  }
];
const dataTextOverflow = [
  {
    data: {
      title1: 'None',
      title2: 'Single line end',
      title3: 'Single line middle',
      title4: 'Multi line end',
      title5: 'None multi line'
    }
  }, {
    data: {
      title1: '01-12-2018',
      title2: 'Hans Ferdinand Massmann',
      title3: '0475 98234343210',
      title4: 'West street 94, 1234 AB Amsterdam',
      title5: 'Hasencleverstr. 2, 22111 Hamburg'
    }
  }
];
const dataNested = [
  {
    data: {
      name: 'Marty McFly',
      age: 18,
      friend: {
        name: 'Jason Maurer',
        age: 34
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
    },
    config: {
      disabled: true,
      class: 'custom-class'
    }
  }, {
    data: {
      name: 'Biff Tannen',
      age: 21,
      friend: {
        name: 'Jason Maurer',
        age: 35
      }
    }
  }, {
    data: {
      name: 'Marty McFly',
      age: 18,
      friend: {
        name: 'Jason Maurer',
        age: 34
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
    },
    config: {
      disabled: true,
      class: 'custom-class'
    }
  }, {
    data: {
      name: 'Biff Tannen',
      age: 21,
      friend: {
        name: 'Jason Maurer',
        age: 35
      }
    }
  }, {
    data: {
      name: 'Marty McFly',
      age: 18,
      friend: {
        name: 'Jason Maurer',
        age: 34
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
    ],
    config: {
      disabled: true
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
    },
    config: {
      disabled: true,
      class: 'custom-class'
    }
  }, {
    data: {
      name: 'Biff Tannen',
      age: 21,
      friend: {
        name: 'Jason Maurer',
        age: 35
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
  }, {
    data: {
      name: 'Emmet Brown',
      age: 61,
      friend: {
        name: 'Jason Maurer',
        age: 23
      }
    },
    contextMenu: [
      {
        name: 'delete',
        icon: <MdDelete />,
        callback: () => console.log('kek')
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
    },
    config: {
      disabled: true,
      class: 'custom-class'
    },
    contextMenu: [
      {
        name: 'delete',
        icon: <MdDelete />,
        callback: () => console.log('kek')
      },
      {
        name: 'delete1',
        icon: <MdContentCopy />,
        callback: () => console.log('kek')
      }
    ]
  }, {
    data: {
      name: 'Biff Tannen',
      age: 21,
      friend: {
        name: 'Jason Maurer',
        age: 35
      }
    },
    contextMenu: [
      {
        name: 'delete',
        icon: <MdDelete />,
        callback: () => console.log('kek')
      },
      {
        name: 'delete1',
        icon: <MdContentCopy />,
        callback: () => console.log('kek')
      },
      {
        name: 'delete2',
        icon: <MdRemoveRedEye />,
        callback: () => console.log('kek')
      },
      {
        name: 'delete3',
        icon: <MdDelete />,
        callback: () => console.log('kek')
      }
    ]
  }, {
    data: {
      name: 'George McFly',
      age: 47,
      friend: {
        name: 'Jason Maurer',
        age: 37
      }
    },
    contextMenu: [
      {
        name: 'delete',
        icon: <MdDelete />,
        callback: () => console.log('kek')
      },
      {
        name: 'delete1',
        icon: <MdContentCopy />,
        callback: () => console.log('kek')
      },
      {
        name: 'delete2',
        icon: <MdRemoveRedEye />,
        callback: () => console.log('kek')
      },
      {
        name: 'delete3',
        icon: <MdDelete />,
        callback: () => console.log('kek')
      }
    ]
  }, {
    data: {
      name: 'Jennifer Parker',
      age: 37,
      friend: {
        name: 'Jason Maurer',
        age: 29
      }
    },
    contextMenu: [
      {
        name: 'delete',
        icon: <MdDelete />,
        callback: () => console.log('kek')
      },
      {
        name: 'delete1',
        icon: <MdContentCopy />,
        callback: () => console.log('kek')
      },
      {
        name: 'delete2',
        icon: <MdRemoveRedEye />,
        callback: () => console.log('kek')
      },
      {
        name: 'delete3',
        icon: <MdDelete />,
        callback: () => console.log('kek')
      }
    ]
  }, {
    data: {
      name: 'Dave McFly',
      age: 34,
      friend: {
        name: 'Jason Maurer',
        age: 64
      }
    },
    contextMenu: [
      {
        name: 'delete',
        icon: <MdDelete />,
        callback: () => console.log('kek')
      },
      {
        name: 'delete1',
        icon: <MdContentCopy />,
        callback: () => console.log('kek')
      },
      {
        name: 'delete2',
        icon: <MdRemoveRedEye />,
        callback: () => console.log('kek')
      }
    ]
  }, {
    data: {
      name: 'Linda McFly',
      age: 32,
      friend: {
        name: 'Jason Maurer',
        age: 52
      }
    },
    contextMenu: [
      {
        name: 'delete',
        icon: <MdDelete />,
        callback: () => console.log('kek')
      }
    ]
  }, {
    data: {
      name: 'Goldie Wilson',
      age: 54,
      friend: {
        name: 'Jason Maurer',
        age: 58
      }
    },
    contextMenu: [
      {
        name: 'delete',
        icon: <MdDelete />,
        callback: () => console.log('kek')
      },
      {
        name: 'delete1',
        icon: <MdContentCopy />,
        callback: () => console.log('kek')
      },
      {
        name: 'delete2',
        icon: <MdRemoveRedEye />,
        callback: () => console.log('kek')
      },
      {
        name: 'delete3',
        icon: <MdDelete />,
        callback: () => console.log('kek')
      }
    ]
  }, {
    data: {
      name: 'Marvin Berry',
      age: 43,
      friend: {
        name: 'Jason Maurer',
        age: 43
      }
    },
    contextMenu: [
      {
        name: 'delete',
        icon: <MdDelete />,
        callback: () => console.log('kek')
      }
    ]
  }, {
    data: {
      name: 'Stella Baines',
      age: 57,
      friend: {
        name: 'Jason Maurer',
        age: 47
      }
    },
    contextMenu: [
      {
        name: 'delete',
        icon: <MdDelete />,
        callback: () => console.log('kek')
      },
      {
        name: 'delete1',
        icon: <MdContentCopy />,
        callback: () => console.log('kek')
      },
      {
        name: 'delete2',
        icon: <MdRemoveRedEye />,
        callback: () => console.log('kek')
      },
      {
        name: 'delete3',
        icon: <MdDelete />,
        callback: () => console.log('kek')
      }
    ]
  }, {
    data: {
      name: 'Sam Baines',
      age: 43,
      friend: {
        name: 'Jason Maurer',
        age: 33
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
const dataWithCustomRowExpand = [
  {
    data: {
      name: 'Marty McFly',
      age: 18,
      friend: {
        name: 'Jason Maurer',
        age: 34
      }
    },
    children: () => <div>Text</div>
  },
  {
    data: {
      name: 'Marty McFly',
      age: 18,
      friend: {
        name: 'Jason Maurer',
        age: 34
      }
    },
    children: () => <div>Text</div>
  }
];

export {
  TableExample,
  TableExampleCustomWidth,
  TableExampleCustomHeight,
  TableExampleTextOverflow,
  TableExampleSelect,
  TableExampleNested,
  TableExampleAdditionalProps,
  TableExampleMultipleSelect,
  TableExampleMultipleSelectBlue,
  TableExampleMultipleSelectGrey,
  TableExampleTransform,
  TableExampleContextMenu,
  TableExampleRowExpandJSX
}
