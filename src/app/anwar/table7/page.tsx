export default function Page() {
  return (
    <div>
      <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
        <table className="table-fixed">
          <thead>
            <tr>
              <th className="px-4 py-2 text-emerald-600">Song</th>
              <th className="px-4 py-2 text-emerald-600">Artist</th>
              <th className="px-4 py-2 text-emerald-600">Year</th>
              <th className="px-4 py-2 text-emerald-600">Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
              <td>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="description"
                  id="description"
                  placeholder="A"
                />
              </td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
              <td>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="description"
                  id="description"
                  placeholder="C"
                />
              </td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
              <td>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="description"
                  id="description"
                  placeholder="D"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
