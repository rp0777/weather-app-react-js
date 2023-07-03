import { Card, CardContent, CardMedia } from "@mui/material";
import React from "react";

export default function CityCard({ city }) {
  return (
    <>
      <h2>{city.location.name}</h2>
      <Card
        className="card"
        style={{
          width: "350px",
          borderTop: "none"
        }}
      >
        <CardMedia
          component="img"
          alt={"condition icon"}
          image={city.current.condition.icon}
          sx={{
            margin: "10px",
            height: "50px",
            width: "50px"
          }}
        />
        <CardContent>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Temperature</p>
            <div>
              {city.current.temp_c}°C/{city.current.temp_f}°F
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Condition</p>
            <div>{city.current.condition.text}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Wind Speed</p>
            <div>{city.current.wind_kph} km/h</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Humidity</p>
            <div>{city.current.humidity}%</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Cloud Coverage</p>
            <div>{city.current.cloud}%</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Last Updated</p>
            <div>{city.current.last_updated}</div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
