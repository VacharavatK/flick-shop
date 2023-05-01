import React from 'react'
import styled from 'styled-components'

import { categories } from '../../mockUpData';
import CategoryItem from './CategoryItem';

const CategoriesContainer = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

const Categories = () => {
  return (
    <CategoriesContainer>
        {categories.map(item => (
            <>
            <CategoryItem item={item} key={item.id} />
            </>
        ))}
    </CategoriesContainer>
  )
}

export default Categories