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
            key:10,
            docExists: false,
            model: {
                name: '...',
                as:''
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
                document.getElementById('addButton')?document.getElementById('addButton').id='removeButton':console.log('no element');
            } 
         }
         for (let i=10; i<=12; i++){
            if (i===this.state.key) {
                document.getElementById(i).style.color='black';
            } else{
                document.getElementById(i).style.color='gray';
            }
        }

    }

    addToCart = (e) => {
        e.preventDefault();
        let modelExists=false;
        
        for(let i=0; i<=localStorage.length; i++) {
           if (JSON.stringify(localStorage.key(i))==JSON.stringify(this.props.match.params.id)){
            localStorage.removeItem(this.props.match.params.id);

            document.getElementById('removeButton').id = 'addButton';
            modelExists = true
           } 
        }
        if (modelExists===false) {
            localStorage.setItem(this.props.match.params.id, JSON.stringify(this.state.model));
        } 
        window.location.reload();
    }

    changeKey=(section, e)=>{
        e.preventDefault();
        this.setState ({key: section});
        for (let i=10; i<=12;i++){
            if (i===section){
                document.getElementById(i).style.color='black'
            } else {
                document.getElementById(i).style.color='gray'
            }
        }
        

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
                        <p className='b f2 pa2 pl4 pb0 mb1 flex items-center'>
                            {this.state.model.name} <button onClick={this.addToCart}id='addButton' style={{height: '1.5rem', width:'1.5rem'}}></button>
                        </p>
                        <p className='mb4 f5 pa2 pl4 mb1 flex items-center gray pt0'>
                            {this.state.model.as}
                        </p>
                        <ul className='list pl4'>
                                <li className='f4 pv1 mb4 link dim pa2 pt0 pl0 pointer' id='10' onClick={(e)=>this.changeKey(10, e)}>Characteristic</li>
                                <li className='f4 pv1 mb4 link dim pa2 pl0 pointer' id='11' onClick={(e)=>this.changeKey(11, e)}>Portfolio</li>
                                <li className='f4 pv1 mb4 link dim pa2 pl0 pointer'id='12' onClick={(e)=>this.changeKey(12, e)}>Print</li>
                                <li className='black f4 pb2 mb4 pa2 pt0 pl0 pointer mt4 pt4 '><Link to='/' className=' link dim black flex items-center'><div id='backArrow'></div><p>Back</p></Link></li>
                        </ul>
                        
                    </nav>
                    <div className='fl w-70'>
                        {this.characteristic}
                        <ModelSections number={this.state.key-10} modelInfo={this.state.model} isMobile={this.props.isMobile} style={{height: '40vh'}}/>
                        
                        
                    </div>
                </div>
                
            )
        } else {
            return (
                <div>
                    <p className='f3 b flex items-center'>{this.state.model.name} <button onClick={this.addToCart}id='addButton' style={{height: '1.5rem', width:'1.5rem'}}></button></p>
                    <Dropdown  options={this.state.options} onChange={this.changeNumber} value={defaultOption} placeholder="Select an option" />
                    <ModelSections number={this.state.key} modelInfo={this.state.model} isMobile={this.props.isMobile} style={{height: '40vh'}}/>
                </div>
            

        )
            
        }
        
    }

}