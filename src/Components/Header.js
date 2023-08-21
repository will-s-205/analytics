import '../App.scss'
import { useEffect, useState } from 'react'

function Header(props) {
  const [button1Clicked, setButton1Clicked] = useState(true)
  const [button2Clicked, setButton2Clicked] = useState(false)

  useEffect(() => {
    if (props.isToggled === true) {
      setButton1Clicked(false)
      setButton2Clicked(true)
    } else if (props.isToggled === false) {
      setButton1Clicked(true)
      setButton2Clicked(false)
    }
  }, [props.isToggled])

  return (
    <div className='header-container'>
      <h4>{props.title}</h4>
      <div className='buttons'>
        <button
          className='button'
          style={button1Clicked ? { backgroundColor: 'Gainsboro' } : {}}
          onClick={props.handleButtonClick}
        >{props.button1}</button>
        <button
          className='button'
          style={button2Clicked ? { backgroundColor: 'Gainsboro' } : {}}
          onClick={props.handleButtonClick}
        >{props.button2}</button>
      </div>
    </div>
  )
}

export default Header
