// src/components/CollegeTable.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CollegeTable.css";

const CollegeTable = () => {
  const [colleges, setColleges] = useState([]);
  const [displayedColleges, setDisplayedColleges] = useState([]);
  const [sortConfig, setSortConfig] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const collegesPerPage = 10;

  useEffect(() => {
    // Fetch the data from the server
    axios
      .get("http://localhost:5000/api/colleges")
      .then((response) => {
        setColleges(response.data);
        setDisplayedColleges(response.data.slice(0, collegesPerPage));
      })
      .catch((error) => {
        console.error("There was an error fetching the colleges!", error);
      });
  }, []);

  // Handle infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 5
      ) {
        loadMoreColleges();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [displayedColleges]);

  const loadMoreColleges = () => {
    const nextPage = page + 1;
    const nextColleges = colleges.slice(0, nextPage * collegesPerPage);
    setDisplayedColleges(nextColleges);
    setPage(nextPage);
  };

  // Handle sorting
  const sortBy = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    const sortedColleges = [...displayedColleges].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    setDisplayedColleges(sortedColleges);
    setSortConfig({ key, direction });
  };

  // Handle search
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const filteredColleges = colleges.filter((college) =>
      college.name.toLowerCase().includes(term.toLowerCase())
    );
    setDisplayedColleges(filteredColleges.slice(0, collegesPerPage));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by college name..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <table>
        <thead id="hh">
          <tr>
            <th onClick={() => sortBy("rank")}>CD Rank</th>
            <th onClick={() => sortBy("name")}>Colleges</th>
            <th onClick={() => sortBy("fees")}>Course Fees</th>
            <th onClick={() => sortBy("userRating")}>User Reviews</th>
            <th onClick={() => sortBy("rating")}>Ranking</th>
          </tr>
        </thead>
        <tbody>
          {displayedColleges.map((college, index) => (
            <tr
              key={index}
              className={college.featured ? "featured-background" : ""}
            >
              <td>{college.rank}</td>
              <td>
                {college.name}{" "}
                {college.featured && <span className="featured">Featured</span>}
                <br />
                <div className="applyNow">
                  <p className="apply">{"Apply Now"} </p>
                  <p className="download">{"Download Brochure"}</p>
                  <p className="compare">{"Add To Compare"}</p>
                </div>
              </td>
              <td>{college.rating}</td>
              <td>{college.fees}</td>
              <td>{college.userRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollegeTable;
