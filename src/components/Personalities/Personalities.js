import React, { Component } from 'react';
import PersonalitiesList from '../PersonalitiesList/PersonalitiesList';
import {Link} from 'react-router-dom';

import './Personalities.css';


export default class Personalities extends Component{

    constructor(){
        super();
        this.state={
            letter: "",
            page: 0
        }
    }
    componentDidMount(){
        if(this.props.number==2||this.props.number==3||this.props.number==4){
            document.getElementById('viewMore').style.display='none';
        }
        document.getElementById('viewMore').style.textDecoration='none';
        
        if(this.props.isMobile){
            document.getElementById('personalities_alphabet').style.display='none';
            document.getElementById('viewMore').style.borderStyle='solid';
            document.getElementById('viewMore').style.width='30vw';
            document.getElementById('viewMore').style.borderWidth='1px';
            document.getElementById('viewMoreIcon').style.display='none';
            document.getElementById('viewMore').style.textAlign='center';
        }
        
    }

    letterSetter = (l, e)=>{
        e.preventDefault();
        this.setState({letter: l});
        for (let i=14;i<=30;i++){
            if (document.getElementsByTagName('a')[i].id===l){
                document.getElementsByTagName('a')[i].style.color='black';
            } else {
                document.getElementsByTagName('a')[i].style.color='gray'
            }
            
        }
        console.log()
    }
    
    render () {
        return (
            <div className="personalities_desktop pl3">
                <div className="personalities_types mt4 pv3 pl2"> 
                    <Link to='/' className="link mr3 dim pointer black" id='1'>Main board</Link>
                    <Link to='/newfaces' className="link mr3 dim pointer black" id='3'>New faces</Link>
                    <Link to='/dancers'className="link mr3 dim  pointer black" id='4'>Dancers</Link>
                    <Link className="link mr3 dim pointer black" to='/allmodels' id='2'>All</Link>
                </div>
                <div id="personalities_alphabet" className='pl2'>
                    <a className="link mr2 dim gray pointer" id='A' onClick={(e)=>this.letterSetter('A',e)}>a</a>
                    <a className="link mr2 dim gray pointer" id='B' onClick={(e)=>this.letterSetter('B',e)}>b</a>
                    <a className="link mr2 dim gray pointer" id='C' onClick={(e)=>this.letterSetter('C',e)}>c</a>
                    <a className="link mr2 dim gray pointer" id='D' onClick={(e)=>this.letterSetter('D',e)}>d</a>
                    <a className="link mr2 dim gray pointer" id='E' onClick={(e)=>this.letterSetter('E',e)}>e</a>
                    <a className="link mr2 dim gray pointer" id='F' onClick={(e)=>this.letterSetter('F',e)}>f</a>
                    <a className="link mr2 dim gray pointer" id='G' onClick={(e)=>this.letterSetter('G',e)}>g</a>
                    <a className="link mr2 dim gray pointer" id='H' onClick={(e)=>this.letterSetter('H',e)}>h</a>
                    <a className="link mr2 dim gray pointer" id='I' onClick={(e)=>this.letterSetter('I',e)}>i</a>
                    <a className="link mr2 dim gray pointer" id='J' onClick={(e)=>this.letterSetter('J',e)}>j</a>
                    <a className="link mr2 dim gray pointer" id='K' onClick={(e)=>this.letterSetter('K',e)}>k</a>
                    <a className="link mr2 dim gray pointer" id='L' onClick={(e)=>this.letterSetter('L',e)}>l</a>
                    <a className="link mr2 dim gray pointer" id='M' onClick={(e)=>this.letterSetter('M',e)}>m</a>
                    <a className="link mr2 dim gray pointer" id='N' onClick={(e)=>this.letterSetter('N',e)}>n</a>
                    <a className="link mr2 dim gray pointer" id='O' onClick={(e)=>this.letterSetter('O',e)}>o</a>
                    <a className="link mr2 dim gray pointer" id='P' onClick={(e)=>this.letterSetter('P',e)}>p</a>
                    <a className="link mr2 dim gray pointer" id='Q' onClick={(e)=>this.letterSetter('Q',e)}>q</a>
                    <a className="link mr2 dim gray pointer" id='R' onClick={(e)=>this.letterSetter('R',e)}>r</a>
                    <a className="link mr2 dim gray pointer" id='S' onClick={(e)=>this.letterSetter('S',e)}>s</a>
                    <a className="link mr2 dim gray pointer" id='T' onClick={(e)=>this.letterSetter('T',e)}>t</a>
                    <a className="link mr2 dim gray pointer" id='V' onClick={(e)=>this.letterSetter('V',e)}>v</a>
                    <a className="link mr2 dim gray pointer" id='U' onClick={(e)=>this.letterSetter('U',e)}>u</a>
                    <a className="link mr2 dim gray pointer" id='W' onClick={(e)=>this.letterSetter('W',e)}>w</a>
                    <a className="link mr2 dim gray pointer" id='X' onClick={(e)=>this.letterSetter('X',e)}>x</a>
                    <a className="link mr2 dim gray pointer" id='Y' onClick={(e)=>this.letterSetter('Y',e)}>y</a>
                    <a className="link mr2 dim gray pointer" id='Z' onClick={(e)=>this.letterSetter('Z',e)}>z</a>
                </div>
                <PersonalitiesList isMobile={this.props.isMobile}  database={this.props.database} number={this.props.number} letter={this.state.letter}/>
                <div className='flex justify-center'>
                    <Link className='mt3 black flex justify-center items-center mb5 dim pointer pa2 flex-column' to='/allmodels' id='viewMore'>
                        <div className='w-100'>View more</div>
                        <div className='w-100' id='viewMoreIcon'>
                        </div>
                    </Link>
                </div>
                
            </div>
        )
    }

}
