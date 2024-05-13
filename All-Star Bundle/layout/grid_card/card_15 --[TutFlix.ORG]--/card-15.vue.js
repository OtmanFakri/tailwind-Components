<template>
    <div class="bg-gray-300 min-h-screen">
        <div class="flex items-center justify-center py-8 px-4">
            <div class="md:w-96 shadow-lg w-full">
                <div class="px-5 py-6 bg-indigo-700 rounded-t">
                    <p class="text-2xl font-bold leading-normal text-white">Get the latest news</p>
                    <p class="pt-3 text-xs leading-4 text-white">Subscribe to our newsletter and receive weekly updates and free components each week</p>
                    <p class="text-xs py-5 leading-3 text-white">Unsubscribe anytime.</p>
                </div>
                <div class="bg-white px-5 py-6 rounded-b">
                    <lable class="text-sm font-bold leading-none text-gray-800">Email</lable>
                    <div class="flex items-center border-gray-200 border px-3 rounded mt-2">
                        <input class="w-full py-3 focus:outline-none text-gray-900 text-xs leading-3 w-full placeholder-gray-900" placeholder="Enter your email" />
                        <p class="text-xs font-semibold leading-3 text-indigo-700">SUBMIT</p>
                    </div>
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
