<template lang="html">
    <div>
        <button id="preview-toggle" v-on:click="toggleVisibility">Show Preview</button>
        <section id="application-preview" :class="{ hidden: isHidden}">{{this.text}}</section>
    </div>
</template>

<script>
    export default {
        name: 'Preview',
        props: ['text'],
        data() {
            return {
                isHidden: true,
            };
        },
        methods: {
            toggleVisibility() {
                if (this.isHidden) {
                    this.isHidden = false;
                } else {
                    this.isHidden = true;
                }
            }
        }
    };
</script>