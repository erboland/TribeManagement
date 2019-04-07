import React, {Component} from 'react';
import ModelCard from './ModelCard';

 export default class PersonalitiesList extends Component {
      constructor() {
        super() 

        this.state = {
          models: []
        }
      }

      componentDidMount (){
        console.log(this.props.model)
        this.setState({
          model: this.props.model
        })
      }
      createList = () =>{
        let table=[];
        for (let i=0; i<8; i++){
          table.push(<ModelCard  
            modelHeight={this.state.model.height}
            modelChest={this.state.model.chest}
            modelEyes={this.state.model.eyes}
            modelHair={this.state.model.hair}
            modelName={this.state.model.name}
            modelShoes={this.state.model.shoes}
            modelWaist={this.state.model.waist}
            />)
        }
        return table
      }
      render (){
        if (this.state.model) {
          return (
            <article>
              <div className="cf pa2">
                {this.createList()}
              </div>
              
  
  
            </article>
        );
        } else {
          return (
            <div className='flex justify-center items-center f2 gray'>
              Please wait...
            </div>
          )
        }
        
      }
        
}

