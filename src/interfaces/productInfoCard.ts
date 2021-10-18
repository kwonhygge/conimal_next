export interface ProductInfoCardProps {
  product: ProductInfoType;
}

export interface ProductInfoType {
  imgSrc: string;
  categories: string[];
  name: string;
  vote_number: {
    best: number;
    good: number;
    bad: number;
  };
}
