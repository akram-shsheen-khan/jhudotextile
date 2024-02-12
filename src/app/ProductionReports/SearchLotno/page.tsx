"use client";
import { publicAPI } from "../../../config/constants";
import { useState } from "react";
import { toast } from "react-toastify";
// import moment from "moment";

import withAuth from "@/utils/withAuth";
import { CostingSheetI } from "@/app/types/interface/costingSheet";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { FaPrint } from "react-icons/fa";

import { dyesNameConsumptionI } from "@/app/types/interface/dyesNameConsumption";
import { DyeingChemicalI } from "@/app/types/interface/DyeingChemical";

const Page = () => {
  const [lotno, setLotno] = useState<string>("");

  const [costingSheet, setCostingSheet] = useState<Array<CostingSheetI>>([]);

  const getConsumptions = async (lotno: Number) => {
    return new Promise((res, rej) => {
      try {
        publicAPI
          .post(`/costingSheet/consumptions`, { lotno })
          .then(({ data }) => {
            res(data);
          });
      } catch (error: any) {
        toast.error(error);
      }
    });
  };

  const generatePDF = (
    HBChemicalData: any,
    dyesNameData: any,
    dyeingChemicalData: any
  ) => {
    console.log("🚀 ~ Page ~ HBChemicalData:", HBChemicalData);
    // Create a new jsPDF instance with landscape orientation
    const pdf = new jsPDF("landscape", "px", "a4", true); // Set autoPrint to true
    // Add company name and date range string
    pdf.text("Jhudo Textile", 15, 40);
    pdf.text(`Lotno:  ${lotno} `, pdf.internal.pageSize.width - 15, 40, {
      align: "right",
    });

    // Add table headers
    const headers = [
      "Date",
      "Lot No",
      "Party Name",
      "Process",
      "Quality",
      "Machine No",
      "Process",
      "Weight (kg)",
      "Half Bleach Cost",
      "Dyes Cost",
      "Dyeing Chemical Cost",
      "Total Cost",
    ];

    // Map the costingSheet data to an array of arrays for the table content
    const data: any = costingSheet.map((item) => [
      item?.dyeingdate,
      item?.lotno,
      item?.partyname,
      item?.process,
      item?.quality,
      item?.pono,
      item?.process,
      Number(item?.weightkg),
      Number(item?.halfbleachcost),
      Number(item?.dyescost),
      Number(item?.dyeingchemicalcost),
      Number(item?.totalcost),
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
          "",
          "",
          "",
          "Total",
          costingSheet?.reduce((a: any, b: any) => a + b.weightkg, 0),
          (
            costingSheet?.reduce((a: any, b: any) => a + b.halfbleachcost, 0) /
            costingSheet.length
          ).toFixed(2),
          (
            costingSheet?.reduce((a: any, b: any) => a + b.dyescost, 0) /
            costingSheet.length
          ).toFixed(2),
          (
            costingSheet?.reduce(
              (a: any, b: any) => a + b.dyeingchemicalcost,
              0
            ) / costingSheet.length
          ).toFixed(2),
          (
            costingSheet?.reduce((a: any, b: any) => a + b.totalcost, 0) /
            costingSheet.length
          ).toFixed(2),
        ],
      ],
      startY: 50, // Adjust the starting Y position as needed
    });

    autoTable(pdf, {
      head: [["HB Chemical ", "Quantity", "Rate", "Amount"]],
      body: HBChemicalData.map((item: any) => [
        item.chemicalname,
        item.quantity,
        item.rate,
        item.amount,
      ]),
      // startY: 100, // Adjust startY as needed
    });
    autoTable(pdf, {
      head: [["Dyes Name ", "Quantity", "Rate", "Amount"]],
      body: dyesNameData.map((item: dyesNameConsumptionI) => [
        item.dyesname,
        item.quantity,
        item.rate,
        item.amount,
      ]),
      // startY: 200, // Adjust startY as needed
    });
    autoTable(pdf, {
      head: [["Dying Chemical ", "Quantity", "Rate", "Amount"]],
      body: dyeingChemicalData.map((item: DyeingChemicalI) => [
        item.chemicalname,
        item.quantity,
        item.rate,
        item.amount,
      ]),
      // startY: 300, // Adjust startY as needed
    });

    // Print the PDF
    pdf.autoPrint();

    // Save the PDF
    pdf.save("report.pdf");
  };

  // Call generatePDF function with required data
  const handlePrint = (lotno: any) => {
    console.log("🚀 ~ handlePrint ~ lotno:", lotno);
    // Call getConsumptions function to fetch required data
    getConsumptions(lotno).then((data: any) => {
      console.log("🚀 ~ getConsumptions ~ data:", data);
      // After data is fetched, call generatePDF with required data
      generatePDF(
        data?.hbchemicalconsumptions,
        data?.dyesNameconsumptions,
        data?.dchemicalconsumptions
      );
    });
  };
  const getCostingSheet = async (search = "") => {
    try {
      publicAPI
        .get(`/costingSheet?search=${search}`)

        .then(({ data }) => {
          setCostingSheet(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };
  return (
    <div>
      <div className="max-w-screen-md mx-auto bg-slate-100 p-5 shadow-2xl mt-8 mb-10">
        <div className="text-center mb-16">
          <p className="mt-4 text-2xl leading-7 text-red-600 font-bold uppercase">
            Search Lotno Report
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            JHUDO <span className="text-indigo-600">TEXTILE</span>
          </h3>
        </div>

        <form className="w-full">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                lotno
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="lotno"
                value={lotno}
                onChange={(e) => setLotno(e.target.value)}
                placeholder="Lotno"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="flex justify-between px-3">
              <button
                onClick={() => getCostingSheet(lotno)}
                className="shadow mr-5 bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="button"
              >
                Filter
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="h-60 w-full grid gap-2 p-2 grid-cols-2 grid-rows-2">
        <div className="col-span-2 row-span-2 rounded-xl bg-white overflow-auto">
          <table className="table-auto w-full">
            <thead className="sticky top-0 bg-gray-700 text-white">
              <tr>
                <th className="bg-red-700 text-white py-4">Date</th>
                <th className="bg-red-700 text-white py-4">Lot No</th>
                <th className="bg-red-700 text-white py-4">Party Name</th>
                <th className="bg-red-700 text-white py-4">Color</th>
                <th className="bg-red-700 text-white py-4">Quality</th>
                <th className="bg-red-700 text-white py-4">Machine No</th>
                <th className="bg-red-700 text-white py-4">Process</th>
                <th className="bg-red-700 text-white py-4">Weight Kg</th>
                <th className="bg-red-700 text-white py-4">HB Cost</th>
                <th className="bg-red-700 text-white py-4">Dyes Cost</th>
                <th className="bg-red-700 text-white py-4">Dyeing Ch Cost</th>
                <th className="bg-red-700 text-white py-4">Total Cost</th>
                <th className="bg-red-700 text-white py-4">Print</th>
              </tr>
            </thead>
            <tbody>
              {costingSheet?.map((item: any, i: any) => (
                <tr key={i}>
                  <td width="30%">{item?.dyeingdate}</td>
                  <td width="20%">{item?.lotno}</td>
                  <td width="20%">{item?.partyname}</td>
                  <td width="20%">{item?.color}</td>
                  <td width="20%">{item?.quality}</td>
                  <td width="20%">{item?.pono}</td>
                  <td width="20%">{item?.process}</td>
                  <td width="20%">{item?.weightkg}</td>
                  <td width="20%">{item?.halfbleachcost}</td>
                  <td width="20%">{item?.dyescost}</td>
                  <td width="20%">{item?.dyeingchemicalcost}</td>
                  <td width="20%">{item?.totalcost}</td>
                  <td width="10%">
                    <FaPrint onClick={() => handlePrint(item?.lotno)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Page);
