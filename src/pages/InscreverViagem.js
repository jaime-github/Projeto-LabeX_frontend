import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useForm from "../Hooks/useForms";
import { useState } from "react";
import useRequestData from "../Hooks/useRequestData";
import axios from "axios";
import { countries } from "../Constants/Paises";

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
  bottom: 82px;
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
  color: black;
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

export default function InscreverViagem() {

  const [idTrip, setTripId] = useState("");
  const [success, setuccess] = useState(false)
  const [trips] = useRequestData("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:darvas/trips", {})

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

  const OpcoesTrip = trips && trips.trips.map((nome)=>{
    return <option key={nome.id} value={nome.id}>{nome.name}</option>
  })

  const sendApplication = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:darvas/trips/${idTrip}/apply`
    const headers = { "Content-Type": "application/json"}
    axios
    .post( url, form, {headers})
    .then((res) => { 
          if(!setuccess(res.data.success))
          alert("Incrição enviada com sucesso!")
          cleanFields()
          console.log(res.data)          
    })
    .catch((err) => 
          console.log(err.response.message))
  }
  

  return (
    <div>
      
      <ContainerForms onSubmit={cadastrar}>      
        <Cadastre>Cadastre-se em Alguma Viagem</Cadastre>
        <Select defaultValue="" onChange={onChangeTripId}>
          <option value="" disabled>
            Escolha Sua Viagem
          </option>
          {OpcoesTrip}
        </Select>
        <Input
          name={"name"}
          value={form.name}
          placeholder="Nome"
          onChange={onChange}
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 caracteres"}
          required
        />
        <Input
          name={"age"}
          value={form.age}
          placeholder="Idade"
          type={"number"}
          min={18}
          onChange={onChange}
          required
        />
        <Input
          name={"applicationText"}
          value={form.applicationText}
          placeholder="Texto de Candidatura"
          pattern={"^.{30,}"}
          title={"O nome deve ter no mínimo 30 caracteres"}
          onChange={onChange}
          required
        />
        <Input
          name={"profession"}
          value={form.profession}
          placeholder="Profissão"
          onChange={onChange}
          pattern={"^.{10,}"}
          title={"O nome deve ter no mínimo 10 caracteres"}
          required
        />
        <Select
          name={"country"}
          value={form.country}
          placeholder="País"
          onChange={onChange}
        >
          <option value={""} disabled>
            Escolha um País
          </option>
          {countries.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </Select>
        <BotaoEnviar type="submit">Enviar</BotaoEnviar>
      
      </ContainerForms>

      <BotaoVoltar onClick={BotaoVolt}>Voltar</BotaoVoltar>
    </div>
  );
}
