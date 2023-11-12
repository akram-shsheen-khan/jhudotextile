export default function Page() {
  return (
    <div>
      <body className="bg-gray-100 antialiased flex font-sans text-gray-900">
        <form className="px-4 rounded mx-auto max-w-3xl w-full my-32 inputs space-y-6">
          <div>
            <h1 className="text-4xl font-bold">Account Settings</h1>
            <p className="text-gray-600">
              Changes you make will be visible to other users
            </p>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label>First Name</label>
              <input
                className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                type="date"
                name="firstname"
                id="firstname"
              />
            </div>
            <div className="w-1/2">
              <label>Last Name</label>
              <input
                className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                type="text"
                name="lastname"
                id="lastname"
              />
            </div>
          </div>
          <div>
            <label>Current Address</label>
            <input
              className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
              type="text"
              name="address"
              id="address"
            />
            <p className="text-sm text-gray-600">
              We will use this as your billing address
            </p>
          </div>
          <div>
            <label>Budget</label>
            <div className="flex w-1/4">
              <div className="rounded-l flex text-white items-center px-4 bg-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-current"
                  viewBox="0 0 288 512"
                >
                  <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z" />
                </svg>
              </div>
              <input
                min="0"
                step="0.01"
                placeholder="0.00"
                className="border border-gray-400 px-4 py-2 rounded-r w-full focus:outline-none focus:border-teal-400"
                type="number"
                name="budget"
                id="budget"
              />
            </div>
          </div>
        </form>
      </body>
    </div>
  );
}
