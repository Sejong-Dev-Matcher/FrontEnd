import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../container/auth/LoginForm';


const Login = () => {
    return (
        <AuthTemplate>
           <LoginForm/> 
        </AuthTemplate>
    );
};

export default Login;