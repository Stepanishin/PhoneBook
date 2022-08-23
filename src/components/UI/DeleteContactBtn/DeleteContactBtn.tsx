import React, { FC } from 'react';
import styles from './DeleteContactBtn.module.css'
import delete_btn from './img/delete_btn.svg'

interface IDeleteContactBtnProps {
    deleteContact: (id: number) => void,
    id: number
}

const DeleteContactBtn: FC<IDeleteContactBtnProps> = ({ deleteContact, id}) => {

    const onClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        const id = (e.target as HTMLInputElement).id
        deleteContact(parseInt(id))
    }

    return (
        <button className={styles.delete_btn} onClick={onClick}>
            <img id={(id).toString()} width='30px' height='30px' src={delete_btn} alt="delete_button" />
        </button>
    );

};

export default DeleteContactBtn;