import styles from './Header.module.scss'

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <h1>Breweries</h1>
            <p>A breweries list by Open Brewery DB</p>
        </header>
    )
}