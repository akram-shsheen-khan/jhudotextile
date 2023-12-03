import custom from "./custom.module.css";

export default function Page() {
  return (
    <div className="bg-cyan-900 flex justify-center items-center h-screen">
      <h1>Akram Shaheen</h1>
      <table className="shadow-2xl border-2 border-cyan-200 w-6/12 overflow-hidden">
        <thead className="text-white">
          <tr>
            <th className="py-3 bg-cyan-800 "> Date</th>
            <th className="py-3 bg-cyan-800 text-white ">Chemical Name</th>
            <th className="py-3 bg-cyan-800 text-white ">Dyes Name</th>
            <th className="py-3 bg-cyan-800 text-white">Process</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-cyan-400 cursor-pointer duration-300 hover:bg-cyan-100 hover:scale-105">
            <td className="py-3 px-6">500</td>
            <td className="py-3 px-6">1000</td>
            <td className="py-3 px-6">2200</td>
            <td className="py-3 px-6">3300</td>
          </tr>
          <tr className="bg-cyan-600 cursor-pointer duration-300 hover:bg-cyan-100 hover:scale-105">
            <td className="py-3 px-6">500</td>
            <td className="py-3 px-6">1000</td>
            <td className="py-3 px-6">2200</td>
            <td className="py-3 px-6">3300</td>
          </tr>
          <tr className="bg-cyan-400 cursor-pointer duration-300 hover:bg-cyan-100 hover:scale-105">
            <td className="py-3 px-6">500</td>
            <td className="py-3 px-6">1000</td>
            <td className="py-3 px-6">2200</td>
            <td className="py-3 px-6">3300</td>
          </tr>
          <tr className="bg-cyan-600 cursor-pointer duration-300 hover:bg-cyan-100 hover:scale-105">
            <td className="py-3 px-6">500</td>
            <td className="py-3 px-6">1000</td>
            <td className="py-3 px-6">2200</td>
            <td className="py-3 px-6">3300</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
