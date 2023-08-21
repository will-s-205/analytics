import '../App.scss'
import data from './data.js'
import Footer from './Footer'
import Header from './Header'

function renderTrafficHeader() {
    return (
        <div className='header-container'>
            <h4>Traffic</h4>
            <div className='buttons'>
                <button className='button'>Source</button>
                <button className='button'>City</button>
            </div>
        </div>
    )
}

function renderTrafficData() {
    const maxSignups = data.map(data => data.sign_ups).reduce((a, b) => Math.max(a, b))
    const getPercentage = (currentSignups, maxSignups) => (100 * currentSignups) / maxSignups // FUNCTION TO GET THE PERCENTAGE OF SIGNUPS FOR EACH COUNTRY (USED TO SET THE WIDTH OF THE PROGRESS BAR)

    return data
        .slice(0, 6)
        .sort((a, b) => b.sign_ups - a.sign_ups)
        .map(({ faang_company, sign_ups }, index) => {
            return (
                <div className='data' key={index}>
                    <div className='progress-bar' style={{ width: `${getPercentage(sign_ups, maxSignups)}%` }}>
                        <label className='label'>{faang_company}</label>
                    </div>
                    <label className='number'>{sign_ups.toLocaleString('en-US')}</label>
                </div>
            )
        })
}

function renderTrafficfooter() {
    return (
        <div>
            <button className='button'>See traffic sources</button>
        </div>
    )
}

function Traffic() {
    return (
        <div className='traffic minor-grid-item'>
            <div className='container'>
                <Header title='Traffic' button1='Source' button2='City' />
                {renderTrafficData()}
                <Footer button1='See traffic sources' />
            </div>
        </div>
    )
}

export default Traffic
