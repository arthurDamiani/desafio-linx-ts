import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import api from '../api'
import Header from '../../components/Header'
import BackButton from '../../components/BackButton'
import BreweryDetails from '../../components/BreweryDetails'
import {BreweryItemProps} from '../../components/BreweryItem'
import Footer from '../../components/Footer'
 
export default function BreweriesDetails() {
    const router = useRouter()
    const {id} = router.query
    const [breweriesDetails, setBreweriesDetails] = useState<BreweryItemProps>({})

    useEffect(() => {
        const getBrewery = async () => {
            await api.get(`breweries/${id}`)
            .then((res) => setBreweriesDetails(res.data))
            .catch(() => alert('Não foi possível pegar os detalhes da brewery!'))
        }
        getBrewery()
    }, [id])

    return (
        <>
            <Header />
            <BackButton onClick={() => router.back()}/>
            {breweriesDetails &&
                <BreweryDetails
                    key={breweriesDetails.id}
                    id={breweriesDetails.id}
                    name={breweriesDetails.name}
                    brewery_type={breweriesDetails.brewery_type}
                    street={breweriesDetails.street}
                    city={breweriesDetails.city}
                    state={breweriesDetails.state}
                    postal_code={breweriesDetails.postal_code}
                    country={breweriesDetails.country}
                    website_url={breweriesDetails.website_url}
                    phone={breweriesDetails.phone}
                    latitude={breweriesDetails.latitude}
                    longitude={breweriesDetails.longitude}
                />
            }
            <Footer />
        </>
    )
}

export async function getServerSideProps() {
    return {
        props: {},
    }
}