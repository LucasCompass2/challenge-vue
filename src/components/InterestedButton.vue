<template>
    <main class="interested-button">
        <section>
            <div class="title">
                <span class="interested-title">
                    I'm interested in...
                </span>
            </div>
            <button v-for="interest in interested" :key="interest"
                :class="['button', { 'button-select': select === interest }]" @click="selected(interest)">
                {{ interest }}
            </button>
        </section>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'InterestedButton',
    emits: ['selected'],
    data() {
        return {
            interested: ['Front-end', 'Back-end', 'Mobile', 'AI', 'Other'],
            select: '',
            interest: ''
        }
    },
    methods: {
        selected(interest: string) {
            this.select = interest
            this.interest = interest;
            this.$emit('selected', this.interest)
        }
    },
})
</script>

<style scoped>
.interested-title {
    font-size: 2rem;
    font-family: var(--font);
    font-weight: bold;
    color: var(--black, #000);
}

.button {
    background: none;
    font-size: 1.5rem;
    color: var(--black, #000);
    border: 0.125rem solid var(--black, #000);
    margin: 0rem 1rem 1rem 0rem;
    width: 10rem;
    padding: 1rem 0rem 1rem 0rem;
}

.button-select {
    background-color: var(--black, #000);
    color: var(--orange, #FF8000);
    border: none
}
</style>