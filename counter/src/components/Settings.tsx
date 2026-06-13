import {ChangeEvent} from "react";
import {Button} from "./Button";

type SettingsType = {
    maxValue: number ,
    setMaxValue: (value: number) => void,
    startValue: number
    setStartValue: (value: number) => void,
    saveHandler: () => void,
}

export const Settings = ({maxValue, setStartValue, startValue, setMaxValue, saveHandler}: SettingsType) => {

    return (
        <div>
            <span>
                <p>max value</p>
                <input className={`${maxValue === 0 ? 'input-limit' : ''}`}
                       min={0}
                       step={1}
                    type='number'
                    value={maxValue }
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setMaxValue(Number(e.currentTarget.value))}
                />
            </span>
            <span>
                <p>start value</p>
                <input
                    className={`${maxValue < startValue ? 'input-start' : ''}`}
                    min={0}
                    step={1}
                    type='number'
                    value={startValue}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setStartValue(Number(e.currentTarget.value))}/>
            </span>
            <Button style={{marginTop: 10}} name={'save'} onClick={saveHandler} disabled={startValue > maxValue}/>
        </div>

    )

}

