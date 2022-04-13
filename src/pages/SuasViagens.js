import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const BotaoVoltar = styled.button`
    position: absolute;
    height: 40px;
    width: 95px;
    bottom: 70px;
    left: 510px; 
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

const BotaoCriar = styled.button`
    position: absolute;
    height: 40px;
    width: 105px;
    bottom: 70px;
    left: 635px; 
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

const BotaoLogout = styled.button`
    position: absolute;
    height: 40px;
    width: 95px;
    bottom: 70px;
    left: 775px; 
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
`

export const DivList= styled.div`
  background-color:#252773;
  color: white;
  border:solid 1px #3E86F5;
  padding:10px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 30px;
  font-size: 12px;  
`
export const DivTripList= styled.div`  
  position: relative;
  top: 20%;
  overflow-y: scroll;
  width: 50%;
  border:solid 1px #F8F8FF;
  height: 470px;
  padding-right: 10px;
  padding-bottom: 10px;
`

export const ContainerViagens= styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 70%;
  margin-top: 80px;
  margin-right: 30px;
`

const BotaoLixo = styled.button`
  border: 1px solid transparent;
    background-color: transparent;
    color: transparent;
    transition: 0.2s ease;
    align-self: center; 
    font-size: 0.8em;
    margin-left: 0.2em;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.5s;
        :hover{
        background-color: transparent;
        color:transparent;
        transform: scale(1.5);
      }
      :active{
        background-color: transparent;
      
      }
`
const ContainerMap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

  export default function SuasViagens() {

const [nomeViagem, setNomeViagem] = useState([]); 
const [deletar, setDeletar] = useState('');
   

const getViagem=()=> {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/jaime-epifanio-moreira/trips'                
    axios.get(url)
    .then(res => {
        setNomeViagem(res.data.trips)
    })
    .catch(error => {
        console.log(error.data);
    })
};   

useEffect(() => {
  getViagem()
},[]);

const navigate = useNavigate()

    const BotaoVolta = ()=> {
        navigate("/")
    } 
    const BotaoCria = ()=> {
        navigate("/criarviagem")
    }
    const BotaoLog = ()=> {
      navigate("/login")
    }
   


    const listaViagens = nomeViagem.map((itens)=>{
        return  <DivList key={itens.id}>                    
                    <ContainerMap>
                    <p><strong>Nome:</strong>{itens.name}</p>
                    <BotaoLixo onClick={()=>{deleteTrip(itens.id)}}><FaTrash color="white" fontSize="15"/></BotaoLixo>
                    </ContainerMap>                               
                </DivList>
    })

    const deleteTrip = (id) => {     
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jaime-epifanio-moreira/trips/${id}`     
    const headers = { auth: localStorage.getItem("token")}     
    axios       
    .delete( url, {headers})         
    .then((res) => {           
      setDeletar(res.data)           
      alert("Removido")           
      getViagem()  
      console.log(res.data);                     
      })         
      .catch((err) => {           
        console.log(err.response);           
        alert("Erro, tente novamente")         
        });}
     
return(
    <div>
        <BotaoVoltar onClick={BotaoVolta}>Voltar</BotaoVoltar>
        <BotaoCriar onClick={BotaoCria}>Criar Viagem</BotaoCriar>
        <BotaoLogout onClick={BotaoLog}>Logout</BotaoLogout>
       
       <ContainerViagens>    
       <p>Suas Viagens</p>    
      <DivTripList>{listaViagens}</DivTripList>
      </ContainerViagens>        
    </div>
  )
}

