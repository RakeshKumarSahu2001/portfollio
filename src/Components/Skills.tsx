import { useContext } from 'react';
import PortfollioContext from '../Store/PortfollioContext';
import Skill from './Skill';

function Skills() {
    const { Frontend, Backend, Other } = useContext(PortfollioContext);

    return (
        <section className="education-section-subtle py-3 py-lg-5" id='Skills'>
            <div className="info-container container-lg d-flex flex-column justify-content-center">
                <div>
                    <h1 className=" text-center py-1 text-primary">Skills</h1>
                    <p className="text-center fs-5">Here are some of my skills on which I have been working for the past 2 years.</p>
                </div>
                <div className="row g-2 py-lg-3 justify-content-center">
                    <div className="col-lg-4 col-md-6 d-flex justify-content-center"><Skill label="Frontend" cardHeader={Frontend} /></div>
                    <div className="col-lg-4 col-md-6 d-flex justify-content-center"><Skill label="Backend" cardHeader={Backend} /></div>
                    <div className="col-lg-4 col-md-6 d-flex justify-content-center"><Skill label="Other" cardHeader={Other} /></div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
