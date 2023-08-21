import '../App.scss'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

function Behaviour() {
    return (
        <div className='behaviour minor-grid-item'>
            <div className='container'>
                <Header title='Behaviour' button1='Browsers' button2='Decides' />
                <Main number={6} data={'country'} />
                <Footer seeAll='See all countries' />
            </div>
        </div>
    )
}

export default Behaviour
