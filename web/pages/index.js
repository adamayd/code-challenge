import React, { useState, useEffect} from 'react';
import Header from '../components/header';
import Title from '../components/title';
import Content from '../components/content';
import Footer from '../components/footer';

const HomePage = () => {

    const [products, setProducts] = useState();
    const API_URL = 'http://localhost:5555/api/getmany';

    useEffect(() => {
        console.log("before the render in index");
        getProducts();
    },[])

    const getProducts = async () => {
        // fetch
        const response = await fetchProducts();
        console.log(response);
        setProducts(response);
        // format
    }

    const fetchProducts = async () => {
        return await fetch(API_URL, {})
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
            <Title />
            <Content products={products}/>
            <Footer />
        </>
    )
}

export default HomePage