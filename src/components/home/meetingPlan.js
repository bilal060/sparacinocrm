import React from 'react'
import CustomCard from '../card'
import GreaterThanIcon from '../images/greaterThanIcon'
import LessThanIcon from '../images/lessThanIcon'

const events = [
    {
        name: 'Sarah',
        startTime: '8:00',
        endTime: '9:00',
    },
    {
        name: 'James',
        startTime: '9:00',
        endTime: '10:00',
    },
    {
        name: 'Tony',
        startTime: '10:00',
        endTime: '11:30',
    },
    {
        name: 'Jason',
        startTime: '12:00',
        endTime: '1:00',
    },
]
const MeetingPlan = () => {
    return (
        <CustomCard>
            <div className="row justify-content-center p-3">
                <div className="col-xl-10 col-lg-12 col-sm-6 p-0">
                    <div className="d-flex align-items-center justify-content-between border-radius-6 bg-gray-100 h-28px"
                    >
                        <div
                            className="border-right border-white h-100 d-flex justify-content-center align-items-center px-3">
                            <LessThanIcon />

                        </div>
                        <div className="">
                            <input type="date" className="bg-transparent border-0" />
                        </div>
                        <div
                            className="border-left border-white h-100 d-flex justify-content-center align-items-center px-3">
                            <GreaterThanIcon />

                        </div>
                    </div>
                </div>
            </div>
            <div id='events'>
                {events.map((data, index) => {
                    return (
                        <div key={index} className="border-radius-4 bg-orange-100 event-meeting mt-2">
                            <p className="event-meeting-time">{data.startTime} - {data.endTime}</p>
                            <p className="event-meeting-title">Meet {data.name}</p>
                        </div>
                    )
                })}
            </div>
        </CustomCard>)
}

export default MeetingPlan