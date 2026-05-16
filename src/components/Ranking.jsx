function Ranking({ ranking }) {
  return (
    <div className="ranking">
      <h2>ランキング TOP5</h2>

      <ol>
        {ranking.map((score, index) => (
          <li key={index}>
            {score} point
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Ranking;