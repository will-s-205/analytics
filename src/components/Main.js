import '../App.scss'
import data from './data.js'

function Main(props) {
  const maxSignups = data.map(data => data.sign_ups).reduce((a, b) => Math.max(a, b))
  // FUNCTION TO GET THE PERCENTAGE OF SIGNUPS FOR EACH COUNTRY (USED TO SET THE WIDTH OF THE PROGRESS BAR)
  const getPercentage = (currentSignups, maxSignups) => (100 * currentSignups) / maxSignups

  return data
    .slice(0, props.number)
    .sort((a, b) => b.sign_ups - a.sign_ups)
    .map((item, index) => {
      let displayValue = ''
      // DEPENDING ON THE PROPS PASSED, DISPLAY THE COMPANY OR COUNTRY OR ELSE
      if (props.data === 'company') {
        displayValue = <span className='span'> {item.company} </span>
      }
      else if (props.data === 'country') {
        displayValue = <span className='span'> {item.country} </span>
      }
      else if (props.data === 'emojiAndCountry') {
        displayValue = <span className='span'> {item.emoji + " " + item.country} </span>
      }
      else if (props.data === 'emojiAndCity') {
        displayValue = <span className='span'> {item.emoji + " " + item.city} </span>
      }
      else if (props.data === 'city') {
        displayValue = <span className='span'> {item.city} </span>
      }
      else if (props.data === 'browser') {
        displayValue = <span className='span'> {item.browser} </span>
      }
      else if (props.data === 'leaderboard') {
        displayValue = <span className='span'> {item.browser} </span>
      }
      return (
        <div className='data' key={index}>
          <div className='progress-bar' style={{ width: `${getPercentage(item.sign_ups, maxSignups)}%` }}>
            {displayValue}
          </div>
          <span className='number'>{item.sign_ups.toLocaleString('en-US')}</span>
        </div>
      )
    })
}

export default Main
