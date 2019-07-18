<template>
    <canvas ref="canvas"></canvas>
</template>

<script>
    import { Bar } from 'vue-chartjs';

    export default {
        extends: Bar,
        mounted() {
            this.renderChart(this.chartData, this.options)
        }
    }
</script>
