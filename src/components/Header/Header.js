import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

export default class Header extends Component{

    constructor(){
        super();
        this.state ={
            cart: localStorage,
            key:0
        }
        
    }

    keyFixer(key){
        for (let i=0; i<=3; i++){
            console.log(document.getElementById(i));
            if (i===key) {
                document.getElementById(i).style.textDecoration='underline';
            } else{
                document.getElementById(i).style.textDecoration='none';
            }
        }
        this.setState({
            key: key
        })
    }
    componentDidMount(){
        for (let i=0; i<=3; i++){
            if (i===this.state.key) {
                document.getElementById(i).style.textDecoration='underline';
            } else{
                document.getElementById(i).style.textDecoration='none';
            }
        }
    }

    render () {
        return (
            <nav className="pa5 pa4-ns pl0">
                <Link className="link dim black b f6 f5-ns dib mr3 " to="/" title="Home" >Tribe Management</Link>
                <Link className="link dim black  f6 f5-ns dib mr3 pl4" to="/" title="Home" id='0' onClick={()=>this.keyFixer(0)}>Personalities</Link>
                <a className="link dim black    f6 f5-ns dib mr3" href="#" title="About" id='1' onClick={()=>this.keyFixer(1)}>News</a>
                <Link className="link dim black    f6 f5-ns dib mr3" to='/becomemodel' title="Store" id='2' onClick={()=>this.keyFixer(2)}>Become a model</Link>
                <Link className="link dim black    f6 f5-ns dib" to='/contacts' title="Contact" id='3'onClick={()=>this.keyFixer(3)}>Contacts</Link>
                <Link className="link dim black    f6 f5-ns dib fr mr5" to='/mycasting' title="My casting">My casting({this.state.cart?this.state.cart.length:0})</Link>
            </nav>
        )
    }

}