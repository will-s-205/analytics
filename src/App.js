import './App.scss';
import Header from './components/Header';
import Insight from './components/Insight';
import Participants from './components/Participants';
import Leaderboard from './components/Leaderboard';
import Traffic from './components/Traffic';
import Locations from './components/Locations';
import Behaviour from './components/Behaviour';
import Footer from './components/Footer';

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
