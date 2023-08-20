import '../App.scss'
import '../assets/scss/Participants.scss'
import data from './data.js'
import React, { useState, useCallback } from "react"
import { BarChart, Bar, Cell, ResponsiveContainer } from "recharts"
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import participants from '../images/participants.png';

function Participants() {
    const maxSignups = data.map(data => data.sign_ups).reduce((a, b) => a + b, 0)
    const [activeIndex, setActiveIndex] = useState(0)
    const activeItem = data[activeIndex]

    const handleClick = useCallback(
        (entry, index) => { // DO NOT REMOVE ENTRY FROM CALLBACK FUNCTION
            setActiveIndex(index)
        },
        [setActiveIndex]
    );

    return (
        <div className='participants participants-grid-item'>
            <div className='participants-title'>
                <div className='participants-header'>
                    <lebel className='participants-label'>{maxSignups.toLocaleString()}</lebel>
                    <img className='participants-image' src={participants} alt='Participants' />
                </div>
                <p className='participants-sub'>Participants</p>
            </div>
            <div>
                <a data-tooltip-id="my-tooltip" data-tooltip-content={`${activeItem.faang_company}: ${activeItem.sign_ups}` + " signups"}>
                    <ResponsiveContainer width="100%" height={100}>
                        <BarChart width={150} height={40} data={data}>
                            <Bar dataKey="sign_ups" onMouseEnter={handleClick}>
                                {data
                                    .map((index) => (
                                        <Cell className="bar" cursor="pointer" key={`cell-${index}`} />
                                    ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </a>
                <Tooltip id="my-tooltip" />
            </div>
        </div>
    );
}

export default Participants
