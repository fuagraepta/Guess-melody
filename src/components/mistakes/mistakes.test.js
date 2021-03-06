import React from 'react';
import renderer from 'react-test-renderer';

import {Mistakes} from './mistakes.jsx';

describe(`The component is rendered correctly.`, () => {
  it(`Mistakes component correctly renders if all answers correct.`, () => {
    const mistakesElement = renderer
    .create(
        <Mistakes
          mistakes = {0}
          errorCount = {3} />
    );

    expect(mistakesElement).toMatchSnapshot();
  });

  it(`Mistakes component correctly renders if a few answers is incorrect.`, () => {
    const mistakesElement = renderer
    .create(
        <Mistakes
          mistakes = {2}
          errorCount = {3} />
    )
    .toJSON();

    expect(mistakesElement).toMatchSnapshot();
  });
});
