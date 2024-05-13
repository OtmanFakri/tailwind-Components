<template>
  <body class="overflow-y-hidden bg-gray-200" style="min-height: 400px; height:100vh">
        <div class=" bg-white ">
            <nav class=" 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4">
                <!-- For large and Medium-sized Screen -->
                <div class="flex justify-between "> 
                    <div class="hidden sm:flex flex-row items-center space-x-6">
                        <img class=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer" src="../svgs/header-3-svg1.svg" alt="twitter" />                       
                       <img class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer" src="../svgs/header-3-svg2.svg" alt="facebook" />
                        <img class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer" src="../svgs/header-3-svg3.svg" alt="linkdin" />
                        <img class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer" src="../svgs/header-3-svg4.svg" alt="instagram" />                                                             
                    </div>
                    <div class=" flex space-x-3 items-center">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg5.svg" alt="circle" />                 
                        <h1 class=" font-normal text-2xl leading-6 text-gray-800" >OvonRueden</h1>
                    </div>
                    <div class="hidden sm:flex flex-row space-x-4">
                        <button class="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-indigo-700 bg-white border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center" >Sign Up</button>
                        <button class="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center" >Sign In</button>
                    </div>

                    <!-- Burger Icon -->
                    <div id="bgIcon" @click="toggleMenu()"  class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  flex justify-center items-center sm:hidden cursor-pointer">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg6.svg" alt="burger" />
                       <img class=" hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg7.svg" alt="cross" />                                                               
                    </div>
                </div>

                <!-- Mobile and small-screen devices (toggle Menu) -->
                <div id="MobileNavigation" class="hidden sm:hidden mt-4 mx-auto">
                    <div class="flex flex-row items-center justify-center space-x-6">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg1.svg" alt="twitter" />                       
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg2.svg" alt="facebook" />
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg3.svg" alt="linkdin" />
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg4.svg" alt="instagram" />                                                             
                    </div>
                    <div class="flex flex-col gap-4 mt-4 w-80 mx-auto ">
                        <button class="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-indigo-700 bg-indigo-600 bg-opacity-0 hover:opacity-100 duration-100 border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center" >Sign Up</button>
                        <button class="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center" >Sign In</button>
                    </div>
                </div>
            </nav>    
        </div>

    </body>
</template>

<script>
export default {
    data(){
        return{}
    },
    methods:{
         toggleMenu(){

                var icon = document.getElementById('bgIcon');
                const childEle = icon.children;

                childEle[0].classList.toggle('hidden');
                childEle[1].classList.toggle('hidden');

                var mobileNav = document.getElementById('MobileNavigation').classList.toggle('hidden');
                
            }
    }
}
</script>

<style>

</style>