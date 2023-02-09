import React from 'react'
import Heading from '../heading'
import GreaterThanIcon from '../images/greaterThanIcon'
import LessThanIcon from '../images/lessThanIcon'
import HomePageSelect from '../selects/homePageSelect'

const mytask = [
    {
        subject: 'Call',
        status: 'Not Started',
        priority: 'High',
        dueDate: '06/23/2022'
    },
    {
        subject: 'Follow Up',
        status: 'Not Started',
        priority: 'High',
        dueDate: '06/23/2022'
    },
    {
        subject: 'Lorem',
        status: 'Not Started',
        priority: 'High',
        dueDate: '06/23/2022'
    },
    {
        subject: 'Ipsum',
        status: 'Not Started',
        priority: 'High',
        dueDate: '06/23/2022'
    },
    {
        subject: 'Call',
        status: 'Not Started',
        priority: 'High',
        dueDate: '06/23/2022'
    },

]
const MyTasks = () => {
    return (
        <>
            <div className="d-flex justify-content-between">
                <Heading>My Task</Heading>
                <button className="bg-white border-1 custom-task-create">Create Task</button>

            </div>

            <div className='overflow-y-auto'>
                <table className="table custom-task-table mt-3">
                    <thead className="bg-transparent font-14 font-weight-700 text-secondary">
                        <tr>
                            <th scope="col">
                                <div className='checkbox-main'>
                                    <input type="checkbox" name="" value="" className='home-checkbox' />

                                </div>
                            </th>
                            <th scope="col"> <form action="#" className="m-0">
                                <HomePageSelect myname="week" myid="custom-week" myclassName="font-14 font-weight-700 text-secondary bg-transparent border-0 w-84px m-0">
                                    <option value="This Week">Subject</option>
                                    <option value="Week">Subject</option>
                                </HomePageSelect>
                            </form></th>
                            <th scope="col">Status</th>
                            <th scope="col">Priority</th>
                            <th scope="col">Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mytask.map((data, index) => {
                            return (
                                <tr key={index} className="font-14 font-weight-400 text-secondary">
                                    <td scope="row"><input type="checkbox" className='home-checkbox' /></td>
                                    <td>{data.subject}</td>
                                    <td>{data.status}</td>
                                    <td>{data.priority}</td>
                                    <td>{data.dueDate}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div className="custom-pagination d-flex justify-content-center align-items-center">
                <a href="#">
                    <LessThanIcon />
                </a>
                <a href="">1</a>
                <a href="">
                    <GreaterThanIcon />
                </a>
            </div>
        </>
    )
}

export default MyTasks