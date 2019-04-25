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

    burgerToggle=(e)=>{
        e.preventDefault();
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}

    render () {
        return (
            <nav>
                <div className="pa5 pa4-ns pl0 pr0 navWide">
                    <Link className="link dim black b f6 f5-ns dib mr3 " to="/" title="Home" >Tribe Management</Link>
                    <Link className="link dim black  f6 f5-ns dib mr3 pl4" to="/" title="Home" id='0' onClick={()=>this.keyFixer(0)}>Personalities</Link>
                    <a className="link dim black    f6 f5-ns dib mr3" href="#" title="About" id='1' onClick={()=>this.keyFixer(1)}>News</a>
                    <Link className="link dim black    f6 f5-ns dib mr3" to='/becomemodel' title="Store" id='2' onClick={()=>this.keyFixer(2)}>Become a model</Link>
                    <Link className="link dim black    f6 f5-ns dib" to='/contacts' title="Contact" id='3'onClick={()=>this.keyFixer(3)}>Contacts</Link>
                    <Link className="link dim black    f6 f5-ns dib fr " to='/mycasting' title="My casting">My casting({this.state.cart?this.state.cart.length:0})</Link>
                </div>
                <div className="navNarrow">
					<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
					<div className="narrowLinks">
						<a href="#" onClick={this.burgerToggle}>Link 1</a>
						<a href="#" onClick={this.burgerToggle}>Link 2</a>
						<a href="#" onClick={this.burgerToggle}>Link 3</a>
					</div>
				</div>

            </nav>
           

        )
    }

}