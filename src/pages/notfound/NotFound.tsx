import React from "react";
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (<div>
    <h1>404 - Fannst ekki!</h1>
    <Link to="/">Fara heim</Link>
  </div>
  );
}

export default NotFound;