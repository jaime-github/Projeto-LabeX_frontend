import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BotaoVer = styled.button`
    position: absolute;
    height: 55px;
    width: 120px;
    bottom: 140px;
    left: 210px; 
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

const BotaoAdm = styled.button`
    position: absolute;
    height: 55px;
    width: 120px;
    bottom: 140px;
    left: 370px; 
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

export default function HomePage() {

    const navigate = useNavigate() 
        const BotaoViagem = ()=> {
            navigate("/verviagens")
        } 
        const BotaoLogin = ()=> {
            navigate("/login")
        }

    
    return(
        <div>
            <BotaoVer onClick={BotaoViagem}>Ver Viagens</BotaoVer>
            <BotaoAdm onClick={BotaoLogin}>Área Administrativa</BotaoAdm>
            <p>Home Page</p>
        </div>

    )
} 