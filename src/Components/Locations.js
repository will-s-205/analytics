import '../App.scss'
import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

function Locations() {
    const [dataSet, setDataset] = useState('emojiAndCountry')
    const [isToggled, setIsToggled] = useState(false)

    function toggleData() {
        if (dataSet === 'emojiAndCountry') {
            setDataset('emojiAndCity')
        } else {
            setDataset('emojiAndCountry')
        }
    }

    function toggleButtons() {
        if (isToggled === true) {
            setIsToggled(false)
            toggleData()
        } else {
            setIsToggled(true)
            toggleData()
        }
    }

    return (
        <div className='location minor-grid-item'>
            <div className='container'>
                <Header title='Signup location' button1='Country' button2='City' handleButtonClick={toggleButtons} isToggled={isToggled} />
                <Main number={5} data={dataSet} />
                <Footer seeAll='See all countries' />
            </div>
        </div>
    )
}

export default Locations
