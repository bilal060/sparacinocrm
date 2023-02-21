import React from 'react'
import {CustomCard} from '../card'
import DownIcon from '../images/downIcon'
import UpIcon from '../images/upIcon'

const activity = [
    {
        name: 'Calls Completed',
        noOfActivity: 127,
        performance: 14
    },
    {
        name: 'Contact Reached',
        noOfActivity: 68,
        performance: -2
    },
    {
        name: 'Meeting Booked',
        noOfActivity: 41,
        performance: +14
    },
]
const Activity = () => {
    return (
        <>
            {activity.map((data, index) => {
                return (
                    <div className="col-lg-4 col-md-6 pb-lg-0 pb-5" key={index}>
                        <CustomCard className="custom-card p-4">
                            <p className="custom-card-title mb-3 ">{data.name}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="custom-card-figure">{data.noOfActivity}</span>
                                {data.performance > 0 ?
                                    <span className="custom-card-increament d-flex align-items-center">
                                        <span className='pr-1'>{data.performance}%</span>
                                        <UpIcon />
                                    </span>
                                    :
                                    <span className="custom-card-decreament d-flex align-items-center">
                                        <span className='pr-1'>{data.performance}%</span>
                                        <DownIcon />
                                    </span>
                                }
                            </div>
                        </CustomCard>
                    </div>
                )
            })}
        </>
    )
}

export default Activity