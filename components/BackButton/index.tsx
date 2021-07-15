import {IoChevronBack} from 'react-icons/io5'
import styles from './BackButton.module.scss'

interface BackButtonProps {
    onClick: () => any
}

export default function BackButton({onClick}: BackButtonProps) {
    return (
        <div className={styles.backButtonContainer} onClick={onClick}>
            <IoChevronBack />
            <p>Back</p>
        </div>
    )
}