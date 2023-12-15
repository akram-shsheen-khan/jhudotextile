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
    <table className="text-left m-4 border-collapse">
      <thead>
        <tr>
          <th className="py-4 px-6 bg-grey-lighter bg-red-700 text-white font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
            Chemical Name
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
            Half Bleach Chemical
          </th>
          <th className="py-4 px-6 bg-grey-lighter bg-red-700 text-white font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
            Dyeing Chemical
          </th>
          <th className="py-4 px-6 bg-grey-lighter bg-red-700 text-white font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
            Total Consumption
          </th>
          <th className="py-4 px-6 bg-grey-lighter bg-red-700 text-white font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
            Balance
          </th>
        </tr>
      </thead>
      <tbody className="bg-grey-300">
        <tr>
          <td>Salt</td>
          <td>1</td>
          <td>100</td>
          <td>100</td>
          <td>200</td>
          <td>70</td>
          <td>30</td>
          <td>100</td>
          <td>100</td>
        </tr>
        <tr>
          <td>Caustic</td>
          <td>2</td>
          <td>200</td>
          <td>100</td>
          <td>300</td>
          <td>150</td>
          <td>40</td>
          <td>190</td>
          <td>110</td>
        </tr>
        <tr>
          <td>Soda Ash</td>
          <td>3</td>
          <td>50</td>
          <td>100</td>
          <td>150</td>
          <td>Shaheen1</td>
          <td>Shaheen2</td>
          <td>Shaheen3</td>
          <td>Shaheen4</td>
        </tr>
        <tr>
          <td>Fixing</td>
          <td>4</td>
          <td>100</td>
          <td>100</td>
          <td>200</td>
          <td>Shaheen1</td>
          <td>Shaheen2</td>
          <td>Shaheen3</td>
          <td>Shaheen4</td>
        </tr>
      </tbody>
    </table>
  );
};
export default withAuth(Home);
