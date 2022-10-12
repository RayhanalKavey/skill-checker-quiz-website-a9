import { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import React, { useContext } from "react";
import { TopicsContext } from "../../outlet/Main";
import "./Statistics.css";

const Statistics = () => {
  const topicsData = useContext(TopicsContext);
  return (
    <div>
      <h4 className="text-2xl font-bold text-center mt-10 mb-5">
        Questions available per topic:
      </h4>
      <hr className="w-2/3 mx-auto" />
      <ResponsiveContainer
        className="mx-auto my-20  text-[#392a0e]"
        width="80%"
        height="80%"
        aspect={3}
      >
        <LineChart width={600} height={600} data={topicsData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />

          <Line type="monotone" dataKey="total" stroke="#392a0e" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
