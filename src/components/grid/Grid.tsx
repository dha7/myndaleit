import React, { FunctionComponent, ReactNode } from "react";
import s from "./Grid.module.scss";
import cn from "classnames";

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = 'sm' | 'md' | 'lg';
const Grid: FunctionComponent<{
  children: ReactNode
  xs?: Cols
  sm?: Cols
  md?: Cols
  lg?: Cols
  spacing?: Spacing
}> = ({xs, sm, md, lg, spacing, children}) => {

  const classNames = cn({
    [s[`grid_xs_${xs}`]]: xs,
    [s[`grid_xs_text_${xs}`]]: xs,
    [s[`grid_sm_${sm}`]]: sm,
    [s[`grid_sm_text_${sm}`]]: sm,
    [s[`grid_md_${md}`]]: md,
    [s[`grid_lg_${lg}`]]: lg,
    [s[`grid_spacing_${spacing}`]]: spacing
  })
  
  return <div className = {classNames}>
    {children}
  </div>;
}

export default Grid;