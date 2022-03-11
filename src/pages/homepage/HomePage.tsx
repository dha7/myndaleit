import React, { useState, useEffect, EventHandler, EffectCallback, ReactNode } from "react";
import validator from 'validator';
import  SearchBar  from '../../components/searchbar/SearchBar'
import PictureGrid from '../../components/picturegrid/PictureGrid'
import { IState } from '../../types/IState'
import Loading from "../../components/loading/Loading";
import s from './HomePage.module.scss'

export type TItems = IState["items"];



const HomePage = ( ) => {
  const [query, setQuery] = useState<string>("");
  const [items, setItems] = useState<TItems>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(validator.escape(e.currentTarget.value)); // jafnvel hreinsa e-ð meira
  }
  
  // beila á þetta og nota axios og custom usePictureSearch() hook
  const fetchData = () => {
    setLoading(true);
    setError("");
    const url = '../../dataAccepted.json';
    //let url = `https://content.googleapis.com/customsearch/v1?cx=001361074102112665899%3Ap7mybnrloug&q=${q}&searchType=image&key=${APIKEY}`;
    fetch(url)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log("data.items",data.items);
        setItems(data.items);
        // setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        // setLoading(false);
      })
  }

  useEffect(() => fetchData(), []);
  // gera main ad grid til ad allt se basically centered...
  return (<>
    <main className = {s.main}>
      <h1 className={`${s.title} ${s.h1}`}>Myndaleit</h1>
      <h4 className={`${s.title} ${s.h4}`}>Leitaðu að myndum frá MBL og Vísi.</h4>
      <PictureGrid items={items}>
        <SearchBar query = {query} handleChange = {handleChange}/>
      </PictureGrid>
      <>{loading && <Loading/>}</>
      <>{error&& <>{error}</>}</>
    </main>
    
  </>)
}

export default HomePage;