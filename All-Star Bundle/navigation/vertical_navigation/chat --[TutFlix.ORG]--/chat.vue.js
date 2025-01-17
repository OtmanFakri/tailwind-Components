<template>
  <body>
        <div class="w-80 md:pl-10 pl-4 py-8">
            <div>
                <div aria-label="search "  tabindex="0" class="focus:outline-none flex items-center pl-3 bg-gray-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6.66667 11.3333C9.244 11.3333 11.3333 9.244 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333Z" stroke="#4B5563" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M14 14L10 10" stroke="#4B5563" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <input type="text" class=" py-3 pl-1 w-full focus:outline-none text-sm font-medium text-gray-600 bg-transparent placeholder-gray-600" placeholder="Search" />
                </div>
                <div class="flex items-center mt-5">
                    <button class="focus:ring-2 focus:ring-indigo-500 focus:outline-none flex items-center justify-center px-3 py-2 bg-indigo-100 rounded-full text-sm leading-none text-indigo-700">All</button>
                    <button class="focus:ring-2 focus:ring-indigo-500 focus:outline-none flex items-center justify-center px-3 py-2 ml-7 hover:bg-indigo-100 bg-transparent hover:text-indigo-700 rounded-full text-sm leading-none text-gray-600">Unread</button>
                    <button class="focus:ring-2 focus:ring-indigo-500 focus:outline-none flex items-center justify-center px-3 py-2 ml-7 bg-transparent hover:bg-indigo-100 hover:text-indigo-700 rounded-full text-sm leading-none text-gray-600">Channels</button>
                </div>
            </div>
            <div class="pt-9 pb-4">
                <div class="flex items-center">
                    <p tabindex="0" class="focus:outline-none text-xs font-medium leading-3 text-gray-600 pr-2">PINNED</p>
                    <button aria-label="hide" class="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M12 10L8 6L4 10" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
                <div class="mt-4">
                    <button class="focus:outline-none py-3 hover:bg-gray-100 focus:bg-gray-100 xl:pl-4 w-full rounded flex items-center">
                        <p class="text-sm font-medium leading-none text-gray-800">#Visual Design</p>
                    </button>
                    <button class="focus:outline-none mt-1 py-3 xl:pl-4 hover:bg-gray-100 focus:bg-gray-100 w-full rounded flex items-center">
                        <p class="text-sm font-medium leading-none text-gray-800">#Finance</p>
                    </button>
                </div>
            </div>
            <div class="mt-10">
                <div class="flex items-center">
                    <p tabindex="0" class="focus:outline-none text-xs font-medium leading-3 text-gray-600 pr-2">CHANNELS</p>
                    <button aria-label="hide" class="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M12 10L8 6L4 10" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
                <div class="mt-4">
                    <button class="focus:outline-none py-3 hover:bg-gray-100 focus:bg-gray-100 xl:pl-4 w-full rounded flex items-center">
                        <p class="text-sm font-medium leading-none text-gray-800">#Visual Design</p>
                    </button>
                    <button class="focus:outline-none mt-1 py-3 xl:pl-4 hover:bg-gray-100 focus:bg-gray-100 w-full rounded flex items-center">
                        <p class="text-sm font-medium leading-none text-gray-800">#Finance</p>
                    </button>
                    <button class="focus:outline-none mt-1 py-3 xl:pl-4 hover:bg-gray-100 focus:bg-gray-100 w-full rounded flex items-center">
                        <p class="text-sm font-medium leading-none text-gray-800">#Project Olympus</p>
                    </button>
                    <button class="focus:outline-none mt-1 py-3 xl:pl-4 hover:bg-gray-100 focus:bg-gray-100 w-full rounded flex items-center">
                        <p class="text-sm font-medium leading-none text-gray-800">#Frontend Devs</p>
                    </button>
                </div>
            </div>
            <div class="mt-10 pb-10">
                <div class="flex items-center">
                    <p tabindex="0" class="focus:outline-none text-xs font-medium leading-3 text-gray-600 pr-2">Messages</p>
                    <button aria-label="hide" class="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M12 10L8 6L4 10" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
                <div class="mt-4">
                    <div class="flex items-center">
                        <img alt="img" tabindex="0" class="focus:outline-none w-10 h-10 rounded-full shadow-md" src="https://cdn.tuk.dev/assets/templates/olympus/chats(6).png" />
                        <div class="ml-2">
                            <p tabindex="0" class="focus:outline-none text-sm font-medium leading-none text-gray-800">James Hart</p>
                            <p tabindex="0" class="focus:outline-none mt-2 text-xs leading-none text-gray-600">Let’s catchup sometime later?</p>
                        </div>
                    </div>
                    <div class="flex items-center mt-7">
                        <img alt="img 1" tabindex="0" class="focus:outline-none w-10 h-10 rounded-full shadow-md" src="https://cdn.tuk.dev/assets/templates/olympus/chats(7).png" />
                        <div class="ml-2">
                            <p tabindex="0" class="focus:outline-none text-sm font-medium leading-none text-gray-800">Ronald McDonald</p>
                            <p tabindex="0" class="focus:outline-none mt-2 text-xs leading-none text-gray-600">Let’s catchup sometime later?</p>
                        </div>
                    </div>
                    <div class="flex items-center mt-7">
                        <img alt="img 2" tabindex="0" class="focus:outline-none w-10 h-10 rounded-full shadow-md" src="https://cdn.tuk.dev/assets/templates/olympus/chats(8).png" />
                        <div class="ml-2">
                            <p tabindex="0" class="focus:outline-none text-sm font-medium leading-none text-gray-800">Amanda Mathison</p>
                            <p tabindex="0" class="focus:outline-none mt-2 text-xs leading-none text-gray-600">Let’s catchup sometime later?</p>
                        </div>
                    </div>
                    <div class="flex items-center mt-7">
                        <img alt="img 3" tabindex="0" class="focus:outline-none w-10 h-10 rounded-full shadow-md" src="https://cdn.tuk.dev/assets/templates/olympus/chats(9).png" />
                        <div class="ml-2">
                            <p tabindex="0" class="focus:outline-none text-sm font-medium leading-none text-gray-800">Josh Cleveland</p>
                            <p tabindex="0" class="focus:outline-none mt-2 text-xs leading-none text-gray-600">Let’s catchup sometime later?</p>
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
    return {};
  },
  methods: {    
  },
};
</script>

<style scoped>
</style>