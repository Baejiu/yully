import Hero from '@/components/home/Hero';
import ProductList from '@/components/product/ProductList';
import Testimonial from '@/components/testimonial/Testimonial';
import CompanyInfo from '@/components/company/CompanyInfo';

import './page.css';

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <Hero />
      </section>

      <section className="product-section">
        <ProductList />
      </section>

      <section className="testimonial-section">
        <Testimonial />
      </section>

      <section className="company-info-section">
        <CompanyInfo />
      </section>
    </div>
  );
}
