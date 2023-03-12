import React, { useState } from "react";
import styled from "styled-components";
import Devlopment from "./WorksComponents/Devlopment";
import ProductDesign from "./WorksComponents/ProductDesign";
import WebDesign from "./WorksComponents/WebDesign";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  height: 100vh;
  width: 1200px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width:768px){
    width:100%
    flex-direction:column;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width:768px){
   padding:20px;
   justify-content: center;
  }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ListItems = styled.li`
  font-size: 70px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width:768px){
    font-size: 50px;
   }
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
const Right = styled.div`
  flex: 1;
`;
const Works = () => {
  const [works, setWorks] = useState("Web Design");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItems key={item} text={item} onClick={() => setWorks(item)}>
                {item}
              </ListItems>
            ))}
          </List>
        </Left>
        <Right>
          {works === "Web Design" ? (
            <WebDesign />
          ) : works === "Development" ? (
            <Devlopment />
          ) : (
            <ProductDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
