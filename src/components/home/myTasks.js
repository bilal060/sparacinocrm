import React from 'react'
import Heading from '../heading'
import GreaterThanIcon from '../images/greaterThanIcon'
import LessThanIcon from '../images/lessThanIcon'

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
                    <thead className="bg-transparent border-top-0 font-14 font-weight-700 text-secondary">
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
                        {mytask.map((data, index) => {
                            return (
                                <tr key={index} className="font-14 font-weight-400 text-secondary">
                                    <th scope="row"><input type="checkbox" /></th>
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