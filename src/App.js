import React, { useState, useEffect } from "react";
import "./App.css";
import Filters from "./components/Filters";
import Products from "./components/Products";
import axios from "axios";
const App = (initialData) => {
  const [items, setItems] = useState([]);
  const [yearSelected, setYearSelected] = useState([]);
  const [land_success, setLandSuccess] = useState([]);
  const [launch_success, setLaunch_success] = useState([]);

  const url = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch_success}&land_success=${land_success}&launch_year=${yearSelected}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
       // console.log(res.data);
        setItems(res.data);
      });
  }, [yearSelected, launch_success, land_success]);

  const setYear = (year) => {
    const years = [...yearSelected];

    if (years.includes(year)) {
      const index = years.indexOf(year);
      years.splice(index, 1);
    } else {
      years.push(year);
    }
    
  };

  const selectYear = (year) => {
    setYearSelected(year);
  };
  const selectLaunch = (launch) => {
    setLaunch_success(launch);
  };
  const selectLand = (land) => {
    setLandSuccess(land);
  };
  return (
    <div className="App">
      <Filters
        selectedYears={yearSelected}
        setYear={setYear}
        yearSelected={(e, year) => selectYear(year)}
        lunchSelected={(e, lunch) => selectLaunch(lunch)}
        landSelected={(e, land) => selectLand(land)}
      />

      <Products products={items} />
    </div>
  );
};

export default App;