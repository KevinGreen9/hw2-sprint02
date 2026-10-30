import {useState} from 'react';
import {Button} from "../Button";
import {Settings} from "../Settings";
import {useAppDispatch} from "./hooks/useDispatch";
import {useAppSelector} from "./hooks/useSelector";


export function MyCounterWithRedux () {
    const counter = useAppSelector(state=> state.counter.value);
    const [settings, setSettings] = useState<boolean>(false);
    const maxValue = useAppSelector(state=> state.counter.maxValue);
    const startValue = useAppSelector(state=> state.counter.startValue);

    const dispatch = useAppDispatch()

    const incrementHandler = () => {
        dispatch({type: 'increment'});
    }

    const resetHandler = () => {
        dispatch({type: 'reset'});
    }

    const saveHandler = (max: number, start: number) => {
        dispatch({type: 'apply_settings', payload: {max, start}})
        setSettings(false)
    }

    const setHandler = () => {
        setSettings(true);
    }
    const isApplied = useAppSelector(state => state.counter.isApplied)

    return (
        <div className="calc">
            {settings ? (
                <Settings
                    maxValue={maxValue}
                    startValue={startValue}
                    onSave={saveHandler}
                />
            ) : (
                <>
                    <h1 className={`window ${counter === maxValue ? 'window-limit' : ''}`}>{counter}</h1>
                    <div className={'btn-border'}>
                        <Button name={'inc'} onClick={incrementHandler} disabled={!isApplied || counter >= maxValue}/>
                        <Button name={'reset'} onClick={resetHandler}/>
                        <Button name={'set'} onClick={setHandler} />
                    </div>
                </>
            )}
        </div>
    )

}
