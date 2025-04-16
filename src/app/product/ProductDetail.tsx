'use client';
import Image from 'next/image';
import styles from './productDetail.module.css';
import productDetails from './productDetails.json';

const basePath = process.env.NODE_ENV === 'production' ? '/yully' : '';

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const productData = productDetails[productId as keyof typeof productDetails];

  if (!productData) return null;

  const renderDescription = (description: string | string[]) => {
    if (Array.isArray(description)) {
      return (
        <ul className={styles.descriptionList}>
          {description.map((item, index) => (
            <li key={index} className={styles.descriptionItem}>
              - {item}
            </li>
          ))}
        </ul>
      );
    }
    return <p className={styles.itemDescription}>- {description}</p>;
  };

  return (
    <div className={styles.detailContainer}>
      <h2 className={styles.productTitle}>{productData.title}</h2>
      <p className={styles.productDescription}>{productData.description}</p>
      {productData.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>{`0${
              sectionIndex + 1
            }`}</span>
            <span className={styles.innerTitle}>{section.title}</span>
          </h3>
          <div className={styles.itemsGrid}>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className={styles.item}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={`${basePath}/${item.image}`}
                    alt={item.title}
                    width={300}
                    height={200}
                    className={styles.image}
                  />
                </div>
                <h4 className={styles.itemTitle}>{item.title}</h4>
                {renderDescription(item.description)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
