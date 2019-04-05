import React, { Component } from 'react';
import './Model.css';
import {Link} from 'react-router-dom';
import ModelSections from './ModelSections';

export default class Model extends Component{
    constructor(){
        super()
        this.state={
            key: 0
        }

    }

    changeKey (key) {
        this.setState ({key: key})
        // document.getElementById(`{key}`).style
    }

    render () {
        return (
            <div className='cf main'>
                <nav className="fl w-30 mb6 mt3 cf">
                    <p className='b f2 pa2 pl4 mb5'>
                        Otto
                    </p>
                    <ul className='list'>
                            <li className='black f4 pb2 mb4 link dim pa2 pt0 pl0 pointer'  onClick={()=>this.changeKey(0)}>Characteristic</li>
                            <li className='gray f4 pv2 mb4 link dim pa2 pl0 pointer' onClick={()=>this.changeKey(1)}>Portfolio</li>
                            <li className='gray f4 pv2 mb4 link dim pa2 pl0 pointer' onClick={()=>this.changeKey(2)}>Print</li>
                            <li className='black f4 pb2 mb4 pa2 pt0 pl0 pointer mt4 pt4'><Link to='/' className='b link dim black'>Back</Link></li>
                    </ul>
                    
                </nav>
                <div className='fl w-70'>
                    {this.characteristic}
                    <ModelSections number={this.state.key} style={{height: '40vh'}}/>
                    
                    
                </div>
            </div>
            
        )
    }

}