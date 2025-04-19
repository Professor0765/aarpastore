import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import './ProductPage.css';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await api.get(`/products/${id}`);
                setProduct(response.data);
            } catch (err) {
                setError('Error fetching product details');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="product-page">
            {product ? (
                <>
                    <h1>{product.name}</h1>
                    <img src={product.imageUrl} alt={product.name} />
                    <p>{product.description}</p>
                    <h2>${product.price}</h2>
                    <button>Add to Cart</button>
                </>
            ) : (
                <div>Product not found</div>
            )}
        </div>
    );
};

export default ProductPage;