export default function page() {
  return (
    <div>
      <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-4 text-emerald-600">Author</th>
              <th className="px-4 py-4 text-emerald-600">Views</th>
              <th className="px-4 py-4 text-emerald-600">Views</th>
              <th className="px-4 py-4 text-emerald-600">Views</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                Adam
              </td>
              <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                858
              </td>
              <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                858
              </td>
              <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                858
              </td>
            </tr>
            <tr className="bg-emerald-200">
              <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                Adam
              </td>
              <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                112
              </td>
              <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                858
              </td>
              <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                858
              </td>
            </tr>
            <tr>
              <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                Chris
              </td>
              <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                1,280
              </td>
              <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                858
              </td>
              <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                858
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
