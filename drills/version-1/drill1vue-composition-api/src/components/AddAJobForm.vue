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
    import { ref } from 'vue';
    export default {
        setup(props, { emit }) {
            const title = ref('');
            const pay = ref('');
            const description = ref('');

            const addJob = () => {
                const newJob = {
                    title: title.value,
                    pay: pay.value,
                    description: description.value,
                    interested: [],
                };

                emit('add-job', newJob);
                title.value = '';
                pay.value = '';
                description.value = '';
            }

            return {
                title,
                pay,
                description,
                addJob
            }

        }
    }
</script>