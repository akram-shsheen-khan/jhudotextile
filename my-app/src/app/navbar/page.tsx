export default function page() {
  return (
    <div>
      <body>
        <nav className="bg-black text-white">
          <ul className="px-4">
            <li>
              <a className="block py-2 text-3xl">Trek </a>
            </li>
          </ul>
          <ul className="px-4">
            <li>
              <button className="block py-2 hasSubMenu">
                Company{" "}
                <span className="inline-block">
                  <svg
                    data-baseweb="icon"
                    viewBox="0 0 24 24"
                    className="ml-1 w-4 h-4 fill-current chevron"
                  >
                    <title>Chevron Down</title>
                    <path
                      transform="rotate(270, 12, 12)"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7071C13.6834 17.0976 14.3166 17.0976 14.7071 16.7071C15.0976 16.3166 15.0976 15.6834 14.7071 15.2929L11.4142 12L14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z"
                    ></path>
                  </svg>{" "}
                </span>{" "}
              </button>
              <ul className="bg-black text-sm subMenu hidden">
                <li>
                  <a href="#" className="block py-2 ml-3">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 ml-3">
                    Investor Relations{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 ml-3">
                    Careers{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="block py-2">
                Features{" "}
              </a>
            </li>
            <li>
              <a href="#" className="block py-2">
                Download{" "}
              </a>
            </li>
            <li>
              <a href="#" className="block py-2">
                FAQ{" "}
              </a>
            </li>
          </ul>
        </nav>
      </body>
    </div>
  );
}
