<template>
    <div class="bg-gray-200 dark:bg-gray-900 min-h-screen">
        <div class="flex items-center justify-center w-full h-full py-12 px-4">
            <div class="max-w-sm w-full bg-white pt-6 dark:bg-gray-800 rounded">
                <div class="pl-8 pr-6">
                    <div class="flex items-center justify-between">
                        <p class="sm:pr-48 pr-10 text-xs font-medium leading-3 text-gray-500 dark:text-gray-400">Progress</p>
                        <div class="w-8 h-6">
                            <div class="flex items-center justify-center px-1 py-1.5 flex-1 h-full bg-green-100 rounded">
                                <p class="text-xs font-semibold leading-3 text-right text-green-700">30%</p>
                            </div>
                        </div>
                    </div>
                    <p class="text-4xl font-semibold leading-9 pt-3 text-gray-800 dark:text-gray-100">74</p>
                    <p class="text-xs font-medium leading-3 pt-1 text-indigo-700">Task pending</p>
                    <div class="flex items-start justify-between pt-7">
                        <div class="flex items-start">
                            <div class="opacity-20 w-1 h-9 bg-indigo-700 rounded-sm"></div>
                            <div class="flex flex-col pl-3">
                                <p class="text-lg leading-none text-gray-800 dark:text-gray-100">To do</p>
                                <p class="text-sm font-medium pt-1 leading-none text-gray-500 dark:text-gray-400">Assigned tasks</p>
                            </div>
                        </div>
                        <p class="text-xl font-semibold leading-5 text-right text-gray-800 dark:text-gray-100">74</p>
                    </div>
                    <div class="flex items-start justify-between pt-4">
                        <div class="flex items-start">
                            <div class="w-1 h-9 bg-indigo-700 rounded-sm"></div>
                            <div class="flex flex-col pl-3">
                                <p class="text-lg leading-none text-gray-800 dark:text-gray-100">Done</p>
                                <p class="text-sm font-medium pt-1 leading-none text-gray-500 dark:text-gray-400">Completed tasks</p>
                            </div>
                        </div>
                        <p class="text-xl font-semibold leading-5 text-right text-gray-800 dark:text-gray-100">228</p>
                    </div>
                </div>
                <div class="pt-6">
                    <div class="w-full h-full">
                        <canvas id="myChart" width="250"></canvas>
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
                type: "line",
                data: {
                    labels: ["", "", "", " ", "", ""],
                    datasets: [
                        {
                            data: [1, 10, 6, 11, 6, 12],
                            backgroundColor: ["#4338CA"],
                            borderWidth: 0,
                            strokeColor: "#6366F1",
                        },
                        {
                            data: [10, 6, 8, 14, 9, 15],
                            backgroundColor: ["#E0E7FF"],
                            borderWidth: 0,
                        },
                    ],
                },
                options: {
                    elements: {
                        point: {
                            radius: 0,
                        },
                    },
                    generateLabels: {
                        hidden: true,
                    },
                    legend: {
                        display: false,
                    },
                    scales: {
                        yAxes: [
                            {
                                gridLines: {
                                    display: false,
                                },
                                display: false,
                                ticks: {
                                    min: 0,
                                    max: 20,
                                },
                            },
                        ],
                        xAxes: [
                            {
                                gridLines: {
                                    display: false,
                                },
                                display: false,
                            },
                        ],
                    },
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
