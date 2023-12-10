"use client";
import { publicAPI } from "../../../config/constants";
import { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { PartyI } from "../../types/interface/partyName";
import { toast } from "react-toastify";
import { handleFocus } from "../../../utils/globalFunctions";
import withAuth from "@/utils/withAuth";

const Page = () => {
  const [partyname, setPartyName] = useState<string>("");
  const [code, setCode] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  const [parties, setParties] = useState<Array<PartyI>>([]);
  const [onEdit, setOnEdit] = useState<PartyI | null>(null);

  const onFinish = () => {
    if (onEdit) {
      publicAPI
        .put(`/partyname`, {
          id: onEdit._id,
          payload: {
            partyname,
            code,
            description,
          },
        })
        .then(({ data }) => {
          toast.success(data);
          getParties();
        })
        .catch(({ data }) => toast.error(data));
    } else {
      publicAPI
        .post(`/partyname`, {
          partyname,
          code,
          description,
        })
        .then(({ data }) => {
          toast.success(data);
          console.log(data);
          getParties();
        })
        .catch(({ data }) => {
          toast.error(data);
        });
    }
    setOnEdit(null);
    setCode(0);
    setDescription("");
    setPartyName("");
  };
  const handleEdit = (item: any) => {
    setOnEdit(item);
  };
  const handleDelete = async (id: string) => {
    publicAPI
      .patch(`/partyname`, { id })
      .then(({ data }) => {
        toast.success(data);
        getParties();
        console.log(data);
      })
      .catch(({ data }) => {
        toast.error(data);
      });

    setOnEdit(null);
    setCode(0);
    setDescription("");
    setPartyName("");
  };

  useEffect(() => {
    if (onEdit) {
      setPartyName(onEdit.partyname);
      setCode(onEdit.code);
      setDescription(onEdit.description);
    }
  }, [onEdit]);
  const getParties = async () => {
    try {
      publicAPI
        .get(`/partyname`)

        .then(({ data }) => {
          setParties(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getParties();
  }, []);
  return (
    <div>
      <div className="flex items-start">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-2xl text-red-800 text-center uppercase font-bold mb-4">
            Party Name Form
          </span>
          <form className="mb-4">
            <div className="mb-0 md:w-full">
              <label className="block text-xl text-green-800 font-semibold mb-1">
                Party name
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="partyname"
                id="partyname"
                placeholder="Party Name"
                value={partyname}
                onChange={(e) => {
                  setPartyName(e.target.value);
                }}
              />
            </div>
            <div className="mb-6 md:w-full">
              <label className="block text-xl text-green-800 font-semibold mb-1">
                Code
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
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
                Description
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
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
                  <th className="bg-red-700 text-white py-4">Description</th>
                  <th className="bg-red-700 text-white py-4">Edit</th>
                  <th className="bg-red-700 text-white py-4">Delete</th>
                </tr>
              </thead>
              <tbody>
                {parties?.map((item: any, i: any) => (
                  <tr key={i}>
                    <td width="30%">{item?.partyname}</td>
                    <td width="20%">{item?.code}</td>
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
