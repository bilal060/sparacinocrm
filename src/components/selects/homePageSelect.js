import React from 'react'

const HomePageSelect = ( props ) => {
    const { myid, myclassName, myname, children } = props;
    return (
        <select name={myname} id={myid} className={myclassName}>
            {children}
        </select>
    )
}

export default HomePageSelect