import { useState, useEffect } from 'react';
import axios, { Canceler } from 'axios';
import { IItem, TItems } from '../types/IState';

const API_KEY = process.env.REACT_APP_API_KEY;
// let url = `https://content.googleapis.com/customsearch/v1?cx=001361074102112665899%3Ap7mybnrloug`;
let url: string = '../../myndaleit/dataAccepted.json';


// Handles the API request
const useImageSearch = (query: string, pageNumber: number) => {
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ error, setError ] = useState<boolean>(false);
  const [ errorMessage, setErrorMessage ] = useState<string>("");
  const [ items, setItems] = useState<TItems>([]);
  const [ hasMore, setHasMore] = useState<boolean>(false);
  

  // reset items if query changes
  useEffect(() => {
    setItems([])
  }, [query]);

  // Make api request with axios. 
  // Current request is cancelled in the event of another request
  useEffect(() => {
    setError(false);
    let cancel: Canceler = () => {}
    let startIndex: number = (pageNumber-1)*10 + 1;
    if (query) {
      setLoading(true);
      axios({
      method: 'GET',
      url: url,
      params: { 
        q: query,
        start: startIndex, 
        searchType: 'image',
        key: API_KEY 
      },
      cancelToken: new axios.CancelToken((c: Canceler) => {cancel = c})
      }).then(res => {
        setItems((prevItems: TItems): TItems => {
          return [...prevItems, ...res?.data?.items?.map((i:IItem) => i)];
        })
        setHasMore(res.data.items.length > 0);
        setLoading(false);
      }).catch(e => {
        if (axios.isCancel(e)) {
          return;
        }
        setLoading(false);
        setError(true);
        setErrorMessage(e.message);
      })
    } else {
      setLoading(false);
    }

    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, errorMessage, items, hasMore }
}

export default useImageSearch;