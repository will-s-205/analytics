import '../App.scss'
import { useEffect, useState } from 'react'

function Header(props) {
  const [button1Clicked, setButton1Clicked] = useState(true)
  const [button2Clicked, setButton2Clicked] = useState(false)

  useEffect(() => {
    console.log('Header - useEffect')
    if (props.isToggled === true) {
      setButton1Clicked(false)
      setButton2Clicked(true)
      console.log('Header - isToggled is true')
    } else if (props.isToggled === false) {
      setButton1Clicked(true)
      setButton2Clicked(false)
      console.log('Header - isToggled is false')
    }
  }, [props.isToggled])

  // const handleButtonClick = () => {
  //   if (props.isToggled === true) {
  //     setButton1Clicked(false)
  //     console.log('Header - Button 1 clicked')
  //   } else if (props.isToggled === false) {
  //     setButton2Clicked(false)
  //     console.log('Header - Button 2 clicked')
  //   }
  // }

  // const handleButton1Click = () => {
  //   setButton1Clicked(true)
  //   setButton2Clicked(false)
  // }

  // const handleButton2Click = () => {
  //   setButton1Clicked(false)
  //   setButton2Clicked(true)
  // }

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
