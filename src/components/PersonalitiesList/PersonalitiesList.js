import React, {Component} from 'react';
import 'firebase/firestore';
import ModelCard from './ModelCard';

 export default class PersonalitiesList extends Component {
      constructor() {
        super() 
        this.state={
          model: [],
          display: 1
        }
        
      }

      componentDidMount (){

        this.props.database.collection('models').get().then(snap => {
          const model = [];
          snap.forEach(doc => {
            let id=doc.id;
            const { height, chest, eyes, hair, name, shoes, waist, MainPicture} = doc.data();
            model.push({ height, chest, eyes, hair, name, shoes, waist, id, MainPicture });
          });
          this.setState({ model });
        });
        this.setState({
          display: this.props.number
        })
        if (!this.props.isMobile) {
          
        }

      }
       
      firstDisplayParser=()=>{
        let table=[];
        let modelsNumber = this.props.isMobile? 3: 7;
        var actualModels=0;
        let actualModelsNumber=()=>{
          if (this.state.model.length<=modelsNumber){
            actualModels=this.state.model.length;
          } else {
            actualModels=modelsNumber
          }
        }
        actualModelsNumber();
        console.log(actualModels)
        for (let i=0; i<actualModels; i++){
          
          let doc = this.state.model[i];
          console.log(doc.MainPicture);
          table.push(<ModelCard 
            key={doc.id} 
            id={doc.id}
            modelHeight={doc.height}
            modelChest={doc.chest}
            modelEyes={doc.eyes}
            modelHair={doc.hair}
            modelName={doc.name}
            modelShoes={doc.shoes}
            modelWaist={doc.waist}
            mainImg={doc.MainPicture}
            />)
        }
        return table
      }

      

      render (){
          if (this.state.model.length>0){
            if (this.state.display===1){
              return (
                <article>
                  <div className="cf pa2 pl0 pr3">
                  {this.firstDisplayParser()}
                  </div>
                
    
    
              </article>
              )
            } else if(this.state.display===2){
              return (
                <article>
                  <div className="cf pa2 pl0 pr3">
                  
                  {this.state.model.map(doc => {
                    console.log(doc.MainPicture);
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
                    mainImg={doc.MainPicture}
                    />
                  })}
                  </div>
                  
      
      
                </article>
            );
            }
            
          } else {
            return (
              <div className='flex justify-center items-center f2 gray'>
                Please wait...
              </div>
            )
          }
      }
    
        
}

