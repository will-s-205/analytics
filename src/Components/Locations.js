import '../App.scss'
import data from './data.js'

function renderTrafficHeader() { // HEADER WITH THE BUTTONS TO SWITCH BETWEEN COUNTRY AND CITY
    return ( // RETURNING THE JSX FOR THE HEADER OF THE LOCATIONS COMPONENT (COUNTRY AND CITY BUTTONS)
        <div className='header-container'> {/* HEADER CONTAINER */}
            <h4>Signup Location</h4> {/* HEADER TITLE OF THE COMPONENT */}
            <div className='buttons'> {/* BUTTONS CONTAINER */}
                <button className='button'>Country</button> {/* COUNTRY BUTTON */}
                <button className='button'>City</button>  {/* CITY BUTTON */}
            </div>
        </div>
    )
}

function renderTrafficData() { // TRAFFIC DATA WITH THE GRAPH AND THE NUMBER OF SIGNUPS FOR EACH COUNTRY (TOP 5)
    const maxSignups = data.map(data => data.sign_ups).reduce((a, b) => Math.max(a, b)) // GETTING THE MAXIMUM NUMBER OF SIGNUPS TO SET THE WIDTH OF THE PROGRESS BAR (100% = MAX SIGNUPS)
    const getPercentage = (currentSignups, maxSignups) => (100 * currentSignups) / maxSignups / (data.length / 3) // THE LAST OPERATION IS TO GET THE AVERAGE OF THE 3 GRAPHS FOR BETTER UI EXPERIENCE (100% = MAX SIGNUPS / 3)

    return data
        .slice(0, 5) // TOP 5 COUNTRIES WITH MOST SIGNUPS
        .sort((a, b) => b.sign_ups - a.sign_ups) // SORT DESCENDING BY SIGNUPS NUMBER (HIGHEST FIRST)
        .map(({ emoji, country, sign_ups }, index) => { // DESTRUCTURING THE DATA ARRAY TO GET THE VALUES WE NEED FOR THE GRAPH (EMOJI, COUNTRY, SIGNUPS)
            return ( // RETURNING THE JSX FOR EACH GRAPH
                <div className='data' key={index}> {/* KEY IS THE INDEX OF THE ARRAY */}
                    <div className='progress-bar' style={{ width: `${getPercentage(sign_ups, maxSignups)}%` }}> {/* INLINE STYLE TO SET THE WIDTH OF THE PROGRESS BAR */}
                        <label className='emoji-country'>{emoji} {country}</label> {/* EMOJI AND COUNTRY NAME */}
                    </div>
                    <label className='number'>{sign_ups.toLocaleString('en-US')}</label> {/* SIGNUPS NUMBER */}
                </div>
            )
        })
}

function renderTrafficFooter() { // FOOTER WITH THE BUTTON TO SEE ALL COUNTRIES
    return ( // RETURNING THE JSX FOR THE FOOTER OF THE LOCATIONS COMPONENT (BUTTON TO SEE ALL COUNTRIES)
        <div>
            <button className='button'>See all countries</button> {/* BUTTON TO SEE ALL COUNTRIES */}
        </div>
    )
}

function Locations() { // LOCATIONS COMPONENT (COUNTRY AND CITY BUTTONS, GRAPH AND NUMBER OF SIGNUPS FOR EACH COUNTRY (TOP 5) AND BUTTON TO SEE ALL COUNTRIES)
    return ( // RETURNING THE JSX FOR THE LOCATIONS COMPONENT (COUNTRY AND CITY BUTTONS, GRAPH AND NUMBER OF SIGNUPS FOR EACH COUNTRY (TOP 5) AND BUTTON TO SEE ALL COUNTRIES)
        <div className='location minor-grid-item'> {/* LOCATIONS COMPONENT CONTAINER */}
            <div className='container'> {/* LOCATIONS COMPONENT CONTAINER */}
                {renderTrafficHeader()} {/* HEADER WITH THE BUTTONS TO SWITCH BETWEEN COUNTRY AND CITY */}
                {renderTrafficData()} {/* TRAFFIC DATA WITH THE GRAPH AND THE NUMBER OF SIGNUPS FOR EACH COUNTRY (TOP 5) */}
                {renderTrafficFooter()} {/* FOOTER WITH THE BUTTON TO SEE ALL COUNTRIES */}
            </div>
        </div>
    )
}

export default Locations // EXPORTING LOCATIONS COMPONENT (COUNTRY AND CITY BUTTONS, GRAPH AND NUMBER OF SIGNUPS FOR EACH COUNTRY (TOP 5) AND BUTTON TO SEE ALL COUNTRIES)
