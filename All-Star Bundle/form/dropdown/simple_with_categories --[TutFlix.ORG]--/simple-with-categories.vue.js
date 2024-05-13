<template>
    <div class="mx-auto pt-6 pb-10">
        <div class="container flex justify-center mx-auto py-6">
            <div class="h-56 mb-56">
                <!-- Code block starts -->

                <div class="relative">
                    <div class="bg-white dark:bg-gray-800 flex items-center justify-between border rounded border-gray-300 dark:border-gray-700 w-40 cursor-pointer" data-menu>
                        <p class="px-3 py-3 text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal font-normal">Basic Options</p>
                        <div class="cursor-pointer text-gray-600 dark:text-gray-400 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 15 12 9 18 15" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                    </div>
                    <ul class="visible transition duration-300 opacity-100 bg-white dark:bg-gray-800 shadow rounded mt-2 py-1 w-48 absolute">
                        <li class="text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 font-bold text-sm leading-3 tracking-normal py-3 px-3">Display</li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Interface Settings</li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Color Theme</li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Wallpaper</li>
                        <li><hr class="border-gray-200 dark:border-gray-700 my-1" /></li>
                        <li class="text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 font-bold text-sm leading-3 tracking-normal py-3 px-3">Account</li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Notifications</li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Account Data</li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Sign Out</li>
                        <li>
                            <hr class="border-gray-200 dark:border-gray-700 my-1" />
                        </li>
                        <li class="text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 font-bold text-sm leading-3 tracking-normal py-3 px-3">Alerts</li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Notifications</li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Delete Account</li>
                    </ul>
                </div>

                <!-- Code block ends -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SimpleWithCategories",
    mounted: function () {
        this.main();
    },
    methods: {
        main() {
            let elements = document.querySelectorAll("[data-menu]");
            for (let i = 0; i < elements.length; i++) {
                let main = elements[i];
                let andicators = main.querySelectorAll("svg");
                main.addEventListener("click", function () {
                    let element = main.parentElement.parentElement;
                    let child = element.querySelector("ul");
                    if (child.classList.contains("opacity-0")) {
                        child.classList.toggle("invisible");
                        child.classList.toggle("visible");
                        andicators[0].style.display = "block";
                        andicators[1].style.display = "none";
                    } else {
                        setTimeout(function () {
                            child.classList.toggle("invisible");
                            child.classList.toggle("visible");
                        }, 300);
                        andicators[0].style.display = "none";
                        andicators[1].style.display = "block";
                    }
                    child.classList.toggle("opacity-0");
                    child.classList.toggle("opacity-100");
                });
            }
        },
    },
};
</script>
