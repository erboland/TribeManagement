import React, { Component } from 'react';
import './BecomeModel.css';
import * as emailjs from 'emailjs-com';



export default class Header extends Component{
    constructor () {
        super();
        this.state={
            step: 0
        }
        this.secondStepUpdater = this.secondStepUpdater;
        this.thirdStepUpdater = this.thirdStepUpdater;
        this.setRef=this.setRef.bind(this);
    }

    componentDidMount(){
        if(this.props.isMobile){
            document.getElementById('secondStep').style.display='none';
            document.getElementById('finalStep').style.display='none';
        } else {
        document.getElementById('finalStep').style.display='none';
        document.getElementById('thirdStep').style.display='none';
        }
    }

    componentDidUpdate(){
        if (this.state.step===1 ){
            document.getElementById('second').style.color='black';
        } else if (this.state.step===2){
            document.getElementById('third').style.color='black';
        }

    }

    setRef=(id, e)=>{  
        if (e.target.files[0]){
                const file = e.target.files[0];
                let label='l'+id;
                const mainImage=this.props.storage.ref().child(file.name);
                mainImage.put(file).then(snapshot=>{
                    mainImage.getDownloadURL().then(url=>{
                        this.setState({
                            [id]: url
                        })
                        document.getElementById(label).style.color='black';
                    })
                })       
        }
    }
    
    secondStepUpdater=(e)=>{
        e.preventDefault();
        
        if (!this.props.isMobile){
            document.getElementById('secondStep').style.display='none';
        document.getElementById('finalStep').style.display='block';
            this.setState({step:1});
        } else {
            document.getElementById('secondStep').style.display='block';
        document.getElementById('firstStep').style.display='none';
        }
        
    }

    thirdStepUpdater=(e)=>{
        e.preventDefault();

        if (!this.props.isMobile){
            document.getElementById('thirdStep').style.display='block';
            document.getElementById('firstStep').style.display='none';
            document.getElementById('finalStep').style.display='none';
            this.setState({step:2});
        } else {
            document.getElementById('finalStep').style.display='block';
            document.getElementById('secondStep').style.display='none';
        }
        
    }

    previousStepUpdater = (e) =>{
        e.preventDefault();
        document.getElementById('thirdStep').style.display='none';
        document.getElementById('firstStep').style.display='block';
        document.getElementById('finalStep').style.display='block';
    }
    getInputVal=(id) =>{
        return document.getElementById(id).value;
    }
    submitForm = (e) => {
        e.preventDefault();

        let firstName=this.getInputVal('fn');
        let lastName=this.getInputVal('ln');
        let emailAdd=this.getInputVal('email');
        let contact=this.getInputVal('ph');
        let city=this.getInputVal('city');
        let country=this.getInputVal('country');
        let birthDate=this.getInputVal('bd');
        let nationality = this.getInputVal('nation');
        let height=this.getInputVal('height');
        let bustSize=this.getInputVal('bust');
        let waistSize=this.getInputVal('waist');
        let hipsSize=this.getInputVal('hips');
        let shoes=this.getInputVal('shoes');
        let eyes=this.getInputVal('eyes');
        let hair=this.getInputVal('hair');
        let hso=this.state.hso;
        let hp = this.state.hp;
        let hhp = this.state.hhp;
        let fbso=this.state.fbso;
        let fbsp=this.state.fbsp;

        let template_params = {
            "email": emailAdd,
            "first_name": firstName,
            "last_name": lastName,
            "city": city,
            "country": country,
            "phone": contact,
            "date": birthDate,
            "nationality": nationality,
            "height": height,
            "bust": bustSize,
            "waist": waistSize,
            "hips": hipsSize,
            "shoes": shoes,
            "hair": hair,
            "eyes": eyes,
            "hso": hso,
            "hhp": hhp,
            "fbsp": fbsp,
            "hp": hp,
            "fbso": fbso
         }
         
         let service_id = "default_service";
         let template_id = "template_1RPnk64V";
         

        
        if (hso&&hp&&hhp&&fbso&&fbsp){
            if (!firstName&&!lastName&&!emailAdd&&!contact&&!city&&!country&&!birthDate&&!nationality&&!bustSize&&!waistSize&&!hipsSize&&!shoes&&!eyes&&!hair&&!hso&&!hp&&!hhp&&!fbso&&!fbsp){
                alert('One or more parametres is empty');
            } else{
                emailjs.send(service_id, template_id, template_params, "user_SaASf2XDhCvZyY5IzHX2e").then(()=>{
                    alert('Your request has been sent!');
                    document.getElementById('becomeModelForm').reset();
                    document.getElementById('lhso').style.color='black';
                    document.getElementById('lhhp').style.color='black';
                    document.getElementById('lfbsp').style.color='black';
                    document.getElementById('lfbso').style.color='black';
                    document.getElementById('lhp').style.color='black';
                })
                
            }
        } else {
            alert('Wait untill your pictures uploaded')
        }
   
            
    }
    
    

