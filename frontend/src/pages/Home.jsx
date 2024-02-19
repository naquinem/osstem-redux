import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosClient from '../axios/axios';
import { fetchData } from '../redux/Slice';
import '../styles/Style.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.data.isLoading)
  const data = useSelector((state) => state.data.data);
  useEffect(() => {
    axiosClient.get('/show')
    .then((res) => {
      if(res.status === 200) {
        dispatch(fetchData(res.data.products))
      }
    })
    .catch((error) => console.log(error))
  }, [dispatch])

  return (
    <div className='fetch-container'>
      <Link to="/store-data">Create</Link>
      <table>
        <thead>
          <tr className='title'>
            <th colSpan={4}>TRANSFER LIST</th>
          </tr>
          <tr>
            <th>ITEM CODE</th>
            <th>DESCRIPTION</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {
            isLoading ? <tr><td>Loading...</td></tr> :
            Object.values(data).map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                      {item.item_code}
                  </td>
                  <td>
                      {item.description}
                  </td>
                  <td>
                      {item.quantity}
                  </td>
                  <td>
                      {item.price}
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>  
  )
}

export default Home
