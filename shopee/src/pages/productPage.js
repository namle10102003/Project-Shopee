import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const { id } = useParams();

    return (
       <h1>component chi tiết sản phẩm</h1>
    );
};

export default ProductPage;