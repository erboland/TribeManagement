import React from 'react';
import './ModelCard.css';
import {Link} from 'react-router-dom';

const ModelCard = ({modelName, modelHeight, modelChest, modelWaist, modelShoes, modelHair, modelEyes, id, mainImg, isCasting}) =>{ 
    
    let castingWidthClass=isCasting?'hoverBox fl w-100 w-50-m w-33-l pa2':'hoverBox fl w-100 w-50-m w-25-l pa2';
    let image=mainImg?mainImg:'http://is3.mzstatic.com/image/thumb/Music49/v4/b6/b0/a1/b6b0a1dd-998d-9786-ca2f-87470be15250/source/400x40000bb.png';

    return (
                
                    <div className={castingWidthClass} >
                        
                            <img alt='Model Image' className='hoverBox_layer_bottom w-100 db outline black-10' id='image' src={image}/>
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
                                    <Link to={"/model/"+id}className='link dim white underline f5' style={{'text-underline-position': 'under' }}>View Portfolio</Link>
                                </div>
                            </div>
                        
                        
                    </div>
                
      );
      }
export default ModelCard;
        

