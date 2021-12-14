import React from "react";
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const SpiderChartPage = () => {


//pass in the datasets then loop through and add a key to data with the persons results
  const data = [
    { name: 'React Router', series1: 68, series2:54 },
    { name: 'Release', series1: 43, series2:23 },
    { name: 'useEffect', series1: 87, series2:59 },
    { name: 'TTD', series1: 22, series2:78 },
    { name: 'Using sandbox', series1: 66, series2:89 },
    { name: 'HTML', series1: 68, series2:33 },
    { name: 'CSS' , series1: 31, series2:44},
    { name: 'useState' , series1: 72, series2:82},
    { name: 'API calls' , series1: 88, series2:60},
  ];

  // const RadarList = data.map((data, index) => {
  //   return (
  //     <></>// <Radar name = /Radar>
  //   );
  // });

  return (
    <div>
      <h2> Capability</h2>
      <ResponsiveContainer width="100%" aspect="2">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis angle={0} domain={[0, 100]} />
          <Radar name="Danny" dataKey="series1" stroke="Green"
            fill='green' fillOpacity={0.5} />
          <Radar name="Mark" dataKey="series2" stroke="Blue"
            fill='blue' fillOpacity={0.5} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );

}

export default SpiderChartPage;
