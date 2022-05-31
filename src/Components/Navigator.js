import '../App.css'
import landing from './Assets/lp.png'
import skills from './Assets/skills.jpg'
import formalE from './Assets/gradCap.png'
import project from './Assets/project.png'
import contract from './Assets/contract.png'

const Navigator = () => {
    return ( 
        <div className="navigator">
        <a href='./'>
        <div className="box">
          <p className="icons"><img src={landing} alt="Icons" /></p>
          <p className="text"><span>Landing Page</span></p>
        </div>
        </a>

        <a href='Feducation'>
        <div className="box">
          <p className="icons"><img src={formalE} alt="Icons" /></p>
          <p className="text">Formal Education</p>
        </div>
        </a>


        <a href='./Skills'>
        <div className="box">
          <p className="icons"><img src={skills} alt="Icons" /></p>
          <p className="text">Skills and Abilities</p>
        </div>
        </a> 


        <a href='./project'>
        <div className="box">
          <p className="icons"><img src={project} alt="Icons" /></p>
          <p className="text">Projects and Showcase</p>
        </div>
        </a>

        <a href='./Contact'>
        <div className="box">
          <p className="icons"><img src={contract} alt="Icons" /></p>
          <p className="text">Contact and Contract</p>
        </div>
        </a>
      </div>
     );
}
 
export default Navigator;
