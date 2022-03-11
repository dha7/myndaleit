import React from "react";
import { useParams } from "react-router";

const PicturePage = () => {
  const { ctxt } = useParams();
  console.log(ctxt);
  return (<>
    {ctxt&& ctxt}
  </>);
}

export default PicturePage;