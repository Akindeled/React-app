import feducation from './Assets/fe.png'
import './Styles/feducation.css'
const Feducation = () => {
    return ( 
        <div className="feducation">
            <div className='title'>
                <img src={feducation}  />
                <h1>Formal Education</h1>
            </div>
            <div className='tierCon'>
                <div className="tier">
                    <h4>Tertiary Education</h4>
                    <p><span>Programme</span>Bachelor of Engineering(In view)</p>
                    <p><span>Discipline</span>Aerospace Engineering(Aeronautics)</p>
                    <p><span>Institute</span>Air Force Institute of Technology,Kaduna</p>
                    <p><span>Duration</span>2020 - 2025</p>
                </div>
                <div className="tier">
                    <h4>Secondary Education</h4>
                    <p><span>Programme</span>Senior Sch Certificate</p>
                    <p><span>Discipline</span>Sciences</p>
                    <p><span>Institute</span>Enny Dav College,Olambe.</p>
                    <p><span>Duration</span>2018</p>
                </div>
                <div className="tier">
                    <h4>Junior Secondary Education</h4>
                    <p><span>Programme</span>Junior Secondary Sch Certificate</p>
                    <p><span>Discipline</span>NIL</p>
                    <p><span>Institute</span>Nolad City College</p>
                    <p><span>Duration</span>2014</p>
                </div>
                <div className="tier">
                    <h4>Primary School Education</h4>
                    <p><span>Programme</span>First School Leaving Certificate</p>
                    <p><span>Discipline</span>NIL</p>
                    <p><span>Institute</span>Nolad City Nursery and Primary School,Osere.</p>
                    <p><span>Duration</span>2020 - 2025</p>
                </div>
            </div>

        </div>
     );
}
 
export default Feducation;