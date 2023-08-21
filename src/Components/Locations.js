import '../App.scss'
import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

function Locations() {
    const [dataSet, setDataset] = useState('emojiAndCountry')
    const [isButtonsToggled, setIsButtonsToggled] = useState(false)
    const [isSeeAllClicked, setIsSeeAllClicked] = useState(true)

    function toggleData() {
        if (dataSet === 'emojiAndCountry') {
            setDataset('emojiAndCity')
        } else {
            setDataset('emojiAndCountry')
        }
    }

    function toggleButtons() {
        if (isButtonsToggled === true) {
            setIsButtonsToggled(false)
            toggleData()
        } else {
            setIsButtonsToggled(true)
            toggleData()
        }
    }

    function seeAll() {
        if (isSeeAllClicked === false) {
            setIsSeeAllClicked(true)
        } else {
            setIsSeeAllClicked(false)
        }
    }

    return (
        <div className='location minor-grid-item'>
            <div className='container'>
                <Header title='Signup location' button1='Country' button2='City' handleButtonClick={toggleButtons} isToggled={isButtonsToggled} />
                <Main number={5} data={dataSet} />
                <Footer data={dataSet} seeAll='See all countries' handleButtonClick={seeAll} isClicked={isSeeAllClicked} />
            </div>
        </div>
    )
}

export default Locations
