import '../App.scss'
import { useState } from 'react'
import '../assets/scss/Leaderboard.scss'
import data from './data.js'
import Footer from './Footer'

function Leaderboard() {
    const [dataSet] = useState('email')
    const [isSeeAllClicked, setIsSeeAllClicked] = useState(true)

    function renderLeaderboardHeader() {
        return (
            <div>
                <div className='header-container'>
                    <h4>User leaderboard</h4>
                </div>
                <div className='leaderboard-sub-header'>
                    <span>Email</span>
                    <span className='Friends'>Friends invited</span>
                    <span>Country</span>
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
                            <span className='email'>{email}</span>
                            <span className='invites'>{friends_invites.toLocaleString('en-US')}</span>
                            <span className='country'>{country}</span>
                        </div>
                    </div>
                )
            })
    }

    function seeAll() {
        if (isSeeAllClicked === false) {
            setIsSeeAllClicked(true)
        } else {
            setIsSeeAllClicked(false)
        }
    }

    return (
        <div className='leaderboard minor-grid-item'>
            <div className='container'>
                {renderLeaderboardHeader()}
                {renderLeaderboardData()}
                <Footer data={dataSet} seeAll='See leaderboard' handleButtonClick={seeAll} isClicked={isSeeAllClicked} />
            </div>
        </div>
    )
}

export default Leaderboard
