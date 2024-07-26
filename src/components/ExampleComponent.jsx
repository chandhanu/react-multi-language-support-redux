import React from 'react';
import { Translate } from 'react-localize-redux';

const ExampleComponent = () => (
  <div>
    <h2><Translate id="exampleComponent.title" /></h2>
    <p><Translate id="exampleComponent.description" /></p>
  </div>
);

export default ExampleComponent;