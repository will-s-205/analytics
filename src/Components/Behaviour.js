import '../App.scss'
import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

function Behaviour() {
    const [dataSet, setDataset] = useState('browser')
    const [isButtonsToggled, setIsButtonsToggled] = useState(false)
    const [isSeeAllClicked, setIsSeeAllClicked] = useState(true)

    function toggleData() {
        if (dataSet === 'browser') {
            setDataset('company')
        } else {
            setDataset('browser')
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
        <div className='behaviour minor-grid-item'>
            <div className='container'>
                <Header title='Behaviour' button1='Browsers' button2='Decides' handleButtonClick={toggleButtons} isToggled={isButtonsToggled} />
                <Main number={6} data={dataSet} />
                <Footer data={dataSet} seeAll='See all countries' handleButtonClick={seeAll} isClicked={isSeeAllClicked} />
            </div>
        </div>
    )
}

export default Behaviour
