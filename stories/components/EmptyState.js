import React from 'react'
import { EmptyState } from '../../src/index.js'

const EmptyStateExample = () => (
  <EmptyState title='No linked accounts' >
    <span>
      If the customer has linked accounts,<br /> you&apos;ll see them here
    </span>
  </EmptyState>
);


export {
  EmptyStateExample
}
