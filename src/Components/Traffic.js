import '../App.scss'
import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

function Traffic() {
    const [dataSet, setDataset] = useState('company')
    const [isToggled, setIsToggled] = useState(false)

    function toggleData() {
        if (dataSet === 'company') {
            setDataset('city')
        } else {
            setDataset('company')
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
        <div className='traffic minor-grid-item'>
            <div className='container'>
                <Header title='Traffic' button1='Source' button2='City' handleButtonClick={toggleButtons} isToggled={isToggled} />
                <button onClick={toggleData}>Toggle Data</button>
                <Main
                    number={6}
                    data={dataSet}
                    // onClick={toggleData}
                    isToggled={false}
                />
                <Footer seeAll='See traffic sources' />
            </div>
        </div>
    )
}

export default Traffic
