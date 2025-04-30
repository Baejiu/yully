import './ProductItem.css';
import Image from 'next/image';

interface ProductProps {
  product: {
    id: number;
    title: string;
    description: string;
  };
}

export default function ProductItem({ product }: ProductProps) {
  return (
    <div className="product-item">
      <Image
        src={`/images/product_icon.png`}
        alt="product"
        width={60}
        height={66}
      />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-description">{product.description}</p>
    </div>
  );
}
