import React from 'react';
import ModelCard from '../PersonalitiesList/ModelCard';
import {Link} from 'react-router-dom';
import * as emailjs from 'emailjs-com';

const MyCastingSteps =({number, castings, newRequestRef})=> {


    let sendCastings=(e)=>{
        e.preventDefault();
        let firstName=getInputVal('fn');
        let lastName=getInputVal('ln');
        let email = getInputVal('email');
        let contactPhone=getInputVal('phone');
        let message=getInputVal('msg');
        let newCastingsArray=castings.map(casting=>{
            let object=JSON.parse(casting)
            let newCasting={ 
                'URL': 'tribemanagement.lu/model/'+object.id
            }
            return JSON.stringify(newCasting)
        })

        var template_params = {
            "email": email,
            "firstName": firstName,
            "lastName": lastName,
            "phone": contactPhone,
            "message": message,
            "castings": newCastingsArray
         }
         
         var service_id = "default_service";
         var template_id = "send_castings";
         

        if (firstName&&lastName&&email&&contactPhone&&message&&newCastingsArray){
            emailjs.send(service_id, template_id, template_params, "user_SaASf2XDhCvZyY5IzHX2e").then(()=>{
                alert('Your request has been sent');
            });
            
            
        } else {
            alert('One or more fields are empty')
        }
        
        
    }

    let getInputVal=(id) =>{
        return document.getElementById(id).value;
    }

    if (number==0) {
        if (castings.length!==0){
            return (
                <div>
                    {castings.map(doc => {
                        let objectDoc = JSON.parse(doc);
                        return <ModelCard 
                        key={objectDoc.id} 
                        id={objectDoc.id}
                        modelHeight={objectDoc.height}
                        modelChest={objectDoc.chest}
                        modelEyes={objectDoc.eyes}
                        modelHair={objectDoc.hair}
                        modelName={objectDoc.name}
                        modelShoes={objectDoc.shoes}
                        modelWaist={objectDoc.waist}
                        isCasting={true}
                        mainImg={objectDoc.MainPicture}
                        />
                    })}
                </div>
            );
        } else {
            return (
            <div className='pt1'>
                <p><Link className='dim pointer black no-underline' to='/'>Send my casting...</Link></p>
                <p className='gray'>Your casting is empty</p>
            </div>
            )
            
        }
        
    } else {
        return (
            <div>
                <div className='feedback fr w-100 mt3 '>
                <form >
                    <input placeholder='First Name' className='pv2 f4 fl mr4 mb4 w-30'  id='fn'/>
                    <input placeholder='Last Name' className=' pv2 f4 fl mb4 w-30'  id='ln'/>
                    <input placeholder='Email address' className=' f4 pv2 mb4 mr2 w-60' style={{width: '64.5%'}}id='email'/>
                    <input placeholder='Contact address' className='f4 pv2 mb4 mr2' style={{width: '64.5%'}} id='phone'/>
                    <div className='w-100 '>
                        <textarea placeholder='Leave a message' className=' f4 pv2 mb4 mr2' style={{width: '64.5%'}} id='msg'></textarea>
                    </div>
                    
                    <input className="b ph5 pv3 input-reset ba b--black bg-transparent grow pointer f6 fl" type="submit" value="Send" onClick={sendCastings}/>
                </form>
                </div>
            </div>
        );
    }
    
}

export default MyCastingSteps;