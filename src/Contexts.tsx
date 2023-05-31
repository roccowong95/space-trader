import React, { createContext } from "react";

export type UserInfoType = {
    isLoggedIn?: boolean, // ? optional
}

export type UserInfoContextType = {
    userInfo: UserInfoType,
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType>>, // https://stackoverflow.com/questions/72420279/usestate-with-usecontext-in-typescript
}

export const UserInfoContext = createContext<UserInfoContextType>({ userInfo: {}, setUserInfo: () => { } });