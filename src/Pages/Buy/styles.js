
import styled from "styled-components";

export const Container = styled.main`

    div.allSlides{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    /*STEPS*/
    #steps{
        display: flex;
        flex-direction: row;
        gap: 1vw;
        position: absolute;
        left: 47.25%;
        bottom: 10%;
    }

    .circle{
        width: 1vw;
        height: 1vw;
        border: 0.1vw solid #000;
        border-radius: 50%;
        transition: 1s;
    }

    #c1{
        background-color: ${(props) => props.activeBall === 1 ? "#034aa6" : "whitesmoke" };
    }
    #c2{
        background-color: ${(props) => props.activeBall === 2 ? "#034aa6" : "whitesmoke" };
    }
    #c3{
        background-color: ${(props) => props.activeBall === 3 ? "#034aa6" : "whitesmoke" };
    }



    .form1{
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-left: 0;
        top: 25vh;
        gap: 2vw;
        transition: 1.5s;
        position: absolute;

        ${
            (props) => {if(props.activeBall === 2){
                document.querySelector(".form1").style.marginLeft = '-200%'
                document.querySelector(".form2").style.left = '0px'
                document.querySelector(".form2").style.marginLeft = '60%'
            }}
        }
        
    }

    .nameANDnicho{
        display: flex;
        flex-direction: row;
        gap: 2vw;
    }

    .description{
        align-items: flex-start;
    }
    #description{
        width: 35vw;
        height: 12vw;
    }

    .name, .nicho, .description{
        display: flex;
        flex-direction: row;
        gap: 1vw;
        align-items: center;
    }
    #name, #nicho{
        display: flex;
        align-self: center;
        width: 15vw;
        height: 2vw;
    }

    .button{
        align-self: center;
        font-family: "Poppins";
        background-color: white;
        border-width: 1px;
        border-radius: 2vw;
        font-size: 2vw;
        width: 13vw;
        height: 4vw;
        cursor: pointer;
        text-align: center;
    }
    .button:hover{
        background-color: #034AA6;
        color: white;
        transition: 0.5s;
    }


    
    /*form2*/
    .form2{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        top: 25vh;
        gap: 2vw;
        transition: 1.5s;
        left: 101vw;

        ${
            (props) => {if(props.activeBall === 3){
                document.querySelector(".form2").style.marginLeft = '-330%'
            }}
        }
    }

    .wppANDemail, .opcional{
        display: flex;
        gap: 2vw;
    }

    .wppANDemail > input, .opcional > input{
        width: 14vw;
        height: 2vw;
    }


    
    /*form3*/
    .form3{
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
        top: 25vh;
        gap: 2vw;
        transition: 1.5s;
        

        margin-left: 0;
        left: 150vw;
    }

    .imgANDtext{
        display: flex;
        flex-direction: row;
    }
    .text{
        display: flex;
        flex-direction: column;
        align-self: center;
}


`;
