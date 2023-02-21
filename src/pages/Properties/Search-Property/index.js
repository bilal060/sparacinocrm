import React, { useState } from 'react'
import {Heading} from '../../../components/heading'
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

const SearchPropertyPage = () => {
    const [startUnits, setstartUnits] = useState(10);
    const [endUnits, setendUnits] = useState(40);
    const [startLastSale, setstartLastSale] = useState(1898);
    const [endLastSale, setendLastSale] = useState(2002);
    return (
        <div className='custom-main-content mt-2 pt-4'>

            <div className='mb-5'>
            <Heading heading="All Properties"/>
            </div>
            <div className="d-flex align-items-md-start justify-content-between flex-md-row flex-column gap-32 pt-2 allproperty-header"  >
                <form className="d-flex align-items-xl-end justify-content-between flex-xl-row flex-md-column responsive-class-property gap-32">
                    <div>
                        <label className="custom-label-city mb-1" htmlFor="">City</label>
                        <HomePageSelect myname="City" myclassName="custom-select-city">
                            <option value="Barkely">Barkely</option>
                            <option value="Dubai">Dubai</option>
                        </HomePageSelect>
                    </div>
                    <div>
                        <label className="custom-label-city mb-1" htmlFor="">Property Type</label>
                        <HomePageSelect myname="City" myclassName="custom-select-city">
                            <option value="Barkely">All</option>
                            <option value="Dubai">Commercial</option>
                        </HomePageSelect>
                    </div>
                </form>
                <div className='d-flex align-items-xl-start justify-content-between flex-xl-row flex-md-column responsive-class-property gap-32 '>
                    <div className="d-flex flex-column m-0 sliders_control">
                        <label className=" mb-1 d-flex justify-content-between" ><p className='m-0 font-12 font-weight-600'>Units</p> <p className='m-0 font-12 font-weight-400'>{startUnits} - {endUnits}</p> </label>
                        <div className="sliders_control mb-3">
                            <input id="fromSlider" type="range" onChange={(e) => { setstartUnits(e.target.value) }} value={startUnits} min="0" max="100" />
                            <input id="toSlider" type="range" onChange={(e) => { setendUnits(e.target.value) }} value={endUnits} min="0" max="100" />
                        </div>

                    </div>
                    <div className="d-flex flex-column m-0 sliders_control">
                        <label className=" mb-1 d-flex justify-content-between"><p className='m-0 font-12 font-weight-600'>Last Sale Year</p> <p className='m-0 font-12 font-weight-400'>{startLastSale} - {endLastSale}</p> </label>
                        <div className="sliders_control mb-3">
                            <input id="fromSlider" type="range" onChange={(e) => { setstartLastSale(e.target.value) }} value={startLastSale} min="1800" max="2023" />
                            <input id="toSlider" type="range" onChange={(e) => { setendLastSale(e.target.value) }} value={endLastSale} min="1800" max="2023" />
                        </div>

                    </div>
                </div>
                <div className="d-flex justify-content-between  flex-xl-row flex-md-column responsive-class-property gap-32 mt-md-4">
                    <div className="position-relative custom-search-filter mt-1">
                        <input type="text" placeholder="Filter" />
                        <div className="position-absolute custom-search-icon">
                            <SearchIcon />
                        </div>
                    </div>
                    <button id="apply-filter" className="custom-filter-apply text-white">Apply Filter</button>
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

export default SearchPropertyPage