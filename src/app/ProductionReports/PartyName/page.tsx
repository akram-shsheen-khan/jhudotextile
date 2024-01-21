"use client";
import { publicAPI } from "../../../config/constants";
import { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { Select } from "antd";
// import moment from "moment";
import { PartyI } from "../../types/interface/partyName";

import withAuth from "@/utils/withAuth";
import { CostingSheetI } from "@/app/types/interface/costingSheet";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Page = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [partyname, setPartyName] = useState<string>("");

  const [costingSheet, setCostingSheet] = useState<Array<CostingSheetI>>([]);
  const [partyNames, setPartyNames] = useState<Array<PartyI>>([]);

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
      "Dyeing Date",
      "Lot No",
      "Party Name",
      "Color",
      "Quality",
      "PO No",
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
      item?.color,
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

    // Print the PDF
    pdf.autoPrint();

    // Save the PDF
    pdf.save("report.pdf");
  };
  const onFinish = () => {
    publicAPI
      .post(`/ProductionReports/PartyName`, {
        startDate,
        endDate,
        partyname,
      })
      .then(({ data }) => {
        console.log("🚀 ~ file: page.tsx:92 ~ .then ~ data:", data);

        setCostingSheet(data);
      })
      .catch(({ data }) => {
        toast.error(data);
      });
  };

  const onChangePartyName = (value: string) => {
    console.log(`selected ${value}`);
    setPartyName(value);
  };

  const getPartyNames = async () => {
    try {
      publicAPI
        .get(`/partyname`)

        .then(({ data }) => {
          setPartyNames(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getPartyNames();
  }, []);

  return (
    <div>
      <div className="max-w-screen-md mx-auto bg-slate-100 p-5 shadow-2xl mt-8 mb-10">
        <div className="text-center mb-16">
          <p className="mt-4 text-2xl leading-7 text-red-600 font-bold uppercase">
            Party Name and Color Production Report
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
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Party Name
              </label>
              <Select
                className="appearance-none block bg-gray-200 text-gray-700 border w-full border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg- md:w-[350px] h-11"
                showSearch
                placeholder="Select Party Name"
                value={partyname}
                optionFilterProp="children"
                onChange={onChangePartyName}
                filterOption={(input, option) =>
                  String(option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={
                  partyNames?.length > 0
                    ? partyNames.map((party: PartyI) => {
                        return {
                          value: party.partyname,
                          label: party.partyname,
                        };
                      })
                    : []
                }
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
                disabled={costingSheet.length ? false : true}
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
                  <th className="bg-red-700 text-white py-4">Lot No.</th>
                  <th className="bg-red-700 text-white py-4">Party Name</th>
                  <th className="bg-red-700 text-white py-4">Color</th>
                  <th className="bg-red-700 text-white py-4">Quantity</th>
                  <th className="bg-red-700 text-white py-4">PO No</th>
                  <th className="bg-red-700 text-white py-4">Process</th>
                  <th className="bg-red-700 text-white py-4">Weight Kg</th>
                  <th className="bg-red-700 text-white py-4">
                    Half Bleach Cost
                  </th>
                  <th className="bg-red-700 text-white py-4">Dying Cost</th>
                  <th className="bg-red-700 text-white py-4">
                    Dying Chemical Cost
                  </th>
                  <th className="bg-red-700 text-white py-4">Total Cost</th>
                </tr>
              </thead>
              <tbody>
                {costingSheet?.map((item: CostingSheetI) => (
                  <tr key={item._id}>
                    <td width="20%">{item?.dyeingdate}</td>
                    <td width="20%">{item?.lotno}</td>
                    <td width="20%">{item?.partyname}</td>
                    <td width="20%">{item?.color}</td>
                    <td width="20%">{item?.quality}</td>
                    <td width="20%">{item?.pono}</td>
                    <td width="20%">{item?.process}</td>
                    <td width="20%">{Number(item?.weightkg)}</td>
                    <td width="20%">{Number(item?.halfbleachcost)}</td>
                    <td width="20%">{Number(item?.dyescost)}</td>
                    <td width="20%">{Number(item?.dyeingchemicalcost)}</td>
                    <td width="20%">{Number(item?.totalcost)}</td>
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
