import { Link, useLocation } from "react-router-dom";
import links from '../data'


function MenuList() {
    const pathname = useLocation().pathname

    return (
        <>
            {links.map((data, index) => {
                return (
                    <>
                        {data.isDropdown ?
                            <li key={index}>
                                <div className="dropdown show nav-link">
                                    <a classname="nav-item" href="#" role="button" id="{data.title}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                        {data.title}
                                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={6} viewBox="0 0 12 6" fill="none">
                                            <path d="M10.6211 1.71094L6.46484 5.62109C6.31901 5.7487 6.16406 5.8125 6 5.8125C5.83594 5.8125 5.6901 5.7487 5.5625 5.62109L1.40625 1.71094C1.13281 1.40104 1.1237 1.09115 1.37891 0.78125C1.67057 0.507812 1.98047 0.498698 2.30859 0.753906L6 4.25391L9.71875 0.753906C10.0286 0.498698 10.3294 0.498698 10.6211 0.753906C10.8763 1.08203 10.8763 1.40104 10.6211 1.71094Z" fill="white" />
                                        </svg>
                                    </a>
                                    <div className="dropdown-menu custom-dropdown-menu" aria-labelledby={data.title}>
                                        <div className="d-flex flex-column">
                                            {
                                                data.dropdownlist.map((list) => {
                                                    return (
                                                        <Link key={list.path} className="custom-dropdown-item" to={list.path}>{list.title}</Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </li> :
                            <li>
                                <Link className={`nav-item nav-link ${pathname === data.path ? 'font-weight-600' : ''}`} to={data.path}>{data.title}</Link>
                            </li>
                        }
                    </>
                )
            })}
        </>
    )
}
export default MenuList;