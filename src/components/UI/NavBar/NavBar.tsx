import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import styles from './NavBar.module.css'



const NavBar:FC = () => {

    const {isUser} = useAppSelector(state => state.userLoginSlice)

    return (
        <ul className={styles.NavBar}>
            <Link className={styles.NavBar_item_link} to={'/'} ><li className={styles.NavBar_item}>Home</li></Link>
            {
                isUser && <Link className={styles.NavBar_item_link} to={'/Phonebook'} ><li className={styles.NavBar_item}>Phonebook</li></Link>

            }      
        </ul>
    );

};

export default NavBar;