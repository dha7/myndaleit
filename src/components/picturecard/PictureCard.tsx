import React, { ReactNode } from "react";
import { IItem } from "../../types/IState";
import { Link } from 'react-router-dom';

const PictureCard = ({ item }: { item: IItem }) => {
  const handleClick: React.MouseEventHandler<HTMLImageElement> = (e) => {
    
    
  }

  return (<>
    <a href = {item.image.contextLink} target = "_blank" rel="noreferrer"><img alt = {item.title} key={item.displayLink} src={item.link}></img></a>
    </>);
}

export default PictureCard;