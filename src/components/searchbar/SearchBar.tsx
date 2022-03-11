import React, { useState, useEffect, useRef } from "react";

interface ISearchBarProps {
  handleChange: React.ChangeEventHandler<HTMLInputElement>
  query: string
}

const SearchBar = ({handleChange, query}: ISearchBarProps) => {
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(searchInput.current) searchInput.current.focus();
    }, [searchInput]);

  return (
    <>
    <input key = "search"
        ref = {searchInput}
        type="text"
        value={query}
        placeholder="Sláðu inn leitarorð"
        onChange = {handleChange}
        autoFocus
        /></>
  );
}

export default SearchBar;