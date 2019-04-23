import React, {Component} from 'react';
import 'firebase/firestore';
import ModelCard from './ModelCard';

 export default class PersonalitiesList extends Component {
      constructor() {
        super() 
        this.state={
          model: []
        }
        
      }

      componentDidMount (){

        this.props.database.collection('models').get().then(snap => {
          const model = [];
          snap.forEach(doc => {
            let id=doc.id;
            const { height, chest, eyes, hair, name, shoes, waist} = doc.data();
            model.push({ height, chest, eyes, hair, name, shoes, waist, id });
          });
          this.setState({ model });
        });
      }
       
      

      

      render (){
          if (this.state.model.length>0){
            return (
              <article>
                <div className="cf pa2 pl0 pr3">
                
                {this.state.model.map(doc => {
                  return <ModelCard 
                  key={doc.id} 
                  id={doc.id}
                  modelHeight={doc.height}
                  modelChest={doc.chest}
                  modelEyes={doc.eyes}
                  modelHair={doc.hair}
                  modelName={doc.name}
                  modelShoes={doc.shoes}
                  modelWaist={doc.waist}
                  />
                })}
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

