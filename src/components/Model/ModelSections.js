import React from 'react';
import ModelGrid from './ModelGrid';

const ModelSections = ({number, modelInfo, isMobile})=>{
    let image=modelInfo.MainPicture;
    if (!isMobile){
        if (number===0) {
            if (modelInfo){
                return (
                
                    <div className='cf'>
                        <div className='model_picture fl w-60-m w-60-l w-100 pa3 '>
                        <img alt='Model Image' className='hoverBox_layer_bottom w-100 db outline black-10 mt5'src={image}/>
                        </div>
                        <div className='fl w-40 mt6 pl5'>
                            <p className='lh-copy'>
                                Height: {modelInfo.height} cm <br/>
                                Chest: {modelInfo.chest} cm<br/>
                                Waist: {modelInfo.waist} cm<br/>
                                Hips: {modelInfo.hips} cm<br/>
                                Shoes: {modelInfo.shoes}<br/>
                                Hair: {modelInfo.hair}<br/>
                                Eyes: {modelInfo.eyes}
                            </p>
                        </div>
                    </div>
                );
            }
            return (
                
                <div className='cf'>
                    <div className='model_picture fl w-60 pa3'>
                    <img alt='Model Image' className='hoverBox_layer_bottom w-100 db outline black-10 mt5' src='http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png'/>
                    </div>
                    <div className='fl w-40 mt6 pl5'>
                        <p className='lh-copy'>
                            Height: ... cm <br/>
                            Chest: ... cm<br/>
                            Waist: ... cm<br/>
                            Hips: ... cm <br/>
                            Shoes: ... cm<br/>
                            Hair: ...<br/>
                            Eyes: ...
                        </p>
                    </div>
                </div>
            );
        } else if (number===1) {
            return (
                <ModelGrid images={modelInfo.images}/>       
        );
        } else {
            return (
                <div className='fl w-100 mt6 pt4' style={{height: '30vh'}}>
                    Download <a className='dim pointer b black no-underline' href={modelInfo.pdf}>PDF</a>
                </div>
            );
        }
    } else {
        if (number===0) {
            let mainImage=modelInfo.MainPicture;
            if (modelInfo){
                return (
                
                    <div className='cf'>
                        <div className='model_picture fl w-60-m w-60-l w-100'>
                        <img alt='Model Image' className='hoverBox_layer_bottom w-100 db outline black-10 mt4' src={mainImage}/>
                        </div>

                        <div className='fl w-50 mt3'>
                            <p className='lh-copy f4'>
                                Height: {modelInfo.height} cm                               
                                <br/>
                                Waist: {modelInfo.waist} cm                                
                                <br/>
                                Hair: {modelInfo.hair}                          
                            </p>
                        </div>
                        <div className='fl w-50 mt3'>
                        <p className='lh-copy f4'>
                                Chest: {modelInfo.chest} cm
                                <br/>
                                Shoes: {modelInfo.shoes} cm
                                <br/>
                                Eyes: {modelInfo.eyes} 
                            </p>
                        </div>

                    </div>
                );
            } else {
                return (
                
                    <div className='cf'>
                        <div className='model_picture fl w-60-m w-60-l w-100'>
                        <img alt='Model Image' className='hoverBox_layer_bottom w-100 db outline black-10 mt4' src='http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png'/>
                        </div>
                        <div className='fl w-40 mt6 pl5'>
                            <p className='lh-copy'>
                                Height: ... cm <br/>
                                Chest: ... cm<br/>
                                Waist: ... cm<br/>
                                Shoes: ... cm<br/>
                                Hair: ...<br/>
                                Eyes: ...
                            </p>
                        </div>
                    </div>
                );
            }
            
        } else if (number===1) {
            let generateImages=()=>{
                let table = [];
                for (let i=0; i<modelInfo.images.length;i++){
                    table.push(
                        <div className='model_picture fl w-55' >
                            <img src={modelInfo.images[i]} className='hoverBox_layer_bottom w-100 db outline black-10 mt4'/>
                        </div>
                        
                    )
                }
                console.log(table);
                return table;
            }
            return (
                <div className=' cf'>
                    {generateImages()}
                 </div>  
                
                
    );
        } else {
            return (
                <div>
                    Error 404
                </div>
            )
        }
    }

}

export default ModelSections