import React from 'react';
import './ModelCard.css';
import {Link} from 'react-router-dom';

const ModelCard = ({modelName, modelHeight, modelChest, modelWaist, modelShoes, modelHair, modelEyes, id, mainImg, isCasting, modelHips, modelAs}) =>{ 
    
    let castingWidthClass=isCasting?'hoverBox fl w-100 w-50-m w-33-l pa2':'hoverBox fl w-100 w-50-m w-25-l pa2';
    let image=mainImg?mainImg:'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png';
    let modelType= modelAs?modelAs: '';
    let onClickFunction=()=>{
        console.log('click')
    }
    return (
                    
                    <a className={castingWidthClass} onClick={onClickFunction()}> 
                        
                            <img alt='Model Image' className='hoverBox_layer_bottom w-100 db outline black-10' id='image' src={image} />
                            <div className='hoverBox_layer_top'>
                                <div className='hoverBox_text'>
                                    <p className='b pt0 f4 pb0'>
                                        {modelName}
                                        <div className='f5 normal'>{modelType}</div>
                                    </p>
                                        
                                    <p className='pt0 f5'>
                                        Height: {modelHeight} <br/>
                                        Chest: {modelChest} <br/>
                                        Waist: {modelWaist} <br/>
                                        Hips: {modelHips} <br/>
                                        Shoes: {modelShoes} <br/>
                                        Hair: {modelHair} <br/>
                                        Eyes: {modelEyes}
                                    </p>
                                    <Link to={"/model/"+id}className='link dim white underline f6' style={{textUnderlinePosition: 'under' }}>View Portfolio</Link>
                                </div>
                            </div>
                        
                        
                    </a>
                    
                
      );
      }
export default ModelCard;
        

