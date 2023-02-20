import React, { useState } from 'react'
import Heading from '../../../components/heading'
import GreaterThanIcon from '../../../components/images/greaterThanIcon'
import LessThanIcon from '../../../components/images/lessThanIcon'
import SearchIcon from '../../../components/images/searchIcon'
import HomePageSelect from '../../../components/selects/homePageSelect'

const allProperties = [
    {
        id: 1,
        attomid: '51903179',
        address: '6321 Dover St',
        city: 'Oakland',
        state: 'CA',
        zip: '94609',
        area: '10,598',
        propertytype: 'Commercial',
        units: '18',
        lastyearsale: '2004'
    },
    {
        id: 2,
        attomid: '51903179',
        address: '6321 Dover St',
        city: 'Oakland',
        state: 'CA',
        zip: '94609',
        area: '10,598',
        propertytype: 'Residential',
        units: '18',
        lastyearsale: '1982'
    },
    {
        id: 3,
        attomid: '51903179',
        address: '6321 Dover St',
        city: 'Oakland',
        state: 'CA',
        zip: '94609',
        area: '10,598',
        propertytype: 'Residential',
        units: '18',
        lastyearsale: '2004'
    },
    {
        id: 4,
        attomid: '51903179',
        address: '6321 Dover St',
        city: 'Oakland',
        state: 'CA',
        zip: '94609',
        area: '10,598',
        propertytype: 'Commercial',
        units: '18',
        lastyearsale: '2004'
    },
    {
        id: 5,
        attomid: '51903179',
        address: '6321 Dover St',
        city: 'Oakland',
        state: 'CA',
        zip: '94609',
        area: '10,598',
        propertytype: 'Commercial',
        units: '18',
        lastyearsale: '2004'
    },
    {
        id: 6,
        attomid: '51903179',
        address: '6321 Dover St',
        city: 'Oakland',
        state: 'CA',
        zip: '94609',
        area: '10,598',
        propertytype: 'Residential',
        units: '18',
        lastyearsale: '2004'
    },
    {
        id: 7,
        attomid: '51903179',
        address: '6321 Dover St',
        city: 'Oakland',
        state: 'CA',
        zip: '94609',
        area: '10,598',
        propertytype: 'Residential',
        units: '18',
        lastyearsale: '1998'
    },
    {
        id: 8,
        attomid: '51903179',
        address: '6321 Dover St',
        city: 'Oakland',
        state: 'CA',
        zip: '94609',
        area: '10,598',
        propertytype: 'Commercial',
        units: '18',
        lastyearsale: '1998'
    },
    {
        id: 9,
        attomid: '51903179',
        address: '6321 Dover St',
        city: 'Oakland',
        state: 'CA',
        zip: '94609',
        area: '10,598',
        propertytype: 'Commercial',
        units: '18',
        lastyearsale: '2004'
    },
    {
        id: 10,
        attomid: '51903179',
        address: '6321 Dover St',
        city: 'Oakland',
        state: 'CA',
        zip: '94609',
        area: '10,598',
        propertytype: 'Commercial',
        units: '18',
        lastyearsale: '2004'
    },
]
// const filters = [
//     {
//         id: 1,
//         name: 'Location'
//     },
//     {
//         id: 2,
//         name: 'Property Type'
//     },
//     {
//         id: 3,
//         name: 'Characteristics'
//     },
//     {
//         id: 4,
//         name: 'Last Market Sale'
//     },
//     {
//         id: 5,
//         name: 'Ownership'
//     },
//     {
//         id: 6,
//         name: 'Debt'
//     },
// ]

