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
    const maxProgress = 10000
    const getPercentage = (sign_ups, maxProgress) => (100 * sign_ups) / maxProgress
    const progressBar = (sign_ups) => {
        const percentage = (sign_ups / 10000) * 100
        return (
            <div className='progress-bar'>
                <div className='progress' style={{ width: `${percentage}%` }}></div>
            </div>
        )
    }

    return data
        .sort((a, b) => b.sign_ups - a.sign_ups)
        .map(({ faang_company, sign_ups }, index) => {
            return (
                <div className='data' key={index}>
                    {/* <div
                        className='progress-bar'
                    >
                        <div className='progress-bar-filled' style={{ width: `${getPercentage(sign_ups, maxProgress)}%` }}></div>
                    </div> */}
                    <label className='label'>{faang_company}</label>
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
