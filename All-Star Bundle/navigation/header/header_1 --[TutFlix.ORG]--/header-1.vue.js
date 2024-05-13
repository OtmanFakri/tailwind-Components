<template>
  <body class="overflow-y-hidden" style="min-height: 400px;">
        <div class=" 2xl:mx-auto">
            <div class="bg-white rounded shadow-lg py-5 px-7">
                <nav class="flex justify-between">
                    <div class="flex items-center space-x-3 lg:pr-16 pr-6">
                        <img class="cursor-pointer" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-1-svg1.svg" alt="circle" />                       
                        <h2 class="font-normal text-2xl leading-6 text-gray-800">OvonRueden</h2>
                    </div> 
    
                    <!-- For medium and plus sized devices -->
                    <ul class="hidden md:flex flex-auto space-x-2">
                        <li @click="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white bg-indigo-600 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">Collections</li>
                        <li @click="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">Arts</li>
                        <li @click="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">Space</li>
                        <li @click="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">Game</li>
                        <li @click="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">Utility</li>
                        <li @click="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">Cards</li>
                    </ul>
                    <div class=" flex space-x-5 justify-center items-center pl-2">
                        <div class="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                           <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-1-svg2.svg" alt="chat" />  
                            <div class="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto duration-200"></div>
                            <div class=" w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto shadow-lg"></div>
                        </div>
                        
                      <img class="cursor-pointer  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 " src="../svgs/header-1-svg3.svg" alt="bell" />                      
                    </div>
                </nav>
                <!-- for smaller devcies -->
    
                <div class="block md:hidden w-full mt-5 ">
                    <div @click="selectNew()" class="cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full">
                        <div class="flex space-x-2">
                            <span id="s1" class="font-semibold text-sm leading-3 hidden">Selected: </span><p id="textClicked" class="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer ">Collections</p>
                        </div>
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-1-svg4.svg" alt="down arrow" />                    
                    </div>
                    <div class=" relative">
                        <ul id="list" class=" hidden font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md">
                            <li @click="selectedSmall()" class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Arts</li>
                            <li @click="selectedSmall()" class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Space</li>
                            <li @click="selectedSmall()" class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Game</li>
                            <li @click="selectedSmall()" class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Utility</li>
                            <li @click="selectedSmall()" class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Cards</li>
                        </ul>
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
    mounted(){
        

            

            
    },
    methods:{
         selected(){
                var targeted = event.target
                var clicked = targeted.parentElement;

                var child = clicked.children;
                console.log(child);

                for(let i = 0; i < child.length; i++){
                    if(child[i].classList.contains('text-white')){
                        console.log(child[i]);
                        child[i].classList.remove('text-white', 'bg-indigo-600');
                        child[i].classList.add('text-gray-600', 'bg-gray-50', 'border', 'border-white');
                    }
                }

                targeted.classList.remove('text-gray-600', 'bg-gray-50', 'border', 'border-white');
                targeted.classList.add('text-white', 'bg-indigo-600');
            },
             selectNew(){
                var newL = document.getElementById('list');
                newL.classList.toggle('hidden');

                document.getElementById('ArrowSVG').classList.toggle('rotate-180');
            },
             selectedSmall(){
                var text =  event.target.innerText;
                var newL = document.getElementById('list');
                var newText = document.getElementById('textClicked');
                newL.classList.add('hidden');
                document.getElementById('ArrowSVG').classList.toggle('rotate-180');
                newText.innerText = text;

                document.getElementById('s1').classList.remove('hidden');
            }
    }
}
</script>

<style>

</style>