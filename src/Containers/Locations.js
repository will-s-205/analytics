import '../App.scss'
import data from './data.js'

function header() {
    return (
        <div className='header-container'>
            <h4>Signup Location</h4>
            <div className='buttons'>
                <button className='button'>Country</button>
                <button className='button'>City</button>
            </div>
        </div>
    )
}

function trafficData() {
    return data
        .sort((a, b) => b.sign_ups - a.sign_ups)
        .map(({ emoji, country, sign_ups }, index) => {
            return (
                <div className='data' key={index}>
                    <label className='emoji'>{emoji}</label>
                    <label className='country'>{country}</label>
                    <label className='number'>{sign_ups.toLocaleString('en-US')}</label>
                </div>
            )
        })
}

function footer() {
    return (
        <div>
            <button className='button'>See all countries</button>
        </div>
    )
}

function Locations() {
    return (
        <div className='location minor-grid-item'>
            <div className='container'>
                {header()}
                {trafficData()}
                {footer()}
            </div>
        </div>
    )
}

export default Locations
