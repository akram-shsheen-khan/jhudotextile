import { Select } from "antd";
export default function Page() {
  return (
    <div className="mt-5 ml-7 w-4/5 md:ml-32">
      <div className="bg-indigo-500 h-10 rounded-t-lg border border-indigo-500">
        <p className="p-2 text-white text-center w-4/5">My Table - 1</p>
      </div>

      <div>
        <table className="w-full">
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label className="text-red-800 font-bold ">Date</label>
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label className="text-red-800 font-bold ">Lot No</label>
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label className="text-red-800 font-bold ">Party Name</label>
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label className="text-red-800 font-bold ">Color</label>
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionA"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionB"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <select
                className="border rounded p-2 outline-none focus:shadow-outline w-[300px]"
                name="descriptionC"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <select
                className="border rounded p-2 outline-none focus:shadow-outline w-[300px]"
                name="descriptionD"
              />
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label className="text-red-800 font-bold ">Quality</label>
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label className="text-red-800 font-bold ">PO NO</label>
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label className="text-red-800 font-bold ">Process</label>
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label className="text-red-800 font-bold ">Weight Kgo</label>
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <select
                className="border rounded p-2 outline-none focus:shadow-outline w-[300px]"
                name="descriptionA"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <select
                className="border rounded p-2 outline-none focus:shadow-outline w-[300px]"
                name="descriptionA"
              />
            </td>

            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <select
                className="border rounded p-2 outline-none focus:shadow-outline w-[300px]"
                name="descriptionA"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionA"
              />
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label className="text-red-800 font-bold ">
                Half Bleach Cost
              </label>
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label className="text-red-800 font-bold ">Dyes Cost</label>
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label className="text-red-800 font-bold ">
                Dyeing Chemical Cost
              </label>
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label className="text-red-800 font-bold ">
                Total Cost Per Kg
              </label>
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionA"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionB"
              />
            </td>

            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
          </tr>

          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label>Half Bleach Chemical</label>
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label>Quantity</label>
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label>Rate</label>
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label>Amount</label>
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionA"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionB"
              />
            </td>

            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionA"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionB"
              />
            </td>

            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionA"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionB"
              />
            </td>

            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionA"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionB"
              />
            </td>

            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionA"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionB"
              />
            </td>

            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label>Half Bleach Chemical</label>
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label>Quantity</label>
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label>Rate</label>
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label>Amount</label>
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionA"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionB"
              />
            </td>

            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionA"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionB"
              />
            </td>

            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionA"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionB"
              />
            </td>

            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionA"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionB"
              />
            </td>

            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionA"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionB"
              />
            </td>

            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label>Half Bleach Chemical</label>
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label>Quantity</label>
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label>Rate</label>
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <label>Amount</label>
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionA"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionB"
              />
            </td>

            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionA"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionB"
              />
            </td>

            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionA"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionB"
              />
            </td>

            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionA"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionB"
              />
            </td>

            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionA"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionB"
              />
            </td>

            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionA"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionB"
              />
            </td>

            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionA"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionB"
              />
            </td>

            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
          </tr>
          <tr>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionA"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionB"
              />
            </td>

            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
            <td className="pl-1 border-l border-r border-b border-indigo-500">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="descriptionC"
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
