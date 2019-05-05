import React from 'react';
import Instafeed from 'instafeed.js';
import {Link} from 'react-router-dom';

const ContactsChoice = ({number, database, isMobile}) => {
    let newMessageRef = database.collection('messages');
    let userFeed = new Instafeed({
        get: 'user',
        userId: 'tribemodels',
        accessToken: '81c59bb6fde7477b8d03d048f59a0c30'
    })

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
                <div className='instagram fr w-75'>
                    <p>
                        Instagram <a href='https://www.instagram.com/tribe.management/' className='link black dim no-underline'>@tribe.management</a>
                    </p>
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