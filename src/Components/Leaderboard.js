import '../App.scss'
import data from './data.js'
import '../assets/scss/Leaderboard.scss'

function renderLeaderboardHeader() {
    return (
        <div>
            <div className='header-container'>
                <h4>User leaderboard</h4>
            </div>
            <div className='leaderboard-sub-header'>
                <label>Email</label>
                <label className='Friends'>Friends invited</label>
                <label>Country</label>
            </div>
        </div>
    )
}

function renderLeaderboardData() {
    return data
        .slice(0, 4)
        .sort((a, b) => b.friends_invites - a.friends_invites)
        .map(({ email, friends_invites, country }, index) => {
            return (
                <div key={index}>

                    <div className='data'>
                        <label className='email'>{email}</label>
                        <label className='invites'>{friends_invites.toLocaleString('en-US')}</label>
                        <label className='country'>{country}</label>
                    </div>
                </div>
            )
        })
}

function renderLeaderboardFooter() {
    return (
        <div>
            <button className='button'>See all countries</button>
        </div>
    )
}

function Leaderboard() {
    return (
        <div className='leaderboard minor-grid-item'>
            <div className='container'>
                {renderLeaderboardHeader()}
                {renderLeaderboardData()}
                {renderLeaderboardFooter()}
            </div>
        </div>
    );
}

export default Leaderboard
