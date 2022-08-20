import React from "react";
import AuthPage from "../components/Main/pages/AuthPage/AuthPage";
import PhonebookPage from "../components/Main/pages/PhonebookPage/PhonebookPage";
import { IRoute } from "../types/IRoute";

export const MainRoutes: IRoute[] = [
    {path: "*", exact: true, component: AuthPage},
    {path: "/", exact: true, component: AuthPage},
    {path: "/Phonebook", exact: true, component: PhonebookPage},
]