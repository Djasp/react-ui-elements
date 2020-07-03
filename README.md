# Generic UI Elements Omnius
 
This repository contains the generic UI elements for the Omnius UI and is based on [React Semantic UI](https://react.semantic-ui.com). After explaining how to edit and use this repository I will explain what the differences are between the two UI libraries.
 
## How to edit this repository
 
1. Clone this repo
2. Inside cloned repo run `npm install`
3. If you want to run tests: `npm test` or `npm run testonly` or `npm run test-watch`. You need to write tests in `__tests__` folder. You need at least Node 4 on your machine to run tests.
4. If you want to run linting: `npm test` or `npm run lint`. Fix bugs: `npm run lint-fix`. You can adjust your `.eslintrc` config file.
5. If you want to run transpilation to ES5 in `dist` folder: `npm run prepublish` (standard npm hook).
 
## How to integrate this libary
1. Ensure to reference this module repository in your project:Create a new file in the application root: **.npmrc**```bash

```
email=name@domain.tld
_auth=BASE64CRED
init.author.name=Your Name
init.author.email=name@domain.tld
registry=http://172.20.220.61:8082/repository/npm-group/
@omnius:registry=http://172.20.220.61:8082/repository/npm-hosted/
```

2. Run `npm install @omnius/react-ui-elements --save` in project.
3. Import the css in your project. `import '@omnius/react-ui-elements/src/styles/Dev.scss'` which includes default colours or if you are importing this in baseline you will first need to define the colours and after that import App.scss inside your own scss file.

```
/* Omnius Colour Palette

Name                HSL value               Hex value       */
$light-orange:      hsl(32, 96%, 62%);      // #fba540
$pale-red:          hsl(0, 85%, 63%);       // #f15252
$warm-purple:       hsl(298, 58%, 40%);     // #9c2aa0
$dark-purple:       hsl(315, 41%, 26%);     // #fba540
$dark-grey-blue:    hsl(201, 28%, 25%);     // #2e4551
$greeny-blue:       hsl(184, 100%, 33%);    // #45ada8

$grey1:             hsl(210, 25%, 98%);     // #fafbfc;
$grey2:             hsl(210, 5%, 92%);      // #eaebec;
$grey3:             hsl(0, 0%, 90%);        // #e5e5e5;
$grey4:             hsl(0, 0%, 87%);        // #dddddd;
$grey5:             hsl(0, 0%, 84%);        // #d5d5d5;
$grey6:             hsl(0, 0%, 82%);        // #d0d0d0;

$white:             hsl(0, 0%, 100%);       // #ffffff
$black:             hsl(0, 0%, 0%);         // #000000

/* State variables */
$error:               $pale-red;
$primary-text-color:  $dark-grey-blue;
$primary:             $greeny-blue;

$stack1: $light-orange;
$stack2: $pale-red;
$stack3: $warm-purple;
$stack4: $dark-purple;
$stack5: $dark-grey-blue;
$stack6: $greeny-blue;

// Import react-ui-elements main scss file
@import "./node_modules/@omnius/react-ui-elements/src/styles/App";
```
 
## Differences with semantic ui
 
As semantic UI is mainly used as a base there are several important differences because features that will not be needed in Omnius VNext are stripped out. The package consists out of three different types of components; original components — components that are originally in Semantic UI and have not been edited, extended components — components that were originally in Semantic UI but have changed to the needs of Omnius, custom components — components that are not in Semantic UI and have been build from the ground up or are extended but so much different in functionality than the original.
 
### Original Components
 
Original Components are the majority of this package and include; [Container](https://react.semantic-ui.com/elements/container), [Divider](https://react.semantic-ui.com/elements/divider), [Header](https://react.semantic-ui.com/elements/header), [Image](https://react.semantic-ui.com/elements/image), [Label](https://react.semantic-ui.com/elements/label), [List](https://react.semantic-ui.com/elements/list), [Loader](https://react.semantic-ui.com/elements/loader), [Rail](https://react.semantic-ui.com/elements/rail), [Reveal](https://react.semantic-ui.com/elements/reveal), [Segment](https://react.semantic-ui.com/elements/segment), [Step](https://react.semantic-ui.com/elements/step), [Breadcrumb](https://react.semantic-ui.com/collections/breadcrumb), [Form](https://react.semantic-ui.com/collections/form), [Grid](https://react.semantic-ui.com/collections/grid), [Menu](https://react.semantic-ui.com/collections/menu), [Modal](https://react.semantic-ui.com/modules/modal), [Message](https://react.semantic-ui.com/collections/message), [Table](https://react.semantic-ui.com/collections/table), [Card](https://react.semantic-ui.com/views/card), [Comment](https://react.semantic-ui.com/views/comment), [Feed](https://react.semantic-ui.com/views/feed), [Item](https://react.semantic-ui.com/views/item), [Statistic](https://react.semantic-ui.com/views/statistic), [Accordion](https://react.semantic-ui.com/modules/accordion), [Dimmer](https://react.semantic-ui.com/modules/dimmer), [Embed](https://react.semantic-ui.com/modules/embed), [Progress](https://react.semantic-ui.com/modules/progress), [Rating](https://react.semantic-ui.com/modules/rating), [Search](https://react.semantic-ui.com/modules/search), [Sidebar](https://react.semantic-ui.com/modules/sidebar), [Confirm](https://react.semantic-ui.com/addons/confirm), [Portal](https://react.semantic-ui.com/addons/portal), [Icon](https://react.semantic-ui.com/elements/icon) and [Flag](https://react.semantic-ui.com/elements/flag). At this moment it's not decided yet which components are unneccesary but this list will most definitely be cut down.
 
### Extended Components
 
In most cases the extended components are components that are frequently used in websites and include; [TextArea](https://react.semantic-ui.com/addons/text-area), [Button](https://react.semantic-ui.com/elements/button), [Input](https://react.semantic-ui.com/elements/input), [Checkbox](https://react.semantic-ui.com/modules/checkbox), [Dropdown](https://react.semantic-ui.com/modules/dropdown), [Popup](https://react.semantic-ui.com/modules/popup) and [Select](https://react.semantic-ui.com/addons/select).
 
### Custom Components
 
The custom components are currently low in numbers but probably expanded in future when we have a better overview of common elements. Custom components include; Dialog, InputAccordion, ToggleBox and Alert.
 
## Components
### TextArea
 
TextArea is a multi line input field and can hold unlimited characters. Label is not a required prop but it’s strongly recommended to use this.
 
```<TextArea label='Label' />```
 
Other props are placeholder (:string), focus (:boolean), defaultValue (:string), disabled (:boolean) and autoheight (:boolean).
 
##### Error

It’s also possible for showing errors on this element, this can be done like this:

```
<TextArea
  error='Whatever is wrong comes here'
  label='Label'
  focus
  defaultValue='Error'
/>
```
 
 or like this:
 
```
<Popup
 trigger={
  <TextArea
    error
    label='Label'
    focus
    defaultValue='Error'
  />
 }
 error
 content='Whatever is wrong comes here'
 on='focus'
 position='top left'
/>
```
 
### Button
 
Button's are required to have either the primary or secondary prop.
 
```
<Button primary>Action</Button>
<Button secondary>Action</Button>
```
 
Other props are disabled (:boolean), loading (:boolean), floated (:string), fluid (:boolean) and icon (:boolean). There's also a loadingText property where you can either pass a string or as boolean. If you pass as string then the button text will be replaced by that text. If as boolean true the current text will stay there and when as false the button text will be completely replaced by the loading icon.

#### Button Dropdown

For a button dropdown you can use the following array example to pass to the `dropdown` prop. You will also need to pass the prop `open` to the button with a boolean value.

```
<Button.Dropdown>
  <Button>
    Click
  </Button>
  <Button.Dropdown.Menu open={true}>
    <Button.Dropdown.Item>Menu Line</Button.Dropdown.Item>
    <Button.Dropdown.Item>Menu Line</Button.Dropdown.Item>
  </Button.Dropdown.Menu>
</Button.Dropdown>
``` 

##### Floated
 
```
<Button primary floated='left'>Left Floated</Button>
<Button primary floated='right'>Right Floated</Button>
```
 
##### Icon
 
```
<Button secondary icon>
  <Icon name='world' />
</Button>
```
 
### Input
 
Like TextArea, it's strongly recommended to use the label prop. The input is also extended with React Mask,[React Mask Documentation](https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#mask).
 
```
<Input label='Search' />
```
 
Other props are placeholder (:string), focus (:boolean), defaultValue (:string), disabled
(:boolean), error (:boolean), fluid (:boolean).
 
##### Error
 
```
<Popup
  trigger={<Input error
                  focus
                  label='Search'
                  defaultValue='Error' />}
  error
  content='Whatever is wrong comes here'
  on='focus'
  position='top left'
/>
```
 
### Checkbox
 
Checkbox can be either a checkbox, slider or radiogroup.
 
```
<Checkbox label='Make my profile visible' />
```
 
Other props are slider (:boolean), readOnly (:boolean), defaultChecked (:boolean), defaultIndeterminate (:boolean), disabled (:boolean) and radio (:boolean).
 
##### Slider
 
```
<Checkbox label='Show VAT' slider />
```
 
##### Radio
 
```
class CheckboxExampleRadioGroup extends React.Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });
 
  render() {
      return (
          <Form>
              <Form.Field>
                  Selected value: <b>{this.state.value}</b>
              </Form.Field>
              <Form.Field>
                  <Checkbox
                      radio
                      label='Choose this'
                      name='checkboxRadioGroup'
                      value='this'
                      checked={this.state.value === 'this'}
                      onChange={this.handleChange}
                  />
              </Form.Field>
              <Form.Field>
                  <Checkbox
                      radio
                      label='Or that'
                      name='checkboxRadioGroup'
                      value='that'
                      checked={this.state.value === 'that'}
                      onChange={this.handleChange}
                  />
              </Form.Field>
          </Form>
      )
  }
}
```
 
### Dialog
 
Dialog is the replacement of Modal and Confirm. It has three types of displays: Dialog which requires an action, optional which requires no action and alert which requires an action and can’t be escaped.
 
```
class DialogExample extends React.Component {
  state = { open: true };
 
