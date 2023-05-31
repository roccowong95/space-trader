import { useContext, PropsWithChildren } from "react";
import { UserInfoContext } from "../Contexts";
import { LoginPage } from "../pages/LoginPage";

export function LoginWrapper({ children }: PropsWithChildren) {
    const { userInfo } = useContext(UserInfoContext);

    console.log(`isLoggedIn: ${userInfo!.isLoggedIn}`);
    if (!userInfo!.isLoggedIn) { // ! assertion
        return <LoginPage></LoginPage>;
    }
    return <>{children}</>;
}