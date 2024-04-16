import React, {useState, useEffect} from 'react';
import useCounter from './useCounter';

const MAX_CAPACITY = 10;

function Accommodate(props){
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("=======================");
        console.log("useEffect() is called");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value : ${count}`);
    }, [count]);

    useEffect(() => {
        if(count <= 0){
            console.log(`it is not possible : ${count}`);
        };
    },[count]);

    return (
        <div style={{padding: 16}}>
            <p>{`총 ${count} 명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled = {isFull}>
                enter
            </button>
            {/* arrow function 쓰면 this,class 를 쓰는게 더 나음 */}
            {/* 그 이유는 arrow function쓰면 랜더링이 또 일어나서 성능적으로 좋지 않음 */}
            {/* arrow function is not good for using because it can be inpact performace.
            like when it can re-render once again.
              */}
            
            {/* <button onClick={() => {if(count > 0) decreaseCount()}}> out </button> */}
            
            {/* So I revised the code like below */}
            {count > 0 &&
                <button onClick={decreaseCount}> over </button>
            }
            {isFull && <p style={{color : "red"}}>already fulled</p>}

        </div>
    );
}

export default Accommodate;