import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useForm from "../Hooks/useForms";
import { useState } from "react";
import axios from "axios";
import { planets } from "../Constants/Planetas";

const BotaoEnviar = styled.button`
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
    color: #84c6f4;
    border: solid;
    border-color: blue;
    cursor: pointer;
  }
`;

const BotaoVoltar = styled.button`
  position: absolute;
  height: 40px;
  width: 95px;
  bottom: 132px;
  left: 640px;
  padding: 10px;
  border-radius: 25px;
  color: white;
  background-color: #252773;
  :hover {
    color: #84c6f4;
    border: solid;
    border-color: blue;
    cursor: pointer;
  }
`;

const ContainerForms = styled.form`
  display: flex;
  position: relative;
  top: 270px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

`

const Input = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  width: 40%;
  height: 30px;
  color: white;
  border-radius: 25px;
  text-align: left;
  padding-left: 10px;
`

const Select = styled.select`
  margin-top: 20px;
  border: none;
  height: 35px; 
  border-radius: 30px;
  outline: 0;  
  padding:10px;
  cursor: pointer;
  width: 42%;
`

const Cadastre = styled.h1`
  color: white;
`

const InputData = styled.input`
  display: flex;
  margin-top: 20px;
  border: none;
  height: 15px; 
  border-radius: 30px;
  outline: 0;  
  padding:10px;
  cursor: pointer;
  width: 39%;
`

export default function InscreverViagem() {

  const [idTrip, setTripId] = useState("");
  const [trip, setTrip] = useState();

  const onChangeTripId = (event) => {
    setTripId(event.target.value)
}

   const routes = useNavigate()
 

  const BotaoVolt = () => {
    routes("/verviagens")
  }

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country:""
  });

  const clearInput = () => {
    cleanFields()
    setTripId("")
}
  const cadastrar = (event) => {
    event.preventDefault();
    sendApplication(form, idTrip, clearInput)
    console.log("Formulário enviado!", form);
    cleanFields();
  };

  const OpcoesTrip = trip && trip.trips.map((nome)=>{
    return <option key={nome.id} value={nome.id}>{nome.name}</option>
  })

  const sendApplication = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:darvas/trips`
    const headers = { auth: localStorage.getItem("token")}
    axios
    .post( url, form, {headers})
    .then((res) => { 
        setTrip(res.data.success)
          alert("Viagem cadastrada com sucesso!")
          cleanFields()
          console.log(res.data)          
    })
    .catch((err) => 
          console.log(err.response.message))
  }
  

  return (
    <div>
      <ContainerForms onSubmit={cadastrar}>
        <Cadastre>Crie sua Viagem</Cadastre>        
        <Input
          name={"name"}
          value={form.name}
          placeholder="Nome"
          onChange={onChange}
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 caracteres"}
          required
        />
        <Select
              name={"planet"}
              value={form.planet}
              placeholder="Planeta"
              onChange={onChange}
              required
            >                
        <option value={""} disabled>
            Escolha um Planeta
          </option>
          {planets.map((item) => {
            return (
              <option value={item} key={item}>{item}
              </option>
            );
          })}        
        </Select>        
        <InputData
              name={"date"}
              value={form.date}
              placeholder="Texto de Candidatura"
              onChange={onChange}
              pattern={"^.{3,}"}
              required
              type={"date"}
            />
        <Input
              name={"description"}
              value={form.description}
              placeholder="Descrição"
              onChange={onChange}
              pattern={"^.{3,}"}
              required
              title={"A descrição deve ter no mínimo 3 caracteres"}
            />        
        <Input
              name={"durationInDays"}
              value={form.durationInDays}
              placeholder="Duração da viagem"
              onChange={onChange}
              type="number"
              required
            />

        <BotaoEnviar type="submit">Enviar</BotaoEnviar>
      </ContainerForms>

      <BotaoVoltar onClick={BotaoVolt}>Voltar</BotaoVoltar>

    </div>
  );
}

    
    