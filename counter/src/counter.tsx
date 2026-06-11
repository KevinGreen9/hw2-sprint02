import {useEffect, useState} from 'react';

export function MyCounter () {
    let [counter, setCounter] = useState<number>(() => {
        let getLocal = localStorage.getItem('counterKey')
        return getLocal ? JSON.parse(getLocal) : 0;
    });


    useEffect(() => {
        localStorage.setItem('counterKey', JSON.stringify(counter))
    }, [counter]);



    const incrementHandler = () => {
        setCounter(counter + 1);
    }

    const resetHandler = () => {
        localStorage.removeItem('counterKey')
        setCounter(0);
    }


    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={incrementHandler}>inc</button>
            <button onClick={resetHandler}>reset</button>

        </div>
    );
}
