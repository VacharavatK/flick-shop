import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: black;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #663046;
  color: white;
  cursor: pointer;
  margin-bottom: 5px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <LoginContainer>
      <Wrapper>
        <Title>LOG IN</Title>
        <Form>
          <Input placeholder="usermane" />
          <Input placeholder="password" />
          <Button>LOG IN</Button>
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </LoginContainer>
  );
};

export default Login;
