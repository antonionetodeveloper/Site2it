import { Container } from "./styles";
import { Link } from "react-router-dom";

export const Plains = ({ title, subtitle, price, priceDescription, photo, isVisible }) => {
    return (
        <Container isVisible={isVisible}>
            <div className="priceDiv">
                <p className="type">{title}</p>
                <div className="price">
                    <p className="price" id="p1">{price}</p><p className="price">{priceDescription}</p>
                </div>
            </div>

            <div className="txt_and_img">
                <img alt="" src={photo} />
                <p>
                    {subtitle}
                </p>
            </div>

            <div className="buttonBuyDiv">
                <Link to="/atendimento">
                    <button className="buttonBUY" id="bigButtonEffect2">Comprar</button>
                </Link>
            </div>
        </Container>
    );
}
