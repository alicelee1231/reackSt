import React from "react";

const students = [
    {
        id : 1,
        name : "sam",
    },
    {
        id : 2,
        name : "alice",
    },
    {
        id : 3,
        name : "babara",
    },
    {
        id : 4,
        name : "what"
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}> {student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;