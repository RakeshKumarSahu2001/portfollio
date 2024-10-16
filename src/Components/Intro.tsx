import Img from "../assets/portfolliopic.jpeg"
import Img2 from "../assets/portfolliopic2.jpeg"
import resume from "../assets/RakeshKumarSahu-resume.pdf"

function Intro() {
    return (
        <section className="py-lg-5 intro border-0" id="Intro">
            <div className="info-container container py-lg-5 ">

                <div className="row">
                    <div className="col-md-5">
                        <div className="intro-image d-flex justify-content-center align-items-center d-md-block d-none ">
                            <div className="intro-box-image d-md-block d-none ">
                                <img
                                    src={Img2}
                                    alt="Rakesh Kumar Sahu - Web Developer"
                                    className="d-md-block d-none "
                                />
                            </div>
                        </div>

                        <div className="intro-sec-image d-flex justify-content-center align-items-center d-md-none d-block py-1 mx-auto py-lg-0">
                            <div className="intro-sec-box-image d-md-none d-block ">
                                <img
                                    src={Img}
                                    alt="Rakesh Kumar Sahu - Web Developer"
                                    className="d-md-none d-block"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-7 d-flex justify-content-center align-items-start flex-column px-3">
                        <h3 className="text-primary mx-auto mx-md-0 mt-2">About <span className="text-white">me</span></h3>
                        <p className="fs-5 fw-bolder fw-light  mt-1 mt-md-0" style={{letterSpacing:"-0.5px"}}>
                            I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning,
                            I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
                        </p>
                        <a href={resume} target="_blank" download="RakeshKumarSahu-resume.pdf" className="btn btn-primary mt-3 mb-4 px-4 py-2 float-start ">Resume</a>
                    </div>
                </div>

            </div> 
        </section>
    )
}

export default Intro