import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { userLoginSlice } from '../../../store/reducers/getUserLogin';
import styles from './LogoutContainer.module.css'



const LogoutContainer = () => {

    const {isUser} = useAppSelector(state => state.userLoginSlice)
    const {userAccess} = userLoginSlice.actions
    const dispatch = useAppDispatch()

    const logOut = () => {
        dispatch(userAccess())
    }

    return (
        <div>
            {
                isUser && 
                <div className={styles.LogoutContainer}>
                    <div className={styles.LogoutContainer_wrap}>
                        <p>You are successfully authorized!</p>
                        <p>You can start keeping a phone book from this link: <Link className={styles.LogoutContainer_link} to={'/Phonebook'}>Phonebook</Link></p>
                        <button onClick={logOut} className={styles.Logout_btn}>Log out</button>
                    </div>
                </div>
            }
        </div>
    );

};

export default LogoutContainer;