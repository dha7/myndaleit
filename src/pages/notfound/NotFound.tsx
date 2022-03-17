import React from "react";
import { Link } from 'react-router-dom';

/**
 * 
 * Not found.. þarf ekki á github pages, en virkar locally
 */
const NotFound = () => {
  return (<div>
    <h1>404 - Fannst ekki!</h1>
    <Link to="/myndaleit">Fara heim</Link>
  </div>
  );
}

export default NotFound;