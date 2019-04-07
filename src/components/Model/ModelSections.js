import React from 'react';

const ModelSections = ({number})=>{
    if (number==0) {
        return (
            <div className='cf'>
                <div className='model_picture fl w-60 pa3'>
                <img alt='Model Image' className='hoverBox_layer_bottom w-100 db outline black-10 mt5' src='http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png'/>
                </div>
                <div className='fl w-40 mt6 pl3'>
                    <p className='lh-copy'>
                        Height: 179 cm <br/>
                        Chest: 83 cm<br/>
                        Waist: 61 cm<br/>
                        Shoes: 39 cm<br/>
                        Hair: Dark brown<br/>
                        Eyes: Brown
                    </p>
                </div>
            </div>
        );
    } else if (number==1) {
        return (
            <div className='pa3 cf'>
                <div className='model_picture fl w-55'>
                <img alt='Model Image' className='hoverBox_layer_bottom w-100 db outline black-10 mt5' src='http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png'/>
                </div>
                <div className='model_grid fr w-40 mt6 flex flex-wrap'>
                <div className='fl w-40 pa2 ba mr2 mb2'>
                        Hello
                </div>
                <div className='fr w-40 pa2 ba mr2 mb2'>
                    Hello
                </div>
                <div className='fl w-40 pa2 ba mr2 mb2'>
                    Hello
                </div>
                <div className='fr w-40 pa2 ba mr2 mb2'>
                    Hello
                </div>
                <div className='fl w-40 pa2 ba mr2 mb2'>
                    Hello
                </div>
                <div className='fr w-40 pa2 ba mr2 mb2'>
                    Hello
                </div>

                </div>  
            </div>
            
);
    } else {
        return (
            <div className='fl w-100 mt6 pt4' style={{height: '30vh'}}>
                Download <b className='dim pointer'>PDF</b>
            </div>
        );
    }
}

export default ModelSections