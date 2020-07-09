import React from 'react';
import PropTypes from 'prop-types';

const FailTime = (props) => {
  const {onReplayButtonClick} = props;

  return (
    <section className="result">
      <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/></div>
      <h2 className="result__title">Увы и ах!</h2>
      <p className="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
      <button
        className="replay"
        type="button"
        onClick = {onReplayButtonClick}>
        Попробовать ещё раз</button>
    </section>
  );
};

FailTime.propTypes = {
  onReplayButtonClick: PropTypes.func
};

export default FailTime;