<template>
  <body class="overflow-x-hidden overflow-y-hidden bg-gray-50" style="min-height: 825px">
    <div class="bg-white xl:hidden flex text-gray-800 hover:text-black focus:outline-none focus:text-black justify-between w-full p-6 items-center">
      <button class="flex justify-between items-center space-x-3">
        <img src="../svgs/sidebar6-svg1.svg" alt="logo" />
        <p class="text-2xl leading-6">OvonRueden</p>
      </button>
      <div aria-label="toggler" class="flex justify-center items-center">
        <button id="open" @click="showNav(true)" aria-label="open" class="hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
          <img class="text-gray-800" src="../svgs/sidebar6-svg2.svg" alt="menu" />
        </button>
        <button id="close" @click="showNav(true)" aria-label="close" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
          <img class="text-gray-800" src="../svgs/sidebar6-svg3.svg" alt="close" />
        </button>
      </div>
    </div>
    <div id="Main" class="bg-white transform xl:translate-x-0 ease-in-out transition duration-500 flex justify-start items-start w-full sm:w-72 flex-col h-full">
      <button class="hidden xl:flex text-gray-800 hover:text-black focus:outline-none focus:text-black justify-start px-6 pt-6 items-center space-x-3 w-full">
        <img src="../svgs/sidebar6-svg1.svg" alt="logo" />
        <p class="text-2xl leading-6">OvonRueden</p>
      </button>
      <div class="xl:mt-6 flex flex-col justify-start items-start px-4 w-full space-y-3 pb-5">
        <div class="relative focus:outline-none flex jusitfy-start w-full text-gray-800 rounded items-center border-gray-300 focus:border-gray-400 border">
          <input type="text" placeholder="Search" class="placeholder-gray-800 text-base placeholder-text-base leading-4 py-3 pl-8 w-full pl-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded" />
          <img  class="absolute left-4" src="../svgs/sidebar6-svg4.svg" alt="search" />
        </div>
        <button class="focus:outline-none flex jusitfy-start hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4 items-center space-x-6 w-full">
          <svg class="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="text-base leading-4">Dashboard</p>
        </button>
        <button class="focus:outline-none flex jusitfy-start hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4 items-center w-full space-x-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3 7L12 13L21 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="text-base leading-4">Email</p>
        </button>
        <button class="focus:outline-none flex justify-start items-center space-x-6 hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4 w-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.85 12.15L19 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18 5L20 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15 8L17 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="text-base leading-4">Security</p>
        </button>
        <button class="flex justify-start items-center space-x-6 hover:text-white focus:outline-none focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4 w-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 21H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10 21V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10 4L19 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="text-base leading-4">Goals</p>
        </button>
      </div>
      <div class="w-full px-4">
        <hr class="border-gray-100 w-full" />
      </div>
      <div class="mt-6 flex flex-col justify-start items-start px-4 w-full space-y-3 pb-5">
        <button class="focus:outline-none flex justify-start items-center hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4 w-full">
          <div class="flex justify-between items-center w-full">
            <div class="flex justify-start items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p class="text-base leading-4 ml-6">Chat</p>
            </div>
            <div class="ml-28 p-1 bg-indigo-700 rounded-full"></div>
          </div>
        </button>
        <button class="focus:outline-none flex justify-start items-center space-x-6 hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4 w-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 8C15.1046 8 16 7.10457 16 6C16 4.89543 15.1046 4 14 4C12.8954 4 12 4.89543 12 6C12 7.10457 12.8954 8 14 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 6H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16 6H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 12H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 18H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19 18H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="text-base leading-4">Settings</p>
        </button>
      </div>
      <div class="w-full px-4">
        <hr class="border-gray-100 w-full" />
      </div>
      <div class="mt-6 flex flex-col justify-start items-start px-4 w-full space-y-3 pb-5">
        <button class="focus:outline-none flex justify-start items-center space-x-6 hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4 w-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34315 18.6569 4 17 4C15.3431 4 14 5.34315 14 7C14 8.65685 15.3431 10 17 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="text-base leading-4">Notifications</p>
        </button>
      </div>
      <div class="mt-36 flex bg-indigo-700 justify-start space-x-2 items-center h-full py-4 px-3.5 w-full">
        <div>
          <img src="https://i.ibb.co/fxrbS6p/Ellipse-2-2.png" alt="avatar" />
        </div>
        <div class="flex flex-col justify-start items-start space-y-2">
          <p class="cursor-pointer text-base leading-4 text-white">Alexis Enache</p>
          <p class="cursor-pointer text-xs leading-3 text-gray-200">alexis _enache@gmail.com</p>
        </div>
        <button aria-label="visit" class="focus:ring-2 focus:outline-none hover:bg-indigo-800 p-2.5 bg-indigo-600 rounded-full">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16666 10H15.8333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.8333 15L15.8333 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.8333 5L15.8333 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  </body>
</template>

<script>
export default {
     data(){
         return{

         }
     },
     mounted(){
         let icon1 = document.getElementById("icon1");
      let menu1 = document.getElementById("menu1");
      
      let icon2 = document.getElementById("icon2");

      
      let icon3 = document.getElementById("icon3");

      

      let Main = document.getElementById("Main");
      let open = document.getElementById("open");
      let close = document.getElementById("close");

      

     },
     methods:{
         showMenu1(flag){
        if (flag) {
          icon1.classList.toggle("rotate-180");
          menu1.classList.toggle("hidden");
        }
      },
         showMenu2(flag){
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
          Main.classList.toggle("-translate-x-full");
          Main.classList.toggle("translate-x-0");
          open.classList.toggle("hidden");
          close.classList.toggle("hidden");
        }
      },
     }
}
</script>

<style>

</style>