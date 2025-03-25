import './ProductList.css';
import ProductItem from './ProductItem';

export default function ProductList() {
  const products = [
    {
      id: 1,
      title: '약식형 230',
      description:
        '상품의 간단한 소개를 적어주세요\n상품의 간단한 소개를 적어주세요\n상품의 간단한 소개를 적어주세요',
    },
    {
      id: 2,
      title: '약식형 230',
      description:
        '상품의 간단한 소개를 적어주세요\n상품의 간단한 소개를 적어주세요\n상품의 간단한 소개를 적어주세요',
    },
    {
      id: 3,
      title: '약식형 230',
      description:
        '상품의 간단한 소개를 적어주세요\n상품의 간단한 소개를 적어주세요\n상품의 간단한 소개를 적어주세요',
    },
    {
      id: 4,
      title: '약식형 230',
      description:
        '상품의 간단한 소개를 적어주세요\n상품의 간단한 소개를 적어주세요',
    },
  ];

  return (
    <div className="product-list">
      <h2 className="product-list-title">상품 안내</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
