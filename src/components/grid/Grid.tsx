import React, { FunctionComponent, ReactNode } from "react";
import s from "./Grid.module.scss";
import cn from "classnames";

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = 'sm' | 'md' | 'lg';
const Grid: FunctionComponent<{
  children: ReactNode;
  cols?: Cols
  spacing?: Spacing
}> = ({cols, spacing, children}) => {

  const classNames = cn({
    [s[`grid_cols_${cols}`]]: cols,
    [s[`grid_spacing_${spacing}`]]: spacing
  })
  
  return <div className = {classNames}>
    {children}
  </div>;
}

export default Grid;