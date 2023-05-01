import React from 'react'
import styled from 'styled-components'

import { tShirtProducts } from '../../mockUpData';
import Product from './Product';

const ProductsContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
    <ProductsContainer>
        {tShirtProducts.map(item => (
            <Product item={item} key={item.id} />
        ))}
    </ProductsContainer>
  )
}

export default Products