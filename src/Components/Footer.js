import '../App.scss'
import data from './data.js'
import { useEffect, useState } from 'react'

function Footer(props) {
  const [isFooterClicked, setIsFooterClicked] = useState(false)
  const styles = { backgroundColor: isFooterClicked ? 'gray' : 'Gainsboro' }
  const displayNone = { display: isFooterClicked ? '' : 'none' }

  useEffect(() => {
    if (props.isClicked === true) {
      setIsFooterClicked(false)
    }
    else if (props.isClicked === false) {
      setIsFooterClicked(true)
    }
  }, [props.isClicked])

  function renderPopup() {
    const maxSignups = data.map(data => data.sign_ups).reduce((a, b) => Math.max(a, b))
    // FUNCTION TO GET THE PERCENTAGE OF SIGNUPS FOR EACH COUNTRY (USED TO SET THE WIDTH OF THE PROGRESS BAR)
    const getPercentage = (currentSignups, maxSignups) => (100 * currentSignups) / maxSignups

    return data
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
        // SPECIAL CASE - SEE ALL EMAILS
        else if (props.data === 'email') {
          displayValue = <span className='email'> {item.email} </span>
          return (
            <div className='data' key={index}>
              {displayValue}
            </div>
          )
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

  return (
    <div>
      <button
        className='button footer-button'
        style={styles}
        onClick={props.handleButtonClick}
      >{props.seeAll}</button>
      <div
        className='popup'
        style={displayNone}
        onClick={() => setIsFooterClicked(false)}
      >{renderPopup()}
      </div>
    </div>
  );
}

export default Footer
