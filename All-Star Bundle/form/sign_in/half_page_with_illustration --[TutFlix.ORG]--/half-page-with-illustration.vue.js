<template>
    <section class="bg-white h-screen">
        <div class="mx-auto flex lg:justify-center h-full flex-col lg:flex-row">
            <form v-on:submit.prevent class="w-full lg:w-1/2 flex justify-center bg-gray-100 dark:bg-gray-900">
                <div class="w-full sm:w-4/6 md:w-4/6 xl:w-2/3 text-gray-800 dark:text-gray-100 mb-12 sm:mb-0 px-2 sm:px-0">
                    <div class="sm:py-20 px-2 flex flex-col items-center justify-center mt-8 sm:mt-0">
                        <svg class="w-32 h-32" id="logo" enable-background="new 0 0 300 300" height="44" viewBox="0 0 300 300" width="43" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g>
                                <path
                                    fill="#4c51bf"
                                    d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                                />
                            </g>
                        </svg>
                    </div>
                    <div class="pt-10 px-2 flex flex-col items-center justify-center">
                        <h3 class="text-2xl md:text-3xl sm:text-4xl font-bold leading-tight">Login To Your Account</h3>
                    </div>
                    <div class="mt-12 w-full px-2 sm:px-6">
                        <div class="flex flex-col mt-5">
                            <label for="email" class="text-lg font-semibold leading-tight">Email</label>
                            <input required id="email" name="email" class="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow" type="email" />
                        </div>
                        <div class="flex flex-col mt-5">
                            <label for="password" class="text-lg font-semibold fleading-tight">Password</label>
                            <input required id="password" name="password" class="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 focus:border-indigo-700 border-gray-300 border shadow" type="password" />
                        </div>
                    </div>
                    <div class="pt-6 w-full flex justify-between px-2 sm:px-6">
                        <div class="flex items-center">
                            <input id="rememberme" name="rememberme" class="w-3 h-3 mr-2" type="checkbox" />
                            <label for="rememberme" class="text-xs">Remember Me</label>
                        </div>
                        <a class="text-xs text-indigo-600" href="javascript: void(0)">Forgot Password?</a>
                    </div>
                    <div class="px-2 sm:mb-16 sm:px-6">
                        <button type="submit" class="focus:outline-none w-full sm:w-auto bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm mt-6">Login to Your Account</button>
                        <p class="mt-12 sm:mt-32 text-xs text-center">Don’t Have An Account? <a class="underline text-indigo-600" href="javascript: void(0)">Sign Up</a></p>
                    </div>
                </div>
            </form>
            <div class="w-full lg:w-1/2 bg-indigo-600 px-2 py-12 sm:p-12 flex flex-col relative">
                <div class="flex-1 flex flex-col justify-center">
                    <div>
                        <img src="https://dh-ui.s3.amazonaws.com/assets/team.png" alt="" />
                    </div>
                </div>
                <div class="flex flex-col sm:flex-row rounded bg-white dark:bg-gray-800 dark:border-gray-700 border border-gray-200 mt-10 lg:mt-0">
                    <div class="py-12 flex items-center sm:border-r dark:border-gray-700 w-full sm:w-1/6 justify-center text-indigo-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="16 4 20 4 20 8" />
                            <line x1="14" y1="10" x2="20" y2="4" />
                            <polyline points="8 20 4 20 4 16" />
                            <line x1="4" y1="20" x2="10" y2="14" />
                            <polyline points="16 20 20 20 20 16" />
                            <line x1="14" y1="14" x2="20" y2="20" />
                            <polyline points="8 4 4 4 4 8" />
                            <line x1="4" y1="4" x2="10" y2="10" />
                        </svg>
                    </div>
                    <div class="pl-4 pb-12 sm:py-6 pr-6 sm:w-5/6">
                        <h3 class="text-md font-semibold text-gray-800 dark:text-gray-100 leading-normal">Hassle Free Team Augmentation Like Never Before.</h3>
                        <p class="text-sm pt-2 text-gray-700 dark:text-gray-400 leading-normal">Staff augmentation is quickly becoming a buzzword on the IT job market, attracting more global businesses to hire remotely.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "HalfPageWithIllustration",
    mounted: function () {
        this.submit();
    },
    methods: {
        submit() {
            let form = document.getElementById("login");
            form.addEventListener(
                "submit",
                function (event) {
                    event.preventDefault();
                    let elements = form.elements;
                    let payload = {};
                    for (let i = 0; i < elements.length; i++) {
                        let item = elements.item(i);
                        switch (item.type) {
                            case "checkbox":
                                payload[item.name] = item.checked;
                                break;
                            case "submit":
                                break;
                            default:
                                payload[item.name] = item.value;
                                break;
                        }
                    }
                    // Place your API call here to submit your payload.
                    // console.log("payload", payload);
                },
                true
            );
        },
    },
};
</script>
