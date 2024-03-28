<template>
  <main class="columns">
    <div class="column is-half">
      <MainContent />
    </div>
    <div class="column">
      <ContactForm />
    </div>


  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactForm from '@/components/ContactForm.vue';
import MainContent from '@/components/MainContent.vue';

export default defineComponent({
  name: 'App',
  components: {
    ContactForm,
    MainContent,
  },
});
</script>


<style>
#app {
  padding: 5rem;
  background-color: var(--black, #000);
}
</style>
