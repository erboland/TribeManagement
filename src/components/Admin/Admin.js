import React, {Component} from 'react';


export default class Admin extends Component {
    constructor(){
        super();
        this.state={

        }
        this.setRef=this.setRef.bind(this);
        
    }

    componentDidMount(){
        this.setState({
            newRequestRef: this.props.database.collection('models')
        })
    }


    setRef=(id, e)=>{  
        if (e.target.files[0]){
                const file = e.target.files[0];
                const mainImage=this.props.storage.ref().child(file.name);
                mainImage.put(file).then(snapshot=>{
                    mainImage.getDownloadURL().then(url=>{
                        console.log(url);
                        this.setState({
                            [id]: url
                        })
                    })
                })       
        }
        let hso=this.state.hso;
        let hp = this.state.hp;
        let hhp = this.state.hhp;
        let fbso=this.state.fbso;
        let fbsp=this.state.fbsp;
        console.log(hso);
        console.log(hp);
        console.log(fbsp);
        if(hso&&hp&&hhp&&fbso){
            document.getElementById('imageStatus').innerHTML='Images succesfully uploaded!'
        }
    }


    getInputVal=(id) =>{
        return document.getElementById(id).value;
    }
    submitForm = (e) => {
        e.preventDefault();

        let firstName=this.getInputVal('fn');
        let lastName=this.getInputVal('ln');
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
        
        if (hso&&hp&&hhp&&fbso&&fbsp){
            if (!firstName&&!lastName&&!bustSize&&!waistSize&&!hipsSize&&!shoes&&!eyes&&!hair&&!hso&&!hp&&!hhp&&!fbso&&!fbsp){
                alert('One or more parametres is empty');
            } else{
                this.saveRequest(firstName, lastName, bustSize, waistSize, hipsSize, shoes, eyes, hair, hso, hp, hhp, fbso, fbsp);
                alert('Your request has been sent!');
                document.getElementById('becomeModelForm').reset();
            }
        } else {
            alert('Wait untill your pictures uploaded')
        }
   
            
    }
    
    saveRequest=(firstName, lastName, bustSize, waistSize, hipsSize, shoes, eyes, hair, hso, hp, hhp, fbso, fbsp)=>{
        this.state.newRequestRef.add ({
            "First Name":firstName, 
            "Last Name": lastName,  
            "Bust size": bustSize,
            "Eyes": eyes,
            "Full length body shot profile": fbsp,
            "Full length body shot straight on": fbso,
            "Hair": hair,
            "Headshot Straight on": hso,
            "Headshot half profile":hhp , 
            "Headshot profile": hp,
            "Hips": hipsSize, 
            "Shoes": shoes,
            "Waist size": waistSize
        })
    }

    render(){
        return (
            <div className='cf'>
                <form>
                    <input placeholder='First Name' className='pv2 f4 fl mb4' style={{width: '47.5%'}} id='fn'/>
                    <input placeholder='Last Name' className=' pv2 f4 fr mb4' style={{width: '47.5%'}} id='ln'/>
                    <input placeholder='Bust size (cm)' id='bust' className='w-100 f4 pv2 mb4 mr2'/>
                    <input placeholder='Waist size (cm)' id='waist' className='w-100 f4 pv2 mb4 mr2'/>
                    <input placeholder='Hips size (cm)' id='hips'className='w-100 f4 pv2 mb4 mr2'/>
                    <input placeholder='Shoes size (cm)' id='shoes'className='w-100 f4 pv2 mb4 mr2'/>
                    <input placeholder='Hair color' id='hair'className='w-100 f4 pv2 mb4 mr2'/>
                    <input placeholder='Eyes color' id='eyes'className='w-100 f4 pv2 mb4 mr2'/>
                    
                    <p>Upload images </p>
                    <input placeholder='Headshot straight on' id='hso'className='pv2 f4 fl mb4 become_submit w-100' type='file' onChange={(e)=>this.setRef('hso', e)}/>
                    <input placeholder='Headshot profile' id='hp' className=' pv2 f4 fr mb4 become_submit w-100' type='file' onChange={(e)=>this.setRef('hp', e)}/>
                    <input placeholder='Headshot half profile' id='hhp' className='pv2 f4 fl mb4 become_submit w-100' type='file' onChange={(e)=>this.setRef('hhp', e)}/>
                    <input placeholder='Full length body shot straight on' id='fbso' className=' pv2 f4 fr mb4 become_submit w-100' type='file' onChange={(e)=>this.setRef('fbso', e)}/>
                    <input placeholder='Full length body shot profile'  id='fbsp' className=' pv2 f4 fl mb4 become_submit w-100' type='file' onChange={(e)=>this.setRef('fbsp', e)}/>
                    <p className='f3 mb2' id='imageStatus'>Not all images uploaded</p>
                    <input className="b pv3 input-reset ba b--black bg-transparent grow pointer f6 fl w-30" type="submit" value="Send" onClick={this.submitForm}/>
                </form>
                
            </div>
        )
    }


}