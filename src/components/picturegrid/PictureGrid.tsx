import React, { useState, useEffect, EventHandler, ReactNode } from "react";
import { TItems } from '../../types/IState'
import PictureCard from "../picturecard/PictureCard";
import Grid from "../grid/Grid"
import s from './PictureGrid.module.scss'

interface IPicGridProps {
   items: TItems,
   lastPicEl:  (...args: any[]) => any
   children: ReactNode 
}
const PictureGrid = ({ items, lastPicEl, children }: IPicGridProps) => {

  return (<>
  <div>
    {children}
  </div>
  <div className={s.container}>
    {items?.map((item, i) => {
      if (items.length === i + 1) {
        return (
        <Grid key={i} xs={12} sm={6} md={4} lg={3} spacing='lg'>
          <PictureCard reference = {lastPicEl} item = {item}/>
        </Grid>);
      } else {
        return (
        <Grid key={i} xs={12} sm={6} md={4} lg={3} spacing='lg'>
          <PictureCard  key={i} item = {item}/>
        </Grid>
        );
      }
    })
    }
  </div>
    </>);
}

export default PictureGrid;