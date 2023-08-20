import '../App.scss';
import data from './data.js';

function trafficData() {

    return data
        // .slice(0, 5)
        .sort((a, b) => b.sign_ups - a.sign_ups)
        .map(({ faang_company, sign_ups }) => {
            return (
                <div className='data'>
                    <label className='label'>{faang_company}</label>
                    <label className='number'>{sign_ups.toLocaleString('en-US')}</label>
                </div>
            )
        })
}

function Traffic() {
    return (
        <div className='traffic minor-grid-item'>

            <div className='header-container'>
                <h4>Traffic</h4>
                <div className='buttons'>
                    <button className='button'>Source</button>
                    <button className='button'>City</button>
                </div>
            </div>

            <div className='select'>
                {trafficData()}
            </div>

            <button className='button'>See traffic sources</button>
        </div>
    );
}

export default Traffic;
