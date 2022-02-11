import React from 'react';
import s from './Counter.module.css'

type ButtonPropsType = {
    title: string
    onClickBtnHandler: () => void
    disabled: boolean
}
export const Button:React.FC<ButtonPropsType> = ({title, onClickBtnHandler, disabled}) => {
    return (
        <div>
            <button
                className={s.btn}
                onClick={()=>onClickBtnHandler()}
                disabled={disabled}
            >{title}</button>
        </div>
    );
};
