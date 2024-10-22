<template>
  <body class="overflow-y-hidden bg-gray-200" style="height: 600px;height:100vh">
        <div class=" h-full relative">
            <div class="bg-white"> 
                <div class="2xl:container 2xl:mx-auto">
                    <nav class="">
                        <div class=" flex flex-row justify-between">
                            <div class=" flex space-x-3 items-center py-5 lg:pl-7 sm:pl-6 py-6 pl-4 pr-8">
                               <img class="cursor-pointer" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-4-svg1.svg" alt="circle" />                  
                                <h1 class=" font-normal text-2xl leading-6 text-gray-800" >OvonRueden</h1>
                            </div>
        
                            <!-- For large (i.e. desktop and laptop sized screen) -->
                            <div class="lg:flex hidden flex-auto justify-between flex-row px-7 border-l border-r border-gray-200 py-6">
                                <div class="">
                                    <p class=" font-normal text-xs leading-3 text-gray-600">Hi David</p>
                                    <h3 class=" font-bold text-xl leading-5 text-gray-800 mt-2">Welcome Back</h3>
                                </div>
                                <div class=" focus:outline-none focus:ring foucs:ring-offset-2 focus:ring-gray-800 bg-gray-50 flex items-center px-4 py-3.5 space-x-3 rounded ">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-4-svg2.svg" alt="search" />                                    
                                    <input aria-label="Search Bar" class="focus:outline-none w-56  xl:w-64 bg-gray-50 font-normal text-sm leading-4 text-gray-500 placeholder-gray-500 " type="text" placeholder="Search">
                                </div>
                            </div>
                            <div class=" hidden sm:flex justify-end flex-row lg:pr-7 sm:pr-6 py-6 pr-4 pl-8">
                                <div class="cursor-pointer focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 relative flex justify-center items-center xl:mr-8 mr-6">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-4-svg3.svg" alt="bell" />
                                    <div class="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute top-1 right-0 m-auto duration-200"></div>
                                    <div class=" w-1.5 h-1.5 bg-indigo-700 rounded-full absolute top-1 right-0 m-auto shadow-lg"></div>                                    
                                </div>
                                <div class=" flex justify-center items-center flex-row">
                                    <img class="w-10 h-10 " src="https://i.ibb.co/QMddNDb/Ellipse-14.png" alt="individual person image-3"/>
                                    <div class="ml-2">
                                        <p class="text-lg leading-4 font-semibold text-gray-800">David Hulk</p>
                                        <p class=" font-normal text-xs leading-3 text-gray-600 mt-1">david@alphahulk.com</p>
                                    </div>
                                    <img class="cursor-pointer transform duration-100 xl:ml-7 lg:ml-3.5 ml-2 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 " src="../svgs/header-4-svg4.svg" alt="rotate" />                                  
                                </div>
                            </div>
    
                            <!-- Burger Icon -->
                            <div id="bgIcon" @click="toggleMenu()"  class=" focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 block sm:hidden cursor-pointer lg:pr-7 sm:pr-6 py-6 pr-4">
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-4-svg5.svg" alt="burger" />
                                <img class=" hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-4-svg6.svg" alt="cross" />                                                              
                            </div>
                        </div>
    
                        <!-- for medium-sized devices -->
                        <div class="lg:hidden hidden sm:flex flex-col lg:px-7 sm:px-6 px-4 ">
                            <hr class=" w-full bg-gray-200 ">
                            <div class="lg:hidden flex flex-auto justify-between mt-3 flex-row pb-4">
                                <div class="">
                                    <p class=" font-normal text-xs leading-3 text-gray-600">Hi David</p>
                                    <h3 class=" font-bold text-xl leading-5 text-gray-800 mt-2">Welcome Back</h3>
                                </div>
                                <div class=" focus:outline-none focus:ring foucs:ring-offset-2 focus:ring-gray-800 bg-gray-50 flex items-center px-4 py-3.5 space-x-3 rounded ">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-4-svg2.svg"/>                                  
                                    <input aria-label="Search Bar" class=" focus:outline-none w-44 lg:w-56 xl:w-64 bg-gray-50 font-normal text-sm leading-4 text-gray-500 placeholder-gray-500 " type="text" placeholder="Search">
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <!-- Mobile and Small devices Navigation -->
    
            <div id="MobileNavigation" class="hidden transform duration-150 sm:hidden h-full bg-white ">
                <div class=" flex flex-col justify-between h-auto ">
                    <div class=" flex flex-col lg:px-7 sm:px-6 px-4">
                        <hr class=" w-full bg-gray-200 ">
                        <div class="lg:hidden flex flex-auto justify-between mt-3 flex-row pb-4">
                            <div class="">
                                <p class=" font-normal text-xs leading-3 text-gray-600">Hi David</p>
                                <h3 class=" font-bold text-xl leading-5 text-gray-800 mt-2">Welcome Back</h3>
                            </div>
                            <div class="cursor-pointer relative flex justify-center items-center">
                               <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-4-svg3.svg" alt="bell" />
                                <div class="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute top-1 right-0 m-auto duration-200"></div>
                                <div class=" w-1.5 h-1.5 bg-indigo-700 rounded-full absolute top-1 right-0 m-auto shadow-lg"></div>                                    
                            </div>
                        </div>
                        <div class=" w-auto sm:w-96 focus:outline-none focus:ring foucs:ring-offset-2 focus:ring-gray-800 bg-gray-50 flex items-center pl-4  space-x-3 rounded mt-4 ">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-4-svg2.svg" alt="search" />                                
                            <input aria-label="Search Bar" class=" focus:outline-none w-full bg-gray-50 font-normal pl-2 text-sm leading-4  py-3.5 text-gray-500 placeholder-gray-500 " type="text" placeholder="Search">
                        </div>
                    </div>
                    <div class=" flex items-center flex-row py-6 px-8 bg-gray-100 absolute bottom-0 left-0 w-full">
                        <img class="w-10 h-10 " src="https://i.ibb.co/QMddNDb/Ellipse-14.png" alt="individual person image-3"/>
                        <div class="ml-2">
                            <p class="text-lg leading-4 font-semibold text-gray-800">David Hulk</p>
                            <p class=" font-normal text-xs leading-3 text-gray-600 mt-1">david@alphahulk.com</p>
                        </div>
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-4-svg4.svg" />                                    
                    </div>
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
    },
    methods:{
         toggleMenu(){

                var icon = document.getElementById('bgIcon');
                const childEle = icon.children;

                childEle[0].classList.toggle('hidden');
                childEle[1].classList.toggle('hidden');

                document.getElementById('MobileNavigation').classList.toggle('hidden');
                
            },

             rotateIcon(){
                var clicked = event.target;
                clicked.classList.toggle('rotate-180');
            }
    }
}
</script>

<style>

</style>