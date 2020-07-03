import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  TableExample, TableExampleCustomWidth, TableExampleTextOverflow,
  TableExampleSelect, TableExampleCustomHeight, TableExampleNested,
  TableExampleAdditionalProps, TableExampleMultipleSelect,
  TableExampleMultipleSelectBlue, TableExampleTransform,
  TableExampleMultipleSelectGrey, TableExampleContextMenu,
  TableExampleRowExpandJSX
} from '../components/Table';


storiesOf('Table', module)
  .add('Table', function() {
    return <TableExample />;
  })
  .add('Table Custom Width', function() {
    return <TableExampleCustomWidth />
  })
  .add('Table Custom Height', function() {
    return <TableExampleCustomHeight />
  })
  .add('Table Text Overflow', function() {
    return <TableExampleTextOverflow />
  })
  .add('Table Click', function() {
    return <TableExampleSelect />
  })
  .add('Table Nested', function() {
    return <TableExampleNested />
  })
  .add('Table Additional Props', function() {
    return <TableExampleAdditionalProps />
  })
  .add('Table Multiple Select', function() {
    return <TableExampleMultipleSelect />
  })
  .add('Table Multiple Select Blue', function() {
    return <TableExampleMultipleSelectBlue />
  })
  .add('Table Multiple Select Grey', function() {
    return <TableExampleMultipleSelectGrey />
  })
  .add('Table Transform', function() {
    return <TableExampleTransform />
  })
  .add('Table ContextMenu', function() {
    return <TableExampleContextMenu />
  })
  .add('Table Row Expand JSX', function() {
    return <TableExampleRowExpandJSX />
  });
