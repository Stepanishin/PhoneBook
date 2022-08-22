import React, { FC, useEffect, useState } from 'react';
import { IContact } from '../../../types/IContact';
import styles from './AddNewContactBtn.module.css'

interface IAddNewContactProps {
    addNewContact: (newContact: IContact) => void
}

const AddNewContactBtn: FC<IAddNewContactProps> = ({addNewContact}) => {

    const [newContact, setNewContact] = useState<IContact>({
        name: '',
        phone: '',
        id: Date.now(),
    }) 

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.name
        setNewContact({...newContact, [fieldName]: e.target.value})
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addNewContact(newContact)
        setNewContact({
            name: '',
            phone: '',
            id: Date.now(),
        })
        document.getElementById("closeModalAddNewContact")!.click()
    }


    return (
        <div>
            <a className={styles.addNewContactBtn} href="#openModalAddNewContact">Add new contact</a>
            <div id="openModalAddNewContact" className={styles.modal}>
                <div className={styles.modal_dialog}>
                    <div className={styles.modal_content}>
                    <div className={styles.modal_header}>
                        <h3 className={styles.modal_title}>Add new contact</h3>
                        <a id='closeModalAddNewContact' href="#close" title="Close" className={styles.close}>×</a>
                    </div>
                    <div className={styles.modal_body}>    
                        <form onSubmit={onSubmit} className={styles.formAddNewContact}>
                            <label htmlFor="name"><input value={newContact.name} placeholder='Name' required type="text" name='name' id='name' onChange={handleChange} /></label>
                            <label htmlFor="phone"><input value={newContact.phone} placeholder='Phone' required type="text" name='phone' id='phone' onChange={handleChange} /></label>
                            <button className={styles.addNewContactBtn} type='submit'>Add new contact</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    );

};

export default AddNewContactBtn;