import React from "react";
export default function IndexPage() {
    return (
        <div className="min-h-screen bg-gray-200">
            <div className="flex items-center justify-center py-8 px-4">
                <div className="relative md:w-96 rounded shadow-lg pt-8 pb-6 px-4 dark:bg-gray-800 bg-white">
                    <div className="flex  flex-col justify-center items-center w-full">
                        <img src="https://i.ibb.co/d40yzK2/White-in-Jacket10.png" />
                        <div className="mt-6 flex flex-col items-center justify-center">
                            <p className="text-lg font-bold leading-none text-gray-800 dark:text-gray-50">Invite your friends</p>
                            <p className="text-xs font-medium leading-3 text-gray-500 dark:text-gray-400 mt-3">Sharing is caring. Invite your friends to collaborate</p>
                        </div>
                    </div>
                    <div className="border rounded-lg border-gray-200 dark:border-gray-900 dark:bg-gray-900 bg-white pt-2 px-2 pb-8 mt-4 mb-6">
                        <div className="sm:flex items-center">
                            <div className="w-44 sm:w-auto text-xs font-medium leading-3 text-gray-500 dark:text-gray-400 border justify-between rounded-lg bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-900 flex items-center py-1 px-2">
                                jim.dundler@mail.com
                                <button className="focus:outline-none ml-2 w-3 h-3 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-2 sm:mt-0 sm:ml-2  w-44 sm:w-auto text-xs font-medium leading-3 text-gray-500 dark:text-gray-400 justify-between border rounded-lg bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-900 flex items-center py-1 px-2">
                                pam.dundler@mail.com
                                <button className="focus:outline-none ml-2 w-3 h-3 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="w-44 mt-2 text-xs font-medium leading-3 text-gray-500 dark:text-gray-400 justify-between border rounded-lg bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-900 flex items-center py-1 px-2">
                            jim.dundler@mail.com
                            <button className="focus:outline-none  w-3 h-3 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1={18} y1={6} x2={6} y2={18} />
                                    <line x1={6} y1={6} x2={18} y2={18} />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="py-3 px-16 bg-indigo-700 dark:bg-indigo-600 rounded focus:outline-none hover:bg-opacity-80 text-xs font-semibold leading-3 text-gray-100">Invite</button>
                    </div>
                    <div className="cursor-pointer absolute top-0 right-0 m-3 dark:text-gray-100 text-gray-400   text-gray-600 transition duration-150 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
