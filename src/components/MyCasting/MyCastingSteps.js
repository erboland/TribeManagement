import React from 'react';
import ModelCard from '../PersonalitiesList/ModelCard';
import {Link} from 'react-router-dom';

const MyCastingSteps =({number, castings, newRequestRef})=> {


    let sendCastings=(e)=>{
        e.preventDefault();
        let firstName=getInputVal('fn');
        let lastName=getInputVal('ln');
        let email = getInputVal('email');
        let contactPhone=getInputVal('phone');
        let message=getInputVal('msg');
        let casting=castings;
        if (firstName&&lastName&&email&&contactPhone&&message&&casting){
            console.log(casting)
            saveCastings(firstName, lastName, email, contactPhone, message, casting);
            alert('Your request has been sent');
            
        } else {
            alert('One or more fields are empty')
        }
        
        
    }

    let getInputVal=(id) =>{
        return document.getElementById(id).value;
    }

    let saveCastings=(firstName, lastName, email, contactPhone, message, castings)=>{
        let newCastingsArray=castings.map(casting=>{
            let object=JSON.parse(casting)
            let newCasting={
                'Name': object.name, 
                'ID': object.id
            }
            return JSON.stringify(newCasting)
        })

        newRequestRef.add({
            'First name': firstName, 
            "Last name": lastName, 
            "Email": email, 
            "Contact Phone": contactPhone, 
            "Message": message, 
            "Castings": newCastingsArray
        })
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
                <div className='feedback fr w-100 mt3'>
                <form >
                    <input placeholder='First Name' className='pv2 f4 fl mb4' style={{width: '47.5%'}} id='fn'/>
                    <input placeholder='Last Name' className=' pv2 f4 fr mb4' style={{width: '47.5%'}} id='ln'/>
                    <input placeholder='Email address' className='w-100 f4 pv2 mb4 mr2' id='email'/>
                    <input placeholder='Contact address' className='w-100 f4 pv2 mb4 mr2' id='phone'/>
                    <textarea placeholder='Leave a message' className='w-100 f4 pv2 mb4 mr2' id='msg'></textarea>
                    <input className="b ph5 pv3 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Send" onClick={sendCastings}/>
                </form>
                </div>
            </div>
        );
    }
    
}

export default MyCastingSteps;