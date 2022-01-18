import { useState } from "react"
import { Link } from "react-router-dom"


import "./styles.css"

import logo from "../../Images/assets/logo-png.png"
import menu from "../../Images/assets/menu.png"
import back from "../../Images/assets/back.png"

import womanLight from "../../Images/pages/index/woman.png"
import womanNoLight from "../../Images/pages/index/womanNoLight.png"
import money from "../../Images/pages/index/money.jpg"
import xp from "../../Images/pages/index/xp.jpg"



export default function Home() {
  
  
  let woman = ""
  function setWomanImage(){

    if(window.innerWidth <= 900){
      woman = womanNoLight
    }if(window.innerWidth > 900){
      woman = womanLight
    }
  }setWomanImage()


  const [buttonMenu, setButtonMenu] = useState(false)
  function setButtonMenuHandle(){
    console.log("clicou")
    setButtonMenu(true)
    setCloseButtonMenu(false)
  }if(buttonMenu){
    document.querySelector("#mobile_menu").style.right = "20vw"
    document.querySelector("#mobile_menu").style.top= "0vw"
    document.querySelector("#btn_menu").style.display = "none"
    document.querySelector("#btn_fecha").style.display = "inline-block"
    document.querySelector("#nav").style.backgroundColor = "#fff"
    document.querySelector("#nao_menu").style.display = "none"
  }

  const [buttonCloseMenu, setCloseButtonMenu] = useState(false)
  function setButtonCloseMenuHandle(){
    console.log("clicou")
    setCloseButtonMenu(true)
    setButtonMenu(false)
  }if(buttonCloseMenu){
    document.querySelector("#mobile_menu").style.right = "82vw"
    document.querySelector("#mobile_menu").style.top= "4vw"
    document.querySelector("#btn_menu").style.display = "inline-block"
    document.querySelector("#btn_fecha").style.display = "none"
    document.querySelector("#nav").style.backgroundColor = "transparent"
    document.querySelector("#nao_menu").style.display = "block"
  }


  return(
      <div className="AppHome">
          <header>
        <div className="header">
          <div id="mobile_menu">
          
            <nav id="nav">
              <button id="btn_menu" onClick={() => setButtonMenuHandle()}>
                  <img alt="" src={menu} id="img_menu"/>
              </button>
              <button id="btn_fecha" onClick={() => setButtonCloseMenuHandle()}>
                  <img alt="" src={back} id="img_fecha"/>
              </button>
              
              <ul id="menu">
                <li>
                  <Link to={"/exemplos"} rel="noreferrer">
                    Exemplos
                  </Link>
                </li>

                <li>
                  <Link to={"/valores"} rel="noreferrer" >
                    Valores
                  </Link>
                </li>

                <li>
                  <Link to={"/atendimento"} rel="noreferrer" href="Components/Site2it/Contents/Prices/prices.html">
                    Comprar <br/>
                    um site
                  </Link>
                </li>
              </ul>
            </nav>
        </div>
            
        <div id="nao_menu">
          <div className="logo">
              <a rel="noreferrer" href="https://site2it.com">
                <img alt="" src={logo} className="img_logo"/>
                <h2>Site2it</h2>
              </a>
          </div>
                
          <div className='img_e_txt'>
            <div className="slogan_header">
              <h1 className="slogan">
                GARANTA JÁ<br/>
                O SEU SITE
              </h1>
                <Link to="/atendimento">
                  <button id="fillButtonEffect1" className="btn">
                    EU QUERO
                  </button>
                </Link>
            </div>

              <div className="woman">
                <img alt="" src={woman} id="woman"/>
              </div>
            </div>
          </div>
        </div>
      </header>
  
  
  
      <main>
        <section id="section1">
          <div id="xp">
            <div className="img">
              <img alt="" src={xp} id="img_xp"/>
            </div>
              
            <div className="txt_xp">
              <h3>
                Há mais de<br/>
                2 anos no<br/>
                mercado
              </h3>
              
              <p>
                Entregando sites de<br/>
                qualidade máxima
              </p>
              
              <Link to="/exemplos">
                <button id="bigButtonEffect" className="exemplos">
                  VER EXEMPLOS
                </button>
              </Link>
            </div>
              
          </div>
        </section>
      
      
        <section id="section2">
          <div id="money">
            <div className="txt_e_btn">
              <div className="txt_money">
                <h3>
                  O PREÇO MAIS<br/>
                  ACESSÍVEL DE<br/>
                  TODOS
                </h3>
                
                <p>
                  Temos um site para<br/>
                  você com suas<br/>
                  necessidades
                </p>
              </div>
                  
              <Link to="/valores">
                  <button id="fillButtonEffect2" className="valores">
                    VER VALORES
                  </button>
                </Link>
              
            </div>
              
            <div className="img">
              <img alt="" src={money} id="money"/>
            </div>
          </div>
        </section>
      </main>
  
  
      <footer>
        <h5>Feito por: Site2it</h5>
      </footer>
    </div>
  )
}
