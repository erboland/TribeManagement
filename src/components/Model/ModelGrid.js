import React, {Component} from 'react';

export default class ModelGrid extends Component{
    constructor(){
        super();
        
        this.state={
            actualImages: []
        }
        
    }

    generateImages=()=>{
        let table = [];
        for (let i=0; i<this.state.actualImages.length;i++){
            table.push(
                <div className='albumPhoto fl w-40 pa2 pt0 ba mr2 mb2 pointer' >
                    <img src={this.state.actualImages[i]} onClick={(e)=>this.setNewImage(i, e)}/>
                </div>
                
            )
        }
        return table;
    }
    setNewImage=(i, e)=>{
        this.setState({
            mainImage: this.state.actualImages[i]
        })
    }

    componentDidMount (){
        let defaultImages=['https://firebasestorage.googleapis.com/v0/b/tribemanagement-995eb.appspot.com/o/Gray%402x.png?alt=media&token=609c6656-2c25-4ffa-afe9-3b99ff6b253d','https://firebasestorage.googleapis.com/v0/b/tribemanagement-995eb.appspot.com/o/Gray%402x.png?alt=media&token=609c6656-2c25-4ffa-afe9-3b99ff6b253d','https://firebasestorage.googleapis.com/v0/b/tribemanagement-995eb.appspot.com/o/Gray%402x.png?alt=media&token=609c6656-2c25-4ffa-afe9-3b99ff6b253d','https://firebasestorage.googleapis.com/v0/b/tribemanagement-995eb.appspot.com/o/Gray%402x.png?alt=media&token=609c6656-2c25-4ffa-afe9-3b99ff6b253d','https://firebasestorage.googleapis.com/v0/b/tribemanagement-995eb.appspot.com/o/Gray%402x.png?alt=media&token=609c6656-2c25-4ffa-afe9-3b99ff6b253d','https://firebasestorage.googleapis.com/v0/b/tribemanagement-995eb.appspot.com/o/Gray%402x.png?alt=media&token=609c6656-2c25-4ffa-afe9-3b99ff6b253d']
        let actualImages=this.props.images?this.props.images:defaultImages;
        this.setState({
            actualImages: actualImages,
            mainImage: actualImages[0]
        })
    }
    render(){
        return (
            <div className='pa3 pt0 cf'>
                        <div className='model_picture fl w-50'>
                        <img alt='Model Image' className='hoverBox_layer_bottom w-100 db outline black-10 mt5' src={this.state.mainImage}/>
                        </div>
                        <div className='model_grid fr w-40 mt5 flex flex-wrap'>
                        {this.generateImages()}
        
                        </div>  
                    </div>
        )
    }
    
}
