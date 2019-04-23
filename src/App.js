import React, { Component } from 'react';

import './App.css';
import 'tachyons';
import firebase from 'firebase';
import {DB_CONFIG} from './Config';
import 'firebase/firestore';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Personalities from './components/Personalities/Personalities';
import BecomeModel from './components/BecomeModel/BecomeModel';
import Contacts from './components/Contacts/Contacts';
import Model from './components/Model/Model';
import MyCasting from './components/MyCasting/MyCasting';

let cartItems=[];


class App extends Component {

  constructor() {
    super();

    this.state={
      models: [],
      myName: 'Yerbol'
    }

    this.app=firebase.initializeApp(DB_CONFIG);
    this.database=firebase.firestore();
    
    
  }
  
  componentDidMount () {
    this.database.collection('models').doc('Otto').get()
    .then(snap=>{
      this.setState({
        model: snap.data()
      });
    })
    
  

  }
  

  render() {
    return (
      <div className="App" >
        <Router>
        <Header />
        <div className='main'>
          <Route exact path='/' component={props=><Personalities {...props} models={this.state.models} database={this.database}/>}/>
          <Route path='/becomemodel' component={props=><BecomeModel {...props} database={this.database}/>}/>
          <Route path='/contacts' component={props=><Contacts {...props} database={this.database}/>}/>
          <Route path='/model/:id' component={props=><Model {...props} database={this.database}/>}/>
          <Route path='/mycasting' component={MyCasting}/>
        </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
