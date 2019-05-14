import React, { Component } from 'react';
import './Contacts.css';
import ContactsChoice from './ContactsChoice';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default class Contacts extends Component{
    constructor(){
        super();
        this.state={
            key: 0, 
            options: [
                {value: 0, label: 'Contacts'},
                {value: 1, label: 'Feedback'}
            ]
        }
        
    }
    keyFixer(section){
        this.setState(
            {
                key: section
            }
        )
        for (let i=0; i<=1; i++){
            if (i===section) {
                document.getElementById(30+i).style.color='black';
            } else{
                document.getElementById(30+i).style.color='gray';
            }
        }
    }

    changeNumber = (number)=>{
        this.setState({
            key: number.value
        })
    }

    componentDidMount(){
        document.getElementById(this.state.key+30).style.color='black';

    }
    render () {

        const defaultOption=this.state.options[0];
        if (!this.props.isMobile){
            return (
                <div className='cf main'>
                    <nav className="fl w-25 mb6 mt3">
                    <ul className='list'>
                            <li className='gray f4 pb2 mb3 link dim pa2 pt0 pl0 pointer' onClick={()=>this.keyFixer(0)} id='30'> Contacts</li>
                            <li className='gray f4 pv2 mb3 link dim pa2 pl0 pointer' onClick={()=>this.keyFixer(1)} id='31'>Social Media</li>
                    </ul>
                    </nav> 
                    <ContactsChoice number={this.state.key} database={this.props.database} isMobile={this.props.isMobile}/>
                </div>
                
            )
        } else {
            return (
                <div className='cf'>
                    <ContactsChoice number={this.state.key} database={this.props.database} isMobile={this.props.isMobile}/>
                </div>
            )
        }

    }

}