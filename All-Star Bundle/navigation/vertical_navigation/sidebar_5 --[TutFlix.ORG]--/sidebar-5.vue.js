<template>
  <body class="overflow-y-hidden overflow-x-hidden" style="min-height: 825px;">
    <div class="bg-gray-50 xl:hidden flex justify-between w-full p-6 items-center ">
        <div class="flex justify-between  items-center space-x-3">
            <img src="../svgs/sidebar5-svg1.svg" alt="logo" />
            <p class="text-2xl leading-6 text-gray-800">OvonRueden</p>
        </div>
        <div aria-label="toggler" class="flex justify-center items-center">
            <button id="open"  aria-label="open"  @click="showNav(true)"
                class="hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
               <img class="text-gray-800" src="../svgs/sidebar5-svg2.svg" alt="menu" />
            </button>
            <button id="close"  aria-label="close" @click="showNav(true)"
                class=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                <img class="text-gray-800" src="../svgs/sidebar5-svg3.svg" alt="close" />
            </button>
        </div>
    </div>
    <div id="Main"
        class="sm:absolute top-0 sm:z-20 bg-gray-50  ease-in-out transition transform  xl:translate-x-0 duration-500 flex justify-start items-start w-full sm:w-64    flex-col h-full">
        <div class="hidden sm:flex justify-start p-6 items-center space-x-3  w-full">
            <img src="../svgs/sidebar5-svg1.svg" alt="logo" />
            <p class="text-2xl leading-6 text-gray-800">OvonRueden</p>
        </div>
        <div class="w-full px-6">
            <hr class="border-gray-300  w-full">
        </div>
        <div class="p-8  flex jusitf-start items-start flex-col space-y-2">
            <div>
                <img src="https://i.ibb.co/n83NqpH/Ellipse-2-1.png" alt="avatar" />
            </div>
            <div class="flex justify-start items-start flex-col space-y-1">
                <p class="cursor-pointer text-lg font-semibold leading-4  text-gray-800">Alexis Enache</p>
                <p class="cursor-pointer text-xs leading-3 text-gray-600">Alpha Squad</p>
            </div>
        </div>
        <div class="w-full px-6">
            <hr class="border-gray-300  w-full">
        </div>
        <div class="mt-6 flex flex-col justify-start items-start  px-4 w-full space-y-3 pb-5 ">
            <button
                class="focus:outline-none flex jusitfy-start hover:border-indigo-700 border border-transparent focus:border-indigo-700 focus:text-indigo-700 hover:text-indigo-700 text-gray-800 rounded py-3 pl-4 items-center space-x-6 w-full ">
                <svg class="fill-stroke " width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p class="text-base leading-4 ">Dashboard</p>
            </button>
            <button
                class="focus:outline-none flex jusitfy-start hover:border-indigo-700 border border-transparent focus:border-indigo-700 focus:text-indigo-700 hover:text-indigo-700 text-gray-800 rounded py-3 pl-4 items-center space-x-6 w-full">
                <svg class="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p class="text-base leading-4 ">User Menu</p>
            </button>
            <button
                class="focus:outline-none space-x-10 flex jusitfy-start hover:border-indigo-700 border border-transparent focus:orderg-indigo-700 focus:text-indigo-700 hover:text-indigo-700 text-gray-800 rounded py-3 px-4 items-center  w-full ">
                <div class="flex space-x-6 justify-start items-center w-full ">
                    <svg class="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p class="text-base leading-4  ">Messages</p>
                </div>
                <div class="py-1.5 px-2 bg-indigo-700 text-xs leading-3 text-gray-50 rounded-full">
                    8
                </div>
            </button>
            <button
                class="focus:outline-none flex jusitfy-start hover:border-indigo-700 border border-transparent focus:border-indigo-700 focus:text-indigo-700 hover:text-indigo-700 text-gray-800 rounded py-3 pl-4 items-center space-x-6 w-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.85 12.15L19 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M18 5L20 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M15 8L17 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
                <p class="text-base leading-4  ">Security</p>
            </button>
            <button
                class="focus:outline-none flex jusitfy-start hover:border-indigo-700 border border-transparent focus:border-indigo-700 focus:text-indigo-700 hover:text-indigo-700 text-gray-800 rounded py-3 pl-4 items-center space-x-6 w-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p class="text-base leading-4  ">Notifications</p>
            </button>

        </div>
        <div class="w-full px-6">
            <hr class="border-gray-300  w-full">
        </div>
        <div class="pb-48 flex flex-col justify-start items-start h-full     w-full  ">
            <div class="flex pt-5  justify-start pb-6 px-4   pl-4 flex-col items-start w-full">
                <button
                    class="focus:outline-none flex jusitfy-start hover:border-indigo-700 border border-transparent focus:border-indigo-700 focus:text-indigo-700 hover:text-indigo-700 text-gray-800 rounded py-3 pl-4 items-center space-x-6 w-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p class="text-base leading-4  ">Settings</p>
                </button>
            </div>
        </div>
    </div>
</body>
</template>

<script>
export default {
    data(){
        return{

        }
    },mounted(){
         let icon1 = document.getElementById("icon1");
        let menu1 = document.getElementById("menu1");
        
        let icon2 = document.getElementById("icon2");

        
        let icon3 = document.getElementById("icon3");

        

        let Main = document.getElementById("Main");
        let open = document.getElementById("open");
        let close = document.getElementById("close")

        
    },
    methods:{
        showMenu1(flag){
            if (flag) {
                icon1.classList.toggle("rotate-180");
                menu1.classList.toggle("hidden")
            }
        },
        showMenu2(flag) {
            if (flag) {
                icon2.classList.toggle("rotate-180");
            }
        },
        showMenu3(flag){
            if (flag) {
                icon3.classList.toggle("rotate-180");
            }
        },
        showNav(flag){
            if (flag) {
                Main.classList.toggle("-translate-x-full")
                Main.classList.toggle("translate-x-0")
                open.classList.toggle("hidden");
                close.classList.toggle("hidden")
            } 
        }
    }
}
</script>

<style>

</style>