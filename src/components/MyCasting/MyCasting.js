import React,{Component} from 'react';
import MyCastingSteps from './MyCastingSteps';

export default class MyCasting extends Component {

    constructor(){
        super();
        this.state={
            castings: sessionStorage.getItem('castings'),
            key: 0
        }
    }

    keyFixer(key){
        this.setState({
            key: key
        })
    }

    render(){
        return (
            <div className='cf'>
                <nav className="fl w-30 mb6 mt3">
                <ul className='list'>
                        <li className='black f4 pb2 mb4 link dim pa2 pt0 pl0 pointer' onClick={()=>this.keyFixer(0)}>My casting overview</li>
                        <li className='gray f4 pv2 mb4 link dim pa2 pl0 pointer' onClick={()=>this.keyFixer(1)}>Your contacts</li>
                </ul>
                </nav> 
                <div>
                    <MyCastingSteps number={this.state.key} castings={this.state.castings}className='mt3 pa2'/>
                </div>
            </div>
        )
    }

}