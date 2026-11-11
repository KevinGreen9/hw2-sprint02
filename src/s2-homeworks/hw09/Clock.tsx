import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date(Date.now()))

        }, 1000)
        setTimerId(id)
    }

    const stop = () => {
          clearInterval(timerId);
        setTimerId(undefined);
    }

    const onMouseEnter = () => {
        setShow(true)
    }

    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.toTimeString().split(' ')[0] || <br/>
    const stringDate = date.toLocaleDateString() || <br/>
    const stringDay = date.toLocaleDateString('en-US', { weekday: 'long' }) || <br/> // пишут студенты
    const stringMonth = date.toLocaleDateString('en-US', { month: 'long' }) || <br/> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={timerId !== undefined}
                    onClick={start}
                >
                    Start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!timerId}
                    onClick={stop}
                >
                    Stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
