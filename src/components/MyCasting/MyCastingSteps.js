import React from 'react';
import ModelCard from '../PersonalitiesList/ModelCard';

const MyCastingSteps =({number})=> {
    if (number==0) {
        return (
            <div>
                {/* <ModelCard  
            modelHeight={this.state.model.height}
            modelChest={this.state.model.chest}
            modelEyes={this.state.model.eyes}
            modelHair={this.state.model.hair}
            modelName={this.state.model.name}
            modelShoes={this.state.model.shoes}
            modelWaist={this.state.model.waist}
            />
            <ModelCard  
            modelHeight={this.state.model.height}
            modelChest={this.state.model.chest}
            modelEyes={this.state.model.eyes}
            modelHair={this.state.model.hair}
            modelName={this.state.model.name}
            modelShoes={this.state.model.shoes}
            modelWaist={this.state.model.waist}
            />
            <ModelCard  
            modelHeight={this.state.model.height}
            modelChest={this.state.model.chest}
            modelEyes={this.state.model.eyes}
            modelHair={this.state.model.hair}
            modelName={this.state.model.name}
            modelShoes={this.state.model.shoes}
            modelWaist={this.state.model.waist}
            /> */}
            </div>
        );
    } else {
        return (
            <div>
                <div className='feedback fr w-70 mt3'>
                <form >
                    <input placeholder='First Name' className='pv2 f4 fl mb4' style={{width: '47.5%'}}/>
                    <input placeholder='Last Name' className=' pv2 f4 fr mb4' style={{width: '47.5%'}}/>
                    <input placeholder='Email address' className='w-100 f4 pv2 mb4 mr2'/>
                    <input placeholder='Contact address' className='w-100 f4 pv2 mb4 mr2'/>
                    <textarea placeholder='Leave a message' className='w-100 f4 pv2 mb4 mr2'></textarea>
                    <input class="b ph5 pv3 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Send"/>
                </form>
                </div>
            </div>
        );
    }
    
}

export default MyCastingSteps;