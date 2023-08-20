import './App.scss';
import Header from './Containers/Header';
import Insight from './Containers/Insight';
import Participants from './Containers/Participants';
import Leaderboard from './Containers/Leaderboard';
import Traffic from './Containers/Traffic';
import Locations from './Containers/Locations';
import Behaviour from './Containers/Behaviour';
import Footer from './Containers/Footer';

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
