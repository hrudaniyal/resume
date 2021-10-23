import React from 'react'

function Address({ address }) {

    return <section className='address section'>
        <h2 className='heading'>Address :</h2>
        <section className='typeaddress'>
            {
                address.map((location) => {
                    const { type, place, city, state, pin } = location
                    return <>

                        <h3>{type}</h3>
                        <span>:</span>
                        <div className='parmanent'>
                            <span>{place},</span>
                            <span>{city},</span>
                            <span>{state},</span>
                            <span>{pin},</span>
                        </div>



                    </>
                })

            }

        </section>
    </section>

}

export default Address