<template>
  <body class="overflow-y-hidden" style="min-height: 400px;">
        <div class="bg-gray-100">
            <div class=" 2xl:mx-auto lg:px-7 sm:px-6 py-6 px-4">
                <nav class="">
                    <div class=" flex flex-row justify-between">
                        <div class=" flex space-x-3 items-center">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-2-svg1.svg" alt="circle" />                   
                            <h1 class=" font-normal text-2xl leading-6 text-gray-800" >OvonRueden</h1>
                        </div> 
    
                        <!-- For large (i.e. desktop and laptop sized screen) -->
                        <div class="lg:flex hidden flex-auto justify-between flex-row">
                            <div class=" xl:pl-16 lg:pl-4">
                                <div class=" flex space-x-1 items-center">
                                    <div class=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer w-3 h-3 rounded-full bg-white flex justify-center items-center">
                                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-2-svg2.svg" alt="left arrow" />                            
                                    </div>
                                    <a class="focus:text-gray-700 hover:text-gray-700 duration-100 border-b border-gray-600 font-normal text-xs leading-3 text-gray-600 pb-1" href="javascript:void(0)">Back to Dashboard</a>
                                </div>
                                <h2 class=" font-bold text-xl leading-5 text-gray-800">User Onboarding</h2>
                            </div>
                            <div class="flex flex-row lg:space-x-3 xl:space-x-4">
                                <div class=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  flex -space-x-3 flex-row">
                                    <img class="z-50" src="https://i.ibb.co/6JM49zg/Ellipse-16.png" alt="individual person image-1"/>
                                    <img class="z-40" src="https://i.ibb.co/GJQPgHw/Ellipse-15.png" alt="individual person image-2"/>
                                    <img class="z-30" src="https://i.ibb.co/QMddNDb/Ellipse-14.png" alt="individual person image-3"/>
                                    <img class="z-20" src="https://i.ibb.co/60dJ3WT/Ellipse-13.png" alt="individual person image-4"/>
                                    <img class="z-10" src="https://i.ibb.co/ry4hYQs/Ellipse-10.png" alt="individual person image-5"/>
                                </div>
                                <button class="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center" >
                                    <p>Share</p>                                
                                    <img class="mt-1" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-2-svg3.svg" alt="share" />
                                </button>
        
                                <!-- Vertical Line -->
                                <div class=" h-full w-0 border-l border-gray-300"></div>
                            </div>
                        </div>
                        <div class=" hidden sm:flex xl:pl-4 lg:pl-3 justify-end flex-row sm:space-x-4 md:space-x-6 lg:space-x-3 xl:space-x-4">
                            <button class="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center" >
                                <p>Preview</p>                                
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-2-svg4.svg" alt="preview" />                            
                            </button>
                            <button class="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center" >
                                <p>Publish</p>                                
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-2-svg5.svg" alt="publish" />                              
                            </button>
    
                            <!-- Save button -->
                            <button class="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600 duration-150 justify-center items-center" >
                                <p>Save</p>                                
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-2-svg6.svg" alt="save" />                                                               
                            </button>
                        </div>

                        <!-- Burger Icon -->
                        <div id="bgIcon" onclick="toggleMenu()"  class=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  block sm:hidden cursor-pointer">
                            <img  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-2-svg7.svg" alt="burger" />
                            <img class=" hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-2-svg8.svg" alt="cross" />                                                                
                        </div>
                    </div>

                    <!-- for medium-sized devices -->
                    <div class="lg:hidden flex flex-auto justify-between flex-row mt-4">
                        <div id="heading" class=" sm:block xl:pl-16 lg:pl-4">
                            <div class=" flex space-x-1 items-center">
                                <div class="cursor-pointer w-3 h-3 rounded-full bg-white flex justify-center items-center">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-2-svg2.svg" alt="left arrow" />                          
                                </div>
                                <a class="focus:outline-none focus:text-gray-700 hover:text-gray-700 duration-100 border-b border-gray-600 font-normal text-xs leading-3 text-gray-600 pb-1" href="javascript:void(0)">Back to Dashboard</a>
                            </div>
                            <h2 class=" font-bold text-xl leading-5 text-gray-800">User Onboarding</h2>
                        </div>
                        <div class="hidden sm:flex flex-row space-x-6 ">
                            <div class=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  flex -space-x-3 flex-row">
                                <img class="z-50" src="https://i.ibb.co/6JM49zg/Ellipse-16.png" alt="individual person image-1"/>
                                <img class="z-40" src="https://i.ibb.co/GJQPgHw/Ellipse-15.png" alt="individual person image-2"/>
                                <img class="z-30" src="https://i.ibb.co/QMddNDb/Ellipse-14.png" alt="individual person image-3"/>
                                <img class="z-20" src="https://i.ibb.co/60dJ3WT/Ellipse-13.png" alt="individual person image-4"/>
                                <img class="z-10" src="https://i.ibb.co/ry4hYQs/Ellipse-10.png" alt="individual person image-5"/>
                            </div>
                            <button class="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center" >
                                <p>Share</p>                                
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-2-svg3.svg" alt="share" />
                            </button>
                        </div>
                    </div>


                    <!-- Mobile and Small devices Navigation -->

                    <div id="MobileNavigation" class="h-0 overflow-y-hidden transform duration-150 sm:hidden mt-4">
                        <hr class=" w-full bg-gray-300">
                        <div class="flex flex-col gap-4 mt-4 w-72 mx-auto ">
                            <div class=" flex justify-center items-center -space-x-3 flex-row">
                                <img class="z-50" src="https://i.ibb.co/6JM49zg/Ellipse-16.png" alt="individual person image-1"/>
                                <img class="z-40" src="https://i.ibb.co/GJQPgHw/Ellipse-15.png" alt="individual person image-2"/>
                                <img class="z-30" src="https://i.ibb.co/QMddNDb/Ellipse-14.png" alt="individual person image-3"/>
                                <img class="z-20" src="https://i.ibb.co/60dJ3WT/Ellipse-13.png" alt="individual person image-4"/>
                                <img class="z-10" src="https://i.ibb.co/ry4hYQs/Ellipse-10.png" alt="individual person image-5"/>
                            </div>
                            <button class=" rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center" >
                                <p>Share</p>                                
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-2-svg3.svg" alt="share" />
                            </button>
                            <hr class=" w-full bg-gray-300">
                            <button class="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center" >
                                <p>Preview</p>                                
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-2-svg4.svg" alt="preview" />                             
                            </button>
                            <button class="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center" >
                                <p>Publish</p>                                
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-2-svg5.svg" alt="publish" />                              
                            </button>
    
                            <!-- Save button -->
                            <button class="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center" >
                                <p>Save</p>                                
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-2-svg6.svg" alt="save" />                                                             
                            </button>
                        </div>
                    </div>
                </nav>
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

                var mobileNav = document.getElementById('MobileNavigation');
                if(mobileNav.classList.contains('h-0')){
                    mobileNav.classList.remove('h-0','overflow-y-hidden');
                    mobileNav.classList.add('h-auto');
                }else{
                    mobileNav.classList.remove('h-auto');
                    mobileNav.classList.add('h-0', 'overflow-y-hidden');
                }
                document.getElementById('heading').classList.toggle('hidden');
            }
    }
}
</script>

<style>

</style>