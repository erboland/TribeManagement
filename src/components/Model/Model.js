import React, { Component } from 'react';
import './Model.css';
import {Link} from 'react-router-dom';
import ModelSections from './ModelSections';
import 'firebase/firestore';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default class Model extends Component{
    constructor(){
        super()
        this.state={
            key:0,
            docExists: false,
            model: {
                name: '...'
            }, 
            options:[
                { value: 0, label: 'Characteristic' },
                { value: 1, label: 'Portfolio', className: 'myOptionClassName' },
                
            ]
            
        }
           

    }

    componentDidMount(){
        this.props.database.collection('models').doc(this.props.match.params.id).get().then(doc => {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
                let model= doc.data();
                model.id = this.props.match .params.id;
              this.setState({model});
            }
          });
          for(let i=0; i<=localStorage.length; i++) {
            if (JSON.stringify(localStorage.key(i))==JSON.stringify(this.props.match.params.id)){
                document.getElementById('addButton')?document.getElementById('addButton').innerHTML='Remove':console.log('no element');
             
            } 
         }

    }

    addToCart = (e) => {
        e.preventDefault();
        let modelExists=false;
        
        for(let i=0; i<=localStorage.length; i++) {
           if (JSON.stringify(localStorage.key(i))==JSON.stringify(this.props.match.params.id)){
            localStorage.removeItem(this.props.match.params.id);

            document.getElementById('addButton').innerHTML = 'Add';
            modelExists = true
           } 
        }
        if (modelExists===false) {
            localStorage.setItem(this.props.match.params.id, JSON.stringify(this.state.model));
        } 
        window.location.reload();
    }

    changeKey=(key)=>{
        this.setState ({key: key})
    }

    changeNumber=(number)=>{
        this.setState({
            key: number.value
        })
    }

    render () {

        const defaultOption = this.state.options[0];
        if (!this.props.isMobile) {
            return (
                <div className='cf main'>
                    <nav className="fl w-30 mb6 mt3 cf">
                        <p className='b f2 pa2 pl4 mb5'>
                            {this.state.model.name} <button className='pa1' onClick={this.addToCart} id='addButton'>Add</button>
                        </p>
                        <ul className='list pl4'>
                                <li className='black f4 pv1 mb4 link dim pa2 pt0 pl0 pointer'  onClick={()=>this.changeKey(0)}>Characteristic</li>
                                <li className='gray f4 pv1 mb4 link dim pa2 pl0 pointer' onClick={()=>this.changeKey(1)}>Portfolio</li>
                                <li className='gray f4 pv1 mb4 link dim pa2 pl0 pointer' onClick={()=>this.changeKey(2)}>Print</li>
                                <li className='black f4 pb2 mb4 pa2 pt0 pl0 pointer mt4 pt4'><Link to='/' className='b link dim black'>Back</Link></li>
                        </ul>
                        
                    </nav>
                    <div className='fl w-70'>
                        {this.characteristic}
                        <ModelSections number={this.state.key} modelInfo={this.state.model} isMobile={this.props.isMobile} style={{height: '40vh'}}/>
                        
                        
                    </div>
                </div>
                
            )
        } else {
            return (
                <div>
                    <p className='f3 b'>{this.state.model.name}</p>
                    <Dropdown  options={this.state.options} onChange={this.changeNumber} value={defaultOption} placeholder="Select an option" />
                    <ModelSections number={this.state.key} modelInfo={this.state.model} isMobile={this.props.isMobile} style={{height: '40vh'}}/>
                </div>
            

        )
            
        }
        
    }

}