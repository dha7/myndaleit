import React, { useState, useEffect, EventHandler, ReactNode } from "react";
import { TItems } from '../../pages/homepage/HomePage'
import PictureCard from "../picturecard/PictureCard";


const PictureGrid = ({ items, children }: { items: TItems, children: ReactNode }) => {

  return (<>
  <div className="">
    {children}
  </div>
  <div className="cards">
    {items!.map((item, i) => (
      <PictureCard key={i} item = {item}/>
    ))
    }
  </div>
    </>);
}

export default PictureGrid;