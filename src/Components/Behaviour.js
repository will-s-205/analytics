import '../App.scss'
import data from './data.js'

function renderTrafficHeader() {
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

function renderBehaviourData() {
    const maxSignups = data.map(data => data.sign_ups).reduce((a, b) => Math.max(a, b))
    const getPercentage = (currentSignups, maxSignups) => (100 * currentSignups) / maxSignups // FUNCTION TO GET THE PERCENTAGE OF SIGNUPS FOR EACH COUNTRY (USED TO SET THE WIDTH OF THE PROGRESS BAR)
    return data
        .slice(0, 6)
        .sort((a, b) => b.sign_ups - a.sign_ups)
        .map(({ country, sign_ups }, index) => {
            return (
                <div className='data' key={index}>
                    <div className='progress-bar' style={{ width: `${getPercentage(sign_ups, maxSignups)}%` }}>
                        <label className='label'>{country}</label>
                    </div>
                    <label className='number'>{sign_ups.toLocaleString('en-US')}</label>
                </div>
            )
        })
}

function renderBehaviourFooter() {
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
                {renderTrafficHeader()}
                {renderBehaviourData()}
                {renderBehaviourFooter()}
            </div>
        </div>
    )
}

export default Behaviour
