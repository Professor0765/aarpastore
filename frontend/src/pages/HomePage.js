import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { fetchFeaturedProducts } from '../services/api';
import './HomePage.css';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const featuredProducts = await fetchFeaturedProducts();
                setProducts(featuredProducts);
            } catch (error) {
                console.error('Error fetching featured products:', error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="home-page">
            <h1>Featured Products</h1>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;