    pStepOne=(e)=>{
        e.preventDefault();
        document.getElementById('secondStep').style.display='none';
        document.getElementById('firstStep').style.display='block';
    }
    pStepTwo=(e)=>{
        e.preventDefault();
        document.getElementById('finalStep').style.display='none';
        document.getElementById('secondStep').style.display='block';
    }
    

    render () {
        if (!this.props.isMobile){
            return (
                <div className='cf main'>
                    <nav className="fl w-30 mb6 mt3">
                        <ul className='list pl4'>
                            <li className='black f4 pb2 mb3 link dim pa2 pt0 pl0' id='first'>First Step</li>
                            <li className='gray f4 pv2 mb3 link dim pa2 pl0' id='second'>Second Step</li>
                            <li className='gray f4 pv2 mb3 link dim pa2 pl0' id='third'>Final Step</li>
                        </ul>
                        
                    </nav>
                    <div className="fl w-50">
                    <form id='becomeModelForm'>
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
                        
                        <input placeholder='First Name' className='pv2 f4 fl mb4' style={{width: '47.5%'}} id='fn'/>
                        <input placeholder='Last Name' className=' pv2 f4 fr mb4' style={{width: '47.5%'}} id='ln'/>
                        <input placeholder='City' className='pv2 f4 fl mb4' style={{width: '47.5%'}} id='city'/>
                        <input placeholder='Country' className=' pv2 f4 fr mb4' style={{width: '47.5%'}} id='country'/>
                        <input placeholder='Contact Phone Number' id='ph' className='w-100 f4 pv2 mb4 mr2'/>
                        <input placeholder='Email address' id='email' className='w-100 f4 pv2 mb4 mr2'/>
                        <input placeholder='Birth date (dd/mm/yy)' id='bd' className='w-100 f4 pv2 mb4 mr2'/>
                        <input placeholder='Nationality' id='nation' className='w-100 f4 pv2 mb4 mr2'/>
                        <p className='black pointer dim flex items-center' id='secondStep' onClick={this.secondStepUpdater}>
                            <div id='arrowDown'></div>
                            <p>Second Step</p>
                        </p>
                        </div>
                        <div id='finalStep'>
                            <input placeholder='Height (cm)' id='height' className='w-100 f4 pv2 mb4 mr2'/>
                            <input placeholder='Bust size (cm)' id='bust' className='w-100 f4 pv2 mb4 mr2'/>
                            <input placeholder='Waist size (cm)' id='waist' className='w-100 f4 pv2 mb4 mr2'/>
                            <input placeholder='Hips size (cm)' id='hips'className='w-100 f4 pv2 mb4 mr2'/>
                            <input placeholder='Shoes size (cm)' id='shoes'className='w-100 f4 pv2 mb4 mr2'/>
                            <input placeholder='Hair color' id='hair'className='w-100 f4 pv2 mb4 mr2'/>
                            <input placeholder='Eyes color' id='eyes'className='w-100 f4 pv2 mb4 mr2'/>
                            <p className='black pointer dim flex items-center'  onClick={this.thirdStepUpdater}>
                                <div id='arrowDown'></div>
                                <p>Final Step</p>  
                            </p>
                        </div>
                        <div id='thirdStep' className='fl w-100'>
                           
                            <input placeholder='Headshot straight on' id='hso'className='inputfile'  name='hso'type='file' onChange={(e)=>this.setRef('hso', e)}/>
                            <label className='pv2 f4 fl mb5 become_submit pointer mr3 dim gray' id='lhso' style={{width: '42%'}} for='hso'>Headhsot straight on</label>
                            <input placeholder='Headshot profile' id='hp' name='hp' className=' inputfile'  type='file' onChange={(e)=>this.setRef('hp', e)}/>
                            <label className='pv2 f4 fl mb5 become_submit pointer dim gray' id='lhp'style={{width: '50%'}} for='hp'>Headhsot profile</label>
                            <input placeholder='Headshot half profile' id='hhp' name='hhp' className='inputfile' type='file' onChange={(e)=>this.setRef('hhp', e)}/>
                            <label className='pv2 f4 fl mb5 become_submit pointer mr3 dim gray' id='lhhp' style={{width: '42%'}} for='hhp'>Headhsot half profile</label>
                            <input placeholder='Full length body shot straight on' id='fbso' name='fbso' className='inputfile' type='file' onChange={(e)=>this.setRef('fbso', e)}/>
                            <label className='pv2 f4 fl mb5 become_submit pointer dim gray' id='lfbso' style={{width: '50%'}} for='fbso'>Full length body shot straight on</label>
                            <input placeholder='Full length body shot profile'  id='fbsp' name='fbsp' className='inputfile'  type='file' onChange={(e)=>this.setRef('fbsp', e)}/>
                            <label className='pv2 f4 fl mb5 become_submit pointer dim gray' id='lfbsp' style={{width: '42%'}} for='fbsp'>Full length body shot profile</label>
                            <p className='fl w-100'>
                                <input className="b ph5 pv3 input-reset ba b--black bg-transparent grow pointer f6 fl w-30" type="submit" value="Send" onClick={this.submitForm}/>
                                <p className='gray dim f5 fr w-50 pointer' onClick={this.previousStepUpdater}>Previous Step</p>
                            </p>
                            
                        </div>
                        </form>
                        
                        
                    
                    </div>
                    
    
                    
                </div>
            )
        } else {
            return (
                <div>
                    <p className='f3'>
                        To be a model
                    </p>
                    <p className='gray'>
                    Crystal is always looking for new talents. To be a model
                    you need to be a 15-20 years old girl and 1.75-1.80 m /
                    5’9 – 6’0 tall with a serious interest in modeling. Under 
                    18 of age you must have parental consent. 
                    We do not have open call. For model submissions 
                    please complete the form below.
                    </p>
                    <p className='f3'>
                        Polaroid requirements
                    </p>
                    <p className='gray'>
                    Digital photos has to be done with natural light with simple background. Do not 
                    send professional photos. Do not pose; do not smile. Keep your hair out of your 
                    face. Be natural with no make-up or accessorizes. Wear a swimsuit or tight 
                    clothes - neutral color tank top and bottom like legging’s to show easily your 
                    body shape.                       
                    </p>
                    <form className='cf' id='becomeModelForm'>
                        <div id='firstStep' className='cf'>
                            <p className='f3'>
                                Become a model 1/3
                            </p>
                            <input placeholder='First Name' className='pv2 f4 fl mb4 w-100' id='fn'/>
                            <input placeholder='Last Name' className=' pv2 f4 fr mb4 w-100' id='ln'/>
                            <input placeholder='City' className='pv2 f4 fl mb4 w-100'  id='city'/>
                            <input placeholder='Country' className=' pv2 f4 fr mb4 w-100'  id='country'/>
                            <input placeholder='Contact Phone Number' id='ph' className='w-100 f4 pv2 mb4 mr2'/>
                            <input placeholder='Email address' id='email' className='w-100 f4 pv2 mb4 mr2'/>
                            <input placeholder='Birth date (dd/mm/yy)' id='bd' className='w-100 f4 pv2 mb4 mr2'/>
                            <input placeholder='Nationality' id='nation' className='w-100 f4 pv2 mb2 mr2'/>
                            <p className='fr ph3 pv1 ba grow' onClick={this.secondStepUpdater}>
                                Next Step
                            </p>
                        </div>
                        <div id='secondStep'>
                            <p className='f3'>
                                Become a model 2/3
                            </p>
                            <input placeholder='Height (cm)' id='height' className='w-100 f4 pv2 mb4 mr2'/>   
                            <input placeholder='Bust size (cm)' id='bust' className='w-100 f4 pv2 mb4 mr2'/>
                            <input placeholder='Waist size (cm)' id='waist' className='w-100 f4 pv2 mb4 mr2'/>
                            <input placeholder='Hips size (cm)' id='hips'className='w-100 f4 pv2 mb4 mr2'/>
                            <input placeholder='Shoes size (cm)' id='shoes'className='w-100 f4 pv2 mb4 mr2'/>
                            <input placeholder='Hair color' id='hair'className='w-100 f4 pv2 mb4 mr2'/>
                            <input placeholder='Eyes color' id='eyes'className='w-100 f4 pv2 mb2 mr2'/>
                            <p className='fl ph3 pv1 ba grow' onClick={this.pStepOne}>
                                Previous step
                            </p>
                            <p className='fr ph3 pv1 ba grow' onClick={this.thirdStepUpdater}>
                                Next step
                            </p>
                        </div>
                        <div id='finalStep'>
                            <p className='f3'>
                                Become a model 3/3
                            </p>
                            <input placeholder='Headshot straight on' id='hso'className='inputfile' type='file' onChange={(e)=>this.setRef('hso', e)}/>
                            <label className='pv2 f4 fl mb5 become_submit pointer mr3 dim gray w-100' id='lhso' for='hso'>Headhsot straight on</label>
                            <input placeholder='Headshot profile' id='hp' className='inputfile' type='file' onChange={(e)=>this.setRef('hp', e)}/>
                            <label className='pv2 f4 fl mb5 become_submit pointer dim gray w-100' id='lhp' for='hp'>Headhsot profile</label>
                            <input placeholder='Headshot half profile' id='hhp' className='inputfile' type='file' onChange={(e)=>this.setRef('hhp', e)}/>
                            <label className='pv2 f4 fl mb5 become_submit pointer mr3 dim gray w-100' id='lhhp' for='hhp'>Headhsot half profile</label>
                            <input placeholder='Full length body shot straight on' id='fbso' className='inputfile' type='file' onChange={(e)=>this.setRef('fbso', e)}/>
                            <label className='pv2 f4 fl mb5 become_submit pointer dim gray w-100' id='lfbso'for='fbso'>Full length body shot straight on</label>
                            <input placeholder='Full length body shot profile'  id='fbsp' className='inputfile' type='file' onChange={(e)=>this.setRef('fbsp', e)}/>
                            <label className='pv2 f4 fl mb5 become_submit pointer dim gray w-100' id='lfbsp' for='fbsp'>Full length body shot profile</label>
                            <p className='fl ph3 pv1 ba grow' onClick={this.pStepTwo}>
                                Previous step
                            </p>
                            <p className='fr ph3 pv1 ba grow' onClick={this.submitForm}>
                                Submit form
                            </p>
                        </div>
                    </form>

                </div>
            )
        }

    }

}

