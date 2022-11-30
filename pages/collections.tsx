import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import PageLabel from "../components/pageLabel";

let MY_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVmFzaSBBaG1lZCIsImVtYWlsIjoidmFzaWFobWVkMTQzMkBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUxtNXd1MWhwUm1fSmkzRUF1RFNOVUFPbWo1b0Q3VzdtV0w2dWFhbU9ueTVqZTg9czk2LWMiLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwMjE4NjA5MTczNzc1MDUyNDcxMiIsImlzcyI6Imh0dHBzOi8vYXV0aC5vc2xhc2gud29yayIsImF1ZCI6Imh0dHBzOi8vYXV0aC5vc2xhc2gud29yayIsImh0dHBzOi8vYXV0aC5vc2xhc2gud29yay9lbWFpbCI6InZhc2lhaG1lZDE0MzJAZ21haWwuY29tIiwiaWF0IjoxNjY4NDkwNTcwLCJleHAiOjE2NzEwODI1NzB9.jiKJwQW7uXWFEFPStxtdkblBATv_yzY7iNEItZJykTI";

export const getStaticProps = async () => {
  const res = await fetch("https://gateway.oslash.work/graphql", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      authorization: MY_TOKEN,
    },
    body: JSON.stringify({
      query: `
        query queryShortcuts($query: String!, $workspacePK: String!, $collectionId: String, $offset: Int, $limit: Int, $isPrefix: Boolean, $sort: EdgeQueryShortcutsSort, $facetFilters: EdgeQueryShortcutsFilter, $experimental: Boolean) {
      queryShortcuts(
        query: $query
        workspacePK: $workspacePK
        collectionId: $collectionId
        offset: $offset
        limit: $limit
        isPrefix: $isPrefix
        sort: $sort
        facetFilters: $facetFilters
        experimental: $experimental
      ) {
        shortlinks {
          ... on EdgeCollectionShortcut {
            _version
            collection {
              countSharedGroups
              countSharedMembers
              countShortlinks
              countShortlinks
              accessType
              createdAt
              creator
              description
              isDeleted
              persistent
              pk
              sharedWith
              shortlink
              sk
              uid
              updatedAt
              tags
            }
            totalHits
            collectionId
            createdAt
            creator
            creatorDetails {
              fName
              lName
              pk
              profileImageUrl
              sk
              uid
              email
            }
            description
            pk
            shortlink
            sk
            uid
            url
            tags
            position
            type
            shortcutDetails {
              ... on EdgeSnippetShortcutDetails {
                content
              }
            }
            __typename
          }
          ... on EdgeShortcut {
            pk
            sk
            default
            uid
            creator
            creatorDetails {
              pk
              sk
              profileImageUrl
              fName
              lName
              email
            }
            totalHits
            description
            shortlink
            url
            createdAt
            sharedWithWeb
            tags
            position
            type
            shortcutDetails {
              ... on EdgeSnippetShortcutDetails {
                content
              }
            }
            _version
            __typename
          }
          ... on EdgeCollection {
            sk
            pk
            accessType
            sharedWithWeb
            managers
            countSharedGroups
            countSharedMembers
            shortlink
            description
            pk
            sk
            uid
            countShortlinks
            createdAt
            persistent
            isPublic
            _version
            creator
            creatorDetails {
              fName
              lName
              pk
              profileImageUrl
              sk
              uid
              email
            }
            tags
            position
            __typename
          }
        }
        domainFilter {
          name
          count
        }
        creatorFilter {
          name
          count
        }
        tagFilter {
          name
          count
        }
        tabCounts {
          name
          count
        }
        spellCorrection
        correctedSpelling
        isPrefix
        nextOffset
      }
    }
        `,
      variables: {
        facetFilters: {
          creator: [],
          domain: [],
          tags: [],
          shortcutType: ["COLLECTION"],
        },
        query: "",
        limit: 20,
        sort: {},
        workspacePK: "ORG#3d4f7c89-39b8-4727-8c64-6dcc47c5c632",
        experimental: true,
      },
    }),
  });

  const data = await res.json();
  return {
    props: { collections: data },
  };
};

