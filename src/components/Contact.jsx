import React, { useRef, useState } from "react";
import styled from "styled-components";
import Map from "./map/Map";
import emailjs from "@emailjs/browser";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  @media only screen and (max-width:768px){
   flex-direction:column;
 
   }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width:768px){
    justify-content: center;

    }
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width:768px){
    width: 300px;

    }
`;
const Input = styled.input`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;
const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor:pointer;
  padding: 20px;
  border-radius: 5px;
`;
const Right = styled.div`
  flex: 1;

  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
 
`;

const Contact = () => {

  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lo29oau",
        "template_betegon",
        ref.current,
        "DvOi-9Phq22YyGjn4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="username"></Input>
            <Input placeholder="Email" name="email"></Input>
            <TextArea
              placeholder="Write your message"
              rows={10}
              name="message"
            ></TextArea>
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
