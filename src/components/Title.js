import '../App.scss'
import '../assets/scss/Title.scss'
import { useState } from 'react'

export function Title({ title }) {
  const [button1Clicked, setButton1Clicked] = useState(true)
  const [button2Clicked, setButton2Clicked] = useState(false)
  const [button3Clicked, setButton3Clicked] = useState(false)
  const [button4Clicked, setButton4Clicked] = useState(false)

  const handleButton1Click = () => {
    setButton1Clicked(true)
    setButton2Clicked(false)
    setButton3Clicked(false)
    setButton4Clicked(false)
  }

  const handleButton2Click = () => {
    setButton1Clicked(false)
    setButton2Clicked(true)
    setButton3Clicked(false)
    setButton4Clicked(false)
  }
  const handleButton3Click = () => {
    setButton1Clicked(false)
    setButton2Clicked(false)
    setButton3Clicked(true)
    setButton4Clicked(false)
  }

  const handleButton4Click = () => {
    setButton1Clicked(false)
    setButton2Clicked(false)
    setButton3Clicked(false)
    setButton4Clicked(true)
  }

  return (
    <div className="header-main">
      <h1 className="title">{title}</h1>
      <div className="filter-days-bar">
        <button
          className='button'
          style={button1Clicked ? { backgroundColor: 'Gainsboro' } : {}}
          onClick={handleButton1Click}
        >1h</button>
        <button
          className='button'
          style={button2Clicked ? { backgroundColor: 'Gainsboro' } : {}}
          onClick={handleButton2Click}
        >24h</button>
        <button
          className='button'
          style={button3Clicked ? { backgroundColor: 'Gainsboro' } : {}}
          onClick={handleButton3Click}
        >30d</button>
        <button
          className='button'
          style={button4Clicked ? { backgroundColor: 'Gainsboro' } : {}}
          onClick={handleButton4Click}
        >60d</button>
      </div>
    </div>
  );
}

export default Title
