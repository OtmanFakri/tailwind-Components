<template>
    <body class="flex items-center justify-center py-8">
        <div class="lg:pr-6 lg:w-5/12 w-full px-4">
            <div class="border rounded-lg border pb-8 border-gray-200">
                <div class="flex items-center border-b border-gray-200 justify-between px-6 py-3">
                    <p tabindex="0" class="focus:outline-none text-sm lg:text-xl font-semibold leading-tight text-gray-800">Customer Support</p>
                    <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 focus:bg-indigo-50 flex cursor-pointer items-center justify-center px-3 py-2.5 border rounded border-gray-100">
                        <p class="text-xs md:text-sm leading-none text-gray-600">Filter by: Latest</p>
                    </button>
                </div>
                <div class="px-6 pt-8">
                    <div tabindex="0" class="focus:outline-none">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <p class="text-xs md:text-sm font-semibold leading-none text-gray-800">David Jones</p>
                                <p class="text-xs md:text-sm leading-none text-blue-700 pl-3">(CID 879-10-940)</p>
                            </div>
                            <div>
                                <p class="text-xs md:text-sm leading-none text-right text-gray-600">2hrs ago</p>
                            </div>
                        </div>
                        <div class="py-2">
                            <p class="text-xs md:text-sm leading-tight text-gray-600">Order has not been received and is past the delivery...</p>
                        </div>
                        <div>
                            <a href="javascript:void(0)" class="hover:text-gray-800 focus:outline-none focus:text-gray-800 text-sm leading-none underline text-indigo-700 cursor-pointer">Resolve</a>
                        </div>
                    </div>
                    <div tabindex="0" class="focus:outline-none pt-6">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <p class="text-xs md:text-sm font-semibold leading-none text-gray-800">Carla Smith</p>
                                <p class="text-xs md:text-sm leading-none text-blue-700 pl-3">(CID 879-10-940)</p>
                            </div>
                            <div>
                                <p class="text-xs md:text-sm leading-none text-right text-gray-600">2hrs ago</p>
                            </div>
                        </div>
                        <div class="py-2">
                            <p class="text-xs md:text-sm leading-tight text-gray-600">Order has not been received and is past the delivery...</p>
                        </div>
                        <div>
                            <a href="javascript:void(0)" class="hover:text-gray-800 focus:outline-none focus:text-gray-800 text-sm leading-none underline text-indigo-700 cursor-pointer">Resolve</a>
                        </div>
                    </div>
                    <div tabindex="0" class="focus:outline-none pt-6">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <p class="text-xs md:text-sm font-semibold leading-none text-gray-800">Samantha. J</p>
                                <p class="text-xs md:text-sm leading-none text-blue-700 pl-3">(CID 879-10-940)</p>
                            </div>
                            <div>
                                <p class="text-xs md:text-sm leading-none text-right text-gray-600">2hrs ago</p>
                            </div>
                        </div>
                        <div class="py-2">
                            <p class="text-xs md:text-sm leading-tight text-gray-600">Order has not been received and is past the delivery...</p>
                        </div>
                        <div>
                            <a href="javascript:void(0)" class="hover:text-gray-800 focus:outline-none focus:text-gray-800 text-sm leading-none underline text-indigo-700 cursor-pointer">Resolve</a>
                        </div>
                    </div>
                    <div tabindex="0" class="focus:outline-none pt-6 pb-0.5">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <p class="text-xs md:text-sm font-semibold leading-none text-gray-800">Dwayne Jon</p>
                                <p class="text-xs md:text-sm leading-none text-blue-700 pl-3">(CID 879-10-940)</p>
                            </div>
                            <div>
                                <p class="text-xs md:text-sm leading-none text-right text-gray-600">2hrs ago</p>
                            </div>
                        </div>
                        <div class="py-2">
                            <p class="text-xs md:text-sm leading-tight text-gray-600">Order has not been received and is past the delivery...</p>
                        </div>
                        <div>
                            <a href="javascript:void(0)" class="hover:text-gray-800 focus:outline-none focus:text-gray-800 text-sm leading-none underline text-indigo-700 cursor-pointer">Resolve</a>
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