  show = () => () => this.setState({ open: true });
  close = () => this.setState({ open: false });
 
  render() {
      const { open } = this.state;
 
      return (
          <div>
              <Button primary onClick={this.show(true)}>Open</Button>
              <Dialog
                  open={open}
                  label="Modal Title"
                  content="Dialog with action buttons. You can also close this dialog by clicking outside the dialog, or with the 'Esc' key."
                  actionName="Action"
                  onActionClick={() => console.log("click")}/>
          </div>
      )
  }
}
```
 
##### Optional
 
```
class DialogExampleOptional extends React.Component {
  state = { open: true };
 
  show = () => () => this.setState({ open: true });
  close = () => this.setState({ open: false });
 
  render() {
      const { open } = this.state;
 
      return (
          <div>
              <Button primary onClick={this.show(true)}>Open</Button>
              <Dialog
                  open={open}
                  label="Dialog title"
                  content="Dialog will close by clicking outside the dialog, the X, or with the 'Esc' key."
                  optional />
          </div>
      )
  }
}
```
 
##### Optional
 
```
class DialogExampleAlert extends React.Component {
  state = { open: true };
 
  show = () => () => this.setState({ open: true });
  close = () => this.setState({ open: false });
 
  render() {
      const { open } = this.state;
 
      return (
          <div>
              <Button primary onClick={this.show(true)}>Open</Button>
              <Dialog
                  open={open}
                  label="Alert message"
                  content="Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation."
                  actionName="Discard"
                  onActionClick={() => console.log("click")}
                  alert />
          </div>
      )
  }
}
```
 
### Dropdown
 
Dropdown is a component with a button and when you click on it custom content will apear.
 
```
<Dropdown label='Add Package'>
    <div>Content</div>
