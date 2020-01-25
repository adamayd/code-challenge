import React from 'react';
import Header from '../components/header';
import Breadcrumbs from '../components/breadcrumbs';
import Detail from '../components/detail';
import RelatedProducts from '../components/related_products';
import Footer from '../components/footer';

const HomePage = () => {
    return (
        <>
            <Header/>
            <Breadcrumbs/>
            <Detail/>
            <RelatedProducts/>
            <Footer />
        </>
    )
}

export default HomePage