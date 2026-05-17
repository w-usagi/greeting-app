import speakerImage from "../assets/ANNX_PlanB.JPG";
import exitImage from "../assets/zzz_cicada.jpg";

function GameScreen({ currentWord, onAnswer, onExit, version }) {
  return (
    <div className="game-screen">
      <button
        className="exit-button"
        onClick={() => {
          if (window.confirm("おやすミンミンゼミ")) {
            onExit();
          }
        }}
      >
        <img
          src={exitImage}
          alt="exit"
          className="exit-image"
        />
      </button>
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