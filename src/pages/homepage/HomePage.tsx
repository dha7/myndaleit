import React, { useState, useRef, useCallback } from "react";
import validator from 'validator';
import SearchBar from '../../components/searchbar/SearchBar'
import PictureGrid from '../../components/picturegrid/PictureGrid'
import GridItem from "../../components/griditem/GridItem";
import Loading from "../../components/loading/Loading";
import useImageSearch from "../../hooks/useImageSearch"
import s from './HomePage.module.scss'
import { NavLink } from "react-router-dom";

/**
 * 
 * Component is responsible for populating the home page
 */
const HomePage = ({ dummy }: { dummy: boolean }) => {
  const [query, setQuery] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(validator.escape(e.currentTarget.value)); // jafnvel hreinsa e-ð meira
    setPageNumber(1);
  }

  const { loading,
    error,
    errorMessage,
    items,
    hasMore,
  } = useImageSearch(query, pageNumber, dummy);

  const observer = useRef<any>();
  const lastPictureElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    });
    if (node) observer.current.observe(node)
  }, [loading, hasMore]);


  return (<>
    <div className={s.legend}></div>
    <main className={s.main}>
      <GridItem xs={4} spacing="md">
        <h1 className={`${s.title}`}>Myndaleit</h1>
      </GridItem>
      <PictureGrid items={items} lastPicEl={lastPictureElementRef}>
        <GridItem xs={12} spacing='md'>
          <SearchBar query={query} handleSearch={handleSearch} />
          <>{error &&
            <>
              <div className={s.error}>{errorMessage}</div>
              <NavLink onClick={() => { setQuery("") }} className={s.error} to="/myndaleit/dummy">Click here to cut out the middle man</NavLink>
            </>}
          </>

        </GridItem>
        <>{loading && <Loading />}</>
      </PictureGrid>
    </main>

  </>)
}

export default HomePage;