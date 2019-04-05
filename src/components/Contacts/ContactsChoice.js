import React from 'react';

const ContactsChoice = ({number}) => {
    console.log(number);
    if (number==0) {
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
    } else if (number==1) {
        return (
            <div className='feedback fr w-70'>
                <form >
                    <input placeholder='First Name' className='pv2 f4 fl mb4' style={{width: '47.5%'}}/>
                    <input placeholder='Last Name' className=' pv2 f4 fr mb4' style={{width: '47.5%'}}/>
                    <input placeholder='Email address' className='w-100 f4 pv2 mb4 mr2'/>
                    <input placeholder='Contact address' className='w-100 f4 pv2 mb4 mr2'/>
                    <textarea placeholder='Leave a message' className='w-100 f4 pv2 mb4 mr2'></textarea>
                    <input class="b ph5 pv3 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Send"/>
                </form>
            </div>
        );
    } else {
        return (
            <div className='instagram fr w-70'>
                <p>
                    Instagram <a href='https://www.instagram.com/tribe.management/' className='link black dim'>@tribe.management</a>
                </p>
            </div>
        );

    }
}
export default ContactsChoice;