import React from "react";
import styled from "styled-components";
import Rotas from "./Rotas/Router";
import { Login } from "./pages/Login";

const BackgroundMain = styled.div`
  width: 100%;
`;
const LogoPlano = styled.img`
  position: absolute;
  bottom: 340px;
  left: 350px;
`;

const PlanoFundo = styled.img`
  width: 100%;
  margin: 0;
  padding: 0;
`;


function App() {
  return (
    <div>
      <BackgroundMain>
        <div>
          {/* <PlanoFundo src="https://i.postimg.cc/tgjLC7Y9/Design-sem-nome-14.png" /> */}
        </div>
        <Rotas/>

        <LogoPlano src="https://i.postimg.cc/W34rVbn3/LABE-2.png" />
      </BackgroundMain>
      
    </div>
  );
}

export default App;






