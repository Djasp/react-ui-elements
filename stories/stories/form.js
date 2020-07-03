import React from 'react';
import { storiesOf } from '@storybook/react';

import { FormExampleFormOmnius, FormExampleSubComponentControl } from '../components/Form';

storiesOf('Form', module)
  .add('Form Example', () => (<FormExampleFormOmnius />))
  .add('Sub Component Control', () => (<FormExampleSubComponentControl />));
