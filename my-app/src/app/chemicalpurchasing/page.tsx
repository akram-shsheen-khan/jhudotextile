"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { Select } from "antd";
// import moment from "moment";
import { ChemicalI } from "../types/interface/chemicalName";
import { SupplierI } from "../types/interface/suppliertName";
import { ChemicalPurchasingI } from "../types/interface/chemicalPurchasing";
import { handleFocus } from "../utils/globalFunctions";

export default function Page() {
  const [date, setDate] = useState<string>("");
  const [challanno, setChallanno] = useState<string>("");
  const [chemicalname, setChemicalcame] = useState<string>("");
  const [suppliername, setSupliername] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [chemicalPurchasing, setChemicalPurchasing] = useState<
    Array<ChemicalPurchasingI>
  >([]);
  const [chemicalNames, setChemicalNames] = useState<Array<ChemicalI>>([]);
  const [supplierNames, setsupplierNames] = useState<Array<SupplierI>>([]);
  const [onEdit, setOnEdit] = useState<ChemicalPurchasingI | null>(null);

  const onFinish = () => {
    if (onEdit) {
      axios
        .put("http://localhost:3000/api/chemicalPurchasing", {
          id: onEdit._id,
          payload: {
            date,
            challanno,
            chemicalname,
            suppliername,
            quantity,
            rate,
            amount,
          },
        })
        .then(({ data }) => {
          getChemicalPurchasing();
          toast.success(data);
        })
        .catch(({ data }) => toast.error(data));
    } else {
      axios
        .post("http://localhost:3000/api/chemicalPurchasing", {
          date,
          challanno,
          chemicalname,
          suppliername,
          quantity,
          rate,
          amount,
        })
        .then(({ data }) => {
          getChemicalPurchasing();

          toast.success(data);
          console.log(data);
        })
        .catch(({ data }) => {
          toast.error(data);
        });
    }
    setOnEdit(null);
    setDate("");
    setChallanno("");
    setChemicalcame("");
    setSupliername("");
    setQuantity(0);
    setRate(0);
    setAmount(0);
  };
  const handleEdit = (item: ChemicalPurchasingI) => {
    setOnEdit(item);
  };
  const onChangeChemical = (value: string) => {
    console.log(`selected ${value}`);
    setChemicalcame(value);
  };
  const onChangeSupplier = (value: string) => {
    console.log(`selected ${value}`);
    setSupliername(value);
  };
  const handleDelete = async (id: string) => {
    axios
      .patch(`http://localhost:3000/api/chemicalPurchasing`, { id })
      .then(({ data }) => {
        getChemicalPurchasing();

        toast.success(data);
        console.log(data);
      })
      .catch(({ data }) => {
        toast.error(data);
      });

    setOnEdit(null);
    setDate("");
    setChallanno("");
    setChemicalcame("");
    setSupliername("");
    setQuantity(0);
    setRate(0);
    setAmount(0);
  };
  useEffect(() => {
    if (onEdit) {
      setDate(String(onEdit.date));
      setChallanno(String(onEdit.challanno));
      setChemicalcame(String(onEdit.chemicalname));
      setSupliername(String(onEdit.suppliername));
      setQuantity(Number(onEdit.quantity));
      setRate(Number(onEdit.rate));
      setAmount(Number(onEdit.amount));
    }
  }, [onEdit]);

  const getChemicalPurchasing = async () => {
    try {
      fetch("http://localhost:3000/api/chemicalPurchasing")
        .then((res) => res.json())
        .then((data) => {
          setChemicalPurchasing(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };
  const getChemicals = async () => {
    try {
      fetch("http://localhost:3000/api/chemicalname")
        .then((res) => res.json())
        .then((data) => {
          setChemicalNames(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };
  const getSuppliers = async () => {
    try {
      fetch("http://localhost:3000/api/suppliername")
        .then((res) => res.json())
        .then((data) => {
          setsupplierNames(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getChemicalPurchasing();
    getChemicals();
    getSuppliers();
  }, []);
  useEffect(() => {
    setAmount(Number(quantity) * Number(rate));
  }, [quantity, rate]);
  return (
    <div>
      <div className="max-w-screen-md mx-auto p-5">
        <div className="text-center mb-16">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
            Chemical Purchasing
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            JHUDO <span className="text-indigo-600">TEXTILE</span>
          </h3>
        </div>

        <form className="w-full">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Date
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Date"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Challan No
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="challanno"
                type="text"
                value={challanno}
                onChange={(e) => setChallanno(e.target.value)}
                placeholder="Challan No"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Chemical Name
              </label>
              <Select
                style={{
                  width: "350px",
                  height: "48px",
                  appearance: "none",
                }}
                showSearch
                placeholder="Select a chemical"
                value={chemicalname}
                optionFilterProp="children"
                onChange={onChangeChemical}
                filterOption={(input, option) =>
                  String(option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={
                  chemicalNames?.length > 0
                    ? chemicalNames.map((chemical: ChemicalI) => {
                        return {
                          value: chemical.chemicalname,
                          label: chemical.chemicalname,
                        };
                      })
                    : []
                }
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Supplier Name
              </label>

              <Select
                style={{ width: "350px", height: "48px" }}
                showSearch
                placeholder="Select a Supplier"
                optionFilterProp="children"
                value={suppliername}
                onChange={onChangeSupplier}
                filterOption={(input, option) =>
                  String(option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={
                  supplierNames?.length > 0
                    ? supplierNames.map((supplier: SupplierI) => {
                        return {
                          value: supplier.suppliername,
                          label: supplier.suppliername,
                        };
                      })
                    : []
                }
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Quantity
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="quantity"
                type="number"
                placeholder="Quantity"
                onFocus={handleFocus}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Rate
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="rate"
                type="number"
                placeholder="Rate"
                onFocus={handleFocus}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Amount
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="amount"
                type="number"
                placeholder="Amount"
                disabled
                value={amount}
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
                Save
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="grid2">
        <div className="grid-container2">
          <table>
            <thead>
              <tr className="header2">
                <th>
                  Date<div>Date</div>
                </th>
                <th>
                  Challan No<div>Challan No</div>
                </th>
                <th>
                  Chemical Name<div>Chemical Name</div>
                </th>
                <th>
                  Supplier Name<div>Supplier Name</div>
                </th>
                <th>
                  Quantity<div>Quantity</div>
                </th>
                <th>
                  Rate<div>Rate</div>
                </th>
                <th>
                  Amount<div>Amount</div>
                </th>
                <th>
                  Edit<div>Edit</div>
                </th>
                <th>
                  Delete<div>Delete</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {chemicalPurchasing?.map((item: ChemicalPurchasingI) => (
                <tr key={item._id}>
                  <td width="20%">{item?.date}</td>
                  <td width="15%">{item?.challanno}</td>
                  <td width="15%">{item?.chemicalname}</td>
                  <td width="15%">{item?.suppliername}</td>
                  <td width="15%">{item?.quantity}</td>
                  <td width="15%">{item?.rate}</td>
                  <td width="10%">{item?.amount}</td>
                  <td width="5%">
                    <FaEdit onClick={() => handleEdit(item)} />
                  </td>
                  <td width="5%">
                    <FaTrash onClick={() => handleDelete(item._id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
