import React, { useState } from "react";
import uuid from "uuid";
import axios from "axios";

const useAxios = baseURL => {
  const [data, setData] = useState([]);
  const addCard = async dynamicSegment => {
    console.log("Dynamic Segment:", dynamicSegment);
    const url = dynamicSegment ? `${baseURL}${dynamicSegment}/` : baseURL;

    const response = await axios.get(url);
    setData(allData => [...allData, { ...response.data, id: uuid() }]);
  };

  return [data, addCard];
};

export default useAxios;
