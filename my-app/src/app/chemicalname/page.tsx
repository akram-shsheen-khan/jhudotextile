"use client";
import axios from "axios";
import { useState } from "react";
export default function Page() {
  const [chemicalname, setchemicalname] = useState<any>("");
  const [code, setCode] = useState<any>("");
  const [description, setDescription] = useState<any>("");

  const onFinish = () => {
    console.log({
      chemicalname,
      code,
      description,
    });
    axios
      .post("http://localhost:3000/api/chemicalname", {
        chemicalname,
        code,
        description,
      })
      .then((result) => {
        setCode("");
        setDescription("");
        setchemicalname("");
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <body className="antialiased bg-gray-200 text-gray-900 font-sans">
        <div className="flex items-center h-screen w-full">
          <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
            <span className="block w-full text-xl uppercase font-bold mb-4">
              Chemical Form
            </span>
            <form className="mb-4">
              <div className="mb-4 md:w-full">
                <label className="block text-xs mb-1">chemical name</label>
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
                <label className="block text-xs mb-1">Code</label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="number"
                  name="code"
                  id="code"
                  placeholder="Code"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                />
              </div>
              <div className="mb-6 md:w-full">
                <label className="block text-xs mb-1">Description</label>
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
      </body>
    </div>
  );
}
