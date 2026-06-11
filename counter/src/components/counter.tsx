    import {ChangeEvent, useEffect, useState} from 'react';
    import {Button} from "./Button";

    export function MyCounter () {
        let [counter, setCounter] = useState<number>(() => {
            let getLocal = localStorage.getItem('counterKey')
            return getLocal ? JSON.parse(getLocal) : 0;
        });

        let [settings, setSettings] = useState<boolean>(false);

        let [maxValue, setMaxValue] = useState<number>(0);
        let[startValue, setStartValue] = useState<number>(0);

         useEffect(()=> {
             let getMaxValue = localStorage.getItem('maxValueKey')
             setMaxValue(JSON.parse(getMaxValue))

             let getStartValue = localStorage.getItem('startValueKey')
             setStartValue(JSON.parse(getStartValue))
         }, [])

        useEffect(() => {
            localStorage.setItem('counterKey', JSON.stringify(counter))
        }, [counter]);



        const incrementHandler = () => {
            if(counter < maxValue) {
                setCounter(counter + 1)
            }
            else{
            }
        }

        const resetHandler = () => {
            localStorage.removeItem('counterKey')
            setCounter(0);
        }

        const saveHandler = () => {
            localStorage.setItem('maxValueKey', JSON.stringify(maxValue));
            localStorage.setItem('startValueKey', JSON.stringify(startValue));
            setSettings(!settings);
            if(maxValue >= startValue) {
                setCounter(startValue);
            }


        }

        const Settings = () => {

            return (
                <div>
            <span>
                <p>max value</p>
                <input
                type='number'
                value={maxValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setMaxValue(Number(e.currentTarget.value))}
                />
            </span>
                    <span>
                <p>start value</p>
                <input
                    type='number'
                    value={startValue}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setStartValue(Number(e.currentTarget.value))}/>
            </span>
                    <Button name={'save'} onClick={saveHandler} />
                </div>

            )

        }

        const setHandler = () => {
      setSettings(true);
        }


        return (
            <div className="calc">
                {settings ? (
                    <Settings />
                ) : (
                    <>
                        <h1 className="window">{counter}</h1>
                        <div className={'btn-border'}>
                            <Button name={'inc'} onClick={incrementHandler}/>
                            <Button name={'reset'} onClick={resetHandler}/>
                            <Button name={'set'} onClick={setHandler} />
                        </div>
                    </>
                )}
            </div>
        )

    }
