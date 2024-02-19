import React from 'react'
import { useDispatch } from 'react-redux'
import { createData } from '../redux/Slice';
import { Link } from 'react-router-dom';
const Create = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const {codes, description, quantity, price} = e.target.elements;
            const info = {
                item_code: codes.value,
                description: description.value,
                quantity: quantity.value,
                price: price.value
            }
        try{
            
            dispatch(createData(info))
        }
        catch (error) {
            console.log('Error in posting data into database', error);
        }
        
    }
  return (
    <div className='create-container'>
        <Link to={'/'}>Read</Link>
      <form onSubmit={handleSubmit}>
        <h3>ADD PRODUCT DATA</h3>
        <label htmlFor='codes'>Item Code</label>
        <input type="text" name='codes' />
        <label htmlFor='description'>Item Description</label>
        <input type="text" name='description' />
        <label htmlFor='quantity'>Item Quantity</label>
        <input type="text" name='quantity' />    
        <label htmlFor='price'>Item Price</label>
        <input type="text" name='price' />      
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default Create
