import React from "react";

const styles = {
    wrapper : {
        padding : 16,
        display : "solid",
        flexDirection : "row",
        borderBottom : "1px solid grey",
    },
    greeting : {
        marginLeft : 20,
    },
};

function Toolbar(props) {
    const {isLoggedIn, onClickLogin, onClickLogout} = props;

    return (
        <div style={styles.wrapper}>
        {isLoggedIn ? (
            <button style={{width : 70}} onClick={onClickLogout}>Logout</button>
        ) : (
            <button style={{width : 70}} onClick={onClickLogin}>Login</button>
        )} 
        {isLoggedIn && <span style={styles.greeting}>welcome</span>}
        </div>
    );
}

export default Toolbar;