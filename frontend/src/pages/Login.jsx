import React from 'react'
import { useNavigate } from 'react-router-dom';
import axiosClient from '../axios/axios';

const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const {email, password} = e.target.elements;
            const data = {

                email: email.value,
                password: password.value,
            }
            const response = await axiosClient.post("/login", data);

            if(response.data.status === 200) {
                navigate('/');
                localStorage.setItem("token", response.data.token)
            }
        }
        catch(error) {
            console.log(error.response)
        }
    }
  return (
    <div className='login-form'>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login
