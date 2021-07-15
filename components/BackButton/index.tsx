import { ButtonHTMLAttributes } from 'react'
import { DetailedHTMLProps } from 'react'
import {IoChevronBack} from 'react-icons/io5'
import styles from './BackButton.module.scss'

export default function BackButton({...props}: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
    return (
        <button className={styles.backButtonContainer} onClick={props.onClick}>
            <IoChevronBack />
            <p>Back</p>
        </button>
    )
}