import React, {Component} from 'react';
import './Footer.css';

export default class Footer extends Component{


    render () {
        if (!this.props.isMobile){
            return (
                <footer className="pa4 pa5-l white bt b--black-10 mt6 ">
                    <section className="cf pl4">
                        <div className="mb0-ns fl w-55" >
                            <p className="f3 fw6 mb2 mt0">
                                Newsletter
                            </p>
                            <div className='flex items-center'>
                                <input placeholder="Email Address" className="mw-100 w-100 w5-ns f5 input-reset pv3  input_email pr5"/><button id='arrowRight' style={{height: '2.5rem', width:'2.5rem'}}></button>
                            </div>
                        </div>
                        <div className='fr w-15 pl5 pr4'>
                            <p className='mt0 mb2 f4'>
                                Follow us:
                            </p>
                            <a href='https://www.instagram.com/tribe.management/' className='link white dim f4'>Instagram</a>
                        </div>
                        <div className="fr w-30" style={{lineHeight:'1.5'}}>
                            <p className='f4 mv0'>
                                Tribe Management office<br/>60 Avenue François Clément<br/>L5612<br/>Mondorf Les Bains LUXEMBOURG<br/>+33 (3)3 33 33 33 33
                            </p>
                        </div>
                        
                    </section>
                </footer>
            )
        } else {
            return (<footer className='flex items-center justify-center mb0 pv3 mt4'>
                <p className='tc white f5 lh-copy'>
                    Tribe Management office: <br/>
                    60 Avenue François Clément L5612 <br/>
                    Mondorf Les Bains LUXEMBOURG<br/>
                    +33 (3)3 33 33 33 33
                </p>

            </footer>
            )}
        
    }

}