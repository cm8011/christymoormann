<template>
  <div>
    <section class="bg-white">
      <div class="content pt-3 pb-3">
        <h2 class="center uppercase color-body-font-light pb-2">Clients &amp; Projects</h2>
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
import addCommonFrontMatter from '~/plugins/addCommonFrontMatter'

export default {
  components: {
    'v-image': Image
  },
  data () {
    return {
      projects: Projects,
      description: "Here are some website projects I've worked on for small to medium-sized businesses covering industries such as real estate, hospitality, SaaS, and non-profit."
    }
  },
  computed: {
    path() {
      return `${this.content.url}/projects`;
    },
    title() {
      return `${this.content.name} | Clients & Projects`;
    }
  },
  head() {
    return this.addCommonFrontMatter(this);
  },
}
</script>


<style lang="scss" scoped>

</style>