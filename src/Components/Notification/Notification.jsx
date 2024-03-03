import React from 'react'

function Notification(props) {
    const {message} = props; 
    return (
        <div>
            <div className="alert alert-primary" role="alert">
               <h5 className='text-uppercase'>{message}</h5>
            </div>
        </div>
    )
}

export default Notification