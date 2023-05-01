import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const FooterContainer = styled.div`
  display: flex;
  background-color: black;
  color: white;
`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 60px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const CenterContent = styled.div`
  flex: 1;
  padding: 60px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const RightContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContractItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LeftContent>
        <Logo>DAFLICK</Logo>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </LeftContent>
      <CenterContent>
        <Title>Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
        </List>
      </CenterContent>
      <RightContent>
        <Title>Contact</Title>
        <ContractItem>
          <PlaceIcon style={{ marginRight: "10px" }} />
          Address , Mai lu , Yoo ti nai
        </ContractItem>
        <ContractItem>
          <PhoneIcon style={{ marginRight: "10px" }} />
          +6691234567
        </ContractItem>
        <ContractItem>
          <EmailIcon style={{ marginRight: "10px" }} />
          contact@email.com
        </ContractItem>
        <Payment src="https://s3-alpha.figma.com/hub/file/1659619545/e1f08393-359b-440d-8eba-75ac5c83168b-cover.png" />
      </RightContent>
    </FooterContainer>
  );
};

export default Footer;
