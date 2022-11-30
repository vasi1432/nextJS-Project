const Aside = () => {
  return (
    <div className="w-64 flex flex-col	gap-3 fixed right-0 top-36 p-4 border-2 ">
      <div className="top">
        <span className="text-gray-500 ">Quick Start Guide</span>
        <ul className="bg-white flex flex-col p-3 rounded-lg shadow-md space-y-2">
          <li className="flex-1">
            <button
              type="button"
              className="bg-white hover:bg-gray-100 w-full flex items-center p-2 rounded space-x-3 focus:outline-none"
              aria-label="Creating Shortcuts"
            >
              <span className="flex-shrink-0">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border  border-gray-300 group-hover:border-gray-400 ">
                  <span className="text-xxs font-medium text-gray-400 group-hover:text-gray-500">
                    1
                  </span>
                </span>
              </span>
              <span className="text-gray-500 ">Creating Shortcuts</span>
            </button>
          </li>
          <li className="flex-1">
            <button
              type="button"
              className="bg-white hover:bg-gray-100 w-full flex items-center p-3 rounded space-x-3 focus:outline-none"
            >
              <span className="flex-shrink-0">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border  border-gray-300 group-hover:border-gray-400 ">
                  <span className="  text-gray-400 group-hover:text-gray-500">
                    2
                  </span>
                </span>
              </span>
              <span className="text-gray-500 ">Creating Snippets</span>
            </button>
          </li>
          <li className="flex-1">
            <button
              type="button"
              className="bg-white hover:bg-gray-100 w-full flex items-center p-2 rounded space-x-3 focus:outline-none"
              aria-label="Finding Shortcuts"
            >
              <span className="flex-shrink-0">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border  border-gray-300 group-hover:border-gray-400 ">
                  <span className="text-xxs font-medium text-gray-400 group-hover:text-gray-500">
                    3
                  </span>
                </span>
              </span>
              <span className="text-gray-500 ">Finding Shortcuts</span>
            </button>
          </li>
          <li className="flex-1">
            <button
              type="button"
              className="bg-white hover:bg-gray-100 w-full flex items-center p-2 rounded space-x-3 focus:outline-none"
              aria-label="Inviting Members"
            >
              <span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full border  border-gray-300 group-hover:border-gray-400 ">
                  <span className="text-xxs  text-gray-400 group-hover:text-gray-500">
                    4
                  </span>
                </span>
              </span>
              <span className="text-gray-500 ">Inviting Members</span>
            </button>
          </li>
        </ul>
      </div>

      <div className="middle">
        <span className="text-gray-900 ">
          For more tips &amp; tricks, check out
        </span>
      </div>

      <div className="bottom-boxes flex flex-col gap-4">
        <div className="box1   bg-indigo ring-1 ring-indigo-200 p-3 relative rounded-lg shadow-md">
          <span className="absolute top-1 right-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-indigo-600"
              fill="currentColor"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path>
            </svg>
          </span>
          <p className="flex items-center leading-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 flex-shrink-0 fill-indigo-600 mr-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="text-gray-900  font-medium">
              Total time saved:
              <span className=" font-bold">6m</span>
            </span>
          </p>
        </div>

        <div className="box2 bg-indigo-10 ring-1 ring-indigo-100 p-4 rounded-lg shadow-md space-y-4">
          <p className="flex items-center ">
            <svg
              className="w-8 h-8 flex-shrink-0 fill-indigo-600 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
            </svg>

            <span className="text-gray-900 text-sm font-medium">
              Refer OSlash, get
              <span className="text-gray-900 text-sm font-bold">$10</span>{" "}
              credit each
            </span>
          </p>
          <button
            type="button"
            className=" font-medium    px-4 py-1  bg-indigo-700	flex items-center	text-white	rounded		"
          >
            Copy link
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-white ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path>
              <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Aside;
