import React from 'react';
import { storiesOf } from '@storybook/react';

import { LinkExample } from '../components/Link';

storiesOf('Link', module)
  .add('Link', () => (<LinkExample />));
