import React, {Component} from 'react';


export default class Admin extends Component {
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return (
            <div className='cf'>
                <input placeholder='First Name' className='pv2 f4 fl mb4' style={{width: '47.5%'}} id='fn'/>
                <input placeholder='Last Name' className=' pv2 f4 fr mb4' style={{width: '47.5%'}} id='ln'/>
                <input placeholder='Bust size (cm)' id='bust' className='w-100 f4 pv2 mb4 mr2'/>
                <input placeholder='Waist size (cm)' id='waist' className='w-100 f4 pv2 mb4 mr2'/>
                <input placeholder='Hips size (cm)' id='hips'className='w-100 f4 pv2 mb4 mr2'/>
                <input placeholder='Shoes size (cm)' id='shoes'className='w-100 f4 pv2 mb4 mr2'/>
                <input placeholder='Hair color' id='hair'className='w-100 f4 pv2 mb4 mr2'/>
                <input placeholder='Eyes color' id='eyes'className='w-100 f4 pv2 mb4 mr2'/>
                <input className="b ph5 pv3 input-reset ba b--black bg-transparent grow pointer f6 fl w-30" type="submit" value="Send" onClick={this.submitForm}/>
            </div>
        )
    }


}