import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { IContact } from '../../../types/IContact';
import styles from './SearchInput.module.css'

interface ISearchInputProps {
    // updateContact: (newContact: IContact) => void,
    // contact: IContact
}

const SearchInput: FC<ISearchInputProps> = () => {

    const [search, setSearch] = useState('') 

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.name
        setSearch(e.target.value)
    }


    return (
        <label htmlFor="name">
            <input value={search} placeholder='Search name' required type="text" name='name' id='name' onChange={handleChange} />
        </label>
        
    );

};

export default SearchInput;