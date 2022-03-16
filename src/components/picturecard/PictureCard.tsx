import React, { FunctionComponent, ReactNode } from 'react'
import { IItem } from "../../types/IState";
import s from './PictureCard.module.scss'

interface IPictureCardProps {
  item: IItem,
  reference?: any
}
const PictureCard: FunctionComponent<IPictureCardProps> = ({ item, reference }: IPictureCardProps) => {
  
  if (reference) {
    return (<>
      <div className={s.card}>
        <a ref = {reference} href = {item.image.contextLink} target = "_blank" rel="noreferrer">
          <img alt = {item.title} key={item.displayLink} src={item.link}></img>
        </a>
      </div>
    </>);
  } else {
    return (<>
      <div className={s.card}>
        <a href = {item.image.contextLink} target = "_blank" rel="noreferrer">
          <img alt = {item.title} key={item.displayLink} src={item.link}></img>
        </a>
      </div>
    </>);
  }
  
}

export default PictureCard;