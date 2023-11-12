export default function Page() {
  return (
    <div>
      <div className="p-32 bg-blue-800 flex justify-center space-x-6 ">
        <a
          className="bg-red-600 px-8 py-3 rounded text-red-100 hover:bg-red-500 transition duration-300"
          href="#"
        >
          Learn More
        </a>
        <a
          className="bg-orange-600 hover:bg-orange-500 py-3 px-8 rounded-full text-orange-100 transition duration-500"
          href=""
        >
          Login
        </a>
        <a
          className="bg-yellow-600 hover:bg-yellow-700 py-3 px-8 rounded-lg text-yellow-100 border-b-4 border-yellow-700 hover:border-yellow-800 transition duration-300"
          href=""
        >
          Sign Up
        </a>
      </div>

      <div className="p-32 bg-teal-200 flex justify-center text-2xl space-x-8">
        <a
          href="#"
          className="border border-teal-800 hover:border-teal-600 rounded py-4 px-8 bg-transparent font-bold text-teal-800 hover:text-teal-600 transition duration-500 "
        >
          Do it
        </a>
        <a
          href="#"
          className="bg-teal-100 hover:bg-white text-teal-800 rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500"
        >
          Don't do it
        </a>
      </div>

      <div className="p-32 bg-purple-800 flex justify-center space-x-6">
        <div className="flex items-center justify-center text-center">
          <a
            href="#"
            className="bg-purple-600 hover:bg-purple-700 text-purple-200 py-2 w-16 rounded-l transition duration-300"
          >
            👈
          </a>
          <a
            href="#"
            className="bg-purple-600 hover:bg-purple-700 text-purple-200 py-2 w-16 transition duration-300"
          >
            1
          </a>
          <a
            href="#"
            className="bg-purple-600 hover:bg-purple-700 text-purple-200 py-2 w-16 transition duration-300"
          >
            2
          </a>
          <a
            href="#"
            className="bg-purple-600 hover:bg-purple-700 text-purple-200 py-2 w-16 rounded-r transition duration-300"
          >
            👉
          </a>
        </div>

        <a
          href="#"
          className="bg-indigo-400 text-indigo-100 pl-6 rounded-full flex items-center"
        >
          <span className="mr-6">Click this</span>{" "}
          <span className="bg-indigo-500 hover:bg-indigo-700 w-16 h-16 inline-block flex items-center justify-center rounded-full">
            🤜
          </span>
        </a>
      </div>
    </div>
  );
}
