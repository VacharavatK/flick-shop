import React from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import Footer from "../../components/footer/Footer";

const ProductListContainer = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Options = styled.option``;

const ProductList = () => {
  return (
    <ProductListContainer>
      <Navbar />
      <Title>T-Shirt</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Options disables selected>
              Select option
            </Options>
            <Options>option1</Options>
            <Options>option2</Options>
            <Options>option3</Options>
            <Options>option4</Options>
            <Options>option5</Options>
          </Select>
          <Select>
            <Options disables selected>
              Size
            </Options>
            <Options>S</Options>
            <Options>M</Options>
            <Options>L</Options>
            <Options>XL</Options>
            <Options>XXL</Options>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Options disables selected>
              Select option
            </Options>
            <Options>option1</Options>
            <Options>option2</Options>
            <Options>option3</Options>
            <Options>option4</Options>
            <Options>option5</Options>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </ProductListContainer>
  );
};

export default ProductList;
