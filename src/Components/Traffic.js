import '../App.scss'
import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

function Traffic() {
    const [dataSet, setDataset] = useState('company')
    const [isButtonsToggled, setIsButtonsToggled] = useState(false)
    const [isSeeAllClicked, setIsSeeAllClicked] = useState(true)

    function toggleData() {
        if (dataSet === 'company') {
            setDataset('city')
        } else {
            setDataset('company')
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
        <div className='traffic minor-grid-item'>
            <div className='container'>
                <Header title='Traffic' button1='Source' button2='City' handleButtonClick={toggleButtons} isToggled={isButtonsToggled} />
                <Main data={dataSet} number={6} />
                <Footer data={dataSet} seeAll='See traffic sources' handleButtonClick={seeAll} isClicked={isSeeAllClicked} />
            </div>
        </div>
    )
}

export default Traffic
