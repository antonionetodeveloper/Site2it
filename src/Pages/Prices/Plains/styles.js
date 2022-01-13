import styled from "styled-components";

export const Container = styled.section`
	&#content {
		margin-bottom: 10vw;
	}

	display: ${props => (props.isVisible ? "flex" : "none")};
	flex-direction: column;
	background-color: white;
	border-radius: 2vw;
	margin: 1vw;
	box-shadow: 0 0 1.5em rgba(0, 0, 0, 0.137);
	padding: 1vw;

	& > button {
		font-weight: 400;
	}

	.priceDiv{
		display: flex;
		flex-direction: column;
		align-items: initial;
	}

	div.price {
		position: relative;
	}
	p.price {
		display: inline;
	}
	#p1,
	#p2,
	#p3,
	p.type {
		font-weight: 700;
		font-size: 2vw;
	}
	p.type {
		font-size: 3vw;
		font-family: "Poppins";
		font-weight: 700;
	}

	.txt_and_img {
		display: flex;
		align-items: center;
		flex-direction: row-reverse;
		position: relative;
		bottom: 5vw;
	}
	.txt_and_img > img {
		width: 35%;
	}

	.buttonBuyDiv{
		display: flex;
    justify-content: center;
    position: relative;
    top: -15vw;
    right: 20vw;
	}
	#bigButtonEffect2::before{
		transition: all 0.5s ease;
		width: 20vw;
		height: 4vh;
	}#bigButtonEffect2:hover{
		width: 25vw;
		height: 10vh;
		cursor: pointer;
	}

	.buttonBUY {
		background-color: #034aa6;
		width: 10.1em;
		height: 2.5em;
		transition: 0.5s;
		color: white;
		border: 0.3vw;
		display: inline-block;
		font-size: 2vw;
	}
`;
