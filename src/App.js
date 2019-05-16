import React, { Component } from 'react';

import './App.css';
import 'tachyons';
import firebase from 'firebase';
import {DB_CONFIG} from './Config';
import 'firebase/firestore';
import 'firebase/storage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Personalities from './components/Personalities/Personalities';
import BecomeModel from './components/BecomeModel/BecomeModel';
import Contacts from './components/Contacts/Contacts';
import Model from './components/Model/Model';
import MyCasting from './components/MyCasting/MyCasting';
import Admin from './components/Admin/Admin';


let cartItems=[];



class App extends Component {

  constructor() {
    super();

    this.state={
      models: [],
      myName: 'Yerbol',
      width: window.innerWidth
    }

    this.app=firebase.initializeApp(DB_CONFIG);
    this.database=firebase.firestore();
    this.storage=firebase.storage();
    
  }

  componentDidMount () {
    this.setState({ width: window.innerWidth });
  

  }
  

  render() {

    const { width } = this.state;
    const isMobile = width <= 500;

    return (
      <div className="App" >
        <Router>
        <Header isMobile={isMobile}/>
        <div className='main'>
          <Route exact path='/' component={props=><Personalities {...props} isMobile={isMobile} database={this.database} number={1}/>}/>
          <Route path='/becomemodel' component={props=><BecomeModel {...props} isMobile={isMobile} database={this.database} storage={this.storage}/>}/>
          <Route path='/contacts' component={props=><Contacts {...props} isMobile={isMobile} database={this.database}/>}/>
          <Route path='/model/:id' component={props=><Model {...props} isMobile={isMobile} database={this.database}/>}/>
          <Route path='/mycasting' component={props=><MyCasting {...props} isMobile={isMobile} database={this.database}/>}/>
          <Route path='/allmodels' component={props=><Personalities {...props} isMobile={isMobile} models={this.state.models} database={this.database} number={2}/>}/>
          <Route path='/newfaces' component={props=><Personalities {...props} isMobile={isMobile} models={this.state.models} database={this.database} number={3}/>}/>
          <Route path='/dancers' component={props=><Personalities {...props} isMobile={isMobile} models={this.state.models} database={this.database} number={4}/>}/>
          <Route path='/controlpanel/:id' component={props=><Admin {...props} database={this.database} storage={this.storage}/>}/>
        </div>
        </Router>
        <Footer isMobile={isMobile}/>
      </div>
    );
  }
}

export default App;
