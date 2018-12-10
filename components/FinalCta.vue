<template>
  <section class="bg-white2">
    <div class="content pb-3">
      <div class="profile-image">
        <div></div>
        <div>
          <div class="img-center">
            <v-image src="../images/profile-img.png" alt="" />
          </div>
        </div>
        <div></div>
        <div></div>
        <div class="center">
          <p class="pt-1">I am a UX Designer skilled at all aspects of the design process from user research to front-end code.</p>
          <i class="fab fa-linkedin mr-05"></i><a class="link" href="https://www.linkedin.com/in/christymoormann/" target="_blank" title="Visit my LinkedIn page">Learn more on LinkedIn</a>
        </div>
        <div></div>
      </div>
    </div>
  </section>
</template>

<script>
import Image from '~/components/Image'

export default {
  components : {
    'v-image': Image
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/variables';

.profile-image {
  align-items: center;
  display: grid;
  grid-template-columns: 40% 20% 40%;
  @media screen and (max-width: $medium) {
    grid-template-columns: 1fr;
  }
  > div:first-child, > div:nth-child(3) {
    background-color: $pink;
    height: 1px;
    width: 100%;
  }
  > div:nth-child(2) {
    margin: 0 auto;
    text-align: center;
    img {
      border: 1px solid $pink;
      padding: 1rem;
      margin: 1rem auto;
      @media screen and (max-width: $medium) {
        padding: .25rem;
      }
    }
  }
}

</style>
