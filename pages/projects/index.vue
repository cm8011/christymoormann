<template>
  <div>
    <section class="bg-white">
      <div class="content pt-3 pb-3">
        <h2 class="center uppercase color-body-font-light pb-2">{{ title }}</h2>
        <div class="col-3">
          <div v-for="project in projects" :key="project.id" class="box center">
            <v-image :src="project.info.thumb" class="pb-1" :alt="`Screenshot of ${project.info.name}`" />
            <h3 class="font-24 color-brown uppercase">{{ project.info.name }}</h3>
            <span class="uppercase font-13 pb-1">{{ project.info.industry }}</span>
            <p>{{ project.info.summary }}</p>
            <nuxt-link :to="`/projects/${project.id}`" class="flat-button" :title="`Read more about ${project.info.name}`">Read more &#62;</nuxt-link>
          </div>  
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Image from '~/components/Image'
import Projects from '~/assets/projects'

export default {
  components: {
    'v-image': Image
  },
  data () {
    return {
      projects: Projects,
      title: "Clients & Projects"
    }
  }
}
</script>


<style lang="scss" scoped>
@import '../../assets/variables';

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