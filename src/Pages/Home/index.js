import { Link } from "react-router-dom"

import styles from "./styles.css"

import logo from "../../Images/assets/logo-png.png"
import menu from "../../Images/assets/menu.png"
import back from "../../Images/assets/back.png"

import woman from "../../Images/pages/index/woman.png"
import money from "../../Images/pages/index/money.jpg"
import xp from "../../Images/pages/index/xp.jpg"

export default function Home() {

    return(
        <div className="AppHome">
            <header>
          <div className="header">
            <div id="mobile_menu">
            
              <nav id="nav">
                <button id="btn_menu">
                    <img src={menu} id="img_menu"/>
                </button>
                <button id="btn_fecha">
                    <img src={back} id="img_fecha"/>
                </button>
                
                <ul id="menu">
                  <li>
                    <a href="CComponents/Site2it/Contents/Prices/prices.html">
                      Exemplos
                    </a>
                  </li>

                  <li>
                    <a href="CComponents/Site2it/Contents/Prices/prices.html">
                      Valores
                    </a>
                  </li>

                  <li>
                    <a href="CComponents/Site2it/Contents/Prices/prices.html">
                      Já sou cliente
                    </a>
                  </li>

                  <li>
                    <a href="CComponents/Site2it/Contents/Prices/prices.html">
                      Contato
                    </a>
                  </li>
                </ul>
              </nav>
          </div>
              
          <div id="nao_menu">
            <div className="logo">
                <a href="#">
                  <img src={logo} className="img_logo"/>
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
                  <img src={woman} id="woman"/>
                </div>
              </div>
            </div>
          </div>
        </header>
    
    
    
        <main>
          <section id="section1">
            <div id="xp">
              <div className="img">
                <img src={xp} id="img_xp"/>
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
                <img src={money} id="money"/>
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
