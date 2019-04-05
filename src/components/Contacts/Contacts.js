import React, { Component } from 'react';
import './Contacts.css';
import ContactsChoice from './ContactsChoice';

export default class Contacts extends Component{
    constructor(){
        super();
        this.state={
            key: 0
        }
    }
    keyFixer(key){
        this.setState(
            {
                key: key
            }
        )
        console.log(this.state.key);
    }
    render () {
        return (
            <div className='cf main'>
                <nav className="fl w-30 mb6 mt3">
                <ul className='list'>
                        <li className='black f4 pb2 mb4 link dim pa2 pt0 pl0 pointer' onClick={()=>this.keyFixer(0)}> Contacts</li>
                        <li className='gray f4 pv2 mb4 link dim pa2 pl0 pointer' onClick={()=>this.keyFixer(1)}>Feedback</li>
                        <li className='gray f4 pv2 mb4 link dim pa2 pl0 pointer' onClick={()=>this.keyFixer(2)}>Social Media</li>
                </ul>
                </nav> 
                <ContactsChoice number={this.state.key}/>
            </div>
            
        )
    }

}