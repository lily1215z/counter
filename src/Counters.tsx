import React, {useState} from 'react';
import {Button} from "./Button";
import s from './Counter.module.css'

export const Counters = () => {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(1)

    const [count, setCount] = useState(startValue)

    const inc = () => {
        if (count === maxValue) return count
        setCount(count + 1)
    }

    const reset = () => {
        setCount(startValue)
    }

    const set = () => {
        setCount(startValue)
    }

    let maxEnded = count === maxValue ? s.active : ''
    let error = (startValue < 0 || startValue >= maxValue) ? s.error_active : ''

    return (
        <div className={s.inner}>
            <div className={s.box}>
                <div className={s.box_input}>
                    <span className={s.text}>max</span>
                    <input
                        value={maxValue}
                        className={`${s.input_value} ${error}`}
                        type={'number'}
                        onChange={(e) => setMaxValue(+e.currentTarget.value)}
                    />
                </div>
                <div className={s.box_input}>
                    <span className={s.text}>start</span>
                    <input
                        value={startValue}
                        className={`${s.input_value} ${error}`}
                        type={'number'}
                        onChange={(e) => setStartValue(+e.currentTarget.value)}
                    />
                </div>
                <Button
                    title={'set'}
                    onClickBtnHandler={() => set()}
                    disabled={startValue < 0 || startValue >= maxValue}/>
            </div>
            <div className={s.box}>
                <div className={`${error ? s.active : ''} ${maxEnded} ${s.num}`}>{error ? 'incorrect value' : count}</div>
                <div className={s.box_btn}>
                    <Button
                        title={'inc'}
                        onClickBtnHandler={() => inc()}
                        disabled={count === maxValue}/>
                    <Button
                        title={'reset'}
                        onClickBtnHandler={() => reset()}
                        disabled={count === startValue}/>
                </div>
            </div>
        </div>
    );
};
