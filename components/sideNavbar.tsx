const SideNavbar = () => {
  return (
    <div className=" flex-col text-center gap-3 bg-red-100 w-12 items-center	 h-full lg:fixed lg:inset-y-0 z-20">
      <div
        className="inline-flex items-center justify-center text-xs font-medium    
                 rounded-md   px-3 py-2 my-3 bg-gray-900 text-white  "
      >
        V
      </div>
      <div className="w-8 h-8 inline-flex items-center justify-center border border-dashed border-gray-900 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 fill-gray-900"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
};
export default SideNavbar;
//
