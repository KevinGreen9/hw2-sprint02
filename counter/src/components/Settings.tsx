import {ChangeEvent, useState} from "react";
import {Button} from "./Button";

type SettingsType = {
    maxValue: number,
    startValue: number,
    onSave: (max: number, start: number) => void,
}
//
export const Settings = ({maxValue, startValue, onSave}: SettingsType) => {
    const [max, setMax] = useState(String(maxValue))
    const [start, setStart] = useState(String(startValue))

    const maxNum = Number(max)
    const startNum = Number(start)

    const isInvalid =
        max === '' || start === '' ||
        Math.floor(maxNum) !== maxNum || Math.floor(startNum) !== startNum ||
        maxNum < 0 || startNum < 0 ||
        startNum > maxNum




    return (
        <div>
            <span>
                <p>max value</p>
                <input className={`${maxNum === 0 ? 'input-limit' : ''}`}
                       min={0}
                       step={1}
                    type='number'
                    value={max }
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setMax(e.currentTarget.value)}
                />
            </span>
            <span>
                <p>start value</p>
                <input
                    className={`${maxNum < startNum ? 'input-start' : ''}`}
                    min={0}
                    step={1}
                    type='number'
                    value={start}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setStart(e.currentTarget.value)}
                />
            </span>
            <Button style={{marginTop: 10}} name={'save'} onClick={()=> onSave(maxNum, startNum)} disabled={isInvalid}/>
        </div>

    )

}

