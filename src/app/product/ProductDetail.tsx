'use client';
import Image from 'next/image';
import styles from './productDetail.module.css';
import productDetails from './productDetails.json';

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
              {item}
            </li>
          ))}
        </ul>
      );
    }
    return <p className={styles.itemDescription}>{description}</p>;
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
          <div className={styles.sectionContent}>
            <div className={styles.itemsGrid}>
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className={styles.item}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={`${item.image}`}
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
        </div>
      ))}
      {productData.mobile_sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className={styles.mobileSection}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>{`0${
              sectionIndex + 1
            }`}</span>
            <span className={styles.innerTitle}>{section.title}</span>
          </h3>
          <div className={styles.mobileSectionContent}>
            <ul className={styles.mobileItems}>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className={styles.mobileItem}>
                  {item}
                </li>
              ))}
            </ul>
            <div className={styles.mobileImageWrapper}>
              <Image
                src={`${section.image}`}
                alt={section.title}
                fill
                style={{ objectFit: 'contain', objectPosition: 'top' }}
              />
            </div>
          </div>
        </div>
      ))}
      <div className={styles.sectionNote}>
        <h3 className={styles.sectionTitle}>
          <span className={styles.innerTitle}>장례서비스 이용 시 참고사항</span>
        </h3>
        {productData.note.map((item, index) => (
          <p key={index} className={styles.sectionNoteItem}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
