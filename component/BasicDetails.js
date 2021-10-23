import React from 'react'
import Contact from './Contact'

function BasicDetails({ details }) {
    const { about,name,dob, position, image, email, phone } = details
    return (

        <section className='topsection'>
            <div className='left'>
                <img src={image} alt={name} className='photo' />
            </div>
            <div className='right'>
                <h2 className='name'>{name}</h2>
                <span>{position}</span>
                <section className='sametwogrid'>
                    <div className='contact'>
                        <Contact phone={phone} email={email} />
                    </div>
                    <div className='bdetails'>
                        <b>ABOUT </b> <br />
                        <p>{about}</p>
                        <b>Dob :</b>
                        <p>{dob}</p>
                    </div>
                </section>

            </div>

        </section>

    )
}

export default BasicDetails
