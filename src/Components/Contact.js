import contact from './Assets/contract.png'
import './Styles/contact.css'

const Contact = () => {
    return ( 
        <div className="contact">
           <div className="contactContainer">
                <div className='heading'>
                            <img src={contact} alt="feducation"/>
                            <h1>Contact us</h1>
                </div>
               <div className='contactBody'>
                    <h1>This is supposed to be a contact container</h1>
                    <div className='innercon'>
                        Akindee dgvuyvdu gsdy  sdyg  yuds ygdytv g\sd\gycsu sgh yu wBC U\CSUY CSU DUY
                    </div>
               </div>
           </div>
        </div>
     );
}
 
export default Contact;