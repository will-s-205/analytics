import '../App.scss'
import data from './data.js'
import React, { useState, useCallback } from "react"
import { BarChart, Bar, Cell, ResponsiveContainer } from "recharts"
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

function Participants() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeItem = data[activeIndex];

    const handleClick = useCallback(
        (entry, index) => {
            setActiveIndex(index)
        },
        [setActiveIndex]
    );

    console.log(data);
    return (
        <div className='participants participants-grid-item'>
            <div className='participants-title'>
                {/* <p>100,000</p>
            <p>Participants</p> */}
            </div>
            <div style={{ width: '100%' }}>
                <p>Click each rectangle </p>
                <a data-tooltip-id="my-tooltip" data-tooltip-content={`Uv of "${activeItem.faang_company}": ${activeItem.sign_ups}`}>
                    <ResponsiveContainer width="100%" height={100}>
                        <BarChart width={150} height={40} data={data}>
                            <Bar dataKey="sign_ups" onMouseEnter={handleClick}>
                                {data.map((index) => (
                                    <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} />
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

export default Participants;
