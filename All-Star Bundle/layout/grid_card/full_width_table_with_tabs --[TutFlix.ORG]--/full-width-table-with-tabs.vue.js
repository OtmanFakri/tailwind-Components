<template>
    <!-- Card is full width. Use in 12 col grid for best view. -->
    <!-- Card code block start -->
    <div class="w-full bg-white dark:bg-gray-800 shadow rounded">
        <div class="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row p-8 justify-between items-start sm:items-center w-full">
            <h2 class="text-lg leading-4 font-bold text-gray-800 dark:text-gray-100 mb-4 sm:mb-0">Job Postings</h2>
            <div class="mt-4 -mb-4 sm:hidden relative w-full z-10">
                <div class="absolute inset-0 m-auto mr-4 z-0 w-5 h-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-selector" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a0aec0" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="8 9 12 5 16 9" />
                        <polyline points="16 15 12 19 8 15" />
                    </svg>
                </div>
                <select aria-label="Selected tab" class="form-select block w-full py-2 px-3 border border-gray-300 rounded text-gray-600 dark:text-gray-400 appearance-none bg-transparent">
                    <option class="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                    <option class="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                    <option selected="" class="text-sm text-gray-600 dark:text-gray-400">Active</option>
                    <option class="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                    <option class="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                </select>
            </div>
            <ul class="hidden sm:flex items-start sm:items-center">
                <li @click="activeTab($event)" class="cursor-pointer font-normal flex justify-center items-center w-16 h-8 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 bg-gray-200 text-indigo-700 text-sm">Active</li>
                <li @click="activeTab($event)" class="cursor-pointer font-normal flex justify-center items-center w-16 h-8 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 bg-white dark:bg-gray-800 text-gray-500 text-sm">Inactive</li>
                <li @click="activeTab($event)" class="cursor-pointer font-normal flex justify-center items-center w-16 h-8 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 bg-white dark:bg-gray-800 text-gray-500 text-sm">Inactive</li>
                <li @click="activeTab($event)" class="cursor-pointer font-normal flex justify-center items-center w-16 h-8 rounded sm:ml-4 bg-white dark:bg-gray-800 text-gray-500 text-sm">Inactive</li>
            </ul>
        </div>
        <div class="w-full overflow-x-scroll lg:overflow-x-hidden">
            <table class="min-w-full bg-white dark:bg-gray-800">
                <thead>
                    <tr class="w-full h-16 border-gray-300 border-b">
                        <th class="pl-8 pr-16 text-left">
                            <div class="py-4 flex items-center">
                                <div class="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                    <input id="checkAll" aria-label="Check All" type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full" @change="checkAll()" />
                                    <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                        <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <th class="text-gray-600 dark:text-gray-400 pr-16 text-left text-base tracking-normal leading-4 py-8">Name</th>
                        <th class="text-gray-600 dark:text-gray-400 pr-16 text-left text-base tracking-normal leading-4 py-8">Date</th>
                        <th class="text-gray-600 dark:text-gray-400 pr-24 text-left text-base tracking-normal leading-4 py-8">Amount</th>
                        <th class="text-gray-600 dark:text-gray-400 pr-10 text-left text-base tracking-normal leading-4 py-8">Status</th>
                        <th class="text-gray-600 dark:text-gray-400 pr-8 text-left text-base tracking-normal leading-4 py-8">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="h-24 border-gray-300 border-b">
                        <td class="pl-8 pr-16 text-left whitespace-no-wrap">
                            <div class="py-4 flex items-center">
                                <div class="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                    <input aria-label="Check row" type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                    <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                        <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="text-base pr-16 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Ralph Lauren</td>
                        <td class="text-base pr-16 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">28 March ’20</td>
                        <td class="text-base pr-24 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">$200</td>
                        <td class="pr-10">
                            <div class="w-full flex justify-start items-center h-full">
                                <div class="bg-green-200 text-green-500 rounded-full text-sm leading-3 py-2 px-5">Active</div>
                            </div>
                        </td>
                        <td class="pr-8">
                            <button class="focus:outline-none bg-gray-100 dark:bg-gray-700 transition duration-150 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-600 rounded border border-gray-300 dark:border-gray-200 text-gray-700 dark:text-gray-400 px-6 py-2 text-xs">Action</button>
                        </td>
                    </tr>
                    <tr class="h-24 border-gray-300 border-b">
                        <td class="pl-8 pr-16 text-left">
                            <div class="py-4 flex items-center">
                                <div class="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                    <input aria-label="Check row" type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                    <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                        <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="text-base pr-16 text-gray-800 dark:text-gray-100 tracking-normal leading-4">Ralph Lauren</td>
                        <td class="text-base pr-16 text-gray-800 dark:text-gray-100 tracking-normal leading-4">28 March ’20</td>
                        <td class="text-base pr-24 text-gray-800 dark:text-gray-100 tracking-normal leading-4">$200</td>
                        <td class="pr-10">
                            <div class="w-full flex justify-start items-center h-full">
                                <div class="bg-green-200 text-green-500 rounded-full text-sm leading-3 py-2 px-5">Active</div>
                            </div>
                        </td>
                        <td class="pr-8">
                            <button class="focus:outline-none bg-gray-100 dark:bg-gray-700 transition duration-150 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-600 rounded border border-gray-300 dark:border-gray-200 text-gray-700 dark:text-gray-400 px-6 py-2 text-xs">Action</button>
                        </td>
                    </tr>
                    <tr class="h-24 border-gray-300 border-b">
                        <td class="pl-8 pr-16 text-left">
                            <div class="py-4 flex items-center">
                                <div class="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                    <input aria-label="Check row" type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                    <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                        <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="text-base pr-16 text-gray-800 dark:text-gray-100 tracking-normal leading-4">Ralph Lauren</td>
                        <td class="text-base pr-16 text-gray-800 dark:text-gray-100 tracking-normal leading-4">28 March ’20</td>
                        <td class="text-base pr-24 text-gray-800 dark:text-gray-100 tracking-normal leading-4">$200</td>
                        <td class="pr-10">
                            <div class="w-full flex justify-start items-center h-full">
                                <div class="bg-green-200 text-green-500 rounded-full text-sm leading-3 py-2 px-5">Active</div>
                            </div>
                        </td>
                        <td class="pr-8">
                            <button class="focus:outline-none bg-gray-100 dark:bg-gray-700 transition duration-150 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-600 rounded border border-gray-300 dark:border-gray-200 text-gray-700 dark:text-gray-400 px-6 py-2 text-xs">Action</button>
                        </td>
                    </tr>
                    <tr class="h-24">
                        <td class="pl-8 pr-16 text-left">
                            <div class="py-4 flex items-center">
                                <div class="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                    <input aria-label="Check row" type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                    <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                        <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="text-base pr-16 text-gray-800 dark:text-gray-100 tracking-normal leading-4">Ralph Lauren</td>
                        <td class="text-base pr-16 text-gray-800 dark:text-gray-100 tracking-normal leading-4">28 March ’20</td>
                        <td class="text-base pr-24 text-gray-800 dark:text-gray-100 tracking-normal leading-4">$200</td>
                        <td class="pr-10">
                            <div class="w-full flex justify-start items-center h-full">
                                <div class="bg-green-200 text-green-500 rounded-full text-sm leading-3 py-2 px-5">Active</div>
                            </div>
                        </td>
                        <td class="pr-8">
                            <button class="focus:outline-none bg-gray-100 dark:bg-gray-700 transition duration-150 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-600 rounded border border-gray-300 dark:border-gray-200 text-gray-700 dark:text-gray-400 px-6 py-2 text-xs">Action</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- Card code block end -->
</template>

<script>
export default {
    name: "FullWidthTableWithTabs",
    methods: {
        activeTab(event) {
            let siblings = event.currentTarget.parentNode.querySelectorAll("li");
            for (let item of siblings) {
                item.classList.add("text-gray-600 dark:text-gray-400");
                item.classList.remove("text-indigo-700");
                item.classList.remove("bg-gray-200");
                item.innerHTML = "Inactive";
            }
            event.currentTarget.classList.remove("text-gray-600 dark:text-gray-400");
            event.currentTarget.classList.add("text-indigo-700");
            event.currentTarget.classList.add("bg-gray-200");
            event.currentTarget.innerHTML = "Active";
        },
        checkAll() {
            let checkAll = document.getElementById("checkAll");
            let table = checkAll.closest("table");
            let checkboxes = table.querySelectorAll("input[type=checkbox]");
            for (let i = 0; i < checkboxes.length; i++) {
                let checkbox = checkboxes[i];
                checkbox.checked = event.target.checked;
            }
        },
    },
};
</script>

<style>
.checkbox:checked + .check-icon {
    display: flex;
}
</style>
