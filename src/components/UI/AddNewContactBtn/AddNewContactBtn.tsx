import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { useLazyAddNewContactQuery, useLazyGetContactsQuery } from '../../../store/reducers/fetchApi';
import { IContact } from '../../../types/IContact';
import styles from './AddNewContactBtn.module.css'



const AddNewContactBtn = () => {

    // const [fetchRepos] = useLazyAddNewContactQuery()
    
    

    const handleChange = (e:any) => {
        const fieldName = e.target.name
        // setNewContact({...newContact, [fieldName]: e.target.value})
    }

    // useEffect(() => {
    //     fetchContacts(data)
    // }, [data])


    const addNewContact = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // fetchRepos(newContact)
    }


    return (
        <div>
            <a href="#openModalAddNewContact">Add new contact</a>

            <div id="openModalAddNewContact" className={styles.modal}>
                <div className={styles.modal_dialog}>
                    <div className={styles.modal_content}>
                    <div className={styles.modal_header}>
                        <h3 className={styles.modal_title}>Add new contact</h3>
                        <a href="#close" title="Close" className={styles.close}>×</a>
                    </div>
                    <div className={styles.modal_body}>    
                        <form onSubmit={addNewContact} className={styles.formAddNewContact}>
                            <label htmlFor="name"><input placeholder='Name' required type="text" name='name' id='name' onChange={handleChange} /></label>
                            <label htmlFor="phone"><input placeholder='Phone' required type="text" name='phone' id='phone' onChange={handleChange} /></label>
                            <button className={styles.addNewContactBtn} type='submit' >Add new contact</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    );

};

export default AddNewContactBtn;