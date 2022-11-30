import Image from "next/image";

const PageLabel = ({ shortcuts }) => {
  return (
    <div className="flex justify-between border-t-2 border-b-2 ml-24 pl-6 pb-4 pt-4 fixed w-full left-22 top-14 z-10 bg-white">
      <div className="flex flex-col">
        <div className="flex items-center gap-3 ">
          <span className="text-gray-900 text-3xl font-bold "> Shortcuts</span>
          <span className=" h-7  items-center justify-center  px-2 bg-gray-200  text-gray-400 rounded-3xl">
            {shortcuts}
          </span>{" "}
        </div>
        <span className="text-gray-400 text-sm font-normal">
          Transform your everyday links into everyday words
        </span>
      </div>
    </div>
  );
};
export default PageLabel;
