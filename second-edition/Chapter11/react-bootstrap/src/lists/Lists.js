import React from 'react';
import { PageHeader } from 'react-bootstrap';

import FilteredListContainer from './FilteredListContainer';

export default () => (
  <section>
    <PageHeader>Lists</PageHeader>
    <FilteredListContainer />
  </section>
);
