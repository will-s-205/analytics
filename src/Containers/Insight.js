import '../App.scss';
import data from './data.js';

function Insight() {
    return (
        <div className='insights insights-grid-item'>
            <div className='header-insights'>
                <h2>ZooTools insights</h2>
                <p>Making analytics simple and actionable</p>
            </div>
            <div className='insights-info'>
                <div className='insights-summary'>
                    <h3>Summary</h3>
                    <p>Signups are slowing down. -5% new than last week.</p>
                    <p>80% of your signups were invited by other members.</p>
                    <p>80% of your signups were invited by a friend</p>
                    <p>80% of your signups were invited by a friend</p>
                </div>
                <div className='header-recommendation'>
                    <h3>Recommendations</h3>
                    <p>Make sure to promote and <a href="#" rel="noopener noreferrer">share your form</a></p>
                    <p>Congrats! This is huge. Keep giving rewards for your users</p>
                </div>
            </div>
        </div>
    );
}

export default Insight;
