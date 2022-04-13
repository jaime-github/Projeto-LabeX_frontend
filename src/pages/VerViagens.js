import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';



const BotaoVoltar = styled.button`
    position: absolute;
    height: 50px;
    width: 125px;
    bottom: 520px;
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

const BotaoInscrever = styled.button`
    position: absolute;
    height: 50px;
    width: 125px;
    bottom: 520px;
    left: 550px; 
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

export const DivList= styled.div`
  background-color:#252773;
  color:white;
  border:solid 1px #3E86F5;
  padding:10px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 30px;
  font-size: 12px;  
`
export const DivListTrip= styled.div`  
  position: relative;
  top: 20%;
  overflow-y: scroll;
  width: 50%;
  border:solid 1px #F8F8FF;
  height: 470px;
  padding-right: 10px;
  padding-bottom: 10px;
`

export const SuasViagens= styled.h3`
    color: white;
    left: 40px;
`
export const ContainerViagens= styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 70%;
  margin-top: 80px;
  margin-right: 30px;
  

`



export default function VerViagens() {

    const [nomeViagem, setNomeViagem] = useState([]);  

    useEffect(()=> {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabarito/trips'                
        axios.get(url)
        .then(res => {
            setNomeViagem(res.data.trips)
        })
        .catch(error => {
            console.log(error.data);
        })
    })     

    const navigate = useNavigate() 
        const BotaoVolta = ()=> {
            navigate("/")
        } 
        const BotaoInscreve = ()=> {
            navigate("/inscreverviagem")
        }
    

        const listaViagens = nomeViagem.map((itens)=>{
            return  <DivList key={itens.id}>
                        <div>
                        <p><strong>Nome: </strong>{itens.name}</p>
                        <p><strong>Descrição: </strong>{itens.description}</p>
                        <p><strong>Planeta: </strong>{itens.planet}</p>
                        <p><strong>Duração da Viagem: </strong>{itens.durationInDays}</p>
                        <p><strong>Data: </strong>{itens.date}</p>
                        </div>                
                    </DivList>
        })

    return(
        <div>
            <BotaoVoltar onClick={BotaoVolta}>Voltar</BotaoVoltar>
            <BotaoInscrever onClick={BotaoInscreve}>Inscrever-se</BotaoInscrever>
            <ContainerViagens>
            <SuasViagens>Suas Viagens</SuasViagens>
            <DivListTrip>{listaViagens}</DivListTrip>
            </ContainerViagens>
            
        </div>

    )
}
