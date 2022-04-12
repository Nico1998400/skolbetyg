import { useState } from "react";
import SchoolCard from "../../Components/SchoolCard";
import preSchool from "./forskola.json"
// eslint-disable-next-line
import eleSchool from "./grundskola.geojson"
// eslint-disable-next-line
import uniSchool from "./gymnasieskola.geojson";

const GetSchoolData = () =>{ 
    const [filter,setFilter]=useState("")
    const filteredTitle = preSchool.features.filter(school => school.properties.namn.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    const filteredLocation = preSchool.features.filter(school => school.properties.omrade.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    
    const filteredPreSchool = filteredTitle.join(filteredLocation);

    return (
        <div className="App">
          <h1>Skolor</h1>
          <input 
          type="search" 
          value={filter} 
          onChange={e=>setFilter(e.target.value)}>
          </input>
            {preSchool && filteredTitle.map(school=>{
              return <SchoolCard key={school.properties.OBJECTID} school={school.properties}/>
          })}
        </div>
      );
}

export default GetSchoolData;