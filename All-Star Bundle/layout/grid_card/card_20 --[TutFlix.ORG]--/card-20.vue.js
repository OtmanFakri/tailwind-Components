<template>
    <div class="bg-gray-300 min-h-screen">
        <div class="flex items-center justify-center py-8 px-4">
            <div class="md:w-96 rounded shadow-lg p-6 bg-white w-full">
                <div class="flex items-center justify-between pb-8">
                    <div>
                        <h1 class="text-lg font-bold leading-none text-gray-800">Marketing Report</h1>
                        <p class="text-xs pt-2 leading-3 text-gray-500">Due: 31/04/2021</p>
                    </div>
                    <img alt="profile" src="https://i.ibb.co/HV1KWdk/Ellipse-19.png" class="w-8 h-8 object-cover object-center" />
                </div>
                <div class="flex items-center justify-center">
                    <div class="w-60 relative">
                        <canvas id="myChart" width="234.78px" height="234.78px"> </canvas>
                        <div class="absolute inset-0 flex flex-col items-center justify-center">
                            <p class="text-5xl font-bold leading-10 text-center text-gray-800">25%</p>
                            <p class="text-sm font-bold leading-none text-center text-gray-500 uppercase pt-4">Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//npm install chart.js@2.8.0
import Chart from "chart.js";
export default {
    name: "index",
    data() {
        return {
            chartId: "myChart",
            chartData: {
                type: "doughnut",
                data: {
                    labels: ["Complete"],
                    datasets: [
                        {
                            label: "# of Votes",
                            data: [25, 75],
                            backgroundColor: ["#4338CA"],
                            borderColor: ["rgba(255, 255, 255 ,1)"],
                            borderWidth: 0,
                            borderRadius: 2,
                        },
                    ],
                },
                options: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                    cutoutPercentage: 83,
                },
            },
        };
    },
    mounted() {
        this.createChart(this.chartId, this.chartData);
    },
    methods: {
        createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId).getContext("2d");
            new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options,
            });
        },
    },
};
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
