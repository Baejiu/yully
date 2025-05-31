'use client';

import { useState } from 'react';
import styles from './product.module.css';
import productDetails from './productDetails.json';
import ProductDetail from './ProductDetail';

// productDetails.json에서 상품 목록 데이터 추출
const products = Object.entries(productDetails).map(([id, data]) => ({
  id,
  name: data.title,
  description: data.description,
  mobile_description: data.mobile_description,
}));

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState(products[0].id);

  return (
    <div className={styles.productContainer}>
      <div className={styles.productHeader}>
        <h1 className={styles.title}>상품 안내</h1>

        <ul className={styles.tabContainer}>
          {products.map((product) => (
            <li
              key={product.id}
              className={`${styles.tabItem} ${
                activeTab === product.id ? styles.active : ''
              }`}
              onClick={() => setActiveTab(product.id)}
            >
              <div className={styles.number}>{product.id}</div>
              <div>
                <h2 className={styles.productName}>{product.name}</h2>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.mobileDescription}>
                  {product.mobile_description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.banner}>24시간 장례상담 010-9925-4519</p>
        <ProductDetail productId={activeTab} />
      </div>
    </div>
  );
}
