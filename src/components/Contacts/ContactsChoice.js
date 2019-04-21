import React from 'react';
import Instafeed from 'instafeed.js';

const ContactsChoice = ({number, database}) => {
    let newMessageRef = database.collection('messages');
    let userFeed = new Instafeed({
        get: 'user',
        userId: 'tribemodels',
        accessToken: '81c59bb6fde7477b8d03d048f59a0c30'
    })
    if (number===0) {
        return (
            <div className='fl w-50'>
                <div className='fl w-70'>
                    <div className='contacts'>
                    <p>
                    Tribe management<br/> <br/>
                    <div className='gray'>
                        16, rue de la Grange Batelière <br/>
                        75009 Paris - FRANCE<br/> <br/>
                        +33 (3)3 33 33 33 33<br/>
                        +33 (3)3 33 33 33 33<br/> <br/>
                        tribe@management.lu
                    </div>
                    </p>
                    <p className='pv4'>
                        Booking<br/><br/>
                        <div className='gray'>
                            info@crystal-models.com<br/>
                            Caroline : caroline@crystal-models.com<br/>
                            Frédérique : fred@crystal-models.com<br/>
                            Micaela : micaela@crystal-models.com 
                        </div> 
                    </p>
                    <p>
                        Image&scounting<br/><br/>
                        <div className='gray'>
                            David Muhire : david@crystal-models.com
                        </div>                           
                    </p>
                </div>
            </div>
                <div className='fr w-30'>
                Here you should see the map
                </div>
            </div>
        );
    } else if (number===1) {
        let getInputVal=(id) =>{
            return document.getElementById(id).value;
        }
        let submitForm = (e) => {
            e.preventDefault();
            console.log('1');
            let firstName=getInputVal('fn');
            let lastName=getInputVal('ln');
            let emailAdd=getInputVal('ea');
            let contactAdd=getInputVal('ca');
            let message=getInputVal('message');
            saveMessage(firstName, lastName, emailAdd, contactAdd, message);
            alert('Your message has been sent!');
            document.getElementById('contactForm').reset();
        }
        
        let saveMessage=(firstName, lastName, email, contact, message)=>{
            newMessageRef.add ({
                "First Name":firstName, 
                "Last Name": lastName, 
                "Email" :email, 
                "Contact Phone Number": contact,
                "Message": message
            })
        }
        return (
            <div className='feedback fr w-70'>
                <form id='contactForm'>
                    <input placeholder='First Name' className='pv2 f4 fl mb4' style={{width: '47.5%'}} id='fn'/>
                    <input placeholder='Last Name' className=' pv2 f4 fr mb4' style={{width: '47.5%'}} id='ln'/>
                    <input placeholder='Email address' type='email' className='w-100 f4 pv2 mb4 mr2' id='ea' required/>
                    <input placeholder='Contact Phone number' className='w-100 f4 pv2 mb4 mr2' id='ca'/>
                    <textarea placeholder='Leave a message' className='w-100 f4 pv2 mb4 mr2' id='message' required></textarea>
                    <input className="b ph5 pv3 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Send" onClick={submitForm} />
                </form>
            </div>
        );
    } else {
        return (
            <div className='instagram fr w-70'>
                <p>
                    Instagram <a href='https://www.instagram.com/tribe.management/' className='link black dim underline'>@tribe.management</a>
                </p>
            </div>
        );

    }
}
export default ContactsChoice;