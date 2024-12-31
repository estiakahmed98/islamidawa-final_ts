"use client";

import React, { useState } from "react";
import { divisions, districts, upazilas, unions } from "@/app/data/bangla";
import {
  divisions_en,
  districts_en,
  upazilas_en,
  unions_en,
} from "@/app/data/english";

// Types
interface LocationData {
  value: string;
  title: string;
}

interface LocationDropdownProps {
  language?: "bn" | "en";
}

// Utility functions
function getAllDivision(type: "bn" | "en"): LocationData[] {
  return type === "en" ? divisions_en : divisions;
}

function getAllDistrict(type: "bn" | "en"): Record<string, LocationData[]> {
  return type === "en" ? districts_en : districts;
}

function getUpazilas(districtValue: string, type: "bn" | "en"): LocationData[] {
  if (!districtValue) return [];
  return type === "en"
    ? upazilas_en[districtValue] || []
    : upazilas[districtValue] || [];
}

function getUnions(upazilaValue: string, type: "bn" | "en"): LocationData[] {
  if (!upazilaValue) return [];
  return type === "en"
    ? unions_en[upazilaValue] || []
    : unions[upazilaValue] || [];
}

// Dropdown Component
const LocationDropdown: React.FC<LocationDropdownProps> = ({
  language = "bn",
}) => {
  const [selectedDivision, setSelectedDivision] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedUpazila, setSelectedUpazila] = useState<string>("");
  const [districts, setDistricts] = useState<LocationData[]>([]);
  const [upazilas, setUpazilas] = useState<LocationData[]>([]);
  const [unions, setUnions] = useState<LocationData[]>([]);
  const [finalDivision, setFinalDivision] = useState<string>("");

  const handleDivisionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const divisionValue = e.target.value.toString();
    const [divisionKey, divisionTitle] = divisionValue.split("_");

    setSelectedDivision(divisionKey);
    setFinalDivision(divisionTitle);

    const divisionDistricts = getAllDistrict(language)[divisionKey] || [];
    setDistricts(divisionDistricts);
    setSelectedDistrict("");
    setUpazilas([]);
    setUnions([]);
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const districtValue = e.target.value.toString();
    const [districtKey] = districtValue.split("_");

    setSelectedDistrict(districtKey);

    const districtUpazilas = getUpazilas(districtKey, language);
    setUpazilas(districtUpazilas);
    setSelectedUpazila("");
    setUnions([]);
  };

  const handleUpazilaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const upazilaValue = e.target.value.toString();
    const [upazilaKey] = upazilaValue.split("_");

    setSelectedUpazila(upazilaKey);

    const upazilaUnions = getUnions(upazilaKey, language);
    setUnions(upazilaUnions);
  };

  return (
    <div className="space-y-4">
      {/* Division Dropdown */}
      <div>
        <label
          htmlFor="division"
          className="block text-sm font-medium text-gray-700"
        >
          Division
        </label>
        <select
          id="division"
          name="division"
          onChange={handleDivisionChange}
          required
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>
            Select Division
          </option>
          {getAllDivision(language).map((division, index) => (
            <option key={index} value={`${division.value}_${division.title}`}>
              {division.title}
            </option>
          ))}
        </select>
      </div>

      {/* District Dropdown */}
      <div>
        <label
          htmlFor="district"
          className="block text-sm font-medium text-gray-700"
        >
          District
        </label>
        <select
          id="district"
          name="district"
          onChange={handleDistrictChange}
          required
          disabled={!districts.length}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>
            Select District
          </option>
          {districts.map((district, index) => (
            <option key={index} value={`${district.value}_${district.title}`}>
              {district.title}
            </option>
          ))}
        </select>
      </div>

      {/* Upazila Dropdown */}
      <div>
        <label
          htmlFor="upazila"
          className="block text-sm font-medium text-gray-700"
        >
          Upazila
        </label>
        <select
          id="upazila"
          name="upazila"
          onChange={handleUpazilaChange}
          required
          disabled={!upazilas.length}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>
            Select Upazila
          </option>
          {upazilas.map((upazila, index) => (
            <option key={index} value={`${upazila.value}_${upazila.title}`}>
              {upazila.title}
            </option>
          ))}
        </select>
      </div>

      {/* Union Dropdown */}
      <div>
        <label
          htmlFor="union"
          className="block text-sm font-medium text-gray-700"
        >
          Union
        </label>
        <select
          id="union"
          name="union"
          required
          disabled={!unions.length}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>
            Select Union
          </option>
          {unions.map((union, index) => (
            <option key={index} value={`${union.value}_${union.title}`}>
              {union.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LocationDropdown;
