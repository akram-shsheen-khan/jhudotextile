"use client";
import { publicAPI } from "@/config/constants";
import withAuth from "@/utils/withAuth";
import { DatePicker } from "antd";
import moment from "moment";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const Home = () => {
  const [sheetData, setSheetData] = useState<any>([]);
  const [month, setMonth] = useState(moment().get("month") + 1);
  const [year, setYear] = useState<Number>(moment().get("year"));

  const getDyesStock = async () => {
    try {
      publicAPI
        .post(`/stock/dyeStockReport`, { month, year })
        .then(({ data }) => {
          setSheetData(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };
  useEffect(() => {
    getDyesStock();
  }, [month, year]);

  return (
    <div className="max-w-[1200px] mr-10">
      <DatePicker
        picker="month"
        onChange={(_: any, valueStr: string) => {
          const dateSplit = valueStr.split("-");
          console.log("🚀 ~ file: page.tsx:33 ~ Home ~ dateSplit:", dateSplit);
          setMonth(Number(dateSplit[1]));
          setYear(Number(dateSplit[0]));
        }}
      />
      <table className="mr-10">
        <thead>
          <tr>
            <th className="py-4 px-6 bg-grey-lighter bg-red-700 text-white font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
              Dyes Name
            </th>
            <th className="py-4 px-6 bg-grey-lighter bg-red-700 text-white font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
              Code
            </th>
            <th className="py-4 px-6 bg-grey-lighter bg-red-700 text-white font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
              Opening Stock
            </th>
            <th className="py-4 px-6 bg-grey-lighter bg-red-700 text-white font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
              Purchasing
            </th>
            <th className="py-4 px-6 bg-grey-lighter bg-red-700 text-white font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
              Total Received
            </th>
            <th className="py-4 px-6 bg-grey-lighter bg-red-700 text-white font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
              Dyes Consumption
            </th>
            <th className="py-4 px-6 bg-grey-lighter bg-red-700 text-white font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
              Balance
            </th>
          </tr>
        </thead>
        <tbody>
          {sheetData?.map((data: any) => {
            return (
              <tr key={data?._id}>
                <td>{data.dyesname}</td>
                <td>{data?.code}</td>
                <td>{data?.openingStock}</td>
                <td>{data?.totalPurchasing}</td>
                <td>{data?.totalReceived}</td>
                <td>{data?.DCtotal}</td>
                <td>{data?.balance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default withAuth(Home);
