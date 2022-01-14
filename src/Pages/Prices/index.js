import { Link } from "react-router-dom"
import {useState} from "react"


import { Plains } from "./Plains/index"
import {Body, Container, Header} from "./styles.js"

import backButton from "../../Images/assets/back.png"
import basic from "../../Images/pages/prices/basic.png"
import top from "../../Images/pages/prices/top.png"
import business from "../../Images/pages/prices/business.png"

export default function Prices() {
    const [plain, setPlain] = useState("")
    function setButtonHandle(plain){
        setPlain(plain)
    }
    

    return(
        <Body>
            <Header>
                <div className="txt">
                    <h2 className="titulo">Preços</h2>
                    <p className="subtitulo">Vamos te contar quanto custa o seu site</p>
                </div>
                <Link to="/">
                    <img alt="" src={backButton} id="back_button"/>
                </Link>
            </Header>

            <Container>
                <section id="teaser">
                    <div className="block" id="block1">
                        <p>
                            Básico
                        </p>

                        <img alt="" src={basic} className="block_img"/>

                        <ul>
                            <li>
                                Apenas uma pagina
                            </li>
                            
                            <li>
                                Direito à 1 manutenção mensal
                            </li>
                            
                            <li>
                                Portifólio, conteúdo, ...
                            </li>
                        </ul>

                        
                        <a rel="noreferrer" href="#content">
                            <button className="button_see" id="bbasic" 
                                onClick={() => setButtonHandle("basic plain")}>
                                Ver mais
                            </button>
                        </a>
                        
                    </div>

                    <div className="block" id="block2">
                        <p>
                            Site Top
                        </p>

                        <img alt="" src={top} className="block_img"/>

                        <ul>
                            <li>
                                Limite de 6 paginas
                            </li>
                            
                            <li>
                                Direito à 4 manutenções mensais
                            </li>
                            
                            <li>
                                Vendas online, ...
                            </li>
                        </ul>

                        <a rel="noreferrer" href="#content">
                            <button className="button_see" id="binter"
                                onClick={() => setButtonHandle("top site")}>
                                Ver Mais
                            </button>
                        </a>
                        
                    </div>

                    <div className="block" id="block3">
                        <p>
                            Business
                        </p>

                        <img alt="" src={business  } className="block_img"/>

                        <ul>
                            <li>
                                Limite de 20 paginas
                            </li>
                            
                            <li>
                                Direito à 8 manutenções mensais
                            </li>
                            
                            <li>
                                Site empresarial, ...
                            </li>
                        </ul>

                        <a rel="noreferrer" href="#content">
                            <button className="button_see" id="bbusines"
                                onClick={() => setButtonHandle("business plain")}>
                                Ver mais
                            </button>
                        </a>
                        
                    </div>
                </section>


                <section id="content">
                    <Plains
                        title="Básico"
                        subtitle="Site de apenas uma página, perfeito para quem
                        ter um site bonito simples pra mostrar um conteúdo. 
                        Temos como exemplo: Portifólios, Blogs, Aplicações, etc..."
                        price="R$ 137"
                        priceDescription="+ 20 reais mensais"
                        photo={basic}
                        isVisible={plain === "basic plain"}
                    />

                    <Plains
                        className="Top"
                        title="Site Top"
                        price="R$ 287"
                        priceDescription=" +30 reais mensais"
                        subtitle="Um site mais completo que pode ser usado para as mais 
                        diversas atividades, como por exemplo, lojas virtuais 24hrs."
                        photo={top}
                        isVisible={plain === "top site"}
                    />   

                    <Plains
                        className="Business"
                        title="Business"
                        price="R$ 887"
                        priceDescription=" +150 reais mensais"
                        subtitle="Site empresarial, dedicado a empresas sérias que 
                        precisam de sites maiores, melhor estruturados e com manutenções 
                        mais constantes."
                        photo={business}
                        isVisible={plain === "business plain"}
                    /> 
                </section>
            </Container>
        </Body>
    )
}