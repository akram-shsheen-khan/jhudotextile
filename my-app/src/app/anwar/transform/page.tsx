export default function Page() {
  return (
    <div>
      <div>
        <div className="min-h-screen flex flex-wrap justify-around items-center">
          <button className="transform hover:rotate-180 transition duration-500 ease-in-out bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg">
            Rotate Me 180°
          </button>

          <button className="transform hover:scale-150 transition duration-500 ease-in-out bg-orange-600 text-white font-bold py-2 px-4 rounded-lg">
            Scale Me 1.5×
          </button>

          <button className="transform hover:translate-x-20 hover:translate-y-20 transition duration-500 ease-in-out bg-teal-400 text-white font-bold py-2 px-4 rounded-lg">
            Translate Me 5rem
          </button>

          <button className="transform hover:skew-x-12 hover:skew-y-12 transition duration-500 ease-in-out bg-red-400 text-white font-bold py-2 px-4 rounded-lg">
            Skew Me 12°
          </button>
        </div>
      </div>

      <div className="effect">3D-Text with CSS only</div>
    </div>
  );
}
