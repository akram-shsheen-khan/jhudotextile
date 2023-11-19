export default function Page() {
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
                placeholder="Date"
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Challan No
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="challanno"
                type="text"
                placeholder="Challan No"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Dyes Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="dyesname"
                type="text"
                placeholder="Dyes Name"
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Supplier Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="suppliername"
                type="text"
                placeholder="Supplier Name"
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
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
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
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="flex justify-between w-full px-3">
              <button
                className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                Submit
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
                  Dyes Name<div>Dyes Name</div>
                </th>
                <th>
                  Supplier Name<div>Supplier Name</div>
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
    </div>
  );
}
