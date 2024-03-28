<template>
    <form class="box" @submit.prevent>
        <InterestedButton @selected="form.interest = $event" />
        <div class="control">
            <input v-model="form.name" type="text" class="input" placeholder="Your name" required>
        </div>
        <div class="control">
            <input v-model="form.email" type="email" class="input" placeholder="Your email" required>
        </div>
        <div class="control">
            <input v-model="form.message" type="text" class="input" placeholder="Your message" required>
        </div>
        <button class="button" @click="sendContact">
            <img src="../assets/image/Send.png" alt="icon Send message">
            Send Message
        </button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InterestedButton from "../components/InterestedButton.vue";
import http from "@/http"

export default defineComponent({
    name: 'ContactForm',
    components: {
        InterestedButton,
    },
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: '',
                interest: ''
            },
        }
    },
    methods: {
        async sendContact() {
            await http.post('/contact', this.form)
                .then((response) => {
                    console.log(response);
                    alert(response.data.msg)
                })
                .catch((responseError) => {
                    console.log(responseError);
                    alert(responseError.response.data.detail[0].msg)
                })
        }
    }
});
</script>

<style scoped>
.box {
    background: var(--yellow, #FFCE00);
    padding: 4.5rem 3rem 4.5rem 3rem;
    border-radius: 2.5rem 0rem 2.5rem 0rem;
}

input {
    background: none;
    font-size: 1.5rem;
    display: block;
    padding: 0;
    border: none;
    border-radius: 0;
    border-bottom: 0.125rem solid #000;
    box-shadow: none;
}

input::placeholder {
    color: #000;
}

.control {
    margin: 0rem 0rem 3rem 0rem;
}

button {
    background-color: var(--black, #000);
    color: var(--white, #FFF);
    width: 100%;
    font-size: 1.25rem;
    font-family: var(--font);
    padding: 1.75rem;
    text-align: center;
    border-radius: 1rem;
}

button:hover {
    color: var(--white, #FFF);
    border-color: none;
}

img {
    margin-right: 1rem;
}
</style>
