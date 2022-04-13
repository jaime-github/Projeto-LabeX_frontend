import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const Container =styled.div`
background-color: #8f3eec;
border-radius:20px;
width:300px;
display:flex;
justify-content:center;
flex-direction:column;
position: absolute;
padding:5px;
top:80%;
left:625px;
transform:translate3d(-50%,-50%,0);

h1 {
    display: flex;
    color: white;
    justify-content: center;
}

input {
    height: 30px;
    border-radius: 8px;
}

`;

const BotoesEstilo = styled.div`
display: flex;
`
const BotaoEntrar = styled.button`
    //position: absolute;
    display: flex;
    flex-direction:row;
    height: 40px;
    width: 95px;
    bottom: 90px;
    left: 230px; 
    padding: 10px;  
    border-radius: 25px; 
    color: white;
    background-color: #252773;
    :hover {
    color: #84C6F4;
    border:solid;
    border-color:blue;
    cursor: pointer;
  }    
`;

const BotaoVoltar = styled.button`
    //position: absolute;
    display: flex;
    flex-direction:row;
    margin-right: 105px;
    height: 40px;
    width: 95px;
    bottom: 90px;
    left: 360px; 
    padding: 10px;  
    border-radius: 25px; 
    color: white;
    background-color: #252773;
    :hover {
    color: #84C6F4;
    border:solid;
    border-color:blue;
    cursor: pointer;
  } 
`;


export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate(); 

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangeSenha = (event) => {
        setSenha(event.target.value);
    }

    const onSubmitLogin = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/jaime-epifanio-moreira/login'
        const headers = {"Content-Type":"application/json"}
        const body = {
            "email": email,
            "password": senha,
        }
        axios.post(url, body, {headers})
        .then(res => {
            localStorage.setItem("token", res.data.token);
            navigate("/suasviagens")
        })
        .catch(error => {
            console.log(error.response);
        })
    }
    
        const BotaoVolt = ()=> {
            navigate("/")
        }    

    return(
        
        <Container>
            <h1>Faça Seu Login</h1>
            <input 
                placeholder="E-Mail"
                type="email"
                value={email}
                onChange={onChangeEmail}
            />            
            <input
                placeholder="Senha"
                type="senha"
                value={senha}
                onChange={onChangeSenha}
            />    

            <BotoesEstilo>
                <BotaoVoltar onClick={BotaoVolt}>Voltar</BotaoVoltar> 
                <BotaoEntrar onClick={onSubmitLogin}>Entrar</BotaoEntrar>           
            </BotoesEstilo>
        </Container>

    )
} 