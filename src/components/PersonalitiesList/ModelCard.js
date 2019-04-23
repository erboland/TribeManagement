import React from 'react';
import './ModelCard.css';
import {Link} from 'react-router-dom';

const ModelCard = ({modelName, modelHeight, modelChest, modelWaist, modelShoes, modelHair, modelEyes, id}) =>{ 
    return (
                
                    <div className='hoverBox fl w-50 w-25-m w-25-l pa2'>
                        
                            <img alt='Model Image' className='hoverBox_layer_bottom w-100 db outline black-10' src='http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png'/>
                            <div className='hoverBox_layer_top'>
                                <div className='hoverBox_text'>
                                    <p className='b'>
                                        {modelName} 
                                    </p>
                                    <p>
                                        Height: {modelHeight} <br/>
                                        Chest: {modelChest} <br/>
                                        Waist: {modelWaist} <br/>
                                        Shoes: {modelShoes} <br/>
                                        Hair: {modelHair} <br/>
                                        Eyes: {modelEyes}
                                    </p>
                                    <Link to={"/model/"+id}className='link dim white underline f5'>View Portfolio</Link>
                                </div>
                            </div>
                        
                        
                    </div>
                
      );
      }
export default ModelCard;
        

