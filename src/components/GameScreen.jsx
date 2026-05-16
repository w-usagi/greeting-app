function GameScreen({ currentWord, onAnswer, version }) {
  return (
    <div className="game-screen">

        <div className="version">
            v{version}
        </div>

      <div className="word">{currentWord}</div>

      <div className="buttons">
        <button onClick={() => onAnswer("らっきょう")}>
          らっきょう
        </button>

        <button onClick={() => onAnswer("わんこそば")}>
          わんこそば
        </button>
      </div>
    </div>
  );
}

export default GameScreen;