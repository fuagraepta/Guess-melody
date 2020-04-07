import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`The component interactivity`, () => {
  it(`Play a mock-track when user click on play button`, () => {
    const mockTrackSrc = `https://upload.wikimedia.org/wikipedia/commons/6/64/Ugandan_national_anthem%2C_performed_by_the_U.S._Navy_Band.ogg`;

    const playButtonClickHandler = jest.fn();
    const audioPlayer = shallow(<AudioPlayer
      isPlaying={false}
      src = {mockTrackSrc}
      onPlayButtonClick = {playButtonClickHandler}
    />);
    const instance = audioPlayer.instance();

    const playButton = audioPlayer.find(`.track__button`);

    playButton.simulate(`click`);
    expect(playButtonClickHandler).toHaveBeenCalled();
    expect(instance.state.isPlaying).toEqual(true);

    playButton.simulate(`click`);
    expect(playButtonClickHandler).toHaveBeenCalled();
    expect(instance.state.isPlaying).toEqual(false);
  });
});