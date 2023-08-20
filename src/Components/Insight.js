import '../App.scss';
import '../assets/scss/Insight.scss';
import bulb from '../images/bulb.png';
import greenUp from '../images/green-up.png';
import redDown from '../images/red-down.png';

function Insight() {
    return (
        <div className='insights insights-grid-item'>
            <div className='header-insights'>
                <h2>ZooTools insights</h2>
                <p>Making analytics simple and actionable</p>
            </div>
            <div className='insights-info'>
                <div className='insighsts-summary'>
                    <h3>Summary</h3>
                    <div className='insight-tips'>
                        <img className='redDown' src={redDown} alt='bulb' />
                        <p><b>Signups are slowing down.</b> -5% new than last week.</p>
                    </div>
                    <div className='insight-tips'>
                        <img className='greenUp' src={greenUp} alt='bulb' />
                        <p><b>80%</b> of your signups were invited by other members.</p>
                    </div>
                    <div className='insight-tips'>
                        <img className='bulb' src={bulb} alt='bulb' />
                        <p><b>80%</b> of your signups were invited by a friend</p>
                    </div>
                    <div className='insight-tips'>
                        <img className='bulb' src={bulb} alt='bulb' />
                        <p><b>80%</b> of your signups were invited by a friend</p>
                    </div>
                </div>
                <div className='header-recommendation'>
                    <h3>Recommendations</h3>
                    <div className='insight-tips-right'>
                        <p><b>Make sure to promote and <a className='insight-link' href="#" rel="noopener noreferrer">share your form</a></b></p>
                        <p><b>Congrats! This is huge. Keep giving rewards for your users</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Insight;
