import React, { useEffect, useState } from "react";
import Suggestion from "./Suggestion";

const Finder = () => {
  const [loading, setLoading] = useState(false);
  const [users, SetUser] = useState([]);
  const [error, setError] = useState(null);
  const [serchPera, setSearchPera] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filtered, setFiltered] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchPera(query);
    if (query.length > 0) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFiltered(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }
  function handleClick(event) {
    setShowDropdown(false);
    setSearchPera(event.target.innerText);
    setFiltered([]);
  }
  async function fetchListofUser() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        SetUser(data.users.map((user) => user.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListofUser();
  }, []);

  console.log(users, filtered);
  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading Data ! Please wait</h1>
      ) : (
        <input
          value={serchPera}
          name="search-users"
          placeholder="Search Users here..."
          onChange={handleChange}
        />
      )}

      {showDropdown && <Suggestion handleClick={handleClick} data={filtered} />}
    </div>
  );
};

export default Finder;
