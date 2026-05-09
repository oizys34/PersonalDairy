import React, { useState } from 'react';
 
import axios from 'axios';
 
function Login() {
 
    const [formData, setFormData] = useState({
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
                'https://fluffy-spork-7v9g6g5jxvqw3qq4-5000.app.github.dev/api/auth/login',
                formData
            );
 
            localStorage.setItem(
                'token',
                res.data.token
            );
 
            alert('Login Success');
 
            console.log(res.data);
 
        } catch (error) {
 
            const message = error.response?.data?.message || error.message || 'Login failed';
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
 
                <h1>Login</h1>
 
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
                    Login
</button>
 
            </form>
 
        </div>
    );
}
 
export default Login;