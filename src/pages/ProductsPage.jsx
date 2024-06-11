import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import './styles/productsPage.css'
import useFetch from '../hooks/useFetch';
import { URL_API } from '../../url';
import FormUser from '../components/FormUser';



const ProductsPage = () => {
    const [products, setProducts, createProducts, deleteProducts] = useFetch('https://66611e1063e6a0189fe88273.mockapi.io/api/products');


    useEffect(() => {
        const url = 'https://66611e1063e6a0189fe88273.mockapi.io/api/products'
        setProducts(url)
    }, [])

    console.log(products)

    return (
        <div className='container--products'>
            <div>
                <button className='container--products--button'>Nuevo Producto</button>
            </div>
            <FormUser
                createProducts={createProducts}
            />
            <div>
                <Table
                    products={products}
                    deleteProducts={deleteProducts}
                />
            </div>
        </div>
    )
}

export default ProductsPage;