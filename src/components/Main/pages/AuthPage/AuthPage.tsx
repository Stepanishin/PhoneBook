import React from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import AuthForm from '../../../UI/AuthForm/AuthForm';
import LogoutContainer from '../../../UI/LogoutContainer/LogoutContainer';
import styles from './AuthPage.module.css'



const AuthPage = () => {

    const {isUser} = useAppSelector(state => state.userLoginSlice)

    return (
        <div className={styles.AuthPage}>
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