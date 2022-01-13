import {useEffect, useState, useRef} from "react"
import emailjs from 'emailjs-com';

import { Container} from "./styles"
import "./fonts.css"

import done from "../../Images/pages/buy/done.png"

export default function Buy() {
    
    const [step, setStep] = useState(1)
    function nextStepHandle(){
        setTimeout(() => {
            setStep(step + 1)
            console.log(step)
        }, 400)
      }


    const form = useRef();
    
    const [who,setWho] = useState('')
    const [nicho,setNicho] = useState('')
    const [text,setText] = useState('')
    const [wpp,setWpp] = useState('')
    const [email,setEmail] = useState('')
    const [op1,setOp1] = useState('')
    const [op2,setOp2] = useState('')

    async function sendEmail(e){
        e.preventDefault();
        
        await emailjs.sendForm('gmailMessage', 'template_u6lz4uc', form.current, 'user_4aLlx0n2ziH8uqNDSxDHx')
            
            .then((result) => {
                nextStepHandle()
            }, (error) => {
                alert(`Não foi possível enviar o email ERROR${error}`)
            });
    }

    return(
        <div className="App">
            <form ref={form} onSubmit={sendEmail}>
                <Container activeBall={step}>
                    <div className="allSlides">
                        <section className="form1">
                            <div className="nameANDnicho">
                                <div className="name">
                                    <p>Nome do negócio: </p>
                                    <input name="name" type="text" id="name" onChange={(e) => {setWho(e.target.value)}}/>
                                </div>
                                <div className="nicho">
                                    <p>Nicho: </p>
                                    <input name="nicho" type="text" id="nicho" onChange={(e) => {setNicho(e.target.value)}}/>
                                </div>    
                            </div>
                            <div className="description">
                                <textarea name="text" type="text" id="description" placeholder="Deixe aqui os seus comentários.."
                                onChange={(e) => {setText(e.target.value)}} />
                            </div>
                            <button className="button"
                                type="button"
                                onClick={nextStepHandle}
                                id="btn_form1">
                                Continuar
                            </button>
                        </section>
                        
                        <section className="form2">
                            <p>Como podemos entrar em contato com você?</p>
                            <div className="wppANDemail">
                                <input name="wpp" type="text" placeholder="Whatsapp"  id="wpp" onChange={(e) => {setWpp(e.target.value)}}/>
                                <input name="email" type="text" placeholder="Email"  id="face" onChange={(e) => {setEmail(e.target.value)}}/>
                            </div>
                            <div className="opcional">
                                <input name="op1" type="text" placeholder="(opcional)"  id="optional1" onChange={(e) => {setOp1(e.target.value)}}/>
                                <input name="op2" type="text" placeholder="(opcional)"  id="optional2" onChange={(e) => {setOp2(e.target.value)}}/>
                            </div>
                            <button 
                                type="submit"
                                className="button" 
                                id="btn_form2"
                                onClick={sendEmail}
                                
                            >Continuar</button>
                        </section>
                        
                        
                        
                        <section className="form3">
                            <div className="imgANDtext">
                                <img src={done}/>
                                <div className="text">
                                    <p>Tudo pronto!</p>
                                    <p>Em breve entraremos em contato com você para<br/>
                                        negociarmos valores e prazo para entrega.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    
                        
                        <div id="steps">
                            <div className="circle" id="c1"></div>
                            <div className="circle" id="c2"></div>
                            <div className="circle" id="c3"></div>
                        </div>
                        
                </Container>

            </form>
            
        </div>
    )
}