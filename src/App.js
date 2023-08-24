import './App.scss'
import Title from './components/Title'
import Insight from './components/Insight'
import Participants from './components/Participants'
import Leaderboard from './components/Leaderboard'
import Traffic from './components/Traffic'
import Locations from './components/Locations'
import Behaviour from './components/Behaviour'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <div className="App">
        <div className="main">
          <Title title="Summer referral competition" />
          <div className='wrapper grid'>
            <Participants />
            <Insight />
            <Leaderboard />
            <Traffic />
            <Locations />
            <Behaviour />
          </div>
        </div>
        <Contact />
      </div>
    </div>
  )
}

export default App
