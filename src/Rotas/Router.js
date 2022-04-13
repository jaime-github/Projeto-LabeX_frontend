import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  HomePage  from '../pages/HomePage';
import  VerViagens  from '../pages/VerViagens';
import  InscreverViagem  from '../pages/InscreverViagem';
import  Login  from '../pages/Login';
import  SuasViagens  from '../pages/SuasViagens';
import  DetalhesViagens  from '../pages/DetalhesViagens';
import  CriarViagem  from '../pages/CriarViagem';
import  ErrorPage  from '../pages/ErrorPage';



export default function Rotas() {
  return (
    <Router>
    <Routes>      
      <Route path={"/"} element={<HomePage/>}/>
      <Route path={"/verviagens"} element={<VerViagens/>}/>
      <Route path={"/inscreverviagem"} element={<InscreverViagem/>}/>
      <Route path={"/login"} element={<Login/>}/>
      <Route path={"/suasviagens"} element={<SuasViagens/>}/>
      <Route path={"/detalhesviagens"} element={<DetalhesViagens/>}/>
      <Route path={"/criarviagem"} element={<CriarViagem/>}/>
      <Route path={"*"} element={<ErrorPage/>}/>
    </Routes>
    </Router>
  );
}
