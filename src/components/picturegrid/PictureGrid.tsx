import React, { useState, useEffect, EventHandler, ReactNode } from "react";
import { TItems } from '../../types/IState'
import PictureCard from "../picturecard/PictureCard";

interface IPicGridProps {
   items: TItems,
   lastPicEl:  (...args: any[]) => any
   children: ReactNode 
}
const PictureGrid = ({ items, lastPicEl, children }: IPicGridProps) => {

  return (<>
  <div className="">
    {children}
  </div>
  <div className="cards">
    {items!.map((item, i) => {
      if (items.length === i + 1) {
        return <PictureCard reference = {lastPicEl} key={i} item = {item}/>
      } else {
        return <PictureCard key={i} item = {item}/>
      }
    })
    }
  </div>
    </>);
}

export default PictureGrid;