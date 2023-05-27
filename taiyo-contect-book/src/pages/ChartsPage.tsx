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

//   const transformData = () => {
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




// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// import { Box, Heading } from "@chakra-ui/react";

// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   Tooltip,
//   LinearScale,
//   Legend,
// } from "chart.js";

// import LineGraph from "../components/Charts/LineGraph";

// ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

// const ChartsPage: React.FC = () => {
//   const [data, setData] = useState({ datasets: [] });

//   const URL = `https://blackcoffer-server-production.up.railway.app`;

//   useEffect(() => {
//     const params = {
//       limit: 10,
//     };
//     axios
//       .get(`${URL}/data?`, { params })
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <>
//       <Box>
//         <Box>
//           <Heading
//             m="40px"
//             fontSize="25px"
//             fontFamily="cursive"
//             textAlign="center"
//           >
//             Relation b/w Intensity and Likelihood{" "}
//           </Heading>
//           <LineGraph data={data} />
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default ChartsPage;

