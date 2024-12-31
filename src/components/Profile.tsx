"use client";
import React, { useState } from "react";

interface FormData {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  division: string;
  district: string;
  thana: string;
  markaz: string;
  getFullName: () => string;
}

const Profile: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    division: "",
    district: "",
    thana: "",
    markaz: "",
    getFullName: function () {
      return `${this.fname} ${this.lname}`;
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="w-[350px] sm:w-[500px] mx-auto p-8 bg-slate-50 shadow-lg rounded-lg">
      {/* Profile Header */}
      <div className="text-center mb-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-2xl">
          {formData.fname.charAt(0) || "?"}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mt-2">
          {formData.getFullName()}
        </h3>
        <p className="text-gray-500 text-sm">{formData.email || "No Email"}</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3 w-full">
        {/* Name */}
        <div className="w-full flex justify-between gap-4">
          <div className="w-full">
            <label
              htmlFor="fname"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              placeholder="First name"
              className="w-full p-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="lname"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              placeholder="Last name"
              className="w-full p-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+880"
            className="w-full p-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Division */}
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
            value={formData.division}
            onChange={handleChange}
            className="w-full p-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Khulna">Khulna</option>
            <option value="Barisal">Barisal</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Mymensingh">Mymensingh</option>
          </select>
        </div>

        {/* District */}
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
            value={formData.district}
            onChange={handleChange}
            className="w-full p-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Khulna">Khulna</option>
          </select>
        </div>

        {/* Thana */}
        <div>
          <label
            htmlFor="thana"
            className="block text-sm font-medium text-gray-700"
          >
            Thana
          </label>
          <select
            id="thana"
            name="thana"
            value={formData.thana}
            onChange={handleChange}
            className="w-full p-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Dhaka Sadar">Dhaka Sadar</option>
            <option value="Savar">Savar</option>
            <option value="Uttara">Uttara</option>
          </select>
        </div>

        {/* Markaz */}
        <div>
          <label
            htmlFor="markaz"
            className="block text-sm font-medium text-gray-700"
          >
            Markaz
          </label>
          <select
            id="markaz"
            name="markaz"
            value={formData.markaz}
            onChange={handleChange}
            className="w-full p-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Dhaka Markaz">Dhaka Markaz</option>
            <option value="Chittagong Markaz">Chittagong Markaz</option>
            <option value="Khulna Markaz">Khulna Markaz</option>
          </select>
        </div>

        {/* Save Button */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="w-32 py-2 px-4 bg-teal-600 text-white font-bold rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
