import styled from "styled-components";

export const Header = styled.header`
    &{
        display: flex;
        flex-direction: column;
    }
    a{
        text-decoration: none;
    }
    .txt{
        display: flex;
        flex-direction: column;
        text-shadow: 0px;
    }
    .headerExemples{
        display: flex;
        flex-direction: column;
        gap: 1vw;
        margin-top: 3vw;
    }
    .titulo{
        text-align: center;
        font-size: 5vw;
        margin-block-start: 0;
        margin-block-end: 0;
    }
    .subtitulo{
        text-align: center;
        font-size: 2vw;
        margin-block-start: 0;
        margin-block-end: 0;
    }

    .headerExemples > a > img{
        width: 52%;
        position: relative;
        left: 1.3vw;
        padding: 8%;

    }.headerExemples > a{
        transition: 0.5s;
        border-radius: 100%;
        width: 10vw;
        height: 9vw;
        display: flex;
        align-items: center;
        position: relative;
        left: 1vw;
        position: relative;
        bottom: 12vw;
    }.headerExemples > a:hover{
        background-color: rgba(0, 0, 0, 0.13);
    }
`;

export const Container = styled.main`
    a{
        text-decoration: none;
    }

    #content{
        display: flex;
        flex-direction: column;
        margin-top: 10%;
        gap: 5vw;
    }

    .section_content{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10%;
    }
    .item > img{
        width: 40vw;
        border-radius: 1vw;
        box-shadow: 0 0 1.5em rgba(0, 0, 0, 0.137)
    }

    footer{
        background-color: #7297A6;
        margin-top: 3vw;
        height: 3vw;
        display: flex;
        align-items: flex-end;
        justify-content: end;
    }

    footer > h5{
        margin: 0;
        color: white;
        font-family: 'Poppins';
        font-weight: 400;
        font-size: 1vw;
        text-align: end;
        margin-right: 1vw;
        margin-block-end: 0px;
        text-align: end;
    }
`;