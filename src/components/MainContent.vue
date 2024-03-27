<template>
    <div class="content">
        <img src="../assets/image/Logo.png" alt="Logo Compass Uol">
        <div class="title">
            <h2 class="text">
                Lets discuss on something
                <span class="text-color">
                    COOL
                </span>
                together
            </h2>
        </div>
        <div class="contact-info email">
            <img src="../assets/image/EnvelopeFill.png" alt="email icon" class="contact-img">
            challange@compass.com.br
        </div>
        <div class="contact-info phone">
            <img src="../assets/image/TelephoneFill.png" alt="phone icon" class="contact-img">
            +12 3456 3789
        </div>
        <div class="contact-info address">
            <img src="../assets/image/Vector.png" alt="address icon" class="contact-img">
            123 Street 456 House
        </div>
    </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'MainContent',

})
</script>

<style scoped>
.content {
    background: var(--black, #000);
    width: 100%;
    height: 100vh;
    margin-top: 10%;
}

img {
    margin-right: 6.25rem;
}

.text {
    color: var(--white, #FFF);
    font-weight: bold;
    font-family: var(--font);
    margin: 6rem 0rem 6rem 0rem;
}

.contact-img {
    margin-right: 1rem;
}

.contact-info {
    color: var(--white, #FFF);
    font-size: 1.25rem;
    font-family: var(--font);
    margin: 1.5rem;
}

.text-color {
    color: var(--yellow, #FFCE00);
}

@media only screen and (max-width: 768px) {
    .content {
        padding: 2.5rem;
        height: auto;
    }
}
</style>