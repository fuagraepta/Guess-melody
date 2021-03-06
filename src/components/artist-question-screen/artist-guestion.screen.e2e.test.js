import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ArtistQuestionScreen from './artist-question-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

const mockQuestion = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/6/64
        /Ugandan_national_anthem%2C_performed_by_the_U.S._Navy_Band.ogg`,
  },
  answers: [
    {
      picture: `http://placehold.it/134x134`,
      artist: `John Snow`
    },
    {
      picture: `http://placehold.it/134x134`,
      artist: `Jack Daniels`
    },
    {
      picture: `http://placehold.it/134x134`,
      artist: `Jim Beam`
    },
  ]
};
const renderPlayer = jest.fn();

let radioInputCheckHandler;
let artistQuestionScreen;
let inputs;

beforeEach(() => {
  radioInputCheckHandler = jest.fn();
  artistQuestionScreen = shallow(
      <ArtistQuestionScreen
        screenIndex = {0}
        question = {mockQuestion}
        onAnswer = {radioInputCheckHandler}
        renderPlayer = {renderPlayer}
      />
  );
  inputs = artistQuestionScreen.find(`.artist__input`);
});

describe(`Before changing input.`, () => {
  it(`Callback should not be called.`, () => {
    expect(radioInputCheckHandler).toHaveBeenCalledTimes(0);
  });
});

describe(`After changing input.`, () => {
  it(`Should selected the appropriate answer.`, () => {

    inputs.at(0).simulate(`click`);

    expect(radioInputCheckHandler).toHaveBeenCalledTimes(1);
    expect(radioInputCheckHandler.mock.calls[0][0]).toEqual(mockQuestion.answers[0]);

    inputs.at(1).simulate(`click`);

    expect(radioInputCheckHandler).toHaveBeenCalledTimes(2);
    expect(radioInputCheckHandler.mock.calls[1][0]).toEqual(mockQuestion.answers[1]);
  });
});
