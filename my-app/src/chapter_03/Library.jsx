import React from "react";
import Book from "./Book";

function Library(props){
    return (
        <div>
            <Book name="the first time we met" numOfPage={300}></Book>
            <Book name="the second time we met" numOfPage={400}></Book>
            <Book name="the third time we met" numOfPage={500}></Book>
        </div>

    );
}

export default Library;