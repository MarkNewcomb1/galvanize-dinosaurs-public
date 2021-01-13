<template>
  <section>
    <h2>Job Listings</h2>
    <ul id="job-listings" v-for="job in jobs" :key="job.id">
      <li>
        <h4>{{ job.title }}</h4>
        <small>{{ job.pay }}</small>
        <p>{{ job.description }}</p>
        <small
          >{{
            job.interested.length > 1
              ? job.interested.length + " dinos are"
              : "1 dino is"
          }}
          interested in this job</small
        >
      </li>
    </ul>
  </section>
</template>

<script>

export default {
    props: [
        'jobs'
    ]
};
</script>