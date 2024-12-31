import React from "react";

const DawatiCard = ({ data }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p className="text-center text-gray-500">No data available</p>;
  }

  const getProgressBarColor = (value) => {
    if (value >= 80) return "bg-green-500";
    if (value >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-center mb-6">দাওয়াতি বিষয়</h2>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            {/* Label */}
            <span
              className="text-sm font-medium text-gray-700 w-1/2"
              aria-label={item.label}
            >
              {item.label}
            </span>

            {/* Progress Bar */}
            <div
              className="relative flex-1 h-4 bg-gray-200 rounded-full"
              aria-label={`Progress: ${item.value}%`}
            >
              <div
                className={`absolute h-4 rounded-full ${getProgressBarColor(
                  item.value
                )}`}
                style={{ width: `${item.value}%` }}
              ></div>
            </div>

            {/* Value */}
            <span className="text-sm font-semibold text-gray-700">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DawatiCard;
