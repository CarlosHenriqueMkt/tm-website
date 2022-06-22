import React from 'react';
import ThaisMartins from '../components/about/ThaisMartins';
import Brands from '../components/brandBox/Brands';
import Footer from '../components/footer/footer';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import ContactForm from '../components/contact/ContactForm';

export default function home() {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <ThaisMartins />
      <ContactForm />
      <Footer />
    </>
  );
}
