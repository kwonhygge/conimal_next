import styled from '@emotion/styled';

import AppLayout from '@/components/AppLayout';
import ProductInfoCard from '@/parts/ProductInfoCard';

import { products } from '../mock-up/petDictionary';

export default function PetDictionary() {
  return (
    <AppLayout>
      <StyledPetDictionaryContainer>
        <h2>펫과사전</h2>
        <StyledFilterContainer>
          <StyledFilterButton isSelected={true}>전체</StyledFilterButton>
          <StyledFilterButton>강아지</StyledFilterButton>
          <StyledFilterButton>고양이</StyledFilterButton>
        </StyledFilterContainer>
        <StyledProductsContainer>
          {products.map((item, index) => (
            <ProductInfoCard product={item} key={index} />
          ))}
        </StyledProductsContainer>
      </StyledPetDictionaryContainer>
    </AppLayout>
  );
}

const StyledPetDictionaryContainer = styled.div`
  h2 {
    font-size: ${(props) => props.theme.fontSizes.size30};
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
    margin: 0 0 5rem;
  }
`;

const StyledFilterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledFilterButton = styled.button<{ isSelected?: boolean }>`
  margin: 0 1rem 4rem 0;
  font-size: ${(props) => props.theme.fontSizes.size14};
  font-weight: 700;
  color: ${(props) =>
    props.isSelected ? props.theme.colors.white : props.theme.colors.primary};
  background: ${(props) =>
    props.isSelected ? props.theme.colors.primary : props.theme.colors.white};
  border: ${(props) => `0.1rem solid ${props.theme.colors.primary}`};
  border-radius: 0.5rem;
  padding: 0.4rem 2rem;
`;

const StyledProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 110rem;
  margin: 0 auto;
`;
