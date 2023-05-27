import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const LineGraph: React.FC = () => {
  const [graphData, setGraphData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        );
        const data = response.data;

        // Process the data to extract the required information for the graph
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

        const graphData = {
          labels: graphLabels,
          datasets: graphDataSet,
          options: {
            scales: {
              x: {
                type: "category",
              },
            },
          },
        };

        setGraphData(graphData);
      } catch (error) {
        console.error("Error fetching graph data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div style={{ width: "500px", height: "300px" }}>
        {graphData ? <Line data={graphData} /> : <p>Loading graph data...</p>}
      </div>
    </div>
  );
};

export default LineGraph;
