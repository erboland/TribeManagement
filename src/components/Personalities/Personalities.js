import React, { Component } from 'react';
import PersonalitiesList from '../PersonalitiesList/PersonalitiesList';
import {Link} from 'react-router-dom';

import './Personalities.css';


export default class Personalities extends Component{

    componentDidMount(){
        if(this.props.number==2){
            document.getElementById('viewMore').style.display='none';
        }
        document.getElementById('viewMore').style.textDecoration='none';

        if(this.props.isMobile){
            document.getElementById('personalities_alphabet').style.display='none';
            document.getElementById('viewMore').style.borderStyle='solid';
            document.getElementById('viewMore').style.width='30vw';
            document.getElementById('viewMore').style.borderWidth='1px';
        }
    }


    
    render () {
        console.log(this.props.isMobile)
        return (
            <div className="personalities_desktop pl3">
                <div className="personalities_types mt4 pv3 pl2"> 
                    <a className="link mr3 dim black pointer" >Main board</a>
                    <a className="link mr2 dim gray pointer" >New faces</a>
                    <a className="link mr2 dim gray pointer">Dancers</a>
                    <a className="link mr2 dim gray pointer">All</a>
                </div>
                <div id="personalities_alphabet" className='pl2'>
                    <a className="link mr2 dim gray" href='#'>a</a>
                    <a className="link mr2 dim gray" href='#'>b</a>
                    <a className="link mr2 dim gray" href='#'>c</a>
                    <a className="link mr2 dim gray" href='#'>d</a>
                    <a className="link mr2 dim gray" href='#'>e</a>
                    <a className="link mr2 dim gray" href='#'>f</a>
                    <a className="link mr2 dim gray" href='#'>g</a>
                    <a className="link mr2 dim gray" href='#'>h</a>
                    <a className="link mr2 dim gray" href='#'>i</a>
                    <a className="link mr2 dim gray" href='#'>j</a>
                    <a className="link mr2 dim gray" href='#'>k</a>
                    <a className="link mr2 dim gray" href='#'>l</a>
                    <a className="link mr2 dim gray" href='#'>m</a>
                    <a className="link mr2 dim gray" href='#'>n</a>
                    <a className="link mr2 dim gray" href='#'>o</a>
                    <a className="link mr2 dim gray" href='#'>p</a>
                    <a className="link mr2 dim gray" href='#'>q</a>
                    <a className="link mr2 dim gray" href='#'>r</a>
                    <a className="link mr2 dim gray" href='#'>s</a>
                    <a className="link mr2 dim gray" href='#'>t</a>
                    <a className="link mr2 dim gray" href='#'>v</a>
                    <a className="link mr2 dim gray" href='#'>u</a>
                    <a className="link mr2 dim gray" href='#'>w</a>
                    <a className="link mr2 dim gray" href='#'>x</a>
                    <a className="link mr2 dim gray" href='#'>y</a>
                    <a className="link mr2 dim gray" href='#'>z</a>
                </div>
                <PersonalitiesList isMobile={this.props.isMobile} models={this.props.models} database={this.props.database} number={this.props.number}/>
                <div className='flex justify-center'>
                    <Link className='mt3 black flex justify-center mb5 dim pointer b pa2' to='/allmodels' id='viewMore'>
                        View more
                    </Link>
                </div>
                
            </div>
        )
    }

}
