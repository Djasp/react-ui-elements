import React from 'react';
import { LoadingSpinner } from '../../src/index.js';

const LoadingSpinnerExample = () => (
  <div>
    <LoadingSpinner />
    <LoadingSpinner small />
  </div>
);

const LoadingSpinnerLightExample = () => (
  <div style={{
    background: 'rgba(0, 0, 0, 0.05)',
    padding: '40px'
  }}>
    <LoadingSpinner background='light' />
    <LoadingSpinner background='light' small />
  </div>
);

const LoadingSpinnerDarkExample = () => (
  <div style={{
    background: 'rgba(0, 0, 0, 0.05)',
    padding: '40px'
  }}>
    <LoadingSpinner background='dark' />
    <LoadingSpinner background='dark' small />
  </div>
);

export {
  LoadingSpinnerExample,
  LoadingSpinnerLightExample,
  LoadingSpinnerDarkExample
}
