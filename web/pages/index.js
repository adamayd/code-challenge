import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Title from '../components/title';
import Content from '../components/content';
import Footer from '../components/footer';

const HomePage = () => {
  const [products, setProducts] = useState();
  const [monetaryModifier, setMonetaryModifier] = useState(1.0);
  const API_URL = 'http://localhost:5555/api/getmany';

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    getProducts();
  }, []);

  const monetaryUnit = (ev) => {
    switch (ev.target.value) {
      case 'eur':
        setMonetaryModifier(0.91);
        break;
      default:
        setMonetaryModifier(1.0);
    }
  };

  const fetchProducts = () => fetch(API_URL, {})
    .then((response) => {
      if (!response.ok) {
        throw Error(`Server has returned a response of ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });

  const getProducts = async () => {
    const response = await fetchProducts();
    setProducts(response);
  };

  return (
    <>
      <Head><title>Product</title></Head>
      <Header monetaryUnit={monetaryUnit} />
      <Title />
      {products && (
        <Content
          unsortedProducts={products}
          getProducts={getProducts}
          monetaryModifier={monetaryModifier}
        />
      )}
      <Footer />
    </>
  );
};

export default HomePage;
