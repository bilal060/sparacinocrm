import React from 'react'

const CustomCard = ({children}) => {
    return (
        <div className="custom-card p-4">
            {children}
        </div>
    )
}

export default CustomCard