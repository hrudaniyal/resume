import React from 'react'

function Language({ language }) {
    // const level = {
    //     begining:25,
    //     intermidiate:50%,
    //     prficient:75%,
    //     expert:100%
    // }

    return (
        <div className='language section'>
            <h2 className='heading'>Languages :</h2>
            {
                language.map((lang) => {
                    const { name, read, write, speak, readvalue, writevalue, speakvalue } = lang
                    return <section className='languagebar'>
                        <div><h3>{name}</h3></div>
                        <div>
                            <b> {read}</b> <br />

                            <div className='rangebar'>
                            <hr className='bar' style={{ width: readvalue + '%'}} />
                            </div>
                            <div className='samefourgrid'>
                                <span>B</span>
                                <span>I</span>
                                <span>P</span>
                                <span>E</span>
                            </div>
                        </div>
                        <div>
                            <b> {write}</b><br />
                            <div className='rangebar'>
                            <hr className='bar' style={{ width: readvalue + '%'}} />
                            </div>
                            <div className='samefourgrid'>
                                <span>B</span>
                                <span>I</span>
                                <span>P</span>
                                <span>E</span>
                            </div>
                        </div>
                        <div>
                            <b> {speak}</b><br />
                            <div className='rangebar'>
                                <hr className='bar' style={{ width: readvalue + '%'}} />

                            </div>
                            <div className='samefourgrid'>
                                <span>B</span>
                                <span>I</span>
                                <span>P</span>
                                <span>E</span>
                            </div>
                        </div>
                    </section>

                })
            }
        </div>
    )
}

export default Language
