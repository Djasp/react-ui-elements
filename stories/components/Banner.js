import React from 'react';
import { Banner } from '../../src/index.js';



const BannerSuccessExample = () => (
  <Banner type='success' text='Notification banner text - on stack level' />
);

const BannerWarningExample = () => (
  <Banner type='warning' text='Notification banner text - on stack level' />
);

const BannerErrorExample = () => (
  <Banner type='error' text='Notification banner text - on stack level' />
);

const BannerErrorDescriptionExample = () => (
  <Banner type='error' text='Notification banner text - on stack level' description='Description' />
);

export {
  BannerSuccessExample,
  BannerWarningExample,
  BannerErrorExample,
  BannerErrorDescriptionExample
}
