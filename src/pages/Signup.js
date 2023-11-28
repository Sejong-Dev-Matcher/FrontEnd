import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import SignupForm from '../container/auth/SignupForm';

const Signup = () => {
    return (
        <AuthTemplate>
            <SignupForm/>
        </AuthTemplate>        
    );
};

export default Signup;