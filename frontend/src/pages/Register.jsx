import React from 'react'
import { useNavigate } from 'react-router-dom';
import axiosClient from '../axios/axios';

const Register = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const {fname, lname, bdate, address, contact, email, password, cpassword} = e.target.elements;
            const data = {
                first_name: fname.value,
                last_name: lname.value,
                birth_date: bdate.value,
                address: address.value,
                contact_number: contact.value,
                email: email.value,
                password: password.value,
                password_confirmation: cpassword.value,
            }
            const response = await axiosClient.post("/register", data)
            if(response.data.status === 200) {
                navigate("/login")
            }
        }
        catch(error) {
            console.log(error.response)
        }
    }
  return (
    <div className='register-form'>
      <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='fname'>First Name</label>
                    <input type='text' name='fname' />
                </div>
                <div>
                    <label htmlFor='lname'>Last Name</label>
                    <input type='text' name='lname' />
                </div>
                <div>
                    <label htmlFor='bdate'>Bith Date</label>
                    <input type='date' name='bdate' />
                </div>
                <div>
                    <label htmlFor='address'>Address</label>
                    <input type='text' name='address' />
                </div>
                <div>
                    <label htmlFor='contact'>Contact Number</label>
                    <input type='text' name='contact' />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' />
                </div>
                <div>
                    <label htmlFor='cpassword'>Confirm Password</label>
                    <input type='password' name='cpassword' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Register
