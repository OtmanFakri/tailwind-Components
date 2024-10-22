<template>
    <div class="w-full bg-gray-200 py-10">
        <div class="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
            <div class="flex w-full pl-3 sm:pl-6 pr-3 py-5 items-center justify-between bg-blue-100 rounded-t">
                <h3 class="text-gray-800 font-bold text-base sm:text-xl">Jack and Jill Enterprise</h3>
                <button class="ml-0 sm:ml-6 bg-indigo-700 transition duration-150 ease-in-out focus:outline-none hover:bg-indigo-600 rounded text-white px-5 h-8 flex items-center text-sm">Create New</button>
            </div>
            <div class="flex flex-col md:flex-row p-3 justify-between items-start md:items-stretch w-full">
                <div class="w-full md:w-1/3 flex flex-col md:flex-row items-start md:items-center">
                    <div class="flex items-center">
                        <a class="p-2 border-gray-200 text-gray-600 dark:text-gray-400 border rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon cursor-pointer icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="10" y1="11" x2="10" y2="17" />
                                <line x1="14" y1="11" x2="14" y2="17" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>
                        </a>
                        <a class="text-gray-600 p-2 ml-2 border-gray-200 dark:text-gray-400 border rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-upload" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                <polyline points="7 9 12 4 17 9" />
                                <line x1="12" y1="4" x2="12" y2="16" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="w-full md:w-2/3 flex flex-col md:flex-row items-start md:items-center justify-end">
                    <div class="flex items-center border-gray-200 border rounded mt-3 md:mt-0">
                        <a class="text-gray-600 dark:text-gray-400 p-2 border-transparent border rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-table" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                <line x1="4" y1="10" x2="20" y2="10" />
                                <line x1="10" y1="4" x2="10" y2="20" />
                            </svg>
                        </a>
                        <a class="text-indigo-700 p-2 bg-gray-200 border border-transparent rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x="4" y="4" width="6" height="6" rx="1" />
                                <rect x="14" y="4" width="6" height="6" rx="1" />
                                <rect x="4" y="14" width="6" height="6" rx="1" />
                                <rect x="14" y="14" width="6" height="6" rx="1" />
                            </svg>
                        </a>
                        <a class="text-gray-600 dark:text-gray-400 p-2 border-transparent border rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-columns" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                <line x1="12" y1="4" x2="12" y2="20" />
                            </svg>
                        </a>
                    </div>
                    <div class="flex flex-col w-full sm:w-1/2 md:ml-4 mt-3 md:mt-0">
                        <div class="relative w-full">
                            <div class="absolute cursor-pointer text-gray-600 dark:text-gray-400 flex items-center pr-3 right-0 border-l h-full">
                                <span class="ml-2 mr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-filter" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <path d="M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5"></path>
                                    </svg>
                                </span>
                                <span class="text-sm leading-tight tracking-normal">Filter</span>
                            </div>
                            <div class="absolute text-gray-600 dark:text-gray-400 flex items-center pl-3 h-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <circle cx="10" cy="10" r="7"></circle>
                                    <line x1="21" y1="21" x2="15" y2="15"></line>
                                </svg>
                            </div>
                            <label for="search" class="hidden text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"></label>
                            <input id="search" class="w-full text-gray-600 bg-transparent dark:bg-gray-800 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 font-normal pl-8 pr-24 h-10 flex items-center text-sm border-gray-300 dark:border-gray-200 rounded border" placeholder="Search by project name or owner" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full overflow-x-scroll xl:overflow-x-hidden">
                <table class="min-w-full bg-white dark:bg-gray-800 rounded border border-gray-300" id="main-table">
                    <thead>
                        <tr class="w-full bg-gray-100 dark:bg-gray-700 border-b border-gray-300">
                            <th class="pl-3 w-24 py-3">
                                <div class="flex items-center">
                                    <input type="checkbox" class="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white outline-none" onclick="checkAll(this)" />
                                    <div class="opacity-0 cursor-defaut ml-4 text-gray-800 dark:text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                    </div>
                                </div>
                            </th>
                            <th class="whitespace-no-wrap w-32 first-dropdown cursor-pointer" onclick="dropdownFunction(this)">
                                <div class="flex items-center justify-between relative chuss-div">
                                    <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Project</p>
                                    <div class="cursor-pointer mr-3 text-gray-800 dark:text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>
                                    <ul class="bg-white shadow rounded mt-2 py-1 w-48 absolute top-0 right-0 mt-8 hidden dropdown-content">
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
                                    </ul>
                                </div>
                            </th>
                            <th class="border-l border-gray-300 pl-4 whitespace-no-wrap w-32 first-dropdown cursor-pointer" onclick="dropdownFunction(this)">
                                <div class="flex items-center justify-between relative">
                                    <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Type</p>
                                    <div class="cursor-pointer mr-3 text-gray-800 dark:text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>
                                    <ul class="bg-white shadow rounded mt-2 py-1 mr-1 w-32 absolute top-0 right-0 mt-8 hidden dropdown-content">
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
                                    </ul>
                                </div>
                            </th>
                            <th class="border-l border-gray-300 pl-4 whitespace-no-wrap w-32 first-dropdown cursor-pointer" onclick="dropdownFunction(this)">
                                <div class="flex items-center justify-between relative">
                                    <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Status</p>
                                    <div class="cursor-pointer mr-3 text-gray-800 dark:text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>
                                    <ul class="bg-white shadow rounded mt-2 py-1 w-32 mr-1 absolute top-0 right-0 mt-8 hidden dropdown-content">
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
                                    </ul>
                                </div>
                            </th>
                            <th class="border-l border-gray-300 pl-4 whitespace-no-wrap w-32 first-dropdown cursor-pointer" onclick="dropdownFunction(this)">
                                <div class="flex items-center justify-between relative">
                                    <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Priority</p>
                                    <div class="cursor-pointer mr-3 text-gray-800 dark:text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>
                                    <ul class="bg-white shadow rounded mt-2 py-1 mr-1 w-32 absolute top-0 right-0 mt-8 hidden dropdown-content">
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
                                    </ul>
                                </div>
                            </th>
                            <th class="border-l border-gray-300 pl-4 whitespace-no-wrap w-32 first-dropdown cursor-pointer" onclick="dropdownFunction(this)">
                                <div class="flex items-center justify-between relative">
                                    <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Owner</p>
                                    <div class="cursor-pointer mr-3 text-gray-800 dark:text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>
                                    <ul class="bg-white shadow rounded mt-2 py-1 mr-1 w-32 absolute top-0 right-0 mt-8 hidden dropdown-content">
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
                                    </ul>
                                </div>
                            </th>
                            <th class="border-l border-gray-300 pl-4 whitespace-no-wrap w-32 first-dropdown cursor-pointer" onclick="dropdownFunction(this)">
                                <div class="flex items-center justify-between relative">
                                    <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Created on</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer mr-3 text-gray-800 dark:text-gray-100 icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                    <ul class="bg-white shadow rounded mt-2 py-1 mr-1 w-32 absolute top-0 right-0 mt-8 hidden dropdown-content">
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
                                    </ul>
                                </div>
                            </th>
                            <th class="border-l border-gray-300 pl-4 whitespace-no-wrap w-32 first-dropdown cursor-pointer" onclick="dropdownFunction(this)">
                                <div class="flex items-center justify-between relative">
                                    <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Due on</p>
                                    <div class="cursor-pointer mr-3 text-gray-800 dark:text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>
                                    <ul class="bg-white shadow rounded mt-2 py-1 mr-1 w-32 absolute top-0 right-0 mt-8 hidden dropdown-content">
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
                                    </ul>
                                </div>
                            </th>
                            <th class="border-l border-gray-300 pl-4 pr-12 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Actions</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-gray-300">
                            <td class="pl-3 w-24 py-3">
                                <div class="flex items-center">
                                    <input type="checkbox" class="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white outline-none" onclick="tableInteract(this)" />
                                    <a onclick="accordionHandler(this)" class="focus:outline-none cursor-pointer text-gray-800 dark:text-gray-100 ml-2 lg:ml-4 mr-2 sm:mr-0 border border-transparent rounded focus:outline-none" href="javascript: void(0)">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </a>
                                </div>
                            </td>
                            <td class="whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Software Develop…</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Development</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <div class="bg-blue-200 h-6 w-20 rounded-md flex items-center justify-center">
                                    <span class="text-xs text-blue-500 font-normal">Assigned</span>
                                </div>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">High</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Jason Smith</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">6/28/2020</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">9/28/2020</p>
                            </td>
                            <td class="pl-4 pr-4 whitespace-no-wrap w-32">
                                <div class="relative">
                                    <div class="relative z-0 text-gray-600 bg-white flex items-center justify-between border rounded border-gray-300 w-full cursor-pointer text-xs form-select block py-2 px-2 xl:px-3 border border-gray-300 rounded bg-transparent" data-menu>
                                        <p class="leading-3 tracking-normal font-normal">Edit Project</p>
                                        <div class="cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 15 12 9 18 15" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                    </div>
                                    <ul class="invisible z-10 bg-white transition duration-300 opacity-0 bg-white shadow rounded mt-2 w-48 py-1 absolute">
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Edit Project</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Delete Project</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr class="detail-row">
                            <td colspan="9">
                                <div class="flex items-stretch w-full border-b border-gray-300 dark:border-gray-200">
                                    <ul>
                                        <li class="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                                                    <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                                                    <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                                                    <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                                                </svg>
                                            </a>
                                        </li>
                                        <li autofocus class="cursor-pointer flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                                                    <circle cx="12" cy="12" r="9"></circle>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <polyline points="7 8 3 12 7 16"></polyline>
                                                    <polyline points="17 8 21 12 17 16"></polyline>
                                                    <line x1="14" y1="4" x2="10" y2="20"></line>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="w-full bg-white border-l border-gray-300 dark:bg-gray-800">
                                        <h4 class="pl-10 w-full text-sm text-gray-800 dark:text-gray-100 py-3 bg-gray-100 dark:bg-gray-700">Software Development Project</h4>
                                        <div class="bg-white dark:bg-gray-800 px-8 py-6">
                                            <div class="flex items-start">
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Owner</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">Jason Smith</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Type</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">Development</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Time Spent</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">1440 Hours, 45 Mins</h5>
                                                </div>
                                            </div>
                                            <div class="flex items-start mt-6">
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Project</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">Create new features for the app</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Priority</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">High</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Incharge officer(s)</p>
                                                    <h5 class="text-indigo-700 font-normal text-xs">Saul Berenson & Nicholas Brody</h5>
                                                </div>
                                            </div>
                                            <hr class="my-6 border-t border-gray-300 w-full" />
                                            <h5 class="text-gray-600 dark:text-gray-400 text-xs mb-2 font-bold">Message</h5>
                                            <p class="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                            <h5 class="text-indigo-700 text-xs mb-2 mt-12 font-bold">Recommended Action</h5>
                                            <p class="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b border-gray-300">
                            <td class="pl-3 w-24 py-3">
                                <div class="flex items-center">
                                    <input type="checkbox" class="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white outline-none" onclick="tableInteract(this)" />
                                    <a onclick="accordionHandler(this)" class="focus:outline-none cursor-pointer text-gray-800 dark:text-gray-100 ml-2 lg:ml-4 mr-2 sm:mr-0 border border-transparent rounded focus:outline-none" href="javascript: void(0)">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </a>
                                </div>
                            </td>
                            <td class="whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Jade's website</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Design</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <div class="bg-red-200 h-6 w-20 rounded-md flex items-center justify-center">
                                    <span class="text-xs text-red-500 font-normal">Pending</span>
                                </div>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Medium</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Jason Smith</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">6/28/2020</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">9/28/2020</p>
                            </td>
                            <td class="pl-4 pr-4 whitespace-no-wrap w-32">
                                <div class="relative">
                                    <div class="relative z-0 text-gray-600 bg-white flex items-center justify-between border rounded border-gray-300 w-full cursor-pointer text-xs form-select block py-2 px-2 xl:px-3 border border-gray-300 rounded bg-transparent" data-menu>
                                        <p class="leading-3 tracking-normal font-normal">Edit Project</p>
                                        <div class="cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 15 12 9 18 15" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                    </div>
                                    <ul class="invisible z-10 bg-white transition duration-300 opacity-0 bg-white shadow rounded mt-2 w-48 py-1 absolute">
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Edit Project</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Delete Project</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr class="detail-row">
                            <td colspan="9">
                                <div class="flex items-stretch w-full border-b border-gray-300 dark:border-gray-200">
                                    <ul>
                                        <li class="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                                                    <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                                                    <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                                                    <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                                                </svg>
                                            </a>
                                        </li>
                                        <li autofocus class="cursor-pointer flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                                                    <circle cx="12" cy="12" r="9"></circle>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <polyline points="7 8 3 12 7 16"></polyline>
                                                    <polyline points="17 8 21 12 17 16"></polyline>
                                                    <line x1="14" y1="4" x2="10" y2="20"></line>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="dark:bg-gray-800">
                                        <h4 class="pl-10 w-full text-sm text-gray-800 dark:text-gray-100 py-3 bg-gray-100 dark:bg-gray-700">Software Development Project</h4>
                                        <div class="bg-white dark:bg-gray-800 px-8 py-6">
                                            <div class="flex items-start">
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Owner</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">Jason Smith</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Type</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">Development</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Time Spent</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">1440 Hours, 45 Mins</h5>
                                                </div>
                                            </div>
                                            <div class="flex items-start mt-6">
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Project</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">Create new features for the app</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Priority</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">High</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Incharge officer(s)</p>
                                                    <h5 class="text-indigo-700 font-normal text-xs">Saul Berenson & Nicholas Brody</h5>
                                                </div>
                                            </div>
                                            <hr class="my-6 border-t border-gray-300 w-full" />
                                            <h5 class="text-gray-600 dark:text-gray-400 text-xs mb-2 font-bold">Message</h5>
                                            <p class="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                            <h5 class="text-indigo-700 text-xs mb-2 mt-12 font-bold">Recommended Action</h5>
                                            <p class="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b border-gray-300">
                            <td class="pl-3 w-24 py-3">
                                <div class="flex items-center">
                                    <input type="checkbox" class="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white outline-none" onclick="tableInteract(this)" />
                                    <a onclick="accordionHandler(this)" class="focus:outline-none cursor-pointer text-gray-800 dark:text-gray-100 ml-2 lg:ml-4 mr-2 sm:mr-0 border border-transparent rounded focus:outline-none" href="javascript: void(0)">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </a>
                                </div>
                            </td>
                            <td class="whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Marketing Visuals</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Marketing</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <div class="bg-blue-200 h-6 w-20 rounded-md flex items-center justify-center">
                                    <span class="text-xs text-blue-500 font-normal">Assigned</span>
                                </div>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Low</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Jason Smith</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">6/28/2020</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">9/28/2020</p>
                            </td>
                            <td class="pl-4 pr-4 whitespace-no-wrap w-32">
                                <div class="relative">
                                    <div class="reltive z-0 text-gray-600 bg-white flex items-center justify-between border rounded border-gray-300 w-full cursor-pointer text-xs form-select block py-2 px-2 xl:px-3 border border-gray-300 rounded bg-transparent" data-menu>
                                        <p class="leading-3 tracking-normal font-normal">Edit Project</p>
                                        <div class="cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 15 12 9 18 15" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                    </div>
                                    <ul class="invisible z-10 bg-white transition duration-300 opacity-0 bg-white shadow rounded mt-2 w-48 py-1 absolute">
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Edit Project</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Delete Project</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr class="detail-row">
                            <td colspan="9">
                                <div class="flex items-stretch w-full border-b border-gray-300 dark:border-gray-200">
                                    <ul>
                                        <li class="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                                                    <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                                                    <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                                                    <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                                                </svg>
                                            </a>
                                        </li>
                                        <li autofocus class="cursor-pointer flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                                                    <circle cx="12" cy="12" r="9"></circle>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <polyline points="7 8 3 12 7 16"></polyline>
                                                    <polyline points="17 8 21 12 17 16"></polyline>
                                                    <line x1="14" y1="4" x2="10" y2="20"></line>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="dark:bg-gray-800">
                                        <h4 class="pl-10 w-full text-sm text-gray-800 dark:text-gray-100 py-3 bg-gray-100 dark:bg-gray-700">Software Development Project</h4>
                                        <div class="bg-white dark:bg-gray-800 px-8 py-6">
                                            <div class="flex items-start">
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Owner</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">Jason Smith</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Type</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">Development</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Time Spent</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">1440 Hours, 45 Mins</h5>
                                                </div>
                                            </div>
                                            <div class="flex items-start mt-6">
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Project</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">Create new features for the app</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Priority</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">High</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Incharge officer(s)</p>
                                                    <h5 class="text-indigo-700 font-normal text-xs">Saul Berenson & Nicholas Brody</h5>
                                                </div>
                                            </div>
                                            <hr class="my-6 border-t border-gray-300 w-full" />
                                            <h5 class="text-gray-600 dark:text-gray-400 text-xs mb-2 font-bold">Message</h5>
                                            <p class="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                            <h5 class="text-indigo-700 text-xs mb-2 mt-12 font-bold">Recommended Action</h5>
                                            <p class="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b border-gray-300">
                            <td class="pl-3 w-24 py-3">
                                <div class="flex items-center">
                                    <input type="checkbox" class="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white outline-none" onclick="tableInteract(this)" />
                                    <a onclick="accordionHandler(this)" class="focus:outline-none cursor-pointer text-gray-800 dark:text-gray-100 ml-2 lg:ml-4 mr-2 sm:mr-0 border border-transparent rounded focus:outline-none" href="javascript: void(0)">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </a>
                                </div>
                            </td>
                            <td class="whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Jade's website</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Design</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <div class="bg-red-200 h-6 w-20 rounded-md flex items-center justify-center">
                                    <span class="text-xs text-red-500 font-normal">Pending</span>
                                </div>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Medium</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Jason Smith</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">6/28/2020</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">9/28/2020</p>
                            </td>
                            <td class="pl-4 pr-4 whitespace-no-wrap w-32">
                                <div class="relative">
                                    <div class="relative z-0 text-gray-600 bg-white flex items-center justify-between border rounded border-gray-300 w-full cursor-pointer text-xs form-select block py-2 px-2 xl:px-3 border border-gray-300 rounded bg-transparent" data-menu>
                                        <p class="leading-3 tracking-normal font-normal">Edit Project</p>
                                        <div class="cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 15 12 9 18 15" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                    </div>
                                    <ul class="invisible z-10 bg-white transition duration-300 opacity-0 bg-white shadow rounded mt-2 w-48 py-1 absolute">
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Edit Project</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Delete Project</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr class="detail-row">
                            <td colspan="9">
                                <div class="flex items-stretch w-full border-b border-gray-300 dark:border-gray-200">
                                    <ul>
                                        <li class="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                                                    <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                                                    <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                                                    <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                                                </svg>
                                            </a>
                                        </li>
                                        <li autofocus class="cursor-pointer flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                                                    <circle cx="12" cy="12" r="9"></circle>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <polyline points="7 8 3 12 7 16"></polyline>
                                                    <polyline points="17 8 21 12 17 16"></polyline>
                                                    <line x1="14" y1="4" x2="10" y2="20"></line>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="dark:bg-gray-800">
                                        <h4 class="pl-10 w-full text-sm text-gray-800 dark:text-gray-100 py-3 bg-gray-100 dark:bg-gray-700">Software Development Project</h4>
                                        <div class="bg-white dark:bg-gray-800 px-8 py-6">
                                            <div class="flex items-start">
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Owner</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">Jason Smith</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Type</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">Development</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Time Spent</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">1440 Hours, 45 Mins</h5>
                                                </div>
                                            </div>
                                            <div class="flex items-start mt-6">
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Project</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">Create new features for the app</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Priority</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">High</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Incharge officer(s)</p>
                                                    <h5 class="text-indigo-700 font-normal text-xs">Saul Berenson & Nicholas Brody</h5>
                                                </div>
                                            </div>
                                            <hr class="my-6 border-t border-gray-300 w-full" />
                                            <h5 class="text-gray-600 dark:text-gray-400 text-xs mb-2 font-bold">Message</h5>
                                            <p class="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                            <h5 class="text-indigo-700 text-xs mb-2 mt-12 font-bold">Recommended Action</h5>
                                            <p class="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b border-gray-300">
                            <td class="pl-3 w-24 py-3">
                                <div class="flex items-center">
                                    <input type="checkbox" class="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white outline-none" onclick="tableInteract(this)" />
                                    <a onclick="accordionHandler(this)" class="focus:outline-none cursor-pointer text-gray-800 dark:text-gray-100 ml-2 lg:ml-4 mr-2 sm:mr-0 border border-transparent rounded focus:outline-none" href="javascript: void(0)">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </a>
                                </div>
                            </td>
                            <td class="whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Marketing Visuals</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Marketing</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <div class="bg-blue-200 h-6 w-20 rounded-md flex items-center justify-center">
                                    <span class="text-xs text-blue-500 font-normal">Assigned</span>
                                </div>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Low</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Jason Smith</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">6/28/2020</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">9/28/2020</p>
                            </td>
                            <td class="pl-4 pr-4 whitespace-no-wrap w-32">
                                <div class="relative">
                                    <div class="relative z-0 text-gray-600 bg-white flex items-center justify-between border rounded border-gray-300 w-full cursor-pointer text-xs form-select block py-2 px-2 xl:px-3 border border-gray-300 rounded bg-transparent" data-menu>
                                        <p class="leading-3 tracking-normal font-normal">Edit Project</p>
                                        <div class="cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 15 12 9 18 15" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                    </div>
                                    <ul class="invisible z-10 bg-white transition duration-300 opacity-0 bg-white shadow rounded mt-2 w-48 py-1 absolute">
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Edit Project</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Delete Project</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr class="detail-row">
                            <td colspan="9">
                                <div class="flex items-stretch w-full border-b border-gray-300 dark:border-gray-200">
                                    <ul>
                                        <li class="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                                                    <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                                                    <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                                                    <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                                                </svg>
                                            </a>
                                        </li>
                                        <li autofocus class="cursor-pointer flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                                                    <circle cx="12" cy="12" r="9"></circle>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <polyline points="7 8 3 12 7 16"></polyline>
                                                    <polyline points="17 8 21 12 17 16"></polyline>
                                                    <line x1="14" y1="4" x2="10" y2="20"></line>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="dark:bg-gray-800">
                                        <h4 class="pl-10 w-full text-sm text-gray-800 dark:text-gray-100 py-3 bg-gray-100 dark:bg-gray-700">Software Development Project</h4>
                                        <div class="bg-white dark:bg-gray-800 px-8 py-6">
                                            <div class="flex items-start">
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Owner</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">Jason Smith</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Type</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">Development</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Time Spent</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">1440 Hours, 45 Mins</h5>
                                                </div>
                                            </div>
                                            <div class="flex items-start mt-6">
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Project</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">Create new features for the app</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Priority</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">High</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Incharge officer(s)</p>
                                                    <h5 class="text-indigo-700 font-normal text-xs">Saul Berenson & Nicholas Brody</h5>
                                                </div>
                                            </div>
                                            <hr class="my-6 border-t border-gray-300 w-full" />
                                            <h5 class="text-gray-600 dark:text-gray-400 text-xs mb-2 font-bold">Message</h5>
                                            <p class="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                            <h5 class="text-indigo-700 text-xs mb-2 mt-12 font-bold">Recommended Action</h5>
                                            <p class="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b border-gray-300">
                            <td class="pl-3 w-24 py-3">
                                <div class="flex items-center">
                                    <input type="checkbox" class="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white outline-none" onclick="tableInteract(this)" />
                                    <a onclick="accordionHandler(this)" class="focus:outline-none cursor-pointer text-gray-800 dark:text-gray-100 ml-2 lg:ml-4 mr-2 sm:mr-0 border border-transparent rounded focus:outline-none" href="javascript: void(0)">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </a>
                                </div>
                            </td>
                            <td class="whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Jade's website</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Design</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <div class="bg-red-200 h-6 w-20 rounded-md flex items-center justify-center">
                                    <span class="text-xs text-red-500 font-normal">Pending</span>
                                </div>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Medium</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Jason Smith</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">6/28/2020</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">9/28/2020</p>
                            </td>
                            <td class="pl-4 pr-4 whitespace-no-wrap w-32">
                                <div class="relative">
                                    <div class="relative z-0 text-gray-600 bg-white flex items-center justify-between border rounded border-gray-300 w-full cursor-pointer text-xs form-select block py-2 px-2 xl:px-3 border border-gray-300 rounded bg-transparent" data-menu>
                                        <p class="leading-3 tracking-normal font-normal">Edit Project</p>
                                        <div class="cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 15 12 9 18 15" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                    </div>
                                    <ul class="invisible z-10 bg-white transition duration-300 opacity-0 bg-white shadow rounded mt-2 w-48 py-1 absolute">
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Edit Project</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Delete Project</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr class="detail-row">
                            <td colspan="9">
                                <div class="flex items-stretch w-full border-b border-gray-300 dark:border-gray-200">
                                    <ul>
                                        <li class="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                                                    <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                                                    <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                                                    <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                                                </svg>
                                            </a>
                                        </li>
                                        <li autofocus class="cursor-pointer flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                                                    <circle cx="12" cy="12" r="9"></circle>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <polyline points="7 8 3 12 7 16"></polyline>
                                                    <polyline points="17 8 21 12 17 16"></polyline>
                                                    <line x1="14" y1="4" x2="10" y2="20"></line>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="dark:bg-gray-800">
                                        <h4 class="pl-10 w-full text-sm text-gray-800 dark:text-gray-100 py-3 bg-gray-100 dark:bg-gray-700">Software Development Project</h4>
                                        <div class="bg-white dark:bg-gray-800 px-8 py-6">
                                            <div class="flex items-start">
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Owner</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">Jason Smith</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Type</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">Development</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Time Spent</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">1440 Hours, 45 Mins</h5>
                                                </div>
                                            </div>
                                            <div class="flex items-start mt-6">
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Project</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">Create new features for the app</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Priority</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">High</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Incharge officer(s)</p>
                                                    <h5 class="text-indigo-700 font-normal text-xs">Saul Berenson & Nicholas Brody</h5>
                                                </div>
                                            </div>
                                            <hr class="my-6 border-t border-gray-300 w-full" />
                                            <h5 class="text-gray-600 dark:text-gray-400 text-xs mb-2 font-bold">Message</h5>
                                            <p class="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                            <h5 class="text-indigo-700 text-xs mb-2 mt-12 font-bold">Recommended Action</h5>
                                            <p class="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="pl-3 w-24 py-3">
                                <div class="flex items-center">
                                    <input type="checkbox" class="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white outline-none" onclick="tableInteract(this)" />
                                    <a onclick="accordionHandler(this)" class="focus:outline-none cursor-pointer text-gray-800 dark:text-gray-100 ml-2 lg:ml-4 mr-2 sm:mr-0 border border-transparent rounded focus:outline-none" href="javascript: void(0)">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </a>
                                </div>
                            </td>
                            <td class="whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Marketing Visuals</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Marketing</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <div class="bg-blue-200 h-6 w-20 rounded-md flex items-center justify-center">
                                    <span class="text-xs text-blue-500 font-normal">Assigned</span>
                                </div>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Low</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Jason Smith</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">6/28/2020</p>
                            </td>
                            <td class="pl-4 whitespace-no-wrap w-32">
                                <p class="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">9/28/2020</p>
                            </td>
                            <td class="pl-4 pr-4 whitespace-no-wrap w-32">
                                <div class="relative">
                                    <div class="relative z-0 text-gray-600 bg-white flex items-center justify-between border rounded border-gray-300 w-full cursor-pointer text-xs form-select block py-2 px-2 xl:px-3 border border-gray-300 rounded bg-transparent" data-menu>
                                        <p class="leading-3 tracking-normal font-normal">Edit Project</p>
                                        <div class="cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 15 12 9 18 15" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                    </div>
                                    <ul class="invisible z-10 bg-white transition duration-300 opacity-0 bg-white shadow rounded mt-2 w-48 py-1 absolute">
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Edit Project</li>
                                        <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Delete Project</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr class="detail-row">
                            <td colspan="9">
                                <div class="flex items-stretch w-full border-b border-gray-300 dark:border-gray-200">
                                    <ul>
                                        <li class="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                                                    <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                                                    <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                                                    <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                                                </svg>
                                            </a>
                                        </li>
                                        <li autofocus class="cursor-pointer flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                                                    <circle cx="12" cy="12" r="9"></circle>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                            <a class="p-3 border text-gray-800 dark:text-gray-100 border-transparent hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <polyline points="7 8 3 12 7 16"></polyline>
                                                    <polyline points="17 8 21 12 17 16"></polyline>
                                                    <line x1="14" y1="4" x2="10" y2="20"></line>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="dark:bg-gray-800">
                                        <h4 class="pl-10 w-full text-sm text-gray-800 dark:text-gray-100 py-3 bg-gray-100 dark:bg-gray-700">Software Development Project</h4>
                                        <div class="bg-white dark:bg-gray-800 px-8 py-6">
                                            <div class="flex items-start">
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Owner</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">Jason Smith</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Type</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">Development</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Time Spent</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">1440 Hours, 45 Mins</h5>
                                                </div>
                                            </div>
                                            <div class="flex items-start mt-6">
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Project</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">Create new features for the app</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Priority</p>
                                                    <h5 class="text-gray-800 dark:text-gray-100 font-normal text-xs">High</h5>
                                                </div>
                                                <div class="w-1/3">
                                                    <p class="text-gray-600 dark:text-gray-400 font-normal text-xs">Incharge officer(s)</p>
                                                    <h5 class="text-indigo-700 font-normal text-xs">Saul Berenson & Nicholas Brody</h5>
                                                </div>
                                            </div>
                                            <hr class="my-6 border-t border-gray-300 w-full" />
                                            <h5 class="text-gray-600 dark:text-gray-400 text-xs mb-2 font-bold">Message</h5>
                                            <p class="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                            <h5 class="text-indigo-700 text-xs mb-2 mt-12 font-bold">Recommended Action</h5>
                                            <p class="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="mx-auto container pt-8 flex justify-center sm:justify-end items-center">
            <a class="text-gray-600 mr-5 border-gray-200 border rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                <svg xmlns="http://www.w3.org/2000/svg" class="dark:text-gray-100 icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="15 6 9 12 15 18"></polyline>
                </svg>
            </a>
            <p class="text-gray-800 dark:text-gray-100 fot-normal text-xs">Page</p>
            <label for="selectedPage" class="hidden"></label>
            <input id="selectedPage" type="text" class="bg-white dark:bg-gray-800 w-6 px-2 mx-2 text-gray-800 dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal flex items-center text-xs border-gray-300 rounded border" value="4" />
            <p class="text-gray-800 dark:text-gray-100 fot-normal text-xs">of 20</p>
            <a class="text-gray-600 mx-5 border-gray-200 border rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                <svg xmlns="http://www.w3.org/2000/svg" class="dark:text-gray-100 icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="9 6 15 12 9 18"></polyline>
                </svg>
            </a>
            <label for="selectedPage1" class="hidden"></label>
            <input id="selectedPage1" type="text" class="bg-white dark:bg-gray-800 w-8 px-2 mx-2 text-gray-800 dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal flex items-center text-xs border-gray-300 rounded border" value="30" />
            <p class="-mt-1 text-gray-800 dark:text-gray-100 fot-normal text-xs">per page</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "AdvanceTableWithFiltersActionsSearchSortAndExpandedRow",
    mounted: function () {
        this.hideTableDetails();
    },
    methods: {
        main(event) {
            let element = event.currentTarget.parentElement.parentElement;
            let andicators = element.querySelectorAll("svg");
            let child = element.querySelector("ul");
            if (child.classList.contains("opacity-0")) {
                child.classList.remove("invisible");
                child.classList.add("visible");
                child.classList.add("opacity-100");
                child.classList.remove("opacity-0");
                andicators[0].style.display = "block";
                andicators[1].style.display = "none";
            } else {
                child.classList.add("invisible");
                child.classList.remove("visible");
                child.classList.remove("opacity-100");
                child.classList.add("opacity-0");
                andicators[0].style.display = "none";
                andicators[1].style.display = "block";
            }
        },
        hideTableDetails() {
            var tableDetails = document.getElementsByClassName("detail-row");
            for (var i = 0; i < tableDetails.length; i++) {
                tableDetails[i].getElementsByTagName("td")[0].classList.add("hidden");
            }
        },
        dropdownFunction(event) {
            var single = event.currentTarget.getElementsByClassName("dropdown-content")[0];
            single.classList.toggle("hidden");

            this.andicator(single, event.currentTarget);
        },
        accordionHandler(event) {
            var single = event.currentTarget.parentElement.parentElement.parentElement.nextElementSibling.children[0];
            single.classList.toggle("hidden");
            this.andicator(single, event.currentTarget);
        },
        tableInteract(event) {
            var single = event.currentTarget.parentElement.parentElement.parentElement;
            single.classList.toggle("bg-gray-100");
        },
        checkAll(event) {
            let rows = event.currentTarget.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children;
            for (var i = 0; i < rows.length; i++) {
                if (event.currentTarget.checked) {
                    rows[i].classList.add("bg-gray-100");
                    let checkbox = rows[i].getElementsByTagName("input")[0];
                    if (checkbox) {
                        checkbox.checked = true;
                    }
                } else {
                    rows[i].classList.remove("bg-gray-100");
                    let checkbox = rows[i].getElementsByTagName("input")[0];
                    if (checkbox) {
                        checkbox.checked = false;
                    }
                }
            }
        },
        andicator(single, target) {
            var andicator = target.querySelectorAll("svg");
            if (!single.classList.contains("hidden")) {
                andicator[0].style.display = "block";
                andicator[1].style.display = "none";
            } else {
                andicator[0].style.display = "none";
                andicator[1].style.display = "block";
            }
        },
    },
};
</script>
