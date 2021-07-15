import Link from 'next/link'
import styles from './BreweryItem.module.scss'

export interface BreweryItemProps {
    id?: number
    name?: string
    brewery_type?: string
    street?: string
    city?: string
    state?: string
    postal_code?: string
    country?: string
    longitude?: string
    latitude?: string
    phone?: string
    website_url?: string
}

export default function BreweryItem({id, name, street, city, state, country, postal_code, brewery_type}: BreweryItemProps) {
    const handleTypeColor = () => {
        switch (brewery_type) {
            case 'micro':
                return 'mediumSpringGreen'
            case 'nano':
                return 'green'
            case 'regional':
                return 'red'
            case 'brewpub':
                return 'purple'
            case 'large':
                return 'black'
            case 'planning':
                return 'orange'
            case 'bar':
                return 'pink'
            case 'contract':
                return 'blue'
            case 'proprietor':
                return 'violet'
            default:
                return 'gray';
        }
    }

    return (
        <Link href={`breweryDetails/${id}`} passHref>
            <div className={styles.breweryItemContainer}>
                <h2>{name}</h2>
                <div>
                    <p>{street}</p>
                    <p>{city} {state} - {postal_code}</p>
                    <p>{country}</p>
                </div>
                <div className={styles.breweryType}>
                    <p style={{backgroundColor: handleTypeColor()}}>{brewery_type}</p>
                </div>
            </div>
        </Link>
    )
}