export interface Product {
  id: number;
  image: string;
  imageAlt: string;
  title: string;
  description?: string;
  shopLabel: string;
  shopHref: string;
  imgClassName?:string
  titleClassName?:string
  containerClassName?: string;
}