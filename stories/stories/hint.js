import React from 'react';
import { storiesOf } from '@storybook/react';

import { HintExample } from '../components/Hint';

storiesOf('Hint', module)
  .add('Hint', function() {
    return <HintExample />;
  });
