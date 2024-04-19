// MainContext.js
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContext(props){
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div
            style ={{
                width : "100vw",
                height : "100vh",
                padding : "1.5rem",
                backgroundColor : theme === "light" ? "white" : "black",
                color : theme === "light" ? "black" : "white",
            }}
        >
            <p>hi. this is the webcite can change the theme</p>
            <button onClick={toggleTheme}>theme change</button>

        </div>
    );
}

export default MainContext;
