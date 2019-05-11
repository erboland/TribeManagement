import React from 'react';
import Instafeed from 'instafeed.js';
import {Link} from 'react-router-dom';

const ContactsChoice = ({number, database, isMobile}) => {
    let newMessageRef = database.collection('messages');
    let userFeed = new Instafeed({
        get: 'user',
        userId: '9643392414',
        accessToken: '9643392414.cf33cef.369b9eba43d548cab5c18beba68594ba',
        limit: 4, 
        resolution: 'standard_resolution', 
        template: '<div class="w-25 h-20 mr0 hoverbox" fl><a href="{{link}}" ><img src="{{image}}" class="image" /></a></p></div>'
    })
    console.log(userFeed.run())

    if (!isMobile){
        if (number===0) {
            return (
                <div className='fl w-50'>
                    <div className='fl w-80'>
                        <div className='contacts'>
                        <p>
                        Tribe management<br/> <br/>
                        <div className='gray lh-copy'>
                        Tribe Management is an agency that represents personalities, guys and girls evolving in the Seven Arts and sports. We believe that charisma, originality and identity of each is a plus in the fashion industry.
                        <br/><br/>
                        Email us: <a href='mailto:contact@tribemanagement.lu' className='black dim pointer no-underline'>contact@tribemanagement.lu</a><br/>
                        <Link to='/controlpanel' className='gray no-underline dim pointer'>A</Link>
                        </div>                           
                        </p>
                    </div>
                </div>
                </div>
            );
        } else {
            return (
                <div className='instagram fr w-80'>
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
                            Tribe Management is an agency that represents personalities, guys and girls evolving in the Seven Arts and sports. We believe that charisma, originality and identity of each is a plus in the fashion industry.
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