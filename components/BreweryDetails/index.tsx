import Link from 'next/link'
import styles from './BreweryDetails.module.scss'
import {BreweryItemProps} from '../BreweryItem/index'

export default function BreweryDetails({name, brewery_type, street, city, state, postal_code, country, website_url, phone, latitude, longitude}: BreweryItemProps) {
    const handleShowInfo = (info?: string) => info ? info : 'Not provided'

    return (
        <div className={styles.breweryDetailsContainer}>
            <h1>{name}</h1>
            <p>Type: {brewery_type}</p>
            <p>Street: {handleShowInfo(street)}</p>
            <p>City: {handleShowInfo(city)}</p>
            <p>State: {handleShowInfo(state)}</p>
            <p>Postal code: {handleShowInfo(postal_code)}</p>
            <p>Country: {handleShowInfo(country)}</p>
            <p>Website: {website_url ? <Link href={website_url}>{website_url}</Link> : 'Not provided'}</p>
            <p>Phone: {handleShowInfo(phone)}</p>
            <p>Open in maps:
                {latitude && longitude ?
                    <a href={`https://www.google.com/maps/?q=${latitude},${longitude}`}>{`${latitude}, ${longitude}`}</a>
                :
                    'Not provided'
                }
            </p>
        </div>
    )
}