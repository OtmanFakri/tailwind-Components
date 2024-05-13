<template>
  <body class="overflow-x-hidden" style="min-height: 825px">
    <div class="bg-gray-50 xl:hidden flex justify-between w-full p-6 items-center">
      <button class="text-gray-800 hover:text-black focus:outline-none focus:text-black flex justify-between items-center space-x-3">
        <img src="../svgs/sidebar7-svg1.svg" alt="logo" />
        <p class="text-2xl leading-6">OvonRueden</p>
      </button>
      <div aria-label="toggler" class="flex justify-center items-center">
        <button id="open" aria-label="open" @click="showNav(true)" class="hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
         <img  class="text-gray-800" src="../svgs/sidebar7-svg2.svg" alt="menu" />
        </button>
        <button id="close" aria-label="close" @click="showNav(true)" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
          <img class="text-gray-800" src="../svgs/sidebar7-svg3.svg" alt="close" />
        </button>
      </div>
    </div>
    <div id="Main" class="bg-gray-50 pb-48 transform xl:translate-x-0 ease-in-out transition duration-500 flex justify-start items-start w-full sm:w-64 flex-col h-full">
      <button class="hidden xl:flex justify-start text-gray-800 hover:text-black focus:outline-none focus:text-black px-6 pt-6 items-center space-x-3 w-full">
        <img src="../svgs/sidebar7-svg1.svg" alt="logo" />
        <p class="text-2xl leading-6 text-gray-800">OvonRueden</p>
      </button>
      <div class="xl:mt-6 flex flex-col justify-start items-center px-4 w-full space-y-3 pb-5">
        <button class="focus:outline-none flex jusitfy-start hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700 hover:bg-indigo-50 text-gray-600 rounded py-3 pl-4 items-center space-x-6 w-full">
          <svg class="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="text-base leading-4">Dashboard</p>
        </button>
        <button class="focus:outline-none flex jusitfy-start hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700 hover:bg-indigo-50 text-gray-600 rounded py-3 pl-4 items-center space-x-6 w-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.0001 5H5.00006C3.89549 5 3.00006 5.89543 3.00006 7V17C3.00006 18.1046 3.89549 19 5.00006 19H19.0001C20.1046 19 21.0001 18.1046 21.0001 17V7C21.0001 5.89543 20.1046 5 19.0001 5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.00006 7L12.0001 13L21.0001 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="text-base leading-4">Email</p>
        </button>
        <button class="focus:outline-none flex jusitfy-start hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700 hover:bg-indigo-50 text-gray-600 rounded py-3 pl-4 items-center w-full space-x-6">
          <svg class="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="text-base leading-4">User Menu</p>
        </button>
        <button class="focus:outline-none flex justify-start items-center space-x-6 hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700 hover:bg-indigo-50 text-gray-600 rounded py-3 pl-4 w-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="text-base leading-4">Notifications</p>
        </button>
        <button class="focus:outline-none flex justify-start items-center space-x-6 hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700 hover:bg-indigo-50 text-gray-600 rounded py-3 pl-4 w-full">
          <svg class="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="text-base leading-4">Chat</p>
        </button>
        <button class="focus:outline-none flex justify-start items-center space-x-6 hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700 hover:bg-indigo-50 text-gray-600 rounded py-3 pl-4 w-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.0002 5H6.00018C4.89561 5 4.00018 5.89543 4.00018 7V19C4.00018 20.1046 4.89561 21 6.00018 21H18.0002C19.1048 21 20.0002 20.1046 20.0002 19V7C20.0002 5.89543 19.1048 5 18.0002 5Z" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.0002 3V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.00018 3V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4.00018 11H20.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.0002 16H14.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="text-base leading-4">Calander</p>
        </button>
        <button class="focus:outline-none flex justify-start items-center space-x-6 hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700 hover:bg-indigo-50 text-gray-600 rounded py-3 pl-4 w-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.85 12.15L19 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18 5L20 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15 8L17 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="text-base leading-4">Security</p>
        </button>
        <button class="focus:outline-none flex justify-start items-center space-x-6 hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700 hover:bg-indigo-50 text-gray-600 rounded py-3 pl-4 w-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.00012 21H12.0001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.0001 21V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.0001 4L19.0001 8L10.0001 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="text-base leading-4">Goals</p>
        </button>
        <button class="focus:outline-none flex justify-start items-center space-x-6 hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700 hover:bg-indigo-50 text-gray-600 rounded py-3 pl-4 w-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="text-base leading-4">Passwords</p>
        </button>
        <button class="focus:outline-none flex justify-start items-center space-x-6 hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700 hover:bg-indigo-50 text-gray-600 rounded py-3 pl-4 w-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.0001 8C15.1047 8 16.0001 7.10457 16.0001 6C16.0001 4.89543 15.1047 4 14.0001 4C12.8956 4 12.0001 4.89543 12.0001 6C12.0001 7.10457 12.8956 8 14.0001 8Z" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4.00012 6H12.0001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.0001 6H20.0001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.00012 14C9.10469 14 10.0001 13.1046 10.0001 12C10.0001 10.8954 9.10469 10 8.00012 10C6.89555 10 6.00012 10.8954 6.00012 12C6.00012 13.1046 6.89555 14 8.00012 14Z" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4.00012 12H6.00012" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.0001 12H20.0001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.0001 20C18.1047 20 19.0001 19.1046 19.0001 18C19.0001 16.8954 18.1047 16 17.0001 16C15.8956 16 15.0001 16.8954 15.0001 18C15.0001 19.1046 15.8956 20 17.0001 20Z" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4.00012 18H15.0001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.0001 18H20.0001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="text-base leading-4">Settings</p>
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
      }
    }
}
</script>

<style>

</style>