</Dropdown>
```
 
Other props are fluid (:boolean) and disabled (:boolean).
 
### InputAccordion
 
InputAccordion is a expandable list which contains either a radio or checkbox symbol and will expand when it has children components. The sections that belong together have to be inside a parent <InputAccordion /> with a groupname and have a value. 
 
```
<InputAccordion radio groupName='group1'>
   <InputAccordion.Section title='Same as customer address' value='1' />
   <InputAccordion.Section title='Use a different billing address' value='2'>
       // Content here
   </InputAccordion.Section>
   <InputAccordion.Section title='Same as customer address' value='3' disabled />
</InputAccordion>
```
 
Other props are disabled (:boolean), radio (:boolean) and title (:string).
 
### Popup
 
Popups are also used in errors as seen in the examples above and thus also can receive the same props.
 
```
   <Popup
       trigger={<Button primary content='Popup' />}
       content='Add users to your feed'
       on='click'
   />
```
 
Other props are: header (:string), basic (:boolean), wide (:boolean), inverted (:boolean), position (:string), offset (:number), style (:string), hideOnScroll (:boolean) and on (:string).
 
### Select
 
The maximal height of the dropdown in a select field can be controlled by passing the number of 
items you want to show. The default is five.
 
```
<Select label='Skills' maxHeight={5} options={options} />
```
 
Other props are placeholder (:string), fluid (:boolean), disabled (:boolean), error (:boolean).
 
### ToggleBox
 
Unlike other elements, label is not necessary required here.
 
```
<ToggleBox label='Plan your delivery today'>
    // Comment
