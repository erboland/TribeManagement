import React, {Component} from 'react';

export default class ModelGrid extends Component{
    constructor(){
        super();
        
        this.state={
            actualImages: [],
            page:0, 
            arrow: 'down'
        }
        
    }

    generateImages=()=>{

        let table = [];
        let imagesNumber=(this.state.page*6+5)<this.state.actualImages.length?this.state.page*6+5:this.state.actualImages.length-1;
        for (let i=6*this.state.page; i<=imagesNumber;i++){
            table.push(
                <div className='albumPhoto fl w-40 pa2 pt0 ba mr2 mb2 pointer' >
                    <img src={this.state.actualImages[i]} onClick={(e)=>this.setNewImage(i, e)}/>
                </div>
            )
        }
        return table;
    }
    pageChange=(number, e)=>{
        e.preventDefault();

        if (number===1){
            this.setState({
                page: this.state.page-1
            })
        }else{
            this.setState({
                page: this.state.page+1
            })
        }
        if (this.state.page===0){
            this.setState({
                arrow: 'down'
            })
        } else if (this.state.page>Math.round(this.props.images.length/6)){
            this.setState({
                arrow: "top"
            })
        } else {
            this.setState({
                arrow: "middle"
            })
        }
        
    }
    arrowStatus = ()=>{
        if (this.state.arrow==='down'){
            return (
                <div className='flex items-center justify-center w-90'>
                <button onClick={e=>this.pageChange(0, e)} id='downArrow'></button>
                </div>
            )

        } else if (this.state.arrow==='top'){
            return (
                <div className='flex items-center justify-center w-90'>
                <button onClick={e=>this.pageChange(1, e)} id='topArrow'></button>
                </div>
            )
        } else if(this.state.arrow==="middle"){
            return (
                <div className='flex items-center justify-center w-90'>
                    <button onClick={e=>this.pageChange(0, e)} id='downArrow'></button>
                    <button onClick={e=>this.pageChange(1, e)} id='topArrow'></button>
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
        let actualImages=this.props.images?this.props.images:defaultImages;
        this.setState({
            actualImages: actualImages,
            mainImage: actualImages[0]
        })
        
        if (this.props.images.length<7){
            this.setState({
                arrow: 'none'
            })
        }
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
