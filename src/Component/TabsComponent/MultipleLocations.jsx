import "./MultipleLocations.css";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MultipleLocations({ fetchWeatherData, weatherData }) {
  const locations = [
    {
      id: 1,
      name: "Delhi",
    },

    {
      id: 3,
      name: "Mumbai",
    },
    {
      id: 4,
      name: "Dubai",
    },
    {
      id: 5,
      name: "New York",
    },
  ];
  const [selectedTab, setSelectedTab] = useState();
  const [selectedName, setSelectedName] = useState();
  const navigate = useNavigate();
  const handleTabClick = (location) => {
    setSelectedTab(location.id);
    setSelectedName(location.name);
    fetchWeatherData(location.name);
  };

  const handleLogout = () => {
    Cookies.remove("userEmail");
    Cookies.remove("userPassword");
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    if (weatherData?.name !== selectedName) {
      setSelectedTab("");
    }
  }, [weatherData]);

  return (
    <div className="tabs">
      {locations.map((location) => (
        <button
          key={location.id}
          className={`tab ${selectedTab === location.id ? "active" : ""}`}
          onClick={() => handleTabClick(location)}
        >
          {location.name}
        </button>
      ))}
      <button
        type="submit"
        id="btnLogout"
        onClick={handleLogout}
        className="formTag_Btn"
      >
        Logout
      </button>
    </div>
  );
}

export default MultipleLocations;
