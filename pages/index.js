import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Address from '../component/Address'
import BasicDetails from '../component/BasicDetails'
import Education from '../component/Education'
import Language from '../component/Language'
import Projects from '../component/Projects'
import Skills from '../component/Skills'
function index() {
  const [resume, setResume] = useState({ skills: [], language: [], address: [] ,projects:[],education:[]})
  const { name,email,about,dob,phone,education, image, position, skills, language, address,projects} = resume
  const details = {name,dob,image,position,email,phone,about }
  useEffect(async () => {
    axios.get('http://localhost:3000/api/resume').then(res => {
      setResume(res.data)
    })
  }, [])
  return (
    <div className='template'>
        <div>
            <BasicDetails details={details} />
        </div>
      <section className='buttomsection'>

        <div><Skills skills={skills} /></div>
        <div>
          <Language language={language} />
          <Address address={address} />
          <Education education={education} />
          <Projects projects={projects} />
        </div>
      </section>
      <section className='sectionthree'>

      </section>
      <section className='sectionfour'>6</section>
    </div>
  )
}

export default index
