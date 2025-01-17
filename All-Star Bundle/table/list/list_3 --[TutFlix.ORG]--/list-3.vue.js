<template>
  <body class="flex items-center justify-center px-4 py-8">
        <div class="xl:w-3/4 2xl:w-4/5 w-full">
            <div class="px-4 md:px-10 py-4 md:py-7">
                <div class="sm:flex items-center justify-between">
                    <p tabindex="0" class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Activity Board</p>
                </div>
            </div>
            <div class="bg-white px-4 md:px-10 pb-5">
                <div>
                    <div class="pb-2 border-b border-gray-200">
                        <p tabindex="0" class="focus:outline-none text-xs font-medium leading-3 text-gray-600">08 January 2021</p>
                    </div>
                    <div>
                        <div class="flex flex-col items-center">
                            <div class="h-6 border-l border-dashed border-gray-200"></div>
                            <div class="px-3 py-2 bg-gray-100 rounded-full">
                                <p tabindex="0" class="focus:outline-none text-xs leading-none text-gray-600">16:01</p>
                            </div>
                            <div class="h-6 border-l border-dashed border-gray-200"></div>
                        </div>
                        <div class="bg-gray-100 rounded py-6 px-6">
                            <div class="flex items-center justify-between">
                                <p tabindex="0" class="focus:outline-none text-base font-medium leading-none text-gray-800">New Card Added</p>
                                <div class="relative">
                                    <div class="dropdown-content mt-8 absolute hidden left-0 shadow-md z-10 w-32">
                                        <ul class="bg-white shadow rounded py-1">
                                            <li class="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                            <li class="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                            <li class="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                        </ul>
                                    </div>
                                    <button class="focus:outline-none" aria-label="dropdown" role="button">
                                        <svg onclick="dropdownFunction(this)"   class=" dropbtn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#52525B"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <p tabindex="0" class="focus:outline-none text-sm leading-5 text-gray-600 mt-2 sm:w-11/12">New comments are a great way to let your team know what they you are upto and how far along the project has progressed. It can also be valuable for someone that is looking for such information so that they are not lost and know what needs to be done next</p>
                            <div class="flex items-center mt-5">
                                <img tabindex="0" alt="girl avatar" class="focus:outline-none w-8 h-8 rounded-full shadow" src="https://cdn.tuk.dev/assets/templates/olympus/projects(15).png" />
                                <p tabindex="0" class="focus:outline-none text-sm leading-none text-gray-800 ml-2">Anika Dias</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex flex-col items-center">
                            <div class="h-6 border-l border-dashed border-gray-200"></div>
                            <div class="px-3 py-2 bg-gray-100 rounded-full">
                                <p tabindex="0" class="focus:outline-none text-xs leading-none text-gray-600">16:01</p>
                            </div>
                            <div class="h-6 border-l border-dashed border-gray-200"></div>
                        </div>
                        <div class="bg-gray-100 rounded py-6 px-6">
                            <div class="flex items-center justify-between">
                                <p tabindex="0" class="focus:outline-none text-base font-medium leading-none text-gray-800">
                                    New attachments added in
                                    <span class="text-indigo-700">‘Wireframes MVP’</span>
                                </p>
                                <div class="relative">
                                    <div class="dropdown-content mt-8 absolute hidden left-0 shadow-md z-10 w-32">
                                        <ul class="bg-white shadow rounded py-1">
                                            <li class="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                            <li class="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                            <li class="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                        </ul>
                                    </div>
                                    <button class="focus:outline-none" aria-label="dropdown" role="button">
                                        <svg onclick="dropdownFunction(this)"  class=" dropbtn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#52525B"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <p tabindex="0" class="focus:outline-none text-sm leading-5 text-gray-600 mt-2 sm:w-11/12">New comments are a great way to let your team know what they you are upto and how far along the project has progressed. It can also be valuable for someone that is looking for such information so that they are not lost and know what needs to be done next</p>
                            <div class="flex items-center mt-6">
                                <div tabindex="0" class="focus:outline-none w-12 h-12 sm:w-24 sm:h-24 rounded">
                                    <img alt="image 1" src="https://cdn.tuk.dev/assets/templates/olympus/projects(16).png" />
                                </div>
                                <div tabindex="0" class="focus:outline-none w-12 h-12 sm:w-24 sm:h-24 ml-4 rounded">
                                    <img alt="image 2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(17).png" />
                                </div>
                                <div tabindex="0" class="focus:outline-none w-12 h-12 sm:w-24 sm:h-24 ml-4 rounded">
                                    <img alt="image 3" src="https://cdn.tuk.dev/assets/templates/olympus/projects(18).png" />
                                </div>
                                <div tabindex="0" class="focus:outline-none px-2 sm:px-6 py-4 sm:py-10 ml-4 rounded flex items-center justify-center border border-gray-300">
                                    <p tabindex="0" class="focus:outline-none text-xs leading-none text-gray-600">+ 2 more</p>
                                </div>
                            </div>
                            <div class="flex items-center mt-5">
                                <img tabindex="0" alt="girl avatar" class="focus:outline-none w-8 h-8 rounded-full shadow" src="https://cdn.tuk.dev/assets/templates/olympus/projects(15).png" />
                                <p tabindex="0" class="focus:outline-none text-sm leading-none text-gray-800 ml-2">Anika Dias</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex flex-col items-center">
                            <div class="h-6 border-l border-dashed border-gray-200"></div>
                            <div class="px-3 py-2 bg-gray-100 rounded-full">
                                <p tabindex="0" class="focus:outline-none text-xs leading-none text-gray-600">16:01</p>
                            </div>
                            <div class="h-6 border-l border-dashed border-gray-200"></div>
                        </div>
                        <div class="bg-gray-100 rounded py-6 px-6">
                            <div class="flex items-center justify-between">
                                <p tabindex="0" class="focus:outline-none text-base font-medium leading-none text-gray-800">New Comment Added</p>
                                <div class="relative">
                                    <div class="dropdown-content mt-8 absolute hidden left-0 shadow-md z-10 w-32">
                                        <ul class="bg-white shadow rounded py-1">
                                            <li class="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                            <li class="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                            <li class="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                        </ul>
                                    </div>
                                    <button class="focus:outline-none" aria-label="dropdown" role="button">
                                        <svg onclick="dropdownFunction(this)"   class=" dropbtn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#52525B"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <p tabindex="0" class="focus:outline-none text-sm leading-5 text-gray-600 mt-2 sm:w-11/12">New comments are a great way to let your team know what they you are upto and how far along the project has progressed. It can also be valuable for someone that is looking for such information so that they are not lost and know what needs to be done next</p>
                            <div class="flex items-center mt-5">
                                <img tabindex="0" alt="girl avatar" class="focus:outline-none w-8 h-8 rounded-full shadow" src="https://cdn.tuk.dev/assets/templates/olympus/projects(15).png" />
                                <p tabindex="0" class="focus:outline-none text-sm leading-none text-gray-800 ml-2">Anika Dias</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {
  name: "component",
  data() {
    return {
        show: null
    };
  },
  methods: {    
  },
  mounted() {},
};
</script>

<style>
.checkbox:checked + .check-icon {
    display: flex;
}
</style>    
