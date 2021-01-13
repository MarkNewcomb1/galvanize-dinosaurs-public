<template>
  <div>
    <Header />
    <main>
      <JobList v-bind:jobs="jobs" />
    </main>
    <!-- <h1>hi</h1>
    <div v-if="isLoading">Loading ...</div>
    <p v-else>Done Loading: {{ jobs }}</p> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import JobList from "./components/JobList.vue";
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

    getJobs();

    return {
      Header,
      JobList,
      isLoading,
      jobs,
      getJobs,
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