"use client";
import { publicAPI } from "../../../config/constants";
import { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { Select } from "antd";
// import moment from "moment";
import { PartyI } from "../../types/interface/partyName";
import { ProcessI } from "../../types/interface/process";
import { TransactionI } from "../../types/interface/transaction";
import withAuth from "@/utils/withAuth";

const Page = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [partyname, setPartyName] = useState<string>("");
  const [process, setProcess] = useState<string>("");
  const [transactions, setTransactions] = useState<Array<TransactionI>>([]);
  const [partyNames, setPartyNames] = useState<Array<PartyI>>([]);
  const [processes, setProcesses] = useState<Array<ProcessI>>([]);
  const [transactionarr, setTransactionsArr] = useState([]);
  useEffect(() => {
    const tempArr: any = [];
    transactions.map((item: any, index: any) => {
      tempArr.push({
        ...item,
        balance: index
          ? item.type === "received"
            ? tempArr[index - 1].balance + item.receivedweight
            : tempArr[index - 1].balance - item.deliveredweight
          : item.type === "received"
          ? 0 + item.receivedweight
          : 0 - item.deliveredweight,
      });
    });
    setTransactionsArr(tempArr);
  }, [transactions]);
  const onFinish = () => {
    publicAPI
      .post(`/reports/PartyNameProcessTransaction`, {
        startDate,
        endDate,
        partyname,
        process,
      })
      .then(({ data }) => {
        console.log("🚀 ~ file: page.tsx:33 ~ .then ~ data:", data);
        setTransactions(data);
      })
      .catch(({ data }) => {
        toast.error(data);
      });
  };

  const onChangePartyName = (value: string) => {
    console.log(`selected ${value}`);
    setPartyName(value);
  };

  const onChangeProcess = (value: string) => {
    console.log(`selected ${value}`);
    setProcess(value);
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
  const getProcesses = async () => {
    try {
      publicAPI
        .get(`/process`)

        .then(({ data }) => {
          setProcesses(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getPartyNames();
    getProcesses();
  }, []);

  return (
    <div>
      <div className="max-w-screen-md mx-auto bg-slate-100 p-5 shadow-2xl mt-8 mb-10">
        <div className="text-center mb-16">
          <p className="mt-4 text-2xl leading-7 text-red-600 font-bold uppercase">
            Party Name and Process Transaction Report
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
                id="enddate"
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
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                End Date
              </label>
              <Select
                className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[350px] h-11"
                showSearch
                placeholder="Select a Process"
                optionFilterProp="children"
                value={process}
                onChange={onChangeProcess}
                filterOption={(input, option) =>
                  String(option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={
                  processes?.length > 0
                    ? processes.map((proc: ProcessI) => {
                        return {
                          value: proc.process,
                          label: proc.process,
                        };
                      })
                    : []
                }
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="flex justify-between w-full px-3">
              <button
                onClick={onFinish}
                className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="button"
              >
                Filter
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
                  <th className="bg-red-700 text-white py-4">Party Name</th>

                  <th className="bg-red-700 text-white py-4">
                    Party Challan No
                  </th>
                  <th className="bg-red-700 text-white py-4">Challan No</th>
                  <th className="bg-red-700 text-white py-4">PO NO</th>
                  <th className="bg-red-700 text-white py-4">Party Lot No</th>
                  <th className="bg-red-700 text-white py-4">Lot No</th>
                  <th className="bg-red-700 text-white py-4">Process</th>
                  <th className="bg-red-700 text-white py-4">Quality</th>
                  <th className="bg-red-700 text-white py-4">Received Wt.</th>
                  <th className="bg-red-700 text-white py-4">Delivered Wt.</th>
                  <th className="bg-red-700 text-white py-4">Balance</th>
                </tr>
              </thead>
              <tbody>
                {transactionarr?.map((item: TransactionI) => (
                  <tr key={item._id}>
                    <td width="20%">{item?.dated}</td>
                    <td width="15%">{item?.partyname}</td>
                    <td width="15%">
                      {item?.partychallanno ? item?.partychallanno : "-"}
                    </td>
                    <td width="15%">
                      {item?.challanno ? item?.challanno : "-"}
                    </td>
                    <td width="15%">{item?.pono}</td>
                    <td width="15%">
                      {item?.partylotno ? item?.partylotno : "-"}
                    </td>
                    <td width="15%">{item?.lotno ? item?.lotno : "-"}</td>
                    <td width="15%">{item?.process}</td>
                    <td width="10%">{item?.quality}</td>
                    <td width="10%">
                      {item?.receivedweight
                        ? Number(item?.receivedweight)
                        : "-"}
                    </td>
                    <td width="10%">
                      {item?.deliveredweight
                        ? Number(item?.deliveredweight)
                        : "-"}
                    </td>
                    <td width="10%">{Number(item?.balance)}</td>
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
