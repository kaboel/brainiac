<template>
    <div class="home">
        <Open :chart-data="data"/>
    </div>
</template>

<script>
    import TorqueService from '../services/TorqueService';
    import Open from "../components/Open";

    export default {
        name: 'home',
        components: {Open},
        data() {
            return {
                data: '',
                Open: {
                    Average: '',
                    last: ''
                },
                Close: {
                    Average: '',
                    Last: ''
                }
            }
        },
        mounted() {
            this.loadData().then(() => {

                this.data = {
                    labels : [],
                    datasets: [
                        {
                            label: 'Average',
                            backgroundColor: '#aaa',
                            data: this.Open.Average
                        },
                        {
                            label: 'Last',
                            backgroundColor: '#ddd',
                            data: this.Open.Last
                        }
                    ]
                }

            }).catch(err => {
                alert(err);
            });
        },
        methods: {
            async loadData() {
                TorqueService.index()
                    .then(res => {

                        this.Open.Average = res.data.map(data => {
                            if(data.Direction === 'Open') {
                                return data.AverageTorque;
                            }
                        });

                        this.Open.Last = res.data.map(data => {
                            if(data.Direction === 'Open') {
                                return data.LastTorque;
                            }
                        });

                        this.Close.Average = res.data.map(data => {
                            if(data.Direction === 'Close') {
                                return data.AverageTorque;
                            }
                        });

                        this.Close.Last = res.data.map(data => {
                            if(data.Direction === 'Close') {
                                return data.LastTorque;
                            }
                        });

                    }).catch(err => {
                        alert(err);
                    })
            },

            chartData() {

            }
        }
    }
</script>
