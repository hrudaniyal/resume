import React from 'react'

function Education({ education }) {



    console.log(education)
    return (
        <div className='section' >
             <h2 className='heading' style={{marginBottom:'10px'}}>Education</h2>
            {
                education.map((data) => {
                    const { to, from, cource, collage } = data
                    return <>
                       
                        <section className='sametwogrid '>

                            <div>

                                <span>{from}</span><br />
                                <span>to</span><br />
                                <span>{to}</span>
                            </div>
                            <div>
                                <span>{cource}</span><br />
                               
                                <span>{collage}</span>
                            </div>
                        </section>
                    </>
                })
            }
        </div>
    )
}

export default Education
