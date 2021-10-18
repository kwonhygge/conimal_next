import styled from '@emotion/styled';
import Image from 'next/image';

import { ProductInfoCardProps } from '@/interfaces/productInfoCard';

export default function ProductInfoCard({ product }: ProductInfoCardProps) {
  return (
    <StyledCard>
      <StyledImageContainer>
        <Image
          src={product.imgSrc}
          alt={'제품 사진'}
          width={250}
          height={170}
        />
      </StyledImageContainer>
      <StyledCardInfoContainer>
        <StyledCategoryContainer>
          {product.categories.map((category, index) => (
            <span key={index}>{category}</span>
          ))}
        </StyledCategoryContainer>
        <p>{product.name}</p>
        <StyledVoteContainer voteRate={10}>
          <div />
          <p>투표 진행중</p>
          <p>누적 참여 100마리</p>
        </StyledVoteContainer>
      </StyledCardInfoContainer>
    </StyledCard>
  );
}

const StyledCard = styled.article`
  border: ${(props) => `0.2rem solid ${props.theme.colors.grey}`};
  border-radius: 0.5rem;
  margin: 0 2rem 2rem 0;
  overflow: hidden;
`;
const StyledImageContainer = styled.div``;
const StyledCardInfoContainer = styled.div`
  padding: 2rem;

  > p {
    font-size: ${(props) => props.theme.fontSizes.size14};
    font-weight: 700;
    margin: 0 0 3.3rem;
  }
`;

const StyledCategoryContainer = styled.div`
  margin: 0 0 1rem;

  span {
    position: relative;
    line-height: 1.9rem;
    color: ${(props) => props.theme.colors.darkGray};
    font-size: ${(props) => props.theme.fontSizes.size12};
    margin: 0 1.3rem 0 0;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      right: -0.6rem;
      transform: translateY(-50%);
      width: 0.1rem;
      height: 0.8rem;
      background: ${(props) => props.theme.colors.darkGray};
    }

    &:last-of-type:after {
      display: none;
    }
  }
`;

const StyledVoteContainer = styled.div<{ voteRate: number }>`
  > div {
    position: relative;
    width: 100%;
    height: 1rem;
    background: ${(props) => props.theme.colors.grey};
    border-radius: 1rem;
    margin: 0 0 0.8rem;
    overflow: hidden;

    &:after {
      content: '';
      position: absolute;
      width: ${(props) => `${props.voteRate}%`};
      height: 100%;
      background: ${(props) => props.theme.colors.yellow};
    }
  }

  p {
    font-weight: 500;
    font-size: ${(props) => props.theme.fontSizes.size12};
    line-height: 1.9rem;

    &:nth-of-type(1) {
    }
    &:nth-of-type(2) {
      color: ${(props) => props.theme.colors.grey02};
    }
  }
`;
