import React from 'react'
import CustomCard from '../card'
import Heading from '../heading'
import DownIcon from '../images/downIcon'
import UpIcon from '../images/upIcon'
import HomePageSelect from '../selects/homePageSelect'

const sales = [
    {
        name: 'Leads',
        noOfActivity: 588,
        performance: +5
    },
    {
        name: 'Marketing',
        noOfActivity: 78,
        performance: +8
    },
    {
        name: 'Contract Finalization',
        noOfActivity: 41,
        performance: +12
    },
]
const Sales = () => {
    return (
        <>

            {sales.map((data, index) => {
                return (
                    <div className="col-lg-4 col-md-6 mb-lg-0 mb-5" key={index}>
                        <CustomCard >
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
                            <button className="view-all-btn">View All</button>
                        </CustomCard>
                    </div>
                )
            })}

        </>
    )
}

export default Sales