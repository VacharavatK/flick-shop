import React from "react";
import styled from "styled-components";

import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { mobile } from "../../responsive";

const NavbarContainer = styled.div`
  height: 60px;
  background-color: black;
  color: white;
  ${mobile({ height: "50px" })}
`;

const ContentWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Languages = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchBar = styled.div`
  border: none;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  border-radius: 30px;
  ${mobile({ width: "50px" })}
`;

const CenterContent = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <ContentWrapper>
        <LeftContent>
          <Languages>EN</Languages>
          <SearchBar>
            <Input />
            <SearchIcon style={{ fontSize: 16, marginLeft: 5 }} />
          </SearchBar>
        </LeftContent>
        <CenterContent>
          <Logo>DAFLICK</Logo>
        </CenterContent>
        <RightContent>
          <MenuItems>REGISTER</MenuItems>
          <MenuItems>SIGN IN</MenuItems>
          <MenuItems>
            <Badge color="secondary" badgeContent={5}>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItems>
        </RightContent>
      </ContentWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
