import React, { FC, useEffect, useState } from 'react';
import { IContact } from '../../../types/IContact';
import styles from './UpdateContactBtn.module.css'
import editBtn from './img/edit_btn.svg'

interface IUpdateContactProps {
    updateContact: (newContact: IContact) => void,
    contact: IContact
}

const UpdateContactBtn: FC<IUpdateContactProps> = ({updateContact, contact}) => {

    const [updatedContact, setUpdatedContact] = useState<IContact>({
        name: contact.name,
        phone: contact.phone,
        id: contact.id,
    }) 

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.name
        setUpdatedContact({...updatedContact, [fieldName]: e.target.value})
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateContact(updatedContact)
        document.getElementById("closeModalAddNewContact")!.click()
    }


    return (
        <div>
            <a href={`#openModalUpdateContact${contact.id}`}><img width='30px' height='30px' src={editBtn} alt="edit_btn" /></a>
            <div id={`openModalUpdateContact${contact.id}`} className={styles.modal}>
                <div className={styles.modal_dialog}>
                    <div className={styles.modal_content}>
                    <div className={styles.modal_header}>
                        <h3 className={styles.modal_title}>Edit contact</h3>
                        <a id='closeModalAddNewContact' href="#close" title="Close" className={styles.close}>×</a>
                    </div>
                    <div className={styles.modal_body}>    
                        <form onSubmit={onSubmit} className={styles.formAddNewContact}>
                            <label htmlFor="name"><input defaultValue={contact.name} placeholder='Name' required type="text" name='name' id='name' onChange={handleChange} /></label>
                            <label htmlFor="phone"><input defaultValue={contact.phone} placeholder='Phone' required type="text" name='phone' id='phone' onChange={handleChange} /></label>
                            <button className={styles.addNewContactBtn} type='submit'>Edit contact</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    );

};

export default UpdateContactBtn;