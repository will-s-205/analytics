import '../App.scss'
import data from './data.js'
import { useState, useEffect } from 'react'

function Main(props) {
  const url = 'https://gist.githubusercontent.com/will-s-205/fa89791243cbfa175d062181d437928/raw/7de6c202a661b2809efa6f55e22b8d33998c3c06/data.json'
  // INITIALIZE THE STATE WITH AN EMPTY ARRAY
  const [dataset, setDataset] = useState([''])

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setDataset(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        // PLAN B - IS TO USE THE DATA FROM THE LOCAL FILE OR LOCAL STORAGE
        setDataset(data)
      })
  }, []) // EMPTY DEPENDENCY ARRAY MEANS THIS USEEFFECT RUNS ONCE WHEN COMPONENT MOUNTS

  const maxSignups = dataset.map(data => data.sign_ups).reduce((a, b) => Math.max(a, b))
  // FUNCTION TO GET THE PERCENTAGE OF SIGNUPS FOR EACH COUNTRY (USED TO SET THE WIDTH OF THE PROGRESS BAR)
  const getPercentage = (currentSignups, maxSignups) => (100 * currentSignups) / maxSignups

  return dataset
    // SLICE THE DATA TO DISPLAY ONLY THE NUMBER OF ITEMS PASSED AS PROPS
    .slice(0, props.number)
    // SORT THE DATA IN DESCENDING ORDER
    .sort((a, b) => b.sign_ups - a.sign_ups)
    // MAP THROUGH THE DATA AND DISPLAY THE PROGRESS BAR
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
      else if (props.data === 'emails') {
        displayValue = <span className='emails'> {item.browser} </span>
      }
      return (
        <div className='data' key={index}>
          <div className='progress-bar' style={{ width: `${getPercentage(item.sign_ups, maxSignups)}%` }}>
            {displayValue}
          </div>
          {/* QUESTION MARK BELOW IS TO CHECK IF THE VALUE IS NUMBER OR UNDEFINED */}
          <span className='number'>{item.sign_ups?.toLocaleString('en-US')}</span>
        </div>
      )
    })
}

export default Main
