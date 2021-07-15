import { ChangeEventHandler } from 'react'
import { SelectHTMLAttributes } from 'react'
import { DetailedHTMLProps } from 'react'
import styles from './Filter.module.scss'

export default function Filter({value, onChange}: DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>) {
    return (
        <div className={styles.filterContainer}>
            <p>Filter:</p>
            <select className={styles.select} value={value} onChange={onChange}>
                <option value=''>default</option>
                <option value='micro'>micro</option>
                <option value='nano'>nano</option>
                <option value='regional'>regional</option>
                <option value='brewpub'>brewpub</option>
                <option value='large'>large</option>
                <option value='planning'>planning</option>
                <option value='bar'>bar</option>
                <option value='contract'>contract</option>
                <option value='proprietor'>proprietor</option>
                <option value='closed'>closed</option>
            </select>
        </div>
    )
}