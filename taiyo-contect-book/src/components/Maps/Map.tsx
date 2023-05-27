import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import HomePage from "../../pages/HomePage";

const Map: React.FC = () => {
  const [mapData, setMapData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://disease.sh/v3/covid-19/countries"
        );
        const data = response.data;

        setMapData(data);
      } catch (error) {
        console.error("Error fetching map data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className=" text-center py-2 bg-blue-500 text-3xl font-semibold text-white">
        Maps Page
      </div>
      <div className="flex border border-gray-400 h-screen ">
        <div className="border border-gray-600 w-1/6">
          <HomePage />
        </div>
        <div className="border border-blue-600 w-full">
          <div>
            <MapContainer
              center={[0, 0]}
              zoom={2}
              style={{ height: "500px", width: "90%", margin: "auto",marginTop:"50px" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {mapData.map((country: any) => (
                <Marker
                  key={country.countryInfo._id}
                  position={[country.countryInfo.lat, country.countryInfo.long]}
                >
                  <Popup>
                    <div>
                      <p>Country: {country.country}</p>
                      <p>Total Cases: {country.cases}</p>
                      <p>Recovered: {country.recovered}</p>
                      <p>Deaths: {country.deaths}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
