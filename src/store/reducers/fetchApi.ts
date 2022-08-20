import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import { IContact } from '../../types/IContact'
import { IUser } from '../../types/IUser'

export const fetchApi = createApi({
    reducerPath: 'fetchApi',
    baseQuery: fakeBaseQuery(),
    refetchOnFocus: true,
    endpoints: (builder) => ({
      getUsers: builder.query({
        async queryFn() {
        let result:Array<IUser> | undefined
          try {
            const options = {
                headers: {
                    'Content-type': 'application/json',
                    }
            }
            
            await fetch('http://localhost:3001/users/', options)
            .then((response) => {
                const result = response.json();
                return result
            })
            .then((data) => {
                result = data
            })
            
          } catch {
            console.log("No data available");
          }
          return {data: result}
        }
      }),
      getContacts: builder.query({
        async queryFn() {
        let result:Array<IContact> | undefined
          try {
            const options = {
                headers: {
                    'Content-type': 'application/json',
                    }
            }
            
            await fetch('http://localhost:3001/contacts/', options)
            .then((response) => {
                const result = response.json();
                return result
            })
            .then((data) => {
                result = data
            })
            
          } catch {
            console.log("No data available");
          }
          return {data: result}
        }
      }),
      addNewContact: builder.query({
        async queryFn(newContact:IContact) {
        let result:Array<IContact> | undefined
          try {
            const options = {
              method: 'POST',
              body: JSON.stringify(newContact),
              headers: {
                  'Content-type': 'application/json;charset=utf-8'
              }
            }  
            
            await fetch('http://localhost:3001/contacts/', options)
            .then((response) => {
                const result = response.json();
                return result
            })
            .then((data) => {
                result = data
            })
            
          } catch {
            console.log("No data available");
          }
          return {data: result}
        }
      }),
      deleteContact: builder.query({
        async queryFn(id) {
        let result:Array<IContact> | undefined
          try {
            const options = {
              method: 'DELETE',
              headers: {
                  'Content-type': 'application/json;charset=utf-8',
              }
            }  
            await fetch(`http://localhost:3001/contacts/${id}`, options)
            .then((response) => {
                const result = response.json();
                return result
            })
            .then((data) => {
                result = data
            })
            
          } catch {
            console.log("No data available");
          }
          return {data: result}
        }
      }),
    })
  })

  export const { useGetUsersQuery, useLazyAddNewContactQuery, useLazyGetContactsQuery, useLazyDeleteContactQuery } = fetchApi