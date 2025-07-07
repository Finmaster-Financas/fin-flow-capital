
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoriesGrid from '@/components/CategoriesGrid';
import FeaturedArticles from '@/components/FeaturedArticles';
import InvestorQuiz from '@/components/InvestorQuiz';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoriesGrid />
      <FeaturedArticles />
      <InvestorQuiz />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
