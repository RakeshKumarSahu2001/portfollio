import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareEnvelope } from "react-icons/fa6";


function Footer() {
    return (
        <>
            <div className="footer-basic">
                <footer>
                    <div className="social ">
                        <a href="https://github.com/RakeshKumarSahu2001" target="_blank"><FaSquareGithub className="icons" /></a>
                        <a href="https://www.linkedin.com/in/rakesh-kumar-sahu22/" target="_blank"><IoLogoLinkedin className="icons" /></a>
                        <a href="#"><FaSquareXTwitter className="icons" /></a>
                        <a href="#"><FaSquareInstagram className="icons" /></a>
                        <a href="mailto:rakeshkumarsahu187@gmail.com" target="_blank"><FaSquareEnvelope className="icons" /></a>

                    </div>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#Home">Home</a></li>
                        <li className="list-inline-item"><a href="#Intro">About</a></li>
                        <li className="list-inline-item"><a href="#Skills">Skills</a></li>
                        <li className="list-inline-item"><a href="#Projects">Projects</a></li>
                        <li className="list-inline-item"><a href="#Education">Education</a></li>
                    </ul>
                    <p className="copyright text-center">© 2024 Rakesh Kumar Sahu</p>
                </footer>
            </div>
        </>
    )
}

export default Footer