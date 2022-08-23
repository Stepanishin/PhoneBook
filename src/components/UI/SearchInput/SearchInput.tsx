import React, { FC, useEffect, useState } from 'react';
import { useDebounce } from '../../../hooks/debounce';
import { useAppDispatch } from '../../../hooks/redux';
import { IContact } from '../../../types/IContact';
import styles from './SearchInput.module.css'

interface ISearchInputProps {
    searchContact: (searchValue:string) => void,
    searchValue: string,
}

const SearchInput: FC<ISearchInputProps> = ({searchContact, searchValue}) => {

    const [search, setSearch] = useState('') 
    const debounced = useDebounce(search)

    useEffect(() => {
        if (search.length === 0) {
            searchContact('')
        } else {
            searchContact(`${searchValue}_like=` + search)
        }
    } , [debounced])

    return (
        <label htmlFor="name" className={styles.searchInput} >
            <input value={search} placeholder={`Search by ${searchValue}`} required type="text" name='name' id='name' onChange={e => setSearch(e.target.value)} />
        </label>
        
    );

};

export default SearchInput;