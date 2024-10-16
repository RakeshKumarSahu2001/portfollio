import  { college } from "../Store/PortfollioContext"


function EduCard({ text, clgname, course, year, Grade, logo }:college) {

  return (
    <div className="row mt-0">
      <div className="col" style={{ maxWidth: "35rem" }}>
        <div className="card overflow-hidden edu-box" style={{ padding: '1rem',margin:"0 0 2rem 0",position:"relative" }}>
          <div className='d-flex flex-row gap-3 text-start'>
            <img src={logo} className="card-img-top"
              alt="Hollywood Sign on The Hill" style={{ width: "5rem", height: "auto" }} />
            <div className='d-flex flex-column gap-1 edu-info'>
              <h4 className='fw-semibold edu-col-name' style={{ margin: "0rem" }}>{clgname}</h4>
              <h6 className="fs-6 " style={{ margin: "0rem" }}>{course}</h6>
              <h6 className="fs-6 " style={{ margin: "0rem" }}>{year}</h6>
            </div>
          </div>
          <div className="card-body text-start" style={{ padding: '0.25rem' }}>
            <div className="card-title fst-italic fw-semibold" style={{ marginTop: "5px", marginBottom: "3px" }}>
              <span>Grade:</span><span>{Grade}</span>
            </div>
            <p className="card-text">
              {text}   </p>
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default EduCard
