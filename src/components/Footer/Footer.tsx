import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css'



const Footer = () => {

    return (
        <footer className={styles.footer}  >
            <a href='https://github.com/Stepanishin/PhoneBook' target="_blank" rel="noreferrer" >Github</a>
        </footer>
    );

};

export default Footer;