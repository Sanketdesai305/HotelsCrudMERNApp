import React from 'react';
import styled from 'styled-components';
import NavBar from '../Components/Navbar';
import Cards from '../Components/Cards';
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin:10px;
`;
const Div = styled.div`
   display: flex;
  flex-wrap: wrap;
  margin:20px;
`;
function App() {

  return (
   <>
    <NavBar/>
    <Container>
      <Div>
          <Cards name="Hilton Garden" img= {"https://static.wixstatic.com/media/e25c60_aca7e2fe46484994b0ac8ecc8df2f966~mv2.jpg/v1/fill/w_2500,h_1875,al_c/e25c60_aca7e2fe46484994b0ac8ecc8df2f966~mv2.jpg"}/>
      </Div>
      <Div>
        <Cards name="Radisson Blu" img={"https://rivermistresorts.com/wp-content/uploads/2021/02/Luxury-cottage-inside-1536x1024.jpg"}/>
      </Div>
      <Div>
        <Cards name="Ritz Carlton" img={"https://wallpaperaccess.com/full/2690866.jpg"}/>
      </Div>
    </Container>
   </>
  );
}

export default App;
