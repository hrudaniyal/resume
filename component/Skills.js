function Skills({skills}) {
    return (
        <div className='skills'>
          <h2 className='heading' style={{width:'70%',padding:'5px',lineHeight:'2em'}}>Skills :</h2>
        {
          skills.map((data)=>{
           return <section key={data.name} className='gridthree'>
           <span>{data.name} </span>
           <span>:</span>
           <div>
              <input type="range"  value={data.value} />
              <span>{data.value} %</span>
           </div>
          
         </section>
          })
        }
       
      </div>
    )
}

export default Skills