import { useState } from "react";

const Header = () => {
  const [IsButtonHover, setIsButtonHover] = useState<boolean>(false);

  return (
    <div className="flex justify-between  py-3 px-4 fixed w-full z-10 bg-white">
      <div className="flex ">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 absolute w-5   "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>

        <input
          className="h-9 ml-24 p-2 relative w-80  text-gray-900 placeholder-gray-700 border rounded
            cursor-pointer focus:cursor-text bg-white hover:bg-gray-200 focus:bg-white border-indigo-700"
          placeholder="search.."
        ></input>
      </div>
      <div className="flex gap-2 items-center	">
        <button
          onMouseEnter={() => setIsButtonHover(true)}
          onMouseLeave={() => setIsButtonHover(false)}
          className="text-purple- text-purple-600 px-10 py-1 border-2 border-purple-600 border-solid rounded"
        >
          {IsButtonHover ? "Upgrade plan" : "Trial - 14 Days Left"}
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 fill-gray-900"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 fill-gray-900"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
        </svg>
        <img
          src="https://static.oslash.work/profile/image/bb07a6c9-4920-41bb-93ae-e0a032892ac0?v=1"
          alt=""
          className="inline-block  avatar_sm  rounded-full  avatar-img-fallback-style"
        ></img>
      </div>
    </div>
  );
};
export default Header;
