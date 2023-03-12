import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width:768px){
    width:100%;
   
  }
`;
const Container = styled.div`
  padding:10px 0px;
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-item: center;

  @media only screen and (max-width:768px){
    width:100%;
    padding:10px;
  }
`;
const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

`;
const Logo = styled.span`
   font-weight:900;
   font-size:1.5rem;
   text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px white;

`;
const List = styled.ul`
display: flex;

list-style:none;
gap: 20px;

@media only screen and (max-width:768px){
  display:none;
}
`;
const ListItem = styled.li`
cursor:pointer;
`;
const Icons = styled.div`
display: flex;

align-items: center;
gap: 20px;`;
const Icon = styled.img`
width:20px;
cursor:pointer;
`;
const Button = styled.button`
width:100px;
padding:10px;
background-color:#da4ea2;
color:white;
border:none;
border-radius:5px;
cursor:pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo >Ujjwal</Logo>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png"></Icon>
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
