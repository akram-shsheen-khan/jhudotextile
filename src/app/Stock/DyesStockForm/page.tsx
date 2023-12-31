"use client";
import { publicAPI } from "../../../config/constants";
import { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { DyesStockI } from "../../types/interface/DyesStock";
import { toast } from "react-toastify";
import { handleFocus } from "../../../utils/globalFunctions";
import withAuth from "@/utils/withAuth";
import { DyesI } from "@/app/types/interface/dyesName";
import { Select } from "antd";

const Page = () => {
  const [date, setDate] = useState<string>("");
  const [code, setCode] = useState<number>(0);
  const [quantity, setQuantity] = useState<Number>(0);
  const [dyesname, setDyeName] = useState<string>("");
  const [dyesNames, setDyeNames] = useState<Array<DyesI>>([]);
  const [dyesStock, setDyeStock] = useState<Array<DyesStockI>>([]);
  const [onEdit, setOnEdit] = useState<DyesStockI | null>(null);

  const getDyes = async () => {
    try {
      publicAPI
        .get(`/dyesname`)

        .then(({ data }) => {
          setDyeNames(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };
  const getDyeStock = async () => {
    try {
      publicAPI
        .get(`/stock/dyesStockForm`)

        .then(({ data }) => {
          setDyeStock(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };
  const onFinish = () => {
    if (onEdit) {
      publicAPI
        .put(`/stock/dyesStockForm`, {
          id: onEdit._id,
          payload: {
            date,
            dyesname,
            code,
            quantity,
          },
        })
        .then(({ data }) => {
          toast.success(data);
          getDyeStock();
        })
        .catch(({ data }) => toast.error(data));
    } else {
      publicAPI
        .post(`/stock/dyesStockForm`, {
          date,
          dyesname,
          code,
          quantity,
        })
        .then(({ data }) => {
          toast.success(data);
          console.log(data);
          getDyeStock();
        })
        .catch(({ data }) => {
          toast.error(data);
        });
    }
    setOnEdit(null);
    setDate("");
    setCode(0);
    setQuantity(0);
    setDyeName("");
  };
  const handleEdit = (item: any) => {
    setOnEdit(item);
  };
  const handleDelete = async (id: string) => {
    publicAPI
      .patch(`/stock/dyesStockForm`, { id })
      .then(({ data }) => {
        toast.success(data);
        getDyeStock();
        console.log(data);
      })
      .catch(({ data }) => {
        toast.error(data);
      });

    setOnEdit(null);
    setDate("");
    setCode(0);
    setQuantity(0);
    setDyeName("");
  };

  useEffect(() => {
    if (onEdit) {
      setDate(onEdit.date);
      setDyeName(onEdit.dyesname);
      setCode(onEdit.code);
      setQuantity(onEdit.quantity);
    }
  }, [onEdit]);

  useEffect(() => {
    getDyes();
    getDyeStock();
  }, []);
  const onChangeDye = (value: string) => {
    console.log(`selected ${value}`);
    setDyeName(value);

    const selectedDye = dyesNames.find((dyes) => dyes.dyesname === value);

    setCode(Number(selectedDye?.code));
  };
  return (
    <div>
      <div className="flex items-start">
        <div className="w-full bg-white rounded shadow-2xl p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full h-8 bg-black text-2xl text-white text-center uppercase font-bold mb-4">
            Stock Entry Form
          </span>
          <form className="mb-4">
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
            <div className="mb-0 md:w-full">
              <label className="block text-xl text-green-800 font-semibold mb-1">
                Dye name
              </label>
              <Select
                className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-4 leading-tight focus:outline-none focus:bg-green-100 md:w-[350px] h-11"
                showSearch
                placeholder="Select a dyes"
                value={dyesname}
                optionFilterProp="children"
                onChange={onChangeDye}
                filterOption={(input, option) =>
                  String(option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={
                  dyesNames?.length > 0
                    ? dyesNames.map((dyes: DyesI, idx: Number) => {
                        return {
                          key: idx,
                          value: dyes.dyesname,
                          label: dyes.dyesname,
                        };
                      })
                    : []
                }
              />
            </div>

            <div className="mb-6 md:w-full">
              <label className="block text-xl text-green-800 font-semibold mb-1">
                Quantity
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                name="description"
                id="quantity"
                onFocus={handleFocus}
                placeholder="Quantity"
                value={Number(quantity)}
                onChange={(e) => {
                  setQuantity(Number(e.target.value));
                }}
              />
            </div>
            <button
              onClick={onFinish}
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="h-full w-9/12 bg-slate-400 shadow-2xl mx-auto">
        <div className="h-60 w-full grid gap-2 p-2 grid-cols-2 grid-rows-2">
          <div className="col-span-2 row-span-2 rounded-xl bg-white overflow-auto">
            <table className="table-auto w-full">
              <thead className="sticky top-0 bg-gray-700 text-white">
                <tr>
                  <th className="bg-red-700 text-white py-4">Date</th>
                  <th className="bg-red-700 text-white py-4">Dye Name</th>
                  <th className="bg-red-700 text-white py-4">Code</th>
                  <th className="bg-red-700 text-white py-4">Quantity</th>
                  <th className="bg-red-700 text-white py-4">Edit</th>
                  <th className="bg-red-700 text-white py-4">Delete</th>
                </tr>
              </thead>
              <tbody>
                {dyesStock?.map((item: any, i: any) => (
                  <tr key={i}>
                    <td width="30%">{item?.date}</td>
                    <td width="30%">{item?.dyesname}</td>
                    <td width="20%">{item?.code}</td>
                    <td width="20%">{item?.quantity}</td>
                    <td width="10%">
                      <FaEdit onClick={() => handleEdit(item)} />
                    </td>
                    <td width="10%">
                      <FaTrash onClick={() => handleDelete(item._id)} />
                    </td>
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
