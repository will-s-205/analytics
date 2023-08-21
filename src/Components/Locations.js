import '../App.scss'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

function Locations() {
    return (
        <div className='location minor-grid-item'>
            <div className='container'>
                <Header title='Signup location' button1='Country' button2='City' />
                <Main number={5} data={'emojiAndCountry'} />
                <Footer seeAll='See all countries' />
            </div>
        </div>
    )
}

export default Locations
