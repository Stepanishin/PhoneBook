import React, { FC } from 'react';
import NavBar from '../UI/NavBar/NavBar';
import styles from './Header.module.css'



const Header:FC = () => {

    

    return (
        <header className={styles.header}>
            <NavBar />
        </header>
    );
};

export default Header;