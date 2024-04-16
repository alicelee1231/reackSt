import React, {useState} from "react";

const styles = {
    a : {
    marginLeft : 10,
    }
}

function SignUp(props) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("female");

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    }

    const handleSubmit = (event) => {
        alert(`name : ${name}, gender : ${gender}`);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label >
                name :
                <input  style={{marginLeft : 10}} type="text" value={name} onChange={handleChangeName} />
            </label>
            <label style={styles.a}> 
                gender : 
                <select  style={styles.a} type="text" value = {gender} onChange={handleChangeGender}>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            </label>
            <button style={styles.a} type="submit">submit</button>
        </form>
    )
}

export default SignUp;