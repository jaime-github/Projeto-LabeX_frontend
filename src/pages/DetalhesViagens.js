
     // import React from 'react';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import useForm from '../../hooks/useForm'
// import useRequestData from '../../hooks/useRequestData';

// export default function DetalhesViagens() {

//     const {id} = useParams()

//     const [candidate, setCandidate] = useState([]);

//     // const [add, setAdd] = useState(false);

//     const [tripsDetails, getTrips] = useRequestData("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:jaime-epifanio-moreira/trips", {})


//     const adicionarPessoa = (tripId, candidateId) => {
//         const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/:tripId/candidates/:candidateId/decide'
//         const headers = { auth: localStorage.getItem("token")}
//         axios
//         .put(url,headers)
//         .then((res)=> {
//             if(add === true){
//                 alert("Adicionar na Lista de Viagem")
//             }
//             else {alert("Não foi Adicionado a Lista")}
//         })
//             .catch((err) => {
//                 console.log(error.response)
//         })
//     }

//     const candidatesTrips = (tripId, candidateId) => {
//         const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/jaime-epifanio-moreira/trip/:id'
//         const headers = { auth: localStorage.getItem("token")}
//         axios
//         .get(url,headers)
//         .then((res)=> {
//            setCandidate(res.data.trips)
//                 console.log(res)
//             })
//         .catch((err) => {
//                 console.log(error.response)
//         })
//     }

//     const pessoas = tripsDetails && tripsDetails.trips && tripsDetails.trips.name.map((item)=>{
//         return <div key = {item.id}> 
//             <p>{item.candidate}</p>            
//             tripId={id}
//     </div>
//     })
//     const navigate = useNavigate() 
//     const BotaoVolta = ()=> {
//         navigate("/")
//     } 
//     const BotaoCria = ()=> {
//         navigate("/criarviagem")
//     }
//     const BotaoLog = ()=> {
//       navigate("/login")
//     }
//     return(
//         <div>
//             <BotaoVoltar onClick={BotaoVolta}>Voltar</BotaoVoltar>
//             <BotaoCriar onClick={BotaoCria}>Inscrever-se</BotaoCriar>
//             <BotaoLogout onClick={BotaoLog}>Voltar</BotaoLogout>
//           <div>
            
//             {listaViagens}
//           </div>
//             <p>Suas Viagens</p>
//         </div>
//       )
