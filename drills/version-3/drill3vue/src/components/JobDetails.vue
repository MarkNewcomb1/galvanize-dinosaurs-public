<template lang='html'>
    <section id="job-details">
        <h2>Job Details</h2>
        <h4>{{this.jobs.title}}</h4>
        <p>{{this.jobs.description}}</p>
    </section>
</template>

<script>
export default {
    name: "JobDetails",
    data() {
        return {
            jobs: {

            }
        }
    },
    methods: {
        getJobs() {
            fetch('../../static/listings.json')
                .then(response => response.json())
                .then(response => this.jobs = response)
        }
    },
    mounted() {
        this.getJobs()
    }
};
</script>

<style lang='css'>
</style>
