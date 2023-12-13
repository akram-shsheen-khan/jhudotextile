"use client";
import { publicAPI } from "./../config/constants";
import { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { Select } from "antd";
// import moment from "moment";
import { PartyI } from "./types/interface/partyName";
import { ProcessI } from "./types/interface/process";
import { TransactionI } from "./types/interface/transaction";
import withAuth from "@/utils/withAuth";

const Home = () => {
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
    <div className="container mx-auto my-20 max-h-screen max-w-5xl shadow-2xl border border-purple-500 bg-white">
      <div className="p-5 space-y-5 shadow-xl">
        <h4 className="text-center text-3xl">JHUDO TEXTILE</h4>

        <form>
          <div className="max-width-full grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="flex flex-col">
              <div className=" text-left">
                <label className="block text-xl text-green-800 font-semibold mb-1">
                  Start Date
                </label>
              </div>
              <div className="text-center">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="enddate"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  placeholder="Start Date"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className=" text-left">
                <label className="block text-xl text-green-800 font-semibold mb-1">
                  End Date
                </label>
              </div>
              <div className="text-center">
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
            <div className="flex flex-col">
              <div className=" text-left">
                <label className="block text-xl text-green-800 font-semibold mb-1">
                  Party Name
                </label>
              </div>
              <div className="text-center">
                <Select
                  className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
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
            <div className="flex flex-col">
              <div className=" text-left">
                <label className="block text-xl text-green-800 font-semibold mb-1">
                  Process
                </label>
              </div>
              <div className="text-center">
                <Select
                  className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
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
            <div>
              <button className="bg-red-600 text-white w-44 h-12 border-2 mb-1 border-gray-600 rounded-full drop-shadow-xl shadow-inner transition-all duration-150 opacity-95  bg-[linear-gradient(#ffffff99,ffffff00_50%,#ffffff33)] before:contents-[''] before:block before:absolute before:right-2 before:left-2 before:top-0.5 before:h-4">
                Filter
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default withAuth(Home);
