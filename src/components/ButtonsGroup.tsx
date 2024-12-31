"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ButtonsGroup = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    try {
      router.push(path);
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  const buttonBaseStyles = "px-4 py-2 rounded-md focus:outline-none";

  return (
    <div className="flex gap-4">
      {/* Input Button */}
      <button
        onClick={() => handleNavigation("/dashboard/amoli-muhasaba")}
        className={`${buttonBaseStyles} bg-teal-700 text-white border-2`}
        aria-label="Navigate to Amoli Muhasaba Input"
      >
        তথ্য দিন
      </button>

      {/* Report Button */}
      <button
        onClick={() =>
          handleNavigation("/dashboard/amoli-muhasaba/amoli-muhasaba-report")
        }
        className={`${buttonBaseStyles} border border-teal-700 text-teal-700 font-medium`}
        aria-label="Navigate to Amoli Muhasaba Report"
      >
        প্রতিবেদন
      </button>
    </div>
  );
};

export default ButtonsGroup;
