import React from 'react'
import Heading from '../../../components/heading'
import GreaterThanIcon from '../../../components/images/greaterThanIcon'
import LessThanIcon from '../../../components/images/lessThanIcon'
import SearchIcon from '../../../components/images/searchIcon'
import HomePageSelect from '../../../components/selects/homePageSelect'

const allLeads = [
    {
        id: 1,
        name: 'Mr. Christopher Sparacino',
        jobTitle: 'Principal',
        email: 'chris@sparacinorealty.com',
        phone: '5107885551',
        lastUpdate: '04/13/2022 15:52',
        lastDateofContact: '04/13/2022'
    },
    {
        id: 2,
        name: 'Mr. Christopher Sparacino',
        jobTitle: 'Principal',
        email: 'chris@sparacinorealty.com',
        phone: '5107885551',
        lastUpdate: '04/13/2022 15:52',
        lastDateofContact: '04/13/2022'
    },
    {
        id: 3,
        name: 'Mr. Christopher Sparacino',
        jobTitle: 'Principal',
        email: 'chris@sparacinorealty.com',
        phone: '5107885551',
        lastUpdate: '04/13/2022 15:52',
        lastDateofContact: '04/13/2022'
    },
    {
        id: 4,
        name: 'Mr. Christopher Sparacino',
        jobTitle: 'Principal',
        email: 'chris@sparacinorealty.com',
        phone: '5107885551',
        lastUpdate: '04/13/2022 15:52',
        lastDateofContact: '04/13/2022'
    },
    {
        id: 5,
        name: 'Mr. Christopher Sparacino',
        jobTitle: 'Principal',
        email: 'chris@sparacinorealty.com',
        phone: '5107885551',
        lastUpdate: '04/13/2022 15:52',
        lastDateofContact: '04/13/2022'
    },
    {
        id: 6,
        name: 'Mr. Christopher Sparacino',
        jobTitle: 'Principal',
        email: 'chris@sparacinorealty.com',
        phone: '5107885551',
        lastUpdate: '04/13/2022 15:52',
        lastDateofContact: '04/13/2022'
    },
    {
        id: 7,
        name: 'Mr. Christopher Sparacino',
        jobTitle: 'Principal',
        email: 'chris@sparacinorealty.com',
        phone: '5107885551',
        lastUpdate: '04/13/2022 15:52',
        lastDateofContact: '04/13/2022'
    },
    {
        id: 8,
        name: 'Mr. Christopher Sparacino',
        jobTitle: 'Principal',
        email: 'chris@sparacinorealty.com',
        phone: '5107885551',
        lastUpdate: '04/13/2022 15:52',
        lastDateofContact: '04/13/2022'
    },
    {
        id: 9,
        name: 'Mr. Christopher Sparacino',
        jobTitle: 'Principal',
        email: 'chris@sparacinorealty.com',
        phone: '5107885551',
        lastUpdate: '04/13/2022 15:52',
        lastDateofContact: '04/13/2022'
    },
    {
        id: 10,
        name: 'Mr. Christopher Sparacino',
        jobTitle: 'Principal',
        email: 'chris@sparacinorealty.com',
        phone: '5107885551',
        lastUpdate: '04/13/2022 15:52',
        lastDateofContact: '04/13/2022'
    },
]

const LeadsPage = () => {
    return (
        <>

            <div className="d-flex justify-content-between align-items-md-center flex-md-row flex-column">
                <Heading>All Leads</Heading>
                <div className="d-flex align-items-md-end justify-content-between flex-md-row flex-column gap-32 " >
                    <form className="d-flex flex-column m-0">
                        <div>
                            <label className="custom-label-city mb-1" htmlFor="">City</label>
                            <HomePageSelect myname="City" myclassName="custom-select-city">
                                <option value="Barkely">Barkely</option>
                                <option value="Dubai">Dubai</option>
                            </HomePageSelect>
                        </div>
                    </form>
                    <div className="d-flex justify-content-between align-items-sm-center flex-sm-row flex-column gap-32">
                        <div className="position-relative custom-search-filter ">
                            <input type="text" placeholder="Filter" />
                            <div className="position-absolute custom-search-icon">
                                <SearchIcon />
                            </div>
                        </div>
                        <button id="apply-filter" className="custom-filter-apply text-white">Apply Filter</button>
                    </div>
                </div>
            </div>

            <div className='overflow-x-auto text-Secondar-60'>
                <table className="table custom-task-table mt-3 ">
                    <thead className="bg-transparent border-top-0">
                        <tr>
                            <th scope="col">
                                <div className="home-checkbox1">
                                    <input type="checkbox" id="head-checkbox" />
                                    <label htmlFor="head-checkbox"></label>
                                </div>                                    </th>
                            <th scope="col">
                                <HomePageSelect myname="week" myid="custom-week" myclassName="font-14 font-weight-700 text-Secondar-60 bg-transparent border-0 w-84px m-0">
                                    <option value="This Week">Name</option>
                                    <option value="Week">Age</option>
                                </HomePageSelect>
                            </th>
                            <th scope="col">Job Title</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Pipeline</th>

                            <th scope="col">Last Update</th>
                            <th scope="col">Last date of Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allLeads.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <div className="home-checkbox1">
                                            <input type="checkbox" id={data.id} />
                                            <label htmlFor={data.id}></label>
                                        </div>
                                    </td>
                                    <td>{data.name}</td>
                                    <td>{data.jobTitle}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>
                                    <td ><span className="label-css">Label</span></td>
                                    <td>{data.lastUpdate}</td>
                                    <td>{data.lastDateofContact}</td>
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
                <a href="#">1</a>
                <a href="#">
                    <GreaterThanIcon />
                </a>
            </div>



        </>
    )
}

export default LeadsPage