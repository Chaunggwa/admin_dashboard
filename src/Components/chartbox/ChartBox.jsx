import { PeopleOutline } from "@mui/icons-material";
import "./ChartBox.scss";
import {Link} from "react-router-dom"
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



function ChartBox(props) {
    const {icon, title, number, percent, data} = props;
    return (
        <div className="chartBox">
            <div className="boxInfo">
                <div className="title">
                    {icon}
                    <span>{title}</span>
                </div>
                <h1>{number}</h1>
                <Link to="">View all</Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                <ResponsiveContainer >
        <LineChart
        //   width={700}
        //   height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
            color: "white"
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          <Tooltip position={{x: 10, y: 50}} labelStyle={{display: "none"}} contentStyle={{background: "transparent",border: "none"}} />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="pv" stroke="#22fab2"  />
          <Line type="monotone" dataKey="uv" stroke="#e002ce" />
        </LineChart>
      </ResponsiveContainer>
                </div>
                <div className="text">
                    <span className="percentage">{percent}%</span>
                    <span className="duration">this month</span>
                </div>
            </div>
        </div>
    );
}

export default ChartBox;