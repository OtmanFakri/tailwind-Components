<template>
    <div class="bg-gray-200 dark:bg-gray-900 min-h-screen">
        <div class="flex items-center justify-center w-full h-full py-12 px-4">
            <div class="bg-white dark:bg-gray-800 rounded shadow max-w-xl py-6 sm:px-8 px-4">
                <div class="flex items-center justify-between">
                    <p class="text-base sm:text-2xl font-semibold leading-4 text-gray-800 dark:text-gray-100">Complete Analysis</p>
                    <div class="relative">
                        <button class="focus:outline-none">
                            <svg class="dropbtn dark:text-gray-100 text-gray-800" onclick="dropdownFunction(this)" xmlns="http://www.w3.org/2000/svg" width="18" height="4" viewBox="0 0 18 4" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C7.896 0 7 0.896 7 2C7 3.104 7.896 4 9 4C10.104 4 11 3.104 11 2C11 0.896 10.104 0 9 0Z" fill="currentColor" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C14.896 0 14 0.896 14 2C14 3.104 14.896 4 16 4C17.104 4 18 3.104 18 2C18 0.896 17.104 0 16 0Z" fill="currentColor" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0C0.896 0 0 0.896 0 2C0 3.104 0.896 4 2 4C3.104 4 4 3.104 4 2C4 0.896 3.104 0 2 0Z" fill="currentColor" />
                            </svg>
                        </button>
                        <div class="dropdown-content bg-white shadow w-24 absolute left-0 -ml-16 sm:-ml-12 md:-ml-16 z-30 hidden">
                            <div class="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                <p>Edit</p>
                            </div>
                            <div class="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                <p>Delete</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="text-sm leading-5 mt-4 text-gray-500 dark:text-gray-400 sm:w-10/12">Every large design company whether it’s a multi-national branding corporation or a regular.</p>
                <div class="mt-8">
                    <div class="flex flex-col justify-end">
                        <p class="text-sm font-semibold leading-none text-right text-gray-500 dark:text-gray-400">80% complete</p>
                        <div class="bg-green-50 rounded-full mt-3 h-2 w-full">
                            <div class="bg-green-500 w-5/6 h-2 rounded-full"></div>
                        </div>
                    </div>
                    <div class="flex items-center mt-5">
                        <img class="w-10 h-10 rounded-full" src="https://i.ibb.co/XStMRFq/Photo.png" alt="profile " />
                        <img class="w-10 h-10 ml-1 rounded-full" src="https://i.ibb.co/FnQF4MY/Photo1.png" alt="profile " />
                        <img class="w-10 h-10 ml-1 rounded-full" src="https://i.ibb.co/nRjJkRz/Photo2.png" alt="profile " />
                        <div class="w-10 h-10 rounded-full ml-1 flex items-center justify-center bg-indigo-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8334 6.16634H7.83337V1.16634C7.83337 0.705508 7.46004 0.333008 7.00004 0.333008C6.54004 0.333008 6.16671 0.705508 6.16671 1.16634V6.16634H1.16671C0.706707 6.16634 0.333374 6.53884 0.333374 6.99967C0.333374 7.46051 0.706707 7.83301 1.16671 7.83301H6.16671V12.833C6.16671 13.2938 6.54004 13.6663 7.00004 13.6663C7.46004 13.6663 7.83337 13.2938 7.83337 12.833V7.83301H12.8334C13.2934 7.83301 13.6667 7.46051 13.6667 6.99967C13.6667 6.53884 13.2934 6.16634 12.8334 6.16634Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
