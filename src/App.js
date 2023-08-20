import './App.scss';

console.log();
console.log("\uD83C\uDDE7\uD83C\uDDF7 Brazil");

function App() {
  return (
    <div>
      <div className="App">

        <div className="header">
          <h1>Summer referral competition</h1>
          <div className="filter-days-bar"></div>
        </div>

        <div className="main">
          <div className='wrapper grid'>
            <div className='participants participants-grid-item'></div>
            <div className='insights insights-grid-item'></div>
            <div className='leaderboard minor-grid-item'>
              <p>User leaderboard</p>
            </div>
            <div className='traffic minor-grid-item'>
              <p>Traffic</p>
            </div>
            <div className='location minor-grid-item'>
              <p>Sign Up locations</p>
            </div>
            <div className='behaviour minor-grid-item'>
              <p>Behaviour</p>
            </div>
          </div>
        </div>

        {/* <div className="footer">
          <p>by William Step</p>
        </div> */}
      </div>
    </div>
  );
}

export default App;
