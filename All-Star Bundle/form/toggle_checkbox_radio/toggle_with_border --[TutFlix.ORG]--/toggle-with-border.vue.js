<template>
    <div class="mx-auto py-12 flex flex-col items-center">
        <!-- Code block starts -->
        <div class="cursor-pointer my-5 rounded-full bg-gray-200 relative shadow-sm">
            <input type="checkbox" name="toggle" id="toggle1" class="focus:outline-none checkbox w-6 h-6 rounded-full bg-white absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto" />
            <label for="toggle1" class="toggle-label dark:bg-gray-700 block w-12 h-4 overflow-hidden rounded-full bg-gray-300 cursor-pointer"></label>
        </div>
        <!-- Code block ends -->
        <!-- Code block starts -->
        <div class="cursor-pointer my-5 rounded-full bg-indigo-700 relative shadow-sm">
            <input checked type="checkbox" name="toggle" id="toggle2" class="focus:outline-none checkbox w-6 h-6 rounded-full bg-white absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto" />
            <label for="toggle2" class="toggle-label dark:bg-gray-700 block w-12 h-4 overflow-hidden rounded-full bg-gray-300 cursor-pointer"></label>
        </div>
        <!-- Code block ends -->
    </div>
</template>

<script>
export default {
    name: "ToggleWithBorder",
};
</script>

<style>
.checkbox:checked {
    /* Apply class right-0 and border-indigo-700*/
    right: 0;
    border-color: #4c51bf;
}
.checkbox:checked + .toggle-label {
    /* Apply class bg-indigo-700 */
    background-color: #4c51bf;
}
</style>