const Shortcuts = ({ collections }) => {
  console.log(collections);

  return (
    <>
      <PageLabel shortcuts={12}></PageLabel>
      <div className="relative left-32 w-2/3 flex flex-col 	gap-3 top-28">
        <div className="top flex justify-between items-center py-6">
          <button className="left h-9 inline-flex items-center justify-center text-sm font-medium   text-white bg-indigo-700 hover:bg-indigo-500 rounded-l py-2 pl-4 pr-3">
            <span className=" mr-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            New Shortcut
            <span className="ml-2 mr-2">|</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 text-white fill-current"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="right flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 cursor-pointer	 mt-3 text-gray-900 fill-current"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                clip-rule="evenodd"
              ></path>
            </svg>

            <svg
              className="w-5 mt-3 cursor-pointer	 h-5 text-gray-900 fill-current"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7H16C16.5523 7 17 6.55228 17 6C17 5.44772 16.5523 5 16 5H5Z"
                fill="#111827"
              ></path>
              <path
                d="M7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H14C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9H7Z"
                fill="#111827"
              ></path>
              <path
                d="M9 13C8.44772 13 8 13.4477 8 14C8 14.5523 8.44772 15 9 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H9Z"
                fill="#111827"
              ></path>
            </svg>

            <div className=" bg-white inline-flex items-center gap-4 px-4 py-2 border border-gray-200 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 cursor-pointer	 h-5 fill-gray-900"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clip-rule="evenodd"
                ></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 cursor-pointer	 h-5 fill-gray-900"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
              </svg>
            </div>
            <span className="bg-white inline-flex items-center px-4 py-2 border cursor-pointer	 border-gray-200 rounded-lg">
              All
            </span>
          </div>
        </div>
        {collections.data.queryShortcuts.shortlinks.map(
          (item: {
            uid: Key;
            shortlink:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal;
            description:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal;
            createdAt:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal;
          }) => {
            return (
              <>
                <div
                  key={item.uid}
                  className=" w-full h-22 flex justify-between gap-4 p-2 relative  ring-1 transition-colors rounded-lg bg-white hover:bg-gray-100 ring-gray-100"
                >
                  <div className="left flex gap-4">
                    <div>
                      <svg
                        viewBox="0 0 32 32"
                        className="w-11 h-11 text-gray-900 fill-current flex-shrink-0"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.19995 9.5999C3.19995 8.75121 3.53709 7.93728 4.13721 7.33716C4.73733 6.73704 5.55126 6.3999 6.39995 6.3999H14.4L17.6 9.5999H25.5999C26.4486 9.5999 27.2626 9.93704 27.8627 10.5372C28.4628 11.1373 28.7999 11.9512 28.7999 12.7999V22.3999C28.7999 23.2486 28.4628 24.0625 27.8627 24.6626C27.2626 25.2628 26.4486 25.5999 25.5999 25.5999H6.39995C5.55126 25.5999 4.73733 25.2628 4.13721 24.6626C3.53709 24.0625 3.19995 23.2486 3.19995 22.3999V9.5999Z"
                          fill="#111827"
                        ></path>
                        <rect
                          x="16"
                          y="16"
                          width="16"
                          height="16"
                          rx="8"
                          fill="white"
                        ></rect>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.8001 19.7999C19.8001 19.4286 19.9476 19.0725 20.2101 18.81C20.4727 18.5474 20.8288 18.3999 21.2001 18.3999H26.8001C27.1714 18.3999 27.5275 18.5474 27.79 18.81C28.0526 19.0725 28.2001 19.4286 28.2001 19.7999V28.1999C28.3857 28.1999 28.5638 28.2737 28.6951 28.4049C28.8263 28.5362 28.9001 28.7143 28.9001 28.8999C28.9001 29.0856 28.8263 29.2636 28.6951 29.3949C28.5638 29.5262 28.3857 29.5999 28.2001 29.5999H26.1001C25.9144 29.5999 25.7364 29.5262 25.6051 29.3949C25.4738 29.2636 25.4001 29.0856 25.4001 28.8999V27.4999C25.4001 27.3143 25.3263 27.1362 25.1951 27.0049C25.0638 26.8737 24.8857 26.7999 24.7001 26.7999H23.3001C23.1144 26.7999 22.9364 26.8737 22.8051 27.0049C22.6738 27.1362 22.6001 27.3143 22.6001 27.4999V28.8999C22.6001 29.0856 22.5263 29.2636 22.3951 29.3949C22.2638 29.5262 22.0857 29.5999 21.9001 29.5999H19.8001C19.6144 29.5999 19.4364 29.5262 19.3051 29.3949C19.1738 29.2636 19.1001 29.0856 19.1001 28.8999C19.1001 28.7143 19.1738 28.5362 19.3051 28.4049C19.4364 28.2737 19.6144 28.1999 19.8001 28.1999V19.7999ZM21.9001 20.4999H23.3001V21.8999H21.9001V20.4999ZM23.3001 23.2999H21.9001V24.6999H23.3001V23.2999ZM24.7001 20.4999H26.1001V21.8999H24.7001V20.4999ZM26.1001 23.2999H24.7001V24.6999H26.1001V23.2999Z"
                          fill="#111827"
                        ></path>
                      </svg>
                    </div>

                    <div>
                      <p>{item.shortlink}</p>
                      <span className="text-gray-500 text-sm font-normal">
                        {
                          collections.data.queryShortcuts.shortlinks[0]
                            .countShortlinks
                        }{" "}
                        shortcuts
                      </span>
                      <span className="ml-2 inline-flex items-center justify-center align-middle   text-xs font-medium rounded-full h-5  bg-gray-200 px-2 text-slate-600	 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 fill-gray-500  mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        Workspace
                      </span>
                    </div>
                  </div>
                  <div className="right flex gap-3   ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 cursor-pointer	 h-5 fill-gray-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path>
                      <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path>{" "}
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 cursor-pointer	 h-5 fill-gray-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 cursor-pointer	 h-5 fill-gray-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 cursor-pointer	 h-5 text-gray-900 transition-all  opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </>
            );
          }
        )}
      </div>
    </>
  );
};
export default Shortcuts;
