"use client";
import axios from "axios";
import { useState } from "react";
export default function Page() {
  const [suppliername, setsuppliername] = useState<any>("");
  const [code, setCode] = useState<any>("");
  const [description, setDescription] = useState<any>("");

  const onFinish = () => {
    console.log({
      suppliername,
      code,
      description,
    });
    axios
      .post("http://localhost:3000/api/suppliername", {
        suppliername,
        code,
        description,
      })
      .then((result) => {
        setCode("");
        setDescription("");
        setsuppliername("");
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <body className="antialiased bg-gray-200 text-gray-900 font-sans">
        <div className="flex items-start h-screen w-full">
          <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
            <span className="block w-full text-2xl uppercase font-bold mb-4">
              Supplier Name Form
            </span>
            <form className="mb-4">
              <div className="mb-4 md:w-full">
                <label className="block text-xl font-semibold mb-1">
                  Supplier name
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="suppliername"
                  id="suppliername"
                  value={suppliername}
                  placeholder="Supplier Name"
                  onChange={(e) => {
                    setsuppliername(e.target.value);
                  }}
                />
              </div>
              <div className="mb-6 md:w-full">
                <label className="block text-xl font-semibold mb-1">Code</label>
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
                <label className="block text-xl font-semibold mb-1">
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

        <div className="grid2" style={{ marginTop: "-250px" }}>
          <div className="grid-container2">
            <table>
              <thead>
                <tr className="header2">
                  <th>
                    Chemical Name<div>Chemical Name</div>
                  </th>
                  <th>
                    Code<div>Code</div>
                  </th>
                  <th>
                    Description<div>Description</div>
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
                <tr>
                  <td>Suresh Dasari</td>
                  <td>B.Tech</td>
                  <td>Chennai</td>
                  <td>Chennai</td>
                  <td>Hydrogen</td>
                </tr>
                <tr>
                  <td>Rohini Dasari</td>
                  <td>Msc</td>
                  <td>Chennai</td>
                  <td>Chennai</td>
                  <td>Hydrogen</td>
                </tr>
                <tr>
                  <td>Madhav Sai</td>
                  <td>MBA</td>
                  <td>Nagpur</td>
                  <td>Chennai</td>
                  <td>Hydrogen</td>
                </tr>
                <tr>
                  <td>Praveen Kumar</td>
                  <td>B.Tech</td>
                  <td>Guntur</td>
                  <td>Chennai</td>
                  <td>Hydrogen</td>
                </tr>
                <tr>
                  <td>Mahendra Dasari</td>
                  <td>CA</td>
                  <td>Chennai</td>
                  <td>Chennai</td>
                  <td>Hydrogen</td>
                </tr>
                <tr>
                  <td>Nagaraju Dasari</td>
                  <td>MCA</td>
                  <td>USA</td>
                  <td>Chennai</td>
                  <td>Hydrogen</td>
                </tr>
                <tr>
                  <td>Sateesh Alavala</td>
                  <td>MD</td>
                  <td>Vizag</td>
                  <td>Chennai</td>
                  <td>Hydrogen</td>
                </tr>
                <tr>
                  <td>Sudheer</td>
                  <td>B.Tech</td>
                  <td>Kakinada</td>
                  <td>Chennai</td>
                  <td>Hydrogen</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </body>
    </div>
  );
}
