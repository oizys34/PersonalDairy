import React, { useState } from 'react';
 
import axios from 'axios';
 
function Register() {
 
    const [formData, setFormData] = useState({
 
        name: '',
        email: '',
        password: ''
    });
 
    const handleChange = (e) => {
 
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
 
    const handleSubmit = async (e) => {
 
        e.preventDefault();
 
        try {
 
            const res = await axios.post(
                'https://fluffy-spork-7v9g6g5jxvqw3qq4-5000.app.github.dev/api/auth/register',
                formData
            );
 
            alert('Register Success');
 
            console.log(res.data);
 
        } catch (error) {
 
            const message = error.response?.data?.message || error.message || 'Registration failed';
            alert(message);
            console.error(error);
        }
    }; 
    return (
 
        <div className="container">
 
            <form
                className="form"
                onSubmit={handleSubmit}
>
 
                <h1>Register</h1>
 
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
 
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
 
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
 
                <button type="submit">
                    Register
</button>
 
            </form>
 
        </div>
    );
}
 
export default Register;