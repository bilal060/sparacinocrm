import React from 'react'

const Heading = ({ children, classname }) => {
    return (
        <h3 className={`custom-heading ${classname}`}>{children}</h3>
    )
}

export default Heading