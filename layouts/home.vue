<template>
  <div class="body">
    <v-header></v-header>
    <main>
      <profile-image></profile-image>
      <nuxt/>
    </main>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import ProfileImage from '~/components/ProfileImage'

export default {
  components: {
    'v-header': Header,
    'v-footer': Footer,
    ProfileImage
  }
}
</script>


<style lang="scss">
@import '../assets/variables';

html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.body {
  background-color: $white2;
  color: $body-font-color;
  font-family: $ubuntu-font-family;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  grid-template-areas: 
  "header"
  "main"
  "footer";
  min-height: 100vh;
  position: relative;
}
main {
  grid-area: main;
}

section {
  display: grid;
  grid-template-columns: 10% auto 10%;
  grid-template-areas:
  ". content .";
  @media screen and (max-width: $medium) {
    grid-template-columns: 1rem auto 1rem;
  } 
  .content {
    grid-area: content;
  }
}

</style>


