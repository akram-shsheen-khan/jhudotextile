export default function Page() {
  return (
    <div>
      <div className="contact-1 py-4 md:py-12">
        <div className="container mx-auto px-4">
          <div className="xl:flex -mx-4">
            <div className="xl:w-10/12 xl:mx-auto px-4">
              <div className="md:flex md:-mx-4 mt-4 md:mt-10 justify-center">
                <div className="md:w-2/3 md:px-4">
                  <div className="contact-form">
                    <div className="sm:flex sm:flex-wrap -mx-3">
                      <div className="sm:w-1/2 px-3 mb-6">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                        />
                      </div>
                      <div className="sm:w-1/2 px-3 mb-6">
                        <input
                          type="text"
                          placeholder="Company Name"
                          className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                        />
                      </div>
                      <div className="sm:w-1/2 px-3 mb-6">
                        <input
                          type="text"
                          placeholder="E-mail address"
                          className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                        />
                      </div>
                      <div className="sm:w-1/2 px-3 mb-6">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                        />
                      </div>
                      <div className="sm:w-1/2 px-3 mb-6">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                        />
                      </div>
                      <div className="sm:w-1/2 px-3 mb-6">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                        />
                      </div>
                      <div className="sm:w-1/2 px-3 mb-6">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                        />
                      </div>
                    </div>
                    <div className="text-right mt-4 md:mt-12">
                      <button className="border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                        Send a Message
                        <i className="fas fa-chevron-right ml-2 text-sm"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
