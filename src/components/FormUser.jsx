import React from 'react';
import { useForm } from 'react-hook-form';

const FormUser = ({ createProducts }) => {

    const {handleSubmit, register, reset} = useForm();

    const submit = (data) => {
        createProducts(data)
        reset({
            name: '',
            price: '',
            stock: ''
        })
    }

  return (
    <div>FormUser
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="name">Nombre</label>
                <input {...register('name')} id='name' type="text" />
            </div>
            <div>
                <label htmlFor="precio">Precio</label>
                <input {...register('price')}id='precio' type="number" />
            </div>
            <div>
                <label htmlFor="cantidad">Cantidad</label>
                <input {...register('stock')} id='cantidad' type="number" />
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default FormUser;