import React from 'react';
import './styles/tableStyles.css'


const Table = ({ products, deleteProducts }) => {

    // console.log(prod)

    const handleDelete = (id) => {
        deleteProducts(id);
    }

    return (
        <div className='table-comtainer'>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((prod, index) => (
                            <tr key={index}>
                                <td>{prod.name}</td>
                                <td>{prod.price}</td>
                                <td>{prod.stock}</td>
                                <td>
                                    <button>
                                        <i className='bx bxs-edit'></i>
                                    </button>
                                    <button onClick={() => handleDelete(prod.id)}>
                                        <i className='bx bxs-comment-x'></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;