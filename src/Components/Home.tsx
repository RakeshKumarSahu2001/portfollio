import "../App.css"
import Img from "../assets/portfolliopic.jpeg"
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareEnvelope } from "react-icons/fa6";

function Home() {
  return (
    <section className="home py-lg-5 border-0" id="Home">
      <div className="info-container container d-flex flex-column flex-md-row gap-3 gap-md-0 align-items-center mt-lg-5">
        <div className="home-text mt-lg-5 container">
          <div className="row">
            <div className="col-lg-7 col-12 d-flex flex-column justify-content-center">
              <div className="slide d-flex flex-row justify-content-center justify-content-lg-start">
              <span className="one px-4 fs-5 fw-bold">Hello</span>
              <span className="two fs-4 fw-bold">I am</span>
              </div>
              <h1 className="fw-bold text-lg-start text-center my-name">Rakesh Kumar Sahu</h1>
              <p className="fw-bold text-lg-start text-center domain-info">I am a Full-Stack Developer.</p>

              <div className="social d-flex align-items-center justify-content-center justify-content-lg-start">
                <a href="https://github.com/RakeshKumarSahu2001"  target="_blank"><FaSquareGithub className="icons" /></a>
                <a href="https://www.linkedin.com/in/rakesh-kumar-sahu22/" target="_blank"><IoLogoLinkedin className="icons" /></a>
                <a href="#"><FaSquareXTwitter className="icons" /></a>
                <a href="#"><FaSquareInstagram className="icons" /></a>
                <a href="mailto:rakeshkumarsahu187@gmail.com" target="_blank"><FaSquareEnvelope className="icons" /></a>
              </div>
            </div>

            <div className="col-lg-5 d-lg-block d-none d-flex justify-content-center">
              <div className="image-container d-lg-block d-none mx-auto">
                <div className="img-box d-lg-block d-none ">
                  <img
                    src={Img}
                    alt="Rakesh Kumar Sahu - Web Developer"
                    className="d-lg-block d-none w-100 home-img"
                    style={{height:"120%"}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
