import React from 'react';
import { storiesOf } from '@storybook/react';

import { HeaderExampleContent } from '../components/Header';

storiesOf('Header', module)
  .add('Header', function() {
    return <HeaderExampleContent />;
  });
