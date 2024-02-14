import React, { useState } from "react";
import axios from "axios";

const SerachCountry = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [country, setCountry] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(searchQuery);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${searchQuery}`
      );
      setCountry(response.data[0]);
      console.log(response.data[0]);
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <div className="input-button-container"></div>
      <input
        type="text"
        placeholder="Enter country name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>search</button>

      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {country && !loading && (
        <div className="country-container">
          <p>
            <span>Capital</span>: {country.capital ? country.capital[0] : "N/A"}
          </p>
          <p>
            <span>Population</span>:{" "}
            {country.population ? country.population : "N/A"}
          </p>
          <p>
            <span>Flag</span>:
            {country.flags ? (
              <img
                src={country.flags.png}
                alt="Flag"
                style={{ maxWidth: "100px" }}
              />
            ) : (
              "N/A"
            )}
          </p>
          <p>
            <span>Currency</span>:{" "}
            {country.currencies
              ? Object.values(country.currencies)[0].name
              : "N/A"}
          </p>
        </div>
      )}
    </div>
  );
};

export default SerachCountry;
