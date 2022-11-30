import Head from "next/head";

import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta property="og:image" />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="absolute top-36 left-1/4">

        {/* home top */}
        <div className=" flex flex-col justify-center items-center	">
          <img
            src="https://i.oslash.com/images/logos/oslash/home-logo.png"
            className="w-38"
          />
          <input
            className="w-full placeholder-gray-400 text-gray-900  border-2 pl-4  py-2  pr-10 my-5 rounded-full"
            placeholder="Search in your workspace"
            value=""
          />
        </div>
        {/* home bottom */}
        <div className="flex  justify-center gap-6">
          {/* //first box */}
          <div className="bg-white flex flex-col border border-gray-300 rounded-lg ">
            <div className=" box-1-top flex ">
              <button
                type="button"
                className="relative  inline-flex items-center px-6 py-4 text-gray-900 "
              >
                <span className="text-gray-900 ">My Activity</span>
                <span className="w-full h-1 absolute left-0 bottom-0 rounded-sm transition-opacity  bg-indigo-600 opacity-100 "></span>
              </button>
              <button className="relative  inline-flex items-center px-6 py-4 text-gray-900 ">
                <span className="text-gray-900 ">Workspace Activity</span>
                <span className="w-full h-1 absolute left-0 bottom-0 rounded-sm transition-opacity  opacity-0 group-hover:bg-gray-200 group-hover:opacity-100 "></span>
              </button>
            </div>

            <div className="box-1-content h-80 flex items-center justify-center ">
              <span className="text-gray-500 ">
                No activity is tracked as of now
              </span>
            </div>
          </div>

          {/* second box */}
          <div className="bg-white  flex flex-col border border-gray-300 rounded-lg p-6">
            <div className="h-13 flex items-center px-3 py-3 space-x-2 ">
              <span className=" items-center justify-center bg-white w-8 h-8 rounded ">
                <div className="relative ">
                  <div className=" rounded-full ">
                    <img
                      src="https://i.oslash.com/activity-search-svg/google-calendar.svg"
                      alt=""
                      className="  rounded-full  "
                    />
                  </div>
                </div>
              </span>
              <span className="text-black text-gray-400">Calendar</span>
            </div>
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <p>
                <span className="text-gray-400  ">
                  Enable the Calendar integration <br /> to view your events
                  here
                </span>
              </p>
              <button className="  bg-black text-white rounded px-4 py-2">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
