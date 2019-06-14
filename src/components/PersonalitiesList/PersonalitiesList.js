import React, {Component} from 'react';
import 'firebase/firestore';
import ModelCard from './ModelCard';

 export default class PersonalitiesList extends Component {
      constructor() {
        super() 
        this.state={
          model: [],
          display: 1,
          letter: ''
        }
        
      }

      componentDidMount (){
        
        this.props.database.collection('models').get().then(snap => {
          const model = [];
          var mainBoardArray=[];
          var notMainBoardArray=[];
          snap.forEach(doc => {
            let id=doc.id;
            const { height, chest, eyes, hair, name, shoes, waist, MainPicture, type, hips, as} = doc.data();
            model.push({ height, chest, eyes, hair, name, shoes, waist, id, MainPicture, type, hips, as });
          });
          for (let i=0; i<model.length; i++){
            if (model[i].type==='mb'){
              mainBoardArray.push(model[i]);
            } else {
              notMainBoardArray.push(model[i]);
            }
          }
          let newArray=mainBoardArray.concat(notMainBoardArray);
          this.setState({ model: newArray });
        });

        


 
        this.setState({
          display: this.props.number
        })

      }

      componentDidUpdate (prevProps){
        if(this.props.letter!==this.state.letter){
          this.setState({
            letter: this.props.letter,
            display: 5
          })
        }

      }
       
      firstDisplayParser=()=>{
        let table=[];
        let modelsNumber = this.props.isMobile? 3: 8;
        var actualModels=0;
        let actualModelsNumber=()=>{
          if (this.state.model.length<=modelsNumber){
            actualModels=this.state.model.length;
          } else {
            actualModels=modelsNumber
          }
        }
        actualModelsNumber();
        if (actualModelsNumber!==0){
          for (let i=0; i<actualModels; i++){       
            let doc = this.state.model[i];
              table.push(<ModelCard 
                key={doc.id} 
                id={doc.id}
                modelHeight={doc.height}
                modelChest={doc.chest}
                modelEyes={doc.eyes}
                modelHair={doc.hair}
                modelName={doc.name}
                modelHips={doc.hips}
                modelShoes={doc.shoes}
                modelWaist={doc.waist}
                mainImg={doc.MainPicture}
                modelAs={doc.as}
                />)
            
          }
          return table
        } else { 
          return (
            <div className='gray f3 '> 
              No models added
            </div>
          )

        }
        
      }
      typeFilter=(type)=>{
        let filteredModels=[];
        for(let i=0; i<this.state.model.length; i++){
          if (this.state.model[i].type===type){
            filteredModels.push(this.state.model[i]);
          }
        }
        let filteredModelsCards=[]

        filteredModels.map(doc=>{
          filteredModelsCards.push(<ModelCard 
            key={doc.id} 
            id={doc.id}
            modelHeight={doc.height}
            modelChest={doc.chest}
            modelEyes={doc.eyes}
            modelHair={doc.hair}
            modelName={doc.name}
            modelHips={doc.hips}
            modelShoes={doc.shoes}
            modelWaist={doc.waist}
            mainImg={doc.MainPicture}
            modelAs={doc.as}
            />); 
        })

        return filteredModelsCards
      }
      letterFilter=(letter)=>{
        let filteredModels=[];
        for(let i=0; i<this.state.model.length; i++){
          if (this.state.model[i].name.charAt(0)===letter){
            filteredModels.push(this.state.model[i]);
          }
        }
        let filteredModelsCards=[]

        filteredModels.map(doc=>{
          filteredModelsCards.push(<ModelCard 
            key={doc.id} 
            id={doc.id}
            modelHeight={doc.height}
            modelChest={doc.chest}
            modelEyes={doc.eyes}
            modelHair={doc.hair}
            modelHips={doc.hips}
            modelName={doc.name}
            modelShoes={doc.shoes}
            modelWaist={doc.waist}
            mainImg={doc.MainPicture}
            modelAs={doc.as}
            />); 
        })
        if (filteredModelsCards.length===0){
          filteredModelsCards.push(
            <div className='flex justify-center items-center f2 gray'>
              No models found
            </div>
          )
        }

        return filteredModelsCards

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
                    return <ModelCard 
                    key={doc.id} 
                    id={doc.id}
                    modelHeight={doc.height}
                    modelChest={doc.chest}
                    modelEyes={doc.eyes}
                    modelHair={doc.hair}
                    modelHips={doc.hips}
                    modelName={doc.name}
                    modelShoes={doc.shoes}
                    modelWaist={doc.waist}
                    mainImg={doc.MainPicture}
                    modelAs={doc.as}
                    />
                  })}
                  </div>
                  
      
      
                </article>
            );
            } else if (this.state.display===3){
              return (
                <article>
                  <div className="cf pa2 pl0 pr3">
                    {this.typeFilter('newFace')}
                  </div>

                </article>
              )
            } else if (this.state.display===4){
              return (
                <article>
                  <div className="cf pa2 pl0 pr3">
                  {this.typeFilter('dancer')}
                  </div>
                </article>
              )
            } else if(this.state.display===5) {
              return (
                <article>
                <div className='cf pa2 pl0 pr3'>
                  {this.letterFilter(this.state.letter)}
                </div>
              </article>
              )
              
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

