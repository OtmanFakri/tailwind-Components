import React, { useState } from "react";
const Index = () => {
    const [flag, setFlag] = useState(true);
    return (
        <div role="alert" className={flag ? "xl:w-5/12 mx-auto sm:mx-0 sm:w-6/12 md:w-3/5 w-11/12 bg-white shadow-lg rounded flex sm:flex-row flex-col pr-4 absolute left-0 sm:left-auto right-0 dark:bg-gray-800 sm:top-0 sm:mr-6 mt-16 sm:mt-6 mb-6 sm:mb-0 transition duration-150 ease-in-out translate-show" : "translate-hide"}>
            <div>
                <div className="sm:px-6 px-4 flex items-center sm:justify-center sm:border-r border-gray-300 dark:border-gray-700 rounded-tl rounded-bl mt-4 sm:mt-0 text-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={40} height={40} fill="currentColor">
                        <path className="heroicon-ui" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>
                </div>
                <div className="flex flex-col justify-center pl-4 sm:w-9/12 sm:pt-6 pb-6 pt-2">
                    <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold pb-1">Attention Needed</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">Hey, it looks like you still have the "copyright © 2015" in your footer. Please update it!</p>
                </div>
            </div>

            <style>
                {`
                .translate-show{
                    transform : translateX(0%);
                }
                .translate-hide{
                    transform : translateX(150%);
                }
                `}
            </style>
        </div>
    );
};

export default Index;
