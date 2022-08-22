import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useFetchAllUsersQuery } from '../../../store/reducers/fetchApi';
import { userLoginSlice } from '../../../store/reducers/getUserLogin';
import { IUser } from '../../../types/IUser';
import styles from './AuthForm.module.css'



const AuthForm:FC = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const { data } = useFetchAllUsersQuery('')


    const {isUser} = useAppSelector(state => state.userLoginSlice)
    const {userAccess} = userLoginSlice.actions
    const dispatch = useAppDispatch()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        const user = data?.filter((el: IUser) => {
            if (el.login === login && el.password === password) {
                return el
            }
        })
        if (user?.length != 0) {
            dispatch(userAccess())
        } else {
            const modalWindow = document.querySelector(`.${styles.form}`)
            modalWindow?.classList.add(`${styles.invalid_value}`)
            setTimeout(function(){
                modalWindow?.classList.remove(`${styles.invalid_value}`)
            }, 1000)
        }
    }
    
    return (
        <div className={styles.registration_cssave}>
            <form className={styles.form} onSubmit={handleSubmit } >
                <h3 className={styles.text_center}>Log in to account</h3>
                <div className={styles.form_group}>
                    <input onChange={(e) => setLogin(e.target.value)} className={styles.item} type="text" name="login" maxLength={15} minLength={2} pattern="^[a-zA-Z0-9_.-]*$" id="username" placeholder="Username" required />
                </div>
                <div className={styles.form_group}>
                    <input onChange={(e) => setPassword(e.target.value)} className={styles.item} type="password" name="Password" minLength={2} id="password" placeholder="Password" required />
                </div>
                <div className={styles.form_group}>
                    <button className={styles.create_account} type="submit">Log in</button>
                </div>
            </form>
        </div>
    );

};

export default AuthForm;