import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Breadcrumbs from '../components/breadcrumbs';
import Detail from '../components/detail';
import RelatedProducts from '../components/related_products';
import Footer from '../components/footer';

const HomePage = ({ productId = 0 }) => {

    const [singleProduct, setSingleProduct] = useState();
    const API_URL = 'http://localhost:5555/api/getsingle/';

    useEffect(() => {
        console.log("before the render in index");
        getSingleProduct();
    },[])

    const getSingleProduct = async () => {
        // fetch
        const response = await fetchSingleProduct();
        console.log(response);
        setSingleProduct(response);
        // format
    }

    const fetchSingleProduct = async () => {
        return await fetch(`${API_URL}${productId}`, {})
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
    return (
        <>
            <Header/>
            <Breadcrumbs/>
            <Detail singleProduct={singleProduct}/>
            <RelatedProducts/>
            <Footer />
        </>
    )
}

export default HomePage