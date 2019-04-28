import React,{Component} from 'react';
import MyCastingSteps from './MyCastingSteps';

export default class MyCasting extends Component {

    constructor(){
        super();
        this.state={
            castings: [],
            key: 0, 

        }
    }

    keyFixer(key){
        this.setState({
            key: key
        })
    }

    nextStep=()=>{
        document.getElementById('castings').style.display='none';
        document.getElementById('sendForm').style.display='block';
    }

    componentDidMount(){
        let castingsArray = [];
        for(let i=0; i<=localStorage.length-1; i++) {
            castingsArray.push(localStorage.getItem(localStorage.key(i)));
        }
        this.setState({castings: castingsArray});
        if(this.props.isMobile){
            document.getElementById('sendForm').style.display='none';
        }
        this.setState({
            newRequestRef: this.props.database.collection('receivedCastings')
        })
       
    }

    render(){
        if (!this.props.isMobile){
            return (
                <div className='cf'>
                    <nav className="fl w-30 mb6 mt3">
                    <ul className='list'>
                            <li className='black f4 pb2 mb3 link dim pa2 pt0 pl0 pointer' onClick={()=>this.keyFixer(0)}>My casting overview</li>
                            <li className='gray f4 pv2 mb3 link dim pa2 pl0 pointer' onClick={()=>this.keyFixer(1)}>Your contacts</li>
                    </ul>
                    </nav> 
                    <div className='fr w-70'>
                        <MyCastingSteps number={this.state.key} castings={this.state.castings} newRequestRef={this.state.newRequestRef}className='mt3 pa2 '/>
                    </div>
                </div>
            )
        } else {


            return (
                <div className='cf'>
                    <div id='castings'>
                        <p className='f4'>My casting overview</p>
                        <MyCastingSteps number={this.state.key} castings={this.state.castings}className='mt3 '/>
                        <input className="b ph5 pv3 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Submit" onClick={this.nextStep}/>
                    </div>
                    <div id='sendForm'>
                    <p className='f4'>Your contacts</p>
                    <form id='contactForm'>
                        <input placeholder='First Name' className='pv2 f4 fl mb4 w-100'  id='fn'/>
                        <input placeholder='Last Name' className=' pv2 f4 fr mb4 w-100'  id='ln'/>
                        <input placeholder='Agency Name' className=' pv2 f4 fr mb4 w-100'  id='ln'/>
                        <input placeholder='Email address' type='email' className='w-100 f4 pv2 mb4 mr2' id='ea' required/>
                        <input placeholder='Contact Phone number' className='w-100 f4 pv2 mb4 mr2' id='ca'/>
                        <textarea placeholder='Leave a message' className='w-100 f4 pv2 mb4 mr2' id='message' required></textarea>
                        <input className="b ph5 pv3 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Send"  />
                    </form>
                    </div>
                </div>
            )
        }

    }

}