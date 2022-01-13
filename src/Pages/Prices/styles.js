import styled from "styled-components";

export const Body = styled.body`

            /*ScrollBar*/
    &::-webkit-scrollbar {
        width: 12px;
    }
    
    &::-webkit-scrollbar-track {
        background: #C2D2F2;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: #034AA6;
        border-radius: 20px;
        border: 3px solid #C2D2F2;
    }
`;


export const Header = styled.header`
	a {
		text-decoration: none;
	}

	& {
		display: flex;
		flex-direction: column-reverse;
		gap: 1vw;
		margin-top: 3vw;
	}

	& > a > img {
		width: 52%;
		position: relative;
		padding: 8%;
		left: 1vw;
	}
	& > a {
		transition: 0.5s;
		border-radius: 100%;
		width: 10vw;
		height: 9vw;
		display: flex;
		align-items: center;
		position: relative;
		left: 1vw;
	}
	& > a:hover {
		background-color: rgba(0, 0, 0, 0.13);
	}

	& > div.txt {
		position: relative;
		bottom: 10vw;
		flex-direction: column;
		display: flex;
	}

	.titulo {
		text-align: center;
		font-size: 5vw;
		margin-block-start: 0;
		margin-block-end: 0;
	}
	.subtitulo {
		text-align: center;
		font-size: 2vw;
		margin-block-start: 0;
		margin-block-end: 0;
	}
`;

export const Container = styled.main`
	a {
		text-decoration: none;
	}

	section#teaser {
		margin-top: -5vw;
		margin-bottom: 5vw;
		display: flex;
		gap: 5vw;
		justify-content: center;
	}

	.block {
		border-radius: 1vw;
		text-align: center;
		font-size: 3vw;
		font-weight: 700;
		display: flex;
		justify-content: center;
		width: 23vw;
		flex-direction: column;
		box-shadow: 0 0 1.5em rgba(0, 0, 0, 0.137);
	}

	div#block1 {
		background-color: white;
	}
	div#block2 {
		background-color: #034aa6;
		color: white;
	}
	div#block3 {
		background-color: rgb(22, 22, 22);
		color: white;
	}

	img.block_img {
		display: flex;
		width: 60%;
		align-self: center;
		margin-bottom: 3vw;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 3vw;
	}

	ul,
	ul > li {
		font-size: 1.5vw;
		font-weight: 400;
		text-align: start;
	}

	.button_see {
		border-radius: 1vw;
		height: 4vw;
		width: 20vw;
		font-size: 2.5vw;
		display: flex;
		justify-content: center;
		align-self: center;
		align-items: center;
		margin-bottom: 1vw;
		border: 0px;
		transition: 0.5s;
	}
	a {
		display: flex;
		justify-content: center;
	}

	#bbasic:hover,
	#binter:hover,
	#bbusines:hover {
		cursor: pointer;
	}
	button#bbasic {
		color: white;
		background-color: #034aa6;
	}
	button#binter {
		background-color: #f7d414;
	}
	button#bbusines {
		background-color: white;
	}

    #content{
        width: 90%;
        height: 45vw;
        display: flex;
        align-self: center;
    }
`;
