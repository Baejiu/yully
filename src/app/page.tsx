import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import ProductList from '@/components/product/ProductList';
import Testimonial from '@/components/testimonial/Testimonial';
import CompanyInfo from '@/components/company/CompanyInfo';
import Footer from '@/components/layout/Footer';

import './page.css';

export default function Home() {
  return (
    <div className="home-container">
      <Header />

      <main>
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
      </main>

      <Footer />
    </div>
  );
}
