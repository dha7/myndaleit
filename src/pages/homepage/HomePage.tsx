import React, { useState, useRef, useCallback, ReactNode } from "react";
import validator from 'validator';
import  SearchBar  from '../../components/searchbar/SearchBar'
import PictureGrid from '../../components/picturegrid/PictureGrid'
import Loading from "../../components/loading/Loading";
import useImageSearch from "../../utils/useImageSearch"
import s from './HomePage.module.scss'


const HomePage = () => {
  const [query, setQuery] = useState<string>("forritun");
  const [pageNumber, setPageNumber] = useState<number>(1);
  
  const handleSearch : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(validator.escape(e.currentTarget.value)); // jafnvel hreinsa e-ð meira
    setPageNumber(1);
  }

  const { loading, 
          error, 
          items, 
          hasMore
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


  // gera main ad grid til ad allt se basically centered...
  return (<>
    <main className = {s.main}>
      <h1 className={`${s.title} ${s.h1}`}>Myndaleit</h1>
      <PictureGrid items={items} lastPicEl = {lastPictureElementRef}>
        <SearchBar query = {query} handleSearch = {handleSearch}/>
      </PictureGrid>
      <>{loading && <Loading/>}</>
      <>{error&& <>{error}</>}</>
    </main>
    
  </>)
}

export default HomePage;