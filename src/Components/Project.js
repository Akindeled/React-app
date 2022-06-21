import './Styles/projectDisplay.css'
import skills from './Assets/project.png'

const Project = () => {
    return ( 
            <div className="ProjectDisplay">
                <div className='ProjectContainer'>
                        <div className='heading'>
                        <img src={skills} alt='myimage'/>
                        
                        <h1>Skills and Abilities...</h1>
                        </div>
                        <div className='dis'>
                        <h1>No Project to display at the moment
                        <span className="span">Check Back later</span>
                        <div className='after'></div>
                        </h1>
                        </div>
                </div>
            </div>
        );
}
 
export default Project;