"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { CustomerI } from "../types/interface/customerName";
import { toast } from "react-toastify";
import { handleFocus } from "../../utils/globalFunctions";

export default function Page() {
  const [customername, setCustomername] = useState<string>("");
  const [code, setCode] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  const [customers, setCustomers] = useState<Array<CustomerI>>([]);
  const [onEdit, setOnEdit] = useState<CustomerI | null>(null);

  const onFinish = () => {
    if (onEdit) {
      axios
        .put("http://localhost:3000/api/customername", {
          id: onEdit._id,
          payload: {
            customername,
            code,
            description,
          },
        })
        .then(({ data }) => {
          toast.success(data);
          getCustomers();
        })
        .catch(({ data }) => toast.error(data));
    } else {
      axios
        .post("http://localhost:3000/api/customername", {
          customername,
          code,
          description,
        })
        .then(({ data }) => {
          toast.success(data);
          console.log(data);
          getCustomers();
        })
        .catch(({ data }) => {
          toast.error(data);
        });
    }
    setOnEdit(null);
    setCode(0);
    setDescription("");
    setCustomername("");
  };
  const handleEdit = (item: any) => {
    setOnEdit(item);
  };
  const handleDelete = async (id: string) => {
    axios
      .patch(`http://localhost:3000/api/customername`, { id })
      .then(({ data }) => {
        toast.success(data);
        getCustomers();
        console.log(data);
      })
      .catch(({ data }) => {
        toast.error(data);
      });

    setOnEdit(null);
    setCode(0);
    setDescription("");
    setCustomername("");
  };

  useEffect(() => {
    if (onEdit) {
      setCustomername(onEdit.customername);
      setCode(onEdit.code);
      setDescription(onEdit.description);
    }
  }, [onEdit]);
  const getCustomers = async () => {
    try {
      // let res = await axios.get("http://localhost:3000/api/customername");
      fetch("http://localhost:3000/api/customername")
        .then((res) => res.json())
        .then((data) => {
          setCustomers(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getCustomers();
  }, []);
  return (
    <div>
      <body className="antialiased bg-gray-200 text-gray-900 font-sans">
        <div className="flex items-start">
          <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
            <span className="block w-full text-2xl text-red-800 text-center uppercase font-bold mb-4">
              Customer Name Form
            </span>
            <form className="mb-4">
              <div className="mb-0 md:w-full">
                <label className="block text-xl text-green-800 font-semibold mb-1">
                  Customer name
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="customername"
                  id="customername"
                  placeholder="Chemical Name"
                  value={customername}
                  onChange={(e) => {
                    setCustomername(e.target.value);
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
                    <div>Customer Name</div>
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
                {customers?.map((item: any, i: any) => (
                  <tr key={i}>
                    <td width="30%">{item?.customername}</td>
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
