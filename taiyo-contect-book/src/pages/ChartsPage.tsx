// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Line } from "react-chartjs-2";

// const ChartsPage: React.FC = () => {
//   const [chartData, setChartData] = useState({});

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
//       );
//       const data = response.data;
//       const chartData = transformData(data);
//       setChartData(chartData);
//     } catch (error) {
//       console.log("Error fetching chart data:", error);
//     }
//   };

//   const transformData = (data) => {
//     const cases = data.cases;
//     const dates = Object.keys(cases);
//     const caseNumbers = Object.values(cases);

//     const chartData = {
//       labels: dates,
//       datasets: [
//         {
//           label: "Total Cases",
//           data: caseNumbers,
//           fill: false,
//           borderColor: "rgb(75, 192, 192)",
//           tension: 0.1,
//         },
//       ],
//     };

//     return chartData;
//   };

//   return (
//     <div>
//       <h2>Charts</h2>
//       <div>
//         {chartData ? <Line data={chartData} /> : <p>Loading chart data...</p>}
//       </div>
//     </div>
//   );
// };

// export default ChartsPage;
