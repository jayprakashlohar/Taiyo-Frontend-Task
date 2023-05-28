import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import HomePage from "../../pages/HomePage";

const LineGraph: React.FC = () => {
  const [graphData, setGraphData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        );
        const data = response.data;

        const graphLabels = Object.keys(data.cases);
        const casesData = Object.values(data.cases);
        const recoveredData = Object.values(data.recovered);
        const deathsData = Object.values(data.deaths);

        const graphDataSet = [
          {
            label: "Cases",
            data: casesData,
            fill: false,
            borderColor: "blue",
          },
          {
            label: "Recovered",
            data: recoveredData,
            fill: false,
            borderColor: "green",
          },
          {
            label: "Deaths",
            data: deathsData,
            fill: false,
            borderColor: "red",
          },
        ];

        setGraphData(graphData);
      } catch (error) {
        console.error("Error fetching graph data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className=" text-center py-2 bg-blue-500 text-3xl font-semibold text-white">
        Graph Page
      </div>
      <div className="flex border border-gray-400 h-screen ">
        <div className="border border-gray-600 w-1/6">
          <HomePage />
        </div>
        <div className="border border-blue-600 w-full">
          <div style={{ width: "500px", height: "300px" }}>
            {graphData ? (
              <Line data={graphData} />
            ) : (
              <p>Loading graph data...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineGraph;
