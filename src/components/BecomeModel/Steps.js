import React, {Component} from 'react';

export default class Steps extends Component{

    constructor(){
        super();
        this.state={

        }
    }


    secondStepUpdater(e){
        e.preventDefault();
        document.getElementById('secondStep').style.display='none';
        document.getElementById('finalStep').style.display='block';
    }

    thirdStepUpdater(e){
        e.preventDefault();
        document.getElementById('firstStep').style.display='none';
        document.getElementById('finalStep').style.display='none';
        document.getElementById('thirdStep').style.display='block';
        console.log(document.getElementById('thirdStep'));
    }

    componentDidMount(){
        document.getElementById('finalStep').style.display='none';
        document.getElementById('thirdStep').style.display='none';
    }

    render(){
            return(
                <div id='firstStep'>
                    <p className='black b f4'>
                        To be a model
                    </p>
                    <p className='f4 gray mb5 lh-copy'>
                    Crystal is always looking for new talents. To be a model you need to be 
                    a 15-20 years old girl and 1.75-1.80 m / 5’9 – 6’0 tall with a serious interest 
                    in modeling. Under 18 of age you must have parental consent. We do not have 
                    open call. For model submissions please complete the form below.
                    </p>
                    <p className='black b f4'>
                        Polaroid requirements
                    </p>
                    <p className='f4 gray mb5 lh-copy'>
                    Digital photos has to be done with natural light with simple background. Do not 
                    send professional photos. Do not pose; do not smile. Keep your hair out of your 
                    face. Be natural with no make-up or accessorizes. Wear a swimsuit or tight 
                    clothes - neutral color tank top and bottom like legging’s to show easily your 
                    body shape.
                    </p>
                    <form>
                    <input placeholder='First Name' className='pv2 f4 fl mb4' style={{width: '47.5%'}}/>
                    <input placeholder='Last Name' className=' pv2 f4 fr mb4' style={{width: '47.5%'}}/>
                    <input placeholder='City' className='pv2 f4 fl mb4' style={{width: '47.5%'}}/>
                    <input placeholder='Country' className=' pv2 f4 fr mb4' style={{width: '47.5%'}}/>
                    <input placeholder='Contact Phone Number' className='w-100 f4 pv2 mb4 mr2'/>
                    <input placeholder='Email address' className='w-100 f4 pv2 mb4 mr2'/>
                    <input placeholder='Birth date (dd/mm/yy)' className='w-100 f4 pv2 mb4 mr2'/>
                    <input placeholder='Nationality' className='w-100 f4 pv2 mb4 mr2'/>
                    <p className='black pointer dim b' id='secondStep' onClick={this.secondStepUpdater}>
                        Second Step
                    </p>
                    <div id='finalStep'>
                        <input placeholder='Bust size (cm)' className='w-100 f4 pv2 mb4 mr2'/>
                        <input placeholder='Waist size (cm)' className='w-100 f4 pv2 mb4 mr2'/>
                        <input placeholder='Hips size (cm)' className='w-100 f4 pv2 mb4 mr2'/>
                        <input placeholder='Shoes size (cm)' className='w-100 f4 pv2 mb4 mr2'/>
                        <input placeholder='Hair color' className='w-100 f4 pv2 mb4 mr2'/>
                        <input placeholder='Eyes color' className='w-100 f4 pv2 mb4 mr2'/>
                        <p className='black pointer dim b'  onClick={this.thirdStepUpdater}>
                            Final Step
                        </p>
                    </div>
                    <div id='thirdStep' className='fr w-50'>
                       
                        <input placeholder='Headshot straight on' className='pv2 f4 fl mb4 become_submit' style={{width: '47.5%'}}/>
                        <input placeholder='Headshot profile' className=' pv2 f4 fr mb4 become_submit' style={{width: '47.5%'}}/>
                        <input placeholder='Headshot half profile' className='pv2 f4 fl mb4 become_submit' style={{width: '47.5%'}}/>
                        <input placeholder='Full length body shot straight on' className=' pv2 f4 fr mb4 become_submit' style={{width: '47.5%'}}/>
                        <input placeholder='Full length body shot profile' className=' pv2 f4 fl mb4 become_submit' style={{width: '47.5%'}}/>
                        <input class="b ph5 pv3 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Send"/>
                    </div>
                    </form>
                    
                    
                </div>
            );
    } 
            
       
}
    

