<template lang="html">
    <div>
        <form v-on:submit.prevent="formSubmitted" id="application-input">
            <label>Apply Here:</label>
            <textarea v-model="apply"
            id="application-text" 
            name="form" 
            rows="8" cols="100"></textarea>
            <input id="submit" type="submit" value="Submit" />
        </form> 
        <p v-if="submitted" id="message">Thanks for submitting!</p>
        <Preview v-bind:text="apply" />
    </div>
</template>

<script>
import Preview from './Preview';
export default {
    name: 'Form',
    components: {
        Preview,
    },
    data() {
        return {
            apply: '',
            submitted: false
        };
    },
    methods: {
        formSubmitted() {
            if (!this.submitted) {
                this.submitted = true; 
            } else {
                this.submitted = false;
            }
        }
    }
};
</script>

