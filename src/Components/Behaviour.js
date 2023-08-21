import '../App.scss'
import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

function Behaviour() {
    const [dataSet, setDataset] = useState('country')
    const [isToggled, setIsToggled] = useState(false)

    function toggleData() {
        if (dataSet === 'country') {
            setDataset('city')
        } else {
            setDataset('country')
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
        <div className='behaviour minor-grid-item'>
            <div className='container'>
                <Header title='Behaviour' button1='Browsers' button2='Decides' handleButtonClick={toggleButtons} isToggled={isToggled} />
                <Main number={6} data={dataSet} />
                <Footer seeAll='See all countries' />
            </div>
        </div>
    )
}

export default Behaviour
