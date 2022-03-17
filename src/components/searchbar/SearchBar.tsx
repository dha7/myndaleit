import React, { useEffect, useRef } from "react";
import s from './SearchBar.module.scss'

interface ISearchBarProps {
  handleSearch: React.ChangeEventHandler<HTMLInputElement>
  query: string
}

const SearchBar = ({handleSearch, query}: ISearchBarProps) => {
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(searchInput.current) searchInput.current.focus();
    }, [searchInput]);

  return (
    <>
      <input key = "search"
        className={s.searchBar}
        ref = {searchInput}
        type="text"
        value={query}
        placeholder="Sláðu inn leitarorð"
        onChange = {handleSearch}
        autoFocus
        />
    </>
  );
}

export default SearchBar;