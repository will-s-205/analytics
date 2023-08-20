import './App.scss';
import Header from './Components/Header';
import Insight from './Components/Insight';
import Participants from './Components/Participants';
import Leaderboard from './Components/Leaderboard';
import Traffic from './Components/Traffic';
import Locations from './Components/Locations';
import Behaviour from './Components/Behaviour';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <div className="App">
        <div className="main">
            <Header />
          <div className='wrapper grid'>
            <Participants />
            <Insight />
            <Leaderboard />
            <Traffic />
            <Locations />
            <Behaviour />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
