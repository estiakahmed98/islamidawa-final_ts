"use client";

import React, { useState, useEffect } from "react";
import { tableData } from "@/app/data/TableData";
import fileDownload from "js-file-download";
import jsPDF from "jspdf";
import "jspdf-autotable";

interface TableRow {
  id: number;
  name: string;
  values: Record<string, number | string>; // Dynamic keys for day values
}

const ReportTable: React.FC = () => {
  const [daysInMonth, setDaysInMonth] = useState<string[]>([]);
  const [monthName, setMonth] = useState<string>("");

  const convertToCSV = (data: TableRow[]): string => {
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

  const convertToPDF = (data: TableRow[]): jsPDF => {
    const doc = new jsPDF();
    doc.text("Table Data", 14, 10);

    const headers = [monthName, ...data.map((row) => row.name)];

    const fields = ["ID", ...Object.keys(data[0]?.values || {})];

    const rows = fields.map((field) => {
      if (field === "ID") {
        return [field, ...data.map((row) => row.id)];
      } else {
        return [
          field,
          ...data.map((row) => row.values?.[field.toLowerCase()] || ""),
        ];
      }
    });

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
      },
      styles: {
        halign: "center",
      },
    });

    return doc;
  };

  const handleDownloadCSV = () => {
    const csv = convertToCSV(tableData);
    fileDownload(csv, "table-data.csv");
  };

  const handleDownloadPDF = () => {
    const pdf = convertToPDF(tableData);
    pdf.save("table-data.pdf");
  };

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    const daysArray = Array.from({ length: days }, (_, i) => `${i + 1}`);
    const x = today.toLocaleString("default", { month: "long" });

    setDaysInMonth(daysArray);
    setMonth(x);
  }, []);

  return (
    <div className="overflow-x-auto p-4">
      <table className="table-auto border-collapse border border-gray-300 w-full text-sm md:text-base">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">{monthName}</th>
            {daysInMonth.map((day, index) => (
              <th
                key={index}
                className="border border-gray-300 p-2 text-center"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
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

export default ReportTable;
