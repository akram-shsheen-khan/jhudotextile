export default function Page() {
  return (
    <div>
      <body className="bg-blue-500">
        <div className="container mx-auto p-2">
          <div className="max-w-sm mx-auto my-24 bg-white px-5 py-10 rounded shadow-xl">
            <div className="text-center mb-8">
              <h1 className="font-bold text-2xl">Jhudo Textile Industries</h1>
            </div>
            <form action="#">
              <div className="mt-5">
                <label className="font-bold text-lg">Chemical Name</label>
                <input
                  type="text"
                  id="chemicalname"
                  className="block w-full p-2 border rounded border-gray-500"
                />
              </div>
              <div className="mt-5 font-bold text-lg">
                <label>Chemical Description</label>
                <input
                  type="text"
                  id="chemicaldesc"
                  className="block w-full p-2 border rounded border-gray-500"
                />
              </div>
              <div className="mt-10">
                <input
                  type="submit"
                  value="submit"
                  className="py-3 bg-green-500 hover:bg-green-600 rounded text-white text-center w-full"
                />
              </div>
            </form>
          </div>
        </div>
      </body>
    </div>
  );
}
