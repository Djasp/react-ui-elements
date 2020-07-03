import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  BannerSuccessExample,
  BannerWarningExample,
  BannerErrorExample,
  BannerErrorDescriptionExample
} from '../components/Banner';

storiesOf('Banner', module)
  .add('Banner Success', function() {
    return <BannerSuccessExample />;
  })
  .add('Banner Warning', function() {
    return <BannerWarningExample />;
  })
  .add('Banner Error', function() {
    return <BannerErrorExample />;
  })
  .add('Banner Error Description', function() {
    return <BannerErrorDescriptionExample />;
  });
