import './Styles/landingPage.css'
import myImage from './Assets/DarkMe.jpg'
import skills from './Assets/skills.jpg'
import formalE from './Assets/gradCap.png'
import project from './Assets/project.png'
import contract from './Assets/contract.png'
const LandingPage = () => {
    return ( 
    <div className="LandingPage">
        <div className='Container'>
            <div className='imageClass'>
                <img  className="image" src={myImage} alt='Something' />
             <h1>Welcome<br />It is nice having you here...</h1>
            <p className='myHover'>
                <h1>Akindele Daniel Oluwasanmi</h1>
                <p>
                    <b>Akindele Daniel by name born and brought up a Nigerian</b>
                    <br />
                    <br />
                    <br />
                    An Undergrad of Airforce Institute of Technology,a student of Aerospace Engineering(Aeronautics).A lover of innovation and self-motivated to appropiate time resources in analysis of  real life and modelled problems hence profering reasonably efficent solution to identified problem.
                </p>
            </p>
            </div>
            <div className='tableOfCOntent'>
            <h1>Table of Contents</h1>
            <div className='ps'>
            <p>
                <p><img src={formalE} alt="Icons" /></p>
                <h3>Formal Education</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores saepe esse iusto officiis dicta quas repudiandae.
            <hr />
            </p>
            <p>
                <p><img src={skills} alt="Icons" /></p>
                <h3>Skills and Abilities</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores saepe esse iusto officiis dicta quas repudiandae.
            <hr />
            </p>
            <p>
                <p><img src={project} alt="Icons" /></p>
                <h3>Projects and Showcase</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores saepe esse iusto officiis dicta quas repudiandae.
            <hr />
            </p>
            <p>
                <p><img className='small' src={contract} alt="Icons" /></p>
                <h3>Contacts and Contracts</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores saepe esse iusto officiis dicta quas repudiandae.
            </p>
            </div>
            </div>
        </div>
    </div> 
    );
} 
export default LandingPage;

// What is this page supposed to display?
// Okay It could tell the user the reason of the whole things they are about to view...and provide the road map...