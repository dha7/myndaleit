import React, { useState, useRef, useCallback, ReactNode } from "react";
import validator from 'validator';
import SearchBar  from '../../components/searchbar/SearchBar'
import PictureGrid from '../../components/picturegrid/PictureGrid'
import Grid from "../../components/grid/Grid";
import Loading from "../../components/loading/Loading";
import useImageSearch from "../../utils/useImageSearch"
import s from './HomePage.module.scss'


const HomePage = () => {
  const [query, setQuery] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  
  const handleSearch : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(validator.escape(e.currentTarget.value)); // jafnvel hreinsa e-ð meira
    setPageNumber(1);
  }

  const { loading, 
          error, 
          errorMessage,
          items, 
          hasMore,
        } = useImageSearch(query, pageNumber);

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
    <div className = {s.legend}>
    </div>
    <main className = {s.main}>
      <Grid xs={4} sm={8}>
        <h1 className={`${s.title}`}>Myndaleit</h1>
      </Grid>
      <PictureGrid items={items} lastPicEl = {lastPictureElementRef}>
        <Grid xs={12} spacing='lg'>
          <SearchBar query = {query} handleSearch = {handleSearch}/>
          <>{error&& <>{errorMessage}</>}</>
        </Grid>
        <>{loading && <Loading/>}</>
      </PictureGrid>
    </main>
    
  </>)
}

export default HomePage;