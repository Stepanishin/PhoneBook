import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/redux';
import { useLazyAddNewContactQuery, useLazyDeleteContactQuery, useLazyGetContactsQuery } from '../../../../store/reducers/fetchApi';
import { IContact } from '../../../../types/IContact';
import AddNewContactBtn from '../../../UI/AddNewContactBtn/AddNewContactBtn';
import styles from './PhonebookPage.module.css'



const PhonebookPage:FC = () => {

    const {isUser} = useAppSelector(state => state.userLoginSlice)
    const [fetchContacts, { data }] = useLazyGetContactsQuery()
    const [deleteContact, { data: deletedContact }] = useLazyDeleteContactQuery()
    const [fetchRepos] = useLazyAddNewContactQuery()

    const [newContact, setNewContact] = useState<IContact>({
        name: '',
        phone: '',
    })

    useEffect(() => {
        fetchContacts('')
    }, [data, deletedContact])

    

    const deleteContacts = (e:React.MouseEvent<HTMLButtonElement>) => {
        const id = (e.target as HTMLInputElement).id
        deleteContact(id)
    }

    return (
        <div className={styles.PhonebookPage}>
            {
                isUser
                ?
                <div className={styles.PhonebookPage_container}>
                    <div className={styles.PhonebookPage_contacts_container}>
                        <h1 className={styles.PhonebookPage_contacts_title}>Contacts</h1>
                        {/* <button href="#close" onClick={addNewContact} className={styles.PhonebookPage_contacts_addNewContactBtn}>Add new contact</button> */}
                        <AddNewContactBtn />
                    </div>
                    <div className={styles.PhonebookPage_title_container}>
                        <div style={{width: '400px'}}>Name</div>
                        <div style={{width: '400px'}}>Phone</div>
                    </div>
                    <div className={styles.PhonebookPage_title_container}>
                        <div style={{width: '400px'}}>SearchName</div>
                        <div style={{width: '400px'}}>SearchPhone</div>
                    </div>
                    <div className={styles.PhonebookPage_list_container}>
                        <ul className={styles.PhonebookPage_list}>
                            {
                                data?.map((contact) => {
                                    return (
                                        <li className={styles.PhonebookPage_list_values} >
                                            <div style={{width: '400px'}}>{contact.name}</div>
                                            <div style={{width: '400px'}}>{contact.phone}</div>
                                            <div>
                                                <button>Edit</button>
                                                <button id={contact.id} onClick={deleteContacts} >Delete</button>
                                            </div>
                                        </li>
                                    )
                                })  
                            }
                        </ul>
                    </div>
                </div>
                :
                <></>
            }
        </div>
    );

};

export default PhonebookPage;