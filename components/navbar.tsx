import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleButton = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div
      className={
        isOpen
          ? "fixed top-0 left-12  border-r-2 h-full w-52 z-20 bg-white"
          : "fixed top-0 left-12  border-r-2 h-full w-30 z-20 bg-white"
      }
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className=" h-12 p-4 my-1 flex justify-end items-center  ">
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleToggleButton}
            className="w-5 h-5 fill-gray-900 cursor-pointer hover:bg-gray-200"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleToggleButton}
            className="w-5 h-5 fill-gray-900 transform -scale-x-100 cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        )}
      </div>

      <div className="nav-icons flex flex-col gap-2 justify-center	p-2 border-t-2">
        <Link href="/">
          <div className="flex items-center	gap-4 hover:bg-gray-200 p-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-900 fill-current"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            {isOpen ? (
              <span className="truncate flex-1 text-sm font-normal text-left ">
                Home
              </span>
            ) : null}
          </div>
        </Link>

        <Link href="/collections">
          <div className="flex items-center	gap-4 hover:bg-gray-200 p-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-gray-900"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
            </svg>
            {isOpen ? (
              <span className="truncate flex-1 text-sm font-normal text-left ">
                Collections
              </span>
            ) : null}
          </div>
        </Link>
        <Link href="/shortcuts">
          <div className="flex items-center	gap-4 hover:bg-gray-200  p-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-900 fill-current"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {isOpen ? (
              <span className="truncate flex-1 text-sm font-normal text-left ">
                Shortcuts
              </span>
            ) : null}
          </div>
        </Link>

        <Link href="/favorites">
          <div className="flex items-center gap-4  hover:bg-gray-200 p-2 	">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-900 fill-current"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {isOpen ? (
              <span className="truncate flex-1 text-sm font-normal text-left ">
                Favorites
              </span>
            ) : null}
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
