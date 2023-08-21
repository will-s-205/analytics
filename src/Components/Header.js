import '../App.scss'
import { useState } from 'react'

function Header(props) {
  const [button1Clicked, setButton1Clicked] = useState(true)
  const [button2Clicked, setButton2Clicked] = useState(false)

  const handleButton1Click = () => {
    setButton1Clicked(true)
    setButton2Clicked(false)
  }

  const handleButton2Click = () => {
    setButton2Clicked(true)
    setButton1Clicked(false)
  }

  return (
    <div className='header-container'>
      <h4>{props.title}</h4>
      <div className='buttons'>
        <button
          className='button'
          style={button1Clicked ? { backgroundColor: 'Gainsboro' } : {}}
          onClick={handleButton1Click}
        >{props.button1}</button>
        <button
          className='button'
          style={button2Clicked ? { backgroundColor: 'Gainsboro' } : {}}
          onClick={handleButton2Click}
        >{props.button2}</button>
      </div>
    </div>
  )
}

export default Header
