<template>
    <div class="home">
<!--        {{ this.data }}-->
    </div>
</template>

<script>
    import TorqueService from '../services/TorqueService';
    export default {
        name: 'home',
        components: {},
        data() {
            return {
                data: [],
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
            this.loadData();
        },
        methods: {
            loadData() {
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
        }
    }
</script>
