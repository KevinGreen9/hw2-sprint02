    import { useEffect, useState} from 'react';
    import {Button} from "./Button";
    import { Settings} from "./Settings";

    export function MyCounter () {
        let [counter, setCounter] = useState<number>(() => {
            let getLocal = localStorage.getItem('counterKey')
            return getLocal ? JSON.parse(getLocal) : 0;
        });

        let [settings, setSettings] = useState<boolean>(false);

        let [maxValue, setMaxValue] = useState<number >(0);
        let[startValue, setStartValue] = useState<number>(0);

        useEffect(() => {
            const getMaxValue = localStorage.getItem('maxValueKey')
            if (getMaxValue !== null) {
                setMaxValue(JSON.parse(getMaxValue))
            }

            const getStartValue = localStorage.getItem('startValueKey')
            if (getStartValue !== null) {
                setStartValue(JSON.parse(getStartValue))
            }
        }, [])

        useEffect(() => {
            localStorage.setItem('counterKey', JSON.stringify(counter))
        }, [counter]);



        const incrementHandler = () => {
            if(counter < maxValue) {
                setCounter(counter + 1)
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

         const setHandler = () => {
            setSettings(true);
        }



        return (
            <div className="calc">
                {settings ? (
                    <Settings setStartValue={setStartValue}
                    startValue={startValue}
                    maxValue={maxValue}
                    setMaxValue={setMaxValue}
                    saveHandler={saveHandler}
                    />
                ) : (
                    <>
                        <h1 className={`window ${counter === maxValue ? 'window-limit' : ''}`}>{counter}</h1>
                        <div className={'btn-border'}>
                            <Button  name={'inc'} onClick={incrementHandler} disabled={counter >= maxValue}/>
                            <Button name={'reset'} onClick={resetHandler}/>
                            <Button name={'set'} onClick={setHandler} />
                        </div>
                    </>
                )}
            </div>
        )

    }
