"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { ChemicalI } from "../types/interface/chemicalName";
import { toast } from "react-toastify";
import { handleFocus } from "../utils/globalFunctions";

export default function Page() {
  const [chemicalname, setchemicalname] = useState<string>("");
  const [code, setCode] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  const [chemicals, setChemicals] = useState<Array<ChemicalI>>([]);
  const [onEdit, setOnEdit] = useState<ChemicalI | null>(null);

  const onFinish = () => {
    if (onEdit) {
      axios
        .put("http://localhost:3000/api/chemicalname", {
          id: onEdit._id,
          payload: {
            chemicalname,
            code,
            description,
          },
        })
        .then(({ data }) => {
          toast.success(data);
          getChemicals();
        })
        .catch(({ data }) => toast.error(data));
    } else {
      axios
        .post("http://localhost:3000/api/chemicalname", {
          chemicalname,
          code,
          description,
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
    setDescription("");
    setchemicalname("");
  };
  const handleEdit = (item: any) => {
    setOnEdit(item);
  };
  const handleDelete = async (id: string) => {
    axios
      .patch(`http://localhost:3000/api/chemicalname`, { id })
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
    setDescription("");
    setchemicalname("");
  };

  useEffect(() => {
    if (onEdit) {
      setchemicalname(onEdit.chemicalname);
      setCode(onEdit.code);
      setDescription(onEdit.description);
    }
  }, [onEdit]);
  const getChemicals = async () => {
    try {
      // let res = await axios.get("http://localhost:3000/api/chemicalname");
      fetch("http://localhost:3000/api/chemicalname")
        .then((res) => res.json())
        .then((data) => {
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
      <body className="antialiased bg-gray-200 text-gray-900 font-sans">
        <div className="flex items-start">
          <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
            <span className="block w-full text-2xl text-red-800 text-center uppercase font-bold mb-4">
              Chemical Name Form
            </span>
            <form className="mb-4">
              <div className="mb-0 md:w-full">
                <label className="block text-xl text-green-800 font-semibold mb-1">
                  Chemical name
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
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

        <div className="grid2">
          <div className="grid-container2">
            <table>
              <thead>
                <tr className="header2">
                  <th>
                    <div>Chemical Name</div>
                  </th>
                  <th>
                    <div>Code</div>
                  </th>
                  <th>
                    <div>Description</div>
                  </th>
                  <th>
                    <div>Edit</div>
                  </th>
                  <th>
                    <div>Delete</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {chemicals?.map((item: any, i: any) => (
                  <tr key={i}>
                    <td width="30%">{item?.chemicalname}</td>
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
      </body>
    </div>
  );
}
