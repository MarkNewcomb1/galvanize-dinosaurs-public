<template>
  <aside id="side-bar">
    <h3>Add a Job</h3>
    <form class="job-form" @submit.prevent="addJob">
      <label for="title">Title</label>
      <input type="text" v-model="title" name="title" />
      <label for="pay">Compensation</label>
      <input type="text" v-model="pay" name="pay" />
      <label for="description">Description</label>
      <textarea
        name="description"
        v-model="description"
        rows="8"
        cols="40"
      ></textarea>
      <input type="submit" name="submit" value="Submit" />
    </form>
  </aside>
</template>

<script>
export default {
  name: "AddAJobForm",
  data() {
    return {
      title: "",
      pay: "",
      description: "",
    };
  },
  methods: {
    addJob() {
      const newJob = {
        title: this.title,
        pay: this.pay,
        description: this.description,
        interested: [],
      };
      // Send up to parent
      this.$emit("add-job", newJob);

      this.title = "";
      this.pay = "";
      this.description = "";
    },
  },
};
</script>