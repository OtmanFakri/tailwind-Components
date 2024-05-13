<template>
  <body class="overflow-y-hidden overflow-x-hidden" style="height: 900px;">
    <div class=" xl:hidden flex justify-between w-full p-6 items-center border-b border-transparent sm:border-gray-200 ">
        <div class="flex justify-between  items-center space-x-3">
            <img src="../svgs/sidebar4-svg1.svg" alt="logo" />   
            <p class="text-2xl leading-6 text-gray-800">OvonRueden</p>    
        </div>
        <div  aria-label="toggler" class="flex justify-center items-center">
            <button id="open"  aria-label="open"  @click="showNav(true)" class="hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" >
            <img class="text-gray-800" src="../svgs/sidebar4-svg2.svg" alt="menu" />
            </button>
            <button id="close"  aria-label="close" @click="showNav(true)" class=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" >
                <img class="text-gray-800" src="../svgs/sidebar4-svg3.svg" alt="close" />
                    </button>                           
        </div>
    </div>
    <div id="Main" class="sm:absolute transform  xl:translate-x-0 top-0 sm:z-20 bg-white  ease-in-out transition duration-500 flex justify-start items-start w-full  sm:w-72 border-r border-b border-gray-200  flex-col ">
        <div class="hidden sm:flex justify-start p-6 items-center space-x-3  w-full">
            <img src="../svgs/sidebar4-svg1.svg" alt="logo" />            
                <p class="text-2xl leading-6 text-gray-800">OvonRueden</p>                
        </div>
        <div class="flex justify-start w-80 sm:w-auto items-start mx-6 border-gray-300 rounded-md border">
            <button id="btn1" @click="addColor(1)" class="w-full sm:w-auto py-4 px-7 text-base leading-none text-white rounded-md bg-indigo-700   ">
                Personal
            </button>
            <button id="btn2" @click="addColor(2)" class="w-full sm:w-auto py-4 px-7 text-base leading-none  rounded-md bg-white  text-gray-800  ">
                Business
            </button>
        </div>
        <div class="   mt-6 flex flex-col px-6 justify-start items-center  px-4 w-full   ">
            <button class="focus:outline-none flex jusitfy-start   focus:text-gray-800  text-gray-600 hover:text-gray-800 rounded py-3  items-center space-x-6 w-full ">
                <svg class="fill-stroke " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p class="text-base leading-4 border-b border-transparent  hover:border-gray-800 focus:border-gray-800  ">Dashboard</p>                    
            </button>
            <button class="focus:outline-none flex jusitfy-start   focus:text-gray-800  text-gray-600 hover:text-gray-800 rounded py-3   items-center w-full  space-x-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 7L12 13L21 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                                    
                    <p class="text-base leading-4 border-b border-transparent  hover:border-gray-800 focus:border-gray-800 ">Email</p>                    
            </button>
                <button class="focus:outline-none flex justify-start items-center space-x-6   focus:text-gray-800  text-gray-600 hover:text-gray-800 rounded  py-3    w-full ">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.85 12.15L19 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18 5L20 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 8L17 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                        
                        <p class="text-base leading-4 border-b border-transparent  hover:border-gray-800 focus:border-gray-800  ">Security</p>                        
                </button>
                <button class="focus:outline-none flex justify-start items-center space-x-6   focus:text-gray-800  text-gray-600 hover:text-gray-800 rounded  py-3    w-full ">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 21H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 21V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 4L19 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                                            
                        <p class="text-base leading-4 border-b border-transparent  hover:border-gray-800 focus:border-gray-800  ">Goals</p>                        
                </button>
                <button class="focus:outline-none flex justify-start items-center space-x-6   focus:text-gray-800  text-gray-600 hover:text-gray-800 rounded  py-3    w-full ">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V7C20 5.89543 19.1046 5 18 5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 3V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 3V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4 11H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 16H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                                                               
                        <p class="text-base leading-4 border-b border-transparent  hover:border-gray-800 focus:border-gray-800  ">Calander</p>                        
                </button>
            </div>
            <div class="px-6 my-8 w-full">
                <hr class="border-gray-200 w-full">
            </div>
             <div class="  px-6 flex justify-start w-full items-start">
                    <p class="text-xs leading-3 text-gray-600">Account</p>
            </div>
            <div class="  mt-6 flex flex-col px-6 justify-start items-center  px-4 w-full  ">
                <button class="focus:outline-none flex jusitfy-start  focus:text-gray-800   text-gray-600 hover:text-gray-800 rounded py-3  items-center space-x-6 w-full ">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                        
                        <p class="text-base leading-4 border-b border-transparent  hover:border-gray-800 focus:border-gray-800  ">Chat</p>                    
                </button>
                <button class="focus:outline-none flex jusitfy-between  focus:text-gray-800   text-gray-600 hover:text-gray-800 rounded py-3 space-x-20   items-center w-full  ">
                    <div class="space-x-6 flex jusitfy-start items-center w-full ">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34315 18.6569 4 17 4C15.3431 4 14 5.34315 14 7C14 8.65685 15.3431 10 17 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                                                         
                        <p class="text-base leading-4 border-b border-transparent  hover:border-gray-800 focus:border-gray-800 ">Notifications</p>     
                    </div>     
                    <div class="flex justify-center items-center p-1.5 bg-indigo-700 text-xs leading-3 text-white rounded-full">
                        08
                    </div>          
                </button>
                    <button class="focus:outline-none flex justify-start items-center space-x-6  focus:text-gray-800   text-gray-600 hover:text-gray-800 rounded  py-3    w-full ">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.0001 8C15.1046 8 16.0001 7.10457 16.0001 6C16.0001 4.89543 15.1046 4 14.0001 4C12.8955 4 12.0001 4.89543 12.0001 6C12.0001 7.10457 12.8955 8 14.0001 8Z" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.00006 6H12.0001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.0001 6H20.0001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.00006 14C9.10463 14 10.0001 13.1046 10.0001 12C10.0001 10.8954 9.10463 10 8.00006 10C6.89549 10 6.00006 10.8954 6.00006 12C6.00006 13.1046 6.89549 14 8.00006 14Z" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.00006 12H6.00006" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.0001 12H20.0001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.0001 20C18.1046 20 19.0001 19.1046 19.0001 18C19.0001 16.8954 18.1046 16 17.0001 16C15.8955 16 15.0001 16.8954 15.0001 18C15.0001 19.1046 15.8955 20 17.0001 20Z" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.00006 18H15.0001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.0001 18H20.0001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                                                      
                            <p class="text-base leading-4 border-b border-transparent  hover:border-gray-800 focus:border-gray-800  ">Settings</p>                        
                    </button>                
                </div>
        <div class="px-6 pb-8 lex flex-col justify-between items-center h-full space-y-36    w-full mt-36 ">
            <div class=" border rounded-md border-gray-300 flex  justify-start p-2     items-center w-full space-x-4">
               <div>
               <img src="https://i.ibb.co/ZzCLcBG/Ellipse-2.png" alt="avatar"  />
               </div>
               <div class="flex flex-col  justify-start items-start space-y-2">
                <p class="cursor-pointer text-base leading-4 text-gray-800">Alexis Enache</p>
                <p class="cursor-pointer text-xs leading-3 text-gray-500">alexis _enache@gmail.com</p>
               </div>
                    
            </div>
        </div>
    </div>>
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

        

        let btn1 = document.getElementById("btn1");
        let btn2 = document.getElementById("btn2");

       
    },
    methods:{
        showMenu1(flag){
            if (flag) {
                icon1.classList.toggle("rotate-180");
                menu1.classList.toggle("hidden")
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
                Main.classList.toggle("-translate-x-full")
                Main.classList.toggle("translate-x-0")
                open.classList.toggle("hidden");
                close.classList.toggle("hidden")
            } 
        },
        addColor(no){
        if (no === 1) {
            btn1.classList.add('bg-indigo-700' , 'text-white');
            btn2.classList.remove('bg-indigo-700' , 'text-white');
            
        } else if (no === 2) {
            btn2.classList.remove('bg-white' , 'text-gray-800');
            btn2.classList.add('bg-indigo-700' , 'text-white');
            btn1.classList.remove('bg-indigo-700' , 'text-white');
        }
       }
    }
}
</script>

<style>

</style>