import React, { FC, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/redux';
import { useAddNewContactMutation,useDeleteContactsMutation, useLazyFetchAllContactsQuery, useUpdateContactMutation } from '../../../../store/reducers/fetchApi';
import { IContact } from '../../../../types/IContact';
import AddNewContactBtn from '../../../UI/AddNewContactBtn/AddNewContactBtn';
import UpdateContactBtn from '../../../UI/UpdateContactBtn/UpdateContactBtn';
import styles from './PhonebookPage.module.css'
import DeleteContactBtn from '../../../UI/DeleteContactBtn/DeleteContactBtn';
import SearchInput from '../../../UI/SearchInput/SearchInput';



const PhonebookPage:FC = () => {

    const {isUser} = useAppSelector(state => state.userLoginSlice)
    const [fetchGetContacts, { data }] = useLazyFetchAllContactsQuery()
    const [fetchDeleteContact, { data: deletedContact }] = useDeleteContactsMutation()
    const [fetchAddNewContact,{ data: addedNewContact }] = useAddNewContactMutation()
    const [fetchUpdateContact,{ data: updatedContact }] = useUpdateContactMutation()

    useEffect(() => {
        fetchGetContacts('')
    }, [data, deletedContact,addedNewContact,updatedContact])


    const deleteContact = (id:number) => {
        fetchDeleteContact(id.toString())
    }

    const addNewContact = (newContact: IContact) => {
        fetchAddNewContact(newContact)
    }

    const updateContact = (contact: IContact) => {
        fetchUpdateContact(contact)
    }

    return (
        <div className={styles.PhonebookPage}>
            {
                isUser
                ?
                <div className={styles.PhonebookPage_container}>
                    <div className={styles.PhonebookPage_contacts_container}>
                        <h1 className={styles.PhonebookPage_contacts_title}>Contacts</h1>
                        <AddNewContactBtn addNewContact={addNewContact} />
                    </div>
                    <div className={styles.PhonebookPage_title_container}>
                        <div className={styles.container}><h2>Name</h2></div>
                        <div><h2>Phone</h2></div>
                    </div>
                    <div className={styles.PhonebookPage_title_container}>
                        <SearchInput fetchGetContacts={fetchGetContacts} />
                        <div>SearchPhone</div>
                    </div> 
                    <div className={styles.PhonebookPage_list_container}>
                        <ul className={styles.PhonebookPage_list}>
                            {
                                data?.map((contact) => {
                                    return (
                                        <li className={styles.PhonebookPage_list_values} key={contact.id} >
                                            <div className={styles.container}>{contact.name}</div>
                                            <div>{contact.phone}</div>
                                            <div className={styles.PhonebookPage_list_btns_wrap} >
                                                <UpdateContactBtn updateContact={updateContact} contact={contact} />
                                                <DeleteContactBtn deleteContact={deleteContact}  id={contact.id} />
                                            </div>
                                        </li>
                                    )
                                })  
                            }
                        </ul>
                    </div>
                </div>
                :
                <Navigate to="/" replace />                
            }
        </div>
    );

};

export default PhonebookPage;