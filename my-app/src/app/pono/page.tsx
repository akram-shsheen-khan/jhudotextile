"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { PonoI } from "../types/interface/pono";
import { toast } from "react-toastify";
import { handleFocus } from "../utils/globalFunctions";

export default function Page() {
  const [pono, setPono] = useState<string>("");
  const [code, setCode] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  const [ponos, setPonos] = useState<Array<PonoI>>([]);
  const [onEdit, setOnEdit] = useState<PonoI | null>(null);

  const onFinish = () => {
    if (onEdit) {
      axios
        .put("http://localhost:3000/api/pono", {
          id: onEdit._id,
          payload: {
            pono,
            code,
            description,
          },
        })
        .then(({ data }) => {
          toast.success(data);
          getPonos();
        })
        .catch(({ data }) => toast.error(data));
    } else {
      axios
        .post("http://localhost:3000/api/pono", {
          pono,
          code,
          description,
        })
        .then(({ data }) => {
          toast.success(data);
          console.log(data);
          getPonos();
        })
        .catch(({ data }) => {
          toast.error(data);
        });
    }
    setOnEdit(null);
    setCode(0);
    setDescription("");
    setPono("");
  };
  const handleEdit = (item: any) => {
    setOnEdit(item);
  };
  const handleDelete = async (id: string) => {
    axios
      .patch(`http://localhost:3000/api/pono`, { id })
      .then(({ data }) => {
        toast.success(data);
        getPonos();
        console.log(data);
      })
      .catch(({ data }) => {
        toast.error(data);
      });

    setOnEdit(null);
    setCode(0);
    setDescription("");
    setPono("");
  };

  useEffect(() => {
    if (onEdit) {
      setPono(onEdit.pono);
      setCode(onEdit.code);
      setDescription(onEdit.description);
    }
  }, [onEdit]);
  const getPonos = async () => {
    try {
      fetch("http://localhost:3000/api/pono")
        .then((res) => res.json())
        .then((data) => {
          setPonos(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getPonos();
  }, []);
  return (
    <div>
      <body className="antialiased bg-gray-200 text-gray-900 font-sans">
        <div className="flex items-start">
          <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
            <span className="block w-full text-2xl text-red-800 text-center uppercase font-bold mb-4">
              PONO Form
            </span>
            <form className="mb-4">
              <div className="mb-0 md:w-full">
                <label className="block text-xl text-green-800 font-semibold mb-1">
                  Pono
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="pono"
                  id="pono"
                  placeholder="Pono"
                  value={pono}
                  onChange={(e) => {
                    setPono(e.target.value);
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
                    <div>PONO</div>
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
                {ponos?.map((item: any, i: any) => (
                  <tr key={i}>
                    <td width="30%">{item?.pono}</td>
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
