import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

export default class Header extends Component{


    render () {
        return (
            <nav className="pa5 pa4-ns pl0">
                <Link className="link dim black b f6 f5-ns dib mr3 " to="/" title="Home">Tribe Management</Link>
                <Link className="link dim black underline f6 f5-ns dib mr3 pl4" to="/" title="Home">Personalities</Link>
                <a className="link dim black    f6 f5-ns dib mr3" href="#" title="About">News</a>
                <Link className="link dim black    f6 f5-ns dib mr3" to='/becomemodel' title="Store">Become a model</Link>
                <Link className="link dim black    f6 f5-ns dib" to='/contacts' title="Contact">Contacts</Link>
                <a className="link dim black    f6 f5-ns dib fr mr5" href="#" title="My casting">My casting(0)</a>
            </nav>
        )
    }

}