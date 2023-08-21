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
        displayValue = item.company
      } else if (props.data === 'country') {
        displayValue = item.country
      } else if (props.data === 'emojiAndCountry') {
        displayValue = item.emoji + " " + item.country
      } else if (props.data === 'city') {
        displayValue = item.city
      }
      return (
        <div className='data' key={index}>
          <div className='progress-bar' style={{ width: `${getPercentage(item.sign_ups, maxSignups)}%` }}>
            <span className='span'> {displayValue} </span>
          </div>
          <span className='number'>{item.sign_ups.toLocaleString('en-US')}</span>
        </div>
      )
    })
}

export default Main
