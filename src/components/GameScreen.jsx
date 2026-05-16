function GameScreen({ currentWord, onAnswer }) {
  return (
    <div className="game-screen">
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