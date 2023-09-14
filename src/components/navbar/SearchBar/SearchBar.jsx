import React, { useState } from "react";
import { Input, AutoComplete } from "antd";
import cities from "./../../../worldcities.json"
import "./index.css"

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCities, setFilteredCities] = useState([]);
  
    const filterCities = (term) => {
      if (term.length >= 2) {
        const filtered = cities
          .filter(city => city.city.toLowerCase().includes(term.toLowerCase()))
          .map(city => city.city);
        setFilteredCities(filtered);
      } else {
        setFilteredCities([]);
      }
    };
  
    const handleSearchChange = (value) => {
      setSearchTerm(value);
      filterCities(value);
    };

    const handleSelect = (value) => {
        window.location.replace("/" + value);
    }
  
    const options = filteredCities.map(city => ({ value: city }));
  
    return (
      <AutoComplete
        options={options}
        style={{ width: '15rem' }}
        onSearch={handleSearchChange}
        onSelect={handleSelect}
        placeholder="Search city"
        className="search-mobile"
      >
        <Input.Search size="large" style={{marginTop: '-0.3rem'}} />
      </AutoComplete>
    );
  };
  
  export default SearchBar;
