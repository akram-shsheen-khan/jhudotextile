"use client";
import { publicAPI } from "../../../config/constants";
import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

// import moment from "moment";

import withAuth from "@/utils/withAuth";
import { DyesPurchasingI } from "../../types/interface/dyesPurchasing";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Page = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const [dyesPurchasing, setDyesPurchasing] = useState<Array<DyesPurchasingI>>(
    []
  );

  const generatePDF = () => {
    // Create a new jsPDF instance with landscape orientation
    const pdf = new jsPDF("landscape", "px", "a4", true); // Set autoPrint to true
    // Add company name and date range string
    pdf.text("Jhudo Textile", 15, 40);
    pdf.text(
      `Date Range: ${startDate} - ${endDate} `,
      pdf.internal.pageSize.width - 15,
      40,
      { align: "right" }
    );

    // Add table headers
    const headers = [
      "Date",
      "Challan No",
      "Dyes Name",
      "Supplier Name",
      "Quantity",
      "Rate",
      "Amount",
    ];

    // Map the costingSheet data to an array of arrays for the table content
    const data: any = dyesPurchasing.map((item) => [
      item?.date,
      item?.challanno,
      item?.dyesname,
      item?.suppliername,
      Number(item?.quantity),
      Number(item?.rate),
      Number(item?.amount),
    ]);

    // AutoTable function to generate the table
    autoTable(pdf, {
      head: [headers],
      body: [
        ...data,
        [
          "",
          "",
          "",

          "Total",
          dyesPurchasing?.reduce((a: any, b: any) => a + b.quantity, 0),
          (
            dyesPurchasing?.reduce((a: any, b: any) => a + b.rate, 0) /
            dyesPurchasing.length
          ).toFixed(2),
          dyesPurchasing
            ?.reduce((a: any, b: any) => a + b.amount, 0)
            .toFixed(2),
        ],
      ],
      startY: 50, // Adjust the starting Y position as needed
    });

    // Print the PDF
    pdf.autoPrint();

    // Save the PDF
    pdf.save("report.pdf");
  };
  const onFinish = () => {
    publicAPI
      .post(`/PurchasingReports/DyesDate`, {
        startDate,
        endDate,
      })
      .then(({ data }) => {
        console.log("🚀 ~ file: page.tsx:92 ~ .then ~ data:", data);

        setDyesPurchasing(data);
      })
      .catch(({ data }) => {
        toast.error(data);
      });
  };

  return (
    <div>
      <div className="max-w-screen-md mx-auto bg-slate-100 p-5 shadow-2xl mt-8 mb-10">
        <div className="text-center mb-16">
          <p className="mt-4 text-2xl leading-7 text-red-600 font-bold uppercase">
            Date Wise Dyes Purchasing Report
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            JHUDO <span className="text-indigo-600">TEXTILE</span>
          </h3>
        </div>

        <form className="w-full">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Start Date
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="startdate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="Start Date"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                End Date
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="enddate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="End Date"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="flex justify-between px-3">
              <button
                onClick={onFinish}
                className="shadow mr-5 bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="button"
              >
                Filter
              </button>
              <button
                onClick={generatePDF}
                className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="button"
                disabled={dyesPurchasing.length ? false : true}
              >
                Print
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="h-full w-9/12 bg-slate-400 mx-auto mb-10 shadow-2xl">
        <div className="h-60 w-full grid gap-2 p-2 grid-cols-2 grid-rows-2">
          <div className="col-span-2 row-span-2 rounded-xl bg-white overflow-auto">
            <table className="table-auto w-full">
              <thead className="sticky top-0 bg-gray-700 text-white">
                <tr>
                  <th className="bg-red-700 text-white py-4">Date</th>
                  <th className="bg-red-700 text-white py-4">Challan No.</th>
                  <th className="bg-red-700 text-white py-4">Chemical Name</th>
                  <th className="bg-red-700 text-white py-4">Supplier Name</th>
                  <th className="bg-red-700 text-white py-4">Quantity</th>
                  <th className="bg-red-700 text-white py-4">Rate</th>
                  <th className="bg-red-700 text-white py-4">Amount</th>
                </tr>
              </thead>
              <tbody>
                {dyesPurchasing?.map((item: DyesPurchasingI) => (
                  <tr key={item._id}>
                    <td width="20%">{item?.date}</td>
                    <td width="20%">{item?.challanno}</td>
                    <td width="20%">{item?.dyesname}</td>
                    <td width="20%">{item?.suppliername}</td>
                    <td width="20%">{Number(item?.quantity)}</td>
                    <td width="20%">{Number(item?.rate)}</td>
                    <td width="20%">{Number(item?.amount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Page);
