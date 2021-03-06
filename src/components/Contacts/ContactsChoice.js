import React from 'react';
import Instafeed from 'instafeed.js';
import {Link} from 'react-router-dom';

const ContactsChoice = ({number, database, isMobile}) => {
    let newMessageRef = database.collection('messages');
    let userFeed = new Instafeed({
        get: 'user',
        userId: '9643392414',
        accessToken: '9643392414.cf33cef.369b9eba43d548cab5c18beba68594ba',
        limit: 3, 
        resolution: 'standard_resolution', 
        template: '<div class="w-30 h-20 mr0 hoverbox" fl><a href="{{link}}" ><img src="{{image}}" class="image" /></a></p></div>'
    })
    console.log(userFeed.run())

    if (!isMobile){
        if (number===0) {
            return (
                <div className='fl w-70'>
                    
                        <div className='contacts'>
                        <p>
                        Tribe management<br/> <br/>
                        <div className='gray lh-copy'>
                        Tribe Management is an agency that represents personalities, girls and guys evolving in the Seven Arts and sports. We believe that charisma, originality and identity of each is an added value in the fashion industry.
                        <br/><br/>
                        Email us: <a href='mailto:contact@tribemanagement.lu' className='black dim pointer no-underline'>contact@tribemanagement.lu</a><br/>
                        </div>                           
                        </p>
                    </div>
                
                </div>
            );
        } else {
            return (
                <div className='instagram fl w-70'>
                    <p>
                        Instagram <a href='https://www.instagram.com/tribe.management/' className='link black dim no-underline'>@tribe.management</a>
                    </p>
                    <div id='instafeed'>
                        
                    </div>
                </div>
            );
    
        }
    } else {
        if (number==0){
            return (
                <div>
                    <p className='f3'>
                        Tribe Management
                    </p>
                    <div className='gray'>
                        <p>
                            <div className='gray lh-copy'>
                            Tribe Management is an agency that represents personalities, girls and guys evolving in the Seven Arts and sports. We believe that charisma, originality and identity of each is an added value in the fashion industry.
                            <br/><br/>
                            Email us: <a href='mailto:contact@tribemanagement.lu' className='black dim pointer no-underline'>contact@tribemanagement.lu</a>
                            </div>
                        </p>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    Error 404
                </div>
            )
        }
        
    }


}
export default ContactsChoice;