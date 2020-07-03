import _ from 'lodash'
import React from 'react'
import { Grid, Image, Segment, Menu } from '../../src/index.js'

const columns = _.times(16, (i) => (
  <Grid.Column key={i}>
    <Image src='assets/images/wireframe/image.png' />
  </Grid.Column>
));

const GridExampleGrid = () => (
  <Grid>{columns}</Grid>
);


const GridExampleDividedNumber = () => (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src='assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const GridExampleVerticallyDivided = () => (
  <Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column>
        <Image src='assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src='assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const GridExampleCelled = () => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={13}>
        <Image src='assets/images/wireframe/centered-paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src='assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const GridExampleRows = () => (
  <Grid columns={3}>
    <Grid.Row>
      <Grid.Column>
        <Image src='assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const GridExampleColumns = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={8}>
        <Image src='assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column width={8}>
        <Image src='assets/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={8}>
        <Image src='assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column width={8}>
        <Image src='assets/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const GridExampleFloated = () => (
  <Grid>
    <Grid.Column floated='left' width={5}>
      <Image src='assets/images/wireframe/paragraph.png' />
    </Grid.Column>
    <Grid.Column floated='right' width={5}>
      <Image src='assets/images/wireframe/paragraph.png' />
    </Grid.Column>
  </Grid>
);

const GridExampleColumnWidth = () => (
  <Grid>
    <Grid.Column width={4}>
      <Image src='assets/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column width={9}>
      <Image src='assets/images/wireframe/paragraph.png' />
    </Grid.Column>
    <Grid.Column width={3}>
      <Image src='assets/images/wireframe/media-paragraph.png' />
    </Grid.Column>
  </Grid>
);

const GridExampleColumnCount = () => (
  <Grid>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={4}>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={5}>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const GridExampleEqualWidthColumn = () => (
  <Grid columns='equal'>
    <Grid.Column>
      <Segment>1</Segment>
    </Grid.Column>
    <Grid.Column width={8}>
      <Segment>2</Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>3</Segment>
    </Grid.Column>
  </Grid>
);

const GridExampleEqualWidthRow = () => (
  <Grid columns='equal'>
    <Grid.Row>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>3</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>4</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>3</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>2</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const GridExampleStretched = () => (
  <Grid columns={3} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
        <Segment>3</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const GridExampleStretchedEqual = () => (
  <Grid columns='equal'>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column width={6}>
        <Segment>
          <Image src='assets/images/wireframe/paragraph.png' />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column width={6}>
        <Segment>
          <Image src='assets/images/wireframe/paragraph.png' />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const GridExamplePadded = () => (
  <div>
    <p>The following grid has vertical and horizontal gutters.</p>

    <Grid columns={2} padded>
      <Grid.Column>
        <Image src='assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid>
  </div>
);

const GridExampleRelaxed = () => (
  <Grid relaxed columns={4}>
    <Grid.Column>
      <Image src='assets/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='assets/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='assets/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='assets/images/wireframe/image.png' />
    </Grid.Column>
  </Grid>
);

const GridExampleRelaxedVery = () => (
  <Grid relaxed='very' columns={4}>
    <Grid.Column>
      <Image src='assets/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='assets/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='assets/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='assets/images/wireframe/image.png' />
    </Grid.Column>
  </Grid>
);

const colors = [
  'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
  'violet', 'purple', 'pink', 'brown', 'grey', 'black'
]

const GridExampleColoredColumn = () => (
  <Grid columns={5} padded>
    {colors.map(color => (
      <Grid.Column color={color} key={color}>
        {_.capitalize(color)}
      </Grid.Column>
    ))}
  </Grid>
);

const GridColoredRowExample = () => (
  <Grid padded>
    {colors.map(color => (
      <Grid.Row color={color} key={color}>
        <Grid.Column>{_.capitalize(color)}</Grid.Column>
      </Grid.Row>
    ))}
  </Grid>
);

const GridExampleCentered = () => (
  <Grid centered columns={2}>
    <Grid.Column>
      <Image src='assets/images/wireframe/image.png' />
    </Grid.Column>

    <Grid.Row centered columns={4}>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row centered columns={4}>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const GridExampleTextAlignmentCenter = () => (
  <Grid textAlign='center' columns={3}>
    <Grid.Row>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Cats</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Dogs</Menu.Item>
          <Menu.Item>Poodle</Menu.Item>
          <Menu.Item>Cockerspaniel</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Monkeys</Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const GridExampleTextAlignmentJustified = () => (
  <Grid>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Cats</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Menu fluid vertical>
          <Menu.Item className='header'>Dogs</Menu.Item>
          <Menu.Item>Poodle</Menu.Item>
          <Menu.Item>Cockerspaniel</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Monkeys</Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row textAlign='justified'>
      <Grid.Column>
        <p>
                    Justified content fits exactly inside the grid column, taking up the entire width from one side to the
                    other. Justified content fits exactly inside the grid column, taking up the entire width from one side to
                    the other. Justified content fits exactly inside the grid column, taking up the entire width from one side
                    to the other. Justified content fits exactly inside the grid column, taking up the entire width from one
                    side to the other. Justified content fits exactly inside the grid column, taking up the entire width from
                    one side to the other.
        </p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const GridExampleTextAlignmentRight = () => (
  <Grid textAlign='right' columns={3}>
    <Grid.Row>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Cats</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Dogs</Menu.Item>
          <Menu.Item>Poodle</Menu.Item>
          <Menu.Item>Cockerspaniel</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Monkeys</Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const GridExampleVerticalAlignment = () => (
  <Grid verticalAlign='middle' columns={4} centered>
    <Grid.Row>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
        <br />
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const GridExampleVerticalAlignmentRow = () => (
  <Grid columns={4} centered>
    <Grid.Row verticalAlign='top'>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
        <br />
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row verticalAlign='middle'>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
        <br />
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row verticalAlign='bottom'>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
        <br />
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='assets/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const GridExampleContainer = () => (
  <Grid container columns={3}>
    <Grid.Column>
      <Image src='assets/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='assets/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='assets/images/wireframe/image.png' />
    </Grid.Column>
  </Grid>
);

const GridExampleDoubling = () => (
  <Grid doubling columns={5}>
    <Grid.Column>
      <Image src='assets/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='assets/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='assets/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='assets/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='assets/images/wireframe/image.png' />
    </Grid.Column>
  </Grid>
);

const GridExampleStackable = () => (
  <Grid stackable columns={2}>
    <Grid.Column>
      <Segment>
        <Image src='assets/images/wireframe/paragraph.png' />
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>
        <Image src='assets/images/wireframe/paragraph.png' />
      </Segment>
    </Grid.Column>
  </Grid>
);


export {
  GridExampleGrid,
  GridExampleDividedNumber,
  GridExampleVerticallyDivided,
  GridExampleCelled,
  GridExampleRows,
  GridExampleColumns,
  GridExampleFloated,
  GridExampleColumnWidth,
  GridExampleColumnCount,
  GridExampleEqualWidthColumn,
  GridExampleEqualWidthRow,
  GridExampleStretched,
  GridExampleStretchedEqual,
  GridExamplePadded,
  GridExampleRelaxed,
  GridExampleRelaxedVery,
  GridExampleColoredColumn,
  GridExampleCentered,
  GridExampleTextAlignmentCenter,
  GridExampleTextAlignmentJustified,
  GridExampleTextAlignmentRight,
  GridExampleVerticalAlignment,
  GridExampleVerticalAlignmentRow,
  GridExampleContainer,
  GridExampleDoubling,
  GridExampleStackable
}
