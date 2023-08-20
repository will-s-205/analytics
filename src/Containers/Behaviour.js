import '../App.scss'
import data from './data.js'

function header() {
    return (
        <div className='header-container'>
            <h4>Behaviour</h4>
            <div className='buttons'>
                <button className='button'>Browsers</button>
                <button className='button'>Decides</button>
            </div>
        </div>
    )
}

function trafficData() {
    return data
        .sort((a, b) => b.sign_ups - a.sign_ups)
        .map(({ country, sign_ups }, index) => {
            return (
                <div className='data' key={index}>
                    <label className='label'>{country}</label>
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

function Behaviour() {
    return (
        <div className='behaviour minor-grid-item'>
            <div className='container'>
                {header()}
                {trafficData()}
                {footer()}
            </div>
        </div>
    )
}

export default Behaviour
