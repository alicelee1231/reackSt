import React from "react";
import Comment from "./Comment";


const comments = [
    {
        name : "cuty",
        comment : "the most precious creature in this world"
    },
    {
        name: "that is ",
        comment: "who are you"
    },
    {
        name : "alice lee",
        comment: "this is me. so what?"
    }
]

function CommentList(props){

    return(
        <div>
            {comments.map((comments) => {
                return (
                    <Comment name={comments.name} comment ={comments.comment}/>
                )
            })}
        </div>
    )
}

export default CommentList;