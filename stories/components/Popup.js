import React from 'react'
import { Button, Popup, Grid, Input } from '../../src/index.js'

const PopupExample = () => (
  <Popup
    trigger={<Button primary content='Popup' />}
    content='Add users to your feed'
    on='click'
  />
);

const users = [
  {
    name: 'Elliot Fu',
    bio: 'Elliot has been a member since July 2012',
    avatar: '/assets/images/avatar/small/elliot.jpg'
  },
  {
    name: 'Stevie Feliciano',
    bio: 'Stevie has been a member since August 2013',
    avatar: '/assets/images/avatar/small/stevie.jpg'
  },
  {
    name: 'Matt',
    bio: 'Matt has been a member since July 2014',
    avatar: '/assets/images/avatar/small/matt.jpg'
  }
];

function PopupExampleTitled() {
  const avatars = users.map((user, index) =>
    <Popup
      key={user.name}
      trigger={<Button primary content='Popup' />}
      header={user.name}
      content={user.bio}
    />
  );

  return <div>{avatars}</div>
}

const PopupExampleBasic = () => (
  <Popup
    trigger={<Button primary content='Popup' />}
    content="The default theme's basic popup removes the pointing arrow."
    basic
  />
);

const PopupExampleWide = () => (
  <Popup
    trigger={<Button primary content='Popup' />}
    content="The default theme's basic popup removes the pointing arrow."
    wide
  />
);

const PopupExampleInverted = () => (
  <Popup
    trigger={<Button primary content='Popup' />}
    content='Hello. This is an inverted popup'
    inverted
  />
);

const PopupExamplePosition = () => (
  <Grid columns={3} style={{ width: '600px' }}>
    <Grid.Row>
      <Grid.Column>
        <Popup
          trigger={<Button primary content='Popup' />}
          content='I am positioned to the top left'
          position='top left'
          on='click'
        />
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Popup
          trigger={<Button primary content='Popup' />}
          content='I am positioned to the top center'
          position='top center'
          on='click'
        />
      </Grid.Column>
      <Grid.Column textAlign='right'>
        <Popup
          trigger={<Button primary content='Popup' />}
          content='I am positioned to the top right'
          position='top right'
          on='click'
        />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column floated='left'>
        <Popup
          trigger={<Button primary content='Popup' />}
          content='I am positioned to the left center'
          position='left center'
          on='click'
        />
      </Grid.Column>
      <Grid.Column floated='right' textAlign='right'>
        <Popup
          trigger={<Button primary content='Popup' />}
          content='I am positioned to the right center'
          position='right center'
          on='click'
        />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Popup
          trigger={<Button primary content='Popup' />}
          content='I am positioned to the bottom left'
          position='bottom left'
          on='click'
        />
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Popup
          trigger={<Button primary content='Popup' />}
          content='I am positioned to the bottom center'
          position='bottom center'
          on='click'
        />
      </Grid.Column>
      <Grid.Column textAlign='right'>
        <Popup
          trigger={<Button primary content='Popup' />}
          content='I am positioned to the bottom right'
          position='bottom right'
          on='click'
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const PopupExampleOffset = () => (
  <div>
    <Popup
      trigger={<Button primary content='Popup' />}
      content='Way off to the left'
      offset={50}
      position='left center'
    />
    <Popup
      trigger={<Button primary content='Popup' />}
      content='As expected this popup is way off to the right'
      offset={50}
      position='right center'
    />
  </div>
);

const style = {
  borderRadius: 0,
  opacity: 0.7,
  padding: '2em'
};

const PopupExampleStyle = () => (
  <Popup
    trigger={<Button primary content='Popup' />}
    content='Popup with a custom style prop'
    style={style}
    inverted
  />
);

const PopupExampleHideOnScroll = () => (
  <div>
    <Popup
      trigger={<Button primary>Click me</Button>}
      content='Hide the popup on any scroll event'
      on='click'
      hideOnScroll
    />
    <Popup
      trigger={<Button primary>Hover me</Button>}
      content='Hide the popup on any scroll event'
      hideOnScroll
    />
  </div>
);

const PopupExampleFocus = () => (
  <Popup
    trigger={<Input label='Search' />}
    header='Movie Search'
    content='You may search by genre, header, year and actors'
    on='focus'
  />
);

export {
  PopupExample,
  PopupExampleTitled,
  PopupExampleBasic,
  PopupExampleWide,
  PopupExampleInverted,
  PopupExamplePosition,
  PopupExampleOffset,
  PopupExampleStyle,
  PopupExampleHideOnScroll,
  PopupExampleFocus
}
