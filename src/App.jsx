import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import GameScreen from "./components/GameScreen";
import ScoreBoard from "./components/ScoreBoard";
import Ranking from "./components/Ranking";

const WORDS = [
  {
    text: "さいな…",
    answer: "らっきょう",
  },
  {
    text: "こんにち…",
    answer: "わんこそば",
  },
];

function App() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [ranking, setRanking] = useState([]);
  const [countdown, setCountdown] = useState(null);
  
  const version = import.meta.env.VITE_APP_VERSION;

  // ランキング読み込み
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("ranking")) || [];
    setRanking(saved);
  }, []);

  // タイマー
  useEffect(() => {
    if (!isPlaying) return;

    if (timeLeft <= 0) {
      finishGame();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  // 問題切り替え
  useEffect(() => {
    if (!isPlaying) return;

    nextWord();

    const wordTimer = setInterval(() => {
      nextWord();
    }, 1500);

    return () => clearInterval(wordTimer);
  }, [isPlaying]);

  // カウントダウン
  useEffect(() => {
  if (countdown === null) return;

  if (countdown === 0) {
    setCountdown(null);
    setIsPlaying(true);
    return;
  }

  const timer = setTimeout(() => {
    setCountdown((prev) => prev - 1);
  }, 1000);

  return () => clearTimeout(timer);
}, [countdown]);

  const nextWord = () => {
    const random = WORDS[Math.floor(Math.random() * WORDS.length)];
    setCurrentWord(random);
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(60);
    setCountdown(3);
  };

  const finishGame = (saveScore = true) => {
    setIsPlaying(false);

  if (!saveScore) return;

  const newRanking = [...ranking, score]
    .sort((a, b) => b - a)
    .slice(0, 5);

  setRanking(newRanking);

  localStorage.setItem("ranking", JSON.stringify(newRanking));
  };

  const handleAnswer = (button) => {
    if (!currentWord) return;

    if (button === currentWord.answer) {
      setScore((prev) => prev + 1);
    }
    else {
      setScore((prev) => prev - 3);
    }
  };

  return (
    <div className="app">

    <div className="version">
      v{version}
    </div>

      {!isPlaying && countdown === null && (
        <>
          <h1>さいならっきょうゲーム</h1>
          <p className="game-description">
            あいさつしよう！
            60秒で何回あいさつできるかな？<br/>
            (あいさつできたら+1 point、できなかったら-3 point)<br/>
            スマホでゲームするときは横画面で！<br/>
            制作背景 <a href="https://github.com/w-usagi/greeting-app/blob/main/README.md">こちら</a> から
          </p>
        </>
      )}
      <ScoreBoard timeLeft={timeLeft} score={score} />

      {countdown !== null ? (
        <div className="countdown">
          {countdown}
        </div>
      ) : !isPlaying ? (
        <button className="start-button" onClick={startGame}>
          START
        </button>
      ) : (
        <GameScreen
          currentWord={currentWord.text}
          onAnswer={handleAnswer}
          onExit={() => finishGame(false)}
          version={version}
        />
      )}

      {!isPlaying && countdown === null && (
        <Ranking ranking={ranking} />
      )}
    </div>
  );
}

export default App;

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
