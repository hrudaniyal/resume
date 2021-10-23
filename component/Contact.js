import React from 'react'

function Contact({phone,email}) {
    return (
        <div>
            <h4>CONTACT </h4><br />
            <label className='contactlabel'>
                <span>Email </span> <span>:</span> <span>{email}</span>
            </label>
            <label className='contactlabel'>
                <span>Phone </span> <span>:</span> <span>{phone}</span>
            </label>
        </div>
    )
}

export default Contact
