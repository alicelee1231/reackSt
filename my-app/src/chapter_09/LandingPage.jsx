import React from "react";
import Toolbar from "./Toolbar";
import { useState } from "react";

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin =() => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar
                isLoggedIn = {isLoggedIn}
                onClickLogin = {onClickLogin}
                onClickLogout = {onClickLogout}
            />
             <div style = {{padding: 16}}> with alice, do it again </div>
        </div>
    )
}

export default LandingPage;