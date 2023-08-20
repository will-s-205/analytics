import '../App.scss'
import data from './data.js'

function header() {
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
function trafficData() {
    const maxSignups = data.map(data => data.sign_ups).reduce((a, b) => Math.max(a, b))
    const getPercentage = (currentSignups, maxSignups) => (100 * currentSignups) / maxSignups / (data.length/3) // THE LAST OPERATION IS TO GET THE AVERAGE OF THE 3 GRAPHS FOR BETTER UI EXPERIENCE

    return data
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

function footer() {
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
                {header()}
                {trafficData()}
                {footer()}
            </div>
        </div>
    )
}

export default Traffic
