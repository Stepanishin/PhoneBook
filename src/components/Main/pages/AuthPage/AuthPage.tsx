import React from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import AuthForm from '../../../UI/AuthForm/AuthForm';
import LogoutContainer from '../../../UI/LogoutContainer/LogoutContainer';



const AuthPage = () => {

    const {isUser} = useAppSelector(state => state.userLoginSlice)

    return (
        <div>
            {
                isUser
                ?
                <LogoutContainer />
                :
                <AuthForm />
            }
        </div>
    );

};

export default AuthPage;