const SearchProperty2Page = () => {
const [poepleCheck, setpoepleCheck] = useState(true)
    return (
        <div className='custom-main-content mt-2 pt-4'>

            <div className='mb-5'>
                <Heading>All Properties</Heading>
            </div>
            <div className="d-flex align-items-start justify-content-between flex-md-row flex-column gap-8 pt-2 allproperty-header "  >

                <div className='gap-8 d-flex align-items-start flex-xl-row flex-column justify-content-between responsive-class-property'>
                    {/* {filters.map((data, index) => {
                        return (
                            <button id="apply-filter" key={index} className="filter-btn">Location
                                <div className="home-checkbox1">
                                    <input type="checkbox" id={data.id} />
                                    <label htmlFor={data.id}></label>
                                </div>
                            </button>        
                        )
                    })} */}
                    <div className='gap-8 d-flex align-items-start justify-content-between responsive-class-property-filter'>
                        <button id="apply-filter" className="filter-btn">Location
                            <div className="home-checkbox1">
                                <input type="checkbox" id="head-checkbox1" />
                                <label htmlFor="head-checkbox1"></label>
                            </div>
                        </button>
                        <button id="apply-filter" className="filter-btn">Property Type
                            <div className="home-checkbox1">
                                <input type="checkbox" id="head-checkbox2" />
                                <label htmlFor="head-checkbox2"></label>
                            </div>
                        </button>
                        <button id="apply-filter" className="filter-btn">Characteristics
                            <div className="home-checkbox1">
                                <input type="checkbox" id="head-checkbox3" />
                                <label htmlFor="head-checkbox3"></label>
                            </div>
                        </button>
                    </div>
                    <div className='gap-8 d-flex align-items-start justify-content-between responsive-class-property-filter'>
                        <button id="apply-filter" className="filter-btn">Last Market Sale
                            <div className="home-checkbox1">
                                <input type="checkbox" id="head-checkbox4" />
                                <label htmlFor="head-checkbox4"></label>
                            </div>
                        </button>
                        <button id="apply-filter" className="filter-btn">Ownership
                            <div className="home-checkbox1">
                                <input type="checkbox" id="head-checkbox5" />
                                <label htmlFor="head-checkbox5"></label>
                            </div>
                        </button>
                        <button id="apply-filter" className="filter-btn">Debt
                            <div className="home-checkbox1">
                                <input type="checkbox" id="head-checkbox6" />
                                <label htmlFor="head-checkbox6"></label>
                            </div>
                        </button>
                    </div>
                </div>


                <div className="d-flex justify-content-between align-items-md-start align-items-center flex-xl-row flex-md-column responsive-class-property gap-8">
                    <div className='d-flex align-items-center orange-filter-btn' onClick={() => { setpoepleCheck(!poepleCheck) }}>
                        <span className='mr-2'>People</span>
                       {poepleCheck && <svg width={12} height={10} viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.6 0.176758L12 1.57676L4.4 9.17676L0 4.77676L1.33935 3.44189L4.4 6.38144L10.6 0.176758Z" fill="white" />
                        </svg>}

                    </div>

                    <div className="position-relative custom-search-filter">
                        <input type="text" placeholder="Filter" className='rounded-4' />
                        <div className="position-absolute custom-search-icon">
                            <SearchIcon />
                        </div>
                    </div>
                    <p id="apply-filter" className=" bg-transparent text-Secondar-60 m-0 ">Clear Filter</p>

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
                                </div>
                            </th>
                            <th scope="col">
                                <HomePageSelect myname="week" myid="custom-week" myclassName="m-w-100px font-14 font-weight-700 text-Secondar-60 bg-transparent border-0 w-84px m-0">
                                    <option value="This Week">ATTOM ID</option>
                                    <option value="Week">ATTOM ID</option>
                                </HomePageSelect>
                            </th>
                            <th scope="col">Address</th>
                            <th scope="col">City</th>
                            <th scope="col">State</th>
                            <th scope="col">Zip</th>

                            <th scope="col">Area</th>
                            <th scope="col" className='m-w-130px'>Property Type</th>
                            <th scope="col">Units</th>
                            <th scope="col" className='m-w-130px'>Last Sale Year</th>

                        </tr>
                    </thead>
                    <tbody>
                        {allProperties.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <div className="home-checkbox1">
                                            <input type="checkbox" id={data.id} />
                                            <label htmlFor={data.id}></label>
                                        </div>
                                    </td>
                                    <td>{data.attomid}</td>
                                    <td>{data.address}</td>
                                    <td>{data.city}</td>
                                    <td>{data.state}</td>
                                    <td >{data.zip}</td>
                                    <td>{data.area}</td>
                                    <td>{data.propertytype}</td>
                                    <td>{data.units}</td>
                                    <td>{data.lastyearsale}</td>

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



        </div>
    )
}

export default SearchProperty2Page