import { useContext } from 'react'
import EduCard from "./EduCard"
import PortfollioContext from '../Store/PortfollioContext'


function Education() {
  const { education } = useContext(PortfollioContext)



  return (
    <section className="education-section py-3 border-0" id='Education'>
      <div className="info-container container-lg  d-flex flex-column gap-1 justify-content-center">
        <h1 className='text-center text-primary'>Education</h1>

        <div className='d-flex justify-content-center '>
          <ul className='d-flex flex-column justify-content-center list-unstyled' style={{ cursor: "pointer" }}>
            {
              education.map((edu, index) => {
                return (<>
                  <li key={index} className=''><EduCard logo={edu.logo} text={edu.text} year={edu.year} course={edu.course} Grade={edu.Grade} clgname={edu.clgname} /></li>
                </>)
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Education