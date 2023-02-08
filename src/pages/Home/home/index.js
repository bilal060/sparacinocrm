import React from 'react'
import CustomCard from '../../../components/card'
import UpIcon from '../../../components/images/upIcon'
import DownIcon from '../../../components/images/downIcon'
import Heading from '../../../components/heading'
import HomePageSelect from '../../../components/selects/homePageSelect'

const activity = [
    {
        name: 'Calls Completed',
        noOfActivity: 127,
        percentage: 14
    },
    {
        name: 'Contact Reached',
        noOfActivity: 68,
        percentage: -2
    },
    {
        name: 'Meeting Booked',
        noOfActivity: 31,
        percentage: 14
    },
]
const sales = [
    {
        name: 'Calls Completed',
        noOfActivity: 127,
        percentage: 14
    },
    {
        name: 'Contact Reached',
        noOfActivity: 68,
        percentage: -2
    },
    {
        name: 'Meeting Booked',
        noOfActivity: 31,
        percentage: 14
    },

]
const HomePage = () => {
    return (
        <>
            <div className="custom-main-content mt-5 main-padding">
                <div className="custom-activity container-fluid p-0 ">
                    <div className="row">
                        <div className="col-3">
                            <Heading>Activity</Heading>
                        </div>
                        <div className="col-9 text-right">
                            <form action="#" className="m-0">
                                <HomePageSelect myname="week" myid="custom-week" myclassName="custom-select-form mb-3">
                                    <option value="This Week">This Week</option>
                                    <option value="Week">Week</option>
                                </HomePageSelect>
                            </form>
                        </div>
                    </div>
                    <div className="row pt-2">
                        {activity.map((data, index) => {
                            return (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <CustomCard>
                                        <p className="custom-card-title mb-3 ">{data.name}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="custom-card-figure">{data.noOfActivity}</span>
                                            {data.percentage > 0 ?
                                                <span className="custom-card-increament  d-flex">
                                                    <span className='pr-1'>{data.percentage}%</span>
                                                    <UpIcon />
                                                </span>
                                                :
                                                <span className="custom-card-decreament d-flex">
                                                    <span className='pr-1'>{data.percentage}%</span>
                                                    <DownIcon />
                                                </span>
                                            }
                                        </div>
                                    </CustomCard>
                                </div>
                            )
                        })}
                        {/* <div className="col-lg-4 col-md-6 pr-md-4">
                            <CustomCard>
                                <p className="custom-card-title mb-3 ">Calls Completed</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="custom-card-figure">127</span>
                                    <span className="custom-card-increament  d-flex">
                                        <span className='pr-1'>+14%</span>
                                        <UpIcon />
                                    </span>
                                </div>
                            </CustomCard>
                        </div>
                        <div className="col-lg-4 col-md-6 pr-lg-4 pl-md-4  pt-md-0 pt-5">
                            <CustomCard >
                                <p className="custom-card-title mb-3 ">Contact Reached</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="custom-card-figure">68</span>
                                    <span className="custom-card-decreament d-flex">
                                        <span className='pr-1'>-2%</span>
                                        <DownIcon />
                                    </span>
                                </div>
                            </CustomCard>
                        </div>
                        <div className="col-lg-4 col-md-6 pt-lg-0 pr-lg-0 pl-lg-4 pr-md-4 pt-5">
                            <CustomCard >
                                <p className="custom-card-title mb-3 ">Meeting Booked</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="custom-card-figure">31</span>
                                    <span className="custom-card-increament d-flex">
                                        <span className='pr-1'>+14%</span>
                                        <UpIcon />
                                    </span>
                                </div>
                            </CustomCard>
                        </div> */}
                    </div>
                </div>

                <div className="custom-sales container-fluid p-0">
                    <div className="d-flex pt-5 mt-4 justify-content-between align-items-center">
                        <div className="">
                            <Heading >Sales Pipeline</Heading>
                        </div>
                        <div className="text-right">
                            <form action="#" className="m-0">
                                <HomePageSelect myname="week" myid="custom-week" myclassName="custom-select-form mb-3">
                                    <option value="This Week">This Week</option>
                                    <option value="Week">Week</option>
                                </HomePageSelect>
                            </form>
                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col-lg-4 col-md-6 pr-md-4">
                            <CustomCard >
                                <p className="custom-card-title mb-3 ">Leads</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="custom-card-figure">435</span>
                                    <span className="custom-card-increament">
                                        +14%
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11"
                                            fill="none">
                                            <path
                                                d="M1.16406 4.73926L5.10156 0.614258C5.21094 0.489258 5.34375 0.426758 5.5 0.426758C5.65625 0.426758 5.78906 0.481445 5.89844 0.59082L9.83594 4.71582C10.0547 4.99707 10.0547 5.2627 9.83594 5.5127C9.55469 5.73145 9.28906 5.73145 9.03906 5.5127L6.0625 2.39551V10.3643C6.03125 10.6924 5.85156 10.8721 5.52344 10.9033C5.36719 10.9033 5.23438 10.8564 5.125 10.7627C5 10.6533 4.9375 10.5205 4.9375 10.3643V2.39551L1.96094 5.5127C1.71094 5.73145 1.44531 5.73145 1.16406 5.5127C0.945312 5.2627 0.945312 5.00488 1.16406 4.73926Z"
                                                fill="#16B296" />
                                        </svg>
                                    </span>
                                </div>
                                <button className="view-all-btn">View All</button>
                            </CustomCard>
                        </div>
                        <div className="col-lg-4 col-md-6 pr-lg-4 pl-md-4 pt-md-0 pt-5">
                            <div className="custom-card p-4">
                                <p className="custom-card-title mb-3 ">Marketing</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="custom-card-figure">234</span>
                                    <span className="custom-card-increament">
                                        +14%
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11"
                                            fill="none">
                                            <path
                                                d="M1.16406 4.73926L5.10156 0.614258C5.21094 0.489258 5.34375 0.426758 5.5 0.426758C5.65625 0.426758 5.78906 0.481445 5.89844 0.59082L9.83594 4.71582C10.0547 4.99707 10.0547 5.2627 9.83594 5.5127C9.55469 5.73145 9.28906 5.73145 9.03906 5.5127L6.0625 2.39551V10.3643C6.03125 10.6924 5.85156 10.8721 5.52344 10.9033C5.36719 10.9033 5.23438 10.8564 5.125 10.7627C5 10.6533 4.9375 10.5205 4.9375 10.3643V2.39551L1.96094 5.5127C1.71094 5.73145 1.44531 5.73145 1.16406 5.5127C0.945312 5.2627 0.945312 5.00488 1.16406 4.73926Z"
                                                fill="#16B296" />
                                        </svg>
                                    </span>
                                </div>
                                <button className="view-all-btn">View All</button>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pt-lg-0 pr-lg-0 pl-lg-4 pr-md-4 pt-5">
                            <div className="custom-card p-4">
                                <p className="custom-card-title mb-3 ">Contract Finalization</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="custom-card-figure">342</span>
                                    <span className="custom-card-increament">
                                        +14%
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11"
                                            fill="none">
                                            <path
                                                d="M1.16406 4.73926L5.10156 0.614258C5.21094 0.489258 5.34375 0.426758 5.5 0.426758C5.65625 0.426758 5.78906 0.481445 5.89844 0.59082L9.83594 4.71582C10.0547 4.99707 10.0547 5.2627 9.83594 5.5127C9.55469 5.73145 9.28906 5.73145 9.03906 5.5127L6.0625 2.39551V10.3643C6.03125 10.6924 5.85156 10.8721 5.52344 10.9033C5.36719 10.9033 5.23438 10.8564 5.125 10.7627C5 10.6533 4.9375 10.5205 4.9375 10.3643V2.39551L1.96094 5.5127C1.71094 5.73145 1.44531 5.73145 1.16406 5.5127C0.945312 5.2627 0.945312 5.00488 1.16406 4.73926Z"
                                                fill="#16B296" />
                                        </svg>
                                    </span>
                                </div>
                                <button className="view-all-btn">View All</button>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="custom-today-agenda container-fluid p-0 ">
                    <div className="row pt-5 mt-4">
                        <div className="col-lg-4 pr-lg-4">
                            <Heading> Today's Agenda</Heading>
                            <div className="custom-card p-4 mt-2">
                                <div className="row justify-content-center p-3">
                                    <div className="col-lg-8 col-6 p-0">
                                        <div className="d-flex align-items-center justify-content-between border-radius-6 bg-gray-100"
                                        >
                                            <div
                                                className="border-right border-white h-100 d-flex justify-content-center align-items-center px-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={6} height={10} viewBox="0 0 6 10" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.70679 0.292787C5.89426 0.480314 5.99957 0.734622 5.99957 0.999786C5.99957 1.26495 5.89426 1.51926 5.70679 1.70679L2.41379 4.99979L5.70679 8.29279C5.88894 8.48139 5.98974 8.73399 5.98746 8.99619C5.98518 9.25838 5.88001 9.5092 5.6946 9.6946C5.5092 9.88001 5.25838 9.98518 4.99619 9.98746C4.73399 9.98974 4.48139 9.88894 4.29279 9.70679L0.292787 5.70679C0.105316 5.51926 0 5.26495 0 4.99979C0 4.73462 0.105316 4.48031 0.292787 4.29279L4.29279 0.292787C4.48031 0.105316 4.73462 0 4.99979 0C5.26495 0 5.51926 0.105316 5.70679 0.292787Z" fill="#18181B" />
                                                </svg>

                                            </div>
                                            <div className="">
                                                <input type="date" className="bg-transparent border-0" />
                                            </div>
                                            <div
                                                className="border-left border-white h-100 d-flex justify-content-center align-items-center px-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={6} height={10} viewBox="0 0 6 10" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.292787 9.70741C0.105316 9.51988 0 9.26557 0 9.00041C0 8.73524 0.105316 8.48094 0.292787 8.29341L3.58579 5.00041L0.292787 1.70741C0.110629 1.5188 0.00983372 1.2662 0.0121121 1.00401C0.0143906 0.741809 0.11956 0.490997 0.304968 0.305589C0.490376 0.120181 0.741189 0.0150115 1.00339 0.0127331C1.26558 0.0104547 1.51818 0.111249 1.70679 0.293408L5.70679 4.29341C5.89426 4.48094 5.99957 4.73524 5.99957 5.00041C5.99957 5.26557 5.89426 5.51988 5.70679 5.70741L1.70679 9.70741C1.51926 9.89488 1.26495 10.0002 0.999786 10.0002C0.734622 10.0002 0.480314 9.89488 0.292787 9.70741Z" fill="#18181B" />
                                                </svg>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="border-radius-4 bg-orange-100 event-meeting mt-2">
                                        <p className="event-meeting-time">8:00 - 9:00</p>
                                        <p className="event-meeting-title">Meet Sarah</p>
                                    </div>
                                    <div className="border-radius-4 bg-orange-100 event-meeting mt-2">
                                        <p className="event-meeting-time">8:00 - 9:00</p>
                                        <p className="event-meeting-title">Meet Sarah</p>
                                    </div>
                                    <div className="border-radius-4 bg-orange-100 event-meeting mt-2">
                                        <p className="event-meeting-time">8:00 - 9:00</p>
                                        <p className="event-meeting-title">Meet Sarah</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 pt-lg-0 pt-5 mt-lg-0 mt-4 pl-4">
                            <div className="d-flex justify-content-between">
                                <h1 className="custom-heading">My Task</h1>
                                <button className="bg-white border-1 custom-task-create">Create Task</button>

                            </div>

                            <table className="table custom-task-table mt-3">
                                <thead className="bg-transparent border-top-0">
                                    <tr>
                                        <th scope="col">
                                            <input type="checkbox" name="" value="" />
                                        </th>
                                        <th scope="col">Subject</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Priority</th>
                                        <th scope="col">Due Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row"><input type="checkbox" /></th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>06/02/2022</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><input type="checkbox" /></th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>06/02/2022</td>

                                    </tr>
                                    <tr>
                                        <th scope="row"><input type="checkbox" /></th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        <td>06/02/2022</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><input type="checkbox" /></th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        <td>06/02/2022</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="custom-pagination d-flex justify-content-center align-items-center">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={6} height={10} viewBox="0 0 6 10" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.70679 0.292787C5.89426 0.480314 5.99957 0.734622 5.99957 0.999786C5.99957 1.26495 5.89426 1.51926 5.70679 1.70679L2.41379 4.99979L5.70679 8.29279C5.88894 8.48139 5.98974 8.73399 5.98746 8.99619C5.98518 9.25838 5.88001 9.5092 5.6946 9.6946C5.5092 9.88001 5.25838 9.98518 4.99619 9.98746C4.73399 9.98974 4.48139 9.88894 4.29279 9.70679L0.292787 5.70679C0.105316 5.51926 0 5.26495 0 4.99979C0 4.73462 0.105316 4.48031 0.292787 4.29279L4.29279 0.292787C4.48031 0.105316 4.73462 0 4.99979 0C5.26495 0 5.51926 0.105316 5.70679 0.292787Z" fill="#18181B" />
                                    </svg>

                                </a>
                                <a href="">1</a>
                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={6} height={10} viewBox="0 0 6 10" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.292787 9.70741C0.105316 9.51988 0 9.26557 0 9.00041C0 8.73524 0.105316 8.48094 0.292787 8.29341L3.58579 5.00041L0.292787 1.70741C0.110629 1.5188 0.00983372 1.2662 0.0121121 1.00401C0.0143906 0.741809 0.11956 0.490997 0.304968 0.305589C0.490376 0.120181 0.741189 0.0150115 1.00339 0.0127331C1.26558 0.0104547 1.51818 0.111249 1.70679 0.293408L5.70679 4.29341C5.89426 4.48094 5.99957 4.73524 5.99957 5.00041C5.99957 5.26557 5.89426 5.51988 5.70679 5.70741L1.70679 9.70741C1.51926 9.89488 1.26495 10.0002 0.999786 10.0002C0.734622 10.0002 0.480314 9.89488 0.292787 9.70741Z" fill="#18181B" />
                                    </svg>

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white d-flex justify-content-center align-items-center mt-5" >
                    Placeholder for internal messaging (Slack?)
                </div>
            </div>
        </>
    )
}

export default HomePage