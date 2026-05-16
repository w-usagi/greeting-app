function ScoreBoard({ timeLeft, score }) {
  return (
    <div className="score-board">
      <h2>TIME : {timeLeft}</h2>
      <h2>SCORE : {score}</h2>
    </div>
  );
}

export default ScoreBoard;