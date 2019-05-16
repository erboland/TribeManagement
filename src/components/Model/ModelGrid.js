import React, {Component} from 'react';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

export default class ModelGrid extends Component{
    constructor(){
        super();
        
        this.state={
            actualImages: [],
            page:0, 
            arrow: 'down', 
            images: []
        }
        
    }

    generateImages=(n)=>{
        n=this.state.page
        let newTable=[];
        console.log(this.state.images)
        let imagesNumber=(this.state.page*6+5)<this.state.actualImages.length?this.state.page*6+5:this.state.actualImages.length-1;
        for (let i=this.state.page*6; i<=imagesNumber;i++){
            newTable.push(this.state.images[i]);
        }

        return newTable;
    }
    pageChange=(number, e)=>{
        e.preventDefault();
        let newPage= this.state.page+number;
        if (number===1){
            this.setState({
                page: newPage
            })
        }else{
            this.setState({
                page: newPage
            })
        }
        if (newPage===0){
            this.setState({
                arrow: 'down'
            })
        } else if (newPage+1>this.state.actualImages.length/6){
            this.setState({
                arrow: "top"
            })
        } else {
            this.setState({
                arrow: "middle"
            })
        }
        console.log(this.state.arrow)
        
    }
    arrowStatus = ()=>{
        if (this.state.arrow==='down'){
            return (
                <div className='flex items-center justify-center w-90'>
                <button onClick={e=>this.pageChange(1, e)} id='downArrow'></button>
                </div>
            )

        } else if (this.state.arrow==='top'){
            return (
                <div className='flex items-center justify-center w-90'>
                <button onClick={e=>this.pageChange(-1, e)} id='topArrow'></button>
                </div>
            )
        } else if(this.state.arrow==="middle"){
            return (
                <div className='flex items-center justify-center w-90'>
                    <button onClick={e=>this.pageChange(1, e)} id='downArrow'></button>
                    <button onClick={e=>this.pageChange(-1, e)} id='topArrow'></button>
                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    setNewImage=(i, e)=>{
        this.setState({
            mainImage: this.state.actualImages[i]
        })
    }

    componentDidMount (){
        let defaultImages=['https://firebasestorage.googleapis.com/v0/b/tribemanagement-995eb.appspot.com/o/Gray%402x.png?alt=media&token=609c6656-2c25-4ffa-afe9-3b99ff6b253d','https://firebasestorage.googleapis.com/v0/b/tribemanagement-995eb.appspot.com/o/Gray%402x.png?alt=media&token=609c6656-2c25-4ffa-afe9-3b99ff6b253d','https://firebasestorage.googleapis.com/v0/b/tribemanagement-995eb.appspot.com/o/Gray%402x.png?alt=media&token=609c6656-2c25-4ffa-afe9-3b99ff6b253d','https://firebasestorage.googleapis.com/v0/b/tribemanagement-995eb.appspot.com/o/Gray%402x.png?alt=media&token=609c6656-2c25-4ffa-afe9-3b99ff6b253d','https://firebasestorage.googleapis.com/v0/b/tribemanagement-995eb.appspot.com/o/Gray%402x.png?alt=media&token=609c6656-2c25-4ffa-afe9-3b99ff6b253d','https://firebasestorage.googleapis.com/v0/b/tribemanagement-995eb.appspot.com/o/Gray%402x.png?alt=media&token=609c6656-2c25-4ffa-afe9-3b99ff6b253d']
        let actualImages=this.props.images?this.props.images.reverse():defaultImages;
        this.setState({
            actualImages: actualImages,
            mainImage: actualImages[0]
        })
        
        if (this.props.images.length<7){
            this.setState({
                arrow: 'none'
            })
        }
        let table=[];
        for (let i=0; i<=actualImages.length;i++){
            table.push(
                <div className='albumPhoto fl w-40 pa2 pt0 mr2 mb2 pointer' >
                    <img src={actualImages[i]} onClick={(e)=>this.setNewImage(i, e)}/>
                </div>
            )
        }
        this.setState({
            images: table
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
                    {this.arrowStatus()}
                </div>  
                
                
            </div>
        )
    }
    
}
