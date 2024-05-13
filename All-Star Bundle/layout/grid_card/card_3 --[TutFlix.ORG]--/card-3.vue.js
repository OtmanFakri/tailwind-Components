<template>
    <div class="bg-gray-300 min-h-screen">
        <div class="flex items-center justify-center py-8 px-4">
            <div class="md:w-96 rounded-md shadow-lg p-5 bg-white">
                <h1 class="pt-2 pb-7 text-gray-800 font-bold text-lg">Recent Updates</h1>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <div class="w-12 h-12 flex items-center justify-center bg-purple-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A78BFA" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="9" cy="19" r="2" />
                                <circle cx="17" cy="19" r="2" />
                                <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
                            </svg>
                        </div>
                        <p class="text-gray-600 text-sm font-medium pl-3">Order# IDO-214-152</p>
                    </div>
                    <p class="text-sm font-medium text-indigo-500">$145</p>
                </div>
                <div class="flex items-center justify-between pt-5">
                    <div class="flex items-center">
                        <div class="w-12 h-12 flex items-center justify-center bg-green-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2DD4BF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />
                                <line x1="8" y1="9" x2="16" y2="9" />
                                <line x1="8" y1="13" x2="14" y2="13" />
                            </svg>
                        </div>
                        <p class="text-gray-600 text-sm font-medium pl-3">New message from <span class="text-blue-500">@Kelly190</span></p>
                    </div>
                </div>
                <div class="flex items-center justify-between pt-5">
                    <div class="flex items-center">
                        <div class="w-12 h-12 flex items-center justify-center bg-purple-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A78BFA" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="9" cy="19" r="2" />
                                <circle cx="17" cy="19" r="2" />
                                <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
                            </svg>
                        </div>
                        <p class="text-gray-600 text-sm font-medium pl-3">Order# IDO-325-664</p>
                    </div>
                    <p class="text-sm font-medium text-indigo-500">$205</p>
                </div>
                <div class="flex items-center justify-between pt-5">
                    <div class="flex items-center">
                        <div class="w-12 h-12 flex items-center justify-center bg-green-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-invoice" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2DD4BF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                <line x1="9" y1="7" x2="10" y2="7" />
                                <line x1="9" y1="13" x2="15" y2="13" />
                                <line x1="13" y1="17" x2="15" y2="17" />
                            </svg>
                        </div>
                        <p class="text-gray-600 text-sm font-medium pl-3">Invoice generated</p>
                    </div>
                    <a href="javascript:void(0)">
                        <p class="text-sm font-medium cursor-pointer text-indigo-500">View</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
};
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
