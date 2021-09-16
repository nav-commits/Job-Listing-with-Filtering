import "../App.css";
import React, { useState, useEffect } from "react";
import data from ".././data.json";

// make fetch call here

const Data = () => {
  // const [data, setData] = useState([]);
  // const url = "job-filter-app/data.json"
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error)=>{
  //       console.log('error')
  //     })
  // },[]);

  return (
    <div className="App">
      <h1>Data</h1>
      {data.map((allData) => {
        return <h1>{allData.company}</h1>;
      })}
    </div>
  );
};

export default Data;
