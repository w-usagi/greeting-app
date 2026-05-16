function Ranking({ ranking }) {
  return (
    <div className="ranking">
      <h2>ランキング TOP5</h2>

        <div className="ranking-list">
        {ranking.map((score, index) => (
          <div key={index} className="ranking-item">

            <span className="rank-number">
              {index + 1}位
            </span>

            <span className="rank-score">
              {score}
            </span>

            <span className="rank-point">
              point
            </span>

          </div>
        ))}
      </div>

      {/* <ol>
        {ranking.map((score, index) => (
          <li key={index}>
            {score} point
          </li>
        ))}
      </ol> */}
    </div>
  );
}

export default Ranking;