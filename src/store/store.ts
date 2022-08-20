import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { fetchApi } from "./reducers/fetchApi";
import userLoginSlice from './reducers/getUserLogin'





const rootReducer = combineReducers({
    userLoginSlice,
    [fetchApi.reducerPath]: fetchApi.reducer,
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']