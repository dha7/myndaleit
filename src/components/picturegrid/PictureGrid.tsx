import { ReactNode } from "react";
import { TItems } from '../../types/IState'
import PictureCard from "../picturecard/PictureCard";
import GridItem from "../griditem/GridItem"
import s from './PictureGrid.module.scss'

interface IPicGridProps {
  items: TItems,
  lastPicEl: (...args: any[]) => any
  children: ReactNode
}

/**
 * 
 * Populates the grid of pictures
 */
const PictureGrid = ({ items, lastPicEl, children }: IPicGridProps) => {
  return (<>
    <div>
      {children}
    </div>
    <div className={s.container}>
      {items?.map((item, i) => {
        if (items.length === i + 1) {
          return (
            <GridItem key={i} xs={12} sm={6} md={4} lg={3} spacing='md'>
              <PictureCard reference={lastPicEl} item={item} />
            </GridItem>);
        } else {
          return (
            <GridItem key={i} xs={12} sm={6} md={4} lg={3} spacing='md'>
              <PictureCard key={i} item={item} />
            </GridItem>
          );
        }
      })
      }
    </div>
  </>);
}

export default PictureGrid;