import React, { Component } from 'react';
import './BecomeModel.css';
import Steps from './Steps';


export default class Header extends Component{
    constructor () {
        super();
        this.state={
            step: 0
        }

    }

    changeStep(key) {
        this.setState({
            step: key
        })
    }

    render () {
        return (
            <div className='cf main'>
                <nav className="fl w-30 mb6 mt3">
                    <ul className='list'>
                        <li className='black f4 pb2 mb4 link dim pa2 pt0 pl0'>First Step</li>
                        <li className='gray f4 pv2 mb4 link dim pa2 pl0'>Second Step</li>
                        <li className='gray f4 pv2 mb4 link dim pa2 pl0'>Final Step</li>
                    </ul>
                    
                </nav>
                <form className="fl w-50">
                    <Steps number={this.state.step}/>
                </form>
                

                
            </div>
        )
    }

}