</ToggleBox>
```
 
Other label is expanded (:boolean).
 
### Alert
 
Shows a flash message for example after logged in or when a particular action could not be executed.
 
```
<Alert
    content='WELL DONE!  You Succesfully read this alert message'
    type='success'
/>
```
 
For an alert with closing button use the onDismiss prop.
 
### Hint
 
Hint is a slide in element which can be used for notifications like when a bundle can be formed 
with the selected products.
 
```
<Hint title='Bundle match'
  message={message}
  onDismiss={this.handleDismiss}
/>
```
 
### ContextMenu
 
Context menu is a small menu specific to a single item. Usually actions for that item are 
displayed here like deleting or duplicating.
 
```
const options = [
  { id: 0, text: 'Delete Package', icon: <Duplicate />, action: function() { console.log('click') 
  } },
  { id: 1, text: 'Duplicate Package', icon: <Delete />, action: function() { console.log('click') } }
];
```
 
```
<ContextMenu options={options} />
```
 
You can also manually control a ContextMenu and opening it by giving the prop 'open' to it.
 
 ### Segmented Control
  
 Is a mutual exclusive button group.
  
 ```
 <SegmentedControl.Group>
   <SegmentedControl.Button
     name='map-settings'
     value='map'
     checked={this.state.selectedOption === 'map'}
     onClick={this.handleOptionChange}
   >
     Map
   </SegmentedControl.Button>
   <SegmentedControl.Button
     name='map-settings'
     value='transit'
     checked={this.state.selectedOption === 'transit'}
     onClick={this.handleOptionChange}
   >
     Transit
   </SegmentedControl.Button>
   <SegmentedControl.Button
     name='map-settings'
     value='satellite'
     checked={this.state.selectedOption === 'satellite'}
     onClick={this.handleOptionChange}
   >
     Satellite
   </SegmentedControl.Button>
 </SegmentedControl.Group>
 ```
  
 SegmentedControl.Group also accepts the stacked prop to achieve a vertical button group.
 
 ### Segment
  
 Is a mutual exclusive button group.
  
 ```
 <Segment title=‘Title’ open>
   <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
 </Segment>
 ```
  
 Segment also accepts the prop collapsible to give it a toggle functionality.
 
 ### Table
 
 The general usage of the Table component is synchronous with [React Table](https://react-table.js.org/#/story/readme). Additional features explained below.
 
 ```
class TableExampleSelect extends React.Component {
  state = {
    selectedCustomer: null
  };

  selectHandler = (fields) => {
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
      Cell: (props) => <div>{props.name} is {props.value}</div>,
      additionalProps: {
        name: 'name'
      }
    }, {
      id: 'friendName', // Required because our accessor is not a string
      header: 'Friend Name',
      accessor: d => d.friend.name // Custom value accessors!
    }, {
      header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
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

    return(
      <Table
        data={data}
        columns={columns}
        minRows={0}
        showPagination={false}
        onRowClick={this.selectHandler}
        selected={this.state.selectedCustomer ? this.state.selectedCustomer.index : null}
        selectable
        background='rgb(250, 251, 252)''
      />
    )
  }
}
```

Since the table is transparent but has overlapping sections that need to render the content beneath invisible we need to specify a backgroundColor. backgroundColor can be in any format like hex, RGB and HSL. If none is specified it will loop over it's parents and look for the closest parent background property.
 
### Banner
 
A banner is a more subtle type of notification than alert is. There are three types of banners which are success, warning and error.
 
```
<Banner
  type='error'
  text='Notification banner text - on stack level'
  description='Description'
/>
```
 
Banner accepts the props type, text which is the primary text and is required and description is a less pronounced/secondary text.

##### Additional Features

In the above example you can see the data array. One of these objects includes a rowConfig. This property is reserved to include options for a row like giving it the disabled state or adding custom classes.

### Tab
  
A tab includes multiple panes with a menu on top of it that can be switched.
  
```
const panes = [
  { menuItem: 'Tab 1', render: () => <div>Tab 1 Content</div> },
  { menuItem: 'Tab 2', render: () => <div>Tab 2 Content</div> },
  { menuItem: 'Tab 3', render: () => <div>Tab 3 Content</div> }
];
 
<Tab panes={panes} onTabChange={(index) => console.log(index)} />
```

You can also pass a function to onTabChange that will return the index of the current tab active.


### LoadingSpinner
  
A loading spinner is a small spinner component with an animation to imply a loading state. There are two sizes, default size is large, to get the small spinner pass small as prop to loading spinner component. You can also pass a background to the loading spinner, `background='light'` or `background='dark'`.
  
```
<LoadingSpinner small background='light' />
```

## Maintainer
 
bob.beugels@dynacommerce.eu
