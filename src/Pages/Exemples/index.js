import { Link } from "react-router-dom"


import backButton from "../../Images/assets/back.png"

import site2it_old from "../../Images/pages/exemples/site2it_old.png"
import buscaCEP from "../../Images/pages/exemples/buscaCEP.png"
import portifolio from "../../Images/pages/exemples/portfolio.png"
import SendMeAemail from "../../Images/pages/exemples/SendMeAemail.png"
import site2it from "../../Images/pages/exemples/site2itnew.png"

import {Container, Header} from "./styles.js"

export default function Exemples() {
    return(
        <>
            <Header>
                <section className="headerExemples">
                    <div className="txt">
                        <h2 className="titulo">Exemplos</h2>
                        <p className="subtitulo">Aqui tem alguns trabalhos que nós já fizemos.</p>
                    </div>
                    <Link to="/">
                        <img alt="" src={backButton}/>
                    </Link>
                </section>
            </Header>

            <Container>
                <section id="content">
                    <section id="section1" className="section_content">
                        <a rel="noreferrer" href="https://site2it.com" target="_blank">
                            <div className="item" id="imoveis">
                                <img alt="" src={site2it}/>
                            </div>
                        </a>
            
                        <a rel="noreferrer" href="https://antonionetodeveloper.github.io/Portfolio/" target="_blank">
                            <div className="item" id="site2it">
                                <img alt="" src={portifolio}/>
                            </div>
                        </a>
                    </section>

                    <section id="section2" className="section_content">
                        <a rel="noreferrer" href="https://antonionetodeveloper.github.io/Site2it/" target="_blank">
                            <div className="item" id="imoveis">
                                <img alt="" src={site2it_old}/>
                            </div>
                        </a>

                        <a rel="noreferrer" href="https://antonionetodeveloper.github.io/Send-Me-a-Email/" target="_blank">
                            <div className="item" id="perfumaria">
                                <img alt="" src={SendMeAemail}/>
                            </div>
                        </a>
                    </section>

                    <section id="section3" className="section_content">
                        <a rel="noreferrer" href="https://antonionetodeveloper.github.io/BuscaCEP/" target="_blank">
                            <div className="item" id="site2it_old">
                                <img alt="" src={buscaCEP}/>
                            </div>
                        </a>
                    </section>

                </section>
            </Container>
        </>
    )
}
