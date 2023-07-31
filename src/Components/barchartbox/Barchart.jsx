import "./Barchart.scss";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function Barchart(props) {
    const {icon, title, number, data} = props;
    return (
        <div className="barChartBox">
            <div className="boxInfo">
                <div className="title">
                    {icon}
                    <span>{title}</span>
                </div>
               
            </div>
            
                <div className="chart">
                <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          <Tooltip contentStyle={{background:"#45AC21", borderRadius: "5px"}} labelStyle={{display: "none"}}/>
          {/* <Legend /> */}
          <Bar dataKey="pv" fill="#7abead" />
          <Bar dataKey="uv" fill="#daeba7" />
        </BarChart>
      </ResponsiveContainer>
                </div>
               
            </div>

    );
}

export default Barchart;