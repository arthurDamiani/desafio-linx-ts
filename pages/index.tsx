import {useState, useEffect, useContext, ChangeEventHandler} from 'react'
import {FilterContext} from './_app'
import api from './api'
import Header from '../components/Header'
import Filter from '../components/Filter'
import BreweryItem, {BreweryItemProps} from '../components/BreweryItem'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [breweries, setBreweries] = useState([])
  const {filter , setFilter}= useContext(FilterContext)
  const [page, setPage] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0)
    const getBreweries = async () => {
      const endpoint = filter !== '' ? `breweries?by_type=${filter}&page=${page}` : `breweries?page=${page}`
      await api.get(endpoint)
      .then(res => setBreweries(res.data))
      .catch(() => alert('Falha na requisição'))
    }
    getBreweries()
  }, [page, filter])

  return (
    <div className={styles.homeContainer}>
      <Header />
      <Filter value={filter} onChange={e => setFilter(e.target.value)} />
      <div className={styles.breweryGrid}>
        {breweries.length !== 0 ?
          breweries.map((brewery: BreweryItemProps) => {
            return (
              <BreweryItem 
                key={brewery.id}
                id={brewery.id}
                name={brewery.name}
                street={brewery.street}
                city={brewery.city}
                state={brewery.state}
                country={brewery.country}
                postal_code={brewery.postal_code}
                brewery_type={brewery.brewery_type}
              />
            )
          })
        :
          <h1>No breweries found!</h1>
        }
      </div>
      <div className={styles.paginationButtonsContainer}>
        <button 
          onClick={() => setPage(1)}
          className={page === 1 ? styles.buttonActive : undefined}
        >1</button>
        <button 
          onClick={() => setPage(2)}
          className={page === 2 ? styles.buttonActive : undefined}
        >2</button>
        <button 
          onClick={() => setPage(3)}
          className={page === 3 ? styles.buttonActive : undefined}
        >3</button>
      </div>
      <Footer />
    </div>
  )
}
