import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Breadcrumbs from '../components/breadcrumbs';
import Detail from '../components/detail';
import RelatedProducts from '../components/related_products';
import Footer from '../components/footer';

const ProductDetailPage = ({ guid }) => {

    const [singleProduct, setSingleProduct] = useState();
    const [monetaryModifier, setMonetaryModifier] = useState(1.0);
    const API_URL = 'http://localhost:5555/api/getsingle/';

    useEffect(() => {
        getSingleProduct();
    },[])

    const getSingleProduct = async () => {
        const response = await fetchSingleProduct();
        setSingleProduct(response);
    }

    const fetchSingleProduct = async () => {
        return await fetch(`${API_URL}${guid}`, {})
            .then(response => {
                if (!response.ok) {
                    throw (`Server has returned a response of ${response.status}`);
                }
                return response.json();
            })
            .catch(error => {
                console.log(error);
            })
    }

    const monetaryUnit = (ev) => {
        switch(ev.target.value) {
            case "eur":
                setMonetaryModifier(0.91);
                break;
            default: 
                setMonetaryModifier(1.0);
        }    
    }

    return (
        <>
            <Head><title>Product Detail</title></Head>
            <Header monetaryUnit={monetaryUnit} />
            {singleProduct && <Breadcrumbs crumb={singleProduct.name} />}
            {singleProduct && <Detail singleProduct={singleProduct} monetaryModifier={monetaryModifier} />}
            <RelatedProducts/>
            <Footer />
        </>
    )
}

ProductDetailPage.getInitialProps = async ({ query }) => {
  return { guid: query.guid };
};

export default ProductDetailPage