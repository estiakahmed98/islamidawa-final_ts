"use client";

import React, { useEffect, useState } from "react";
import { yearlyTableData } from "@/app/data/TableData";
import fileDownload from "js-file-download";
import jsPDF from "jspdf";
import "jspdf-autotable";

interface YearlyTableRow {
  id: number;
  name: string;
  values: Record<string, number | string>; // Keys are days/months, values are numbers or strings
}

const ReportTableYearly: React.FC = () => {
  const [monthName, setMonth] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    const x = today.toLocaleString("default", { month: "long" }); // Full month name
    setMonth(x);
  }, []);

  const convertToCSV = (data: YearlyTableRow[]): string => {
    const headers = [
      "id",
      "name",
      ...Object.keys(data[0]?.values || {}).map((key) => key),
    ];

    const rows = data.map((row) => {
      const values = row.values || {};
      return [row.id, row.name, ...Object.values(values)];
    });

    return [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
  };

  const convertToPDF = (data: YearlyTableRow[]): jsPDF => {
    const doc = new jsPDF();
    doc.text("Yearly Table Data", 14, 10);

    const headers = ["Title", ...Object.keys(data[0]?.values || {})];

    const rows = data.map((row) => [
      row.name,
      ...Object.values(row.values || {}),
    ]);

    doc.autoTable({
      head: [headers],
      body: rows,
      startY: 20,
      theme: "striped",
      headStyles: {
        fillColor: [22, 160, 133],
        halign: "center",
      },
      bodyStyles: {
        textColor: 50,
        halign: "center",
      },
      styles: {
        halign: "center",
      },
    });

    return doc;
  };

  const handleDownloadCSV = () => {
    const csv = convertToCSV(yearlyTableData);
    fileDownload(csv, "table-data.csv");
  };

  const handleDownloadPDF = () => {
    const pdf = convertToPDF(yearlyTableData);
    pdf.save("table-data.pdf");
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="overflow-x-auto p-2 grow">
      <table className="table-auto border-collapse border border-gray-300 w-full text-xl">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">আ’মলি মুহাসাবা</th>
            {months.map((month, index) => (
              <th
                key={index}
                className="border border-gray-300 p-2 text-center"
              >
                {month}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {yearlyTableData.map((row) => (
            <tr key={row.id}>
              <td className="border border-gray-300 bg-gray-100 p-4 font-medium">
                {row.name}
              </td>
              {Object.entries(row.values || {}).map(([key, value]) => (
                <td
                  key={key}
                  className="border border-gray-300 p-4 text-center"
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end gap-4 pt-4">
        <button
          className="p-2 text-white border-2 bg-teal-700 rounded-md"
          onClick={handleDownloadCSV}
        >
          Download CSV
        </button>
        <button
          className="p-2 text-white border-2 bg-teal-700 rounded-md"
          onClick={handleDownloadPDF}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default ReportTableYearly;
