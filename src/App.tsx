import React from 'react';
import { Routes, Route } from 'react-router';
import HomePage from './pages/homepage/HomePage';
import NotFound from './pages/notfound/NotFound';
import { useEffect } from 'react';

// loop through fav-icons
const juggleFavs = () => {
  // stela favicons frá Júní >:)
  let i = 0;
  setInterval(() => {
    if (document) {
      try {
        (document.getElementById("icon") as HTMLLinkElement).href = `./favicon-${((i++%4)+1)}.png`;
      } catch(e) {

      }
    }
    if (i > 100000) {
      i = 0;
    }
  }, 1000);
}

const App = () => {
  useEffect(()  => { juggleFavs() }, []);
  
  return (
    <Routes>
      <Route path="/myndaleit" element={<HomePage dummy={false}/>}/>
      <Route path="/myndaleit/dummy" element={<HomePage dummy={true}/>}/>
      <Route path="*"element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
