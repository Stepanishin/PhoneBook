import {createApi, fakeBaseQuery, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IContact } from '../../types/IContact'
import { IUser } from '../../types/IUser'

export const fetchApi = createApi({
    reducerPath: 'fetchApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    refetchOnFocus: true,
    endpoints: (builder) => ({
      fetchAllUsers: builder.query <Array<IUser>, string>({
        query: () => ({
            url: '/users',
        })
      }),
      fetchAllContacts: builder.query<Array<IContact>, string>({
        query: (search) => ({
            url: `/contacts?_sort=name + ${search}`,
        })
      }),
      addNewContact: builder.mutation<IContact, IContact>({
        query: (newContact:IContact) => ({
            url: '/contacts/',
            method: 'POST',
            body: newContact
        })
      }),
      updateContact: builder.mutation<IContact, IContact>({
        query: (newContact:IContact) => ({
            url: `/contacts/${newContact.id}`,
            method: 'PUT',
            body: newContact
        })
      }),
      deleteContacts: builder.mutation<IContact, string>({
        query: (id) => ({
            url: `/contacts/${id}`,
            method: 'DELETE',
        })
      }),
    })
  })

  export const {  useFetchAllUsersQuery, 
                  useAddNewContactMutation, 
                  useDeleteContactsMutation, 
                  useLazyFetchAllContactsQuery, 
                  useUpdateContactMutation } = fetchApi
