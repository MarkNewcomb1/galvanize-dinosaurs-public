<template>
  <div>
    <Header />
    <main>
      <!-- :jobs is shorthand for v-bind:jobs -->
      <JobList :jobs="jobs" />
      <!-- @add-job is shorthand for v-on:add-job -->
      <AddAJobForm @add-job="addJob" />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import JobList from "./components/JobList.vue";
import AddAJobForm from "./components/AddAJobForm.vue";
import Footer from "./components/Footer.vue";
import { ref } from "vue";
export default {

  // https://medium.com/javascript-in-plain-english/handling-asynchrony-in-vue-3-composition-api-part-1-managing-async-state-e993842ebf8f
  setup() {
    const isLoading = ref(false);
    const jobs = ref(null);

    const getJobs = async () => {
      isLoading.value = true;
      const res = await fetch("./listings.json");
      const json = await res.json();
      jobs.value = json.reverse();
      isLoading.value = false;
      console.log(jobs.value);
    };

    const addJob = (newJob) => {
      jobs.value.unshift(newJob)
    }

    getJobs();

    return {
      Header,
      JobList,
      AddAJobForm,
      isLoading,
      jobs,
      getJobs,
      Footer,
      addJob
    };
  },
};

</script>

<style>
html {
  margin: 0;
  padding: 0;
}
body {
  margin: 0 30px 0 30px;
  padding: 0;
  font-family: sans-serif;
  color: #1b997a;
  display: grid;
  grid-template-rows: 15% 75% 10%;
}
/* Header */
header {
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 25% 50% 15%;
  grid-template-rows: 50% 50%;
  padding-top: 10px;
}
header img {
  grid-row: 1/3;
  grid-column: 1/2;
  height: 100px;
  width: auto;
}
header h1 {
  grid-row: 1/2;
  grid-column: 2/3;
  margin: 0;
  color: #c261cc;
  font-family: serif;
}
/* Main */
main {
  grid-row: 2/3;
  display: grid;
  grid-template-columns: 5% 42.5% 5% 42.5% 5%;
}
main section {
  grid-column: 2/3;
}
main section h2 {
  margin: 0;
  color: #61ccb1;
}
#job-listings li {
  display: flex;
  flex-flow: column;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  padding: 10px;
}
ul {
  list-style: none;
}
h4 {
  margin: 0;
}
small {
  color: black;
  font-size: 0.5rem;
  margin-left: 10px;
}
p {
  font-size: 0.8rem;
}
/* Aside */
#side-bar {
  grid-column: 4/5;
}
form {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
}
/* Footer */
footer {
  position: fixed;
  bottom: 0;
  padding: 5px;
}
footer small {
  margin: 0 auto;
}
</style>