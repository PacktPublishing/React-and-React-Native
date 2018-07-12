import React from 'react';
import {
  PageHeader,
} from 'react-bootstrap';

import InputsFormContainer from './InputsFormContainer';
import RadioFormContainer from './RadioFormContainer';

export default () => (
  <section>
    <PageHeader>Forms</PageHeader>
    <InputsFormContainer />
    <RadioFormContainer />
  </section>
);
