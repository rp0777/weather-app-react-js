import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import CityCard from "./CityCard";
import axios from "axios";

export default function WeatherCard() {
  const [city, setCity] = useState({});
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const [receivedData, setReceivedData] = useState(false);

  const performSearch = async (text) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=e0459eaa8476455e936130512230307&q=${text}`
      );
      setReceivedData(true);
      setCity(response.data);
    } catch (e) {
      if (
        e.response &&
        (e.response.status === 404 || e.response.status === 500)
      ) {
        setCity(null);
      }
    }
  };

  const debounceSearch = (event) => {
    const value = event.target.value;
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(() => {
      performSearch(value);
    }, 500);

    setDebounceTimeout(timeout);
  };

  return (
    <>
      <Stack
        spacing={2}
        className="form"
        style={{
          alignItems: "center"
        }}
      >
        <TextField
          id="location"
          label="Enter location"
          variant="outlined"
          name="location"
          placeholder="Enter Location"
          style={{
            width: "350px"
          }}
          onChange={debounceSearch}
        />

        {receivedData && city ? (
          <CityCard city={city} />
        ) : receivedData && !city ? (
          <h4 style={{ color: "red" }}>No matching location found.</h4>
        ) : null}
      </Stack>
    </>
  );
}
