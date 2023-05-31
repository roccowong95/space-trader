import React, { useState } from "react";
import { UserInfoType, UserInfoContext } from "./Contexts";

export function ContextContainer({ children }: React.PropsWithChildren) {
    const [userInfo, setUserInfo] = useState<UserInfoType>({});

    return (
        <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserInfoContext.Provider>)
}