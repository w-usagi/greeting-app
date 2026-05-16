import speakerImage from "../assets/ANNX_PlanB.JPG";

function GameScreen({ currentWord, onAnswer, version }) {
  return (
    <div className="game-screen">
      <div className="version">
        v{version}
      </div>

      <div className="speaker-area">

        <img
          src={speakerImage}
          alt="speaker"
          className="speaker-image"
        />

        <div className="speech-bubble">
          {currentWord}
        </div>

      </div>

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