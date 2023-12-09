export default function Page() {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-purple-600 pb-48">
        <h2 className="text-4xl text-purple-100 mb-8">
          Tailwind Animation classNameNameNameNamees in 1.6!
        </h2>

        <div className="flex space-x-8 text-3xl">
          <button className="animate-spin inline-block py-4 px-8 bg-yellow-500 text-yellow-100 rounded-lg">
            Spin
          </button>

          <button className="animate-ping inline-block py-4 px-8 bg-blue-500 text-blue-100 rounded-lg">
            Ping
          </button>

          <button className="animate-pulse inline-block py-4 px-8 bg-red-500 text-red-100 rounded-lg">
            Pulse
          </button>

          <button className="animate-bounce inline-block py-4 px-8 bg-teal-500 text-teal-100 rounded-lg">
            Bounce
          </button>
        </div>
      </div>

      <div className="p-10 min-h-screen flex items-center justify-center bg-indigo-900">
        <div className="relative">
          <div className="w-16 h-16 bg-white rounded-lg shadow-2xl"></div>
          <div className="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-green-300 animate-ping"></div>
          <div className="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-green-300"></div>
        </div>
      </div>
    </div>
  );
}
