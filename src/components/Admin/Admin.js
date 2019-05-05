import React, {Component} from 'react';
import './Admin.css';


export default class Admin extends Component {
    constructor(){
        super();
        this.state={
            images: [],
            allImages: 0
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
                        this.setState({
                            [id]: url
                        })
                    })
                    document.getElementById('l'+id).style.color='black';
                })       
        }

    }

    severalImages=(e)=>{

        if (e.target.files.length>0){
            this.setState({
                allImages: e.target.files.length
            });
            for (var i = 0; i < e.target.files.length; i++) {
                var imageFile = e.target.files[i];
        
                this.uploadImageAsPromise(imageFile);
            }
        }
    }
    uploadImageAsPromise=(imageFile)=>{
            var storageRef = this.props.storage.ref().child(imageFile.name);
            //Upload file
            storageRef.put(imageFile).then (snapshot=>{
                storageRef.getDownloadURL().then(url=>{
                    this.state.images.push(url);
                    let newArray=this.state.images;
                    this.setState({
                        images: newArray
                    })
                })
            });
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
        let height=this.getInputVal('height');
        let hso=this.state.hso;
        let images=this.state.images;
        let pdf=this.state.pdf;
        let type=this.getInputVal('type');

        
        if (hso&&images){
            if (!firstName&&!lastName&&!bustSize&&!waistSize&&!hipsSize&&!shoes&&!eyes&&!hair&&!hso&&!images&&!pdf&&!type){
                alert('One or more parametres is empty');
            } else{
                this.saveRequest(firstName, lastName, bustSize, waistSize, height, hipsSize, shoes, eyes, hair, hso, images, pdf, type);
                alert('Your request has been sent!');
                document.getElementById('becomeModelForm').reset();
                this.setState({
                    images: [],
                    allImages: 0
                });
                document.getElementById('lhso').style.color='gray';
                document.getElementById('lpdf').style.color='gray';
            }
        } else {
            alert('Wait untill your pictures uploaded')
        }
   
            
    }
    
    saveRequest=(firstName, lastName, bustSize, waistSize, height, hipsSize, shoes, eyes, hair, hso, images, pdf, type)=>{
        this.state.newRequestRef.add ({
            "name":firstName, 
            "Last Name": lastName,  
            "chest": bustSize,
            "eyes": eyes,
            "hair": hair,
            "MainPicture": hso,
            "hips": hipsSize, 
            "shoes": shoes,
            "waist": waistSize, 
            "height": height,
            "images": images, 
            "pdf": pdf,
            "type": type
        })
    }

    render(){
        return (
            <div className='cf'>
                <form id='becomeModelForm'>
                    <input placeholder='First Name' className='pv2 f4 fl mb4' style={{width: '47.5%'}} id='fn'/>
                    <input placeholder='Last Name' className=' pv2 f4 fr mb4' style={{width: '47.5%'}} id='ln'/>
                    <input placeholder='Height (cm)' id='height' className='w-100 f4 pv2 mb4 mr2'/>
                    <input placeholder='Bust size (cm)' id='bust' className='w-100 f4 pv2 mb4 mr2'/>
                    <input placeholder='Waist size (cm)' id='waist' className='w-100 f4 pv2 mb4 mr2'/>
                    <input placeholder='Hips size (cm)' id='hips'className='w-100 f4 pv2 mb4 mr2'/>
                    <input placeholder='Shoes size (cm)' id='shoes'className='w-100 f4 pv2 mb4 mr2'/>
                    <input placeholder='Hair color' id='hair'className='w-100 f4 pv2 mb4 mr2'/>
                    <input placeholder='Eyes color' id='eyes'className='w-100 f4 pv2 mb4 mr2'/>
                    <select name='type' id='type'>
                        <option value='newFace'>New Face</option>
                        <option value='dancer'>Dancer</option>
                    </select>
                    <p className='b'>Upload Main Image </p>
                    <input placeholder='Headshot straight on' name='hso' id='hso'className='inputfile' type='file' onChange={(e)=>this.setRef('hso', e)}/>
                    <label for='hso' className='pv2 f4 fl mb4 become_submit w-100 gray dim pointer' id='lhso'>Main image</label>
                    <p className='b'>Upload Portfolio Images </p>
                    <input placeholder='Headshot profile' id='images' className='inputfile' type='file' name='images' onChange={this.severalImages} multiple/>
                    <label className=' pv2 f4 fr mb4 become_submit w-100 dim pointer' for='images'>Upload Portfolio images</label>
                    <p className='f3 mb2' id='imageStatus'>{this.state.images.length}/{this.state.allImages} uploaded</p>
                    <p className='b'>Upload model PDF file</p>
                    <input name='pdf' id='pdf' className='inputfile' type='file' onChange={(e)=>this.setRef('pdf', e)}/>
                    <label for='pdf' className='pv2 f4 fl mb4 become_submit w-100 gray dim pointer' id='lpdf'>Upload PDF</label>
                    <input className="b pv3 input-reset ba b--black bg-transparent grow pointer f6 fl w-30" type="submit" value="Send" onClick={this.submitForm}/>
                </form>
                
            </div>
        )
    }


}