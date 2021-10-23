import React from 'react'

function Projects({projects}) {
    console.log(projects)
    return (
        <div className="projects section">
            <h2 className='heading'>Projects : </h2>
            {
                projects.map((project)=>{
                    const {name,description} = project
                    return <section className='projectdetails'>
                          <b>{name}</b> 
                          <p>{description}</p>
                    </section>
                })
            }
        </div>
    )
}

export default Projects
