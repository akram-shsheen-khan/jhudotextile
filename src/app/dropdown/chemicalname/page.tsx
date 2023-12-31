"use client";
import { publicAPI } from "../../../config/constants";
import { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { ChemicalI } from "../../types/interface/chemicalName";
import { toast } from "react-toastify";
import { handleFocus } from "../../../utils/globalFunctions";
import withAuth from "@/utils/withAuth";

const Page = () => {
  const [chemicalname, setchemicalname] = useState<string>("");
  const [code, setCode] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  const [chemicals, setChemicals] = useState<Array<ChemicalI>>([]);
  const [onEdit, setOnEdit] = useState<ChemicalI | null>(null);

  const onFinish = () => {
    if (onEdit) {
      publicAPI
        .put(`/chemicalname`, {
          id: onEdit._id,
          payload: {
            chemicalname,
            code,
            description,
            rate,
          },
        })
        .then(({ data }) => {
          toast.success(data);
          getChemicals();
        })
        .catch(({ data }) => toast.error(data));
    } else {
      publicAPI
        .post(`/chemicalname`, {
          chemicalname,
          code,
          description,
          rate,
        })
        .then(({ data }) => {
          toast.success(data);
          console.log(data);
          getChemicals();
        })
        .catch(({ data }) => {
          toast.error(data);
        });
    }
    setOnEdit(null);
    setCode(0);
    setRate(0);
    setDescription("");
    setchemicalname("");
  };
  const handleEdit = (item: any) => {
    setOnEdit(item);
  };
  const handleDelete = async (id: string) => {
    publicAPI
      .patch(`/chemicalname`, { id })
      .then(({ data }) => {
        toast.success(data);
        getChemicals();
        console.log(data);
      })
      .catch(({ data }) => {
        toast.error(data);
      });

    setOnEdit(null);
    setCode(0);
    setRate(0);
    setDescription("");
    setchemicalname("");
  };

  useEffect(() => {
    if (onEdit) {
      setchemicalname(onEdit.chemicalname);
      setCode(onEdit.code);
      setRate(onEdit.rate);
      setDescription(onEdit.description);
    }
  }, [onEdit]);
  const getChemicals = async () => {
    try {
      // let res = await publicAPI.get(`/chemicalname");
      publicAPI
        .get(`/chemicalname`)

        .then(({ data }) => {
          setChemicals(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getChemicals();
  }, []);
  return (
    <div>
      <div className="flex items-start">
        <div className="w-full bg-white rounded shadow-2xl p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full h-8 bg-black text-2xl text-white text-center uppercase font-bold mb-4">
            Chemical Name Form
          </span>
          <form className="mb-4">
            <div className="mb-0 md:w-full">
              <label className="block text-xl text-green-800 font-semibold mb-1">
                Chemical name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="chemicalname"
                id="chemicalname"
                placeholder="Chemical Name"
                value={chemicalname}
                onChange={(e) => {
                  setchemicalname(e.target.value);
                }}
              />
            </div>
            <div className="mb-6 md:w-full">
              <label className="block text-xl text-green-800 font-semibold mb-1">
                Code
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                name="code"
                id="code"
                onFocus={handleFocus}
                placeholder="Code"
                value={code}
                onChange={(e) => {
                  setCode(Number(e.target.value));
                }}
              />
            </div>
            <div className="mb-6 md:w-full">
              <label className="block text-xl text-green-800 font-semibold mb-1">
                Rate
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                name="rate"
                id="rate"
                onFocus={handleFocus}
                placeholder="Rate"
                value={rate}
                onChange={(e) => {
                  setRate(Number(e.target.value));
                }}
              />
            </div>
            <div className="mb-6 md:w-full">
              <label className="block text-xl text-green-800 font-semibold mb-1">
                Description
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="description"
                id="description"
                placeholder="Description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
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
                  <th className="bg-red-700 text-white py-4">Chemical Name</th>
                  <th className="bg-red-700 text-white py-4">Code</th>
                  <th className="bg-red-700 text-white py-4">Rate</th>
                  <th className="bg-red-700 text-white py-4">Description</th>
                  <th className="bg-red-700 text-white py-4">Edit</th>
                  <th className="bg-red-700 text-white py-4">Delete</th>
                </tr>
              </thead>
              <tbody>
                {chemicals?.map((item: any, i: any) => (
                  <tr key={i}>
                    <td width="30%">{item?.chemicalname}</td>
                    <td width="20%">{item?.code}</td>
                    <td width="20%">{item?.rate}</td>
                    <td width="20%">{item?.description}</td>
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
