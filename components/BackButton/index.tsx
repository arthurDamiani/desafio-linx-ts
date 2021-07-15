import { ButtonHTMLAttributes } from 'react'
import { DetailedHTMLProps } from 'react'
import {IoChevronBack} from 'react-icons/io5'
import styles from './BackButton.module.scss'

export default function BackButton({...props}: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
    return (
        <button className={styles.backButtonContainer} {...props}>
            <IoChevronBack />
            <p>Back</p>
        </button>
    )
}