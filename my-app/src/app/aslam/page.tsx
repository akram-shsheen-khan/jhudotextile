export default function Page() {
  return (
    <div>
      <div className=" container mx-auto flex justify-center items-center lg:px-20 md:px-14 sm:px-8 bg-gray-200 py-12 h-full">
        <div className="grid lg:grid-cols-3 grid-col-1">
          <div className="bg-red-500 px-9 py-14">
            <h1 className="text-3xl text-white font-medium">Lets Touch Me</h1>
            <p className="py-2 text-base text-gray-100">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit tdit
              rrum?
            </p>
            <div className="location mt-7">
              <div className="flex my-4 items-center">
                <span className="border-2 border-solid border-b-gray-100 p-4 rounded-full w-10 h-10 flex mr-3 justify-center items-center">
                  <i className="fa-solid fa-location-dot text-gray-200"></i>
                </span>
              </div>
              <div className="flex my-4 items-center">
                <span className="border-2 border-solid border-b-gray-100 p-4 rounded-full w-10 h-10 flex mr-3 justify-center items-center">
                  <i className="fa-solid fa-phone text-gray-200"></i>
                </span>
                <span className="text-gray-100">Phone: 92 314 4878266</span>
              </div>
              <div className="flex my-4 items-center">
                <span className="border-2 border-solid border-b-gray-100 p-4 rounded-full w-10 h-10 flex mr-3 justify-center items-center">
                  <i className="fa-solid fa-envelope text-gray-200"></i>
                </span>
                <span className="text-gray-100">Email: info@gmail.com</span>
              </div>
              <div className="flex my-4 items-center">
                <span className="border-2 border-solid border-b-gray-100 p-4 rounded-full w-10 h-10 flex mr-3 justify-center items-center">
                  <i className="fa-brands fa-chrome text-gray-200"></i>
                </span>
                <span className="text-gray-100">Website: yoursite.com</span>
              </div>
            </div>
          </div>
          <div className="bg-white col-span-2 py-14 lg:px-10 px-8">
            <h2 className="text-3xl font-medium">Get in touch</h2>
            <div className="grid md:grid-cols-2 grid-col-1 gap-4">
              <div className="flex flex-col py-4">
                <label className="text-base font-medium">First Name</label>
                <input
                  type="text"
                  className="outline-none border-b-2 border-solid focus:border-red-400 transition-all"
                />
              </div>
              <div className="flex flex-col py-4">
                <label className="text-base font-medium">Last Name</label>
                <input
                  type="text"
                  className="outline-none border-b-2 border-solid focus:border-red-400 transition-all"
                />
              </div>
              <div className="flex flex-col py-4">
                <label className="text-base font-medium">First Name</label>
                <input
                  type="text"
                  className="outline-none border-b-2 border-solid focus:border-red-400 transition-all"
                />
              </div>
              <div className="flex flex-col py-4">
                <label className="text-base font-medium">Last Name</label>
                <input
                  type="text"
                  className="outline-none border-b-2 border-solid focus:border-red-400 transition-all"
                />
              </div>
            </div>
            <div className="flex flex-col py-4">
              <label className="text-base font-medium">Email</label>
              <input
                type="text"
                className="outline-none border-b-2 border-solid focus:border-red-400 transition-all"
              />
            </div>

            <a
              href=""
              className="bg-red-400 px-8 py-3 rounded-md text-white hover:bg-white hover:text-red-400 border-2 border-solid border-red-400 transition-all"
            >
              Submit Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
