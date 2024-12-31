"use client";

import React from "react";
import dynamic from "next/dynamic";
import AmoliChart from "@/components/AmoliChart";
import TalimDonutChart from "@/components/TalimBisoyChart";
import Tally from "@/components/Tally";
import { allData } from "@/app/data/data_faysal";

const Dashboard = () => {
  const userEmail =
    typeof window !== "undefined" ? localStorage.getItem("userEmail") : null;

  const dashboardData = userEmail ? allData[userEmail] : null;

  if (!dashboardData) {
    return (
      <div className="flex justify-center items-center h-full">
        <p>No data available for the current user.</p>
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="grow grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8 pb-4 pt-2">
        {/* Amoli Chart */}
        {dashboardData.AmoliChartData?.length ? (
          <AmoliChart
            data={dashboardData.AmoliChartData}
            innerRadius={70}
            outerRadius={115}
            startAngle={90}
            endAngle={450}
          />
        ) : (
          <p>No Amoli Chart data available</p>
        )}

        {/* Talim Donut Chart */}
        {dashboardData.TalimDonutChartData1?.length &&
        dashboardData.TalimDonutChartData2?.length ? (
          <TalimDonutChart
            data1={dashboardData.TalimDonutChartData1}
            data2={dashboardData.TalimDonutChartData2}
            innerRadius={50}
            outerRadius={90}
            startAngle={90}
            endAngle={450}
          />
        ) : (
          <p>No Talim Donut Chart data available</p>
        )}

        {/* Tally Components */}
        {dashboardData.TallyData?.length ? (
          dashboardData.TallyData.map((data, index) => (
            <Tally key={index} data={data} />
          ))
        ) : (
          <p>No Tally data available</p>
        )}
      </div>
    </div>
  );
};

// Dynamically import Dashboard for client-side rendering only
export default dynamic(() => Promise.resolve(Dashboard), { ssr: false });
