"use client";

import React from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import renderLegend from "./PiechartLegend";

type ChartData = {
  name: string;
  value: number;
  color: string;
};

interface AmoliChartProps {
  data: ChartData[];
  innerRadius?: number;
  outerRadius?: number;
  startAngle?: number;
  endAngle?: number;
}

const AmoliChart: React.FC<AmoliChartProps> = ({
  data = [],
  innerRadius = 70,
  outerRadius = 100,
  startAngle = 90,
  endAngle = 450,
}) => {
  // Handle empty data
  if (!data || data.length === 0) {
    return (
      <div className="rounded-lg bg-gradient-to-r from-blue-50 border to-white shadow-xl grow flex items-center justify-center h-96">
        <p className="text-gray-500">No data available</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-gradient-to-r from-blue-50 border to-white shadow-xl grow">
      {/* Header */}
      <div className="p-6 text-center border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">আ’মলি মুহাসাবা</h2>
      </div>

      {/* Chart Container */}
      <div className="max-w-sm mx-auto relative p-6 rounded-b-lg">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart aria-label="Amoli Muhasaba Chart" className="p-4">
            {/* Pie Chart */}
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              dataKey="value"
              startAngle={startAngle}
              endAngle={endAngle}
              isAnimationActive
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  aria-label={`Slice ${entry.name} with value ${entry.value}`}
                />
              ))}
            </Pie>

            {/* Tooltip */}
            <Tooltip
              formatter={(value: number, name: string) => [
                `${value}%`,
                `${name}`,
              ]}
              itemStyle={{ color: "#155E75" }}
            />

            {/* Legend */}
            <Legend
              align="center"
              verticalAlign="bottom"
              height={36}
              content={renderLegend}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AmoliChart;
