<template>
  <body class="flex items-center justify-center px-4 py-8">
        <div class="shadow rounded-lg p-3 sm:p-6 max-w-md w-full">
            <div class="flex items-center">
                <p tabindex="0" class="focus:outline-none text-base font-semibold leading-none text-gray-800">Shared Files</p>
                <button aria-label="hide" tabindex="0" class="focus:outline-none focus:ring-2 ml-3 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M12 10L8 6L4 10" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
            </div>
            <div class="mt-5">
                <div class="bg-white rounded shadow py-2 px-2">
                    <div class="flex items-start justify-between w-full">
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-red-600 rounded-sm flex items-center justify-center">
                                <p tabindex="0" class="focus:outline-none text-xs font-bold leading-3 text-white">PPT</p>
                            </div>
                            <div class="pl-2">
                                <p tabindex="0" class="focus:outline-none text-sm font-medium leading-none text-gray-800">Wireframes.ppt</p>
                                <p tabindex="0" class="focus:outline-none text-xs leading-3 text-gray-500 mt-2">Shared by Ryan Renolds</p>
                            </div>
                        </div>
                        <div class="relative">
                            <button @click="show0=!show0" aria-label="show options" class="focus:outline-none">
                                <svg  class="focus:outline-none focus:ring-2 dropbtn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                            <div v-if="show0" class="dropdown-content bg-white shadow w-24 absolute z-30 -ml-16 xl:-ml-10 2xl:ml-0">
                                <div tabindex="0" class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                    <p>Edit</p>
                                </div>
                                <div tabindex="0" class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                    <p>Delete</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded shadow py-2 px-2 mt-3">
                    <div class="flex items-start justify-between w-full">
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-blue-600 rounded-sm flex items-center justify-center">
                                <p class="text-xs font-bold leading-3 text-white">DOC</p>
                            </div>
                            <div class="pl-2">
                                <p tabindex="0" class="focus:outline-none text-sm font-medium leading-none text-gray-800">Project Outline.doc</p>
                                <p tabindex="0" class="focus:outline-none text-xs leading-3 text-gray-500 mt-2">Shared by Ashley Wilson</p>
                            </div>
                        </div>
                        <div class="relative">
                            <button @click="show1=!show1" aria-label="show options" class="focus:outline-none">
                                <svg class="focus:outline-none focus:ring-2 dropbtn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                            <div v-if="show1" class="dropdown-content bg-white shadow w-24 absolute z-30 -ml-16 xl:-ml-10 2xl:ml-0">
                                <div tabindex="0" class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                    <p>Edit</p>
                                </div>
                                <div tabindex="0" class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                    <p>Delete</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded shadow py-2 px-2 mt-3">
                    <div class="flex items-start justify-between w-full">
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-gray-600 rounded-sm flex items-center justify-center">
                                <p tabindex="0" class="focus:outline-none text-xs font-bold leading-3 text-white">FIG</p>
                            </div>
                            <div class="pl-2">
                                <p tabindex="0" class="focus:outline-none text-sm font-medium leading-none text-gray-800">Project Outline.doc</p>
                                <p tabindex="0" class="focus:outline-none text-xs leading-3 text-gray-500 mt-2">Shared by Ashley Wilson</p>
                            </div>
                        </div>
                        <div class="relative">
                            <button @click="show2=!show2" aria-label="show options" class="focus:outline-none">
                                <svg class="focus:outline-none focus:ring-2 dropbtn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                            <div v-if="show2" class="dropdown-content bg-white shadow w-24 absolute z-30 -ml-16 xl:-ml-10 2xl:ml-0">
                                <div tabindex="0" class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                    <p>Edit</p>
                                </div>
                                <div tabindex="0" class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                    <p>Delete</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded shadow py-2 px-2 mt-3">
                    <div class="flex items-start justify-between w-full">
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-red-600 rounded-sm flex items-center justify-center">
                                <p tabindex="0" class="focus:outline-none text-xs font-bold leading-3 text-white">PPT</p>
                            </div>
                            <div class="pl-2">
                                <p tabindex="0" class="focus:outline-none text-sm font-medium leading-none text-gray-800">Wireframes.ppt</p>
                                <p tabindex="0" class="focus:outline-none text-xs leading-3 text-gray-500 mt-2">Shared by Ryan Renolds</p>
                            </div>
                        </div>
                        <div class="relative">
                            <button @click="show3=!show3"  aria-label="show options" class="focus:outline-none">
                                <svg class="focus:outline-none focus:ring-2 dropbtn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                            <div v-if="show3" class="dropdown-content bg-white shadow w-24 absolute z-30 -ml-16 xl:-ml-10 2xl:ml-0">
                                <div tabindex="0" class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                    <p>Edit</p>
                                </div>
                                <div tabindex="0" class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                    <p>Delete</p>
                                </div>
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
      show0: false,
      show1: false,
      show2: false,
      show3: false
    };
  },
  methods: {},  
};
</script>

<style scoped>
</style>
