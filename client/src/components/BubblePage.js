import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "./utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [dependency, setDependency] = useState(false)

  useEffect(() => {
    axiosWithAuth()
    .get('colors')
    .then(res => {
      setColorList(res.data)
      setDependency(false)
    })
    .catch(err => {
      console.log(err.response)
    })
  }, [dependency])
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} setDependency={setDependency} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
